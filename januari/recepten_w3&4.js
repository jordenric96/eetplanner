/* DATA VOOR JANUARI WEEK 3 & 4 - UPDATE MET VOORRAAD */

var shoppingData = {
    ricour: {
        // Kip, Gehakt, Rijst, Spinazie & Tomatenblokjes komen uit voorraad en staan hier NIET bij.
        v: ["Chipolata worst (500g) - €6.50", "Tonijn in eigen nat (3 blikjes) - €4.50", "DV Koolvisfilet (800g) - €5.99", "Eieren (12 stuks) - €3.89"],
        g: ["Paprika mix (3st) - €1.99", "Prei (bussel) - €1.49", "Wortelen (2kg zak) - €1.99", "Aardappelen (2.5kg) - €3.99", "Rode Kool met appel (pot) - €1.45", "Ui (net) - €1.25", "Mais (3 pack) - €2.25", "Rode bonen (Kidney) - €0.99"],
        k: ["Pasta (500g) - €0.95", "Tomatenpuree (klein) - €0.65", "Room (250ml) - €1.15", "Geraspte kaas (200g) - €2.19", "Ketjap Manis of Sojasaus - €1.89"]
    },
    hemmeryckx: {
        v: ["Chipolata worst (350g) - €4.50", "Tonijn (2 blikjes) - €3.00", "DV Koolvis (400g) - €3.50", "Eieren (6 stuks) - €1.95"],
        g: ["Paprika (2st) - €1.35", "Prei (2 stuks) - €1.00", "Wortelen (1kg) - €1.15", "Aardappelen - €2.00", "Rode Kool (pot) - €1.45"],
        k: ["Pasta - €0.70", "Room (klein) - €0.85", "Kaas - €1.50"]
    }
};

var recipeData = {
    recipes: [
        /* SOEPEN - LUNCH (Niet datumgebonden) */
        { 
            id: "j_w3_s1", m: "LUNCH - SOEP: Tomaat-Paprika (Pizzasoep)", kcal: 110, p: 3, t: 25,
            ing: ["1kg Tomaten (of 2 blikken tomatenblokjes)", "2 Paprika's", "1 Ui", "Basilicum", "Bouillon"],
            steps: [
                "1. Fruit de ui en stukken paprika aan in olijfolie.",
                "2. Voeg de tomaten toe (vers of uit voorraad) en 1 liter groentebouillon.",
                "3. Laat 15 min koken en mix glad.",
                "4. Kruid stevig af met **gedroogde oregano en basilicum** voor het pizza-effect."
            ],
            kid: "Smaakt naar vloeibare pizza."
        },
        { 
            id: "j_w3_s2", m: "LUNCH - SOEP: Oranje Wortel", kcal: 95, p: 2, t: 25,
            ing: ["500g Wortelen", "1 Aardappel", "Gemberpoeder", "Bouillon"],
            steps: [
                "1. Snij de wortelen en aardappel in blokjes.",
                "2. Kook gaar in kippenbouillon.",
                "3. Mix glad en voeg een snufje **gemberpoeder** toe voor wat warmte (niet pikant)."
            ],
            kid: "Mooie feloranje kleur."
        },

        /* WEEK 3 */
        { 
            id: "j_w3_1", m: "Ma 19/01: Spaghetti Bolognese (Vers)", kcal: 650, p: 35, t: 45,
            ing: ["VOORRAAD: Gehakt (uit de 2kg)", "Pasta", "Spaghettigroenten/Saus"], 
            steps: [
                "1. Gebruik het gehakt uit de voorraad om een grote pot verse saus te maken.",
                "2. Tip voor smaak: Bak het gehakt écht bruin voordat de saus erbij gaat. Voeg een scheutje melk toe aan de saus voor malsheid.",
                "3. Serveer met pasta."
            ], 
            kid: "Klassieker, altijd goed." 
        },
        { 
            id: "j_w3_2", m: "Di 20/01: Spaghetti (Restjesdag)", kcal: 650, p: 35, t: 10,
            ing: ["Restje saus van gisteren", "Pasta"], 
            steps: [
                "1. Warm de saus op. Pasta sauzen zijn de tweede dag vaak nog lekkerder omdat de kruiden zijn ingetrokken.",
                "2. Kook verse pasta erbij."
            ], 
            kid: "Joepie, nog eens spaghetti!" 
        },
        { 
            id: "j_w3_3", m: "Wo 21/01: Romige Kip Spinazie & Rijst", kcal: 480, p: 32, t: 20,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: Rijst", "VOORRAAD: DV Spinazie", "Room", "Nootmuskaat"], 
            steps: [
                "1. Kook de rijst volgens de verpakking.",
                "2. Bak de kipblokjes goudbruin in boter met peper en zout.",
                "3. Voeg de diepvries spinazie toe en laat ontdooien in de pan.",
                "4. Giet de room erbij en laat inkoken. Kruid af met **nootmuskaat** en zwarte peper."
            ], 
            kid: "Groene saus die heel romig smaakt." 
        },
        { 
            id: "j_w3_4", m: "Do 22/01: Kip 'Cacciatore' (Jagerskip)", kcal: 420, p: 30, t: 25,
            ing: ["VOORRAAD: 350g Kipblokjes", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "1 Paprika", "Oregano"], 
            steps: [
                "1. Bak de kipblokjes aan. Haal even uit de pan.",
                "2. Bak in dezelfde pan een gesnipperde ui en de paprikablokjes.",
                "3. Voeg de tomatenblokjes uit voorraad toe en 1 el **gedroogde oregano**. Doe de kip terug en laat 10 min sudderen.",
                "4. Serveer met de rijst."
            ], 
            kid: "Kip in rode saus, lekker zacht." 
        },
        { 
            id: "j_w3_5", m: "Vr 23/01: Koolvis met Wortelstoemp", kcal: 390, p: 25, t: 30,
            ing: ["DV Koolvisfilet (Witvis)", "800g Aardappelen", "800g Wortelen", "Melk/Boter"], 
            steps: [
                "1. Kook de aardappelen en wortelen samen gaar in gezouten water. Giet af en stamp tot puree met een klontje boter en scheutje melk.",
                "2. Dep de ontdooide vis droog. Haal eventueel door wat bloem.",
                "3. Bak de vis in ruim boter goudbruin. Kruid met peper en **citroensap** (indien in huis).",
                "4. Serveer de vis bovenop de oranje puree."
            ], 
            kid: "Vis zonder graten en zoete puree." 
        },

        /* WEEK 4 */
        { 
            id: "j_w4_1", m: "Ma 26/01: Nasi Goreng (Kip & Prei)", kcal: 510, p: 28, t: 20,
            ing: ["VOORRAAD: 300g Kipblokjes", "VOORRAAD: Rijst", "2 stuks Prei", "2 Eieren", "Ketjap/Sojasaus"], 
            steps: [
                "1. Kook de rijst en laat even afkoelen (liefst koud).",
                "2. Bak de kipblokjes gaar met wat kerriepoeder. Voeg de ringen prei toe en bak tot ze zacht zijn.",
                "3. Voeg de rijst toe en bak op hoog vuur mee. Breng op smaak met **Ketjap of Sojasaus**.",
                "4. Bak in een andere pan 2 eieren (scrambled of spiegelei) en serveer erbij."
            ], 
            kid: "Gebakken rijstjes, net als bij de Chinees." 
        },
        { 
            id: "j_w4_2", m: "Di 27/01: Mexicaanse Chili Schotel", kcal: 495, p: 22, t: 25,
            ing: ["Rode Bonen (blik)", "Mais (blik)", "VOORRAAD: Tomatenblokjes", "VOORRAAD: Rijst", "Komijnpoeder"], 
            steps: [
                "1. Fruit een ui en knoflook. Voeg 1 tl **komijnpoeder** en 1 tl paprikapoeder toe (geur moet vrijkomen).",
                "2. Voeg de tomatenblokjes, uitgelekte bonen en mais toe. Laat pruttelen.",
                "3. Serveer met rijst. Heb je nog een restje zure room of yoghurt? Lekker erbij!",
                "4. *Optie: Als er nog gehakt over was van de 2kg, kan dat hierbij. Zo niet, is dit een volwaardige vegi maaltijd.*"
            ], 
            kid: "Cowboy-eten met maisjes." 
        },
        { 
            id: "j_w4_3", m: "Wo 28/01: Chipolata met Rode Kool", kcal: 540, p: 25, t: 20,
            ing: ["Chipolata worsten", "Pot Rode kool met appel", "Aardappelen"], 
            steps: [
                "1. Kook de aardappelen gaar.",
                "2. Bak de chipolata worstjes rustig bruin in boter. Zorg dat ze niet barsten (niet in prikken!).",
                "3. Warm de rode kool op. De appel in de pot maakt het lekker zoet.",
                "4. Serveer klassiek met gekookte aardappels en de braadjus van de worst."
            ], 
            kid: "Paarse groentjes zijn zoet!" 
        },
        { 
            id: "j_w4_4", m: "Do 29/01: Tuna Melt Pasta", kcal: 520, p: 30, t: 15,
            ing: ["Pasta", "2-3 blikken Tonijn", "Mais (restje van di)", "Room", "Geraspte kaas"], 
            steps: [
                "1. Kook de pasta al dente.",
                "2. Maak een snelle saus: verwarm de room met een beetje bouillonblokje en wat tomatenpuree.",
                "3. Roer de uitgelekte tonijn en mais erdoor. Warm goed door.",
                "4. Meng met de pasta en roer er op het laatst een handje **geraspte kaas** door zodat het draden trekt."
            ], 
            kid: "Vis die niet naar vis smaakt, met kaas!" 
        },
        { 
            id: "j_w4_5", m: "Vr 30/01: Boerenomelet met Brood", kcal: 410, p: 20, t: 15,
            ing: ["6-8 Eieren", "1 Paprika", "1 Ui", "Restjes groenten", "Brood"], 
            steps: [
                "1. Snij paprika, ui en eventuele restjes (prei/spinazie/mais) fijn en bak ze aan in de pan.",
                "2. Kluts de eieren met peper, zout en een scheutje melk.",
                "3. Giet over de groenten en laat stollen met een deksel op de pan (laag vuur).",
                "4. Snij in punten en serveer op of naast een boterham."
            ], 
            kid: "Eierpannenkoek met groentjes erin verstopt." 
        }
    ]
};
