/* DATA VOOR JANUARI WEEK 3 & 4 - NO BEANS/NO CREAM/SEEDS UPDATE */

var shoppingData = {
    ricour: {
        // VOORRAAD: 1kg Kipblokjes, 2kg Gehakt, Rijst, DV Spinazie, Tomatenblokjes
        // NIEUW: Pittenmix, Prinsessenbonen, Courgette, Erwten, Zuivelspread (ipv room)
        v: ["Kippenchipolata (500g) - €6.99", "Tonijn in eigen nat (3 blikjes) - €4.50", "DV Koolvisfilet (800g) - €5.99", "Eieren (12 stuks) - €3.89"],
        g: ["Paprika mix (3st) - €1.99", "Prei (bussel) - €1.49", "Wortelen (2kg zak) - €1.99", "Bloemkool (vers) - €2.49", "Broccoli (vers) - €1.89", "Courgette (2 stuks) - €1.69", "Prinsessenbonen (DV of vers 500g) - €1.99", "DV Erwten (fijn) - €1.29", "Ui (net) - €1.25", "Mais (3 pack) - €2.25", "Zoete Aardappel (1kg) - €2.50"],
        k: ["Volkoren Pasta - €1.15", "Tomatenpuree - €0.65", "Zuivelspread Light (type Philadelphia) of Griekse Yoghurt - €1.89", "Geraspte kaas 30+ - €2.19", "Ketjap Manis - €1.89", "Kokosmelk light - €1.45", "Pompoenpitten/Zonnebloempitten (zakje) - €2.50"]
    },
    hemmeryckx: {
        v: ["Kippenchipolata (350g) - €4.99", "Tonijn (2 blikjes) - €3.00", "DV Koolvis (400g) - €3.50", "Eieren (6 stuks) - €1.95"],
        g: ["Paprika (2st) - €1.35", "Prei (2 stuks) - €1.00", "Wortelen (1kg) - €1.15", "Bloemkool - €1.50", "Broccoli - €1.20", "Courgette (1st) - €0.85", "Prinsessenbonen (250g) - €1.00"],
        k: ["Pasta - €0.70", "Zuivelspread/Yoghurt - €1.20", "Kaas - €1.50", "Kokosmelk - €1.15", "Pittenmix - €1.50"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN */
        { 
            id: "j_w3_s1", m: "LUNCH: Courgette-Preisoep", kcal: 90, p: 4, t: 25,
            ing: ["2 Courgettes", "1 Prei", "Bouillon", "Pittenmix"],
            steps: [
                "1. Snij courgette en prei in stukken en stoof aan.",
                "2. Voeg bouillon toe en kook gaar. Mix glad.",
                "3. Omdat er geen room in zit: serveer met een schepje **Griekse yoghurt** en geroosterde **pompoenpitten** voor de 'bite'."
            ],
            kid: "Groene hulk soep."
        },
        { 
            id: "j_w3_s2", m: "LUNCH: Wortel-Paprikasoep", kcal: 95, p: 2, t: 25,
            ing: ["500g Wortelen", "2 Paprika's", "Ui", "Bouillon"],
            steps: [
                "1. Kook wortelen, paprika en ui in bouillon.",
                "2. Mix glad.",
                "3. Werk af met wat **zonnebloempitten**."
            ],
            kid: "Oranje soep."
        },

        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Kip 'Cacciatore' (Veel Groenten)", kcal: 460, p: 35, t: 25,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "1 Courgette", "1 Paprika"], 
            steps: [
                "1. Bak de kipblokjes bruin. Haal eruit.",
                "2. Bak de gesneden courgette, paprika en ui aan. Voeg de tomatenblokjes en Italiaanse kruiden toe.",
                "3. Doe de kip terug en laat sudderen tot alles gaar is.",
                "4. Serveer met rijst en strooi er **pittenmix** over voor gezonde vetten."
            ], 
            kid: "Kip in rode saus met zachte courgette." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Koolvis met Bloemkoolstoemp", kcal: 390, p: 32, t: 30,
            ing: ["DV Koolvisfilet", "1/2 Bloemkool", "500g Wortelen", "Aardappelen (weinig)"], 
            steps: [
                "1. Kook bloemkool, wortel en een paar aardappels gaar. Stamp tot puree.",
                "2. Maak smeuïg met een lepel kookvocht en een beetje olijfolie (geen room/boter). Breng op smaak met nootmuskaat.",
                "3. Bak de vis in olie. Serveer op de stoemp.",
                "4. Top af met **geroosterde zonnebloempitten** voor een verrassende crunch."
            ], 
            kid: "Oranje-witte puree." 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Spaghetti (Deel 1 - Veel Gehakt)", kcal: 650, p: 40, t: 45,
            ing: ["VOORRAAD: 750g Gehakt (1/3e v.d. 2kg)", "Pasta", "Wortel/Prei (fijn)", "Tomatenpuree"], 
            steps: [
                "1. Rul het gehakt bruin. Gebruik lekker veel vlees per persoon voor de eiwitten.",
                "2. Voeg fijngehakte wortel en prei toe.",
                "3. Voeg gezeefde tomaten/puree toe en laat pruttelen.",
                "4. Serveer met volkoren pasta."
            ], 
            kid: "Slierten met veel saus." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Romige Kip Spinazie (Zonder Room)", kcal: 470, p: 36, t: 20,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: DV Spinazie", "VOORRAAD: Rijst", "Zuivelspread Light", "Pittenmix"], 
            steps: [
                "1. Bak de kipblokjes goudbruin.",
                "2. Voeg de spinazie toe en laat slinken.",
                "3. **De truc:** Roer er 2-3 eetlepels **Zuivelspread (Philadelphia light)** door. Dit smelt tot een romige saus zonder zware room. Kruid met peper.",
                "4. Serveer met rijst en **pompoenpitten**."
            ], 
            kid: "Kip in witte saus." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Chipolata met Broccolimix", kcal: 460, p: 28, t: 20,
            ing: ["Kippenchipolata", "Broccoli", "Zoete Aardappel", "Rode ui"], 
            steps: [
                "1. Snij zoete aardappel en broccoli klein. Kook 5 min voor.",
                "2. Bak de worstjes in de pan.",
                "3. Gooi de groenten erbij en bak in het vet van de worstjes mee tot ze een bruin randje krijgen.",
                "4. Strooi er royaal **zonnebloempitten** over."
            ], 
            kid: "Worstjes met boompjes." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Gehakt-Groente Schotel (Restverwerking)", kcal: 500, p: 35, t: 25,
            ing: ["VOORRAAD: 500g Gehakt (Rest)", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "Courgette", "Mais", "Paprika"], 
            steps: [
                "1. Dit vervangt de Chili (geen bonen!). Bak het resterende gehakt rul.",
                "2. Voeg blokjes courgette, paprika en mais toe. Bak goed aan.",
                "3. Doe de tomatenblokjes erbij en kruid met paprikapoeder en oregano.",
                "4. Serveer de dikke saus over de rijst. Werk af met **pompoenpitten**."
            ], 
            kid: "Rijst met gehakt en maisjes." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Nasi Goreng (Extra Groen)", kcal: 490, p: 30, t: 20,
            ing: ["VOORRAAD: 300g Kipblokjes", "VOORRAAD: Rijst", "Prei", "DV Erwten", "2-3 Eieren"], 
            steps: [
                "1. Bak de kipblokjes. Voeg preiringen en een flinke hand **diepvries erwten** toe.",
                "2. Doe de gekookte (koude) rijst erbij en bak op hoog vuur met Ketjap.",
                "3. Maak een kuiltje, kluts de eieren erin en roer tot gestold (scrambled) door de rijst.",
                "4. **Zonnebloempitten** erover voor crunch (lekker bij Aziatisch!)."
            ], 
            kid: "Rijst met groene bolletjes." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Spaghetti (Deel 2)", kcal: 650, p: 40, t: 15,
            ing: ["VOORRAAD: 750g Gehakt (Restant)", "Pasta", "Rauwe groenten on the side"], 
            steps: [
                "1. Maak de tweede portie verse saus met het overgebleven gehakt.",
                "2. Serveer met pasta.",
                "3. Zet een schaaltje rauwe paprika of wortelreepjes op tafel om te knabbelen (extra vitamines)."
            ], 
            kid: "Spaghetti dag!" 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Pasta & Broccoli", kcal: 520, p: 35, t: 20,
            ing: ["Pasta", "Tonijn (blik)", "Broccoli", "Zuivelspread Light", "Mais"], 
            steps: [
                "1. Kook de pasta en kook de laatste 4 min de broccoliroosjes mee.",
                "2. Giet af. Meng met de tonijn, mais en 2 el **Zuivelspread** (ipv room).",
                "3. De warmte van de pasta laat de spread smelten tot saus.",
                "4. Kruid met veel zwarte peper en werk af met **pittenmix**."
            ], 
            kid: "Vispasta met witte saus." 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Eiercurry met Prinsessenbonen", kcal: 440, p: 22, t: 25,
            ing: ["6 Eieren (gekookt)", "Prinsessenbonen (DV/Vers)", "VOORRAAD: DV Spinazie", "Kokosmelk", "VOORRAAD: Rijst"], 
            steps: [
                "1. Kook de eieren hard en pel ze.",
                "2. Maak een currysaus: bak kerriepoeder in olie, voeg kokosmelk toe.",
                "3. Doe de prinsessenbonen en spinazie in de saus en laat garen.",
                "4. Leg de eieren erin om op te warmen. Serveer met rijst en **pompoenpitten**.",
                "*(Alternatief voor bonen/kikkererwten, toch veel groen en eiwit)*"
            ], 
            kid: "Gele saus met eitjes en boontjes." 
        }
    ]
};
