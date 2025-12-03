# Projektarbeit Modul 3050 Webprogrammierung und interaktive Datenvisualisierung

## Autoren

- Gabriel Blaas (gabriel.blaas@stundetns.fhnw.ch)
- Daniel Käser (daniel.kaeser@students.fhnw.ch)

## Thema und Kontext

Seit 2021 erhebt die Stadt Zürich mit Hilfe von Laserscannern die Passantenfrequenzen an vier Standorten entlang der Bahnhofsstrasse in Zürich. Die Beteiligten erhoffen sich Erkenntnisse über das Konsum- und Shoppingverhalten. Mithilfe der Daten können zukünftig Entscheidungen für die Stadtentwicklung, den Einzelhandel und die Immobilienwirtschaft getroffen werden. Die Passantenfrequenz ist beispielsweise ein zuverlässiger Indikator für mögliche Umsätze im Einzelhandel und somit auch für die Miete der Verkaufsflächen.

Die Daten sind frei verfügbar über das [Open Data Portal der Stadt Zürich](https://data.stadt-zuerich.ch/dataset/hystreet_fussgaengerfrequenzen). Das Projekt ist ein Gemeinschaftsprojekt zwischen der Stadtentwicklung Zürich, der Vereinigung Zürcher Bahnhofsstrasse, Swiss Life Asset Managers sowie den Unternehmen CBRE und Hystreet.

## Projektziel

==TODO==

## Setup Entwicklungsumgebung

==TODO==

## Projektstruktur

Das Projekt ist in vier Unterverzeichnisse unterteilt, die nachfolgend beschrieben werden: [daten](#daten), [frontend](#frontend), [backend](#backend) und [altair](#vega-altair)

### Daten

Im Unterverzeichnis "daten" sind die Grundlagedaten für dieses Projekt abgelegt. Die Daten sind frei verfügbar über das [Open Data Portal der Stadt Zürich](https://data.stadt-zuerich.ch/dataset/hystreet_fussgaengerfrequenzen). Sie werden sowohl im [Backend](#backend) wie auch bei der Gestaltung der Diagramme via [Vega-Altair](#vega-altair) referenziert.

### Frontend

Im Unterverzeichnis "frontend" liegt die Umsetzung des Applikationsteils, der beim Benutzer im Browser läuft. Es handelt sich um eine Single-Page-Application, die basierend auf [React](https://react.dev/) und [Vite](https://vite.dev/) umgesetzt wurde. [Leaflet](https://leafletjs.com/) wird verwendet, um Karten darzustellen und [Vega](https://vega.github.io/vega/) für die Darstellung von Diagrammen.

#### Abhängigkeiten:

| Bibliothek    | Version\* |
| :------------ | --------: |
| leaflet       |     1.9.4 |
| react         |    19.1.1 |
| react-leaflet |     5.0.0 |
| react-vega    |     8.0.0 |
| vega-embed    |     7.1.0 |
| vega-lite     |     6.4.1 |
| vite          |     7.1.7 |

_\*getestet mit diesen Versionen, andere Versionen funktionieren möglicherweise auch_

### Backend

Im Unterverzeichnis "backend" liegt die Umsetzung der API, die aufbereitete Daten für das [Frontend](#frontend) bereitstellt. Ein Aufbereitung ist notwendig, da der Umfang des Gesamtdatensatzes zu gross ist, um diesen im [Frontend](#frontend) direkt verarbeiten zu können. Das Backend wurde mit [Python](https://www.python.org/) basierend auf [FastAPI](https://fastapi.tiangolo.com/) umgesetzt. Die Bibliothek [pandas](https://pandas.pydata.org/) dient dazu den Gesamtdatensatz zu laden, zu filtern und für die API aufzubereiten. Der Gesamtdatensatz ist im Unterverzeichnis [Daten](#daten) abgelegt.

#### Abhängigkeiten:

| Bibliothek  | Version\* |
| :---------- | --------: |
| pandas      |     2.3.3 |
| fastapi     |   0.123.5 |
| fastapi-cli |    0.0.16 |

_\*getestet mit diesen Versionen, andere Versionen funktionieren möglicherweise auch_

### Vega-Altair

Im Unterverzeichnis "altair" werden die im [Frontend](#frontend) mittels [Vega](https://vega.github.io/vega/) dargestellten Diagramme vorbereitet. Zur erleichterten Konfiguration der Diagramme wurde die Python-Bibliothek [Vega-Altair](https://altair-viz.github.io/) eingesetzt. Dazu wurden verschiedene [Jupyter Notebooks](https://jupyter.org/) erstellt, um das interaktive Experimentieren mit den Daten zu erleichtern. Zur Aufbereitung der Daten wurde die Python-Bibliothek [pandas](https://pandas.pydata.org/) verwendet. Am Ende der Jupyter Notebooks wird jeweils eine JSON-Datei generiert, die dann in Vega als "spec" verwendet werden kann.

#### Abhängigkeiten:

| Bibliothek | Version\* |
| :--------- | --------: |
| altair-all |     6.0.0 |
| pandas     |     2.3.3 |

_\*getestet mit diesen Versionen, andere Versionen funktionieren möglicherweise auch_
