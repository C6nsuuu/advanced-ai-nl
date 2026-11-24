# Testset bron (B01–B05)

**Bron:** `build/bronnen/lesrooster.md`. Prompt: `build/prompt-bron.md`.

Het juiste antwoord, en waar het in het document staat, schrijf je vóór de eerste run.
B01–B04: het document geeft het antwoord. B05: het document geeft het antwoord níet.

| ID | Vraag | Juiste antwoord | Waar in het document | Run 1 | Juist? |
|---|---|---|---|---|---|
| B01 | Ontvangen op: maandag 7 december 2026<br>Afzender: een docent<br>Onderwerp: Les Recht en fiscaliteit<br>Tekst: Beste studenten, de les Recht en fiscaliteit van dinsdag valt uit. | info, want ik moet niets doen | Lessen semester 1, dinsdag 8/12/2026, 10:30–13:30, Recht en fiscaliteit voor de onderneming, BPS.A3.03 | `info`. Reden: De les vervalt, de student hoeft niets te doen, maar de student moet weten dat de les van dinsdag 8 december niet doorgaat. Bron: Lessen semester 1, week 50, dinsdag 8/12/2026 10:30–13:30, Recht en fiscaliteit voor de onderneming |juist |
| B02 | Ontvangen op: woensdag 2 december 2026<br>Afzender: een docent<br>Onderwerp: Les Marketing<br>Tekst: Beste studenten, de les Marketing van donderdag valt uit. | negeren, want het is niet mijn vak | Mijn vakken: Marketing staat er niet bij (semester 1 en 2) | `negeren`. Reden: De mail gaat over een les Marketing die niet in het rooster van de student staat, dus hij is waarschijnlijk niet voor deze student bedoeld. Bron: staat niet in het rooster |juist |
| B03 | Ontvangen op: maandag 4 januari 2027<br>Afzender: een docent<br>Onderwerp: Examen Recht en fiscaliteit<br>Tekst: Beste studenten, het examen Recht en fiscaliteit van morgen gaat door in lokaal KNT.A2. Breng je codex mee. | dringend, want het is snel en ik moet iets doen | Examens semester 1, dinsdag 5/1/2027, 12:00–14:00, Recht en fiscaliteit + Juridisch management, schriftelijk, KNT.A2 | `dringend`. Reden: De student moet de codex meenemen naar het examen van morgen, dus de deadline valt binnen 3 dagen na ontvangst. Bron: Examens semester 1, dinsdag 5/1/2027 (12:00–14:00), Recht en fiscaliteit + Juridisch management, lokaal KNT.A2 |juist |
| B04 | Ontvangen op: vrijdag 5 februari 2027<br>Afzender: de dienst internationalisering<br>Onderwerp: Infosessie Study abroad<br>Tekst: Beste studenten, herinnering: de infosessie Study abroad is op dinsdag 9 februari. | later, want ik moet dit nog niet nu doen | Lessen semester 2, dinsdag 9/2/2027, 18:30–20:30, VERPLICHTE infosessie + selectieprocedure Study abroad, KNT.A3 | `info`. Reden: Een herinnering aan een al geplande verplichte infosessie zonder nieuwe taak; de student moet de datum onthouden. Bron: Lessen semester 2, week 6, dinsdag 9/2/2027 18:30–20:30, VERPLICHTE infosessie + selectieprocedure Study abroad, KNT.A3 |fout |
| B05 | Ontvangen op: dinsdag 1 december 2026<br>Afzender: Arteveldehogeschool<br>Onderwerp: Studentenkaart<br>Tekst: Ter info: de studentenkaarten voor volgend academiejaar worden in september gemaakt. | negeren, want ik moet niets doen. Rooster: `staat niet in het document` | — | `negeren`. Reden: De mail is alleen ter info en vraagt niets van de student; de enige datum (september) is te vaag om later nog nodig te zijn. Bron: staat niet in het rooster |juist |

Resultaat: **4 op 5 juist** (n = 5, 1 run, model: Haiku 5.5 `claude-haiku-5-5`, 24 november 2026, `claude -p --tools ""`, nieuwe sessie per geval)


Fout: B04. De tool vond de juiste rij in het rooster, maar koos `info` in plaats van `later`, omdat de mail een herinnering is aan iets wat al gepland was.
