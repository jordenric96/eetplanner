/* DATA VOOR JANUARI WEEK 1 & 2 - SMAAK EDITIE */

var shoppingData = {
    ricour: {
        v: ["Kipgehakt (1000g) - €10.40", "Chipolata (1000g) - €9.50", "Tonijn (3 blikken) - €4.50", "Eieren (6st) - €1.80"],
        g: ["Aardappelen (1500g) - €1.85", "Wortelen (1000g) - €1.00", "Uien (500g) - €0.75", "Courgettes (4st) - €3.40", "Spinazie (500g) - €1.29", "Erwten (400g) - €1.89", "DV Pompoen (450g) - €1.39", "DV Prei (600g) - €1.45"],
        k: ["Pasta (1125g) - €2.25", "Rijst (1000g) - €1.75", "Tomatenblokjes (1600g) - €2.60", "Linzen (1000g) - €2.70", "Wraps (8st) - €1.59", "Kokosmelk (800ml) - €2.70", "Room (250ml) - €0.85", "Pesto (190g) - €1.85", "Bouillonblokjes - €1.10"]
    },
    hemmeryckx: {
        v: ["Kipgehakt (670g) - €7.00", "Chipolata (670g) - €6.40", "Tonijn (2 blikken) - €3.00", "Eieren (4st) - €1.20"],
        g: ["Aardappelen - €1.25", "Wortelen - €0.70", "Courgettes - €2.30", "Spinazie - €0.90"],
        k: ["Pasta - €1.50", "Rijst - €1.20", "Tomatenblokjes - €1.75", "Wraps - €1.10"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN */
        { 
            id: "j_w1_s1", m: "12/01 - SOEP: Wortel-Pompoen", kcal: 110, p: 2, t: 25, 
            ing: ["450g DV Pompoen", "400g Wortel", "1 Ui", "Bouillon", "Kaneel"], 
            steps: [
                "1. Snipper de ui grof en fruit deze in olijfolie tot ze glazig is.",
                "2. Voeg de bevroren pompoen en wortelschijfjes toe en bak 5 minuten mee op middelhoog vuur. Dit 'aanfruiten' zorgt voor een veel diepere smaak dan direct koken.",
                "3. Blus af met de bouillon en laat 20 minuten zachtjes koken.",
                "4. Mix de soep glad. Breng op smaak met peper, zout en een klein snufje **kaneel** of **komijn** om de zoetheid te accentueren.",
                "5. Voeg eventueel een scheutje melk toe voor de romigheid."
            ], 
            kid: "De natuurlijke zoetheid van de pompoen valt altijd in de smaak." 
        },
        { 
            id: "j_w1_s2", m: "13/01 - SOEP: Groene Monster", kcal: 145, p: 6, t: 20, 
            ing: ["400g DV Erwten", "300g DV Prei", "2 Aardappelen", "Bouillon", "Tijm"], 
            steps: [
                "1. Schil de aardappelen en snij in blokjes. Kook ze 10 minuten voor in de bouillon.",
                "2. Voeg dan pas de bevroren prei en doperwtjes toe. Laat nog 10 minuten doorkoken.",
                "3. Voeg tijdens het koken wat gedroogde **tijm** en zwarte peper toe.",
                "4. Mix de soep extra lang om de velletjes van de erwten volledig fijn te krijgen.",
                "5. Proef en kruid bij met peper en zout. Serveer direct."
            ], 
            kid: "Noem dit 'Hulk-soep' of 'Monster-soep' vanwege de felle kleur." 
        },
        /* HOOFDGERECHTEN */
        { 
            id: "j_w1_1", m: "Ma 12/01: Pasta Bolognese", kcal: 650, p: 32, t: 25, 
            ing: ["Kipgehakt", "Pasta", "Tomatenblokjes", "Wortel", "Oregano"], 
            steps: [
                "1. Verhit olie in een pan en bak het kipgehakt rul tot het bruin begint te zien (belangrijk voor de smaak!).",
                "2. Voeg de fijngehakte wortel toe en bak 3 minuten mee.",
                "3. Blus met de tomatenblokjes. Kruid rijkelijk met **oregano**, **basilicum**, peper en zout. Voeg een snufje suiker toe om het zuur van de tomaat te breken.",
                "4. Laat de saus 10 minuten pruttelen terwijl je de pasta al dente kookt.",
                "5. Meng de pasta direct door de saus."
            ], 
            kid: "Als ze geen stukjes lusten, mix de saus dan even glad voor je het vlees toevoegt." 
        },
        { 
            id: "j_w1_2", m: "Di 13/01: Kleurrijke Wok", kcal: 580, p: 30, t: 20, 
            ing: ["Kipblokjes", "Rijst", "Wortel", "Erwten", "Sojasaus", "Gemberpoeder"], 
            steps: [
                "1. Kook de rijst gaar (liefst in bouillon).",
                "2. Bak de kipblokjes goudbruin in olie op hoog vuur. Kruid met peper, zout en wat **gemberpoeder** of **currypoeder**.",
                "3. Haal de kip uit de pan en wok de wortelblokjes en erwten in dezelfde pan op hoog vuur.",
                "4. Voeg de kip en rijst weer toe. Breng op smaak met een scheutje **sojasaus** en bak alles nog 2 minuten samen al roerend."
            ], 
            kid: "Serveer met 'stokjes' (of rietjes) om het eten leuker te maken." 
        },
        { 
            id: "j_w1_3", m: "Wo 14/01: Linzenstoof", kcal: 510, p: 26, t: 25, 
            ing: ["Linzen", "Kokosmelk", "Spinazie", "Currypoeder"], 
            steps: [
                "1. Fruit een gesnipperd uitje aan. Voeg 1 eetlepel **milde currypasta** of **kerriepoeder** toe en bak dit kort mee tot het gaat geuren.",
                "2. Voeg de linzen (uitgelekt) toe en roer om.",
                "3. Giet de kokosmelk erbij en laat pruttelen tot de saus indikt.",
                "4. Roer op het allerlaatst de verse spinazie erdoor tot deze net geslonken is. Kruid af met peper en zout."
            ], 
            kid: "Lekker om met stukjes brood in te dippen." 
        },
        { 
            id: "j_w1_4", m: "Do 15/01: Wraps", kcal: 640, p: 29, t: 15, 
            ing: ["Wraps", "Courgette", "Maïs", "Room", "Paprikapoeder"], 
            steps: [
                "1. Snij de courgette in blokjes en bak ze hard aan in olie.",
                "2. Kruid stevig met **paprikapoeder** en een beetje **komijn**. Voeg de maïs toe.",
                "3. Roer er een beetje room of roomkaas door om een samenhangende vulling te maken.",
                "4. Vul de wraps, rol ze op en bak ze nog even kort in een droge koekenpan zodat ze krokant worden."
            ], 
            kid: "Laat ze hun eigen wrap vullen en oprollen." 
        },
        { 
            id: "j_w1_5", m: "Vr 16/01: Pasta Pesto", kcal: 630, p: 18, t: 15, 
            ing: ["Pasta", "Pesto", "Courgette"], 
            steps: [
                "1. Kook de pasta gaar.",
                "2. Schaaf met een dunschiller lange linten van de courgette.",
                "3. Bak de courgettelinten heel kort (2 min) in olijfolie met peper en zout. Ze moeten nog 'beet' hebben.",
                "4. Giet de pasta af (bewaar een scheutje kookvocht!) en meng direct met de groene pesto en het kookvocht voor een smeuïg geheel.",
                "5. Schep de courgettelinten erdoor."
            ], 
            kid: "Noem de courgette 'groene reuzenslierten'." 
        }
    ]
};
