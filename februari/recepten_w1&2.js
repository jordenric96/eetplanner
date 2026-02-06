/* DATA VOOR FEBRUARI WEEK 2 - HEALTHY EDITIE (AANGEPAST DO/VR) */

var shoppingData = {
    // -------------------------------------------------------------
    // RICOUR (3p: 2 Volw + 1 Kind)
    // -------------------------------------------------------------
    ricour: {
        v: [
            "Kipfilet blokjes (900g) - €11.50", /* Voor Ma + Wo */
            "Kabeljauw of Koolvis (450g) - €5.50",
            "Kalkoenlapjes (3 stuks / 450g) - €6.50", /* Voor Do */
            "Mager Rundergehakt (500g) - €6.50", /* Voor Vr */
            "Mozzarella Light (1 bol) - €0.99"
        ],
        g: [
            "Broccoli (2 stuks) - €2.99",
            "Prei (3 stuks) - €1.49",
            "Verse Spinazie (400g) - €2.99",
            "Wortelen (1.5kg) - €1.99", /* Voor Do */
            "Paprika mix (3 stuks) - €1.99",
            "Zoete Aardappelen (1kg) - €2.50", /* Voor Di */
            "Gewone Aardappelen (1kg) - €1.99", /* Voor Do (stoemp) */
            "DV Edamame/Sojabonen (1 doosje) - €2.29",
            "DV Erwten (400g) - €1.29",
            "Kidneybonen (1 blik) - €0.99",
            "Mais (1 blik) - €0.99",
            "Ui & Knoflook - €1.50"
        ],
        k: [
            "Volkoren Rijst (2 pakken) - €3.50",
            "Volkoren Pasta - €1.45",
            "Teriyaki saus (minder zout) - €2.49",
            "Groene Pesto (vers) - €2.15",
            "Zuivelspread Light (type Philadelphia) - €1.89",
            "Tomatenpuree - €0.60",
            "Kipkruiden / Mexicaanse kruiden - €1.50"
        ]
    },

    // -------------------------------------------------------------
    // HEMMERYCKX (2p: 2 Volwassenen)
    // -------------------------------------------------------------
    hemmeryckx: {
        v: [
            "Kipfilet (600g) - €7.50",
            "Koolvis (300g) - €4.00",
            "Kalkoenlapjes (2 stuks) - €4.50",
            "Mager Gehakt (350g) - €4.50",
            "Mozzarella (optioneel) - €0.99"
        ],
        g: [
            "Broccoli (1 stuk) - €1.50",
            "Prei (2 stuks) - €1.00",
            "Spinazie (300g) - €2.20",
            "Wortelen (1kg) - €1.20",
            "Paprika (1 stuks) - €0.80",
            "Zoete Aardappelen (700g) - €1.80",
            "Gewone Aardappelen (700g) - €1.50",
            "Edamame (klein) - €1.50",
            "Erwten (250g) - €0.80",
            "Bonen/Mais (klein) - €1.50"
        ],
        k: [
            "Volkoren Rijst - €1.80",
            "Volkoren Pasta - €1.00",
            "Teriyaki saus - €1.80",
            "Pesto - €1.50",
            "Zuivelspread - €1.20",
            "Kruiden - €1.00"
        ]
    },

    // -------------------------------------------------------------
    // RICOUR - TIELEMANS (4p: 2 Volw + 2 Kids)
    // -------------------------------------------------------------
    ricour_tielemans: {
        v: [
            "Kipfilet (1.2kg) - €14.50",
            "Visfilet (800g) - €9.50",
            "Kalkoenlapjes (4 stuks / 600g) - €8.50",
            "Mager Rundergehakt (800g) - €9.50",
            "Mozzarella (2 bollen) - €1.99"
        ],
        g: [
            "Broccoli (2 grote) - €3.00",
            "Prei (bussel) - €2.00",
            "Spinazie (600g) - €3.99",
            "Wortelen (2.5kg) - €2.99",
            "Paprika mix (3 stuks) - €1.99",
            "Zoete Aardappelen (1.5kg) - €3.50",
            "Gewone Aardappelen (1.5kg) - €2.99",
            "Edamame (groot) - €3.50",
            "Erwten (600g) - €1.89",
            "Bonen/Mais (2 blikken) - €3.00"
        ],
        k: [
            "Volkoren Rijst (groot) - €3.50",
            "Volkoren Pasta (750g) - €1.95",
            "Teriyaki saus (groot) - €3.00",
            "Pesto (grote pot) - €2.99",
            "Zuivelspread (groot) - €2.50",
            "Kruidenmixen - €2.00"
        ]
    }
};

var recipeData = {
    recipes: [
        /* WEEK 1 - VAKANTIE */
        {
            id: "f_w1_cp",
            m: "Week 1: Vakantie Centerparcs 🏊‍♂️",
            kcal: 0, p: 0, t: 0,
            ing: [],
            steps: ["Geniet van de vakantie!"],
            kid: "Veel zwemplezier!"
        },

        /* WEEK 2 */
        { 
            id: "f_w2_1", m: "Ma 09/02: High Protein Teriyaki Bowl", kcal: 520, p: 45, t: 20,
            ing: ["500g Kipfilet", "Volkoren Rijst", "2 stronken Broccoli", "200g DV Edamame (Sojabonen)", "Teriyaki saus"], 
            steps: [
                "1. Kook de volkoren rijst (vezelrijk). Kook de broccoli en edamame boontjes kort mee of apart.",
                "2. Snij de kip in blokjes en bak in een klein beetje olie goudbruin.",
                "3. Voeg de groenten toe aan de kip en blus met de teriyakisaus.",
                "4. Laat even sudderen zodat de saus de kip bedekt.",
                "5. Serveer als een 'bowl': laagje rijst, laagje kip/groenten."
            ], 
            kid: "De groene boontjes (edamame) zijn leuk om met de handen te eten." 
        },
        { 
            id: "f_w2_2", m: "Di 10/02: Skinny Vis Ovenschotel", kcal: 450, p: 35, t: 35,
            ing: ["450g Witvis (Koolvis/Kabeljauw)", "800g Zoete Aardappelen", "3 stuks Prei", "Zuivelspread Light", "Kruiden (Dille/Peper)"], 
            steps: [
                "1. Schil de zoete aardappelen, kook ze gaar en stamp tot puree met peper, zout en een lepel zuivelspread (ipv boter).",
                "2. Snij de prei in ringen en stoof zacht.",
                "3. Leg de rauwe vis in een ovenschaal, kruid met peper en citroen.",
                "4. Verdeel de gestoofde prei erover en dek af met de oranje puree.",
                "5. Bak 30 min in de oven op 200°C."
            ], 
            kid: "Zoete aardappelpuree vinden ze vaak lekkerder dan gewone." 
        },
        { 
            id: "f_w2_3", m: "Wo 11/02: Volkoren Pasta Kip Pesto", kcal: 560, p: 40, t: 15,
            ing: ["Volkoren Pasta", "400g Kipfilet", "400g Spinazie", "200g Erwten (DV)", "Groene Pesto", "Zuivelspread Light"], 
            steps: [
                "1. Kook de volkoren pasta beetgaar.",
                "2. Bak de kipblokjes gaar in een pan. Voeg de diepvries erwten toe.",
                "3. Doe de spinazie erbij en laat slinken.",
                "4. Roer 2 eetlepels pesto en 2 eetlepels zuivelspread erdoor voor een romige maar lichte saus.",
                "5. Meng de pasta erdoor."
            ], 
            kid: "Groene 'Hulk' pasta." 
        },
        { 
            id: "f_w2_4", m: "Do 12/02: Kalkoen met Wortelstoemp", kcal: 480, p: 38, t: 25,
            ing: ["3 Kalkoenlapjes", "1kg Wortelen", "600g Aardappelen", "1 Ui", "Peper & Nootmuskaat"], 
            steps: [
                "1. Schil de aardappelen en wortelen en snij in gelijke stukken. Kook ze samen gaar in gezouten water.",
                "2. Snipper de ui en bak deze zachtjes in een pan.",
                "3. Giet de groenten af en stamp ze fijn. Meng de gebakken uitjes erdoor voor extra smaak (en minder boter). Breng op smaak met nootmuskaat.",
                "4. Kruid de kalkoenlapjes en bak ze goudbruin in de pan.",
                "5. Serveer de stoemp met het stukje vlees."
            ], 
            kid: "Wortelpuree is lekker zoet!" 
        },
        { 
            id: "f_w2_5", m: "Vr 13/02: Mexicaanse Burrito Bowl", kcal: 510, p: 35, t: 20,
            ing: ["500g Mager Rundergehakt", "Volkoren Rijst", "1 blik Kidneybonen", "1 blik Mais", "1 Paprika", "Mexicaanse kruiden"], 
            steps: [
                "1. Kook de rijst.",
                "2. Rul het gehakt bruin met de paprika blokjes.",
                "3. Voeg de uitgelekte bonen en mais toe. Kruid stevig met paprikapoeder, komijn of Mexicaanse mix.",
                "4. Serveer in een kom: een bodem rijst met daarop het gehakt-mengsel.",
                "5. Optioneel: Werk af met wat blokjes tomaat of een lepel yoghurt/kwark."
            ], 
            kid: "Zonder de wrap knoeien ze minder! De kleurtjes (mais/bonen) maken het leuk." 
        }
    ]
};
