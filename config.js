// Hier deine Supabase-Daten eintragen (Dashboard → Project Settings → API).
// Der "anon"/"publishable" Key darf öffentlich sein – die Daten schützt die Datenbank selbst (Row Level Security).
// NIEMALS den "service_role"/"secret" Key hier eintragen!
window.KRAFTBUCH_CONFIG = {
  url: 'https://DEIN-PROJEKT.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcW5udHlka3VwZXBnbW14eWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4MTM4MjcsImV4cCI6MjEwNzM4OTgyN30.gGQMHNaV9lAG-F338dwHn6qx6aSbaBBXnTzaNZYoLsA',
  // Login mit Benutzername: aus "kim" wird intern "kim@kraftbuch.local".
  // Lege den Benutzer in Supabase genau mit dieser Adresse an.
  benutzerDomain: 'kraftbuch.local'
};
