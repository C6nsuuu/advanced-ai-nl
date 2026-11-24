# Prompt v1

Plak alles onder de lijn in een nieuw gesprek. Zet het bericht onderaan in de plaats van `<BERICHT>`.

---

Je zet een kort, slordig berichtje over een training om naar rijen voor een Excel-bestand waarin ik mijn progressie bijhoud. De training is fitness, lopen of allebei.

Geef een tabel met deze kolommen, in deze volgorde:

| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |

Regels:
- Eén rij per oefening.
- Schrijf de oefening voluit. Gebruik daarvoor de legende hieronder: dat is mijn eigen lijst van afkortingen en oefeningen. Staat een afkorting of oefening niet in de legende? Neem ze letterlijk over.
- Alleen getallen in sets, reps, gewicht, afstand en tijd. Geen eenheden.
- Staat er `A x B` zonder apart gewicht in kg (bv. `36 x 6`)? Dan is A het gewicht en B de reps, want zo typ ik het altijd. Zijn A en B hetzelfde (bv. `12X12`)? Neem dan allebei over: dat getal is zowel gewicht als reps.
- Staat een waarde niet in het bericht? Schrijf `?`. Gok nooit en vul niets aan.
- Staat er geen oefening in? Zet `?` in alle andere kolommen en vat het bericht kort samen in `notitie`, want ik wil snel zien hoe de training ging. Anders is `notitie` `?`.
- Gaat het bericht niet over een training? Schrijf alleen: `geen training`, want ik wil dat mijn Excel enkel trainingen bevat.
- Onder de tabel komt één bronregel per oefening: `Bron: <deel van de legende>, <wat erin staat>`, bv. `Bron: Afkortingen, inc db`. Staat de oefening niet in de legende? Schrijf `Bron: niet in de legende` en daaronder `Vraag: wat bedoel je met "<woord>"? Dan zet ik het in de legende.` Staat er geen oefening in het bericht, dan komt er geen bronregel.
- Geef alleen de tabel en de bronregels, of `geen training`. Geen andere uitleg.

Legende:

| Wat ik typ | Betekent |
|---|---|
| `db` | dumbbell |
| `inc db` | incline dumbbell press |
| `db press` | dumbbell press |
| `bench` | bench press |
| `spidercurl` | spider curl |
| `pull ups` | pull-ups |
| `km` | lopen (lopen is de enige cardio die ik track) |
| `cardio` | cardio, niet per se lopen |
| `chestday` | trainingsdag borst + triceps |
| `arm day` | trainingsdag armen |

Mijn oefeningen per dag:
- Chestday (borst + triceps): incline dumbbell press, flies, bench press, skullcrusher, pushdowns, dips
- Rug + biceps: pull-ups, pulldowns, rows, seated rows, spider curls, hammer curls, curls
- Schouders (soms): lateral raises, shoulder press, reverse flies
- Benen (zelden): squats, deadlift
- Cardio: lopen, geschreven als afstand in km en tijd in min, bv. `5km 36min`

Voorbeelden:

Bericht: squat 100 GEHAALD eindelijk!!! wel ni volledig diep maar telt
| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |
|---|---|---|---|---|---|---|
| squat | ? | ? | 100 | ? | ? | PR, niet volledig diep |

Bron: Benen, squats

Bericht: kweet ni wa er mis was vandaag alles voelde zwaar, 2u geslapen zal t zijn
| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |
|---|---|---|---|---|---|---|
| ? | ? | ? | ? | ? | ? | zwaar, weinig slaap |

Bericht: gewogen 78,4 gisteren 77,9 ik snap mijn lichaam ni
geen training

Bericht:
inc db 36 x 6
