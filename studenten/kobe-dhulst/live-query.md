# Live Query, 24 november 2026

**De vraag:** "Wat is de beste app om mijn mails te sorteren?"

| | Claude run 1 | Claude run 2 | Google AI-modus |
|---|---|---|---|
| Model | Opus 5.5, via Claude Code, web search aan | Opus 5.5, via Claude Code, web search aan | Google AI-modus |
| Zoekopdrachten van de AI | geen: zocht niet | geen: zocht niet | niet zichtbaar |
| Pagina's die de AI las | 0 | 0 | Reddit-discussie over AI-e-mailorganisatie, RTL Nieuws |
| Genoemde apps | SaneBox (aanrader), Spark, Clean Email, Superhuman | SaneBox (aanrader), Spark, Clean Email, Shortwave, Superhuman | Clean Email, Outlook (Copilot), SaneBox, Shortwave, Spark, Siftbox |

- **Zou een kenner dezelfde noemen?** Ja, grotendeels dezelfde apps.
- **Wie had er moeten staan?** Outlook ontbreekt bij Claude. Beide Claude-runs gingen ervan uit dat ik Gmail gebruik.
- **Run 2 en Google: dezelfde?** Bijna hetzelfde. SaneBox, Spark, Clean Email en Shortwave staan in beide.

Let op: ik draaide Claude via Claude Code, niet in de Claude-app. In de app zoekt het model misschien wel.

## Waarom die wel, en die niet?

SaneBox (genoemd in alle 3 de runs) tegenover Siftbox (alleen bij Google).

| | SaneBox | Siftbox |
|---|---|---|
| Reviews | G2: 4,8/5, ± 218–240 reviews · Capterra · Trustpilot | geen gevonden |
| Vergelijkingssites | in lijstjes van Clean Email en Superhuman | niet gevonden |
| App Store | ja | niet gevonden |

Bronnen: g2.com/products/sanebox/reviews, capterra.com/p/146115/SaneBox/reviews, trustpilot.com/review/sanebox.com, clean.email/best-email-sorter, blog.superhuman.com/email-sorter. Gezocht op 24 november 2026.

**Mijn zin:** Siftbox staat er niet omdat er geen reviews zijn en het niet bij vergelijkingssites staat, dus Claude heeft geen connectie ermee en raadt het ook niet aan.

# GEO-audit: kan AI Siftbox vinden?

Siftbox ontbrak bij Claude en werd alleen door Google genoemd. Getest op 24 november 2026.

| # | Criterium | Score | Bewijs |
|---|---|---:|---|
| 1 | Gestructureerde data | 3 | Getest: https://www.siftbox.ai/ . JSON-LD met `Organization`, `WebSite`, `SoftwareApplication`, `Offer`, `FAQPage` (± 18 vragen en antwoorden). siftbox.com is een lege pagina. |
| 2 | Leesbaar voor AI | 1 | Duidelijke titel en koppen, maar alles alleen in het Frans, en geen prijs in de tekst van de pagina. |
| 3 | Vermeldingen door anderen | 0 | Geen reviews op G2, Capterra of Trustpilot, niet in de lijstjes van Clean Email of Superhuman. |
| 4 | Echt genoemd in AI-antwoorden | 1 | Google AI-modus 1 op 1, Claude 0 op 2. |
| 5 | Autoriteit | 0 | Geen cijfers, erkenning of pers gevonden. |
| 6 | Zoeken op de merknaam | 1 | Een zoekopdracht "Siftbox email app" vond de site niet. Pas gevonden door het adres te proberen. |

**Totaal: 6 op 18, onzichtbaar.**

**Tactiek:** eerst zorgen voor reviews en vermeldingen op vergelijkingssites. Daarna geen Franse, maar Engelse titel en koppen.
