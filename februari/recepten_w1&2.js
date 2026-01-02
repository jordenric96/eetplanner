/* DATA VOOR FEBRUARI WEEK 1 & 2 */

var shoppingData = {
    ricour: {
        v: ["Kipfilet (1200g) - €15.60", "Rundergehakt (500g) - €6.10", "Zalmfilet (300g) - €9.50", "Spekreepjes (250g) - €3.20"],
        g: ["Bloemkool (1st) - €2.10", "Prei (2st) - €1.20", "Witte Kool (300g) - €0.80", "Aardappelen (1500g) - €1.85", "Kerstomaten (250g) - €1.45"],
        k: ["Rijst (250g) - €0.60", "Pasta (375g) - €0.75", "Bulgur (500g) - €1.50", "Kokosmelk (400ml) - €1.35"]
    },
    hemmeryckx: {
        v: ["Kalkoenlapjes (1000g) - €14.50", "Rundergehakt (1000g) - €12.20", "Zalmfilet (600g) - €14.50", "Spekreepjes (250g) - €3.20"],
        g: ["Bloemkool (1st) - €2.10", "Prei (3st) - €1.80", "Witte Kool (500g) - €1.20", "Aardappelen (2000g) - €2.50", "Avocado (2st) - €2.80"],
        k: ["Noedels (500g) - €2.10", "Bulgur (500g) - €1.50", "Rijst (400g) - €0.80", "Kokosmelk (400ml) - €1.35"]
    }
};

var recipeData = {
    recipes: [
        { m: "Vakantie", ricourVakantie: "🛝 Speeltuin", kcal: 0, p: 0, t: 0, ing: [], steps: [], kid: "" },
        { m: "Vakantie", ricourVakantie: "👨‍🌾 Boerderij", kcal: 0, p: 0, t: 0, ing: [], steps: [], kid: "" },
        { m: "Vakantie", ricourVakantie: "🏊 Zwembad", kcal: 0, p: 0, t: 0, ing: [], steps: [], kid: "" },
        { m: "Vakantie", ricourVakantie: "🛝 Speeltuin", kcal: 0, p: 0, t: 0, ing: [], steps: [], kid: "" },
        { m: "Vakantie", ricourVakantie: "👨‍🌾 Boerderij", kcal: 0, p: 0, t: 0, ing: [], steps: [], kid: "" },
        { 
            m: "Kip-Bloemkool Curry", kcal: 540, p: 35, t: 20, 
            ing: ["600g Kipfilet", "500g Bloemkool", "250g Rijst", "400ml Kokosmelk"], 
            steps: [
                "1. Kook de rijst volgens de aanwijzingen op de verpakking in gezouten water.",
                "2. Snij de kipfilet in hapklare blokjes en bak ze goudbruin in een pan met olie.",
                "3. Verdeel de bloemkool in zeer kleine roosjes en kook deze 5 minuten voor.",
                "4. Voeg de bloemkool toe aan de pan met kip en giet de kokosmelk erbij.",
                "5. Laat het geheel 5 tot 8 minuten zachtjes pruttelen tot de saus indikt."
            ], 
            kid: "Vertel dat de bloemkoolroosjes kleine witte wolkjes zijn." 
        },
        { 
            m: "Pasta met Verse Kerstomaten", kcal: 610, p: 32, t: 20, 
            ing: ["500g Gehakt", "375g Pasta", "400g Kerstomaten", "100g Ui"], 
            steps: [
                "1. Kook de pasta beetgaar. Snipper ondertussen de ui fijn.",
                "2. Bak het gehakt rul in een koekenpan en voeg de ui toe.",
                "3. Halveer de kerstomaten en voeg ze toe aan het vlees.",
                "4. Bak op hoog vuur tot de tomaatjes zacht worden en hun sap loslaten.",
                "5. Meng de pasta door de verse saus en kruid met peper en zout."
            ], 
            kid: "De kleine tomaatjes zijn 'vitamine-bommetjes'." 
        },
        { 
            m: "Zalmfilet met Bulgur", kcal: 540, p: 30, t: 20, 
            ing: ["300g Zalm", "250g Bulgur", "1 Komkommer"], 
            steps: [
                "1. Bereid de bulgur volgens de verpakking (vaak 10 min. wellen in bouillon).",
                "2. Bak de zalmfilets op de huid in een pan met boter tot ze gaar zijn.",
                "3. Snij de komkommer in kleine blokjes en meng deze door de warme bulgur.",
                "4. Voeg een scheutje olijfolie toe aan de bulgur voor extra smeuïgheid.",
                "5. Serveer de vis bovenop het bulgur-mengsel."
            ], 
            kid: "Zalm is de favoriete vis van beren!" 
        },
        { 
            m: "Spekjes met Witte Kool", kcal: 710, p: 22, t: 25, 
            ing: ["250g Spekjes", "300g Witte Kool", "500g Aardappel"], 
            steps: [
                "1. Schil de aardappelen en kook ze gaar om er puree van te maken.",
                "2. Bak de spekjes krokant in een pan zonder extra vetstof.",
                "3. Voeg de fijngesneden witte kool toe aan de spekjes en stoof beetgaar.",
                "4. Stamp de aardappelen fijn en meng de kool en spekjes erdoorheen.",
                "5. Breng op smaak met flink wat peper en een snufje zout."
            ], 
            kid: "De zoute spekjes maken de groenten extra lekker." 
        },
        { 
            m: "Romige Kip met Prei", kcal: 620, p: 38, t: 25, 
            ing: ["600g Kipfilet", "2 Preien", "400ml Kokosmelk"], 
            steps: [
                "1. Was de prei grondig en snij deze in fijne ringen.",
                "2. Snij de kip in reepjes en bak deze goudbruin in de pan.",
                "3. Voeg de prei toe en bak mee tot deze volledig geslonken is.",
                "4. Giet de kokosmelk erbij en laat 5 tot 10 minuten zachtjes inkoken.",
                "5. Serveer met een restje rijst of een stukje brood."
            ], 
            kid: "De saus is heerlijk om met een lepeltje op te eten." 
        }
    ]
};