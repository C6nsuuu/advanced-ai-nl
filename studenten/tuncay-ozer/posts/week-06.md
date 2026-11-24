# Week 6: Gevonden worden: door de AI en door mijn tool

## Mijn live query

| | Run 1 (ChatGPT) | Run 2 (ChatGPT) | Run 3 (Google AI-modus) |
|---|---|---|---|
| **Vraag** | Welk schoonmaak bedrijf in lokeren is de beste voor het schoonmaken van mijn ramen | idem | idem |
| **Zoekopdrachten van de AI** | niet zichtbaar | niet zichtbaar | niet zichtbaar |
| **Bronnen** | niet bewaard (chat gewist) | Trustlocal (top 10), Trustlocal (reviews De Ramenwasser), AC Cleanworks (eigen site), Gouden Gids | 2× Google-bedrijfsprofiel, yuslina.be (2 pagina's), gemeenteofferte.be, Trustlocal |
| **Genoemd** | 1. Yuslina Cleaning<br>2. Windowcleaning ELD<br>3. De Ramenwasser | 1. De Ramenwasser<br>2. Windowcleaning ELD<br>3. De Brabander | Aanrader: Yuslina + De Ramenwasser<br>Tabel: ook De Brabander, ELD |
| **Kenner?** | Yuslina ken ik en vind ik een goede keuze. De andere drie zeggen me niets. | | |
| **Wie ontbreekt?** | KT Windowcleaning: staat bovenaan Google Maps bij "ramenwasser lokeren", maar is gesponsord. Zit in Merelbeke. | | |
| **Run 2 en Google: dezelfde?** | Alle drie uit run 2 staan ook bij Google. Google voegt Yuslina toe en zet die bovenaan. | | |

**Waarom die wel, en die niet:** Yuslina zit in Lokeren en zet "ramen wassen Lokeren" op zijn site, terwijl KT in Merelbeke zit en Lokeren nergens noemt.

## Kan AI dit bedrijf vinden?

**Yuslina Cleaning, Lokeren: 13/18 (aanwezig)**

| Criterium | Score en bewijs |
|---|---|
| 1 · Gestructureerde data | 3 · https://yuslina.be/diensten/ramen-wassen/ toont `BreadcrumbList`, `WebSite`, `Service` (1 fout) en `FAQPage` |
| 2 · Leesbaar voor AI | 2 · Duidelijke kop en één zin over de dienst, adres en werkgebied staan erop. Geen prijs, alleen een knop voor een offerte. De prijs hangt af van het huis, maar een vanafprijs of een voorbeeld kan de AI wel citeren. |
| 3 · Vermeldingen door anderen | 2 · Gouden Gids, 25 Google-reviews (4,9), genoemd bij een netwerkevent in Lokeren, Facebook. Niet op Trustlocal, geen pers. Niet overal terug te vinden. |
| 4 · Echt genoemd door AI | 2 · Genoemd in 2 van 3 runs, beide keren op plaats 1. In ChatGPT run 2 niet genoemd. Google las yuslina.be. |
| 5 · Autoriteit | 2 · Sterke techniek (osmosewater, telescoop tot 14 m, softwash), verzekerd, VCA-gecertificeerd, btw-nummer vermeld. Geen oprichtingsjaar, geen klantcijfers, geen federatie. |
| 6 · Zoeken op de merknaam | 2 · Op "Yuslina Cleaning" staat het bedrijf eerst, en ChatGPT kent het juist (adres, zaakvoerder, diensten). Op "Yuslina" alleen vind je geen bedrijf, maar de Instagram van iemand anders. |

**Tactiek:** ik zou vooral mijn naam op zoveel mogelijk lokale sites of vergelijkingssites zetten, voor de zichtbaarheid.

## Mijn tool leest een bron

**Document:** `build/bronnen/legende.md`, een legende die ik zelf maakte met mijn afkortingen en de oefeningen die ik doe per dag. Ik zal ze later aanvullen, of ze wordt zelf aangevuld naarmate het model gebruikt wordt.

**Score: 3 op 5** (`build/test-set-bron.md`). Ik vind het nog mid.

**Fout:** B03 (`spiders 12X12`) en B04 (`HAMMERS: 14X12`). Ik wou dat hij herkende dat het spider curls en hammer curls zijn en een voorspelling deed, maar hij vroeg gewoon wat het was. Aangezien we verder aan het bouwen zijn, kunnen er regels zijn die tegen elkaar strijden: in mijn prompt staat dat hij een woord dat niet in de legende staat letterlijk moet overnemen. Nu wil ik dat hij voorspelt en zelf de legende verbetert naar wat het beste is voor hem.
