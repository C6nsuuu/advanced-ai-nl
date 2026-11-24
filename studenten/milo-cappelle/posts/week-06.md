# Week 6: Mijn werkgever staat niet in het antwoord

## Mijn live query
Ik stelde deze vraag: "Welke bedrijven doen grond- en afbraakwerken in West-Vlaanderen?" Eerst twee keer in mijn eigen AI, daarna één keer in Google AI-modus.

- **Run 1 (eigen AI):** tien bedrijven. De bronnen waren vooral directories en bedrijfslijsten, waaronder de Gouden Gids.
- **Run 2 (eigen AI, nieuw gesprek):** dertien bedrijven, met een andere lijst. Deprez wordt niet genoemd. Het antwoord zegt wel dat Deprez "natuurlijk ook op die lijst" staat, zonder naam.
- **Run 3 (Google AI-modus):** negen bedrijven, weer een andere lijst. De bronnen waren vooral eigen sites van bedrijven en één Facebook-pagina. Vier bedrijven uit het antwoord hebben geen bron.

Van de bedrijven die in alle drie de runs terugkomen, is er maar één: Verbeke Grond- en Afbraakwerken.

Zou een kenner van die markt dezelfde bedrijven noemen? Ja, omdat het gevestigde namen in de sector zijn.

Zijn de bedrijven van run 2 en Google hetzelfde? Nee, maar er zitten gelijkenissen in.

## Wie had er moeten staan?
**Grondwerken Deprez** (Zonnebeke). Dat is het bedrijf waar ik vakantiewerk doe. Het is het eerste resultaat als je "grondwerken deprez" zoekt, en de site laat zien dat het grondwerk en afbraak doet. Het staat in geen van de drie runs.

Ik zocht ook drie andere bedrijven op, met een eigen site:
- **GLK Grondwerken** (Kruisem). De site zegt dat het bedrijf in West- en Oost-Vlaanderen werkt. Het staat in geen van de runs.
- **Lavaert Group** (Rekkem). De site heeft de dienst "Afbraak & grondwerken". Het staat in geen van de runs.
- **Degro** (Ieper). De site heeft afbraak- en sloopwerken. Het staat in geen van de runs.

## Mijn zin: waarom niet?
Deprez staat niet in de Gouden Gids voor West-Vlaanderen, op de eerste vijf pagina's. In run 1 en 2 gaf de AI bij twee bedrijven een link naar die gids. Het is waarschijnlijk dat de AI Deprez daarom niet vond.

## Kan AI dit bedrijf vinden?
Ik deed de GEO-audit voor Grondwerken Deprez. Het bedrijf heeft geen aparte dienstpagina, dus ik testte de homepage.

| # | Criterium | Score | Bewijs |
|---|---|---|---|
| 1 | Gestructureerde data | 1/3 | https://www.grondwerkendeprez.be/ toont alleen `WebSite` in de validator. |
| 2 | Leesbaar voor AI | 1/3 | Onder "onze expertise" staan de werkzaamheden, met wat uitleg per dienst. Geen zin die het bedrijf in één keer beschrijft. |
| 3 | Vermeldingen door anderen | 1/3 | Eén review, van 5 sterren. |
| 4 | Echt genoemd door AI | 0/3 | Deprez staat in geen van de drie runs. |
| 5 | Autoriteit | 0/3 | Geen eigen cijfers of erkenningen gevonden. |
| 6 | Zoeken op de merknaam | 3/3 | Het eerste resultaat voor "Grondwerken Deprez" is de eigen website. |

**Totaal: 6 op 18.** Volgens de tabel van de README is dat onzichtbaar.

**Tactiek:** het bedrijf moet ervoor zorgen dat AI-tools de naam noemen als er gezocht wordt naar grond- of afbraakwerken.

## Mijn tool leest een bron
Mijn bron was `vergunningen.md`: drie Vlaamse pagina's over slopen, reliëf en verhardingen. Ik schreef vijf testvragen vooraf, met het juiste antwoord en de plek in de tekst. De tool beantwoordde ze in een nieuwe sessie, één keer per vraag.

**Score: 4 op 5 juist.**

Het foute geval was B01: "Moet ik een vergunning aanvragen voor het slopen van de omheiningsmuren rondom mijn huis?" Het juiste antwoord is "ja", want omheiningsmuren vallen niet onder de vrijstelling. De tool zei "nee", en citeerde toch de zin over omheiningsmuren.

Mijn gok: de tool las de vrijstelling verkeerd, en dacht dat omheiningsmuren wel vrijgesteld zijn. Hij citeerde de zin over omheiningsmuren, maar begreep niet dat die zin een uitzondering is. Dat is een gok, geen zekerheid: ik heb niet gezien hoe de tool zijn antwoord opbouwde.
