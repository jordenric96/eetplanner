/* DATA VOOR JANUARI WEEK 3 & 4 - DELHAIZE VERS EDITIE */
var shoppingData = {
    ricour: {
        v: ["Varkenshaasje (ca. 500g) - €8.50", "Rundergehakt (500g) - €5.99", "Kipfilet blokjes (600g) - €8.95", "Kabeljauwfilets (3 stuks) - €9.75", "Tonijn (2 blikjes) - €3.10", "Eieren (6st) - €1.95"],
        g: ["Broccoli (vers) - €1.29", "Wortelen (1kg) - €1.15", "Paprika mix (3st) - €1.99", "Zoete aardappel - €2.20", "Courgette (2st) - €1.70", "Ui (1kg) - €1.25", "DV Pompoen (450g) - €1.39", "DV Erwten (400g) - €0.95", "DV Prei (600g) - €1.45"],
        k: ["Pasta (500g) - €0.95", "Quinoa (400g) - €2.45", "Rijst (500g) - €0.85", "Passata (500ml) - €0.99", "Kokosmelk (400ml) - €1.45", "Linzen (400g) - €0.90"]
    },
    hemmeryckx: {
        v: ["Varkenshaas (350g) - €5.70", "Rundergehakt (350g) - €4.20", "Kipblokjes (400g) - €5.95", "Kabeljauw (2st) - €6.50", "Tonijn (1 blik) - €1.50"],
        g: ["Broccoli - €0.95", "Wortelen - €0.75", "Paprika (2st) - €1.35", "Zoete aardappel - €1.50", "Courgette - €1.10"],
        k: ["Pasta - €0.70", "Quinoa - €1.50", "Rijst - €0.60"]
    }
};

var recipeData = {
    recipes: [
        /* WEEK 3 */
        { 
            id: "jan_w3_1", m: "Ma 19/01: Varkenshaas & Broccoli", kcal: 430, p: 33, t: 25,
            ing: ["500g Varkenshaas", "1 Verse Broccoli", "600g Aardappelen"], 
            steps: [
                "1. Schil de aardappelen en kook ze gaar in gezouten water.",
                "2. Snij de varkenshaas in dikke medaillons en bak ze goudbruin in boter (ca. 3-4 min per kant).",
                "3. Snij de broccoli in kleine roosjes en stoom of kook ze in 5-7 minuten beetgaar.",
                "4. Maak een simpel sausje door wat water bij het bakvet van het vlees te voegen en even in te koken.",
                "5. Serveer het vlees met de aardappelen en de broccoli."
            ], 
            kid: "Laat kinderen de broccoli 'boompjes' in de puree planten." 
        },
        { 
            id: "jan_w3_2", m: "Di 20/01: Pasta Gehakt & Wortel", kcal: 560, p: 29, t: 25,
            ing: ["500g Gehakt", "300g Pasta", "3 Wortelen", "Passata"], 
            steps: [
                "1. Kook de pasta volgens de instructies.",
                "2. Rasp de verse wortelen heel fijn of snij ze in mini blokjes.",
                "3. Bak het gehakt rul in een pan en voeg de wortelen toe. Bak 5 min mee.",
                "4. Giet de passata erbij en kruid met uienpoeder en Italiaanse kruiden. Laat 10 min pruttelen.",
                "5. Meng de saus door de pasta."
            ], 
            kid: "Door de wortels te raspen worden ze 'onzichtbaar' en maken ze de saus lekker zoet." 
        },
        { 
            id: "jan_w3_3", m: "Wo 21/01: Kip Paprika Quinoa", kcal: 475, p: 34, t: 25,
            ing: ["600g Kipblokjes", "150g Quinoa", "2 Paprika's"], 
            steps: [
                "1. Kook de quinoa in kippenbouillon voor extra smaak.",
                "2. Snij de verse paprika in kleine blokjes.",
                "3. Bak de kipblokjes goudbruin met wat mild paprikapoeder.",
                "4. Voeg de paprikablokjes toe en bak ze 5 min mee tot ze zacht zijn.",
                "5. Meng de kip en paprika onder de gekookte quinoa."
            ], 
            kid: "Quinoa met 'magische witte staartjes' is leuk om te laten zien aan tafel." 
        },
        { 
            id: "jan_w3_4", m: "Do 22/01: Kabeljauw & Zoete Friet", kcal: 415, p: 27, t: 30,
            ing: ["3 Kabeljauwfilets", "800g Zoete aardappel", "1 Courgette"], 
            steps: [
                "1. Snij de zoete aardappel in frietjes, meng met olie en bak 25 min op 200°C in de oven.",
                "2. Bak de kabeljauwfilets in een pan met boter (3-4 min per kant).",
                "3. Snij de courgette in dunne schijfjes en bak deze op hoog vuur in dezelfde pan als de vis.",
                "4. Serveer de vis bovenop de courgette met de frietjes ernaast."
            ], 
            kid: "Dit zijn gezonde 'fish and chips'!" 
        },
        { 
            id: "jan_w3_5", m: "Vr 23/01: Gevulde Paprika", kcal: 505, p: 31, t: 35,
            ing: ["3 Paprika's", "Rundergehakt", "Rijst", "Halve Courgette"], 
            steps: [
                "1. Kook de rijst gaar. Snij de kapjes van de paprika's en verwijder de zaden.",
                "2. Meng het gehakt met de rijst en heel fijn gesneden courgette.",
                "3. Vul de paprika's en zet ze in een ovenschaal.",
                "4. Bak de paprika's 30 minuten in een oven op 180°C.",
                "5. Serveer eventueel met wat tomatensaus."
            ], 
            kid: "Een paprika als 'eetbaar kommetje' spreekt tot de verbeelding." 
        },
        /* WEEK 4 */
        { 
            id: "jan_w4_1", m: "Ma 26/01: Kip Wortelsaus & Rijst", kcal: 525, p: 32, t: 25,
            ing: ["Kipblokjes", "4 Verse wortelen", "Rijst", "100ml Room"], 
            steps: [
                "1. Kook de rijst. Kook de wortelen in bouillon tot ze heel zacht zijn.",
                "2. Giet de wortelen af maar bewaar wat vocht. Mix de wortelen met de room tot een gladde saus.",
                "3. Bak de kipblokjes goudbruin in de pan.",
                "4. Meng de kip met de wortelsaus en laat nog even doorwarmen.",
                "5. Serveer over de rijst."
            ], 
            kid: "De saus is prachtig oranje en heel mild van smaak." 
        },
        { 
            id: "jan_w4_2", m: "Di 27/01: Pasta Broccoli-Tonijn", kcal: 485, p: 28, t: 15,
            ing: ["Pasta", "1 Broccoli", "Tonijn in blik", "Roomkaas"], 
            steps: [
                "1. Kook de pasta en kleine roosjes broccoli samen in één pot.",
                "2. Giet af en meng direct een flinke lepel roomkaas erdoor.",
                "3. Voeg de uitgelekte tonijn toe en roer voorzichtig om.",
                "4. Kruid met uienpoeder en een beetje peper."
            ], 
            kid: "De roomkaas maakt de tonijn en broccoli heerlijk romig." 
        },
        { 
            id: "jan_w4_3", m: "Wo 28/01: Zoete Aardappel Curry", kcal: 445, p: 17, t: 30,
            ing: ["Zoete aardappel", "Linzen", "Kokosmelk", "Milde Curry"], 
            steps: [
                "1. Snij de zoete aardappel in kleine blokjes.",
                "2. Bak een lepel milde currypasta kort aan en voeg de aardappel toe.",
                "3. Giet de kokosmelk erbij en laat 15-20 min pruttelen.",
                "4. Voeg de linzen (uitgelekt) toe en warm nog 5 minuten mee."
            ], 
            kid: "Deze curry is niet pikant maar wel heel vullend en gezond." 
        },
        { 
            id: "jan_w4_4", m: "Do 29/01: Gehakt-Paprika Schotel", kcal: 535, p: 28, t: 25,
            ing: ["Gehakt", "1 Paprika", "600g Aardappelen"], 
            steps: [
                "1. Snij de aardappelen in kleine blokjes en bak ze goudbruin in de pan.",
                "2. Bak in een andere pan het gehakt met kleine blokjes paprika.",
                "3. Meng de krokante aardappeltjes door het gehaktmengsel vlak voor het serveren."
            ], 
            kid: "De krokante aardappeltjes zijn favoriet bij kinderen." 
        },
        { 
            id: "jan_w4_5", m: "Vr 30/01: Wok Quinoa & Ei", kcal: 435, p: 21, t: 20,
            ing: ["Quinoa", "Restjes verse groenten", "3 Eieren"], 
            steps: [
                "1. Kook de quinoa. Snij alle restjes groenten heel fijn.",
                "2. Wok de groenten op hoog vuur. Voeg de quinoa toe.",
                "3. Maak een kuiltje, breek de eieren erin en roer tot ze gestold zijn door de quinoa."
            ], 
            kid: "Een 'confetti-rijst' gerechtje waar alles in mag." 
        }
    ]
};
