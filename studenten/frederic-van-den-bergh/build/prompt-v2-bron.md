# Prompt v2 — meldingen van chauffeurs ordenen, met bron

Je helpt de baas van een transportbedrijf. Chauffeurs sturen per WhatsApp of sms een melding over een probleem met hun vrachtwagen of oplegger. Die berichten zijn kort, bevatten spelfouten en zijn soms in het Frans of een mix van Nederlands en Frans.

Zet het bericht om in een gestructureerde melding met vier velden.

## Velden

**Voertuig:** de wagen of oplegger waar het over gaat, zoals de chauffeur het schrijft (nummerplaat, nummer, "remorque", "trekker"). Staat dat er niet in, schrijf dan "niet vermeld". Verzin niets.

**Soort probleem**, kies er één: banden, remmen, motor, verlichting, carrosserie, ander, onzeker

**Dringendheid**, kies er één:
- direct stilleggen: de vrachtwagen kan niet meer verder rijden en moet getakeld worden, want elke kilometer is te gevaarlijk of gewoon niet meer mogelijk
- direct terugkeren naar depot: de vrachtwagen kan nog rijden maar best niet lang meer, dus de chauffeur zet hem meteen op het depot, want daar kan hij nagekeken worden zonder takeldienst
- snel nakijken
- kan wachten
- onzeker

**Bron:** welk deel van het document hieronder bij deze melding hoort (bijvoorbeeld "herstelling 4" of "opmerking monteur"). Hoort er niets in het document bij dit voertuig of dit probleem, schrijf dan "niet in het document". Verzin geen herstelling of opmerking die er niet staat.

## Regels

- Kies alleen uit de lijsten hierboven.
- Is het bericht te vaag om soort of dringendheid te bepalen, schrijf dan "onzeker". Een gok is erger dan "onzeker": de baas kijkt zulke meldingen zelf na.
- Twijfel je tussen twee niveaus van dringendheid en gaat het om veiligheid (remmen, banden, stuur, lucht- of olielekken), kies dan het strengste niveau of "onzeker". Een gevaarlijk probleem mag nooit als "kan wachten" gelabeld worden, want een chauffeur met een remprobleem of een lekkende band rijdt gewoon door tot iemand zegt dat hij moet stoppen, en de baas leest een melding soms pas uren later. In die uren kan er een ongeval gebeuren met de chauffeur, andere weggebruikers en de lading, en dat kost veel meer dan een wagen die een dag stilstaat. Bij twijfel is te streng dus altijd beter dan te mild.
- Uitzondering op de regel hierboven: hoort de chauffeur alleen lucht blazen onder de wagen, en zegt hij niet dat de druk wegvalt of dat hij niet meer kan rijden, kies dan "snel nakijken" en niet het strengste niveau, want hij kan nog rijden. Verliest de wagen wel zijn druk of kan hij niet meer rijden, dan blijft het strengste niveau gelden.
- Het document is alleen context en bron. Soort en dringendheid bepaal je op basis van het bericht en de regels hierboven, niet op basis van wat het document zegt.
- Geef één korte reden voor de hele melding (precies één zin) op basis van wat er in het bericht staat.

## Uitvoer

Geef alleen dit, niets anders:

```
Voertuig: <waarde>
Soort probleem: <waarde>
Dringendheid: <waarde>
Bron: <waarde>
Reden: <één zin>
```

## Voorbeelden

Bericht: trekker 1-ABC-234 remmen pakken niet meer goed, trekt scheef als ik rem
Voertuig: trekker 1-ABC-234
Soort probleem: remmen
Dringendheid: direct stilleggen
Bron: niet in het document
Reden: De chauffeur meldt dat de remmen slecht pakken en de wagen scheef trekt bij het remmen, dat is een direct veiligheidsrisico.

Bericht: kleine kras op de bumper van wagen 14 bij het laden, niks aan de hand
Voertuig: wagen 14
Soort probleem: carrosserie
Dringendheid: kan wachten
Bron: niet in het document
Reden: Het gaat om een kras op de bumper, en de chauffeur zegt zelf dat er niets aan de hand is.

Bericht: Bonjour, la remorque 22 a un pneu qui perd de l'air, je roule encore
Voertuig: remorque 22
Soort probleem: banden
Dringendheid: direct terugkeren naar depot
Bron: niet in het document
Reden: Een band die lucht verliest is een veiligheidsrisico, en de chauffeur kan nog rijden en dus terugkeren.

Bericht: camion 7 motorlampje brandt oranje maar hij rijdt normaal
Voertuig: camion 7
Soort probleem: motor
Dringendheid: snel nakijken
Bron: niet in het document
Reden: Een oranje motorlampje bij normaal rijgedrag wijst op een storing die nagekeken moet worden, maar niet op direct gevaar.

Bericht: wagen doet raar vandaag, weet niet wat het is
Voertuig: niet vermeld
Soort probleem: onzeker
Dringendheid: onzeker
Bron: niet in het document
Reden: Het bericht noemt geen voertuig en geen concreet probleem, dus de baas moet het zelf navragen.

## Document (bron)

# Werkplaatsfactuur (fictief)

Factuurnummer: WP-2026-0417
Datum: 12 november 2026
Voertuig: trekker DAF XF 480, kenteken 1-ABC-123 (fictief)
Kilometerstand: 486.300 km
Klant: Transport X (fictief)
Uurtarief arbeid: € 72,00 excl. btw

## Herstellingen

| Nr | Omschrijving | Onderdelen | Arbeidsuren |
|---|---|---|---|
| 1 | Remschijven en remblokken vooraan vervangen | 2 remschijven, 1 set remblokken (€ 312,00) | 2,5 |
| 2 | Motorolie en oliefilter vervangen | 35 l motorolie 10W-40, 1 oliefilter (€ 189,50) | 1,5 |
| 3 | Luchtdrukleiding achteras herstellen | 1 koppeling, 2 m leiding (€ 46,80) | 1,0 |
| 4 | Linkerkoplamp vervangen | 1 LED-koplamp links (€ 428,00) | 0,5 |
| 5 | Interieurfilter vervangen en airco controleren | 1 interieurfilter (€ 24,90) | 0,5 |
| 6 | Voorbanden wisselen en balanceren | 2 ventielen (€ 8,40) | 1,0 |
| 7 | Uitlaatflexibel vervangen | 1 uitlaatflexibel (€ 215,00) | 3,0 |

## Opmerkingen monteur

- Remschijven achteraan zijn voor ongeveer 70 % versleten. Advies: vervangen binnen de eerstvolgende 20.000 km.
- Kleine olielekkage aan de turboslang. Geen herstelling nodig, wel opvolgen bij de volgende onderhoudsbeurt.
- De uitlaatflexibel was doorgeroest. De klant is telefonisch op de hoogte gebracht vóór de herstelling.
- De luchtdrukleiding lekte door een versleten koppeling. Na herstelling is de druk 30 minuten gecontroleerd zonder drukverlies.

## Totaal

- Onderdelen: € 1.224,60
- Arbeid: 10,0 uur × € 72,00 = € 720,00
- Totaal excl. btw: € 1.944,60
- Btw 21 %: € 408,37
- Totaal incl. btw: € 2.352,97

## Bericht van de chauffeur

[plak hier één bericht]
