# Week 6: De AI kiest voor veilig, ik zoek goedkoop

## Mijn live query

Vraag: "waar koop ik best een tweedehands Rolex in België?"

| | ChatGPT 1 | ChatGPT 2 | Google AI-modus |
|---|---|---|---|
| Pagina's gelezen | rolex.com, yvans.be, fullset.be, Google Maps | halloftime.be, bouverne.be, yvans.be, rolex.com, Google Maps | rolex.com, halloftime.be, yvans.be, vanhoutteghem.com, clemvercammen.be, schaapcitroen.nl, fullset.be, chrono24.nl |
| Genoemd | Hall of Time, Yvan's, Full Set, MAS Watches | Hall of Time, Bouverne, Yvan's | Hall of Time, Yvan's, Vanhoutteghem, Clem Vercammen, Schaap en Citroen, Fullset, Chrono24 |

- **Kenner?** Ja. Maar ik zoek deals, en die vind ik niet bij deze grote dealers. Deals zoek ik op sites zoals Chrono24.
- **Wie ontbreekt?** 2dehands en Kleinanzeigen. Daar vond ik zelf advertenties voor mijn testsets, en daar vind je deals. Op 2dehands moet je wel goed controleren of het horloge echt is.
- **Run 2 en Google?** Alleen Hall of Time en Yvan's staan in allebei. Run 2 noemt alleen officiële Rolex-dealers, Google ook Chrono24 en Schaap en Citroen. ChatGPT raadde Chrono24 af, Google raadde het aan.

**Waarom die wel, en die niet?** Hall of Time staat op de site van Rolex zelf als officiële dealer, en die pagina lazen alle drie de runs. 2dehands is een marktplaats zonder garantie, waar ook namaak op staat, en bij het zoeken vond ik geen artikels die het aanraden. De AI kiest voor veilig, ik zoek goedkoop.

## Kan AI dit bedrijf vinden?

2dehands, het bedrijf dat volgens mij had moeten staan.

| # | Criterium | Score | Bewijs |
|---|---|---|---|
| 1 | Gestructureerde data | 3 | [Advertentie Rolex Yacht-Master](https://www.2dehands.be/v/handtassen-en-accessoires/horloges-heren/a168844213-rolex-yacht-master-ref-226627-year-2025-box-papers): `ImageObject`, `BreadcrumbList`, `Product` met `Offer` (22450 EUR). Verkoper in de code: Full Set. `itemCondition` staat op `NewCondition`, bij een tweedehands horloge. |
| 2 | Leesbaar voor AI | 2 | Vaste velden (merk, model, referentie, toebehoren, prijs), maar geen zin over veilig een horloge kopen. |
| 3 | Vermeldingen door anderen | 1 | Geen artikels die 2dehands aanraden voor een Rolex, wel artikels over namaak. |
| 4 | Genoemd in AI-antwoorden | 0 | In geen van mijn 3 runs. Full Set, dat via 2dehands verkoopt, wel. |
| 5 | Autoriteit | 1 | Groot en bekend, maar geen echtheidsgarantie op horloges. |
| 6 | Zoeken op de merknaam | 3 | Wie "2dehands" typt in Google of ChatGPT, vindt het meteen. |

**Totaal: 10/18, marginaal.** Tactiek: een eigen pagina over veilig een luxehorloge kopen, met echtheidscontrole of een label voor geverifieerde handelaars. Dan hebben andere sites en de AI iets om naar te verwijzen.

## Mijn tool leest een bron

Bron: de condition grading van Bob's Watches (`build/bronnen/rolex-staat.md`). Mijn tool twijfelde vaak bij de staat (bij T05 gaf hij één keer op vijf "onbekend"). Met vaste graden uit een echt document kan hij beter kiezen, en zegt hij uit welk deel het komt.

**Score: 4 op 5** (n = 5, 1 run, Haiku 5.5, niet Sonnet zoals ik in week 5 koos).

Fout: B01, "lichte gebruikssporen, zoals een paar krasjes, maar deze vallen niet op". De tool gaf Very Good, ik verwachtte Excellent. Het woord "licht" trok hem waarschijnlijk naar "Light to normal wear", maar "deze vallen niet op" past beter bij "very slight signs of wear".
