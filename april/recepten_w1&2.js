/* DATA VOOR APRIL WEEK 3 & 4 - ZERO-WASTE EDITIE (GEEN COURGETTE, EI, CHAMPIGNON, ASPERGE, LINZEN, TONIJN OF KIKKERERWTEN) */

var shoppingData = {
    // -------------------------------------------------------------
    // RICOUR (3p: 2 Volw + 1 Kind)
    // -------------------------------------------------------------
    ricour: {
        v: [
            "Runds-varkensgehakt (Grootverpakking 1kg) - €7.50", /* Voor Ma W3 & Vr W3 */
            "Kipfilet (Grootverpakking 1kg) - €10.50", /* Voor Wo W3 & Ma W4 */
            "Kipgehakt (Grootverpakking 1kg) - €8.50", /* Voor Di W4 & Vr W4 */
            "Diepvries Witvis / Koolvis (800g) - €6.50", /* Voor Do W3 & Wo W4 */
            "Kipchipolata (500g) - €4.50", /* Voor Di W3 */
            "Magere Spekreepjes / Bacon (250g) - €2.50" /* Voor Do W4 */
        ],
        g: [
            "Grote zak Wortelen (2kg) - €1.50", 
            "Net Uien & Knoflook (1kg) - €1.20",
            "Zak Gewone Aardappelen (5kg) - €4.50", /* Voor div. purees en stoemp */
            "Prei (1 bussel, 3 stuks) - €1.29", 
            "Bloemkool (1 stuk) - €2.50", 
            "Broccoli (1 stronk) - €1.50",
            "Verse Spinazie (Zak 400g) - €2.50", /* Voor Di W3 */
            "Paprika Mix (Net van 3) - €1.99", 
            "DV Doperwten (Grote zak 800g) - €2.20" /* Voor Do W3, Ma W4, Do W4 */
        ],
        k: [
            "Volkoren Pasta (1kg zak) - €2.20", /* Ma W3, Do W4, Vr W4 */
            "Zilvervliesrijst / Basmati (1kg zak) - €2.50", /* Vr W3, Ma W4 */
            "Tomatenblokjes (3 blikken van 400g) - €2.25", /* Ma W3, Vr W4 (2x) */
            "Kidneybonen (1 blik 400g) - €0.99", /* Vr W3 */
            "Mais (2 blikken) - €1.80", /* Vr W3, Di W4 */
            "Kokosmelk Light (1 blik 400ml) - €1.39", /* Ma W4 */
            "Volkoren Wraps (1 pak, 6 stuks) - €1.75", /* Di W4 */
            "Zuivelspread Light (1 potje) - €1.69", /* Wo W3, Do W3, Wo W4, Do W4 */
            "Volkoren Paneermeel - €1.20", /* Wo W3, Vr W4 */
            "Kruiden (Kipkruiden, Curry, Mexicaans) - €1.50"
        ]
    },

    // -------------------------------------------------------------
    // HEMMERYCKX (2p: 2 Volwassenen)
    // -------------------------------------------------------------
    hemmeryckx: {
        v: [
            "Runds-varkensgehakt (600g) - €4.50", 
            "Kipfilet (600g) - €6.50", 
            "Kipgehakt (600g) - €5.50", 
            "Diepvries Witvis (500g) - €4.50", 
            "Kipchipolata (350g) - €3.20", 
            "Magere Spekreepjes (150g) - €1.80" 
        ],
        g: [
            "Wortelen (1kg) - €1.00", 
            "Uien & Knoflook - €1.00",
            "Aardappelen (3kg) - €2.99", 
            "Prei (2 stuks) - €1.00", 
            "Bloemkool (1 klein stuk) - €2.00", 
            "Broccoli (1 stronk) - €1.25",
            "Verse Spinazie (300g) - €2.00", 
            "Paprika Mix (2 stuks) - €1.50", 
            "DV Doperwten (500g) - €1.50" 
        ],
        k: [
            "Volkoren Pasta (750g) - €1.80", 
            "Zilvervliesrijst (500g) - €1.50", 
            "Tomatenblokjes (3 blikken) - €2.25", 
            "Kidneybonen (1 klein blik) - €0.80", 
            "Mais (2 blikken) - €1.80", 
            "Kokosmelk Light (1 blik) - €1.39", 
            "Volkoren Wraps - €1.75", 
            "Zuivelspread Light - €1.69", 
            "Volkoren Paneermeel - €1.20",
            "Kruiden (Kipkruiden, Curry, Mexicaans) - €1.00"
        ]
    }
};

var recipeData = {
    recipes: [
        /* ---------------------------------------------------------
           APRIL WEEK 3 - ZERO WASTE
           --------------------------------------------------------- */
        { 
            id: "a_w3_1", 
            m: "Ma 13/04: Macaroni met Verstopte Groenten", 
            kcal: 510, p: 38, t: 20,
            ing: ["500g Runds-varkensgehakt (Helft vd 1kg)", "300g Volkoren Pasta", "1 blik (400g) Tomatenblokjes", "400g Wortelen", "1 stengel Prei", "1 Ui & Knoflook"], 
            steps: [
                "1. Kook de volkoren pasta gaar.",
                "2. Snij de wortelen, ui, knoflook en de prei heel fijn (of gebruik een hakmolen). Fruit dit 5 minuten aan in een pan.",
                "3. Voeg de helft van het runds-varkensgehakt toe en rul gaar. (Bewaar de andere 500g goed afgedekt voor vrijdag).",
                "4. Giet de tomatenblokjes erbij en laat 10 minuten pruttelen.",
                "5. Meng de saus door de macaroni."
            ], 
            kid: "Doordat de groenten zo fijn zijn, zit de saus boordevol vitamines zonder dat het opvalt." 
        },
        { 
            id: "a_w3_2", 
            m: "Di 14/04: Kipchipolata met Spinaziestoemp", 
            kcal: 540, p: 32, t: 25,
            ing: ["500g Kipchipolata", "800g Aardappelen", "400g Verse Spinazie (Hele zak)", "Nootmuskaat", "Scheutje Melk of Kookvocht"], 
            steps: [
                "1. Schil de aardappelen, snij in stukken en kook ze gaar in gezouten water.",
                "2. Verhit een pan met een beetje boter of olie en bak de kipchipolata in ongeveer 10-12 minuten rondom goudbruin en gaar.",
                "3. Giet de aardappelen af. Stamp ze fijn met een scheutje melk (of kookvocht) en nootmuskaat.",
                "4. Spatel de hele zak verse spinazie in delen door de hete puree tot de blaadjes mooi geslonken zijn.",
                "5. Serveer de malse worstjes met de frisse spinaziestoemp."
            ], 
            kid: "Worstjes met puree is altijd een hit, en de spinazie is lekker zacht gemengd." 
        },
        { 
            id: "a_w3_3", 
            m: "Wo 15/04: Krokante Oven-Kip met Bloemkool", 
            kcal: 460, p: 42, t: 30,
            ing: ["500g Kipfilet (Helft vd 1kg)", "1 Bloemkool", "700g Aardappelen", "2 el Volkoren Paneermeel", "1 el Zuivelspread"], 
            steps: [
                "1. Verwarm de oven voor op 200°C. Snij de bloemkool in roosjes en de aardappelen in kleine blokjes (schillen mag, hoeft niet).",
                "2. Snij 500g kipfilet in grove stukken. (De overige 500g gaat de koelkast in voor maandag).",
                "3. Meng de kip met 1 eetlepel zuivelspread en rol ze daarna door het paneermeel met kipkruiden.",
                "4. Verdeel de kip, bloemkool en aardappelen over een bakplaat. Besprenkel licht met olijfolie.",
                "5. Bak 25-30 minuten in de oven tot alles gaar en goudbruin is."
            ], 
            kid: "Zelfgemaakte krokante kipnuggets, dat eet heerlijk makkelijk weg!" 
        },
        { 
            id: "a_w3_4", 
            m: "Do 16/04: Witvis Ovenschotel met Doperwten-puree", 
            kcal: 440, p: 35, t: 25,
            ing: ["400g Diepvries Witvis (Helft vd 800g)", "800g Aardappelen", "300g DV Doperwten", "Viskruiden", "1 el Zuivelspread"], 
            steps: [
                "1. Schil en kook de aardappelen gaar. Voeg de laatste 5 minuten de doperwten toe aan dezelfde pan.",
                "2. Giet af en stamp tot een smeuïge, lichtgroene puree. Roer de zuivelspread erdoor voor de romigheid.",
                "3. Leg de (ontdooide) witvis onderin een ovenschaal. Kruid met viskruiden, peper en zout.",
                "4. Dek de vis af met de doperwtenpuree.",
                "5. Bak 20 minuten in de oven op 200°C."
            ], 
            kid: "Felgroene puree! De doperwten maken de aardappels lekker natuurlijk zoet." 
        },
        { 
            id: "a_w3_5", 
            m: "Vr 17/04: Mexicaanse Rijstpan", 
            kcal: 520, p: 36, t: 15,
            ing: ["500g Runds-varkensgehakt (Restant van maandag)", "250g Zilvervliesrijst", "1 blik (400g) Kidneybonen", "1 blik (300g) Mais", "1 Paprika", "Mexicaanse Kruiden"], 
            steps: [
                "1. Kook de zilvervliesrijst volgens de verpakking.",
                "2. Snij de paprika in blokjes en rul het overgebleven gehakt bruin in een grote hapjespan of wok.",
                "3. Voeg de paprika, uitgelekte mais, afgespoelde kidneybonen en de Mexicaanse kruiden toe.",
                "4. Schep de gekookte rijst er direct doorheen en roerbak alles nog 3 minuten samen.",
                "5. Serveer warm."
            ], 
            kid: "Vrolijke kleurtjes van de mais en paprika, en makkelijker zonder knoeien te eten dan een wrap." 
        },

        /* ---------------------------------------------------------
           APRIL WEEK 4 - ZERO WASTE
           --------------------------------------------------------- */
        { 
            id: "a_w4_1", 
            m: "Ma 20/04: Romige Kipcurry met Doperwten", 
            kcal: 490, p: 40, t: 20,
            ing: ["500g Kipfilet (Restant van vorige week)", "250g Zilvervliesrijst", "1 blik (400ml) Kokosmelk Light", "200g DV Doperwten", "400g Wortelen", "Currykruiden"], 
            steps: [
                "1. Kook de zilvervliesrijst gaar.",
                "2. Snij de wortelen in kleine blokjes en de overgebleven kipfilet in stukjes. Bak de kip goudbruin in een pan met currykruiden.",
                "3. Voeg de wortelblokjes en doperwten toe en roerbak 3 minuten mee.",
                "4. Giet het hele blik kokosmelk erbij. Laat 12 minuten zachtjes pruttelen tot de wortel gaar is.",
                "5. Serveer de milde curry met de rijst."
            ], 
            kid: "Een zachte, lichtzoete saus vol herkenbare groenten zoals doperwtjes en wortel." 
        },
        { 
            id: "a_w4_2", 
            m: "Di 21/04: Volkoren Wraps met Kipgehakt", 
            kcal: 500, p: 35, t: 15,
            ing: ["500g Kipgehakt (Helft vd 1kg)", "1 pak (6 stuks) Volkoren Wraps", "1 Paprika", "1 blik (300g) Mais", "Kipkruiden of Paprikapoeder"], 
            steps: [
                "1. Snij de paprika in blokjes.",
                "2. Rul 500g kipgehakt gaar. (Bewaar de andere 500g afgedekt in de koelkast voor vrijdag).",
                "3. Voeg de paprika en uitgelekte mais toe. Kruid het mengsel goed en bak 5 minuten door.",
                "4. Verwarm de wraps kort in de magnetron of in een droge koekenpan.",
                "5. Zet de pannen op tafel en vul de wraps."
            ], 
            kid: "Zelf je wrap vullen en oprollen is een absolute aanrader aan tafel." 
        },
        { 
            id: "a_w4_3", 
            m: "Wo 22/04: Vispannetje met Prei en Wortelstoemp", 
            kcal: 430, p: 33, t: 20,
            ing: ["400g Diepvries Witvis (Restant van vorige week)", "800g Aardappelen", "400g Wortelen", "2 stuks Prei", "2 el Zuivelspread"], 
            steps: [
                "1. Schil de aardappelen en wortelen, snij in gelijke stukken en kook ze samen gaar.",
                "2. Snij de 2 stuks prei in fijne ringen en stoof ze zachtjes in een pan met een klein scheutje water en wat olie.",
                "3. Snij de ontdooide witvis in stevige blokken en leg deze op de prei. Laat met een deksel op de pan 8 minuten zachtjes garen.",
                "4. Giet de aardappelen en wortelen af, en stamp ze tot een lekkere stoemp.",
                "5. Roer de zuivelspread door het prei-vispannetje voor een romige saus. Serveer samen."
            ], 
            kid: "Wortelstoemp is heerlijk zoet en past perfect bij de supermilde vis." 
        },
        { 
            id: "a_w4_4", 
            m: "Do 23/04: Volkoren Pasta Carbonara (met Spekjes en Erwten)", 
            kcal: 520, p: 30, t: 15,
            ing: ["250g Magere Spekreepjes / Bacon", "350g Volkoren Pasta", "300g DV Doperwten", "2 el Zuivelspread Light", "Zwarte Peper"], 
            steps: [
                "1. Kook de volkoren pasta beetgaar. Voeg de laatste 3 minuten de diepvries doperwten toe.",
                "2. Bak ondertussen de magere spekreepjes krokant in een ruime koekenpan (je hoeft geen vet toe te voegen).",
                "3. Giet de pasta en erwten af, maar bewaar een klein kopje van het kookvocht.",
                "4. Voeg de pasta en erwten toe aan de spekjes. Roer de zuivelspread erdoor en voeg een klein scheutje kookvocht toe om er een romige saus van te maken.",
                "5. Kruid af met flink wat zwarte peper."
            ], 
            kid: "Spekjes, erwtjes en pasta... Een gouden combinatie waar gegarandeerd goed van gegeten wordt!" 
        },
        { 
            id: "a_w4_5", 
            m: "Vr 24/04: Kipgehaktballetjes in Tomatensaus", 
            kcal: 490, p: 38, t: 25,
            ing: ["500g Kipgehakt (Restant van Dinsdag)", "350g Volkoren Pasta", "1 Broccoli", "2 blikken (800g) Tomatenblokjes", "2 el Volkoren Paneermeel"], 
            steps: [
                "1. Meng het resterende kipgehakt met het paneermeel, peper en zout. Rol er met vochtige handen stevige kleine balletjes van (geen ei nodig!).",
                "2. Kook de volkoren pasta. Snij de broccoli in roosjes en kook beetgaar.",
                "3. Bak de kipballetjes in een hapjespan met wat olijfolie rondom goudbruin.",
                "4. Giet de 2 blikken tomatenblokjes erbij en laat de balletjes nog 10 minuten zachtjes garen in de saus. Kruid eventueel met Italiaanse kruiden.",
                "5. Serveer de pasta met de ballen in tomatensaus en de broccoli apart ernaast."
            ], 
            kid: "Zelfgedraaide balletjes zijn zachter en lekkerder, en broccoli-boompjes ernaast houden het overzichtelijk op het bord." 
        }
    ]
};
