/* DATA VOOR JANUARI WEEK 3 & 4 - DEFINITIEVE VERSIE (GEEN CHAMPIGNONS) */

var shoppingData = {
    ricour: {
        // V: Vlees/Vis | G: Groenten/Fruit | K: Kruidenier/Zuivel
        v: ["Kippenchipolata (500g) - €6.99", "Tonijn in eigen nat (3 blikjes) - €4.50", "DV Koolvisfilet (800g) - €5.99", "Eieren (12 stuks) - €3.89"],
        g: ["Paprika mix (2 zakken à 3st) - €3.98", "Prei (2 bussels) - €2.99", "Wortelen (2kg zak) - €1.99", "Bloemkool (vers) - €2.49", "Broccoli (vers) - €1.89", "Courgette (4 stuks) - €3.40", "Prinsessenbonen (DV of vers 500g) - €1.99", "DV Erwten fijn (1 zak 600g) - €1.29", "Ui (net) - €1.25", "Mais (3 pack) - €2.25", "Zoete Aardappel (1kg) - €2.50", "Aardappelen (2.5kg) - €3.99"],
        k: ["Volkoren Pasta (500g) - €1.15", "Tomatenpuree (2 potjes) - €1.30", "Zuivelspread Light (type Philadelphia) - €1.89", "Geraspte kaas 30+ (300g) - €3.29", "Ketjap Manis - €1.89", "Pittenmix (Pompoen/Zonnebloem) - €2.50"]
    },
    hemmeryckx: {
        v: ["Kippenchipolata (350g) - €4.99", "Tonijn (2 blikjes) - €3.00", "DV Koolvis (400g) - €3.50", "Eieren (6 stuks) - €1.95"],
        g: ["Paprika (2st) - €1.35", "Prei (3 stuks) - €1.50", "Wortelen (1kg) - €1.15", "Bloemkool - €1.50", "Broccoli - €1.20", "Courgette (2st) - €1.70", "Prinsessenbonen (250g) - €1.00", "Zoete Aardappel (2st) - €1.50", "DV Erwten (klein doosje/rest)"],
        k: ["Pasta - €0.70", "Zuivelspread - €1.20", "Kaas - €1.50", "Pittenmix - €1.50"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN */
        { 
            id: "j_w3_s1", m: "LUNCH: Courgette-Preisoep", kcal: 90, p: 4, t: 25,
            ing: ["2 Courgettes", "2 stuks Prei", "1.5 liter Groentebouillon", "2 el Pittenmix", "2 el Griekse Yoghurt (optie)"],
            steps: [
                "1. Snij de courgettes en het wit van de prei in grove stukken.",
                "2. Stoof de groenten kort aan in een soeppot met wat olijfolie.",
                "3. Voeg de bouillon toe en laat 15 minuten koken tot de groenten zacht zijn.",
                "4. Mix de soep glad. Serveer met een schepje yoghurt en geroosterde pitten voor een 'bite'."
            ],
            kid: "Groene hulk soep."
        },
        { 
            id: "j_w3_s2", m: "LUNCH: Wortel-Paprikasoep", kcal: 95, p: 2, t: 25,
            ing: ["500g Wortelen", "2 Rode Paprika's", "1 Ui", "1.5 liter Kippenbouillon", "1 el Zonnebloempitten"],
            steps: [
                "1. Schil de wortelen en snij in plakjes. Snij de paprika en ui grof.",
                "2. Doe alle groenten samen met de bouillon in de pot.",
                "3. Kook gaar en mix tot een gladde, oranje soep.",
                "4. Werk af met wat pittenmix in het midden van het bord."
            ],
            kid: "Oranje soep die zoet smaakt."
        },

        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Kip 'Cacciatore' (Veel Groenten)", kcal: 460, p: 35, t: 30,
            ing: ["350g Kipblokjes", "400g Tomatenblokjes (blik)", "300g Rijst", "1 Courgette", "1 Rode Paprika", "1 el Oregano"], 
            steps: [
                "1. Kook de rijst volgens de verpakking.",
                "2. Bak de kipblokjes goudbruin in een braadpan. Haal ze even uit de pan.",
                "3. Snij de courgette en paprika in blokjes en bak ze in dezelfde pan aan.",
                "4. Voeg de tomatenblokjes en oregano toe. Doe de kip terug en laat 10 min sudderen. Serveer over de rijst."
            ], 
            kid: "Kip in rode saus met zachte courgette." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Koolvis met Bloemkoolstoemp", kcal: 390, p: 32, t: 30,
            ing: ["800g Koolvisfilet (DV)", "1 halve Bloemkool", "500g Wortelen", "300g Aardappelen", "Snufje Nootmuskaat"], 
            steps: [
                "1. Schil de aardappelen en wortelen. Snij de bloemkool in roosjes.",
                "2. Kook alle groenten samen gaar in gezouten water. Giet af en stamp tot puree.",
                "3. Breng de stoemp op smaak met nootmuskaat, peper en een beetje kookvocht (geen melk nodig).",
                "4. Bak de ontdooide visfilets in olijfolie goudbruin en leg ze op de puree."
            ], 
            kid: "Oranje-witte puree met zachte vis." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Spaghetti (Deel 1 - Veel Gehakt)", kcal: 650, p: 40, t: 45,
            ing: ["750g Gehakt", "500g Pasta", "2 stuks Prei (fijngesneden)", "2 Wortelen (geraspt)", "140g Tomatenpuree", "400g Tomatenblokjes"], 
            steps: [
                "1. Rul het gehakt in een grote pot tot het goed bruin gebakken is.",
                "2. Voeg de fijngesneden prei en geraspte wortel toe en bak 5 minuten mee.",
                "3. Roer de tomatenpuree erdoor (even meebakken om te ontzuren) en blus met de tomatenblokjes en een scheut water.",
                "4. Laat de saus pruttelen terwijl je de pasta kookt. Serveer samen."
            ], 
            kid: "Slierten met veel saus." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Romige Kip Spinazie", kcal: 470, p: 36, t: 20,
            ing: ["350g Kipblokjes", "450g Spinazie (DV)", "300g Rijst", "3 el Zuivelspread Light", "2 el Pittenmix"], 
            steps: [
                "1. Kook de rijst gaar.",
                "2. Bak de kipblokjes in een pan met peper en zout.",
                "3. Voeg de diepvries spinazie toe en laat ontdooien/warm worden.",
                "4. Zet het vuur laag en roer de zuivelspread erdoor tot een romige saus ontstaat. Serveer met de rijst en strooi er pitten over."
            ], 
            kid: "Kip in witte saus." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Chipolata met Broccolimix", kcal: 460, p: 28, t: 25,
            ing: ["500g Kippenchipolata", "1 stronk Broccoli", "600g Zoete Aardappel", "1 Rode ui", "2 el Zonnebloempitten"], 
            steps: [
                "1. Schil de zoete aardappel en snij in blokjes. Snij de broccoli in kleine roosjes.",
                "2. Kook de groenten 5 minuten voor in water en giet af.",
                "3. Bak de worstjes in een grote koekenpan.",
                "4. Voeg de voorgekookte groenten en ui toe aan de pan bij de worstjes en roerbak alles tot het goudbruin is. Werk af met pitten."
            ], 
            kid: "Worstjes met boompjes." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Gehakt-Groente Schotel", kcal: 500, p: 35, t: 25,
            ing: ["500g Gehakt", "400g Tomatenblokjes", "300g Rijst", "1 Courgette", "150g Mais (blik)", "1 Paprika"], 
            steps: [
                "1. Kook de rijst.",
                "2. Rul het gehakt bruin in een hapjespan.",
                "3. Snij courgette en paprika in blokjes en bak mee met het gehakt. Voeg ook de mais toe.",
                "4. Giet de tomatenblokjes erbij en laat indikken tot een rijke saus. Serveer over de rijst."
            ], 
            kid: "Rijst met gehakt en maisjes." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Nasi Goreng (Extra Groen)", kcal: 490, p: 30, t: 20,
            ing: ["300g Kipblokjes", "300g Rijst", "2 stuks Prei", "200g Erwten (DV)", "3 Eieren", "Ketjap Manis"], 
            steps: [
                "1. Kook de rijst en laat bij voorkeur even afkoelen.",
                "2. Bak de kipblokjes gaar in een wok. Voeg de gesneden preiringen en de erwten toe.",
                "3. Doe de rijst erbij en bak op hoog vuur met een flinke scheut ketjap.",
                "4. Schuif alles aan de kant, breek de eieren in de pan en roer tot roerei. Meng alles door elkaar."
            ], 
            kid: "Rijst met groene bolletjes." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Spaghetti (Deel 2)", kcal: 650, p: 40, t: 15,
            ing: ["750g Gehakt", "500g Pasta", "140g Tomatenpuree", "400g Tomatenblokjes", "1 Wortel (snack)", "1 Paprika (snack)"], 
            steps: [
                "1. Maak de saus vers zoals vorige week: rul het gehakt, voeg tomatenpuree en tomatenblokjes toe.",
                "2. Laat goed doorkoken voor de smaak. Kook de pasta.",
                "3. Omdat er geen groenten in de saus zitten (behalve tomaat), snij je de wortel en paprika in reepjes en zet je deze als 'knabbelgroenten' op tafel.",
                "4. Serveer de pasta met de saus."
            ], 
            kid: "Spaghetti dag!" 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Pasta & Broccoli", kcal: 520, p: 35, t: 20,
            ing: ["400g Pasta", "3 blikken Tonijn", "1 stronk Broccoli", "3 el Zuivelspread Light", "150g Mais (blik)"], 
            steps: [
                "1. Kook de pasta in ruim water. Voeg de laatste 4 minuten de kleine broccoliroosjes toe aan het pastawater.",
                "2. Giet af en doe terug in de pan (op laag vuur).",
                "3. Roer de uitgelekte tonijn, mais en de zuivelspread erdoor. De warmte laat de spread smelten tot saus.",
                "4. Kruid royaal met zwarte peper en serveer direct."
            ], 
            kid: "Vispasta met witte saus." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Frittata met Prei & Erwten", kcal: 430, p: 25, t: 25,
            ing: ["6 Eieren", "600g Aardappelen", "2 stuks Prei", "200g Erwten (DV)", "50g Geraspte kaas", "2 el Pittenmix"], 
            steps: [
                "1. Schil de aardappelen, snij in dunne plakjes en kook ze 5-8 min voor (beetgaar).",
                "2. Snij de prei in ringen. Bak de prei en de diepvrieserwten kort aan in een pan.",
                "3. Kluts de eieren met peper, zout en een klein beetje kaas.",
                "4. Meng de aardappelen en groenten in een ingevette schaal (of ovenbestendige pan), giet het eimengsel erover en bak tot het ei gestold is. Bestrooi met pitten."
            ], 
            kid: "Hartige taart met groene bolletjes." 
        }
    ]
};
