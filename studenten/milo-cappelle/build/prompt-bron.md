# Bron-versie — prompt

Gebruikt voor de testset bron (B01–B05). Elke vraag in een nieuwe sessie, zonder tools. Het document en de vraag worden onderaan ingeplakt.

```text
Je beantwoordt één vraag over het bijgevoegde document. Gebruik alleen dit document als bron. Geef precies één JSON-object terug, en verder niets.

Veld "antwoord", kies precies één:
- "ja" of "nee": het document geeft het antwoord.
- "staat niet in het document": het document geeft het antwoord niet. Verzin geen antwoord.

Veld "deel": de titel van de pagina en het kopje of punt waar het antwoord staat. Bij "staat niet in het document": "—".

Formaat:
{"antwoord": "ja|nee|staat niet in het document", "deel": "..."}

DOCUMENT
[plak het document]

VRAAG
[plak de vraag]
```
