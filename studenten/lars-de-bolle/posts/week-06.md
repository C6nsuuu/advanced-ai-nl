# Week 6: Cobria schreef het antwoord van Google

## Mijn live query

De vraag van Joeri, letterlijk: "Welke app gebruik ik best als zelfstandige
aannemer in Vlaanderen om snel offertes te maken?" Twee runs in Claude (Sonnet
5.5, incognito), één in Google AI-modus.

| | Claude 1 | Claude 2 | Google AI-modus |
|---|---|---|---|
| Zoekopdrachten van de AI | "beste offerte app aannemer zelfstandige België", plus een met vijf merknamen | "beste offerte software aannemer zelfstandige Vlaanderen", plus een met merknamen | niet zichtbaar |
| Gelezen | Accountable 2x, Computable, GetApp, Capterra | Accountable, Computable, GetApp, bouwenwonen.net | 5 sites van verkopers, 2 pagina's over Cobria |
| Genoemd | Accountable, Bouwflow, Jobber, Tradify | Accountable, Bouwsoft, Groensoft, Buildxact, Tradify | Trustup Pro, Cobria, WeFact, Bouwsoft, Vertuoza |
| Kenner zou dezelfde noemen? | Deels: Jobber en Tradify zijn buitenlandse apps | Deels: Buildxact en Tradify ook | Grotendeels |
| Wie had er moeten staan? | Trustup Pro | Trustup Pro | Robaws |
| Run 2 en Google dezelfde? | | 2 van 5 ook in run 1 | 1 van 5 ook bij Claude |

Elf namen over drie runs, alleen Bouwsoft in twee systemen. OpMaat: 0 van 3.
Vier van de vijf namen bij Google zijn koppen uit één vergelijking, en die
schreef Cobria zelf.

**Waarom die wel, en die niet?** Bouwsoft stond in het artikel dat Google las en
zet prijs en doelgroep op zijn eigen site, terwijl Robaws, ondanks meer pers, in
dat artikel ontbreekt, geen prijs toont en in het Engels opent.

## Kan AI dit bedrijf vinden?

Robaws, bouwsoftware uit Zwevegem, in geen enkele run genoemd.

| Criterium | Score | Bewijs |
|---|---:|---|
| 1 Gestructureerde data | 3 | https://robaws.com/nl-BE/functionaliteiten/offertes toont `WebPage` (met `SoftwareApplication / WebApplication`), `CreativeWork` en `FAQPage`. Geen prijs, geen reviews. |
| 2 Leesbaar voor AI | 2 | Duidelijke kop, antwoord in één zin. Geen bedrag op de prijspagina, en de site opent in het Engels. |
| 3 Vermeldingen door anderen | 2 | Google 4,4 (41 reviews), Trustpilot 1, G2 3. In 3 van 4 Belgische toplijsten, niet in die van Cobria. |
| 4 Echt genoemd door AI | 0 | 0 van 3 runs. |
| 5 Autoriteit | 2 | Deloitte Fast 50 in 2022, "+500 bedrijven". Geen eigen cijfers over offertes. |
| 6 Zoeken op de merknaam | 3 | Google en Claude leggen "Wat is Robaws?" juist uit. |

**12 op 18: aanwezig.**

**Tactiek:** een Nederlandstalige vergelijkingspagina voor offertesoftware, met
prijzen en een FAQ. Dat soort pagina las Google, en de prijs staat er meteen bij.

## Mijn tool leest een bron

Mijn tool leest nu de btw-pagina van FOD Financiën over verbouwen. Joeri moet 6
of 21 procent op zijn offerte zetten, en daar zei de tool niets over. Het tarief
komt nu uit die bron, met kop en citaat.

**4 op 5 juist** (n = 5, 1 run, GPT-6 Luna). Fout: B04, een uitbreiding van
80 m2 aan een huis van 60 m2. Volgens de bron is dat nieuwbouw, dus 21 procent.
De tool maakte geen posten, en zonder posten laat de regel het btw-veld leeg. De
bron werd goed gelezen, maar twee regels uit de prompt botsten.

Dat het uit de bron komt, zie ik aan B03: bij een praktijkruimte koos hij 21
procent, met een zin uit het voorbeeld van FOD Financiën. En aan B05: voor een
werf in Breda zei hij dat de bron het niet zegt.

Eén gat ken ik vooraf: de pagina zegt niet dat een gasketel sinds juli 2025
onder 21 procent valt.
