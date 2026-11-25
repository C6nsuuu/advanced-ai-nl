# Week 7 — Tools, MCP en agents

*Zelf bouwen, kopen of aansluiten?*

Woensdag 25 november, 10:30–13:30.

## Waar het om gaat

**Een taalmodel kan alleen tekst schrijven. Toch leest Claude je agenda.** Hoe?

Het model schrijft geen antwoord, maar een verzoek: "lees de agenda van dinsdag". De app voert dat uit. Het resultaat gaat terug in het contextvenster, zoals in week 3. Dan schrijft het model verder. Dat is een **tool**. Een model dat dat in een lus doet, tot de taak af is, is een **agent**.

Vandaag doe je het twee keer:

- **Build:** je maakt een eigen skill, voor iets wat je elke week opnieuw aan je AI vraagt.
- **Connect:** je koppelt je AI aan een app die je echt gebruikt, via MCP.

En je denkt na over de derde weg voor je capstone-plek: **Buy**, een kant-en-klaar product.

Dit telt voor het criterium **integratie** van je memo (10%).

## Wat je om 13:30 hebt

- Je eigen skill, voor iets wat je vaak aan je AI vraagt.
- Getest: 3 keer met echte input.
- Een connector in je desktop-app, en een MCP-server in Claude Code of Codex.
- Weet wat pitch 1 is, en tegen wanneer.

## Verloop

| | |
|---|---|
| 10:30 | `start week 7` |
| 10:35 | Pitch 1: wat, hoe, tegen wanneer |
| 10:45 | Hoe een AI tools gebruikt |
| 11:00 | **Build:** je eigen skill, getest met sub-agents |
| 12:05 | Pauze |
| 12:15 | **Connect:** koppel een app via MCP |
| 12:55 | **Buy:** wat kan je bedrijf kopen? |
| 13:03 | Build, Connect of Buy: jouw keuze |
| 13:10 | Post en pull request |

## Nog vier lessen

| | |
|---|---|
| 25 november | Tools, MCP en agents |
| 2 december | Beveiliging · lokaal model · Build-checkpoint 2 · feedback pitch 1 |
| 9 december | Ethiek, AI Act en GDPR · memo-check: wat mist je nog? |
| 16 december | Capstone-verdediging, in de les |

## Start

Open je tool in je eigen map, `studenten/jouw-naam/`. Typ:

| Claude | Codex |
|---|---|
| `/week start week 7` | `$week start week 7` |

## Pitch 1: je richting

Een video van drie minuten. Je zegt:

1. Voor welk bedrijf, en over welke beslissing?
2. Wat raad je aan? Ja of nee. Nee mag ook.
3. Op welk getal hangt je advies?
4. Wat weet je nog niet?


- **Tegen dinsdag 1 december, 23:59.** Op Canvas, niet op GitHub.
- Telt voor 5% van je eindcijfer.
- Op 2 december: feedback pitch 1, in de les. Alleen wie er is.

Alles staat in [`cursus/beoordeling/pitch.md`](../beoordeling/pitch.md). Lees vooral de laatste alinea: **begin met je advies.**

## Hoe een AI tools gebruikt

1. **Je vraagt iets.** "Wat staat er dinsdag in mijn agenda?"
2. **Het model kiest een tool.** Het schrijft: `agenda.lees(dinsdag)`. Het voert niets zelf uit.
3. **De app voert het uit.** Vaak vraagt hij eerst jouw toestemming.
4. **Het resultaat gaat in de context.** Zoals je in week 3 zelf context gaf.
5. **Het model antwoordt, of kiest de volgende tool.** Dat herhalen tot het af is: dat is een agent.

Drie woorden die je vandaag gebruikt:

| | Wat | Voorbeeld |
|---|---|---|
| **Skill** | Een bestand met instructies. De AI leest het pas als het nodig is. | `/examenvragen` maakt vragen uit je lesnotities |
| **MCP** | Een open standaard om een AI aan een app te koppelen. Eén stekker voor alle AI's, zoals USB-C. | Google Agenda, Notion, Gmail |
| **Sub-agent** | Een agent die een deeltaak doorgeeft aan een andere agent, met een eigen contextvenster. | "Zoek 20 bedrijven" naast "beoordeel elk bedrijf" |

### Build, Connect, Buy

| | Wat | Wat zit er vast als je weg wil? |
|---|---|---|
| **Build** | Je maakt het zelf. Een skill, een script. | Weinig: het bestand is van jou. |
| **Connect** | Je koppelt een AI aan wat je al hebt, via MCP. | De koppeling is een open standaard. Andere AI, zelfde stekker. |
| **Buy** | Je koopt een product met AI erin. | Je data en je werkwijze zitten in hun systeem. |

Geen van de drie is altijd juist. De vraag is: **wat zit er vast als de prijs verdubbelt?**

## Build: je eigen skill

Wat vraag je elke week opnieuw aan ChatGPT of Claude? Elke keer dezelfde uitleg, dezelfde regels? Daar maak je een skill van.

1. **Kies iets wat je vaak vraagt.** Voor je studie, je werk, je leven of je Build.
2. **Schrijf op hoe je het wil.** De stappen, je regels, een voorbeeld van een goed resultaat. Dit doe je zelf.
3. **Maak er een skill van.** Zelf, of samen met je AI. Hij komt in je eigen map:

   | Claude | Codex |
   |---|---|
   | `.claude/skills/<naam>/SKILL.md` | `.agents/skills/<naam>/SKILL.md` |

4. Sluit je AI en open hem opnieuw. Typ `/<naam>` (Claude) of `$<naam>` (Codex).
5. **Test hem 3 keer met echte input.** Laat elke test in een eigen sub-agent lopen:

   > Test mijn skill 3 keer, met deze 3 inputs. Elke test in een eigen sub-agent.

   Zo begint elke test met een leeg contextvenster: test 1 beïnvloedt test 2 niet. Was het elke keer goed? Niet? Pas je skill aan en test opnieuw.

> ⚠️ Je map staat in een publieke repo. Zet niets privé in je skill.

### Skills in je desktop-app

Ook de app van Claude of ChatGPT kent skills.

| | Vinden en aanzetten | Zelf toevoegen |
|---|---|---|
| **Claude** | Customize → Skills. Zet er een aan. | Add → maak hem met Claude, of upload je skill-map als zip. |
| **ChatGPT** | Plugins → tab Skills | Create → met chat, of upload. Alleen met een Edu- of Business-account. |

- **Gebruiken:** typ `/` in je chat en kies je skill. Of vraag gewoon je taak: de app kiest zelf de skill die past.
- **Je skill uit Claude Code werkt ook in de app.** Zip je skill-map (de map zelf, niet alleen `SKILL.md`) en upload hem. Het is hetzelfde bestand.
- **Zie je niets bij Claude?** Zet Instellingen → Capabilities → *Code execution and file creation* aan.

## Connect: een connector die je echt gebruikt

**Eerst in je desktop-app** (Claude of ChatGPT).

1. Instellingen → **Connectors** (Claude) of **Apps** (ChatGPT).
2. Kies een connector die nuttig is voor jouw dagelijks leven of voor je Build. Agenda, mail, Notion, Drive, Spotify, ...
3. Stel een vraag die de connector nodig heeft. Kijk wanneer de app toestemming vraagt.
4. **Was het nuttig?** Eén echt moment waarop het hielp, of faalde.

> ⚠️ Wat je koppelt, kan de AI lezen. En wat hij leest, gaat naar de AI-aanbieder. Denk na voor je je werkmail of de gegevens van iemand anders koppelt. Volgende week komt dit terug.

**Dan in Claude Code of Codex.** Hier zie je wat een MCP-server is: een adres en een lijst tools.

| Claude | Codex |
|---|---|
| `claude mcp add --transport http <naam> <url>` | `codex mcp add <naam> --url <url>` |
| `/mcp` in Claude: zie de tools | `codex mcp list` |

Zoek de URL van een server bij je connector, of vraag je tool om er een te zoeken.

**Zie het verschil met live data.** CoinGecko werkt zonder account:

1. Vraag eerst zonder: "Wat kost bitcoin nu in euro, en hoeveel steeg of daalde hij de laatste 24 uur?"
2. Koppel CoinGecko:

   ```
   claude mcp add --transport http coingecko https://mcp.api.coingecko.com/mcp
   codex mcp add coingecko --url https://mcp.api.coingecko.com/mcp
   ```

3. Stel dezelfde vraag opnieuw. Kijk naar het tijdstip.

Zonder: een oud getal, of "dat weet ik niet". Met: de prijs van deze minuut.

**Sneller klaar?** Laat je skill de connector gebruiken. Een skill die zelf zijn input ophaalt, is een agent.

## Buy: wat kan je bedrijf kopen?

In Claude Code of Codex:

> Gebruik 3 sub-agents tegelijk. Elke sub-agent zoekt op het web één programma dat mijn bedrijf kan kopen voor [jouw taak]. Geef per programma: naam, wat het doet, prijs per maand, en de datum van die prijs.

Zelfde patroon als deep research: drie zoekers, één samenvatting. Bewaar de prijzen: je hebt ze nodig voor **Buy** in je post.

Eigen leven als capstone? Zoek een app die je zou kunnen kopen.

## Je post

Bestand: `posts/week-07.md`. Dinsdag lever je ook pitch 1 in: deze post is bewust licht.

```markdown
# Week 7: <titel in je eigen woorden>

## Mijn skill
<Wat vroeg je vroeger elke keer opnieuw? Wat doet je skill nu? Hoeveel keer van de 3 was het goed?>

## Mijn connector
<Welke, in welke app. Eén moment waarop hij nuttig was, of niet.>

## Build, Connect, Buy
<De tabel hieronder, voor je capstone-plek.>
```

Zo ziet het derde deel eruit (verzonnen voorbeeld: leads zoeken voor een houthandel):

```markdown
|  | Voor de houthandel | Wat zit er vast? |
|---|---|---|
| **Build** | Mijn prompt als skill `/leads`: één bestand. | Bijna niets. Het bestand is van mij, en Codex leest het ook. |
| **Connect** | Claude + een connector naar Google Maps, zodat de skill zelf bedrijven zoekt. | MCP is een open standaard. Andere AI, zelfde connector. |
| **Buy** | Een leadtool zoals Apollo: €__ per maand (prijs van hun site, datum erbij). | De leads zitten in hun systeem. Kan ik ze exporteren? Ik ging kijken: … |

**Mijn advies:** Connect, want mijn skill vond 7 van 10 leads juist, en een leadtool kent geen rubberhout.
**Wat me van mening doet veranderen:** als Apollo een CSV-export heeft en onder €__ per maand blijft.
```

Je eigen leven als capstone? Dan is "Buy" de app die je nu gebruikt, of die je zou kopen.

In je pull request: je skill-map.

**Peer review.** Je reviewt de post van een klasgenoot, zoals altijd.

Indienen: typ `dien week 7 in`. Deadline: **dinsdag 1 december, 23:59**. Diezelfde avond: pitch 1 op Canvas.

## Klaar als

- [ ] Je skill staat in `.claude/skills/` of `.agents/skills/` in je eigen map, en hij draait.
- [ ] Je post zegt hoeveel keer van de 3 je skill goed was.
- [ ] Je post noemt je connector en één moment waarop hij nuttig was, of niet.
- [ ] Je tabel Build, Connect, Buy is ingevuld voor je capstone-plek, met een advies en wat je van mening doet veranderen.
- [ ] Pitch 1 staat op Canvas.
