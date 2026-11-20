# Testset bron (B01–B05)

**Bron:** `build/bronnen/fod-btw-verbouwen.md`

Het juiste antwoord, en waar het in het document staat, schrijf je vóór de eerste run.
B01–B04: het document geeft het antwoord. B05: het document geeft het antwoord níet.

Geschreven door Claude Code op vraag van Lars, op 20 november 2026, vóór de
eerste run. Elke vraag is een werfopname, want dat is wat de tool leest.

**Regel om na te kijken, vastgelegd vóór de run.** Juist als het tarief klopt,
`deel` de kop uit "Waar in het document" noemt (of de kop erboven), en het citaat
letterlijk in de bron staat. B05 is juist als het tarief null is en `deel`
"staat niet in het document" zegt.

| ID | Vraag | Juiste antwoord | Waar in het document | Run 1 | Juist? |
|---|---|---|---|---|---|
| B01 | "We staan hier in een rijwoning uit 1987, de mensen wonen er zelf. De badkamer moet er volledig uit, die is 3 op 2 meter, en daarna komen er nieuwe vloertegels." | 6% | Voorwaarden > Ouderdom van de woning (of Privéwoning): ouder dan 10 jaar en privé bewoond | 6% · Voorwaarden > Ouderdom van de woning · citaat uit de inleiding: "kan een btw-tarief van 6 % (in plaats van 21 %) worden toegepast op de renovatiewerken die u uitvoert, als aan bepaalde voorwaarden wordt voldaan." | Juist. Wel komt het citaat uit de inleiding, niet uit de kop die `deel` noemt. |
| B02 | "Dit is een appartement van 2019, de klant woont er sinds de oplevering. De wanden in de badkamer moeten opnieuw betegeld worden, 12 vierkante meter." | 21% | Voorwaarden > Ouderdom van de woning: eerste ingebruikneming in 2019, dus niet ouder dan 10 jaar | 21% · Voorwaarden > Ouderdom van de woning · "De woning moet ouder zijn dan 10 jaar." | Juist. |
| B03 | "Ik sta bij een kinesist, hij woont boven zijn praktijk en het huis is van 1972. Alleen de muren van de praktijkruimte beneden moeten geschilderd worden, 35 vierkante meter, twee lagen." | 21% | Voorwaarden > Privéwoning: de werken zitten alleen in het professionele gedeelte | 21% · Voorwaarden > Privéwoning · "De werken zijn namelijk beperkt tot het professionele gedeelte." | Juist. Het citaat is ingekort: "van de woning" valt weg en er staat een punt achter. Zonder die punt staat het letterlijk in de bron. |
| B04 | "Achter het huis van 1965 komt een uitbreiding van 80 vierkante meter. Het oude deel is 60 vierkante meter en blijft staan. Wij doen de funderingen, het metselwerk en het dak van die uitbreiding." | 21% | Verbouwing of nieuwbouw? > Uitbreiding van de oppervlakte: het nieuwe deel is groter dan het oude, dus nieuwbouw | geen tarief, `deel` en citaat leeg · 0 posten, 3 vragen over de hoeveelheden (funderingen, metselwerk, dak) | **Fout.** Verwacht 21% (nieuwbouw). De tool maakte geen posten, en v4 zegt dan: laat btw leeg. |
| B05 | "We staan in Breda, in Nederland. Rijwoning uit 1950, de klant woont er zelf. De badkamer moet volledig gestript worden, 2 op 3 meter." | `staat niet in het document` | n.v.t.: de bron is de Belgische regeling van FOD Financiën, over een woning in Nederland zegt ze niets | geen tarief · `staat niet in het document` · vraag: "Welk btw-tarief geldt voor deze werken in Nederland?" | Juist. |

Resultaat: **4 op 5 juist** (n = 5, 1 run, model: GPT-6 Luna, prompt v4, 20 november 2026).

Run 1 en Juist? ingevuld door Claude Code met de regel van vóór de run. Lars kijkt na.
Kost: 0,00102 euro per run. De bron maakt de invoer bijna dubbel zo lang: 5.730 tokens per run, tegen gemiddeld 3.070 voor v3.
