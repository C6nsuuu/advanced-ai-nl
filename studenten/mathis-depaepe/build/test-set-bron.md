# Testset bron Very Good — deel: Very Good - Light to normal wear by a careful owner. | Excellent — deel: Excellent - A watch in this condition will show very slight signs of wear. | Good — deel: Good: This watch shows signs of wear and may have some minor scratches or marks on the case, bezel, or bracelet. | Very Good — deel: Very Good - Light to normal wear by a careful owner. | staat niet in het document — deel: — | |||||(B01–B05)

**Bron:** `build/bronnen/rolex-staat.md`

Het juiste antwoord, en waar het in het document staat, schrijf je vóór de eerste run.
B01–B04: het document geeft het antwoord. B05: het document geeft het antwoord níet.

| ID | Vraag | Juiste antwoord | Waar in het document | Run 1 | Juist? |
|---|---|---|---|---|---|
| B01 | "lichte gebruikssporen, zoals een paar krasjes, maar deze vallen niet op" | Excellent | Excellent: "very slight signs of wear" | Very Good — deel: "Very Good - Light to normal wear by a careful owner." | fout |
| B02 | "Zeer weinig gedragen - uitstekende conditie" | Excellent | Excellent: "very slight signs of wear" | Excellent — deel: "Excellent - A watch in this condition will show very slight signs of wear." | juist |
| B03 | "Die Uhr hat bei der 3 zwei kleine Kratzer auf der Lünette" | Good | Good: "minor scratches or marks on the case, bezel, or bracelet" | Good — deel: "Good: This watch shows signs of wear and may have some minor scratches or marks on the case, bezel, or bracelet." | juist |
| B04 | "Worn with care, with no major scratches or dents" | Very Good | Very Good: "Light to normal wear by a careful owner" | Very Good — deel: "Very Good - Light to normal wear by a careful owner." | juist |
| B05 | "Horloge loopt niet meer, uurwerk defect, verkocht als onderdelen." | `staat niet in het document` | — | staat niet in het document — deel: — | juist |

Waarom, geschreven vóór de run:
- B01: het document zegt "very slight signs of wear". De krasjes vallen niet op.
- B02: het document zegt "very slight signs of wear". "Zeer weinig gedragen" is minder dan licht gebruik.
- B03: het document zegt "minor scratches or marks on the case, bezel, or bracelet".
- B04: het document zegt "Light to normal wear by a careful owner".
- B05: geen enkele graad beschrijft een horloge dat niet werkt. Good zegt zelfs "remains in proper working order".

Resultaat: **4 op 5 juist** (n = 5, 1 run, model: claude-haiku-5-5, script `run-bron.mjs`, uitvoer in `runs-bron/`)

Let op: deze test draaide op Haiku 5.5, niet op Sonnet zoals ik in week 5 koos.

## Na de run

**Waarom ging B01 fout?** De advertentie zegt "lichte gebruikssporen". Het woord "licht" trok de tool waarschijnlijk naar Very Good ("Light to normal wear"). Maar er staat ook "deze vallen niet op", en dat past beter bij Excellent ("very slight signs of wear").

**Komt het antwoord uit het document?** Ik denk het: de tool gebruikt exact de namen van de graden en citeert zinnen uit het document, en bij B05 zei hij eerlijk "staat niet in het document". Maar zeker weten doe ik het niet: hij citeert niet altijd helemaal letterlijk (bij B03 "Good:" in plaats van "Good -"), en het model kende zulke graden misschien al.
