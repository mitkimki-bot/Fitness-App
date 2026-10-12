# Kraftbuch – Trainingstagebuch fürs Studio

Kleine Web-App fürs Handy: Geräte anlegen, Sätze/Wiederholungen/Gewicht/Pause eintragen, Ziel fürs nächste Mal notieren, Körperwerte (Gewicht, Muskel %, Fett %, inneres Fett) verfolgen. Daten liegen in deiner Supabase-Datenbank, die App selbst läuft kostenlos auf GitHub Pages.

## 1. Supabase einrichten (ca. 5 Min.)

1. Im Supabase-Dashboard ein Projekt öffnen (oder neu anlegen, Region z. B. Frankfurt).
2. **SQL Editor** → neue Abfrage → kompletten Inhalt von `schema.sql` einfügen → **Run**.
3. **Authentication → Users → Add user → Create new user**: Als E-Mail `DEINBENUTZERNAME@kraftbuch.local` eintragen (z. B. `kim@kraftbuch.local`), Passwort wählen, „Auto Confirm User“ anhaken. In der App meldest du dich dann nur mit dem Benutzernamen (`kim`) und dem Passwort an. Supabase braucht intern eine E-Mail-Form; die Adresse muss nicht existieren, es werden keine Mails verschickt. Lehnt Supabase die Endung `.local` ab, nimm eine andere (z. B. `kraftbuch.app`) und trag sie in `config.js` bei `benutzerDomain` ein.
4. **Authentication → Sign In / Providers**: „Allow new users to sign up“ ausschalten, damit sich niemand Fremdes registrieren kann.
5. **Project Settings → API** (bzw. „API Keys“): die **Project URL** und den **anon / publishable Key** kopieren.

## 2. config.js ausfüllen

```js
window.KRAFTBUCH_CONFIG = {
  url: 'https://abcdefgh.supabase.co',
  anonKey: 'eyJ…'   // oder sb_publishable_…
};
```

Der anon/publishable Key darf öffentlich sein – die Datenbank lässt per Row Level Security nur dich an deine Daten. **Niemals** den `service_role`/`secret` Key eintragen.

## 3. Auf GitHub Pages veröffentlichen

1. Auf GitHub ein neues Repository anlegen, z. B. `kraftbuch` (öffentlich – Pages ist für private Repos nur mit Bezahl-Account möglich; es stehen keine Geheimnisse im Code).
2. **Add file → Upload files**: `index.html`, `config.js`, `manifest.json`, `icon.svg` hochladen (README und schema.sql optional) → Commit.
3. **Settings → Pages** → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten erreichbar unter `https://DEIN-NAME.github.io/kraftbuch/`.

## 4. Aufs Handy

Seite im Handy-Browser öffnen, anmelden, dann „Zum Home-Bildschirm hinzufügen“ – sie startet dann wie eine App.

## Weitere Personen & Verwaltung

Das Supabase-Dashboard ist der Admin-Bereich – in der App gibt es bewusst keinen.

- **Neue Person:** Authentication → Users → Add user, z. B. `anna@kraftbuch.local`, Startpasswort vergeben, „Auto Confirm User“ anhaken. Link zur App + Benutzername + Startpasswort weitergeben. Jeder sieht nur seine eigenen Daten.
- **Passwort ändern:** in der App oben rechts auf **Konto** → aktuelles und neues Passwort eingeben.
- **Passwort vergessen:** im Dashboard beim Benutzer ein neues Passwort setzen (Benutzer anklicken → Passwort ändern / „Reset password“ geht nicht, da die Adresse keine echte Mail ist).
- **Person entfernen:** Benutzer im Dashboard löschen – seine Daten werden automatisch mitgelöscht.
- Als Projektbesitzer kannst du im Dashboard technisch alle Daten einsehen.

## So funktioniert der Steigerungs-Hinweis

Pro Gerät legst du Sätze (z. B. 3), einen Wiederholungsbereich (z. B. 8–12) und die Gewichtsstufe (z. B. 2,5 kg) fest.

- Alle Sätze am oberen Ende (≥ 12) geschafft → **„Steigern auf X kg“**, das Gewicht ist im Formular schon vorausgefüllt.
- Alle Sätze unter dem unteren Ende (< 8) → Hinweis: halten oder etwas reduzieren.
- Sonst → Gewicht halten und Wiederholungen steigern.

Dein eigenes „Ziel fürs nächste Mal“ wird beim nächsten Eintragen oben angezeigt.
