from typing import Union
from fastapi import FastAPI
from fastapi.responses import FileResponse, PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

# Gesamtdatensatz initial aus CSV laden
data = pd.read_csv('../daten/Gesamtdatensatz.csv')

# Notwendig, weil der Browser sonst den Zugriff auf die API wegen der CORS policy nicht erlaubt
# Fügt folgnden Header zur Response hinzu: Access-Control-Allow-Origin: * 
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

@app.get("/standorte")
def get_standorte():
    # lädt die GeoJSON-Datei mit den Standorten und gibt sie direkt zurück
    return FileResponse(path='../daten/hystreet_locations.json')

@app.get("/fokusfrage")
def get_fokusfrage():
    data_april = data[(data['timestamp'] >= '2024-04-01') & (data['timestamp'] <= '2024-04-31')]
    # Pivot Tabelle
    pivot = pd.pivot_table(
        data_april,
        index='location_name',
        values=['pedestrians_count', 'child_pedestrians_count', 'adult_pedestrians_count'],
        aggfunc='sum',
        fill_value=0
    ).reset_index()
    # Spalten umbenennen
    pivot = pivot.rename(columns={
        'location_name': 'Standorte', 
        'child_pedestrians_count': 'Anzahl Kinder',
        'adult_pedestrians_count': 'Anzahl Erwachsene',
        'pedestrians_count': 'Total',
    })
    # Anteil Kinder berechnen
    pivot['Anteil Kinder'] = (pivot['Anzahl Kinder'] / pivot['Total'])
    # NaN-Werte durch 0 ersetzen (wegen möglicher Division durch 0 wenn Total 0 ist)
    pivot = pivot.fillna(0)
    # In JSON umwandeln
    json = pivot.to_json(orient='records')
    # Direkt als Inhalt zurückgeben mit Media-Type 'application-json' 
    return PlainTextResponse(content=json, media_type='application/json')
