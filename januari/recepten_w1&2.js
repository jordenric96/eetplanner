/* DATA VOOR JANUARI WEEK 1 & 2 */

var shoppingData = {
    ricour: {
        v: ["Kipgehakt (1000g) - €10.40", "Chipolata (1000g) - €9.50", "Tonijn (3 blikken) - €4.50", "Eieren (6st) - €1.80"],
        g: ["Aardappelen (1500g) - €1.85", "Wortelen (1000g) - €1.00", "Uien (500g) - €0.75", "Courgettes (4st) - €3.40", "Spinazie (500g) - €1.29", "Erwten (400g) - €1.89"],
        k: ["Pasta (1125g) - €2.25", "Rijst (1000g) - €1.75", "Tomatenblokjes (1600g) - €2.60", "Linzen (1000g) - €2.70", "Wraps (8st) - €1.59", "Kokosmelk (800ml) - €2.70", "Room (250ml) - €0.85", "Pesto (190g) - €1.85"]
    },
    hemmeryckx: {
        v: ["Kipgehakt (670g) - €7.00", "Chipolata (670g) - €6.40", "Tonijn (2 blikken) - €3.00", "Eieren (4st) - €1.20"],
        g: ["Aardappelen (1000g) - €1.25", "Wortelen (670g) - €0.70", "Uien (330g) - €0.50", "Courgettes (3st) - €2.55", "Spinazie (330g) - €0.85", "Erwten (270g) - €1.00"],
        k: ["Pasta (750g) - €1.50", "Rijst (670g) - €1.20", "Tomatenblokjes (1000g) - €1.60", "Linzen (670g) - €1.80", "Wraps (6st) - €1.35", "Kokosmelk (530ml) - €1.80", "Room (165ml) - €0.60", "Pesto (190g) - €1.85"]
    }
};

var recipeData = {
    recipes: [
        { 
            m: "Klassieke Pasta Bolognese", kcal: 650, p: 32, t: 25, 
            ing: ["500g Kipgehakt", "375g Pasta", "800g Tomatenblokjes", "100g Ui"], 
            steps: [
                "1. Pel de uien en versnipper ze zeer fijn. Verhit een ruime scheut olijfolie in een diepe pan op middelhoog vuur.",
                "2. Fruit de uien tot ze glazig en zacht zijn. Voeg het kipgehakt toe en bak dit rul en goudbruin.",
                "3. Kruid het vlees met peper, zout en lookpoeder. Giet de tomatenblokjes erbij en roer goed door.",
                "4. Zet het vuur laag, plaats een deksel op de pan en laat de saus minstens 15 tot 20 minuten zachtjes pruttelen.",
                "5. Kook de pasta beetgaar in gezouten water. Meng de saus met de pasta en serveer direct."
            ], 
            kid: "Mix de saus met een staafmixer voor een gladde textuur zonder stukjes ui." 
        },
        { 
            m: "Kleurrijke Kip & Wortel Wok", kcal: 580, p: 30, t: 20, 
            ing: ["500g Kipgehakt", "250g Rijst", "1 Courgette", "150g Wortel"], 
            steps: [
                "1. Kook de rijst gaar volgens de verpakking en laat even rusten met het deksel op de pot.",
                "2. Was de wortel en courgette. Snij de wortel in dunne schijfjes en de courgette in kleine blokjes.",
                "3. Verhit olie in een wok of grote pan. Bak het kipgehakt goudbruin en rul op hoog vuur.",
                "4. Voeg de wortelschijfjes toe en bak 3 minuten mee. Voeg daarna de courgette toe.",
                "5. Breng op smaak met een scheutje sojasaus en roer de rijst erdoorheen."
            ], 
            kid: "Serveer de rijst, de kip en de groenten in aparte hoopjes op het bord." 
        },
        { 
            m: "Milde Linzenstoofschotel", kcal: 510, p: 26, t: 25, 
            ing: ["250g Linzen", "400ml Kokosmelk", "400g Tomatenblokjes", "100g Ui"], 
            steps: [
                "1. Snipper een ui fijn en fruit deze in een kookpot met wat olie tot de ui goudgeel kleurt.",
                "2. Spoel de linzen grondig af en voeg ze toe aan de pan.",
                "3. Giet de kokosmelk en de tomatenblokjes erbij. Roer alles goed door elkaar.",
                "4. Breng zachtjes aan de kook en laat 20 minuten pruttelen op een laag vuur.",
                "5. Breng op smaak met zout, peper en een beetje bouillonpoeder."
            ], 
            kid: "Voeg een extra lepel milde Griekse yoghurt toe aan het bord om het romiger te maken." 
        },
        { 
            m: "Mexicaanse Wraps", kcal: 640, p: 29, t: 15, 
            ing: ["8 Wraps", "1 Courgette", "150g Maïs"], 
            steps: [
                "1. Snij de courgette in kleine blokjes en bak deze kort in een pan met wat olie.",
                "2. Verwarm de maïs en meng deze met de overgebleven linzenstoof van gisteren.",
                "3. Verwarm de wraps 30 seconden in de magnetron of in een droge pan.",
                "4. Smeer een beetje room op de wraps en beleg ze met het warme groentemengsel.",
                "5. Rol de wraps strak op en serveer ze direct."
            ], 
            kid: "Laat de kinderen hun eigen wrap 'bouwen' aan tafel." 
        },
        { 
            m: "Tonijn-Spinazie Pasta", kcal: 690, p: 35, t: 15, 
            ing: ["320g Tonijn", "375g Pasta", "500g Spinazie"], 
            steps: [
                "1. Kook de pasta beetgaar in gezouten water.",
                "2. Was de spinazie en laat deze in een grote pan slinken met een klein beetje water.",
                "3. Voeg de uitgelekte tonijn toe aan de spinazie en warm goed door.",
                "4. Meng de pasta door de tonijn en spinazie.",
                "5. Werk af met een flinke scheut olijfolie en wat peper."
            ], 
            kid: "Gebruik extra veel geraspte kaas als topping voor extra smaak." 
        },
        { 
            m: "Worst & Wortelstoemp", kcal: 720, p: 26, t: 30, 
            ing: ["500g Chipolata", "750g Aardappel", "500g Wortel"], 
            steps: [
                "1. Schil de aardappelen en wortelen en snij ze in gelijke stukken.",
                "2. Kook ze samen in 20 minuten gaar in water met een bouillonblokje.",
                "3. Bak ondertussen de chipolata's goudbruin in wat boter of olie.",
                "4. Giet de groenten af en stamp ze fijn met een scheutje melk of boter.",
                "5. Serveer de worst bovenop de verse stoemp."
            ], 
            kid: "Maak een 'vulkaantje' van de puree met een kuiltje voor de vleesjus." 
        },
        { 
            m: "Snelle Jambalaya", kcal: 640, p: 25, t: 25, 
            ing: ["250g Chipolata", "250g Rijst", "400g Tomaat"], 
            steps: [
                "1. Snij de worstjes in schijfjes (muntjes) en bak ze krokant in de pan.",
                "2. Voeg blokjes courgette en de tomatenblokjes toe aan de worstjes.",
                "3. Kook de rijst en roer deze door het mengsel in de pan.",
                "4. Breng het geheel stevig op smaak met paprikapoeder en peper.",
                "5. Laat nog 5 minuten zachtjes doorwarmen voor het serveren."
            ], 
            kid: "De kleine worstmuntjes zijn altijd een groot succes bij kinderen." 
        },
        { 
            m: "Linzencurry met Rijst", kcal: 550, p: 22, t: 20, 
            ing: ["250g Linzen", "400ml Kokosmelk", "250g Rijst"], 
            steps: [
                "1. Kook de rijst volgens de aanwijzingen op de verpakking.",
                "2. Warm de linzen op in een pan samen met de kokosmelk.",
                "3. Voeg een snufje kurkuma of milde curry toe voor de kleur.",
                "4. Serveer de warme curry in een diep bord over de rijst.",
                "5. Werk eventueel af met wat verse koriander of peterselie."
            ], 
            kid: "Serveer met een stukje naanbrood of een wrap om te dippen." 
        },
        { 
            m: "Pasta Pesto Courgette", kcal: 630, p: 18, t: 15, 
            ing: ["375g Pasta", "190g Pesto", "1 Courgette"], 
            steps: [
                "1. Kook de pasta beetgaar.",
                "2. Gebruik een dunschiller om lange linten te maken van de courgette.",
                "3. Bak de courgettelinten heel kort (2 min) in een hete pan met olijfolie.",
                "4. Meng de warme pasta met de pesto in een grote kom.",
                "5. Roer de courgettelinten voorzichtig door de pasta."
            ], 
            kid: "Noem de courgettelinten 'groene reuzenslierten'." 
        },
        { 
            m: "Nasi met Gebakken Ei", kcal: 540, p: 24, t: 20, 
            ing: ["250g Rijst", "3 Eieren", "200g Erwten"], 
            steps: [
                "1. Gebruik bij voorkeur koude, gekookte rijst voor de beste textuur.",
                "2. Wok de rijst op hoog vuur met wat olie en de doperwtjes.",
                "3. Bak de eieren apart als roerei of spiegelei.",
                "4. Meng het ei door de rijst of leg het erbovenop.",
                "5. Voeg een klein beetje sojasaus toe voor de hartige smaak."
            ], 
            kid: "Snij het gebakken ei in leuke reepjes of figuurtjes." 
        }
    ]
};
