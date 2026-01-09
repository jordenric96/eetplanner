/* DATA VOOR JANUARI WEEK 3 & 4 (INCLUSIEF SOEPEN) */

var shoppingData = {
    ricour: {
        v: ["Varkenshaas (450g) - €6.50", "Rundergehakt (600g) - €7.20", "Kipblokjes (900g) - €9.80", "Kabeljauw (3st) - €8.50", "Tonijn (2 blikken) - €3.00", "Eieren (6st) - €1.80"],
        g: ["Pompoen DV (450g) - €1.20", "Broccoli DV (500g) - €1.50", "Wortelschijfjes DV (1000g) - €1.20", "Paprikamix DV (800g) - €2.40", "Zoete aardappel (1200g) - €2.80", "Courgette (2st) - €1.60", "Doperwtjes DV (400g) - €0.90", "Preiringen DV (300g) - €0.90"],
        k: ["Pasta (1000g) - €1.50", "Quinoa (300g) - €2.10", "Rijst (500g) - €0.80", "Passata (500ml) - €0.85", "Kokosmelk (400ml) - €1.35", "Linzen (1 blik) - €0.90", "Bouillonblokjes - €1.10"]
    },
    hemmeryckx: {
        v: ["Varkenshaas (300g) - €4.35", "Rundergehakt (400g) - €4.80", "Kipblokjes (600g) - €6.50", "Kabeljauw (2st) - €5.70", "Tonijn (1 blik) - €1.50"],
        g: ["Pompoen DV - €0.80", "Broccoli DV - €1.05", "Wortels - €0.80", "Paprika DV - €1.60", "Zoete aardappel - €1.90", "Courgette - €1.10"],
        k: ["Pasta - €1.00", "Quinoa - €1.40", "Rijst - €0.55", "Kokosmelk - €0.90"]
    }
};

var recipeData = {
    recipes: [
        /* --- NIEUWE SOEPEN VOOR WEEK 1 & 2 --- */
        { 
            m: "SOEP: Wortel-Pompoen 'Zonneschijn'", kcal: 110, p: 2, t: 25,
            ing: ["450g Pompoenblokjes (diepvries)", "400g Wortelschijfjes (diepvries)", "1.2L Bouillon", "1 Ui"],
            steps: [
                "1. Snipper de ui en fruit deze glazig in een pot met olie.",
                "2. Voeg de bevroren pompoen en wortels toe. Bak 5 min mee voor extra smaak.",
                "3. Giet de bouillon erbij en kook 20 min.",
                "4. Mix de soep glad en voeg een scheutje melk en snufje kaneel toe."
            ],
            kid: "Heerlijk zoet door de pompoen. Serveer met broodkorstjes."
        },
        { 
            m: "SOEP: Groene Monster (Erwtjes-Prei)", kcal: 145, p: 6, t: 20,
            ing: ["400g Doperwtjes (diepvries)", "300g Preiringen (diepvries)", "2 Aardappelen", "1.2L Bouillon"],
            steps: [
                "1. Kook aardappelblokjes 10 min in de bouillon.",
                "2. Voeg de bevroren prei en erwtjes toe en kook nog 10 min.",
                "3. Mix de soep zeer lang voor een gladde textuur.",
                "4. Serveer met geraspte kaas voor extra eiwitten."
            ],
            kid: "De erwtjes maken de soep natuurlijk zoet. Noem het monster-soep!"
        },

        /* --- WEEK 3 GERECHTEN --- */
        { 
            m: "Varkenshaas, Broccoli & Aardappelen", kcal: 420, p: 32, t: 25,
            ing: ["Varkenshaas", "Broccoli (diepvries)", "Aardappelen"], 
            steps: ["Kook aardappelen. Bak vlees goudbruin. Bak de diepvriesbroccoli kort mee in het bakvet van het vlees."], 
            kid: "Noem de broccoli miniboompjes." 
        },
        { 
            m: "Pasta Rundergehakt & Wortel-Passata", kcal: 550, p: 28, t: 20,
            ing: ["Rundergehakt", "Pasta", "Wortel (diepvries)", "Passata"], 
            steps: ["Bak gehakt en wortel aan. Voeg passata toe en laat pruttelen tot de wortels zacht zijn. Meng met pasta."], 
            kid: "De wortel maakt de saus lekker zoet." 
        },
        { 
            m: "Kip & Paprika 'Tover-Quinoa'", kcal: 480, p: 35, t: 25,
            ing: ["Kipblokjes", "Quinoa", "Paprika (diepvries)"], 
            steps: ["Kook quinoa in bouillon. Bak kip met paprikapoeder en voeg de diepvriespaprika toe."], 
            kid: "Witte staartjes in de quinoa zijn 'toverkracht'." 
        },
        { 
            m: "Kabeljauw & Zoete Aardappelfrietjes", kcal: 410, p: 26, t: 30,
            ing: ["Kabeljauw", "Zoete aardappel", "Courgette (diepvries)"], 
            steps: ["Bak aardappelfrietjes krokant. Bak vis in boter. Wok courgetteschijfjes op hoog vuur."], 
            kid: "Gezonde fish & chips." 
        },
        { 
            m: "Gevulde Paprika (Gehakt/Rijst)", kcal: 510, p: 30, t: 35,
            ing: ["Verse Paprika's", "Gehakt", "Rijst", "Courgette (diepvries)"], 
            steps: ["Vul de paprika's met een mengsel van gehakt, rijst en fijngehakte courgette. 25 min in de oven op 180C."], 
            kid: "De groenten zitten verstopt in de vulling." 
        },

        /* --- WEEK 4 GERECHTEN --- */
        { 
            m: "Kip in Romige Wortelsaus & Rijst", kcal: 520, p: 33, t: 25,
            ing: ["Kipblokjes", "Wortel (diepvries)", "Rijst", "Room"], 
            steps: ["Mix helft gekookte wortels met room tot saus. Bak kip en voeg de saus toe. Serveer met rijst."], 
            kid: "Een zachte oranje saus die niet pikt." 
        },
        { 
            m: "Pasta Broccoli-Tonijn Romig", kcal: 490, p: 29, t: 15,
            ing: ["Pasta", "Broccoli (diepvries)", "Tonijn", "Roomkaas"], 
            steps: ["Kook pasta en broccoli samen. Giet af en meng met tonijn en roomkaas."], 
            kid: "Heel mild van smaak." 
        },
        { 
            m: "Milde Zoete Aardappel Curry", kcal: 450, p: 18, t: 30,
            ing: ["Zoete aardappel", "Linzen", "Kokosmelk"], 
            steps: ["Stoof aardappel in kokosmelk met milde curry. Voeg linzen toe en warm door."], 
            kid: "Niet pikant, wel lekker romig." 
        },
        { 
            m: "Gehakt-Paprika Schotel", kcal: 530, p: 27, t: 25,
            ing: ["Gehakt", "Paprika (diepvries)", "Aardappelblokjes (diepvries)"], 
            steps: ["Bak aardappelblokjes krokant. Bak gehakt en paprika apart en meng op het laatst."], 
            kid: "Lekker knapperig." 
        },
        { 
            m: "Wok Quinoa met Groenten & Ei", kcal: 440, p: 22, t: 20,
            ing: ["Quinoa", "Gemengde groenten (diepvries)", "Eieren"], 
            steps: ["Wok de groenten en quinoa samen. Roerbak op het einde de eieren erdoor."], 
            kid: "Confetti op je bord!" 
        }
    ]
};
