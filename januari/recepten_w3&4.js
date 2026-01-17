/* DATA VOOR JANUARI WEEK 3 & 4 - UPDATE MET VERSPREIDE SPAGHETTI & KIP */

var shoppingData = {
    ricour: {
        // VOORRAAD: 1kg Kipblokjes, 2kg Gehakt, Rijst, DV Spinazie, Tomatenblokjes
        v: ["Kippenchipolata (500g) - €6.99", "Tonijn in eigen nat (3 blikjes) - €4.50", "DV Koolvisfilet (800g) - €5.99", "Eieren (6 stuks) - €1.95"],
        g: ["Paprika mix (3st) - €1.99", "Prei (bussel) - €1.49", "Wortelen (2kg zak) - €1.99", "Aardappelen (2.5kg) - €3.99", "Rode Kool met appel (pot) - €1.45", "Ui (net) - €1.25", "Mais (3 pack) - €2.25", "Rode bonen (Kidney) - €0.99", "Kikkererwten (blik 400g) - €0.89", "Zoete Aardappel (1kg) - €2.50"],
        k: ["Pasta (500g) - €0.95", "Tomatenpuree (klein) - €0.65", "Room (250ml) - €1.15", "Geraspte kaas (200g) - €2.19", "Ketjap Manis - €1.89", "Kokosmelk (blik) - €1.45"]
    },
    hemmeryckx: {
        v: ["Kippenchipolata (350g) - €4.99", "Tonijn (2 blikjes) - €3.00", "DV Koolvis (400g) - €3.50", "Eieren (6 stuks) - €1.95"],
        g: ["Paprika (2st) - €1.35", "Prei (2 stuks) - €1.00", "Wortelen (1kg) - €1.15", "Aardappelen - €2.00", "Rode Kool (pot) - €1.45", "Zoete Aardappel (2st) - €1.50", "Kikkererwten (klein blik) - €0.70"],
        k: ["Pasta - €0.70", "Room (klein) - €0.85", "Kaas - €1.50", "Kokosmelk (klein) - €1.15"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN - LUNCH */
        { 
            id: "j_w3_s1", m: "LUNCH - SOEP: Tomaat-Paprika", kcal: 110, p: 3, t: 25,
            ing: ["VOORRAAD: Tomatenblokjes", "2 Paprika's", "1 Ui", "Gedroogde Oregano", "Bouillon"],
            steps: [
                "1. Fruit de ui en grove stukken paprika aan in olijfolie.",
                "2. Voeg de tomatenblokjes en groentebouillon toe.",
                "3. Laat koken tot zacht en mix glad. Kruid stevig met **oregano en tijm**."
            ],
            kid: "Lekkere rode soep."
        },
        { 
            id: "j_w3_s2", m: "LUNCH - SOEP: Wortel-Gember", kcal: 95, p: 2, t: 25,
            ing: ["500g Wortelen", "1 Aardappel", "Gemberpoeder"],
            steps: [
                "1. Kook de wortelen en aardappel in kippenbouillon.",
                "2. Mix glad. Voeg een snufje **gember** toe voor de weerstand."
            ],
            kid: "Oranje soep."
        },

        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Kip 'Cacciatore' (Jagerskip)", kcal: 420, p: 30, t: 25,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "1 Paprika", "Gedroogde Tijm"], 
            steps: [
                "1. Bak de kipblokjes bruin. Haal even uit de pan.",
                "2. Bak ui en paprikablokjes glazig. Voeg de tomatenblokjes en 1 el **tijm** toe.",
                "3. Doe de kip terug en laat 10 min sudderen tot de saus indikt.",
                "4. Serveer met gekookte rijst."
            ], 
            kid: "Kip in een zachte rode saus." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Koolvis met Wortelstoemp", kcal: 390, p: 25, t: 30,
            ing: ["DV Koolvisfilet", "Aardappelen", "Wortelen", "Melk/Boter"], 
            steps: [
                "1. Kook aardappelen en wortelen samen gaar. Stamp tot puree met melk/boter en nootmuskaat.",
                "2. Dep de vis droog en bak in boter goudbruin. Kruid met peper, zout en eventueel wat citroensap.",
                "3. Serveer de vis bovenop de stamppot."
            ], 
            kid: "Oranje puree met zachte witte vis." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Spaghetti Bolognese (Deel 1)", kcal: 650, p: 35, t: 45,
            ing: ["VOORRAAD: 1kg Gehakt (de helft vd voorraad)", "Pasta", "Spaghettigroenten (ui/wortel/prei uit voorraad)", "Italiaanse kruiden"], 
            steps: [
                "1. Rul het gehakt in een grote pot tot het écht bruin is (dit geeft smaak).",
                "2. Voeg fijngesneden ui, wortel en prei toe. Bak mee.",
                "3. Voeg gezeefde tomaten/tomatenblokjes toe + **Italiaanse kruiden** en een blokje bouillon.",
                "4. Laat minstens 20 min pruttelen. Kook de pasta."
            ], 
            kid: "Sluurpspaghetti!" 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Romige Kip Spinazie", kcal: 480, p: 32, t: 20,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: Rijst", "VOORRAAD: DV Spinazie", "Room", "Kerriepoeder"], 
            steps: [
                "1. Kook de rijst.",
                "2. Bak de kipblokjes met peper, zout en **kerriepoeder**.",
                "3. Voeg de spinazie toe en laat ontdooien. Roer de room erdoor en warm goed door.",
                "4. Proef en kruid bij met peper."
            ], 
            kid: "Rijst met groene roomsaus." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Kippenchipolata met Rode Kool", kcal: 450, p: 25, t: 20,
            ing: ["Kippenchipolata's", "Pot Rode kool met appel", "Aardappelen"], 
            steps: [
                "1. Schil en kook de aardappelen.",
                "2. Bak de kippenworsten rustig in boter op laag vuur (niet prikken, dan blijven ze sappig).",
                "3. Verwarm de rode kool.",
                "4. Serveer klassiek met jus van de worstjes."
            ], 
            kid: "Worstjes met zoete paarse groente." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Mexicaanse Chili Schotel", kcal: 495, p: 22, t: 25,
            ing: ["Rode Bonen (blik)", "Mais (blik)", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "Komijn/Paprikapoeder"], 
            steps: [
                "1. Fruit ui en knoflook. Voeg 1 tl **komijn** en 1 tl **paprikapoeder** toe.",
                "2. Doe de tomatenblokjes, uitgelekte bonen en mais erbij.",
                "3. Laat pruttelen tot een dikke saus. Serveer met rijst.",
                "4. (Optie: Heb je nog een restje kaas of yoghurt? Lekker erbij!)"
            ], 
            kid: "Cowboy rijst met maisjes." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Nasi Goreng (Kip & Prei)", kcal: 510, p: 28, t: 20,
            ing: ["VOORRAAD: 300g Kipblokjes", "VOORRAAD: Rijst", "Prei", "2 Eieren", "Ketjap Manis"], 
            steps: [
                "1. Kook de rijst en laat afkoelen.",
                "2. Bak de kipblokjes gaar. Voeg de preiringen toe.",
                "3. Doe de rijst erbij en bak op hoog vuur. Breng op smaak met een flinke scheut **Ketjap**.",
                "4. Bak apart 2 spiegeleitjes en leg die erop."
            ], 
            kid: "Gebakken rijst." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Spaghetti Bolognese (Deel 2)", kcal: 650, p: 35, t: 45,
            ing: ["VOORRAAD: 1kg Gehakt (Restant)", "Pasta", "Wortel/Ui (restjes)", "Basilicum"], 
            steps: [
                "1. Maak opnieuw een grote pot saus met de rest van het gehakt (of gebruik de ingevroren saus van vorige week).",
                "2. Tip voor variatie: Voeg deze keer wat extra wortel toe voor een zoetere saus, of een scheutje melk voor romigheid.",
                "3. Serveer met pasta en eventueel kaas."
            ], 
            kid: "Spaghetti is altijd feest." 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Melt Pasta", kcal: 520, p: 30, t: 15,
            ing: ["Pasta", "Tonijn (blik)", "Mais (restje)", "Room", "Geraspte kaas", "Dille (gedroogd)"], 
            steps: [
                "1. Kook de pasta.",
                "2. Verwarm de room met wat tomatenpuree en bouillon. Voeg tonijn en mais toe.",
                "3. Meng met de pasta en roer er de kaas doorheen.",
                "4. Kruid af met een beetje **dille** en peper."
            ], 
            kid: "Vispasta met kaassaus." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Zoete Aardappel Curry (Vega)", kcal: 460, p: 18, t: 25,
            ing: ["Zoete Aardappel", "Kikkererwten (blik)", "VOORRAAD: DV Spinazie", "Kokosmelk", "VOORRAAD: Rijst"], 
            steps: [
                "1. Schil de zoete aardappel en snij in blokjes. Bak kort aan in olie met **kerriepoeder**.",
                "2. Voeg de kokosmelk toe en laat sudderen tot de aardappel zacht is.",
                "3. Doe de uitgelekte kikkererwten en diepvries spinazie erbij. Warm door.",
                "4. Serveer met rijst. (Gezond, goedkoop en erg lekker!)"
            ], 
            kid: "Zachte, zoete blokjes in gele saus." 
        }
    ]
};
