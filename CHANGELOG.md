# Changelog – GROWCTRL Cards

Mit **4.0.0** zurückgesetzt (Konzept-Umbau „eine Station = eine Pflanze").
Die Karten sind als ein gemeinsames HACS-Bundle versioniert.

---

## [4.4.0] — 2026-06-16

- **Karten-Vorschauen** im Picker zeigen jetzt Demo-Daten (Sensors, Controls, Status, History) –
  gefüllt statt leer beim Hinzufügen.
- Passt zum neuen Integration-Service `growctrl.import_config` (Backup-Wiederherstellung).

## [4.3.0] — 2026-06-16

- **Tank-Reichweiten-Prognose** in Station- und Tank-Karte („Reichweite: ~X Tage“ aus dem Verbrauch).
- **Neue Schnell-Aktionen-Karte** (`growctrl-actions-card`): konfigurierbare Buttons, die Services aufrufen
  (z. B. „alle Lichter aus“ oder `growctrl.export_config`) – mit optionaler Bestätigung.

## [4.2.0] — 2026-06-16

- **Trend-Indikatoren als einheitliche Dreiecke** (hoch / waagerecht / runter) an den Sensorwerten,
  am PC größer dargestellt.
- Versionssprung erzwingt das Neuladen der Karten-Datei (umgeht den Browser-/HACS-Cache), damit die
  4.1.0-Funktionen (deutsche Phasen + Tagesgrenzen, Expander-Standard im Editor, pH/EC-Verlaufs-Charts)
  zuverlässig sichtbar werden.

## [4.1.0] — 2026-06-16

- **Deutsche Phasennamen + „· bis Tag X" pro Pflanzenart** im Phasen-Dropdown der Stations-Karte
  (Blattgemüse/Kräuter ohne Blüte/Spülen).
- **Stations-Karte:** Editor-Schalter **„Bereiche beim Laden geöffnet"** (Standard: zu).
- **Sensor-Karte:** optionale **Verlaufs-Charts** (z.B. pH & EC) mit Sollband, GUI-konfigurierbar.
- **Trendpfeile → Dreiecke** (hoch/waagerecht/runter).

## [4.0.1] — 2026-06-15

- **Aktoren-Bereich** klappt **nicht mehr bei jedem Aufruf von selbst auf** (alle Bereiche standardmäßig zu).
- **Responsive Info-Größe verstärkt** – Versorgungszeilen, Sensorwerte, Überschriften **und Statuspunkte**
  skalieren deutlicher mit der Kartenbreite (PC spürbar größer als Handy).
- Versionssprung umgeht den Browser-/HACS-Cache (alte `growctrl-cards.js` wird sonst weiterverwendet).

## [4.0.0] — „Station = Pflanze": neue Stations- und CheckUp-Karte

- **Stations-Karte neu.** Zwei Dropdowns (Pflanze + Phase mit **Tagzähler**), **Phasen-Empfehlung**
  als Text (leer, wenn alles passt), Reihenfolge **Licht → DLI → Heizmatte → Pumpe → Tank**,
  Aktoren (4/Reihe), **Sensorwerte** (pH/EC als Zonen-Balken aus dem Pflanzen-Preset, Temp/RH als
  Mini-Verlauf, Wasser-/Bodentemperatur – nur was konfiguriert ist), **Protokoll-Auszug** (letzte 3)
  und gruppierter Einstellbereich. Heizungszeile mit Schalter, der bei Gate/Automatik/Wartung
  **gesperrt** dargestellt wird.
- **CheckUp-Karte neu.** **Sensor-Gesundheit** je Station (pH/EC/Temp/RH/Wasser-/Bodentemperatur):
  grün im Idealbereich, gelb knapp daneben, rot Problem, grau kein Wert, leere Zelle = kein Sensor.
  **Zelt** und **Station** getrennt; **Steuerung** kompakt dabei; **Legende**. Die frühere
  Pflanzen-Matrix (aus `plant_count`) entfällt.
- **Editoren verschlankt.** Stations-Editor: nur noch extra Sensoren/Aktoren (pH/EC-Bereiche und
  Pflanzen-Felder entfallen – kommt aus dem Preset). CheckUp-Editor: Stationsliste + Sektions-Schalter.
- **Idealbereiche aus der Integration.** pH/EC sind reine Lesewerte; die Färbung kommt aus dem
  Pflanzen-Preset (Systemtyp + Pflanze) über den Datenbus der Station.
- **Phase „Aus".** Stoppt die Station in der Karte (nur noch Protokoll sichtbar). Gate aus / „Aus"
  haben **Vorrang** vor positiven Ereignissen – der Status bleibt ehrlich „gestoppt".
- **8 Farb-Konzepte** (Paletten) im Stil-Editor; Transparenz bleibt Karten-Option.
- **Livestream/Bild** in der Stations-Karte (Kamera-Entität oder Bild-URL).
- **Trendpfeile** skalieren **dynamisch in Größe und Farbe** mit der Trendstärke; pH-**Trendlinie**;
  **Sensorkacheln** vollständig anklickbar.
- **Stations-Karte mit Expandern:** Aktoren, Sensorwerte und Protokoll einzeln **klappbar** –
  zugeklappt nur Statuspunkte (Temp/RH mit Wert), kompakte Aktor-Punkte bzw. neuester Log-Eintrag.
- **Aufgaben** der Station (aus der Zelt-Aufgabenliste) als klappbarer Bereich; Tippen erledigt sie.
- **Responsive Info-Größe:** Versorgungszeilen, Sensorwerte und Überschriften skalieren mit der Kartenbreite
  (Handy kompakt, PC größer); Trendpfeile zusätzlich nach Gerät.
- **„Keimstart zurücksetzen"** direkt aus den Stations-Einstellungen (nutzt die neue Button-Entität).
- **Schloss-Symbol** bei „Bestätigen"-Aktoren (Stations- + Aktoren-Karte).
- **CheckUp:** leere, nicht klickbare Zellen bei fehlenden Entitäten; bei **Gate aus** oder Phase
  **„Aus"** werden **alle** Punkte der Station (inkl. Sensoren) **ausgegraut**; **Legende unten**.
- **Lizenzfeld korrigiert** (`package.json`): **GC-SAL-1.0** (zuvor versehentlich „MIT").

Konfiguration je Karte:
[`cards/README.md`](https://github.com/MrDarkvoid/growctrl/blob/main/cards/README.md).
