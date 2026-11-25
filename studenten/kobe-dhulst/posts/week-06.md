# Week 6: Een site is niet genoeg

## Mijn live query
Mijn vraag: "Wat is de beste app om mijn mails te sorteren?"

| | Claude run 1 | Claude run 2 | Google AI-modus |
|---|---|---|---|
| Pagina's gelezen | 0 (zocht niet) | 0 (zocht niet) | Reddit, RTL Nieuws |
| Genoemde apps | SaneBox, Spark, Clean Email, Superhuman | SaneBox, Spark, Clean Email, Shortwave, Superhuman | Clean Email, Outlook (Copilot), SaneBox, Shortwave, Spark, Siftbox |

Claude: Opus 5.5 via Claude Code, web search aan. Een kenner zou grotendeels dezelfde apps noemen. Wie had er moeten staan: Outlook, bij Claude.

Claude zocht niet en Google wel. Ook opvallend: Outlook stond niet bij Claude. Voor de rest waren de lijsten tussen Google en Claude gelijkaardig.

Siftbox staat er niet omdat er geen reviews zijn en het niet bij vergelijkingssites staat, dus Claude heeft geen connectie ermee en raadt het ook niet aan. SaneBox heeft 4,8/5 op G2 met ± 218–240 reviews, en staat op Capterra, Trustpilot en in lijstjes van Clean Email en Superhuman. Voor Siftbox vond ik niets.

## Kan AI dit bedrijf vinden?
GEO-audit van Siftbox (https://www.siftbox.ai/), 24 november 2026.

| # | Criterium | Score | Bewijs |
|---|---|---:|---|
| 1 | Gestructureerde data | 3 | JSON-LD met `Organization`, `WebSite`, `SoftwareApplication`, `Offer`, `FAQPage` |
| 2 | Leesbaar voor AI | 1 | Duidelijke koppen, maar alleen in het Frans, geen prijs op de pagina |
| 3 | Vermeldingen door anderen | 0 | Geen reviews op G2, Capterra, Trustpilot, niet op vergelijkingssites |
| 4 | Echt genoemd door AI | 1 | Google 1 op 1, Claude 0 op 2 |
| 5 | Autoriteit | 0 | Geen cijfers, erkenning of pers gevonden |
| 6 | Zoeken op de merknaam | 1 | "Siftbox email app" vond de site niet |

**Totaal: 6 op 18, onzichtbaar.** Tactiek: eerst zorgen voor reviews en vermeldingen op vergelijkingssites. Daarna geen Franse, maar Engelse titel en koppen.

Een goede site is niet genoeg. Anderen moeten erover schrijven en er moet interactie zijn met klanten. Ook de titels en de code voor AI moeten duidelijk zijn, best in het Engels. Enkel een site is te oppervlakkig, je moet aan meerdere zaken denken.

## Mijn tool leest een bron
Ik gebruikte mijn lesrooster, zodat de tool weet welke vakken van mij zijn. Score: 4 op 5 juist (n = 5, 1 run, Haiku 5.5).

B04 ging fout: een herinnering aan de verplichte infosessie Study abroad. Ik verwachtte later, de tool zei info. Ik twijfel waarom, maar misschien komt het uit de prompt. Het model kon mijn lokaal en mijn examendatum niet weten, dus het kwam uit het rooster.
