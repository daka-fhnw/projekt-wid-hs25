from fastapi import FastAPI
from fastapi.responses import FileResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from datetime import date

# FastAPI initialisieren
app = FastAPI()

# Notwendig, weil der Browser sonst den Zugriff auf die API wegen der CORS policy nicht erlaubt
# Fügt folgnden Header zur Response hinzu: Access-Control-Allow-Origin: * 
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

# Gesamtdatensatz initial aus CSV laden, damit dies nicht bei jedem Request nötig ist
full_data = pd.read_csv('../daten/Gesamtdatensatz.csv')

# Filtert Daten nach Datumsbereich
def filtern_nach_datum(data: pd.DataFrame, datum_von: date, datum_bis: date):
    datum_von_text = datum_von.isoformat()
    datum_bis_text = datum_bis.isoformat()
    return data[(data['timestamp'] >= datum_von_text) & (data['timestamp'] <= datum_bis_text)]

# Filtert Daten nach Stundenbereich unabhängig vom Datum
def filtern_nach_stunde(data: pd.DataFrame, stunde_von: int, stunde_bis: int):
    stunden = pd.to_datetime(data['timestamp']).dt.hour
    return data[(stunden >= stunde_von) & (stunden <= stunde_bis)]

# Filtert Daten nach Temperaturbereich
def filtern_nach_temperatur(data: pd.DataFrame, temperatur_von: int, temperatur_bis: int):
    return data[(data['temperature'] >= temperatur_von) & (data['temperature'] <= temperatur_bis)]

# Lädt die GeoJSON-Datei mit den Standorten und gibt sie direkt zurück
@app.get("/standorte")
def get_standorte():
    return FileResponse(path='../daten/hystreet_locations.json')

# Gibt für einen Datumsbereich den Anteil Kinder in % und weitere Werte pro Standort zurück
@app.get("/standorte/kinder-anteil")
def get_standorte_kinder_anteil(
    datum_von: date = date(2000, 1, 1),
    datum_bis: date = date(9999, 12, 31),
):
    # Gesamtdatensatz nach Datumsbereich filtern
    data = filtern_nach_datum(full_data, datum_von, datum_bis)
    # Gruppieren und summieren der relevanten Spalten nach Standort
    data = data.groupby(['location_name'], as_index=False)[[
        'child_pedestrians_count',
        'adult_pedestrians_count',
        'pedestrians_count',
    ]].sum()
    # Spalten umbenennen als Vorbereitung für das Diagramm
    data = data.rename(columns={
        'location_name': 'Standort',
        'child_pedestrians_count': 'Anzahl Kinder',
        'adult_pedestrians_count': 'Anzahl Erwachsene',
        'pedestrians_count': 'Anzahl Passanten',
    })
    # Anteil Kinder in % pro Standort berechnen
    data['Anteil Kinder'] = data['Anzahl Kinder'] / data['Anzahl Passanten']
    # NaN-Werte in Spalte 'Anteil Kinder' durch 0 ersetzen
    data['Anzahl Kinder'] = data['Anzahl Kinder'].fillna(0)
    # In JSON umwandeln
    json = data.to_json(orient='records')
    # Direkt als Inhalt zurückgeben mit Media-Type 'application-json' 
    return PlainTextResponse(content=json, media_type='application/json')

# Gibt für verschiedene Filterkriterien die Anzahl Passanten pro Standort zurück
@app.get("/standorte/passanten-anzahl")
def get_standorte_passtanten_anzahl(
    datum_von: date = date(2000, 1, 1),
    datum_bis: date = date(9999, 12, 31),
    stunde_von: int = 0,
    stunde_bis: int = 23,
    temperatur_von: int = -20,
    temperatur_bis: int = 40,
):
    # Gesamtdatensatz nach Datumsbereich und danach nach weiteren Kriterien filtern
    data = filtern_nach_datum(full_data, datum_von, datum_bis)
    data = filtern_nach_stunde(data, stunde_von, stunde_bis)
    data = filtern_nach_temperatur(data, temperatur_von, temperatur_bis)
    # Gruppieren und summieren der relevanten Spalten nach Standort
    data = data.groupby(['location_name'], as_index=False)[[
        'pedestrians_count',
    ]].sum()
    # Spalten umbenennen als Vorbereitung für das Diagramm
    data = data.rename(columns={
        'location_name': 'Standort',
        'pedestrians_count': 'Anzahl Passanten',
    })
    # In JSON umwandeln
    json = data.to_json(orient='records')
    # Direkt als Inhalt zurückgeben mit Media-Type 'application-json' 
    return PlainTextResponse(content=json, media_type='application/json')
