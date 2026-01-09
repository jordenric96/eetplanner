/* DATA VOOR JANUARI WEEK 3 & 4 - DELHAIZE VERS EDITIE */

var shoppingData = {
    ricour: {
        v: ["Varkenshaasje (ca. 500g) - €8.50", "Rundergehakt (500g voordeel) - €5.99", "Kipfilet blokjes (600g) - €8.95", "Kabeljauwfilets (3 stuks) - €9.75", "Tonijn in eigen nat (2 blikjes) - €3.10", "Eieren (6st) - €1.95"],
        g: ["Broccoli (500g vers) - €1.29", "Wortelen (zak 1kg vers) - €1.15", "Paprika mix (3 stuks vers) - €1.99", "Zoete aardappel (per stuk ca. 800g) - €2.20", "Courgette (2 stuks vers) - €1.70", "Ui (net 1kg) - €1.25", "Diepvries Pompoen (450g Delhaize) - €1.39", "Diepvries Erwten (400g Delhaize) - €0.95", "Diepvries Preiringen (600g Delhaize) - €1.45"],
        k: ["Pasta Penne (500g) - €0.95", "Quinoa (400g) - €2.45", "Rijst (500g) - €0.85", "Passata (500ml) - €0.99", "Kokosmelk (400ml) - €1.45", "Linzen (blik 400g) - €0.90"]
    },
    hemmeryckx: {
        v: ["Varkenshaas (350g) - €5.70", "Rundergehakt (350g) - €4.20", "Kipblokjes (400g) - €5.95", "Kabeljauw (2 stuks) - €6.50"],
        g: ["Broccoli (vers) - €0.95", "Wortelen (vers) - €0.75", "Paprika (2 stuks) - €1.35", "Zoete aardappel - €1.50"],
        k: ["Pasta - €0.70", "Quinoa - €1.50", "Rijst - €0.60"]
    }
};

var recipeData = {
    recipes: [
        /* --- SOEPEN (DIEPVRIES) --- */
        { 
            m: "SOEP: Wortel-Pompoen 'Zonneschijn'", kcal: 115, p: 2, t: 25,
            ing: ["450g Diepvries Pompoenblokjes", "300g Verse Wortel (schijfjes)", "1.2L Bouillon", "1 Ui"],
            steps: ["1. Snipper de ui en fruit in olie.", "2. Voeg de bevroren pompoen en vers gesneden wortel toe.", "3. Bouillon erbij, 20 min koken.", "4. Mix glad met een snufje kaneel."],
            kid: "Lekker zoet en zacht."
        },
        { 
            m: "SOEP: Groene Monster (Erwtjes-Prei)", kcal: 140, p: 6, t: 20,
            ing: ["400g Diepvries Doperwtjes", "250g Diepvries Preiringen", "2 Aardappelen", "1.2L Bouillon"],
            steps: ["1. Kook aardappelblokjes 10 min.", "2. Voeg bevroren prei en erwtjes toe.", "3. Kook nog 10 min en mix zeer lang."],
            kid: "De erwtjes maken het 'monsterlijk' lekker."
        },

        /* --- WEEK 3 (VERS) --- */
        { 
            m: "Varkenshaas, Verse Broccoli & Aardappelen", kcal: 430, p: 33, t: 25,
            ing: ["500g Varkenshaas", "1 Verse Broccoli", "Aardappelen"], 
            steps: ["1. Kook aardappelen.", "2. Snij de broccoli in roosjes en stoom of kook ze 5-7 min.", "3. Bak het varkenshaasje in boter. Serveer met het braadvocht."], 
            kid: "Miniboompjes dopen in de saus." 
        },
        { 
            m: "Pasta Rundergehakt & Verse Wortel-Passata", kcal: 560, p: 29, t: 25,
            ing: ["500g Gehakt", "300g Pasta", "3 Grote wortelen (vers)", "Passata"], 
            steps: ["1. Rasp de wortelen fijn (vers kookt sneller).", "2. Bak gehakt met geraspte wortel.", "3. Voeg passata toe en meng met de gekookte pasta."], 
            kid: "Door het raspen zijn de wortels bijna onzichtbaar in de saus." 
        },
        { 
            m: "Kip & Verse Paprika 'Tover-Quinoa'", kcal: 475, p: 34, t: 25,
            ing: ["600g Kipblokjes", "150g Quinoa", "2 Verse Paprika's"], 
            steps: ["1. Kook quinoa in bouillon.", "2. Snij paprika in kleine blokjes en bak samen met de kipblokjes goudbruin.", "3. Meng alles door elkaar."], 
            kid: "De rode en gele paprika maken het bord feestelijk." 
        },
        { 
            m: "Kabeljauw & Zoete Aardappelfrietjes", kcal: 415, p: 27, t: 30,
            ing: ["3 Kabeljauwfilets", "800g Zoete aardappel", "1 Courgette (vers)"], 
            steps: ["1. Snij zoete aardappel in frieten, besprenkel met olie en bak 25 min in de oven (200C).", "2. Bak de vis in de pan.", "3. Bak verse courgetteschijfjes kort mee."], 
            kid: "Zelfgemaakte gezonde frietjes!" 
        },
        { 
            m: "Gevulde Paprika (Gehakt/Rijst/Courgette)", kcal: 505, p: 31, t: 35,
            ing: ["3 Grote Paprika's (vers)", "Gehakt restje", "Rijst", "Halve Courgette"], 
            steps: ["1. Hol de paprika's uit.", "2. Meng gehakt met rijst en blokjes courgette.", "3. Vul de paprika's en zet 30 min in de oven."], 
            kid: "Een 'eetbaar potje' gevuld met lekkers." 
        },

        /* --- WEEK 4 (VERS) --- */
        { 
            m: "Kip in Romige Wortelsaus & Rijst", kcal: 525, p: 32, t: 25,
            ing: ["Kipblokjes", "4 Verse wortelen", "Rijst", "100ml Room"], 
            steps: ["1. Kook wortelen gaar en mix ze met room tot een gladde saus.", "2. Bak kip en overgiet met de saus. Serveer met rijst."], 
            kid: "Oranje saus is altijd een hit." 
        },
        { 
            m: "Pasta Broccoli-Tonijn Romig", kcal: 485, p: 28, t: 15,
            ing: ["Pasta", "Verse Broccoli", "Tonijn", "Roomkaas"], 
            steps: ["1. Kook pasta en kleine broccoliroosjes samen.", "2. Meng tonijn en roomkaas erdoor voor een snelle saus."], 
            kid: "Zachte smaak, geen sterke visgeur." 
        },
        { 
            m: "Milde Zoete Aardappel Curry", kcal: 445, p: 17, t: 30,
            ing: ["Zoete aardappel", "Linzen", "Kokosmelk"], 
            steps: ["1. Stoof blokjes zoete aardappel in kokosmelk met milde currypasta.", "2. Voeg linzen toe aan het einde."], 
            kid: "Lekker zoetig en vullend." 
        },
        { 
            m: "Verse Gehakt-Paprika Schotel", kcal: 535, p: 28, t: 25,
            ing: ["Gehakt", "1 Verse Paprika", "Aardappelen"], 
            steps: ["1. Bak aardappelblokjes krokant.", "2. Bak gehakt met verse paprikablokjes.", "3. Meng alles samen."], 
            kid: "Lekker met een beetje ketchup." 
        },
        { 
            m: "Wok Quinoa met Verse Groenten & Ei", kcal: 435, p: 21, t: 20,
            ing: ["Quinoa", "Restjes verse groenten", "3 Eieren"], 
            steps: ["1. Wok fijngesneden verse groenten.", "2. Voeg gekookte quinoa toe.", "3. Roerbak de eieren erdoor."], 
            kid: "Het 'alles-is-op' gerechtje dat toch lekker is." 
        }
    ]
};
