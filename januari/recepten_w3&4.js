/* DATA VOOR JANUARI WEEK 3 & 4 */

var shoppingData = {
    ricour: {
        v: ["Kipgehakt (1100g) - €11.20", "Chipolata (300g) - €3.50", "Kipfilet (1200g) - €15.60", "Tonijn (2 blikken) - €3.00", "Eieren (5st) - €1.50"],
        g: ["Aardappelen (1000g) - €1.25", "Broccoli (500g) - €1.50", "Courgettes (3st) - €2.55", "Paprika Mix (3st) - €2.25", "Wortelen (1000g) - €1.00"],
        k: ["Passata (500ml) - €0.95", "Quinoa (500g) - €3.40", "Rijst (600g) - €1.10", "Pasta (1125g) - €2.20", "Kokosmelk (400ml) - €1.35", "Room (250ml) - €0.85"]
    },
    hemmeryckx: {
        v: ["Kipgehakt (740g) - €7.50", "Chipolata (200g) - €2.35", "Kipfilet (800g) - €10.45", "Tonijn (1.5 blik) - €2.25", "Eieren (4st) - €1.20"],
        g: ["Aardappelen (670g) - €0.85", "Broccoli (330g) - €1.00", "Courgettes (2st) - €1.70", "Paprika (2st) - €1.50", "Sla mix (70g) - €1.00"],
        k: ["Passata (330ml) - €0.65", "Quinoa (330g) - €2.30", "Rijst (400g) - €0.75", "Pasta (750g) - €1.50", "Room (170ml) - €0.60", "Kokosmelk (270ml) - €0.90"]
    }
};

var recipeData = {
    recipes: [
        { 
            m: "Wortel-Stoemp met Chipolata", kcal: 620, p: 28, t: 25, 
            ing: ["300g Chipolata", "500g Aardappel", "400g Wortel"], 
            steps: [
                "1. Schil de aardappelen en de wortelen. Snij ze in even grote blokjes.",
                "2. Kook ze samen in één pot met water en zout in ongeveer 20 minuten gaar.",
                "3. Bak ondertussen de chipolata's in een koekenpan met een beetje boter.",
                "4. Giet de groenten af en stamp ze fijn met een pureestamper.",
                "5. Voeg een klontje boter en peper toe voor een romige stoemp."
            ], 
            kid: "Oranje puree ziet er vrolijk uit en smaakt een beetje zoet." 
        },
        { 
            m: "Bolognese met Extra Wortel", kcal: 580, p: 32, t: 20, 
            ing: ["500g Kipgehakt", "375g Pasta", "200g Wortel", "Passata"], 
            steps: [
                "1. Rasp de wortelen zeer fijn met een handrasp of keukenmachine.",
                "2. Bak het kipgehakt rul in een pan en voeg de geraspte wortel toe.",
                "3. Giet de passata erbij en laat de saus 10 minuten pruttelen.",
                "4. Kook de pasta volgens de instructies op het pak.",
                "5. Meng de saus door de pasta zodat de wortel 'verdwijnt' in het geheel."
            ], 
            kid: "Dit is de perfecte manier om onzichtbaar extra groenten te eten." 
        },
        { 
            m: "Kip & Wortel Wok met Rijst", kcal: 540, p: 35, t: 20, 
            ing: ["600g Kipfilet", "250g Rijst", "200g Wortel"], 
            steps: [
                "1. Snij de kipfilet in kleine blokjes en de wortelen in fijne reepjes.",
                "2. Kook de rijst gaar in water met een snufje zout.",
                "3. Bak de kipblokjes goudbruin in een hete wok met olie.",
                "4. Voeg de wortel toe en roerbak 5 minuten op hoog vuur.",
                "5. Meng de rijst erdoor en breng op smaak met wat sojasaus."
            ], 
            kid: "Kleine stukjes vlees en groente eten makkelijker weg voor kinderen." 
        },
        { 
            m: "Milde Wortel Curry", kcal: 510, p: 22, t: 25, 
            ing: ["250g Linzen", "200g Wortel", "250g Rijst"], 
            steps: [
                "1. Snij de wortelen in kleine blokjes en kook ze 5 minuten voor.",
                "2. Meng de linzen met een milde currypasta en wat kokosmelk.",
                "3. Voeg de voorgekookte wortelblokjes toe aan de saus.",
                "4. Laat het geheel zachtjes indikken op een laag vuur.",
                "5. Serveer de warme curry met witte rijst."
            ], 
            kid: "De kokosmelk maakt de curry lekker zacht en niet pikant." 
        },
        { 
            m: "Gevulde Courgette-Bootjes", kcal: 540, p: 29, t: 30, 
            ing: ["2 Courgettes", "300g Kipgehakt", "100g Wortel"], 
            steps: [
                "1. Snij de courgettes in de lengte doormidden en hol ze uit met een lepel.",
                "2. Meng het gehakt met fijngehakte wortel en de courgettevulling.",
                "3. Vul de courgettes met het gehaktmengsel en leg ze in een ovenschotel.",
                "4. Bak de bootjes 25 minuten in een voorverwarmde oven op 200 graden.",
                "5. Serveer met een restje rijst of aardappelen."
            ], 
            kid: "Noem de courgettes 'piratenbootjes' voor aan tafel." 
        },
        { 
            m: "Kip-Wortel in Roomsaus", kcal: 610, p: 38, t: 20, 
            ing: ["600g Kipfilet", "100g Wortel", "250ml Room"], 
            steps: [
                "1. Bak de kipreepjes goudbruin in een pan.",
                "2. Voeg de wortelschijfjes toe en bak ze kort mee.",
                "3. Giet de room in de pan en laat de saus zachtjes inkoken.",
                "4. Kook ondertussen wat pasta of rijst.",
                "5. Meng alles door elkaar en kruid met een beetje peper."
            ], 
            kid: "De roomsaus maakt de groenten heerlijk zacht van smaak." 
        },
        { 
            m: "Pasta met Tonijn en Erwtjes", kcal: 560, p: 34, t: 15, 
            ing: ["320g Tonijn", "375g Pasta", "200g Erwten"], 
            steps: [
                "1. Kook de pasta beetgaar.",
                "2. Voeg de laatste 3 minuten de diepvrieserwtjes toe aan het kookwater.",
                "3. Giet af en meng de uitgelekte tonijn erdoorheen.",
                "4. Voeg een flinke scheut olijfolie en wat citroensap toe.",
                "5. Serveer eventueel koud als een frisse pastasalade."
            ], 
            kid: "Erwtjes zijn kleine groene balletjes die leuk zijn om te tellen." 
        },
        { 
            m: "Wortel-Rijst Schotel met Ei", kcal: 490, p: 22, t: 15, 
            ing: ["250g Rijst", "100g Wortel", "3 Eieren"], 
            steps: [
                "1. Rasp de wortel grof en wok deze in een pan met olie.",
                "2. Voeg de gekookte rijst toe en roerbak op hoog vuur.",
                "3. Maak een kuiltje in het midden en breek de eieren erin.",
                "4. Roer de eieren door de rijst tot ze volledig gestold zijn.",
                "5. Breng op smaak met een klein drupje sojasaus."
            ], 
            kid: "Het ei maakt de rijst lekker smeuïg." 
        },
        { 
            m: "Gehakt-Aardappel Pan met Paprika", kcal: 590, p: 31, t: 20, 
            ing: ["500g Kipgehakt", "500g Aardappel", "Paprika Mix"], 
            steps: [
                "1. Bak de aardappelblokjes goudbruin en krokant in de pan.",
                "2. Voeg het kipgehakt toe en bak dit rul mee.",
                "3. Snij de paprika's in kleine stukjes en wok ze op het laatste mee.",
                "4. Kruid met paprikapoeder voor een mooie kleur en smaak.",
                "5. Een ideale en snelle éénpansmaaltijd."
            ], 
            kid: "Dippen in een klein beetje ketchup mag bij dit gerecht." 
        },
        { 
            m: "Restjes Quinoa Wok", kcal: 510, p: 25, t: 15, 
            ing: ["250g Quinoa", "2 Eieren", "Restjes groenten"], 
            steps: [
                "1. Kook de quinoa gaar volgens de verpakking.",
                "2. Gebruik alle groenten die je nog over hebt van de week.",
                "3. Wok de groenten en voeg de quinoa toe.",
                "4. Roer de eieren door het mengsel tot ze gaar zijn.",
                "5. Een perfecte manier om restjes op te maken."
            ], 
            kid: "Een kleurrijk bord vol gezonde energie." 
        }
    ]
};