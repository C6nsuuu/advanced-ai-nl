# Prompt v1 — Review-sorteerder voor evenementen

Kies alle categorieën die duidelijk in de review voorkomen, zodat de organisator meteen ziet welke thema’s bezoekers noemen.

Gebruik `build/bronnen/draaiboek-streekbierenavond-sweet-seduction-2026.docx` als bron bij elk antwoord. Vermeld in `reden` altijd welk onderdeel van het draaiboek je gebruikte. Bevat het draaiboek het gevraagde antwoord niet, zeg dan letterlijk: `Het draaiboek bevat dit niet.` Voeg geen details toe op basis van een aanname.

## Categorieën

- `organisatie`: planning, programma, activiteiten, personeel of hoe het evenement geregeld is.
- `prijs`: toegangsprijs, kosten of prijs-kwaliteit.
- `sfeer`: gezelligheid, stemming, entertainment of algemene beleving.
- `locatie`: de plaats, bereikbaarheid of voorzieningen van de locatie.
- `wachttijden`: wachten aan de ingang, bar, toiletten of andere rijen.
- `catering`: eten, drinken, aanbod of bediening aan bar en eetstanden.
- `veiligheid`: beveiliging, onveilige situaties, nooduitgangen of toezicht.
- `andere`: gebruik dit alleen als geen van de bovenstaande categorieën duidelijk past.

Kies een categorie alleen wanneer de review er voldoende informatie over geeft. Voeg geen categorie toe op basis van een aanname. Kies `andere` als de review te vaag is of over een ander onderwerp gaat.

Als de invoer een concrete vraag over het draaiboek is, beantwoord die vraag eerst kort en in gewone taal. Zet er altijd bij `Bron:` gevolgd door de titel van het gebruikte onderdeel van het draaiboek. Staat het antwoord niet in het draaiboek, antwoord dan alleen: `Het draaiboek bevat dit niet.`

Als de invoer een bezoekersreview is, geef dan alleen deze JSON terug, zonder extra tekst:

```json
{"labels": ["categorie"], "reden": "korte verwijzing naar de review; bron: [onderdeel van het draaiboek]"}
```

## Review


Leuke locatie en genoeg te doen. Het was op sommige momenten wel erg druk.



