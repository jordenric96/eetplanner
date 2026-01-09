/* DATA VOOR JANUARI WEEK 3 & 4 - AANGEPASTE VERSIE */

var shoppingData = {
    ricour: {
        // Varkenshaas en Tonijn verwijderd, Kalkoen toegevoegd
        v: ["Kalkoenfilet (ca. 500g) - €7.50", "Rundergehakt (500g) - €5.99", "Kipfilet blokjes (totaal 1kg) - €14.50", "Kabeljauwfilets (3 stuks) - €9.75", "Eieren (6st) - €1.95"],
        g: ["Broccoli (2x vers) - €2.58", "Wortelen (1kg) - €1.15", "Paprika mix (3st) - €1.99", "Zoete aardappel - €2.20", "Courgette (2st) - €1.70", "Ui (1kg) - €1.25", "DV Pompoen (450g) - €1.39", "DV Erwten (400g) - €0.95", "DV Prei (600g) - €1.45"],
        k: ["Pasta (500g) - €0.95", "Quinoa (400g) - €2.45", "Rijst (500g) - €0.85", "Passata (500ml) - €0.99", "Kokosmelk (400ml) - €1.45", "Linzen (400g) - €0.90"]
    },
    hemmeryckx: {
        v: ["Kalkoenfilet (350g) - €5.20", "Rundergehakt (350g) - €4.20", "Kipblokjes (600g) - €8.50", "Kabeljauw (2st) - €6.50"],
        g: ["Broccoli (2x) - €1.90", "Wortelen - €0.75", "Paprika (2st) - €1.35", "Zoete aardappel - €1.50", "Courgette - €1.10"],
        k: ["Pasta - €0.70", "Quinoa - €1.50", "Rijst - €0.60"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN - LUNCH (Niet datumgebonden) */
        { 
            id: "j_w3_s1", m: "LUNCH - SOEP: Wortel-Pompoen", kcal: 115, p: 2, t: 25,
            ing: ["450g DV Pompoen", "300g Wortel", "1.2L Bouillon", "1 Ui", "Kaneel"],
            steps: [
                "1. Fruit een gesnipperd uitje aan in de pot.",
                "2. Voeg de pompoen en wortel toe en bak even mee (dit versterkt de smaak).",
                "3. Voeg de bouillon toe en kook gaar.",
                "4. Mix glad en kruid af met peper, zout en een vleugje **kaneel**."
            ],
            kid: "Zoet en zacht."
        },
        { 
            id: "j_w3_s2", m: "LUNCH - SOEP: Groene Monster", kcal: 140, p: 6, t: 20,
            ing: ["400g DV Erwten", "250g DV Prei", "2 Aardappelen", "Bouillon", "Tijm"],
            steps: [
                "1. Kook de aardappelblokjes voor in de bouillon met wat **tijm**.",
                "2. Voeg de groene groenten toe en kook kort mee (zo blijft de kleur felgroen).",
                "3. Mix zeer fijn."
            ],
            kid: "Monsterlijk lekker."
        },

        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Kalkoen & Broccoli", kcal: 410, p: 35, t: 20,
            ing: ["500g Kalkoenfilet", "1 Verse Broccoli", "600g Aardappelen", "Olijfolie/Boter"], 
            steps: [
                "1. Kook de aardappelen gaar met wat zout.",
                "2. Snij de kalkoen in lapjes. Kruid met peper, zout en eventueel wat paprikapoeder. Bak goudbruin en gaar (kalkoen moet goed doorbakken zijn, maar niet droog).",
                "3. Stoom de broccoli beetgaar.",
                "4. Serveer de kalkoen met de aardappels en broccoli."
            ], 
            kid: "Lekkere 'witte' kip." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Pasta Gehakt & Wortel", kcal: 560, p: 29, t: 25,
            ing: ["500g Gehakt", "300g Pasta", "3 Wortelen", "Passata", "Italiaanse kruiden"], 
            steps: [
                "1. Kook de pasta al dente in gezouten water.",
                "2. Rasp de wortelen fijn. Bak het gehakt rul met de wortelrasp en **uienpoeder**.",
                "3. Voeg de passata toe samen met 1 eetlepel **Italiaanse kruiden** en een snufje suiker. Laat 10 min sudderen.",
                "4. Meng de pasta door de saus voor het serveren."
            ], 
            kid: "De geraspte wortel is onzichtbaar voor kieskeurige eters." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Kip Paprika Quinoa", kcal: 475, p: 34, t: 25,
            ing: ["600g Kipblokjes", "150g Quinoa", "2 Paprika's", "Paprikapoeder"], 
            steps: [
                "1. Kook de quinoa in **kippenbouillon** (geeft véél meer smaak dan water).",
                "2. Bak de kipblokjes goudbruin met **mild paprikapoeder** en peper.",
                "3. Voeg de paprikablokjes toe en bak tot ze zacht en zoet zijn.",
                "4. Meng de quinoa erdoor en breng op smaak met eventueel wat peterselie."
            ], 
            kid: "Quinoa korreltjes zijn grappig!" 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Kabeljauw & Zoete Friet", kcal: 415, p: 27, t: 30,
            ing: ["3 Kabeljauwfilets", "800g Zoete aardappel", "1 Courgette", "Bloem"], 
            steps: [
                "1. Snij zoete aardappelfrieten, hussel met olie en zout. Bak 25 min in de oven op 200°C.",
                "2. Wentel de kabeljauw lichtjes in **bloem** met peper en zout. Bak krokant in boter.",
                "3. Wok de courgetteschijfjes apart op hoog vuur met wat knoflookpoeder."
            ], 
            kid: "Gezonde frietjes!" 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Gevulde Paprika", kcal: 505, p: 31, t: 35,
            ing: ["3 Paprika's", "Rundergehakt", "Rijst", "Halve Courgette", "Provencaalse kruiden"], 
            steps: [
                "1. Meng het rauwe gehakt met gekookte rijst, fijngehakte courgette en **Provençaalse kruiden**.",
                "2. Vul de gehalveerde paprika's stevig op.",
                "3. Zet 30 min in de oven op 180°C. De sappen van het vlees trekken in de rijst voor extra smaak."
            ], 
            kid: "Eten uit een 'kommetje' van groente." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Kip Wortelsaus & Rijst", kcal: 525, p: 32, t: 25,
            ing: ["Kipblokjes", "4 Verse wortelen", "Rijst", "100ml Room", "Kipkruiden"], 
            steps: [
                "1. Kook de wortelen heel gaar in bouillon. Mix ze met de room tot een gladde, oranje saus.",
                "2. Bak de kipblokjes krokant met **kipkruiden**.",
                "3. Voeg de saus toe aan de kip en laat even pruttelen. Serveer met rijst."
            ], 
            kid: "Een zachte, zoete oranje saus." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Pasta Broccoli-Kip", kcal: 495, p: 30, t: 15,
            ing: ["Pasta", "1 Broccoli", "300g Kipblokjes", "Roomkaas", "Zwarte peper"], 
            steps: [
                "1. Kook pasta en broccoli samen in één pan.",
                "2. Bak de kipblokjes in een koekenpan gaar.",
                "3. Giet de pasta af (hou vocht apart), roer de roomkaas en de gebakken kip erdoor.",
                "4. Kruid rijkelijk met **zwarte peper**."
            ], 
            kid: "Heel mild en romig, zonder vis." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Zoete Aardappel Curry", kcal: 445, p: 17, t: 30,
            ing: ["Zoete aardappel", "Linzen", "Kokosmelk", "Milde Currypasta"], 
            steps: [
                "1. Bak een lepel **milde currypasta** eerst aan in olie (belangrijk voor de geur!).",
                "2. Voeg de zoete aardappelblokjes en kokosmelk toe. Laat sudderen.",
                "3. Doe de linzen erbij en warm door. Serveer met naanbrood of rijst."
            ], 
            kid: "Zoet, romig en niet pikant." 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Gehakt-Paprika Schotel", kcal: 535, p: 28, t: 25,
            ing: ["Gehakt", "1 Paprika", "600g Aardappelen", "Paprikapoeder"], 
            steps: [
                "1. Bak de aardappelblokjes in olie tot ze écht krokant zijn.",
                "2. Bak in een andere pan het gehakt en de paprika met **paprikapoeder** en zout.",
                "3. Schep de aardappeltjes er pas op het allerlaatste moment door zodat ze knapperig blijven."
            ], 
            kid: "Iedereen houdt van gebakken patatjes." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Wok Quinoa & Ei", kcal: 435, p: 21, t: 20,
            ing: ["Quinoa", "Groenten restjes", "3 Eieren", "Sojasaus"], 
            steps: [
                "1. Wok alle restjes groenten op hoog vuur (zorg dat de pan heet is!).",
                "2. Voeg de gekookte quinoa toe en bak mee.",
                "3. Schuif alles opzij, breek de eieren in de pan en roer tot 'scrambled eggs'. Meng alles en werk af met **sojasaus**."
            ], 
            kid: "Confetti-eten!" 
        }
    ]
};
