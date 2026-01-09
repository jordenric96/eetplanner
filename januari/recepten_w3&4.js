/* DATA VOOR JANUARI WEEK 3 & 4 - GECORRIGEERD */

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
        /* SOEPEN */
        { 
            id: "j_w3_s1", m: "19/01 - SOEP: Wortel-Pompoen", kcal: 115, p: 2, t: 25,
            ing: ["450g DV Pompoen", "300g Wortel", "1.2L Bouillon", "1 Ui"],
            steps: ["1. Fruit de ui.", "2. Bak pompoen en wortel mee.", "3. Kook in bouillon en mix glad."],
            kid: "Zoet en zacht."
        },
        { 
            id: "j_w3_s2", m: "20/01 - SOEP: Groene Monster", kcal: 140, p: 6, t: 20,
            ing: ["400g DV Erwten", "250g DV Prei", "2 Aardappelen", "Bouillon"],
            steps: ["1. Kook aardappel.", "2. Voeg erwt/prei toe.", "3. Mix glad."],
            kid: "Monsterlijk lekker."
        },
        /* HOOFDGERECHTEN */
        { 
            id: "j_w3_1", m: "Ma 19/01: Varkenshaas & Broccoli", kcal: 430, p: 33, t: 25,
            ing: ["500g Varkenshaas", "1 Verse Broccoli", "600g Aardappelen"], 
            steps: ["1. Kook aardappelen.", "2. Bak varkenshaas.", "3. Stoom broccoli.", "4. Serveer samen."], 
            kid: "Miniboompjes in puree." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Pasta Gehakt & Wortel", kcal: 560, p: 29, t: 25,
            ing: ["500g Gehakt", "300g Pasta", "3 Wortelen", "Passata"], 
            steps: ["1. Kook pasta.", "2. Rasp wortel en bak met gehakt.", "3. Voeg passata toe.", "4. Meng."], 
            kid: "Verstopte wortels." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Kip Paprika Quinoa", kcal: 475, p: 34, t: 25,
            ing: ["600g Kipblokjes", "150g Quinoa", "2 Paprika's"], 
            steps: ["1. Kook quinoa.", "2. Bak kip en paprika.", "3. Meng alles."], 
            kid: "Kleurrijke stukjes." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Kabeljauw & Zoete Friet", kcal: 415, p: 27, t: 30,
            ing: ["3 Kabeljauwfilets", "800g Zoete aardappel", "1 Courgette"], 
            steps: ["1. Bak zoete aardappel in oven.", "2. Bak vis.", "3. Wok courgette."], 
            kid: "Vis en frietjes." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Gevulde Paprika", kcal: 505, p: 31, t: 35,
            ing: ["3 Paprika's", "Rundergehakt", "Rijst", "Halve Courgette"], 
            steps: ["1. Meng gehakt, rijst, courgette.", "2. Vul paprika's.", "3. Oven 30 min."], 
            kid: "Eetbaar kommetje." 
        },
        { 
            id: "j_w4_1", m: "Ma 26/01: Kip Wortelsaus & Rijst", kcal: 525, p: 32, t: 25,
            ing: ["Kipblokjes", "4 Verse wortelen", "Rijst", "100ml Room"], 
            steps: ["1. Kook en mix wortel met room.", "2. Bak kip.", "3. Meng saus en kip."], 
            kid: "Oranje saus." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Pasta Broccoli-Tonijn", kcal: 485, p: 28, t: 15,
            ing: ["Pasta", "1 Broccoli", "Tonijn in blik", "Roomkaas"], 
            steps: ["1. Kook pasta en broccoli.", "2. Meng met tonijn en roomkaas."], 
            kid: "Zachte vissmaak." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Zoete Aardappel Curry", kcal: 445, p: 17, t: 30,
            ing: ["Zoete aardappel", "Linzen", "Kokosmelk", "Milde Curry"], 
            steps: ["1. Stoof aardappel in kokosmelk.", "2. Voeg linzen toe."], 
            kid: "Zoet en romig." 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Gehakt-Paprika Schotel", kcal: 535, p: 28, t: 25,
            ing: ["Gehakt", "1 Paprika", "600g Aardappelen"], 
            steps: ["1. Bak aardappel krokant.", "2. Bak gehakt en paprika.", "3. Meng."], 
            kid: "Knapperige patatjes." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Wok Quinoa & Ei", kcal: 435, p: 21, t: 20,
            ing: ["Quinoa", "Groenten restjes", "3 Eieren"], 
            steps: ["1. Wok groenten.", "2. Voeg quinoa toe.", "3. Roerbak ei erdoor."], 
            kid: "Alles door elkaar." 
        }
    ]
};
