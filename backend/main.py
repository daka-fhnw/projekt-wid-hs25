from typing import Union
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Notwendig, weil der Browser sonst den Zugriff auf die API wegen der CORS policy nicht erlaubt
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

@app.get("/locations")
def get_loactions():
    # lädt die GeoJSON-Datei mit den Standorten und gibt sie direkt zurück
    return FileResponse(path='../daten/hystreet_locations.json')
