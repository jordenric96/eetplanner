/* DATA VOOR JANUARI WEEK 1 & 2 - GECORRIGEERD */

var shoppingData = {
    ricour: {
        v: ["Kipgehakt (1000g) - €10.40", "Chipolata (1000g) - €9.50", "Tonijn (3 blikken) - €4.50", "Eieren (6st) - €1.80"],
        g: ["Aardappelen (1500g) - €1.85", "Wortelen (1000g) - €1.00", "Uien (500g) - €0.75", "Courgettes (4st) - €3.40", "Spinazie (500g) - €1.29", "Erwten (400g) - €1.89"],
        k: ["Pasta (1125g) - €2.25", "Rijst (1000g) - €1.75", "Tomatenblokjes (1600g) - €2.60", "Linzen (1000g) - €2.70", "Wraps (8st) - €1.59", "Kokosmelk (800ml) - €2.70", "Room (250ml) - €0.85", "Pesto (190g) - €1.85"]
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
            ing: ["450g DV Pompoen", "400g Wortel", "1 Ui", "Bouillon"], 
            steps: ["1. Fruit de ui glazig.", "2. Bak pompoen en wortel mee.", "3. Kook in bouillon, mix glad en voeg scheutje melk toe."], 
            kid: "Zoet en zacht." 
        },
        { 
            id: "j_w1_s2", m: "13/01 - SOEP: Groene Monster", kcal: 145, p: 6, t: 20, 
            ing: ["400g DV Erwten", "300g DV Prei", "2 Aardappelen", "Bouillon"], 
            steps: ["1. Kook aardappelblokjes.", "2. Voeg prei en erwtjes toe.", "3. Mix langdurig glad."], 
            kid: "Felgroene kleur!" 
        },
        /* HOOFDGERECHTEN WEEK 1 & 2 */
        { 
            id: "j_w1_1", m: "Ma 12/01: Pasta Bolognese", kcal: 650, p: 32, t: 25, 
            ing: ["Kipgehakt", "Pasta", "Tomatenblokjes", "Wortel"], 
            steps: ["1. Bak gehakt rul.", "2. Voeg tomaat en fijne wortel toe.", "3. Kook pasta en meng."], 
            kid: "Mix saus glad." 
        },
        { 
            id: "j_w1_2", m: "Di 13/01: Kleurrijke Wok", kcal: 580, p: 30, t: 20, 
            ing: ["Kipblokjes", "Rijst", "Wortel", "Erwten"], 
            steps: ["1. Kook rijst.", "2. Wok kip en groenten.", "3. Meng alles."], 
            kid: "Kleine stukjes." 
        },
        { 
            id: "j_w1_3", m: "Wo 14/01: Linzenstoof", kcal: 510, p: 26, t: 25, 
            ing: ["Linzen", "Kokosmelk", "Spinazie"], 
            steps: ["1. Stoof linzen in kokosmelk.", "2. Voeg spinazie toe tot het slinkt."], 
            kid: "Met brood dippen." 
        },
        { 
            id: "j_w1_4", m: "Do 15/01: Wraps", kcal: 640, p: 29, t: 15, 
            ing: ["Wraps", "Courgette", "Maïs", "Room"], 
            steps: ["1. Bak groenten.", "2. Vul wraps.", "3. Bak even aan in pan."], 
            kid: "Zelf rollen." 
        },
        { 
            id: "j_w1_5", m: "Vr 16/01: Pasta Pesto", kcal: 630, p: 18, t: 15, 
            ing: ["Pasta", "Pesto", "Courgette"], 
            steps: ["1. Kook pasta.", "2. Bak courgettelinten.", "3. Meng met pesto."], 
            kid: "Groene slierten." 
        }
    ]
};
