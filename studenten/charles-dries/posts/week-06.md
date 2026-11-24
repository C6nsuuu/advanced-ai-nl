# Week 6: Wat een AI over fuiflocaties vindt

## Mijn live query

| Onderdeel | Eigen AI — run 1 | Eigen AI — run 2 | Google AI-modus |
|---|---|---|---|
| De vraag | Welke evenementlocaties in Gent of Brussel zijn geschikt voor een fuif van ongeveer 500 personen? | Welke evenementlocaties in Gent of Brussel zijn geschikt voor een fuif van ongeveer 500 personen? | Welke evenementlocaties in Gent of Brussel zijn geschikt voor een fuif van ongeveer 500 personen? |
| Zoekopdrachten van de AI | Niet zichtbaar in het antwoord. | Niet zichtbaar in het antwoord. | Niet zichtbaar in het antwoord. |
| Pagina's die de AI las | Salino (Chinastraat); officiële website en FAQ/huurprijzen (Vierde Zaal); VIERNULVIER; Stad Gent Zalenzoeker; Visit Gent (Fabrika en Kompass Klub). | Officiële website, Brussels Special Venues en Visit Brussels (Claridge); Visit Brussels (Birmingham Palace); officiële zaalverhuur van La Tricoterie. | Officiële sites van Fabrika, Oude Vismijn en The EGG, plus Google-vermeldingen voor ZwartWit, Zebrastraat, Silo Brussels en Dome Eventhall. |
| Genoemde bedrijven of groepen | Chinastraat, Vierde Zaal, Vooruit — VIERNULVIER, Fabrika en Kompass Klub. | Claridge, Birmingham Palace en La Tricoterie. | Fabrika, Oude Vismijn, ZwartWit, Zebrastraat, Silo Brussels, Dome Eventhall, The EGG en Event Lounge. |
| Zou een kenner van die markt dezelfde noemen? | Grotendeels wel: het zijn bekende locaties die qua capaciteit of type event aansluiten. | Grotendeels wel: het zijn grote Brusselse evenementlocaties. | Grotendeels wel: de lijst bevat geloofwaardige locaties in beide steden. |
| Wie had er moeten staan? | Geen specifieke locatie ontbreekt volgens mij. | Geen specifieke locatie ontbreekt volgens mij. | Geen specifieke locatie ontbreekt volgens mij. |
| Zelfde bedrijven als de andere runs? | Nee. Alleen Gent komt voor in deze run. | Nee. Alleen Brussel komt voor in deze run. | Deels: Fabrika komt ook voor in run 1; de Brusselse namen verschillen van run 2. |

**Waarom werd één organisatie wel genoemd en een andere niet?** Fabrika werd in run 1 en in Google AI-modus genoemd. De officiële pagina noemt heel duidelijk een capaciteit van 500 staande personen, een bar, licht en geluid en nightlife-events. Kompass Klub werd alleen in run 1 genoemd; daar was de capaciteit voor externe verhuur in mijn bronnen niet bevestigd. De concrete, vindbare informatie over Fabrika lijkt dus gemakkelijker bruikbaar voor de AI.

## Kan AI dit bedrijf vinden?

| Criterium | Score (0–3) en bewijs |
|---|---|
| 1. Gestructureerde data | **0/3.** Op https://www.eventlocaties.gent/fabrika vond ik geen duidelijke JSON-LD/Schema.org-markering voor de locatie. |
| 2. Leesbaar voor AI | **3/3.** De pagina vermeldt de locatie, capaciteit van 500 staande personen, licht en geluid, cateringkeuken, bar en bereikbaarheid. |
| 3. Vermeldingen door anderen | **3/3.** Fabrika staat op Visit Gent, Salino, Eventplanner en de Zalenzoeker van Stad Gent. |
| 4. Echt genoemd in AI-antwoorden | **3/3.** Fabrika kwam voor in mijn eerste eigen-AI-run en in Google AI-modus. |
| 5. Autoriteit | **1/3.** De site toont praktijkervaring en referenties, maar ik vond geen duidelijke onafhankelijke erkenning, cijfers of expertisebewijs. |
| 6. Zoeken op de merknaam | **3/3.** Zoeken op Fabrika Gent geeft meteen de officiële site en meerdere externe vermeldingen. |

**Totaal:** 13/18 — aanwezig

**Eén tactiek:** Voeg valide gestructureerde data toe aan de Fabrika-pagina, bijvoorbeeld `EventVenue` of `LocalBusiness`, met adres, capaciteit, faciliteiten en een FAQ over verhuur. Dan kan een AI de kerngegevens sneller en betrouwbaarder uitlezen.

## Mijn tool leest een bron

**Document en waarom:** `build/bronnen/reglement-feesten-en-fuiven-pepingen.txt`. Mijn tool helpt een eventorganisator bezoekersreacties te ordenen. Met dit reglement kan de tool ook concrete vragen over drankregels bij fuiven beantwoorden, zonder te gokken.

**Score:** 4 op 5

**Eén geval waar het fout ging, en waarom ik denk dat dat gebeurde:** Bij B03 vroeg ik of security zomaar zakken mag controleren. Het document beantwoordt die vraag in artikel 15, maar de tool zei toch dat het niet in het document stond. Waarschijnlijk vond of gebruikte het model dat artikel niet goed genoeg, ook al staat het wel in de bron.
