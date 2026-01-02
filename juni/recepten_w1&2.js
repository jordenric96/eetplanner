/* MASTER INSTRUCTIES VOOR DE AI (Lees dit bij elke update):
   --------------------------------------------------------
   Bij het genereren van een nieuwe maand, volg deze strikte regels:

   1. GEZINNEN & SCHALING:
      - Baseline = Gezin Ricour (3 personen: 2 volw, 1 kind). Gebruik grote verpakkingen.
      - Gezin Hemmeryckx = 2 volwassenen. Gebruik realistische kleine verpakkingen en pas de prijs aan.
      - De app vermenigvuldigt de ingrediënten in het receptscherm automatisch met 0.67 voor Hemmeryckx. 
        Vul dus in de code altijd de hoeveelheid voor 3p in bij 'ing'.

   2. RECEPT STRUCTUUR:
      - 'm': Naam van het gerecht.
      - 'kcal' & 'p': Waarden PER PERSOON (deze blijven gelijk voor beide gezinnen).
      - 't': Bereidingstijd in minuten.
      - 'kast': Lijst met items uit de voorraadkast (kruiden, sauzen, olie). Deze verschijnen dynamisch in de tool.
      - 'steps': Uitgebreide, stappenplan-uitleg voor de bereiding.
      - 'kid': Specifieke tip om het voor een kind (Gezin Ricour) aantrekkelijk te maken.
- Geen champignons (vervangen door courgette/broccoli).
   - Geen scampi's/garnalen (allergie).
   - Januari & Februari volledig ingevuld.

   3. BOODSCHAPPENLIJST:
      - Gebruik het 🥗 symbool voor producten die in de tweede week vers gehaald moeten worden.
      - Vlees/Vis mag in grote verpakkingen blijven (invriezen).
      - Zorg dat de prijzen voor Hemmeryckx realistisch zijn voor kleinere winkelmandjes.

   4. NAVIGATIE:
      - Voeg de nieuwe maand toe aan de 'shoppingData' en 'recipeData' objecten.
*//* MASTER DATA V38 - STRIKTE ONDERVERDELING PER WEEK */
/* MASTER DATA V39 - VOLLEDIGE HERSTELLING (10 GERECHTEN PER PERIODE) */
/* MASTER DATA V40 - VOLLEDIG HERSTEL MET DETAILS & KINDERTIPS */
/* MASTER DATA V41 - VOLLEDIG MET ALLE DETAILS VOOR JANUARI & FEBRUARI */
/* MASTER DATA V44 - DEFINITIEVE VERSIE
   --------------------------------------------------------
   1. ÉÉN VOLLEDIGE LIJST: Geen opsplitsing meer tussen week 1 en 2.
   2. UITGEBREIDE UITLEG: Zeer gedetailleerde stappenplannen voor elk recept.
   3. VOORGROND INFO: kcal, p, t en ingrediënten zijn geoptimaliseerd voor dashboard-weergave.
   4. VAKANTIE RICOUR: 2 t/m 6 februari (Activiteit-symbolen).
*/
/* MASTER DATA V45 - VOLLEDIG HERSTEL & UITGEBREIDE UITLEG */
/* MASTER DATA V48 - VOLLEDIGE DATASET (4 WEKEN) */

const altijdNodig = ["Olijfolie", "Peper & Zout", "Bouillonblokjes", "Lookpoeder", "Paprikapoeder", "Boter"];

const shoppingData = {
    jan: {
        p1: {
            ricour: {
                v: ["Kipgehakt (1000g) - €10.40", "Chipolata (1000g) - €9.50", "Tonijn (3 blikken) - €4.50", "Eieren (6st) - €1.80"],
                g: ["🥗 Aardappelen (1500g) - €1.85", "🥗 Wortelen (1000g) - €1.00", "Uien (500g) - €0.75", "🥗 Courgettes (4st) - €3.40", "Spinazie (500g) - €1.29", "Erwten (400g) - €1.89"],
                k: ["Pasta (1125g) - €2.25", "Rijst (1000g) - €1.75", "Tomatenblokjes (1600g) - €2.60", "Linzen (1000g) - €2.70", "Wraps (8st) - €1.59", "Kokosmelk (800ml) - €2.70", "Room (250ml) - €0.85", "Pesto (190g) - €1.85"]
            },
            hemmeryckx: {
                v: ["Kipgehakt (670g) - €7.00", "Chipolata (670g) - €6.40", "Tonijn (2 blikken) - €3.00", "Eieren (4st) - €1.20"],
                g: ["🥗 Aardappelen (1000g) - €1.25", "🥗 Wortelen (670g) - €0.70", "Uien (330g) - €0.50", "🥗 Courgettes (3st) - €2.55", "Spinazie (330g) - €0.85", "Erwten (270g) - €1.00"],
                k: ["Pasta (750g) - €1.50", "Rijst (670g) - €1.20", "Tomatenblokjes (1000g) - €1.60", "Linzen (670g) - €1.80", "Wraps (6st) - €1.35", "Kokosmelk (530ml) - €1.80", "Room (165ml) - €0.60", "Pesto (190g) - €1.85"]
            }
        },
        p2: {
            ricour: {
                v: ["Kipgehakt (1100g) - €11.20", "Chipolata (300g) - €3.50", "Kipfilet (1200g) - €15.60", "Tonijn (2 blikken) - €3.00", "Eieren (5st) - €1.50"],
                g: ["🥗 Aardappelen (1000g) - €1.25", "🥗 Broccoli (500g) - €1.50", "🥗 Courgettes (3st) - €2.55", "🥗 Paprika Mix (3st) - €2.25", "🥗 Wortelen (1000g) - €1.00"],
                k: ["Passata (500ml) - €0.95", "Quinoa (500g) - €3.40", "Rijst (600g) - €1.10", "Pasta (1125g) - €2.20", "Kokosmelk (400ml) - €1.35", "Room (250ml) - €0.85"]
            },
            hemmeryckx: {
                v: ["Kipgehakt (740g) - €7.50", "Chipolata (200g) - €2.35", "Kipfilet (800g) - €10.45", "Tonijn (1.5 blik) - €2.25", "Eieren (4st) - €1.20"],
                g: ["🥗 Aardappelen (670g) - €0.85", "🥗 Broccoli (330g) - €1.00", "🥗 Courgettes (2st) - €1.70", "🥗 Paprika (2st) - €1.50", "🥗 Sla mix (70g) - €1.00"],
                k: ["Passata (330ml) - €0.65", "Quinoa (330g) - €2.30", "Rijst (400g) - €0.75", "Pasta (750g) - €1.50", "Room (170ml) - €0.60", "Kokosmelk (270ml) - €0.90"]
            }
        }
    },
    feb: {
        p1: {
            ricour: {
                v: ["Zalmfilet (300g) - €9.50", "Spekreepjes (250g) - €3.20", "Kipfilet (1200g) - €15.60", "Rundergehakt (500g) - €6.10"],
                g: ["🥗 Bloemkool (1st) - €2.10", "🥗 Prei (2st) - €1.20", "🥗 Witte Kool (300g) - €0.80", "🥗 Aardappelen (1500g) - €1.85", "🥗 Kerstomaten (250g) - €1.45"],
                k: ["Bulgur (500g) - €1.50", "Rijst (250g) - €0.60", "Pasta (375g) - €0.75", "Kokosmelk (400ml) - €1.35"]
            },
            hemmeryckx: {
                v: ["Kalkoenlapjes (1000g) - €14.50", "Rundergehakt (1000g) - €12.20", "Zalmfilet (600g) - €14.50", "Spekreepjes (250g) - €3.20"],
                g: ["🥗 Bloemkool (1st) - €2.10", "🥗 Prei (3st) - €1.80", "🥗 Witte Kool (500g) - €1.20", "🥗 Aardappelen (2000g) - €2.50", "🥗 Avocado (2st) - €2.80"],
                k: ["Noedels (500g) - €2.10", "Bulgur (500g) - €1.50", "Rijst (400g) - €0.80", "Kokosmelk (400ml) - €1.35"]
            }
        },
        p2: {
            ricour: {
                v: ["Kipfilet (1400g) - €18.20", "Kabeljauw (1200g) - €26.40", "Varkensmignonettes (800g) - €9.20"],
                g: ["🥗 Paksoi (3st) - €5.85", "🥗 Asperge-broccoli (600g) - €6.75", "🥗 Komkommer (2st) - €1.90", "🥗 Aardappelen (1000g) - €1.25", "🥗 Avocado (1st) - €1.40"],
                k: ["Udon Noedels (1200g) - €7.80", "Pindakaas (350g) - €2.85", "Naanbrood (4st) - €3.90", "Rijst (600g) - €1.10"]
            },
            hemmeryckx: {
                v: ["Kipfilet (950g) - €12.35", "Kabeljauw (800g) - €17.60", "Varkensmignonettes (530g) - €6.20"],
                g: ["🥗 Paksoi (2st) - €3.90", "🥗 Asperge-broccoli (400g) - €4.50", "🥗 Komkommer (1st) - €0.95", "🥗 Aardappelen (670g) - €0.85"],
                k: ["Udon Noedels (800g) - €5.20", "Pindakaas (250g) - €2.10", "Naanbrood (2st) - €1.95", "Rijst (400g) - €0.80"]
            }
        }
    }
};

const recipeData = {
    jan: {
        p1: {
            recipes: [
                { m: "Pasta Bolognese", kcal: 650, p: 32, t: 25, ing: ["500g Kipgehakt", "375g Pasta", "800g Tomaat", "100g Ui"], steps: ["Snij de ui zeer fijn en fruit glazig in olie.", "Bak het gehakt rul en goudbruin in de pan.", "Voeg de tomatenblokjes en kruiden toe.", "Laat de saus 15 minuten zachtjes pruttelen.", "Kook de pasta beetgaar en meng met de saus."], kid: "Mix de saus glad met de staafmixer." },
                { m: "Aziatische Kip Wok", kcal: 580, p: 30, t: 20, ing: ["500g Kipgehakt", "250g Rijst", "1 Courgette", "150g Wortel"], steps: ["Kook de rijst volgens de verpakking.", "Snij courgette en wortel in fijne reepjes.", "Bak het kipgehakt rul op hoog vuur.", "Wok de groenten 5 minuten mee met het vlees.", "Breng op smaak met sojasaus en meng de rijst."], kid: "Serveer rijst en kip apart van elkaar." },
                { m: "Milde Linzenstoof", kcal: 510, p: 26, t: 25, ing: ["250g Linzen", "400ml Kokosmelk", "400g Tomaat"], steps: ["Fruit een gesnipperd uitje in een diepe pot.", "Voeg de linzen en tomatenblokjes toe.", "Giet de kokosmelk erbij en roer goed door.", "Laat 20 minuten zacht koken op laag vuur.", "Kruid met peper, zout en wat lookpoeder."], kid: "Voeg een lepel yoghurt toe voor romigheid." },
                { m: "Mexicaanse Wraps", kcal: 640, p: 29, t: 15, ing: ["8 Wraps", "1 Courgette", "150g Maïs"], steps: ["Snij de courgette in blokjes en bak ze kort.", "Warm de maïs en linzenvulling op in een pan.", "Verwarm de wraps 30 seconden in de magnetron.", "Beleg de wraps met het groentemengsel.", "Rol ze strak op en serveer direct."], kid: "Laat kinderen zelf hun wrap vullen." },
                { m: "Tonijn-Spinazie Pasta", kcal: 690, p: 35, t: 15, ing: ["320g Tonijn", "375g Pasta", "500g Spinazie"], steps: ["Kook de pasta in ruim water met zout.", "Laat de spinazie slinken in een grote pan.", "Meng de uitgelekte tonijn door de spinazie.", "Voeg een scheutje olijfolie en de pasta toe.", "Roer goed door op een laag vuur."], kid: "Gebruik extra geraspte kaas als topping." },
                { m: "Worst & Wortelstoemp", kcal: 720, p: 26, t: 30, ing: ["500g Chipolata", "750g Aardappel", "500g Wortel"], steps: ["Kook aardappelen en wortelen in 20 minuten gaar.", "Bak de chipolata's bruin in wat boter.", "Giet de groenten af en bewaar wat kookvocht.", "Stamp alles fijn met kookvocht of melk.", "Breng op smaak met nootmuskaat en zout."], kid: "Maak een kuiltje voor de jus in de stoemp." },
                { m: "Snelle Jambalaya", kcal: 640, p: 25, t: 25, ing: ["250g Chipolata", "250g Rijst", "1 Courgette"], steps: ["Snij de worstjes in muntjes en bak ze krokant.", "Voeg blokjes courgette en tomaat toe aan de pan.", "Roer de gekookte rijst door het mengsel.", "Kruid stevig met paprikapoeder en peper.", "Laat nog 5 minuten goed doorwarmen."], kid: "De worstmuntjes zijn favoriet bij kleintjes." },
                { m: "Linzencurry Rijst", kcal: 550, p: 22, t: 20, ing: ["250g Linzen", "400ml Kokosmelk", "250g Rijst"], steps: ["Kook de rijst in water met een bouillonblokje.", "Warm de linzenvulling op met extra kokosmelk.", "Voeg eventueel wat diepvrieserwtjes toe.", "Serveer de curry in een kom bovenop de rijst.", "Werk af met wat verse koriander (optioneel)."], kid: "Serveer met een stukje naanbrood." },
                { m: "Pasta Pesto Courgette", kcal: 630, p: 18, t: 15, ing: ["375g Pasta", "190g Pesto", "1 Courgette"], steps: ["Kook de pasta beetgaar.", "Maak linten van de courgette met een dunschiller.", "Bak de courgettelinten 2 minuten in olie.", "Meng de pasta, pesto en courgette in een kom.", "Voeg wat extra olijfolie toe indien te droog."], kid: "Noem de courgette 'groene reuzenslierten'." },
                { m: "Nasi met Gebakken Ei", kcal: 540, p: 24, t: 20, ing: ["250g Rijst", "3 Eieren", "200g Erwten"], steps: ["Wok de gekookte rijst op hoog vuur met olie.", "Voeg de doperwtjes en wat sojasaus toe.", "Bak de eieren als spiegelei of door de rijst.", "Blijf roeren tot alles goed gemengd is.", "Kruid met wat kurkuma voor een mooie kleur."], kid: "Snij het gebakken ei in leuke reepjes." }
            ]
        },
        p2: {
            recipes: [
                { m: "Wortel-Stoemp Chipolata", kcal: 620, p: 28, t: 25, ing: ["300g Chipolata", "500g Aardappel", "400g Wortel"], steps: ["Kook de aardappelen en wortelen samen gaar.", "Bak de worstjes goudbruin in de pan.", "Stamp de groenten met een klontje boter.", "Voeg peper en zout toe naar smaak.", "Serveer de worst met een flinke schep stoemp."], kid: "Oranje puree is altijd een hit!" },
                { m: "Pasta Bolognese Wortel", kcal: 580, p: 32, t: 20, ing: ["500g Kipgehakt", "375g Pasta", "200g Wortel"], steps: ["Rasp de wortel heel fijn zodat hij 'verdwijnt'.", "Bak het gehakt en meng de wortel erdoor.", "Voeg passata toe en laat 10 minuten pruttelen.", "Kook de pasta en meng deze door de saus.", "Bestrooi met kaas voor het serveren."], kid: "Onzichtbare groentjes in de saus." },
                { m: "Kip-Wortel Wok Rijst", kcal: 540, p: 35, t: 20, ing: ["600g Kipfilet", "250g Rijst", "200g Wortel"], steps: ["Snij kip en wortel in zeer fijne blokjes.", "Kook de rijst gaar in water.", "Wok de kip en wortel op hoog vuur.", "Blus af met sojasaus en roerbak de rijst mee.", "Serveer in diepe kommen."], kid: "Gebruik kleine stukjes voor makkelijk eten." },
                { m: "Budget Wortel Curry", kcal: 510, p: 22, t: 25, ing: ["250g Linzen", "200g Wortel", "250g Rijst"], steps: ["Snij wortel in blokjes en kook ze kort.", "Meng linzen met kokosmelk en currykruiden.", "Voeg de wortelblokjes toe aan de saus.", "Laat indikken en serveer met witte rijst.", "Breng op smaak met een snufje zout."], kid: "De saus smaakt lekker zoet door de wortel." },
                { m: "Gevulde Courgette", kcal: 540, p: 29, t: 30, ing: ["2 Courgettes", "300g Kipgehakt", "100g Wortel"], steps: ["Hol de courgettes uit met een lepel.", "Meng gehakt met geraspte wortel.", "Vul de courgettes en leg ze in een ovenschotel.", "Bak 25 minuten op 200 graden in de oven.", "Serveer met een restje rijst."], kid: "De courgette is een bootje voor het vlees." },
                { m: "Kip-Wortel Roomsaus", kcal: 610, p: 38, t: 20, ing: ["600g Kipfilet", "100g Wortel", "250ml Room"], steps: ["Bak kipreepjes met fijne schijfjes wortel.", "Voeg de room toe en laat de saus indikken.", "Kook pasta en meng deze door de roomsaus.", "Voeg extra peper toe voor meer diepgang.", "Werk af met wat peterselie."], kid: "Romige sausjes vallen altijd in de smaak." },
                { m: "Pasta Tonijn Erwtjes", kcal: 560, p: 34, t: 15, ing: ["320g Tonijn", "375g Pasta", "200g Erwten"], steps: ["Kook de pasta en de erwten in één pot.", "Giet af en voeg de uitgelekte tonijn toe.", "Meng met olijfolie en wat citroensap.", "Kruid met peper en zout.", "Serveer warm of koud als pastasalade."], kid: "Erwtjes zijn leuke groene balletjes." },
                { m: "Wortel-Rijst met Ei", kcal: 490, p: 22, t: 15, ing: ["250g Rijst", "100g Wortel", "3 Eieren"], steps: ["Wok geraspte wortel met gekookte rijst.", "Maak een kuiltje en bak de eieren erin.", "Roer alles door elkaar tot het ei gestold is.", "Voeg een drupje sojasaus toe.", "Serveer als snelle budgetmaaltijd."], kid: "Gele rijst met oranje spikkeltjes." },
                { m: "Gehakt-Aardappel Pan", kcal: 590, p: 31, t: 20, ing: ["500g Kipgehakt", "500g Aardappel", "2 Paprika's"], steps: ["Bak aardappelblokjes krokant in de pan.", "Voeg het gehakt toe en bak dit rul.", "Wok de paprikablokjes op het laatst mee.", "Kruid met paprikapoeder en zout.", "Een makkelijke eenpansmaaltijd."], kid: "Dippen in een beetje ketchup." },
                { m: "Restjes Quinoa Wok", kcal: 510, p: 25, t: 15, ing: ["250g Quinoa", "Restjes Wortel", "2 Eieren"], steps: ["Gebruik alle groenterestjes van de week.", "Wok ze samen met de gekookte quinoa.", "Meng de eieren erdoor voor binding.", "Breng op smaak met kruiden uit de kast.", "Snel, gezond en zero-waste."], kid: "Een kleurrijk bord vol verrassingen." }
            ]
        }
    },
    feb: {
        p1: {
            recipes: [
                { m: "Vakantie", ricourVakantie: "🛝 Speeltuin", kcal: 0, p: 0, t: 0, ing: [] },
                { m: "Vakantie", ricourVakantie: "👨‍🌾 Boerderij", kcal: 0, p: 0, t: 0, ing: [] },
                { m: "Vakantie", ricourVakantie: "🏊 Zwembad", kcal: 0, p: 0, t: 0, ing: [] },
                { m: "Vakantie", ricourVakantie: "🛝 Speeltuin", kcal: 0, p: 0, t: 0, ing: [] },
                { m: "Vakantie", ricourVakantie: "👨‍🌾 Boerderij", kcal: 0, p: 0, t: 0, ing: [] },
                { m: "Kip-Bloemkool Rijst", kcal: 540, p: 35, t: 20, ing: ["600g Kipfilet", "500g Bloemkool", "250g Rijst"], steps: ["Kook de rijst gaar.", "Bak de kip goudbruin in de pan.", "Voeg kleine bloemkoolroosjes toe.", "Wok alles tot de bloemkool beetgaar is.", "Meng met de rijst en sojasaus."], kid: "Bloemkoolroosjes zijn kleine wolkjes." },
                { m: "Pasta Bolognese Tomaat", kcal: 610, p: 32, t: 20, ing: ["500g Gehakt", "375g Pasta", "400g Kerstomaat"], steps: ["Bak het gehakt rul in een pan.", "Halveer de kerstomaten en voeg ze toe.", "Laat bakken tot ze een sausje vormen.", "Kook de pasta en meng deze erdoor.", "Werk af met wat verse basilicum."], kid: "Kleine tomaatjes zijn vitamine-bommetjes." },
                { m: "Zalm met Bulgur", kcal: 540, p: 30, t: 20, ing: ["300g Zalm", "250g Bulgur", "1 Komkommer"], steps: ["Kook de bulgur in bouillon.", "Bak de zalmfilets op de huid krokant.", "Snij komkommer in blokjes en meng door bulgur.", "Breng op smaak met olijfolie en peper.", "Serveer de vis bovenop de bulgur."], kid: "Zalm is de favoriete vis van beren." },
                { m: "Spek & Witte Kool", kcal: 710, p: 22, t: 25, ing: ["250g Spekjes", "300g Witte Kool", "500g Aardappel"], steps: ["Kook de aardappelen gaar.", "Wok de fijngesneden witte kool met de spekjes.", "Stamp de aardappelen tot een grove puree.", "Meng de kool en spekjes door de puree.", "Breng op smaak met veel peper."], kid: "Zoute spekjes maken kool lekker." },
                { m: "Romige Kip met Prei", kcal: 620, p: 38, t: 25, ing: ["600g Kipfilet", "2 Preien", "400ml Kokosmelk"], steps: ["Was de prei en snij in fijne ringen.", "Bak de kipblokjes bruin.", "Voeg de prei toe en bak tot deze zacht is.", "Giet de kokosmelk erbij en laat inkoken.", "Serveer met een restje rijst of brood."], kid: "De saus is heerlijk om in te dippen." }
            ]
        },
        p2: {
            recipes: [
                { m: "Pinda-Kip Paksoi", kcal: 610, p: 40, t: 20, ing: ["400g Kipfilet", "1 Paksoi", "200g Rijst"], steps: ["Bak de kip goudbruin.", "Voeg de gesneden paksoi toe.", "Maak een saus van pindakaas en water.", "Meng de saus door de kip en groenten.", "Serveer met de gekookte rijst."], kid: "Pindasaus smaakt naar pindakaas!" },
                { m: "Vis Naan-Pizza", kcal: 580, p: 32, t: 15, ing: ["400g Kabeljauw", "2 Naans", "250g Kerstomaat"], steps: ["Beleg de naans met dunne plakjes vis.", "Halveer tomaatjes en leg ze erop.", "Bak 10 minuten op 200 graden in de oven.", "Werk af met een drupje olijfolie.", "Snij in punten zoals een pizza."], kid: "Zelf je pizza versieren." },
                { m: "Kip & Asperge-Broccoli", kcal: 540, p: 35, t: 25, ing: ["400g Kipfilet", "200g Broccoli", "500g Aardappel"], steps: ["Snij alles in grove stukken.", "Leg op een bakplaat met olie en zout.", "Rooster 20 minuten op 200 graden.", "Schud halverwege de plaat even om.", "Gezond en makkelijk uit de oven."], kid: "Lange broccolistelen zijn eetbare bomen." },
                { m: "Milde Vis-Curry", kcal: 620, p: 29, t: 20, ing: ["400g Kabeljauw", "400g Noedels", "1 Paksoi"], steps: ["Warm currysaus op in een pan.", "Leg de vis erin en laat garen met deksel.", "Kook de noedels apart gaar.", "Voeg op het laatst de paksoi toe aan de saus.", "Meng de noedels door de curry."], kid: "Lekker lange noedels slurpen." },
                { m: "Kip-Pinda Noedels", kcal: 590, p: 38, t: 20, ing: ["400g Kipfilet", "400g Noedels", "1 Komkommer"], steps: ["Wok de kipreepjes tot ze gaar zijn.", "Meng de gekookte noedels erdoor.", "Voeg pindasaus en komkommerblokjes toe.", "Roerbak kort op hoog vuur.", "Serveer in kommetjes."], kid: "Crunchy komkommer in de warme noedels." },
                { m: "Vis Koriander Rijst", kcal: 530, p: 28, t: 20, ing: ["400g Kabeljauw", "200g Rijst", "Verse Koriander"], steps: ["Kook de rijst met wat kurkuma.", "Bak de visfilets in boter met zout.", "Meng fijngehakte koriander door de rijst.", "Serveer de vis op de gele rijst.", "Voeg een schijfje citroen toe."], kid: "Witte vis is heel zacht van smaak." },
                { m: "Varkensmignonette", kcal: 510, p: 34, t: 15, ing: ["400g Varkensvlees", "1 Komkommer", "500g Aardappel"], steps: ["Bak de mignonettes in de pan.", "Maak een salade van komkommerlinten.", "Serveer met gekookte aardappelen.", "Maak een lichte saus van het braadvocht.", "Snel en voedzaam."], kid: "Vleesblokjes op een spiesje rijgen." },
                { m: "Udon-soep met Kip", kcal: 480, p: 32, t: 20, ing: ["200g Kipfilet", "400g Noedels", "Bouillon"], steps: ["Breng bouillon aan de kook.", "Voeg kipreepjes en udon noedels toe.", "Laat 5 minuten zachtjes koken.", "Voeg eventueel wat spinazie toe.", "Serveer gloeiend heet in diepe borden."], kid: "Met stokjes eten is een avontuur." },
                { m: "Naan met Kip Avocado", kcal: 640, p: 31, t: 15, ing: ["200g Kipfilet", "2 Naans", "1 Avocado"], steps: ["Bak de kip goudbruin.", "Prak de avocado met peper en zout.", "Smeer de avocado op de warme naans.", "Beleg met de kip en kerstomaatjes.", "Vouw dubbel en geniet."], kid: "Gezonde sandwich op warm brood." },
                { m: "Vis-Wok met Noedels", kcal: 550, p: 30, t: 15, ing: ["400g Kabeljauw", "400g Noedels", "1 Paksoi"], steps: ["Snij de vis in stevige blokjes.", "Wok de paksoi op hoog vuur.", "Voeg de vis toe en bak heel voorzichtig mee.", "Meng de gekookte noedels erdoor.", "Breng op smaak met olijfolie en zout."], kid: "Blokjes vis vissen uit de noedels." }
            ]
        }
    }
};