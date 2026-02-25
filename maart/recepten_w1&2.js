/* DATA VOOR MAART WEEK 1 & 2 - BUDGET & ZERO-WASTE EDITIE (GEEN COURGETTE, EI, CHAMPIGNON, ASPERGE) */

var shoppingData = {
    // -------------------------------------------------------------
    // RICOUR (3p: 2 Volw + 1 Kind) - BUDGET
    // -------------------------------------------------------------
    ricour: {
        v: [
            "Kipfilet (Grootverpakking 1kg) - €8.99", /* Voor Do W1 & Wo W2 */
            "Mager Rundergehakt (Grootverpakking 1kg) - €8.50", /* Voor Ma W1 & Di W1 */
            "Kipgehakt (Grootverpakking 1kg) - €7.99", /* Voor Vr W1 & Ma W2 */
            "Diepvries Witvis / Koolvis (800g) - €5.50", /* Voor Wo W1 & Do W2 */
            "Tonijn in water (2 blikjes) - €2.99" /* Voor Vr W2 */
        ],
        g: [
            "Grote zak Wortelen (2kg) - €1.50", /* Voor Ma W1, Do W1, Do W2 */
            "Net Uien & Knoflook (1kg) - €1.20",
            "Zak Gewone Aardappelen (3kg) - €2.99", /* Voor Wo W1 & Wo W2 */
            "Prei (1 bussel, 3 stuks) - €1.29", /* Voor Wo W1 & Do W2 */
            "Broccoli (2 stronken) - €2.50", /* Wo W2 */
            "Verse Spinazie (Grote zak 600g) - €3.50", /* Voor Ma W2 & Di W2 (na elkaar, bederft niet!) */
            "Paprika Mix (Net van 3) - €1.99", /* Voor Vr W1 & Vr W2 */
            "DV Edamame boontjes (400g) - €2.29", /* Do W1 */
            "DV Erwten (400g) - €1.29" /* Ma W2 & Do W2 */
        ],
        k: [
            "Volkoren Pasta (1kg zak) - €2.20", /* Ma W1, Ma W2, Vr W2 */
            "Zilvervliesrijst / Basmati (1kg zak) - €2.50", /* Di W1, Do W1, Di W2, Do W2 */
            "Tomatenblokjes (4 blikken) - €2.99", /* Ma W1, Di W1, Di W2, Vr W2 */
            "Kidneybonen (1 blik) - €0.99", /* Di W1 */
            "Mais (2 blikken) - €1.80", /* Di W1, Vr W1 */
            "Rode Linzen (1 zak 400g) - €1.60", /* Di W2 */
            "Kokosmelk Light (1 blik) - €1.39", /* Di W2 */
            "Volkoren Wraps (1 pak) - €1.75", /* Vr W1 */
            "Groene Pesto (1 potje) - €1.99", /* Ma W2 */
            "Zuivelspread Light of Magere Kwark (1 pot) - €1.69", /* Wo W1 & Wo W2 */
            "Teriyaki & Sojasaus - €3.50",
            "Budget Kruiden (Chili, Italiaans, Curry) - €1.50"
        ]
    },

    // -------------------------------------------------------------
    // HEMMERYCKX (2p: 2 Volwassenen) - BUDGET
    // -------------------------------------------------------------
    hemmeryckx: {
        v: [
            "Kipfilet (600g) - €6.00", 
            "Mager Rundergehakt (600g) - €5.50", 
            "Kipgehakt (600g) - €5.00", 
            "Diepvries Witvis (500g) - €3.50", 
            "Tonijn in water (1 groot blik) - €1.80" 
        ],
        g: [
            "Wortelen (1kg) - €1.00", 
            "Uien & Knoflook - €1.00",
            "Aardappelen (1.5kg) - €1.80", 
            "Prei (2 stuks) - €1.00", 
            "Broccoli (1 stronk) - €1.25", 
            "Verse Spinazie (400g) - €2.50", 
            "Paprika Mix (2 stuks) - €1.50", 
            "DV Edamame (200g) - €1.50", 
            "DV Erwten (200g) - €0.80" 
        ],
        k: [
            "Volkoren Pasta - €1.50", 
            "Rijst - €1.50", 
            "Tomatenblokjes (3 blikken) - €2.20", 
            "Kidneybonen (1 klein blik) - €0.80", 
            "Mais (1 blik) - €0.99", 
            "Rode Linzen (250g) - €1.20", 
            "Kokosmelk Light - €1.39", 
            "Volkoren Wraps - €1.75", 
            "Groene Pesto - €1.99", 
            "Zuivelspread Light - €1.69", 
            "Teriyaki & Sojasaus - €2.50",
            "Kruiden - €1.00"
        ]
    },

    // -------------------------------------------------------------
    // RICOUR - TIELEMANS (4p: 2 Volw + 2 Kids) - BUDGET
    // -------------------------------------------------------------
    ricour_tielemans: {
        v: [
            "Kipfilet (1.5kg voordeelpak) - €12.50", 
            "Mager Rundergehakt (1.5kg voordeelpak) - €12.00", 
            "Kipgehakt (1.5kg voordeelpak) - €11.00", 
            "Diepvries Witvis (1.2kg) - €8.00", 
            "Tonijn in water (4 blikjes) - €5.50" 
        ],
        g: [
            "Wortelen (3kg) - €2.50", 
            "Uien & Knoflook (2kg) - €2.00",
            "Aardappelen (5kg zak) - €4.50", 
            "Prei (4 stuks) - €1.80", 
            "Broccoli (3 stronken) - €3.50", 
            "Verse Spinazie (800g) - €4.50", 
            "Paprika Mix (5 stuks) - €3.00", 
            "DV Edamame (600g) - €3.50", 
            "DV Erwten (600g) - €1.90" 
        ],
        k: [
            "Volkoren Pasta (1.5kg) - €3.00", 
            "Rijst (1.5kg) - €3.50", 
            "Tomatenblokjes (6 blikken) - €4.50", 
            "Kidneybonen (2 blikken) - €1.80", 
            "Mais (3 blikken) - €2.70", 
            "Rode Linzen (600g) - €2.50", 
            "Kokosmelk Light (2 blikken) - €2.70", 
            "Volkoren Wraps (2 pakken) - €3.50", 
            "Groene Pesto (grote pot) - €2.99", 
            "Zuivelspread Light (2 bakjes) - €3.00", 
            "Teriyaki & Sojasaus - €4.00",
            "Kruiden - €2.00"
        ]
    }
};

var recipeData = {
    recipes: [
        /* ---------------------------------------------------------
           MAART WEEK 1 (02/03 - 06/03) - ZERO WASTE
           --------------------------------------------------------- */
        { 
            id: "m_w1_1", 
            m: "Ma 02/03: Budget Volkoren Pasta Bolognese", 
            kcal: 520, p: 38, t: 20,
            ing: ["Mager Rundergehakt (Helft vd 1kg verpakking)", "Volkoren Pasta", "1 blik Tomatenblokjes", "Wortelen (in blokjes)", "1 Ui & Knoflook"], 
            steps: [
                "1. Kook de volkoren pasta beetgaar.",
                "2. Snipper de ui en snij een paar wortelen in hele fijne blokjes. Fruit dit aan in een pan.",
                "3. Voeg de helft van de bulkverpakking rundergehakt toe en rul dit gaar. (Bewaar de andere helft voor morgen in de koelkast).",
                "4. Giet de tomatenblokjes erbij en laat de saus 10 minuten zachtjes sudderen.",
                "5. Meng de saus met de pasta. Goedkoop, voedzaam en klassiek!"
            ], 
            kid: "Spaghetti bolognese is altijd een winnaar, en de wortel zit lekker verstopt in de saus." 
        },
        { 
            id: "m_w1_2", 
            m: "Di 03/03: Mexicaanse Chili Con Carne", 
            kcal: 510, p: 35, t: 15,
            ing: ["Mager Rundergehakt (Restant van gisteren)", "Zilvervliesrijst", "1 blik Kidneybonen", "1 blik Mais", "1 blik Tomatenblokjes"], 
            steps: [
                "1. Kook de zilvervliesrijst.",
                "2. Rul het overgebleven rundergehakt in een pan.",
                "3. Spoel de bonen en mais af en voeg toe aan het vlees, samen met de tomatenblokjes.",
                "4. Voeg tacokruiden of paprikapoeder/komijn toe en laat 10 minuten pruttelen.",
                "5. Serveer de chili over de rijst. (Tip: dit gerecht is perfect om restjes groenten in te 'verstoppen')."
            ], 
            kid: "Zonder knoeiende wraps is dit veel makkelijker te eten, met vrolijke kleuren van de mais." 
        },
        { 
            id: "m_w1_3", 
            m: "Wo 04/03: Diepvries Witvis Ovenschotel", 
            kcal: 440, p: 34, t: 30,
            ing: ["Diepvries Witvis (Helft vd verpakking)", "Aardappelen", "1.5 stuks Prei", "Zuivelspread Light", "Viskruiden"], 
            steps: [
                "1. Schil en kook de aardappelen gaar. Stamp ze tot puree en meng met een flinke lepel zuivelspread.",
                "2. Snij de helft van je prei in ringen en stoof zacht (bewaar de rest van de prei voor week 2).",
                "3. Leg de (ontdooide) witvis in een ovenschaal. Kruid goed.",
                "4. Verdeel de prei over de vis, dek af met de puree en bak 25 min op 200°C."
            ], 
            kid: "Diepvriesvis heeft een zachte smaak, perfect samen met de smeuïge puree." 
        },
        { 
            id: "m_w1_4", 
            m: "Do 05/03: Teriyaki Kip Bowl", 
            kcal: 490, p: 42, t: 18,
            ing: ["Kipfilet (Helft vd 1kg verpakking)", "Zilvervliesrijst", "Wortelen (in reepjes)", "DV Edamame boontjes", "Teriyakisaus"], 
            steps: [
                "1. Kook de rijst. Kook in de laatste 5 minuten de edamame boontjes mee.",
                "2. Snij de helft van de bulkverpakking kipfilet in blokjes. Bak goudbruin in de pan. (De andere helft gaat de vriezer of koelkast in voor volgende week).",
                "3. Voeg de in reepjes gesneden wortel toe en roerbak 3 minuten mee.",
                "4. Blus af met teriyakisaus en meng de afgegoten boontjes erdoor.",
                "5. Serveer op een bedje van rijst."
            ], 
            kid: "De boontjes knappen lekker in je mond. Makkelijk te eten!" 
        },
        { 
            id: "m_w1_5", 
            m: "Vr 06/03: Volkoren Kipgehakt Wraps", 
            kcal: 500, p: 35, t: 15,
            ing: ["Kipgehakt (Helft vd 1kg verpakking)", "Volkoren Wraps", "1 Paprika", "1 blik Mais", "Kipkruiden"], 
            steps: [
                "1. Snij de paprika in blokjes.",
                "2. Rul de helft van het kipgehakt gaar (zonder boter/olie, het is al vettig genoeg). Bewaar de andere helft koel voor maandag.",
                "3. Voeg de paprika en uitgelekte mais toe en bak nog 5 minuten. Kruid met kipkruiden of paprikapoeder.",
                "4. Verwarm de wraps kort en vul ze met het kipgehaktmengsel."
            ], 
            kid: "Zelf wraps vullen en oprollen!" 
        },

        /* ---------------------------------------------------------
           MAART WEEK 2 (09/03 - 13/03) - ZERO WASTE
           --------------------------------------------------------- */
        { 
            id: "m_w2_1", 
            m: "Ma 09/03: Groene Pesto Pasta met Kipgehakt", 
            kcal: 540, p: 38, t: 15,
            ing: ["Volkoren Pasta", "Kipgehakt (Restant van vrijdag)", "Halve zak Verse Spinazie", "DV Erwten", "Groene Pesto"], 
            steps: [
                "1. Kook de pasta beetgaar. Voeg in de laatste 3 minuten een handje diepvrieserwten toe.",
                "2. Rul het overgebleven kipgehakt gaar in een pan.",
                "3. Voeg de *helft* van de zak verse spinazie toe en laat slinken. (De rest gebruik je morgen in de curry, zo bederft het niet!).",
                "4. Roer een paar lepels groene pesto door het gehakt.",
                "5. Giet de pasta af en meng alles door elkaar."
            ], 
            kid: "Een 'groene monster'-pasta! Snel klaar en vol verstopte vitamines." 
        },
        { 
            id: "m_w2_2", 
            m: "Di 10/03: Budget Linzencurry", 
            kcal: 480, p: 25, t: 20,
            ing: ["Rode Linzen (goedkope eiwitten)", "Zilvervliesrijst", "Restant Verse Spinazie", "1 blik Tomatenblokjes", "1 blik Kokosmelk Light"], 
            steps: [
                "1. Kook de rijst.",
                "2. Spoel de rode linzen goed af. Verhit een beetje olie in een pan en voeg currykruiden toe.",
                "3. Giet de kokosmelk en de tomatenblokjes erbij. Voeg de linzen toe en laat 15 min zachtjes koken tot ze gaar zijn.",
                "4. Voeg in de laatste minuut de rest van de zak verse spinazie toe en laat slinken. Hele zak op, nul verspilling!",
                "5. Serveer de milde curry met de rijst."
            ], 
            kid: "Zachte, zoete saus. Ideaal om de rijst in te dippen." 
        },
        { 
            id: "m_w2_3", 
            m: "Wo 11/03: Kip, Broccoli & Aardappelen", 
            kcal: 450, p: 40, t: 18,
            ing: ["Kipfilet (Restant van vorige week)", "Aardappelen", "Broccoli", "Zuivelspread Light", "Kipkruiden"], 
            steps: [
                "1. Schil de aardappelen, snij in gelijke stukken en kook ze gaar.",
                "2. Snij de broccoli in roosjes en kook deze in 6-8 minuten beetgaar.",
                "3. Bak het laatste deel van de kipfilet in blokjes of in z'n geheel gaar in een pan.",
                "4. Giet de aardappelen af. Serveer de aardappelen met een klein schepje zuivelspread in plaats van jus of boter.",
                "5. Leg de broccoli en kip ernaast voor een klassieke, gezonde AVG'tje (Aardappel-Vlees-Groente)."
            ], 
            kid: "Broccoli 'boompjes' met kipblokjes, lekker herkenbaar en simpel." 
        },
        { 
            id: "m_w2_4", 
            m: "Do 12/03: Wok met Witvis en Prei", 
            kcal: 430, p: 32, t: 15,
            ing: ["Diepvries Witvis (Restant)", "Zilvervliesrijst", "Restant Prei", "DV Erwten & Wortelen", "Sojasaus"], 
            steps: [
                "1. Kook de rijst.",
                "2. Snij het laatste deel van de prei in fijne ringen en de overgebleven wortelen in kleine blokjes/reepjes.",
                "3. Snij de ontdooide witvis in stevige blokken.",
                "4. Wok de prei, wortel en een handje diepvrieserwten 5 minuten op hoog vuur.",
                "5. Voeg de visblokjes toe, blus af met een scheut sojasaus en bak voorzichtig nog 4 minuten tot de vis gaar is."
            ], 
            kid: "Door de sojasaus krijgt de vis een lekkere, hartige smaak." 
        },
        { 
            id: "m_w2_5", 
            m: "Vr 13/03: Proteïne Pasta met Tonijn", 
            kcal: 480, p: 36, t: 12,
            ing: ["Volkoren Pasta", "Tonijn in water (blik)", "1 blik Tomatenblokjes", "Restant Paprika", "1 Ui & Knoflook"], 
            steps: [
                "1. Kook de volkoren pasta beetgaar.",
                "2. Snipper de ui en snij de laatste paprika in kleine blokjes. Fruit dit aan in een pan.",
                "3. Voeg het blik tomatenblokjes toe en laat de saus 5 minuten pruttelen. Breng op smaak met Italiaanse kruiden.",
                "4. Laat de tonijn uitlekken en roer deze als laatste door de saus (tonijn hoeft alleen maar warm te worden).",
                "5. Giet de pasta af en schep de snelle, super eiwitrijke tomaten-tonijnsaus eroverheen."
            ], 
            kid: "Een heerlijk makkelijke vrijdag-pasta. Tonijn uit blik ruikt sterk, maar is super zacht in de rode saus." 
        }
    ]
};
