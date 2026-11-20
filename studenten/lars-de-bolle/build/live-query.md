# Live Query, week 6

**De vraag, letterlijk:** "Welke app gebruik ik best als zelfstandige aannemer in
Vlaanderen om snel offertes te maken?"

Zo zou Joeri het vragen: hij maakt zijn offertes nu in Excel en zoekt iets
snellers. De vraag noemt bewust geen spraak, want dat zou OpMaat voortrekken.

**Opzet.** Gedraaid op 19 november 2026, met Claude Code in de browser van de
Claude-app.

- Eigen AI: claude.ai, Sonnet 5.5, incognitogesprek. Zo spelen geheugen en
  eerdere gesprekken niet mee. Web search ging vanzelf aan. Run 2 is een nieuw
  gesprek met exact dezelfde vraag.
- Google AI-modus: google.com met `udm=50`, taal nl, regio be. Niet ingelogd,
  cookies geweigerd.

## De drie runs

| | Eigen AI 1 | Eigen AI 2 | Google AI-modus |
|---|---|---|---|
| Zoekopdrachten van de AI | "beste offerte app aannemer zelfstandige België" en "offertesoftware bouw Vlaanderen prijs Costlocker Moneybird Odoo Bouwbooster Jobber" | "beste offerte software aannemer zelfstandige Vlaanderen" en "offerte app bouw zelfstandige België Donna Tellow Zoho Bouwapp prijs" | Niet zichtbaar. Google toont de zoekopdrachten van AI-modus niet. |
| Resultaten die terugkwamen | 30 (13 + 17) | 35 (19 + 16) | 7 bronnen in het paneel |
| Pagina's waaruit het antwoord citeerde | accountable.eu 2x (eigen site), computable.nl (persbericht, "De 10 beste software voor bouwbedrijven in België"), getapp.be (vergelijkingssite), capterra.be (reviewsite) | accountable.eu (eigen site), computable.be (nieuws uit 2021: Visma koopt Use It Group, de maker van Bouwsoft), getapp.be (vergelijkingssite), bouwenwonen.net (gids) | vertuoza.com, trustup.pro, wefact.be en bouwsoft.be (eigen sites), cobria.com (vergelijkingsartikel geschreven door Cobria zelf), Cobria Go in de App Store, pagina van JAK Solutions over Cobria |
| Genoemde bedrijven | Accountable, Bouwflow, Jobber, Tradify. "Uit eigen kennis, niet gecontroleerd": Teamleader, Odoo, Billit | Accountable, Bouwsoft (met Groensoft), Buildxact, Tradify | Trustup Pro, Cobria, WeFact, Bouwsoft, Vertuoza. Billit, Accountable en Yuki alleen als koppeling met de boekhouding |
| Zou een kenner van die markt dezelfde noemen? | Deels. Accountable wel, voor eenvoudige offertes. Jobber en Tradify niet: buitenlandse apps in het Engels, en het antwoord zegt zelf dat het niet kon nagaan of ze Belgische eisen aankunnen. Bouwflow kwam uit een persbericht. | Deels. Accountable en Bouwsoft wel. Buildxact en Tradify niet, om dezelfde reden. Groensoft is voor tuinaannemers, niet voor Joeri. | Grotendeels. Trustup Pro, Bouwsoft en Vertuoza zijn Belgische bouwsoftware. Cobria staat er door zijn eigen artikel. WeFact is Nederlands, met een Belgische site. |
| Wie had er moeten staan? | Trustup Pro: nr. 1 in het persbericht dat Claude in deze run zelf las | Trustup Pro | Robaws, dat in geen enkele run staat |
| Run 2 en Google: dezelfde bedrijven? | | 2 van de 5 ook in run 1: Accountable en Tradify | 1 van de 5 ook in run 2 (Bouwsoft), 0 van de 5 in run 1 |

OpMaat: in geen enkele run genoemd, en in geen enkel resultaat te zien.

## Wat opvalt in de ruwe gegevens

- **De AI typt zelf merknamen in zijn zoekopdracht.** In beide Claude-runs zette
  de tweede zoekopdracht namen die het model al kende (Costlocker, Moneybird,
  Jobber; Donna, Tellow, Zoho). Wie het model niet kent, komt in die tweede
  zoekopdracht niet voor.
- **14 verschillende bedrijven over drie runs.** Alleen Bouwsoft werd door twee
  verschillende systemen aangeraden (Claude run 2 en Google). Accountable stond in
  beide Claude-runs.
- **Google volgt één artikel van een verkoper.** Het AI-antwoord noemt Trustup Pro,
  Cobria, Bouwsoft en Vertuoza, en Billit als koppeling. Dat zijn precies de koppen
  van "Beste offerte- en facturatiesoftware bouw 2026" op cobria.com
  (cobria.com/nl/artikelen/beste-offerte-facturatiesoftware-bouw, september 2026).
  Bij die bron toont Google het fragment "Om gratis te starten: Cobria of het
  Starter-plan van Trustup Pro." Het AI-antwoord begint met exact die twee.
- **Het meest teruggegeven domein werd niet geciteerd.** In run 2 kwamen 9 van
  de 19 resultaten van getharvest.com (Nederlandstalige pagina's "Offerte Software
  voor Aannemers" van een Amerikaanse urenregistratietool). Geen enkele werd
  gebruikt.
- **Eigen site of derden.** Claude citeerde vooral derden: 3 van 5 en 3 van 4
  pagina's. Google citeerde vooral de verkopers zelf: 5 van 7 pagina's, en de
  andere 2 gingen over Cobria. Dat is n = 3. Het zegt iets over deze vraag, niet
  over AI in het algemeen.

## Kandidaten voor "wie had er moeten staan?"

De feiten achter de rij "wie had er moeten staan". Robaws ontbreekt in alle drie
de runs, dus de GEO-audit gaat over Robaws.

| | Robaws | Trustup Pro |
|---|---|---|
| Genoemd | 0 van 3 runs | 1 van 3 (alleen Google) |
| Wat het is | Belgische cloudsoftware voor bouw en installatie, uit Zwevegem | Belgische offerte- en factuurapp voor de bouw, met een gratis startplan |
| Klanten | "+500 bedrijven" (eigen advertentie). "Meer dan 700 klanten" volgens een partner, zoals Claude het samenvatte (niet zelf nagelezen) | "Meer dan 750 miljoen euro aan facturen in 2025" (volgens Trustup, in het Computable-persbericht) |
| In Belgische toplijsten | Computable-persbericht sep 2026: nr. 7 van 10. Bouwflow top 10: ja. Vertuoza top 12: ja. Cobria-artikel: nee | Computable-persbericht: nr. 1. Cobria-artikel: ja |
| Erkenning | Deloitte Technology Fast 50: winnaar Enterprise software 2022, opnieuw in de lijst van 2025. De Tijd (2022), Made in (2025: "groeit 50 procent per jaar zonder investeerders") | niet nagekeken |

Claude las in run 1 het Computable-persbericht waar Trustup op 1 staat en Robaws
op 7. Het noemde er alleen Bouwflow (nr. 4) uit.

## Waarom die wel, en die niet? Bouwsoft tegen Robaws

Bouwsoft werd twee keer genoemd, Robaws nooit. Allebei Belgische bouwsoftware,
allebei met een Nederlandstalige site en een pagina over offertes.

| | Bouwsoft (genoemd: Claude run 2, Google) | Robaws (0 van 3) |
|---|---|---|
| Pagina die de AI las | bouwsoft.be "Offertes en prijsberekening" (Google), en een Computable-artikel uit 2021 over de overname door Visma (Claude run 2) | geen, in geen van de drie runs. Ook geen robaws.com-pagina tussen de 65 zoekresultaten van Claude |
| In het artikel dat Google las (Cobria, sep 2026) | eigen kop, 11 vermeldingen | 0 vermeldingen |
| Computable-persbericht dat Claude las (sep 2026) | nr. 10, 10 vermeldingen | nr. 7, 4 vermeldingen |
| Andere vergelijkingen | Vertuoza top 12: 19 vermeldingen. Bouwflow top 10: 7. Teamleader maakte een aparte pagina "Teamleader Focus of Bouwsoft" | Vertuoza top 12: 3 vermeldingen. Bouwflow top 10: 6 |
| Reviews | apps in de App Store en Google Play. Geen Google-score te zien | Google 4,4 (41 reviews), Trustpilot 1 review, G2 3, Facebook 3 |
| Pers | Computable en Visma, 2021 (overname) | De Tijd 2022, Made in 2025, winnaar Deloitte Fast 50 in 2022 |
| Website | bouwsoft.be opent in het Nederlands. Prijspagina: "op maat voor startende, kleine en middelgrote bouwprofessionals", 69 euro per maand plus 865 euro opstartkost | Zonder taalvoorkeur, zoals bij een crawler, sturen robaws.be en robaws.com door naar robaws.com/en (Engels). Prijspagina zonder één bedrag, alleen "Vraag hier jouw demo aan" |

**Waarom die wel, en die niet:** Bouwsoft stond in het artikel dat Google las en
zet prijs en doelgroep op zijn eigen site, terwijl Robaws, ondanks meer pers, in
dat artikel ontbreekt, geen prijs toont en in het Engels opent.

## Bronnen

- Cobria, "Beste offerte- en facturatiesoftware bouw 2026":
  https://www.cobria.com/nl/artikelen/beste-offerte-facturatiesoftware-bouw
- Computable, "De 10 beste software voor bouwbedrijven in België" (persbericht, 17 september 2026):
  https://www.computable.nl/persberichten/de-10-beste-software-voor-bouwbedrijven-in-belgie/
- Computable, "Noorse Visma neemt Belgische Use It Group over" (13 juli 2021):
  https://www.computable.be/2021/07/13/noorse-visma-neemt-belgische-use-it-group-over/
- Vertuoza, "Top 12 beste bouwsoftware van 2025":
  https://www.vertuoza.com/nl-be/blog/top-12-beste-bouwsoftware-van-2024
- Bouwflow, "Top 10 Beste ERP Software voor de Bouw in 2026":
  https://www.bouwflow.be/blog/beste-erp-software-bouw
- Bouwsoft prijspagina: https://www.bouwsoft.be/nl/prijs-visma-bouwsoft/prijs-voor-bouwprofessionals
- Robaws offertepagina: https://robaws.com/nl-BE/functionaliteiten/offertes
- Robaws prijspagina: https://robaws.com/nl-BE/prijs
