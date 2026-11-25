# Week 6: Vindt de AI ons bedrijf?

## Mijn live query

Vraag (letterlijk, in alle runs hetzelfde): *Welk transportbedrijf in Antwerpen voert grond af bij wegenwerken?* Elke run in een nieuw gesprek.

| Run | Genoemde bedrijven | Bronnen die de AI las |
|---|---|---|
| 1, eigen AI | Kermans (Zoersel), Sterckx Grondwerken (Balen), Adams Aannemingen (Beerse) | bsearch.be (bedrijvengids) |
| 2, eigen AI | Dezelfde drie, plus Van Kempen Containers (Merksem), Algemene Grondwerken Wim en Partners (Niel), Grondwijzer (Antwerpen) | bsearch.be en busibee.be (beide gidsen) |
| 3, Google AI-modus | TZ Daems, Frans Boden, Aertssen, LYMAR, ATF | Eigen sites van de bedrijven, plus één gids (grondverzet-info.be) |

Bij run 3 heb ik de Google AI-modus drie keer geopend. De lijst verschoof elke keer licht. Ik gebruik de tweede poging voor de bronnenlijst, want die is volledig. Die bronnenlijst is niet voor elke poging te reconstrueren.

**Zou een kenner dezelfde noemen?** Run 3 (Google): grotendeels ja. Het zijn bedrijven met eigen kippers, een vergunning en een pagina die dit werk beschrijft. Run 1 en 2: minder. Kermans, Sterckx en Adams zitten in Zoersel, Balen en Beerse. Alle namen komen uit één gids, en de AI zegt zelf dat geen van de drie zich duidelijk profileert voor grondafvoer bij wegenwerken in de stad.

**Wie had er moeten staan?** Een bedrijf dat dit werk aantoonbaar doet en er een eigen pagina over heeft. Voor ons is dat Stadsbader NV, of Willemen Infra. Stadsbader heeft geen pagina over grondafvoer. Willemen heeft veel wegenprojecten in Antwerpen, maar de pagina's gaan over wegenbouw, niet over grondtransport. Google toont ook R.T.S. bvba onder "Vervoer" met de site stadsbader.com. Of dat bij de groep hoort, heb ik niet nagegaan.

**Run 2 en Google: dezelfde bedrijven?** Bijna niet. Van Kempen komt in beide voor: Van Kempen Containers in run 2, en Van Kempen Afbraakwerken in Google (tweede poging). Het zijn twee rechtspersonen op hetzelfde adres (Westkaai 21). De eigen site van Van Kempen Afbraakwerken verwijst voor containerverhuur naar Van Kempen Containers. Ik kan niet nagaan of ze dezelfde eigenaar hebben. De andere namen verschillen, en ook de bronnen: gidsen in run 1 en 2, eigen sites bij Google.

**Waarom TZ Daems wel, en Stadsbader niet?** TZ Daems staat in het Google-antwoord, met de eigen pagina over grondtransport als bron. Het staat niet in run 1 of run 2. Stadsbader NV staat in geen enkele run. Ik vond het alleen als aannemer in een aanbesteding en bij AG Vespa, niet op een eigen pagina over grondafvoer.

**Beperking.** De vraag gaat over een transportbedrijf, en Stadsbader is een aannemer. Dat maakt de test scheef.

## Kan AI dit bedrijf vinden?

Bedrijf: Stadsbader NV. Totaal: **9 op 18** (marginaal, 7–11).

| Criterium | Score | Bewijs |
|---|---|---|
| 1. Gestructureerde data | 1/3 | Alleen `BreadcrumbList`. Getest op https://www.stadsbader.com/en/areas-expertise/infrastructure/foundation-works-stabilization en https://www.stadsbader.com/nl/areas-expertise/infra/funderingswerken-stabilisatie. De Franse versie niet getest. |
| 2. Leesbaar voor AI | 1/3 | Duidelijke H1, maar de H2's "Stadsbader Group" en "Expertises" zeggen niet wat de klant krijgt. De tekst zegt niet voor wie, en er is geen prijs of contactgegeven in de hoofdtekst. Over afvoer van grond staat niets, alleen over aanvoer. |
| 3. Vermeldingen door anderen | 2/3 | Aanbestedingen (TED, AG Vespa), vakpers (wegenbouw.be) en gidsen (Kompass, Trends Top). Indeed: 2,9 van 5 op 7 werknemersreviews. Google toont 4,2 van 5 op 167 beoordelingen; de herkomst (klant of werknemer) kon ik niet nagaan, daarom geen 3. |
| 4. Genoemd in AI-antwoorden | 0/3 | In geen van de drie runs en in geen van de drie Google-pogingen. |
| 5. Autoriteit | 2/3 | Klasse 8, BENOR en COPRO op de centrales, 2.000 medewerkers en 250 werven. Geen concrete certificaten of projectreferenties op de pagina's die ik las. |
| 6. Zoeken op de merknaam | 3/3 | Google: de eigen site staat bovenaan, en het AI-overzicht beschrijft het juiste bedrijf. Beperking: mijn webzoektool vond het bedrijf op de naam alleen niet, en dat telt niet als AI-antwoord. Ik heb geen chatbot getest die alleen de merknaam kreeg. |

Schaal: 3 = volledig vervuld, 0 = niet te vinden. Bij criterium 2 en 3 heb ik de schaal zelf bepaald; de README geeft alleen de totaalgrenzen.

**Naamsverwarring (eigen bevinding).** Google toont Stadsbader NV, Stadsbader Contractors, Stadsbader Rail, Stadsbader Construction (Frankrijk) en R.T.S. bvba naast elkaar. Een klant moet zelf kiezen welke hij bedoelt. Stadsbader Contractors is een andere rechtspersoon (BE0452702265) dan Stadsbader NV (BE0407.975.466), dus de Indeed-review van 1,0 telt niet mee.

**Extra bevinding.** DC Recycling reinigt en recycleert uitgegraven grond en sloopmateriaal. Dat ligt dichter bij grondafvoer dan alles wat op de Stadsbader-pagina staat. Op de bedrijfssite vond ik daar geen koppeling mee.

**Tactiek.** Eén pagina maken die de klantvraag letterlijk beantwoordt: "grond afvoeren bij wegenwerken in de provincie Antwerpen". De pagina bevat de dienst in één zin, voor wie en waar, en structured data van het type Service of Organization. Reden: het zwakste punt is criterium 4 (0 van 3). De bedrijven die in de runs verschenen, hebben allemaal een eigen pagina die dit werk beschrijft. Dit is het goedkoopst te verbeteren, en het helpt criterium 1 en 2 mee. Als Stadsbader die vraag niet wil beantwoorden, vervalt deze tactiek, en dan is deze test voor dit bedrijf niet de juiste.

## Mijn tool leest een bron

**Document:** `build/bronnen/werkplaatsfactuur.md`, een fictieve werkplaatsfactuur (WP-2026-0417, trekker DAF XF 480) met zeven herstellingen en vier opmerkingen van de monteur. Ik koos fictief, omdat een echte factuur namen, kentekens en bedragen van klanten bevat, en die horen niet in een repo.

**Waarom dit document:** mijn Build (de tool die chauffeursmeldingen ordent) heeft in week 6 als plan: uit werkplaatsfacturen halen wat er hersteld is, zodat een melding gesloten kan worden.

**Wat ik veranderde:** een bronveld in de prompt, `build/prompt-v2-bron.md`. De prompt v1 bleef ongewijzigd, zodat de week 5-test vergelijkbaar blijft. De factuur staat in de prompt, en ook als apart bestand.

**Testgevallen:** vijf, geschreven vóór de run. Vier beantwoord door de factuur (B01 tot B04), één niet (B05). Elk geval één run, in een nieuwe sessie. Dat is n = 5.

| Maat | Score |
|---|---|
| Document juist (bron) | **5 op 5** |
| Soort en dringendheid juist | **3 op 5** |

Juist op soort en dringendheid: B01, B04 en B05. Fout:
- **B02** (olielek bij de turbo): de tool koos "direct stilleggen", ik verwachtte "onzeker". Beide vallen binnen de regel van de prompt ("strengste niveau of onzeker"). Het is dus een keuze die ik moet verantwoorden, geen duidelijke fout van de tool.
- **B03** (airco): de tool koos "snel nakijken", ik verwachtte "kan wachten". De prompt zegt niets over comfortklachten. Ook dit is een oordeel.

Ik heb de verwachte antwoorden na de run niet aangepast. Bij B04 noemde de tool twee bronnen; dat heb ik als juist gerekend.

Het testset staat in `build/test-set-bron.md`.
