/* DATA VOOR JANUARI WEEK 3 & 4 - UITGEBREIDE RECEPTEN */

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
    // HEMMERYCKX (2 Volwassenen)
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
    // RICOUR - TIELEMANS (2 Volw + 2 Kinderen)
    // -------------------------------------------------------------
    ricour_tielemans: {
        v: [
            "Kippenchipolata (800g) - €9.50", 
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
                "1. Kook de rijst volgens de instructies op de verpakking en giet af.",
                "2. Verhit wat olijfolie in een ruime braadpan. Kruid de kipblokjes met peper en zout en bak ze goudbruin. Schep ze even uit de pan.",
                "3. Snij ondertussen de courgette en paprika in blokjes van 1-2 cm. Bak deze in dezelfde pan (in het bakvet van de kip) gedurende 3-4 minuten.",
                "4. Doe de kip terug in de pan. Voeg de tomatenblokjes en de oregano toe.",
                "5. Laat het geheel nog 5 à 10 minuten zachtjes pruttelen zodat de smaken mengen en de saus iets indikt. Serveer over de rijst."
            ], 
            kid: "Kip in rode saus met zachte courgette." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Koolvis met Bloemkoolstoemp", kcal: 390, p: 32, t: 30,
            ing: ["450g Koolvisfilet", "1 halve Bloemkool", "500g Wortelen", "400g Aardappelen", "Snufje Nootmuskaat"], 
            steps: [
                "1. Schil de aardappelen en wortelen en snij ze in gelijke stukken. Snij de bloemkool in roosjes.",
                "2. Doe alle groenten samen in een grote pot met water en een snuf zout. Kook ze in ca. 15-20 min gaar.",
                "3. Dep de ontdooide koolvisfilets goed droog met keukenpapier. Kruid met peper en zout. Bak ze in een pan met boter of olie in 3-4 minuten per kant goudbruin.",
                "4. Giet de groenten af (vang een klein beetje kookvocht op). Stamp ze tot een grove puree.",
                "5. Breng de stoemp op smaak met peper, zout en een snufje nootmuskaat. Voeg eventueel wat kookvocht toe voor smeuïgheid."
            ], 
            kid: "Oranje-witte puree met zachte vis." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Spaghetti (Deel 1)", kcal: 650, p: 40, t: 45,
            ing: ["500g Gehakt", "500g Pasta", "2 stuks Prei", "2 Wortelen", "140g Tomatenpuree", "400g Tomatenblokjes"], 
            steps: [
                "1. Snij de prei in halve ringen en was goed. Rasp de wortelen fijn.",
                "2. Verhit een grote stoofpot. Bak het gehakt rul en bruin (zonder extra olie, er komt genoeg vet uit).",
                "3. Voeg de prei en wortelrasp toe en bak 5 minuten mee tot de groenten zacht worden.",
                "4. Roer de tomatenpuree erdoor en bak 1 minuut mee (om te ontzuren). Blus met de tomatenblokjes en een half blikje water.",
                "5. Laat de saus minstens 15 min pruttelen. Kook ondertussen de pasta beetgaar. Serveer samen."
            ], 
            kid: "Slierten met veel saus." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Romige Kip Spinazie", kcal: 470, p: 36, t: 20,
            ing: ["400g Kipblokjes", "450g Spinazie (DV)", "300g Rijst", "100g Zuivelspread", "2 el Pittenmix"], 
            steps: [
                "1. Kook de rijst gaar in gezouten water.",
                "2. Bak de kipblokjes in een hapjespan met peper, zout en eventueel wat kipkruiden tot ze gaar zijn.",
                "3. Voeg de diepvries spinazie toe (blokjes) en laat rustig ontdooien in de pan met deksel erop.",
                "4. Als de spinazie warm is, zet je het vuur laag. Roer de zuivelspread erdoor tot je een romige, witte saus hebt.",
                "5. Rooster de pittenmix kort in een droge koekenpan en strooi over het gerecht."
            ], 
            kid: "Kip in witte saus." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Chipolata met Broccolimix", kcal: 460, p: 28, t: 25,
            ing: ["500g Chipolata", "1 stronk Broccoli", "600g Zoete Aardappel", "1 Rode ui", "2 el Zonnebloempitten"], 
            steps: [
                "1. Schil de zoete aardappel en snij in blokjes van 2 cm. Snij de broccoli in kleine roosjes. Snipper de rode ui.",
                "2. Kook de zoete aardappel en broccoli 5 minuten voor in kokend water. Giet af.",
                "3. Bak de chipolata worstjes in een grote koekenpan of wok rondom bruin.",
                "4. Schuif de worstjes aan de kant (of haal ze eruit). Voeg een scheutje olie toe en wok de voorgekookte groenten en de ui op hoog vuur gedurende 5 minuten.",
                "5. Meng alles door elkaar en werk af met de zonnebloempitten."
            ], 
            kid: "Worstjes met boompjes." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Gehakt-Groente Schotel", kcal: 500, p: 35, t: 25,
            ing: ["500g Gehakt", "400g Tomatenblokjes", "300g Rijst", "1 Courgette", "150g Mais", "1 Paprika"], 
            steps: [
                "1. Kook de rijst gaar volgens de verpakking.",
                "2. Rul het gehakt bruin in een grote hapjespan. Kruid met peper, zout en paprikapoeder.",
                "3. Snij de courgette en paprika in kleine blokjes. Voeg ze toe aan het gehakt en bak 5 minuten mee.",
                "4. Giet de uitgelekte mais en de tomatenblokjes erbij. Laat nog 5-10 minuten sudderen tot de groenten gaar zijn.",
                "5. Serveer de saus over de rijst of schep de rijst erdoor voor een éénpansgerecht."
            ], 
            kid: "Rijst met gehakt en maisjes." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Nasi Goreng", kcal: 490, p: 30, t: 20,
            ing: ["400g Kipblokjes", "300g Rijst", "2 stuks Prei", "200g Erwten", "3 Eieren", "Ketjap Manis"], 
            steps: [
                "1. Kook de rijst en giet af. (Tip: Spreid de rijst uit op een bord om snel af te koelen, dat bakt beter).",
                "2. Snij de prei in ringen. Bak de kipblokjes gaar in een wok met wokolie.",
                "3. Voeg de prei en de diepvries erwten toe en wok 3 minuten mee op hoog vuur.",
                "4. Doe de rijst erbij en voeg een flinke scheut Ketjap Manis toe. Bak al omscheppend.",
                "5. Schuif alles naar de zijkant, breek de eieren in het midden, roer tot roerei en meng dan alles door elkaar."
            ], 
            kid: "Rijst met groene bolletjes." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Spaghetti (Deel 2)", kcal: 650, p: 40, t: 15,
            ing: ["500g Gehakt", "500g Pasta", "140g Tomatenpuree", "400g Tomatenblokjes", "1 Wortel", "1 Paprika"], 
            steps: [
                "1. *Heb je saus over van vorige week?* Warm deze dan op. *Zo niet:* Maak de saus vers (gehakt rullen, tomatenpuree bakken, tomatenblokjes erbij).",
                "2. Kook de pasta beetgaar in ruim gezouten water.",
                "3. Snij de wortel en paprika in reepjes en zet deze als rauwe 'knabbelgroenten' in een glas op tafel.",
                "4. Serveer de pasta met de saus en de rauwkost erbij."
            ], 
            kid: "Spaghetti dag!" 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Pasta & Broccoli", kcal: 520, p: 35, t: 20,
            ing: ["400g Pasta", "3 blikken Tonijn", "1 stronk Broccoli", "100g Zuivelspread", "150g Mais"], 
            steps: [
                "1. Snij de broccoli in hele kleine roosjes. Kook de pasta in ruim water.",
                "2. Voeg de laatste 4 minuten van de kooktijd de broccoliroosjes toe aan het water bij de pasta.",
                "3. Giet alles af, maar bewaar een klein kopje kookvocht. Doe de pasta en broccoli terug in de pan.",
                "4. Roer de uitgelekte tonijn, mais en de zuivelspread erdoor. Voeg eventueel wat kookvocht toe om de saus smeuïger te maken.",
                "5. Kruid royaal met zwarte peper (en zout indien nodig)."
            ], 
            kid: "Vispasta met witte saus." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Gezonde Kapsalon", kcal: 550, p: 35, t: 30,
            ing: ["400g Kipfilet", "800g Zoete Aardappel", "IJsbergsla", "Komkommer", "Tomaten", "100g Geraspte Kaas", "Zuivelspread"], 
            steps: [
                "1. Verwarm de oven op 200°C. Snij de zoete aardappel in frietjes, meng met een lepel olie en bak 20-25 min in de oven (of Airfryer).",
                "2. Snij de kip in reepjes, kruid met kip/shoarmakruiden en bak goudbruin in de pan.",
                "3. Doe de gebakken frietjes in een ovenschaal. Verdeel de kip erover en strooi de kaas eroverheen. Zet 2 min onder de grill tot de kaas smelt.",
                "4. Snij de sla, tomaat en komkommer fijn. Verdeel deze koude groenten bovenop de warme schotel.",
                "5. Maak een snel 'knoflooksausje' door de zuivelspread te mengen met een beetje water en knoflookpoeder."
            ], 
            kid: "Frietjesfeest met kip." 
        }
    ]
};
