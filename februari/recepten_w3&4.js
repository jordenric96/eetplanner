/* DATA VOOR FEBRUARI WEEK 3 & 4 */

var shoppingData = {
    ricour: {
        v: ["Kipfilet (1400g) - €18.20", "Kabeljauw (1200g) - €26.40", "Varkensmignonettes (800g) - €9.20"],
        g: ["Paksoi (3st) - €5.85", "Asperge-broccoli (600g) - €6.75", "Komkommer (3st) - €2.85", "Aardappelen (1000g) - €1.25", "Avocado (1st) - €1.40"],
        k: ["Udon Noedels (1200g) - €7.80", "Pindakaas (350g) - €2.85", "Naanbrood (4st) - €3.90", "Rijst (600g) - €1.10"]
    },
    hemmeryckx: {
        v: ["Kipfilet (950g) - €12.35", "Kabeljauw (800g) - €17.60", "Varkensmignonettes (530g) - €6.20"],
        g: ["Paksoi (2st) - €3.90", "Asperge-broccoli (400g) - €4.50", "Komkommer (2st) - €1.90", "Aardappelen (670g) - €0.85"],
        k: ["Udon Noedels (800g) - €5.20", "Pindakaas (250g) - €2.10", "Naanbrood (2st) - €1.95", "Rijst (400g) - €0.80"]
    }
};

var recipeData = {
    recipes: [
        { 
            m: "Pinda-Kip met Paksoi", kcal: 610, p: 40, t: 20, 
            ing: ["400g Kipfilet", "1 Paksoi", "200g Rijst", "Pindakaas"], 
            steps: [
                "1. Kook de rijst gaar. Snij de kipfilet in blokjes.",
                "2. Was de paksoi en snij de witte stelen en het groene blad apart.",
                "3. Bak de kip goudbruin en voeg de witte stelen van de paksoi toe.",
                "4. Maak een sausje van pindakaas, warm water en een drupje sojasaus.",
                "5. Voeg het bladgroen en de saus toe aan de pan en roer kort door."
            ], 
            kid: "De saus smaakt naar pindakaas, dat vinden de meeste kinderen heerlijk." 
        },
        { 
            m: "Vis Naan-Pizza", kcal: 580, p: 32, t: 15, 
            ing: ["400g Kabeljauw", "2 Naans", "250g Kerstomaten"], 
            steps: [
                "1. Verwarm de oven voor op 200 graden.",
                "2. Leg de naans op een bakplaat en beleg ze met dunne plakjes rauwe vis.",
                "3. Halveer de kerstomaatjes en verdeel ze over de naans.",
                "4. Bak de naan-pizza's ongeveer 10 tot 12 minuten in de oven.",
                "5. Werk af met een beetje peper en een drupje olijfolie."
            ], 
            kid: "Laat de kinderen hun eigen pizza 'versieren' voor hij de oven in gaat." 
        },
        { 
            m: "Kip met Asperge-Broccoli", kcal: 540, p: 35, t: 25, 
            ing: ["400g Kipfilet", "200g Broccoli", "500g Aardappel"], 
            steps: [
                "1. Schil de aardappelen en snij ze in kleine blokjes.",
                "2. Snij de kip in reepjes en de broccoli in kleine roosjes.",
                "3. Leg alles samen op een bakplaat met olie, peper en zout.",
                "4. Rooster 20 tot 25 minuten in de oven op 200 graden.",
                "5. Schep halverwege een keer om voor een gelijkmatige garing."
            ], 
            kid: "Noem de lange broccolistelen 'eetbare bomen'." 
        },
        { 
            m: "Milde Vis-Curry", kcal: 620, p: 29, t: 20, 
            ing: ["400g Kabeljauw", "400g Noedels", "1 Paksoi"], 
            steps: [
                "1. Kook de noedels volgens de aanwijzingen op de verpakking.",
                "2. Verwarm een milde currysaus (of kokosmelk) in een diepe pan.",
                "3. Leg de kabeljauw in de saus en laat deze met een deksel erop garen.",
                "4. Voeg de laatste 3 minuten de gesneden paksoi toe aan de curry.",
                "5. Serveer de vis en saus over de warme noedels."
            ], 
            kid: "Lekker lange noedels slurpen is altijd een feest." 
        },
        { 
            m: "Kip-Pinda Noedels", kcal: 590, p: 38, t: 20, 
            ing: ["400g Kipfilet", "400g Noedels", "1 Komkommer"], 
            steps: [
                "1. Bak de kipreepjes goudbruin en gaar in de pan.",
                "2. Bereid de noedels en meng ze door de kip.",
                "3. Voeg een flinke lepel pindakaas en een beetje kookvocht toe.",
                "4. Roer goed door tot er een gladde saus ontstaat.",
                "5. Meng op het allerlaatst blokjes koude komkommer door het gerecht."
            ], 
            kid: "De koude komkommerblokjes geven een lekkere 'crunch'." 
        },
        { 
            m: "Vis met Koriander Rijst", kcal: 530, p: 28, t: 20, 
            ing: ["400g Kabeljauw", "200g Rijst", "Koriander"], 
            steps: [
                "1. Kook de rijst met een snufje kurkuma voor een mooie gele kleur.",
                "2. Bak de visfilets kort in een pan met wat boter en zout.",
                "3. Hak de koriander fijn en meng deze door de gekookte rijst.",
                "4. Serveer de vis op een bedje van de aromatische rijst.",
                "5. Voeg een schijfje citroen toe voor de frisheid."
            ], 
            kid: "Witte vis heeft een heel zachte smaak die kinderen vaak fijn vinden." 
        },
        { 
            m: "Varkensmignonette", kcal: 510, p: 34, t: 15, 
            ing: ["400g Varkensvlees", "1 Komkommer", "500g Aardappel"], 
            steps: [
                "1. Kook de aardappelen gaar. Bak het varkensvlees in de pan.",
                "2. Gebruik een dunschiller om linten te maken van de komkommer.",
                "3. Breng de komkommer op smaak met een beetje azijn en suiker (kast).",
                "4. Serveer het vlees met de aardappelen en de frisse salade.",
                "5. Gebruik het braadvocht als eenvoudige jus."
            ], 
            kid: "Snij het vlees in kleine blokjes en rijg ze aan een spiesje." 
        },
        { 
            m: "Udon-soep met Kip", kcal: 480, p: 32, t: 20, 
            ing: ["200g Kipfilet", "400g Noedels", "Bouillon"], 
            steps: [
                "1. Breng een pot bouillon aan de kook.",
                "2. Voeg de udon noedels en dunne reepjes kipfilet toe.",
                "3. Laat ongeveer 5 tot 8 minuten zachtjes koken.",
                "4. Voeg eventueel wat overgebleven groen van de paksoi toe.",
                "5. Serveer als een verwarmende maaltijdsoep."
            ], 
            kid: "Met stokjes proberen te eten is een leuk avontuur." 
        },
        { 
            m: "Naan met Kip & Avocado", kcal: 640, p: 31, t: 15, 
            ing: ["200g Kipfilet", "2 Naans", "1 Avocado"], 
            steps: [
                "1. Bak de kipblokjes met wat paprikapoeder.",
                "2. Prak de avocado fijn met een vork en voeg wat citroensap toe.",
                "3. Verwarm de naans kort in de broodrooster of oven.",
                "4. Besmeer de naans met de avocado-puree.",
                "5. Beleg met de kip en serveer als een luxe sandwich."
            ], 
            kid: "Gezonde 'groene boter' (avocado) op een warm broodje." 
        },
        { 
            m: "Vis-Wok met Noedels", kcal: 550, p: 30, t: 15, 
            ing: ["400g Kabeljauw", "400g Noedels", "1 Paksoi"], 
            steps: [
                "1. Kook de noedels. Snij de vis in stevige blokjes.",
                "2. Wok de paksoi op hoog vuur gedurende 2 minuten.",
                "3. Voeg de visblokjes toe en bak heel voorzichtig mee.",
                "4. Meng de noedels door de pan.",
                "5. Werk af met wat olijfolie en zout naar smaak."
            ], 
            kid: "Blokjes vis 'vissen' uit de noedels is een leuk spelletje." 
        }
    ]
};