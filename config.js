// Hier deine Supabase-Daten eintragen (Dashboard → Project Settings → API).
// Der "anon"/"publishable" Key darf öffentlich sein – die Daten schützt die Datenbank selbst (Row Level Security).
// NIEMALS den "service_role"/"secret" Key hier eintragen!
window.KRAFTBUCH_CONFIG = {
  url: 'https://DEIN-PROJEKT.supabase.co',
  anonKey: 'sb_publishable_QIfHVKjYjPbSPTmo-Hb8eQ_KoHda8GV',
  // Login mit Benutzername: aus "kim" wird intern "kim@kraftbuch.local".
  // Lege den Benutzer in Supabase genau mit dieser Adresse an.
  benutzerDomain: 'Fitness-App.local'
};
