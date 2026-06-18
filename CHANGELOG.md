# Changelog – GROWCTRL Cards

Mit **4.0.0** zurückgesetzt (Konzept-Umbau „eine Station = eine Pflanze").
Die Karten sind als ein gemeinsames HACS-Bundle versioniert.

---

## [4.12.1] — 2026-06-17

- **Logo/Bild-URL robuster:** GitHub-`…/blob/…`- bzw. `…/raw/…`-Links (HTML-Seiten) werden automatisch auf die direkte `raw.githubusercontent.com`-Datei umgeschrieben. Logos/Bilder aus einem Repo laden jetzt zuverlässig – und die GitHub-Cookie-Warnungen im Browser entfallen. Lokale `/local/…`-Pfade und andere URLs bleiben unverändert.

---

## [4.12.0] — 2026-06-17

- **Chart-Zeitachse:** Die X-Achse aller Karten-Charts (Zelt, Hero, Metrik, Sensoren) skaliert jetzt mit der eingestellten Stundenzahl; längere Zeiträume sind feiner aufgelöst.
- **Trendpfeile:** reagieren auf ein kurzes jüngstes Zeitfenster (≈ letzte Stunde) statt über die halbe Historie – deutlich schneller.
- **Stations-Kopfzeile:** Titel + Buttons in einer Zeile, Untertitel (Pflanze · Leistung · Status) darunter über die volle Breite – kein zerrissenes Layout mehr auf dem Handy.
- **Zelt-Karte:** Im Klima-Automatik-Modus (Pflanzen-Gewichtung) ist das Phasen-Dropdown gesperrt und zeigt „Automatik" mit Schloss – passend zur Integration.
- **Hero-Karte:** Logo/Bild-URL funktioniert wieder zuverlässig (Fehler-State wird bei URL-Änderung zurückgesetzt).
- **Station:** Protokoll-Bereich standardmäßig eingeklappt.

---

## [4.11.0] — 2026-06-17

- **Editor-Initialisierung – Fix:** „Standard an“-Schalter (VPD-Chart, Sensoren-/Steuerungs-/Zelt-Sektion, Einstellungen, Protokoll) zeigten bei noch nicht gesetztem Wert fälschlich AUS, obwohl die Karte den Inhalt anzeigt. Der Editor spiegelt jetzt den echten Default.
- **Stations-Kopfzeile:** bricht auf schmalen Handys sauber um statt unter die Kopf-Buttons zu laufen (Karten-Kopf oben ausgerichtet).
- **Stations-Aktoren:** Icon/Name/Status skalieren mit – auf dem PC nicht mehr winzig.
- **Hero-Karte:** Zelt/Klima-Schalter gleichmäßig verteilt (wie die Zelt-Karte).
- **Zelt-Karte:** Pfeil im Phasen-Dropdown rechtsbündig.

---

## [4.10.0] — 2026-06-17

- **Stations-Kopfzeile** zeigt jetzt **Pflanze · Leistung · Status** statt des Tages
  (der Tag steht bereits im Phasen-Dropdown). Die Leistung erscheint nur, wenn ein
  Leistungssensor konfiguriert ist; generische Stationen ohne Pflanze zeigen Leistung · Status.
- **Klima-Phase-Dropdown der Zelt-Karte** mit deutschen Labels
  (Automatik / Anzucht / Wachstum / Blüte / Trocknung) – wie in der Stations-Karte.
- **Ziel-Kacheln in der Zelt-Karte:** im Automatik-Klimamodus zeigen „Ziel VPD“, „Ziel RH“
  (und „Ziel Temp“ bei Heizung) die berechneten Sollwerte; klickbar für Verlauf/Details.

> Reines Karten-Update – die Integration bleibt 4.9.0 (kein HA-Neustart nötig, nur Browser-Cache leeren).

---

## [4.9.0] — 2026-06-17

- **Automatik-Klimamodus (pflanzengesteuert), pro Zelt umschaltbar** (im Setup und im
  Options-Dialog, ohne Neustart):
  - **Automatik:** die Klima-Sollwerte (VPD/RH/Temp) werden aus den Pflanzen der Stationen
    **gewichtet** berechnet – 1 Station = 1 Stimme, je Station Pflanze × aktuelle Phase
    (Phase „Aus“ zählt nicht mit). Die Klima-Phase ist dann fest „Auto“; die manuellen
    Sollwert-Number-Entitäten entfallen.
  - **Manuell:** unverändertes bisheriges Verhalten (selbst definierte Sollwerte je Phase).
  - **Migration:** bestehende Zelte bleiben auf **Manuell** (keine Überraschung beim Update),
    neue Zelte starten auf **Automatik**.
- **Ziel-Sensoren (nur Automatik):** „Ziel VPD“ und „Ziel RH“ (Zustand = Bandmitte, `min`/`max`
  als Attribute), „Ziel Temp“ bei vorhandener Zelt-Heizung. Der VPD-Sensor liefert die berechneten
  Sollwerte zusätzlich im Attribut `sollwerte` – bestehende Karten zeigen sie damit automatisch.
- **Beispiel `examples/plants.example.yaml`:** vollständige Kopie aller eingebauten Presets als
  Vorlage für die optionale `/config/growctrl/plants.yaml`.

---

## [4.8.0] — 2026-06-17

- **Optionale Pflanzen-Datei:** `/config/growctrl/plants.yaml` (oder `.json`) kann eigene Pflanzen
  ergänzen oder eingebaute überschreiben (pH, EC, DLI, Phasentage und Klima-Ziele je Phase). Fehlt die
  Datei oder ein einzelnes Feld, gelten die eingebauten Presets als Fallback (deep-merge). Die
  Pflanzen-Dropdowns lesen die zusammengeführte Liste.
- **Presets um Klima-Ziele erweitert:** jede Pflanze trägt jetzt VPD-/RH-/Temp-Sollwerte je Phase –
  Grundlage für den kommenden pflanzengesteuerten Automatik-Klimamodus (Stufe 2).
- **Service `growctrl.reload_plants`:** lädt die Pflanzen-Datei zur Laufzeit neu und aktualisiert die
  Dropdowns ohne Neustart.

---

## [4.7.0] — 2026-06-16

- **Aktive Zelt-Heizung (Klimasteuerung):** die Zelt-Heizung (`heater_switches`) wird jetzt aktiv geregelt –
  **Zweipunkt mit Hysterese** auf den Zelt-Temp-Sensor, **Temperatur-Ziel je Phase** (neue Number-Entitäten,
  nur wenn eine Heizung konfiguriert ist) + **Hysterese**. Komplette Sicherheitskette wie bei der Heizmatte:
  Sperre (Zelt/Klima aus → aus), Sensor-Guard, Übertemperatur-Not-Aus (Ziel+5 K bzw. 40 °C), Plausibilitäts-
  Watchdog. Befeuchter/Entfeuchter/Abluft arbeiten unverändert weiter mit den vorhandenen Schaltern.
- **Karten skalieren nach Kartenbreite (Container-Queries):** die responsive Größenanpassung hängt jetzt an der
  **echten Kartenbreite** statt am Viewport. Dadurch passt **jede Karte** in jeder Breite – inkl. der schmalen
  Karten-Picker-Vorschau, in der vorher Werte/Beschriftungen über den Rand liefen.

## [4.6.0] — 2026-06-16

- **Sensor-Karte – pH/EC mit Zonen direkt aus der Integration:** neue Felder **Zelt + Station**;
  pro Chart eine **Quelle** (eigener Sensor / **pH** / **EC**) und eine **Darstellung**
  (**Verlauf** als Linie mit Sollband ODER **Zonen-Balken** schlecht/ideal/gut wie in der
  Station-Karte). Bei pH/EC kommen Wert und Bereiche automatisch aus der **gewählten Pflanze** –
  kein Sensor nötig.
- **Karten-Vorschau – Hero & KPIs:** KPI-Werte skalieren jetzt nach **Kartenbreite** (Container-Query)
  statt nach Viewport; in der schmalen Karten-Picker-Vorschau laufen Wert/Einheit nicht mehr über den
  Rand.

## [4.5.0] — 2026-06-16

- **Station-Karte – Pflanze in die Einstellungen:** das Pflanzen-Dropdown sitzt jetzt schlicht im
  Einstellungsbereich (Zahnrad); die **Phase** steht oben wieder in voller Breite.
- **Station-Karte – Tag im Kopf:** unter dem Namen erscheint neben dem Status der aktuelle Tag
  (z. B. „Tag 105 · Alles OK").
- **Aktor-Icons:** O₂/Sauerstoff nutzt jetzt ein zuverlässiges Icon (`mdi:gas-cylinder`); neuer
  Aktor-/Control-Typ **Entfeuchter** (eigenes Icon + Farbe) im Art-Dropdown.
- **Fix:** Editor-Schalter „Einstellungen-Zahnrad" und „Protokoll-Auszug" stehen jetzt korrekt auf AN,
  passend zur Karte (vorher Mismatch: Karte zeigte das Zahnrad, der Schalter stand auf AUS).

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
