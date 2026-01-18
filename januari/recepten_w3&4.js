/* DATA VOOR JANUARI WEEK 3 & 4 - REALISTISCHE VERSIE */

var shoppingData = {
    // -------------------------------------------------------------
    // RICOUR (BASELINE: 2 Volw + 1 Kind)
    // -------------------------------------------------------------
    ricour: {
        v: [
            "Kippenchipolata (500g) - €6.99", 
            "Kipfilet (500g) - €6.50", 
            "Tonijn (3 blikjes) - €4.50", 
            "DV Koolvisfilet (450g) - €4.00", 
            "Eieren (6 stuks) - €1.95"
        ],
        g: [
            "Paprika mix (3 stuks) - €1.99", 
            "Prei (bussel) - €1.49", 
            "Wortelen (2kg) - €1.99", 
            "Bloemkool (1 stuk) - €2.49", 
            "Broccoli (2 stuks) - €3.50", 
            "Courgette (2 stuks) - €1.69", 
            "Prinsessenbonen (500g) - €1.99", 
            "DV Erwten (600g) - €1.29", 
            "Ui (1kg net) - €1.25", 
            "Mais (3-pack) - €2.25", 
            "Zoete Aardappel (1.5kg) - €3.75", 
            "Aardappelen (2.5kg) - €3.99", 
            "IJsbergsla - €0.99", 
            "Komkommer - €0.85", 
            "Tomaten (tros) - €1.99"
        ],
        k: [
            "Volkoren Pasta (500g) - €1.15", 
            "Tomatenpuree (2 potjes) - €1.30", 
            "Zuivelspread Light (200g) - €1.89", 
            "Geraspte kaas (300g) - €3.29", 
            "Ketjap Manis - €1.89", 
            "Pittenmix - €2.50", 
            "Kipkruiden - €1.50"
        ]
    },

    // -------------------------------------------------------------
    // HEMMERYCKX (2 Volwassenen) -> KLEINERE VERPAKKINGEN & GOEDKOPER
    // -------------------------------------------------------------
    hemmeryckx: {
        v: [
            "Kippenchipolata (350g) - €4.99", 
            "Kipfilet (350g) - €4.50", 
            "Tonijn (2 blikjes) - €3.00", 
            "DV Koolvis (400g) - €3.50", 
            "Eieren (6 stuks) - €1.95"
        ],
        g: [
            "Paprika (2 losse) - €1.40", 
            "Prei (2 stuks) - €1.00", 
            "Wortelen (1kg) - €1.15", 
            "Bloemkool (klein) - €1.99", 
            "Broccoli (1 groot) - €1.75", 
            "Courgette (1 stuk) - €0.85", 
            "Prinsessenbonen (250g) - €1.00", 
            "Zoete Aardappel (1kg) - €2.50", 
            "DV Erwten (400g) - €0.99", 
            "Sla/Komkommer/Tomaat - €3.00"
        ],
        k: [
            "Pasta (400g) - €0.90", 
            "Zuivelspread (150g) - €1.20", 
            "Kaas (200g) - €2.20", 
            "Pittenmix - €1.50", 
            "Kruiden - €1.00"
        ]
    },

    // -------------------------------------------------------------
    // RICOUR - TIELEMANS (2 Volw + 2 Kinderen) -> MEER ETEN & DUURDER
    // -------------------------------------------------------------
    ricour_tielemans: {
        v: [
            "Kippenchipolata (800g) - €9.50",  /* Meer vlees = Duurder */
            "Kipfilet (800g) - €9.00", 
            "Tonijn (4 blikjes) - €5.90", 
            "DV Koolvisfilet (750g) - €6.50", 
            "Eieren (10 stuks) - €2.50"
        ],
        g: [
            "Paprika mix (3 stuks) - €1.99", 
            "Prei (2 bussels) - €2.50", 
            "Wortelen (3kg zak) - €2.99", 
            "Bloemkool (Groot) - €2.99", 
            "Broccoli (2 grote stuks) - €3.50", 
            "Courgette (3 stuks) - €2.25", 
            "Prinsessenbonen (750g) - €2.50", 
            "DV Erwten (1kg zak) - €1.89", 
            "Ui (net) - €1.25", 
            "Mais (3 pack) - €2.25", 
            "Zoete Aardappel (2.5kg) - €5.50", 
            "Aardappelen (5kg zak) - €6.99", 
            "IJsbergsla (2 zakjes) - €1.80", 
            "Komkommer (2st) - €1.50", 
            "Tomaten (1kg) - €2.99"
        ],
        k: [
            "Volkoren Pasta (750g) - €1.60", 
            "Tomatenpuree (3 potjes) - €1.95", 
            "Zuivelspread Light (300g) - €2.80", 
            "Geraspte kaas (500g) - €4.99", 
            "Ketjap Manis - €1.89", 
            "Pittenmix - €2.50", 
            "Kruiden - €1.50"
        ]
    }
};

var recipeData = {
    recipes: [
        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Kip 'Cacciatore'", kcal: 460, p: 35, t: 30,
            ing: ["400g Kipblokjes", "400g Tomatenblokjes", "300g Rijst", "1 Courgette", "1 Rode Paprika", "1 el Oregano"], 
            steps: [
                "1. Kook de rijst volgens de verpakking.",
                "2. Bak de kipblokjes goudbruin in een braadpan.",
                "3. Snij de courgette en paprika in blokjes en bak ze in dezelfde pan aan.",
                "4. Voeg de tomatenblokjes en oregano toe. Serveer over de rijst."
            ], 
            kid: "Kip in rode saus met zachte courgette." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Koolvis met Bloemkoolstoemp", kcal: 390, p: 32, t: 30,
            ing: ["450g Koolvisfilet", "1 halve Bloemkool", "500g Wortelen", "400g Aardappelen", "Snufje Nootmuskaat"], 
            steps: [
                "1. Schil de aardappelen en wortelen. Snij de bloemkool in roosjes.",
                "2. Kook alle groenten samen gaar. Giet af en stamp tot puree.",
                "3. Bak de ontdooide visfilets in olijfolie goudbruin en leg ze op de puree."
            ], 
            kid: "Oranje-witte puree met zachte vis." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Spaghetti (Deel 1)", kcal: 650, p: 40, t: 45,
            ing: ["500g Gehakt", "500g Pasta", "2 stuks Prei", "2 Wortelen", "140g Tomatenpuree", "400g Tomatenblokjes"], 
            steps: [
                "1. Rul het gehakt in een grote pot.",
                "2. Voeg de fijngesneden prei en geraspte wortel toe.",
                "3. Roer de tomatenpuree erdoor en blus met de tomatenblokjes. Serveer met pasta."
            ], 
            kid: "Slierten met veel saus." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Romige Kip Spinazie", kcal: 470, p: 36, t: 20,
            ing: ["400g Kipblokjes", "450g Spinazie (DV)", "300g Rijst", "100g Zuivelspread", "2 el Pittenmix"], 
            steps: [
                "1. Kook de rijst gaar.",
                "2. Bak de kipblokjes in een pan.",
                "3. Voeg de diepvries spinazie toe. Roer de zuivelspread erdoor tot saus."
            ], 
            kid: "Kip in witte saus." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Chipolata met Broccolimix", kcal: 460, p: 28, t: 25,
            ing: ["500g Chipolata", "1 stronk Broccoli", "600g Zoete Aardappel", "1 Rode ui", "2 el Zonnebloempitten"], 
            steps: [
                "1. Schil de zoete aardappel en snij in blokjes. Kook kort voor.",
                "2. Bak de worstjes in een grote koekenpan.",
                "3. Voeg de groenten en ui toe en roerbak alles."
            ], 
            kid: "Worstjes met boompjes." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Gehakt-Groente Schotel", kcal: 500, p: 35, t: 25,
            ing: ["500g Gehakt", "400g Tomatenblokjes", "300g Rijst", "1 Courgette", "150g Mais", "1 Paprika"], 
            steps: [
                "1. Kook de rijst.",
                "2. Rul het gehakt bruin.",
                "3. Snij courgette en paprika in blokjes en bak mee. Voeg mais en tomatenblokjes toe."
            ], 
            kid: "Rijst met gehakt en maisjes." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Nasi Goreng", kcal: 490, p: 30, t: 20,
            ing: ["400g Kipblokjes", "300g Rijst", "2 stuks Prei", "200g Erwten", "3 Eieren", "Ketjap Manis"], 
            steps: [
                "1. Kook de rijst.",
                "2. Bak de kipblokjes gaar. Voeg prei en erwten toe.",
                "3. Doe de rijst erbij met ketjap. Maak er een roerei doorheen."
            ], 
            kid: "Rijst met groene bolletjes." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Spaghetti (Deel 2)", kcal: 650, p: 40, t: 15,
            ing: ["500g Gehakt", "500g Pasta", "140g Tomatenpuree", "400g Tomatenblokjes", "1 Wortel", "1 Paprika"], 
            steps: [
                "1. Maak de saus zoals vorige week (gehakt/tomaat).",
                "2. Snij de wortel en paprika in reepjes en zet als snack op tafel."
            ], 
            kid: "Spaghetti dag!" 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Pasta & Broccoli", kcal: 520, p: 35, t: 20,
            ing: ["400g Pasta", "3 blikken Tonijn", "1 stronk Broccoli", "100g Zuivelspread", "150g Mais"], 
            steps: [
                "1. Kook de pasta en broccoli samen.",
                "2. Giet af en roer de tonijn, mais en zuivelspread erdoor.",
                "3. Kruid met zwarte peper."
            ], 
            kid: "Vispasta met witte saus." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Gezonde Kapsalon", kcal: 550, p: 35, t: 30,
            ing: ["400g Kipfilet", "800g Zoete Aardappel", "IJsbergsla", "Komkommer", "Tomaten", "100g Geraspte Kaas", "Zuivelspread"], 
            steps: [
                "1. Bak zoete aardappelfrietjes in de oven.",
                "2. Bak kipreepjes met shoarmakruiden.",
                "3. Doe frietjes, kip en kaas in een schaal. Grill kort.",
                "4. Top af met veel rauwe groenten."
            ], 
            kid: "Frietjesfeest met kip." 
        }
    ]
};
