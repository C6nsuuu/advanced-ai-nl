# Build: spraak naar offerteposten

De spraakfunctie van OpMaat, mijn app voor aannemers en zelfstandigen in de
bouw. De aannemer spreekt op de werf in wat hij ziet en wat er moet gebeuren.
Daaruit komt een concept-offerte in zijn eigen huisstijl.

## Wat waar staat

| Bestand | Inhoud |
|---|---|
| `taak.md` | De taak volgens de vijf regels van de cursus |
| `prompt.md` | v4, de versie die nu draait: v3 plus een bron voor het btw-tarief |
| `prompt-v3.md` | v3, de versie van week 3 tot 5 |
| `prompt-v2.md` | v2b, de versie waarop 19 van de 24 runs liepen |
| `prompt-v1.md` | v1 uit week 2, bewaard om tegen af te zetten |
| `materialenlijst.csv` | fictieve bibliotheek van tien regels, in elke run dezelfde |
| `audit.md` | De zes bouwstenen tegen v1, en wat ontbrak |
| `test-set.md` | Twaalf inputs met het juiste antwoord vooraf, en 24 runs |
| `log.md` | Wat ik veranderde en wat ermee gebeurde |
| `bronnen/fod-btw-verbouwen.md` | De bron van week 6: FOD Financiën over het btw-tarief bij verbouwen (CC0) |
| `test-set-bron.md` | B01 tot B05: vijf werfopnames voor de bron, antwoord vooraf, 4 op 5 |
| `live-query.md` | Week 6: wat AI antwoordt als Joeri een offerte-app zoekt |
| `geo-audit.md` | Week 6: kan AI Robaws vinden? Zes criteria, 12 op 18 |

## Hoe je een input draait

Eén input per keer, in een nieuw gesprek, zonder web search. Niet in deze map,
want hier leest de tool `context.md` mee. Gebruik een incognito- of tijdelijk
gesprek in de Claude- of ChatGPT-app, of een terminal in een lege map.

1. Plak de volledige prompt uit `prompt.md`.
2. Vul de materialenlijst in (dezelfde regels elke keer, zie onderaan
   `test-set.md`, anders zijn de runs niet vergelijkbaar). Plak onder BRON de
   volledige inhoud van `bronnen/fod-btw-verbouwen.md`.
3. Plak één transcript onder WERFOPNAME.
4. Zet de uitvoer in de kolom Run 1 of Run 2 van `test-set.md`.

Nooit de testset meegeven. Dan ziet het model de antwoorden.

## B01 tot B05 draaien op GPT-6 Luna

Eerst B01 tot B05 invullen in `test-set-bron.md`, met het antwoord vooraf. Dan,
vanuit `build/evals`:

```
python3 haal-op.py
read -rs "OPENAI_API_KEY?OpenAI-sleutel: " && export OPENAI_API_KEY
INPUTS=bron-inputs.json python3 run.py gpt-6-luna prompt-v4.txt 1
python3 toon.py | grep -A1 '^B0'
python3 bundel.py
```

`read -rs` vraagt de sleutel zonder hem te tonen of in je geschiedenis te
zetten. Elk geval is een aparte API-call, dus een nieuwe sessie.

## In de app

De echte keten staat in `OpMaatapp/supabase/functions/werfopname/index.ts` en
heeft drie modelstappen waar deze prompt er één van maakt: Whisper voor de
transcriptie, `splitsTranscriptNaarAntwoorden` voor de verdeling over zes
interviewvelden, en de postgenerator. Naast de keten lopen de regelcontroles in
`controles.js` en een losse vragenstap op gpt-4o-mini.

Wat deze cursusprompt in één stap doet, doet de app in drie. Dat is relevant
voor de fout uit T01: die zat op de overdracht tussen stap twee en drie, niet
in één prompt. Zie `audit.md`.

## Bekende beperkingen

De bron van week 6 is één pagina. Ze zegt niet dat verwarming op fossiele
brandstoffen sinds juli 2025 onder 21 procent valt; dat staat alleen in de
PDF-lijst van FOD Financiën. Zie `log.md`, week 6.

De uitvoer verslechtert als de aannemer vaag of onvolledig spreekt. De leidraad
met voorbeeldantwoorden in de app stuurt zijn taalgebruik bij, maar maakt de
testinputs daardoor gecontroleerder dan een echte werf. Dat is een bovengrens
op het succespercentage.
