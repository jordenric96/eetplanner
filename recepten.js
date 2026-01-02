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
*/

// Hieronder start de rest van je code...
/* MASTER DATA V31 - OPTIE A (EXACT VERBRUIK) 
   - Geen champignons & Geen scampi's.
   - Vakantie Ricour: 2 t/m 6 februari.
   - Prijzen herrekend naar effectief verbruik.
*/

const altijdNodig = ["Olijfolie", "Peper & Zout", "Bouillonblokjes", "Lookpoeder", "Paprikapoeder"];

const shoppingData = {
    jan: {
        p1: {
            ricour: {
                v: ["Kipgehakt (1000g) - €10.40", "Chipolata (1000g) - €9.50", "Tonijn (3 blikken) - €4.50", "Eieren (3st) - €0.90"],
                g: ["🥗 Aardappelen (1500g) - €1.85", "🥗 Wortelen (1000g) - €1.00", "Uien (500g) - €0.75", "🥗 Courgettes (4st) - €3.40", "Spinazie (500g) - €1.29", "Erwten (400g) - €1.89"],
                k: ["Pasta (1125g) - €2.25", "Rijst (1000g) - €1.75", "Tomatenblokjes (1600g) - €2.60", "Linzen (1000g) - €2.70", "Wraps (8st) - €1.59", "Kokosmelk (800ml) - €2.70", "Room (250ml) - €0.85", "Pesto (190g) - €1.85"]
            },
            hemmeryckx: {
                v: ["Kipgehakt (670g) - €7.00", "Chipolata (670g) - €6.40", "Tonijn (2 blikken) - €3.00", "Eieren (2st) - €0.60"],
                g: ["🥗 Aardappelen (1000g) - €1.25", "🥗 Wortelen (670g) - €0.70", "Uien (330g) - €0.50", "🥗 Courgettes (3st) - €2.55", "Spinazie (330g) - €0.85", "Erwten (270g) - €1.00"],
                k: ["Pasta (750g) - €1.50", "Rijst (670g) - €1.20", "Tomatenblokjes (1000g) - €1.60", "Linzen (670g) - €1.80", "Wraps (6st) - €1.35", "Kokosmelk (530ml) - €1.80", "Room (165ml) - €0.60", "Pesto (190g) - €1.85"]
            }
        },
        p2: {
            ricour: {
                v: ["Kipgehakt (1100g) - €11.20", "Chipolata (300g) - €3.50", "Tonijn (2 blikken) - €3.00", "Kipfilet (1200g) - €15.60", "Eieren (5st) - €1.50"],
                g: ["🥗 Broccoli (500g) - €1.50", "🥗 Courgettes (3st) - €2.55", "🥗 Paprika Mix (3st) - €2.25", "🥗 Sla mix (100g) - €1.50", "Aardappelen (1000g) - €1.25"],
                k: ["Passata (500ml) - €0.95", "Quinoa (250g) - €1.80", "Rijst (600g) - €1.10", "Pasta (1125g) - €2.20", "Room (250ml) - €0.85", "Kokosmelk (400ml) - €1.35", "Linzen (250g) - €0.70"]
            },
            hemmeryckx: {
                v: ["Kipgehakt (740g) - €7.50", "Chipolata (200g) - €2.35", "Tonijn (1.5 blik) - €2.25", "Kipfilet (800g) - €10.45", "Eieren (4st) - €1.20"],
                g: ["🥗 Broccoli (330g) - €1.00", "🥗 Courgettes (2st) - €1.70", "🥗 Paprika (2st) - €1.50", "🥗 Sla mix (70g) - €1.00", "Aardappelen (670g) - €0.85"],
                k: ["Passata (330ml) - €0.65", "Quinoa (170g) - €1.20", "Rijst (400g) - €0.75", "Pasta (750g) - €1.50", "Room (170ml) - €0.60", "Kokosmelk (270ml) - €0.90", "Linzen (170g) - €0.50"]
            }
        }
    },
    feb: {
        p1: {
            ricour: {
                v: ["Zalmfilet (600g) - €14.50", "Spekreepjes (250g) - €3.20"],
                g: ["🥗 Kerstomaten (500g) - €2.50", "🥗 Avocado (1st) - €1.40", "Witte Kool (300g) - €0.80", "Aardappelen (500g) - €0.65"],
                k: ["Bulgur (450g) - €1.50"]
            },
            hemmeryckx: {
                v: ["Kalkoenlapjes (1000g) - €14.50", "Rundergehakt (500g) - €6.10", "Zalmfilet (600g) - €14.50", "Spekreepjes (250g) - €3.20"],
                g: ["🥗 Bloemkool (1st) - €2.10", "🥗 Prei (3st) - €1.80", "Witte Kool (500g) - €1.20", "🥗 Avocado (2st) - €2.80", "🥗 Kerstomaten (500g) - €2.50", "Aardappelen (2000g) - €2.50"],
                k: ["Noedels (500g) - €2.10", "Tortilla's (8st) - €1.95", "Zwarte bonen (400g) - €1.15", "Bulgur (500g) - €1.50", "Rijst (400g) - €0.80", "Kokosmelk (400ml) - €1.35"]
            }
        },
        p2: {
            ricour: {
                v: ["Kipfilet (1800g) - €23.40", "Kabeljauw (1800g) - €34.35", "Varkensmignonettes (800g) - €9.20"],
                g: ["🥗 Paksoi (3st) - €5.85", "🥗 Asperge-broccoli (600g) - €6.75", "🥗 Komkommer (3st) - €2.85", "🥗 Verse Koriander (1st) - €1.50", "Aardappelen (1000g) - €1.25", "🥗 Avocado (2st) - €2.50", "🥗 Kerstomaten (500g) - €2.40"],
                k: ["Udon Noedels (1200g) - €7.80", "Pindakaas (350g) - €2.85", "Naanbrood (4st) - €3.90", "Rijst (600g) - €1.10"]
            },
            hemmeryckx: {
                v: ["Kipfilet (1200g) - €16.20", "Kabeljauw (1200g) - €24.15", "Varkensmignonettes (530g) - €6.20"],
                g: ["🥗 Paksoi (2st) - €3.90", "🥗 Asperge-broccoli (400g) - €4.50", "🥗 Komkommer (2st) - €1.90", "🥗 Avocado (1st) - €1.40", "🥗 Kerstomaten (330g) - €1.60", "Aardappelen (670g) - €0.85"],
                k: ["Udon Noedels (800g) - €5.20", "Pindakaas (250g) - €2.10", "Naanbrood (2st) - €1.95", "Rijst (400g) - €0.80"]
            }
        }
    }
};

const recipeData = {
    jan: {
        p1: {
            startDatum: "2026-01-05",
            recipes: [
                { m: "Pasta Bolognese", kcal: 650, p: 32, t: 25, ing: ["500g Kipgehakt", "375g Pasta", "800g Tomaat", "100g Ui"], steps: ["Snij de ui fijn.", "Bak gehakt rul.", "Voeg tomaat toe.", "Sudder 15 min.", "Meng met pasta."], kid: "Saus mixen." },
                { m: "Aziatische Kip Wok", kcal: 580, p: 30, t: 20, ing: ["500g Kipgehakt", "250g Rijst", "1 Courgette"], steps: ["Kook rijst.", "Wok kip en courgette.", "Sojasaus erbij."], kid: "Kip apart houden." },
                { m: "Gekruide Linzenstoof", kcal: 510, p: 26, t: 25, ing: ["250g Linzen", "400ml Kokosmelk", "400g Tomaat"], steps: ["Ui fruiten.", "Alles toevoegen.", "20 min sudderen."], kid: "Met yoghurt." },
                { m: "Mexicaanse Wraps", kcal: 640, p: 29, t: 15, ing: ["8 Tortilla's", "1 Courgette", "250g Linzenstoof"], steps: ["Bak courgette.", "Meng met linzen.", "Vul wraps."], kid: "Zelf rollen." },
                { m: "Tonijn-Spinazie Pasta", kcal: 690, p: 35, t: 15, ing: ["320g Tonijn", "375g Pasta", "500g Spinazie"], steps: ["Kook pasta.", "Warm spinazie op.", "Voeg tonijn toe."], kid: "Extra kaas." },
                { m: "Worst & Stamppot", kcal: 720, p: 26, t: 30, ing: ["500g Chipolata", "750g Aardappel", "500g Wortel"], steps: ["Kook groenten.", "Bak worst.", "Stampen."], kid: "Kuiltje jus." },
                { m: "Snelle Jambalaya", kcal: 640, p: 25, t: 25, ing: ["250g Chipolata", "250g Rijst", "1 Courgette"], steps: ["Bak worst.", "Wok groenten.", "Meng rijst."], kid: "Worst in muntjes." },
                { m: "Linzencurry", kcal: 550, p: 22, t: 20, ing: ["250g Linzen", "400ml Kokosmelk", "250g Rijst"], steps: ["Kook rijst.", "Warm curry op."], kid: "Dippen met wrap." },
                { m: "Pasta Pesto", kcal: 630, p: 18, t: 15, ing: ["375g Pasta", "190g Pesto", "1 Courgette"], steps: ["Kook pasta.", "Bak courgette.", "Mengen."], kid: "Groene pasta." },
                { m: "Nasi Goreng", kcal: 540, p: 24, t: 20, ing: ["250g Rijst", "3 Eieren", "200g Erwten"], steps: ["Wok rijst.", "Bak ei.", "Mengen."], kid: "Ei apart." }
            ]
        },
        p2: {
            startDatum: "2026-01-19",
            recipes: [
                { m: "Wortel-Stoemp met Chipolata", kcal: 620, p: 28, t: 25, ing: ["300g Chipolata", "500g Aardappel", "400g Wortel"], steps: ["Kook aardappel en wortel gaar.", "Bak de worst.", "Stamp de groenten."], kid: "Oranje puree." },
                { m: "Pasta Bolognese (Wortel-Rijk)", kcal: 580, p: 32, t: 20, ing: ["500g Kipgehakt", "375g Pasta", "500ml Passata", "200g Wortel"], steps: ["Rasp wortel fijn.", "Bak met gehakt.", "Voeg passata toe."], kid: "Verstopt in de saus." },
                { m: "Kip & Wortel Wok", kcal: 540, p: 35, t: 20, ing: ["600g Kipfilet", "250g Rijst", "200g Wortel", "1 Courgette"], steps: ["Snij alles in reepjes.", "Wok kip en groenten."], kid: "Met sojasaus." },
                { m: "Budget Curry (Wortel/Linzen)", kcal: 510, p: 22, t: 25, ing: ["250g Linzen", "400ml Kokosmelk", "200g Wortel", "250g Rijst"], steps: ["Stoof wortel met curry.", "Voeg linzen en kokos toe."], kid: "Zachte smaak." },
                { m: "Gevulde Courgette (Budget)", kcal: 540, p: 29, t: 30, ing: ["2 Courgettes", "300g Kipgehakt", "100g Wortel", "100g Rijst"], steps: ["Hul uit en vul.", "25 min in de oven."], kid: "Groentebootjes." },
                { m: "Kip-Wortel in Roomsaus", kcal: 610, p: 38, t: 20, ing: ["600g Kipfilet", "100g Wortel", "250ml Room", "375g Pasta"], steps: ["Bak kip met fijne wortel.", "Voeg room toe."], kid: "Lekker zoet." },
                { m: "Pasta Tonijn & Erwtjes", kcal: 560, p: 34, t: 15, ing: ["320g Tonijn", "375g Pasta", "200g Erwten"], steps: ["Kook pasta met erwten.", "Meng tonijn erdoor."], kid: "Snelle hap." },
                { m: "Wortel-Rijst Schotel", kcal: 490, p: 22, t: 15, ing: ["250g Rijst", "100g Wortel", "3 Eieren"], steps: ["Wok rijst met geraspte wortel.", "Roer eitje erdoor."], kid: "Eier-rijst." },
                { m: "Gehakt-Aardappel Pan", kcal: 590, p: 31, t: 20, ing: ["500g Kipgehakt", "500g Aardappel", "2 Paprika's"], steps: ["Bak alles in één pan."], kid: "Klassieker." },
                { m: "Restjes-Wok Quinoa", kcal: 510, p: 25, t: 15, ing: ["250g Quinoa", "Restjes Wortel", "2 Eieren"], steps: ["Wok alles op."], kid: "Laatste restjes." }
            ]
        }
    },
    feb: {
        p1: {
            startDatum: "2026-02-02",
            recipes: [
                { m: "H: Kalkoen-Curry", kcal: 580, p: 42, t: 25, ing: ["500g Kalkoen", "500g Bloemkool", "200g Rijst"], steps: ["Bak kalkoen.", "Saus maken."], kid: "Nvt" },
                { m: "H: Mexicaanse Bowl", kcal: 620, p: 34, t: 20, ing: ["500g Gehakt", "200g Bonen", "1 Avocado"], steps: ["Bowl vullen."], kid: "Nvt" },
                { m: "H: Prei-Zalm", kcal: 690, p: 36, t: 25, ing: ["2 Zalmfilets", "2 Preien", "500g Aardappel"], steps: ["Zalm bakken."], kid: "Nvt" },
                { m: "H: Koolstamppot", kcal: 710, p: 22, t: 30, ing: ["250g Spekjes", "500g Kool", "1kg Aardappel"], steps: ["Stampen."], kid: "Nvt" },
                { m: "H: Kalkoen-Taco", kcal: 590, p: 35, t: 20, ing: ["500g Kalkoen", "4 Tortilla's"], steps: ["Taco vullen."], kid: "Nvt" },
                { m: "Vrij: Ricour Terug - Zalm Bulgur", kcal: 540, p: 30, t: 20, ing: ["300g Zalm", "200g Bulgur", "250g Kerstomaat"], steps: ["Bak zalm.", "Meng met bulgur."], kid: "Welkom thuis." },
                { m: "Zat: Spek-Witte Kool", kcal: 710, p: 22, t: 25, ing: ["250g Spekjes", "300g Witte Kool", "500g Aardappel"], steps: ["Wokken."], kid: "Krokant." },
                { m: "Zon: Bulgur & Avocado", kcal: 560, p: 38, t: 20, ing: ["250g Bulgur", "1 Avocado", "250g Kerstomaat"], steps: ["Koud mengen."], kid: "Smeuïg." }
            ]
        },
        p2: {
            startDatum: "2026-02-16",
            recipes: [
                { m: "Pinda-Kip met Paksoi", kcal: 610, p: 40, t: 20, ing: ["400g Kipfilet", "1 Paksoi", "200g Rijst"], steps: ["Bak kip/paksoi.", "Pindasaus erbij."], kid: "Pindakaas." },
                { m: "Kabeljauw Naan-Pizza", kcal: 580, p: 32, t: 15, ing: ["400g Kabeljauw", "2 Naans", "250g Kerstomaat"], steps: ["Bakken."], kid: "Pizza!" },
                { m: "Kip & Asperge-Broccoli", kcal: 540, p: 35, t: 25, ing: ["400g Kipfilet", "200g Broccoli", "500g Aardappel"], steps: ["Ovenplaat."], kid: "Stelen." },
                { m: "Milde Vis-Curry", kcal: 620, p: 29, t: 20, ing: ["400g Kabeljauw", "400g Noedels", "1 Paksoi"], steps: ["Saus garen."], kid: "Slurpen." },
                { m: "Kip-Pinda Noedels", kcal: 590, p: 38, t: 20, ing: ["400g Kipfilet", "400g Noedels", "1 Komkommer"], steps: ["Mengen."], kid: "Crunch." },
                { m: "Vis met Koriander Rijst", kcal: 530, p: 28, t: 20, ing: ["400g Kabeljauw", "200g Rijst"], steps: ["Vis bakken."], kid: "Witvis." },
                { m: "Varkensmignonette & Komkommer", kcal: 510, p: 34, t: 15, ing: ["400g Varkensvlees", "1 Komkommer", "500g Aardappel"], steps: ["Bak vlees."], kid: "Slingers." },
                { m: "Udon-soep met Kip", kcal: 480, p: 32, t: 20, ing: ["200g Kipfilet", "200g Noedels"], steps: ["Bouillon."], kid: "Soep." },
                { m: "Naan met Kip & Avocado", kcal: 640, p: 31, t: 15, ing: ["200g Kipfilet", "2 Naans", "1 Avocado"], steps: ["Beleg naan."], kid: "Sandwich." },
                { m: "Vis-Wok met Noedels", kcal: 550, p: 30, t: 15, ing: ["400g Kabeljauw", "200g Noedels"], steps: ["Wok alles."], kid: "Vorkvangen." }
            ]
        }
    }
};