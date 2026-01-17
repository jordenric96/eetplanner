/* DATA VOOR JANUARI WEEK 3 & 4 - HIGH PROTEIN & VEGGIE UPDATE */

var shoppingData = {
    ricour: {
        // VOORRAAD: 1kg Kipblokjes, 2kg Gehakt, Rijst, DV Spinazie, Tomatenblokjes
        // AANGEPAST: Meer groenten (Bloemkool/Broccoli) en eiwitrijke zuivel (Hüttenkäse/Kwark)
        v: ["Kippenchipolata (500g) - €6.99", "Tonijn in eigen nat (3 blikjes) - €4.50", "DV Koolvisfilet (800g) - €5.99", "Eieren (12 stuks) - €3.89"],
        g: ["Paprika mix (3st) - €1.99", "Prei (bussel) - €1.49", "Wortelen (2kg zak) - €1.99", "Bloemkool (vers of DV) - €2.49", "Broccoli (vers of DV) - €1.89", "Ui (net) - €1.25", "Mais (3 pack) - €2.25", "Rode bonen (Kidney) - €0.99", "Kikkererwten (blik 400g) - €0.89", "Zoete Aardappel (1kg) - €2.50"],
        k: ["Volkoren Pasta (indien mogelijk) - €1.15", "Tomatenpuree - €0.65", "Hüttenkäse/Cottage Cheese (200g) - €1.19", "Geraspte kaas 30+ - €2.19", "Ketjap Manis - €1.89", "Kokosmelk light - €1.45"]
    },
    hemmeryckx: {
        v: ["Kippenchipolata (350g) - €4.99", "Tonijn (2 blikjes) - €3.00", "DV Koolvis (400g) - €3.50", "Eieren (6 stuks) - €1.95"],
        g: ["Paprika (2st) - €1.35", "Prei (2 stuks) - €1.00", "Wortelen (1kg) - €1.15", "Bloemkool - €1.50", "Broccoli - €1.20", "Zoete Aardappel - €1.50"],
        k: ["Pasta - €0.70", "Hüttenkäse - €1.19", "Kaas - €1.50", "Kokosmelk - €1.15"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN - PROTEÏNE BOOST */
        { 
            id: "j_w3_s1", m: "LUNCH: Linzen-Tomatensoep", kcal: 140, p: 8, t: 25,
            ing: ["VOORRAAD: Tomatenblokjes", "1 blik Linzen (extra kopen of uit voorraad)", "Paprika", "Bouillon"],
            steps: [
                "1. Fruit paprika en ui. Voeg tomatenblokjes en bouillon toe.",
                "2. Voeg een uitgelekt blik linzen toe (dit zorgt voor binding én proteïne).",
                "3. Mix glad. De linzen maken de soep romig zonder room."
            ],
            kid: "Rode soep die goed vult."
        },
        { 
            id: "j_w3_s2", m: "LUNCH: Broccolisoep met Zalm (optie)", kcal: 110, p: 6, t: 20,
            ing: ["Broccoli", "1 Ui", "Bouillon", "Restje hüttenkäse"],
            steps: [
                "1. Kook de broccoli gaar in bouillon.",
                "2. Mix glad met een lepel hüttenkäse voor romigheid.",
                "3. (Optioneel: voeg snippers gerookte zalm toe als topping)."
            ],
            kid: "Hulk soep."
        },

        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Kip 'Cacciatore' (Extra Groenten)", kcal: 450, p: 35, t: 25,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst (kleine portie)", "2 Paprika's", "Ui"], 
            steps: [
                "1. Bak de kipblokjes bruin. Haal eruit.",
                "2. Bak ui en VEEL paprika (2 stuks). Hoe meer groenten, hoe beter.",
                "3. Voeg de tomatenblokjes, tijm en oregano toe. Stoof de kip gaar in de saus.",
                "4. Serveer met een kleinere portie rijst, de saus vult genoeg."
            ], 
            kid: "Kip in rode saus met zoete paprika." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Koolvis met Bloemkoolstoemp", kcal: 380, p: 30, t: 30,
            ing: ["DV Koolvisfilet", "1/2 Bloemkool", "500g Wortelen", "Weinig aardappel (bindmiddel)"], 
            steps: [
                "1. Kook de bloemkool, wortelen en een klein beetje aardappel gaar.",
                "2. Stamp tot puree. Door de bloemkool heb je veel volume maar weinig koolhydraten.",
                "3. Bak de koolvis in olijfolie/boter en serveer op de berg groentepuree.",
                "4. Kruid goed af met nootmuskaat en peper."
            ], 
            kid: "Een berg oranje/witte puree." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Spaghetti 'Verstopte Groenten'", kcal: 600, p: 40, t: 45,
            ing: ["VOORRAAD: 1kg Gehakt (Deel 1)", "Pasta", "Wortel/Prei/Courgette (geraspt)", "Tomatenpuree"], 
            steps: [
                "1. Rul het gehakt bruin.",
                "2. Rasp wortel en courgette (of snij prei heel fijn) en bak mee. De groenten 'smelten' in de saus.",
                "3. Voeg gezeefde tomaten toe. De extra groenten zorgen voor vezels die de suikerspiegel stabiel houden.",
                "4. Serveer met pasta (liefst volkoren)."
            ], 
            kid: "Rode saus (ze zien de groenten niet)." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Kip Spinazie & Kikkererwten", kcal: 490, p: 38, t: 20,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: DV Spinazie", "Kikkererwten (blik)", "Hüttenkäse (ipv room)"], 
            steps: [
                "1. Bak de kipblokjes met currykruiden.",
                "2. Voeg de spinazie en de uitgelekte kikkererwten toe (extra eiwit/vezels!).",
                "3. In plaats van vette room: roer er op het laatst 3 eetlepels Hüttenkäse of roomkaas light door.",
                "4. Serveer met rijst."
            ], 
            kid: "Kip met balletjes (kikkererwten)." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Chipolata met Broccolimix", kcal: 460, p: 32, t: 20,
            ing: ["Kippenchipolata", "Broccoli", "Rode ui", "Zoete Aardappel"], 
            steps: [
                "1. Snij zoete aardappel en broccoli in roosjes/blokjes. Kook ze kort voor (5 min).",
                "2. Bak de chipolata's in de pan.",
                "3. Voeg de voorgekookte groenten toe aan de pan en roerbak alles samen in de vetstof van de worstjes.",
                "4. Snel, één pan afwas en veel groen."
            ], 
            kid: "Worstjes met boompjes." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Chili Con Carne (Extra Bonen)", kcal: 510, p: 30, t: 30,
            ing: ["Rode Bonen (2 blikken)", "Mais", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "Komijn"], 
            steps: [
                "1. Fruit ui en knoflook met komijn en paprikapoeder.",
                "2. Voeg tomatenblokjes toe. Gebruik VEEL bonen (zwarte bonen of kidneybonen). Bonen zijn super gezond.",
                "3. (Optioneel: Restje gehakt kan erbij, maar hoeft niet).",
                "4. Serveer met een lepel yoghurt (eiwit) in plaats van zure room."
            ], 
            kid: "Chili met rijst." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Nasi met Omeletreepjes", kcal: 480, p: 30, t: 20,
            ing: ["VOORRAAD: 300g Kipblokjes", "VOORRAAD: Rijst", "Prei", "3 Eieren", "Extra diepvrieserwten"], 
            steps: [
                "1. Bak de kip. Voeg veel prei en een hand diepvrieserwten toe (erwten = extra proteïne).",
                "2. Bak de rijst mee met ketjap.",
                "3. Kluts de eieren, bak er een omelet van, snij in reepjes en meng door de rijst.",
                "4. Door de ei, kip en erwten heb je een drievoudige eiwitbron."
            ], 
            kid: "Rijst met groene bolletjes." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Spaghetti (Deel 2 - Restje)", kcal: 600, p: 40, t: 15,
            ing: ["Restant Saus", "Pasta", "Rauwe groentenknabbel erbij"], 
            steps: [
                "1. Warm de saus op.",
                "2. Omdat spaghetti soms wat weinig 'bite' heeft qua groenten: zet een schaaltje rauwe paprika/komkommer op tafel tijdens het eten.",
                "3. Serveer met de pasta."
            ], 
            kid: "Spaghetti tijd!" 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Pasta met Broccoli", kcal: 530, p: 35, t: 20,
            ing: ["Pasta", "Tonijn (blik)", "Broccoli (stronk)", "Hüttenkäse/Roomkaas"], 
            steps: [
                "1. Kook de pasta. Gooi de laatste 4 minuten kleine broccoliroosjes bij het kokend water (bespaart pannen).",
                "2. Giet af. Meng direct met de tonijn en hüttenkäse (smelt tot saus).",
                "3. Kruid met zwarte peper en eventueel wat citroensap.",
                "4. Super eiwitrijk door tonijn + zuivel + broccoli (bevat ook proteïne!)."
            ], 
            kid: "Pasta met vis en zachte boompjes." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Zoete Aardappel & Ei Curry", kcal: 450, p: 20, t: 25,
            ing: ["Zoete Aardappel", "4 Eieren (gekookt)", "VOORRAAD: DV Spinazie", "Kokosmelk"], 
            steps: [
                "1. Maak de curry met zoete aardappel, spinazie en kokosmelk zoals eerder.",
                "2. Kook intussen eieren hard.",
                "3. Pel de eieren en doe ze in de currysaus (Egg Curry).",
                "4. Goedkoop, vleesloos, maar toch veel proteïne en groenten."
            ], 
            kid: "Gele saus met een eitje." 
        }
    ]
};
