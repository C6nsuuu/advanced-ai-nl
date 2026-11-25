# GEO-audit: kan AI Robaws vinden?

**Waarom Robaws.** Het ontbrak in alle drie de runs van de Live Query
(`live-query.md`), terwijl het in 3 van de 4 Belgische toplijsten staat die in
deze audit opdoken. Robaws is Belgische cloudsoftware voor bouw en installatie, uit Zwevegem.

Gedaan op 19 november 2026, met Claude Code in de browser. Elke score volgt de
schaal 0 tot 3 uit `cursus/week-06/README.md`. Criterium 1 volgt
`cursus/week-06/gestructureerde-data.md`.

| # | Criterium | Score | Bewijs |
|---|---|---|---|
| 1 | Gestructureerde data | 3 | https://robaws.com/nl-BE/functionaliteiten/offertes toont in validator.schema.org `WebPage`, `CreativeWork` en `FAQPage`, 0 fouten en 0 waarschuwingen. In `WebPage` zit als hoofdonderwerp `SoftwareApplication / WebApplication` "Robaws Offertes": wat het verkoopt. `FAQPage` beantwoordt klantvragen: digitaal ondertekenen, offerte naar factuur, eigen templates, marges. Wat ontbreekt: geen `Offer` met een prijs, geen reviews. `CreativeWork` is alleen een verwijzing naar de website. |
| 2 | Leesbaar voor AI | 2 | Goed: de kop "Offerteprogramma voor de bouw: maak professionele offertes in een oogwenk", met meteen een antwoord in één zin, en een FAQ op de pagina. Zwak: de prijspagina (robaws.com/nl-BE/prijs) toont geen enkel bedrag, alleen "Vraag hier jouw demo aan". Zonder taalvoorkeur, zoals bij een crawler, sturen robaws.be en robaws.com door naar de Engelse site (robaws.com/en). Geen llms.txt. |
| 3 | Vermeldingen door anderen | 2 | Reviews: Google 4,4 (41), Trustpilot 1, G2 3, Facebook 3. Staat op Capterra en GetApp. Lijsten: Computable-persbericht van september 2026 (nr. 7 van 10), Bouwflow top 10, Vertuoza top 12. Niet in het Cobria-artikel dat Google AI-modus las. Pers: De Tijd (2022), Made in (2025). Elke gevonden lijst komt van een concurrent of is een persbericht: geen onafhankelijke vergelijking gevonden. Fora niet nagekeken. |
| 4 | Echt genoemd in AI-antwoorden | 0 | Live Query: 0 van 3 runs. Geen enkele robaws.com-pagina tussen de 65 zoekresultaten van Claude, en niet tussen de 7 bronnen van Google AI-modus. |
| 5 | Autoriteit | 2 | "Vertrouwd door +500 bedrijven" (eigen advertentie). "Meer dan 700 klanten" volgens een partner, zoals Claude het samenvatte (niet zelf nagelezen). Deloitte Technology Fast 50: winnaar Enterprise software in 2022, en opnieuw in de lijst van 2025. Klantverhalen met naam (Pleq, Isosell, Roofers). Maar: de awardpagina's staan in het Engels, en de offertepagina geeft geen eigen cijfers, zoals tijdwinst per offerte. |
| 6 | Zoeken op de merknaam | 3 | Google "Robaws": robaws.com, een bedrijfsprofiel (Zwevegem, 4,4 uit 41 reviews) en eigen advertenties. Google AI-modus "Wat is Robaws?": juiste uitleg, met robaws.com als bron. Claude "Wat is Robaws?": juiste uitleg, maar via G2, Ponto en VSK, niet via robaws.com. |

**Totaal: 12 op 18, aanwezig** (12 tot 15).

## Het patroon

Sterk als je naar Robaws zelf vraagt: merknaam 3, gestructureerde data 3. Nul als
een klant de vraag van de categorie stelt. Zelfde patroon als het voorbeeld van
Artevelde in de les: sterk op wat het bedrijf zelf maakt, zwak op wat anderen
schrijven.

Wat de AI voor de categorievraag las: vergelijkingen (Cobria, Computable, GetApp,
Capterra) en eigen pagina's met "offerte" in de titel. Robaws heeft zo'n pagina,
maar die kwam in geen enkele zoekopdracht boven.

## Tactiek: wat moet Robaws als eerste doen?

Drie opties uit het bewijs.

| | Tactiek | Bewijs uit deze audit |
|---|---|---|
| A | Een Nederlandstalige vergelijkingspagina "offertesoftware voor aannemers", met prijzen, een tabel en een FAQ | Google AI-modus nam de koppen van zo'n pagina van Cobria bijna één op één over. Vergelijkingen zijn wat beide systemen lazen. |
| B | De prijs op de prijspagina zetten | Capterra en G2 tonen al 29 euro, robaws.com zelf niets. Een AI die een "snelle" app voor een zelfstandige zoekt, ziet geen prijs. |
| C | robaws.be laten openen in het Nederlands | Zonder taalvoorkeur kom je nu op de Engelse site, terwijl de vraag in het Nederlands gesteld wordt. |

Gekozen: **A, met de prijs erin**. Dan zit B er meteen bij, en het is het
enige van de drie dat in het soort pagina zit dat de AI voor deze vraag las.
