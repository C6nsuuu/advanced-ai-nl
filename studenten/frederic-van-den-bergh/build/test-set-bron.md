# Testset bron

Bron: `build/bronnen/werkplaatsfactuur.md` (fictieve werkplaatsfactuur WP-2026-0417, trekker DAF XF 480, kenteken 1-ABC-123). Prompt: `build/prompt-v2-bron.md`.

Het antwoord staat voor de input. Vier gevallen worden door de factuur beantwoord (B01 tot B04). Eén niet (B05).

| ID | Juiste soort / dringendheid | Juiste bron | Input (bericht van de chauffeur) | Waarom | Run 1 |
|---|---|---|---|---|---|
| B01 | verlichting / snel nakijken | herstelling 4 | trekker 1-ABC-123 linker koplamp werkt niet meer | Een koplamp is verplicht, dus niet "kan wachten", maar de wagen kan nog rijden. De factuur toont herstelling 4: linkerkoplamp vervangen op 12 november. | verlichting / snel nakijken, bron herstelling 4 |
| B02 | motor / onzeker | opmerking monteur (olielekkage turboslang) | trekker 1-ABC-123 ruikt naar olie, er druppelt iets bij de turbo | De veiligheidsregel in de prompt noemt olielekken, dus bij twijfel het strengste niveau of "onzeker". De factuur geeft context (de monteur noemt een kleine olielekkage aan de turboslang, op te volgen), maar de tool beslist hier niet "snel nakijken" tegen de regel in. | motor / direct stilleggen, bron opmerking monteur |
| B03 | ander / kan wachten | herstelling 5 | trekker 1-ABC-123 de airco werkt niet goed meer | Comfort, geen veiligheid (zelfde regel als T16). De factuur toont herstelling 5: interieurfilter vervangen en airco gecontroleerd op 12 november. | ander / snel nakijken, bron herstelling 5 |
| B04 | onzeker / snel nakijken | herstelling 3 | trekker 1-ABC-123 ik hoor lucht blazen achteraan, druk blijft goed | Zelfde regel als T05: lucht blazen zonder drukverlies is "snel nakijken", de soort is onzeker. De factuur toont herstelling 3: luchtdrukleiding achteras hersteld, met een nieuwe koppeling. | onzeker / snel nakijken, bron herstelling 3 en opmerking monteur |
| B05 | verlichting / snel nakijken | niet in het document | remorque 22 knipperlicht links doet niets meer | De factuur gaat alleen over trekker 1-ABC-123. De tool moet de melding wel ordenen (zelfde regel als T20), maar eerlijk zeggen dat het document niets over remorque 22 bevat en geen herstelling of opmerking verzinnen. | verlichting / snel nakijken, bron niet in het document |

## Score

Eén run per geval (n = 5).

- Document juist (bron): 5 op 5. Bij B04 noemde de tool twee bronnen (herstelling 3 en opmerking monteur); dat is als juist gerekend.
- Soort en dringendheid juist: 3 op 5. Juist: B01, B04, B05. Fout: B02 (direct stilleggen i.p.v. onzeker), B03 (snel nakijken i.p.v. kan wachten).
