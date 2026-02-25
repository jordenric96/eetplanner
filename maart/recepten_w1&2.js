/* DATA VOOR MAART WEEK 1 & 2 - ZERO-WASTE EDITIE (GEEN COURGETTE, EI, CHAMPIGNON, ASPERGE) */

var shoppingData = {
    // -------------------------------------------------------------
    // RICOUR (3p: 2 Volw + 1 Kind)
    // -------------------------------------------------------------
    ricour: {
        v: [
            "Kipfilet (Grootverpakking 1kg) - €8.99", /* Voor Do W1 & Wo W2 */
            "Runds-varkensgehakt (Grootverpakking 1kg) - €7.50", /* Voor Ma W1 & Di W1 */
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
            "Volkoren Wraps (1 pak, 6 stuks) - €1.75", /* Vr W1 */
            "Groene Pesto (1 potje) - €1.99", /* Ma W2 */
            "Zuivelspread Light (1 potje) - €1.69", /* Wo W1 & Wo W2 */
            "Teriyaki & Sojasaus - €3.50",
            "Kruiden (Chili, Italiaans, Curry) - €1.50"
        ]
    },

    // -------------------------------------------------------------
    // HEMMERYCKX (2p: 2 Volwassenen)
    // -------------------------------------------------------------
    hemmeryckx: {
        v: [
            "Kipfilet (600g) - €6.00", 
            "Runds-varkensgehakt (600g) - €4.50", 
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
            "Volkoren Pasta (500g) - €1.50", 
            "Zilvervliesrijst (500g) - €1.50", 
            "Tomatenblokjes (3 blikken) - €2.20", 
            "Kidneybonen (1 klein blik) - €0.80", 
            "Mais (1 blik) - €0.99", 
            "Rode Linzen (250g) - €1.20", 
            "Kokosmelk Light - €1.39", 
            "Volkoren Wraps - €1.75", 
            "Groene Pesto - €1.99", 
            "Zuivelspread Light - €1.69", 
            "Teriyaki & Sojasaus - €2.50",
            "Kruiden (Chili, Italiaans, Curry) - €1.00"
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
            m: "Ma 02/03: Volkoren Pasta Bolognese", 
            kcal: 520, p: 38, t: 20,
            ing: ["500g Runds-varkensgehakt (Helft vd 1kg verpakking)", "350g Volkoren Pasta", "1 blik (400g) Tomatenblokjes", "400g Wortelen (in blokjes)", "1 Ui & 1 teentje Knoflook"], 
            steps: [
                "1. Kook de volkoren pasta beetgaar in gezouten water.",
                "2. Snipper de ui en snij de wortelen in hele fijne blokjes. Fruit dit aan in een pan met olijfolie.",
                "3. Voeg de helft van de bulkverpakking runds-varkensgehakt toe en rul dit gaar. (Bewaar de andere 500g voor morgen in de koelkast).",
                "4. Giet het blik tomatenblokjes erbij en laat de saus 10 minuten zachtjes sudderen.",
                "5. Meng de saus met de pasta. Voedzaam en een echte klassieker!"
            ], 
            kid: "Spaghetti bolognese is altijd een winnaar, en de wortel zit lekker verstopt in de saus." 
        },
        { 
            id: "m_w1_2", 
            m: "Di 03/03: Mexicaanse Chili Con Carne", 
            kcal: 510, p: 35, t: 15,
            ing: ["500g Runds-varkensgehakt (Restant van gisteren)", "250g Zilvervliesrijst", "1 blik (400g) Kidneybonen", "1 blik (300g) Mais", "1 blik (400g) Tomatenblokjes"], 
            steps: [
                "1. Kook de zilvervliesrijst volgens de verpakking.",
                "2. Rul het overgebleven runds-varkensgehakt in een grote pan of wok.",
                "3. Spoel de bonen en mais af onder de kraan en voeg toe aan het vlees, samen met de tomatenblokjes.",
                "4. Voeg tacokruiden of paprikapoeder/komijn toe en laat 10 minuten pruttelen.",
                "5. Serveer de warme chili over de rijst."
            ], 
            kid: "Zonder knoeiende wraps is dit veel makkelijker te eten, met vrolijke kleuren van de mais." 
        },
        { 
            id: "m_w1_3", 
            m: "Wo 04/03: Diepvries Witvis Ovenschotel", 
            kcal: 440, p: 34, t: 30,
            ing: ["400g Diepvries Witvis (Helft vd 800g verpakking)", "800g Aardappelen", "1.5 stuks Prei", "2 el Zuivelspread Light", "Viskruiden"], 
            steps: [
                "1. Schil en kook de aardappelen gaar. Stamp ze tot puree en roer er 2 flinke eetlepels zuivelspread doorheen.",
                "2. Snij 1.5 prei in ringen en stoof zacht (bewaar de andere 1.5 prei in de koelkast voor week 2).",
                "3. Leg de (ontdooide) witvis in een ovenschaal en kruid goed met viskruiden, peper en zout.",
                "4. Verdeel de zachte prei over de vis, dek af met de aardappelpuree en bak 25 minuten op 200°C."
            ], 
            kid: "Diepvriesvis heeft een milde smaak, perfect in combinatie met de smeuïge puree." 
        },
        { 
            id: "m_w1_4", 
            m: "Do 05/03: Teriyaki Kip Bowl", 
            kcal: 490, p: 42, t: 18,
            ing: ["500g Kipfilet (Helft vd 1kg verpakking)", "250g Zilvervliesrijst", "400g Wortelen (in reepjes)", "200g DV Edamame boontjes", "4 el Teriyakisaus"], 
            steps: [
                "1. Kook de rijst. Kook in de laatste 5 minuten de edamame boontjes mee in dezelfde pan.",
                "2. Snij 500g kipfilet in blokjes. Bak goudbruin in de pan. (De andere 500g gaat de vriezer of koelkast in voor volgende week).",
                "3. Voeg de in reepjes gesneden wortel toe en roerbak 3 minuten mee.",
                "4. Blus af met de teriyakisaus en meng de afgegoten rijst en boontjes erdoor.",
                "5. Serveer warm in een diepe kom."
            ], 
            kid: "De sojaboontjes (edamame) knappen lekker in je mond. Makkelijk te eten!" 
        },
        { 
            id: "m_w1_5", 
            m: "Vr 06/03: Volkoren Kipgehakt Wraps", 
            kcal: 500, p: 35, t: 15,
            ing: ["500g Kipgehakt (Helft vd 1kg verpakking)", "1 pak (6 stuks) Volkoren Wraps", "1 Paprika", "1 blik (300g) Mais", "Kipkruiden"], 
            steps: [
                "1. Snij de paprika in kleine blokjes.",
                "2. Rul de helft van het kipgehakt (500g) gaar (zonder boter/olie, het is al vettig genoeg). Bewaar de andere helft koel voor maandag.",
                "3. Voeg de paprika en uitgelekte mais toe en bak nog 5 minuten. Kruid met kipkruiden of paprikapoeder.",
                "4. Verwarm de wraps kort in de magnetron of oven en vul ze royaal met het warme kipgehaktmengsel."
            ], 
            kid: "Zelf wraps vullen en oprollen is altijd gezellig aan tafel!" 
        },

        /* ---------------------------------------------------------
           MAART WEEK 2 (09/03 - 13/03) - ZERO WASTE
           --------------------------------------------------------- */
        { 
            id: "m_w2_1", 
            m: "Ma 09/03: Groene Pesto Pasta met Kipgehakt", 
            kcal: 540, p: 38, t: 15,
            ing: ["350g Volkoren Pasta", "500g Kipgehakt (Restant van vrijdag)", "300g Verse Spinazie (Halve zak)", "150g DV Erwten", "3 el Groene Pesto"], 
            steps: [
                "1. Kook de pasta beetgaar. Voeg in de laatste 3 minuten de diepvrieserwten toe.",
                "2. Rul het overgebleven kipgehakt gaar in een ruime hapjespan.",
                "3. Voeg exact de *helft* (300g) van de zak verse spinazie toe en laat dit langzaam slinken. (De rest gebruik je morgen in de curry!).",
                "4. Roer 3 eetlepels groene pesto door het gehakt.",
                "5. Giet de pasta en erwten af en meng alles goed door elkaar."
            ], 
            kid: "Een 'groene monster'-pasta! Snel klaar en vol verstopte vitamines." 
        },
        { 
            id: "m_w2_2", 
            m: "Di 10/03: Romige Linzencurry", 
            kcal: 480, p: 25, t: 20,
            ing: ["250g Rode Linzen", "250g Zilvervliesrijst", "300g Verse Spinazie (Restant van gisteren)", "1 blik (400g) Tomatenblokjes", "1 blik (400ml) Kokosmelk Light", "2 el Currykruiden"], 
            steps: [
                "1. Kook de rijst.",
                "2. Spoel de rode linzen goed af onder de kraan. Verhit een beetje olie in een pan en bak de currykruiden 1 minuut aan.",
                "3. Giet de kokosmelk en het blik tomatenblokjes erbij. Voeg de linzen toe en laat 15 minuten zachtjes koken tot ze gaar zijn.",
                "4. Voeg in de laatste minuut de rest van de zak verse spinazie toe en laat slinken. Hele zak op, nul verspilling!",
                "5. Serveer de milde curry met de rijst."
            ], 
            kid: "Een zachte, zoete saus. Ideaal om de rijst in te dippen." 
        },
        { 
            id: "m_w2_3", 
            m: "Wo 11/03: Kip, Broccoli & Aardappelen", 
            kcal: 450, p: 40, t: 18,
            ing: ["500g Kipfilet (Restant van vorige week)", "800g Aardappelen", "500g Broccoli", "2 el Zuivelspread Light", "Kipkruiden"], 
            steps: [
                "1. Schil de aardappelen, snij in gelijke stukken en kook ze gaar.",
                "2. Snij de broccoli in roosjes en kook deze in 6-8 minuten beetgaar.",
                "3. Snij de ontdooide 500g kipfilet in blokjes en bak gaar in een pan met wat kipkruiden.",
                "4. Giet de aardappelen af. Serveer de aardappelen met een lepel zuivelspread in plaats van jus of boter.",
                "5. Leg de broccoli en kip ernaast voor een klassiek, gezond AVG'tje (Aardappel-Vlees-Groente)."
            ], 
            kid: "Broccoli 'boompjes' met malse kipblokjes, lekker herkenbaar en simpel." 
        },
        { 
            id: "m_w2_4", 
            m: "Do 12/03: Wok met Witvis en Prei", 
            kcal: 430, p: 32, t: 15,
            ing: ["400g Diepvries Witvis (Restant van vorige week)", "250g Zilvervliesrijst", "1.5 stuks Prei (Restant)", "200g DV Erwten & Restje Wortelen", "3 el Sojasaus"], 
            steps: [
                "1. Kook de rijst.",
                "2. Snij het laatste deel van de prei (1.5 stuk) in fijne ringen en snij de overgebleven wortelen in kleine blokjes.",
                "3. Snij de ontdooide witvis in stevige blokken.",
                "4. Wok de prei, wortel en een handje diepvrieserwten 5 minuten op hoog vuur.",
                "5. Voeg de visblokjes toe, blus af met de sojasaus en bak voorzichtig nog 4 minuten tot de vis gaar is."
            ], 
            kid: "Door de sojasaus krijgt de witvis een lekkere, hartige smaak." 
        },
        { 
            id: "m_w2_5", 
            m: "Vr 13/03: Proteïne Pasta met Tonijn", 
            kcal: 480, p: 36, t: 12,
            ing: ["350g Volkoren Pasta", "2 blikjes (2x 160g) Tonijn in water", "1 blik (400g) Tomatenblokjes", "1 Paprika (Restant van vorige week)", "1 Ui & 1 teentje Knoflook"], 
            steps: [
                "1. Kook de volkoren pasta beetgaar.",
                "2. Snipper de ui en snij de overgebleven paprika in kleine blokjes. Fruit dit aan in een pan.",
                "3. Voeg het blik tomatenblokjes toe en laat de saus 5 minuten pruttelen. Breng op smaak met wat Italiaanse kruiden.",
                "4. Laat de tonijn uitlekken en roer deze als laatste door de saus (de tonijn hoeft alleen maar warm te worden).",
                "5. Giet de pasta af en schep de snelle, super eiwitrijke tomaten-tonijnsaus eroverheen."
            ], 
            kid: "Een heerlijk makkelijke vrijdag-pasta. Tonijn uit blik is super zacht en smaakt heerlijk in de rode saus." 
        }
    ]
};
