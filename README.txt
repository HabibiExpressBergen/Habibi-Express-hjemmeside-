# Habibi Express – Single File Build

Dette er en enkeltfil-versjon (`index.single.html`) som inneholder alt nødvendig for å teste skjemaene raskt.
Bytt `action="https://formspree.io/f/your-form-id"` til din faktiske Formspree-lenke i alle tre skjema.

Endringer:
- Tittel/Header: “Habibi Express” + “Flytting uten stress”
- Skjema 1: “Tips oss om noen som skal flytte”
  * Rekkefølge: (1) Kundens telefon, (2) Utbetalingsmåte, (3) Utbetalingsinfo
- Skjema 2: “Bestill mini-oppdrag”
  * ‘Din kontakt’ -> ‘Telefonnummer’
  * Fjernet Budsjett, Etasje, Leilighet
- Skjema 3: Fastpris (beta) med bildefelt
- Telefonnr-pattern aksepterer +47, mellomrom og bindestrek
- Navn-felt aksepterer æøå
- Innebygd AJAX som viser tydelige feilmeldinger/suksess


---
Formspree oppsett
1) Gå til https://formspree.io/ og lag et skjema (Project -> New form). 
2) Kopiér din action-URL (ser ut som https://formspree.io/f/xxxxxyyy).
3) I `index.single.html`, bytt ut `https://formspree.io/f/your-form-id` i ALLE tre skjema.
4) Ferdig! Skjemaene sender nå, og om vellykket går brukeren til `success.html` (via skjult `_redirect`). 
5) På Netlify/GitHub Pages: legg til `404.html` i roten (inkludert her).

Tips:
- Vil du se AJAX-meldinger i stedet for redirect? Fjern/skjul `<input type="hidden" name="_redirect" ...>`.
- Formspree kan også kreve `Accept: application/json` (allerede satt i fetch), ellers kommer redirect direkte fra Formspree.
