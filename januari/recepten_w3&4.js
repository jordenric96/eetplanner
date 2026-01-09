/* DATA VOOR JANUARI WEEK 3 & 4 + EXTRA SOEPEN */

var soupData = {
    recipes: [
        {
            m: "Wortel-Pompoen 'Zonneschijn' Soep (Week 1)", kcal: 110, p: 2, t: 25,
            ing: ["450g Pompoenblokjes (diepvries)", "400g Wortelschijfjes (diepvries)", "1 Ui", "1.2L Bouillon"],
            steps: [
                "1. Snipper de ui en fruit deze glazig in een grote pot met wat olie.",
                "2. Voeg de bevroren pompoen en wortels toe. Bak 5 minuten mee om de natuurlijke suikers te karamelliseren (geeft veel smaak!).",
                "3. Giet de bouillon erbij en breng aan de kook.",
                "4. Laat 15-20 minuten pruttelen tot de groenten zacht zijn.",
                "5. Mix de soep glad. Voeg een snufje kaneel en een scheutje melk toe voor een milde, kindvriendelijke smaak."
            ],
            kid: "Serveer met wat broodkorstjes die ze zelf in de soep mogen gooien."
        },
        {
            m: "Groene Kracht Erwtjes-Prei Soep (Week 2)", kcal: 145, p: 6, t: 20,
            ing: ["400g Doperwtjes (diepvries)", "300g Preiringen (diepvries)", "2 Aardappelen", "1.2L Bouillon"],
            steps: [
                "1. Schil de aardappelen, snij ze in kleine blokjes en kook ze 10 minuten in de bouillon.",
                "2. Voeg de bevroren prei en doperwtjes toe aan de kokende bouillon.",
                "3. Laat nog 10 minuten doorkoken (niet langer, anders verliest de soep zijn frisse groene kleur).",
                "4. Mix de soep zeer fijn met een staafmixer voor een romige textuur.",
                "5. Breng op smaak met peper, zout en eventueel een beetje geraspte kaas."
            ],
            kid: "Noem dit 'Monster-soep' om het eten van groene groenten leuk te maken."
        }
    ]
};

var recipeDataJanuariDeel2 = {
    week3: [
        { 
            m: "Varkenshaas met 'Miniboompjes' & Aardappelen", kcal: 420, p: 32, t: 25, prijs: 2.10,
            ing: ["450g Varkenshaasreepjes", "500g Broccoli (diepvries)", "600g Aardappelen"], 
            steps: [
                "1. Schil de aardappelen en kook ze gaar in gezouten water.",
                "2. Bak de varkenshaasreepjes goudbruin in boter met uienpoeder.",
                "3. Haal het vlees uit de pan en gebruik het bakvet om de bevroren broccoli kort in aan te stoven (geeft veel meer smaak dan koken).",
                "4. Voeg een klein scheutje water toe en zet het deksel op de pan tot de broccoli beetgaar is.",
                "5. Serveer het vlees met de aardappelen en de broccoli."
            ], 
            kid: "Noem de broccoli 'miniboompjes' en laat ze die zelf in een kuiltje van de puree 'planten'." 
        },
        { 
            m: "Pasta Rundergehakt & Verborgen Worteltjes", kcal: 550, p: 28, t: 20, prijs: 1.50,
            ing: ["300g Rundergehakt", "300g Pasta", "400g Wortelschijfjes (diepvries)", "500ml Passata"], 
            steps: [
                "1. Kook de pasta volgens de verpakking.",
                "2. Bak het gehakt rul in een pan. Voeg de bevroren wortelschijfjes toe en bak ze 5 min mee.",
                "3. Giet de passata erbij en kruid met Italiaanse kruiden en uienpoeder.",
                "4. Laat de saus pruttelen tot de worteltjes zacht zijn (de wortel maakt de saus lekker zoet).",
                "5. Meng de saus door de pasta."
            ], 
            kid: "De zoete smaak van de worteltjes in de saus is een gegarandeerd succes." 
        },
        { 
            m: "Kip & Paprika 'Tover-Quinoa'", kcal: 480, p: 35, t: 25, prijs: 1.90,
            ing: ["450g Kipblokjes", "150g Quinoa", "400g Paprikareepjes (diepvries)", "Kippenbouillon"], 
            steps: [
                "1. Kook de quinoa in kippenbouillon voor extra diepe smaak.",
                "2. Kruid de kipblokjes met mild paprikapoeder en bak ze goudbruin in olie.",
                "3. Voeg de bevroren paprikareepjes toe en bak ze op hoog vuur mee tot ze zacht zijn.",
                "4. Meng de gekookte quinoa door het kip-mengsel.",
                "5. Breng extra op smaak met wat peper en zout."
            ], 
            kid: "Noem quinoa 'tover-rijst' omdat de korreltjes een grappig wit staartje krijgen als ze gaar zijn." 
        },
        { 
            m: "Kabeljauw met Zoete Aardappelfriet & Courgette", kcal: 410, p: 26, t: 30, prijs: 2.50,
            ing: ["3 Kabeljauwfilets", "600g Zoete aardappel", "400g Courgetteschijfjes (diepvries)"], 
            steps: [
                "1. Snij de zoete aardappel in frietjes en bak ze goudbruin in de oven (200°C) of in de pan.",
                "2. Dep de vis droog, bestuif licht met bloem en bak in 5-8 minuten gaar in boter.",
                "3. Bak de bevroren courgetteschijfjes op zeer hoog vuur in een hete pan (zo worden ze niet zompig).",
                "4. Breng de groenten op smaak met peper en zout."
            ], 
            kid: "Serveer de vis in kleinere stukjes als 'vis-nuggets' naast de gezonde frietjes." 
        },
        { 
            m: "Gevulde Paprika (Gehakt, Rijst & Courgette)", kcal: 510, p: 30, t: 35, prijs: 1.80,
            ing: ["3 Verse Paprika's", "300g Rundergehakt", "150g Rijst", "200g Courgetteblokjes (diepvries)"], 
            steps: [
                "1. Kook de rijst gaar. Meng de gekookte rijst met het rauwe gehakt en de fijngehakte diepvriescourgette.",
                "2. Snij de kapjes van de verse paprika's en verwijder de zaadlijsten.",
                "3. Vul de paprika's met het mengsel en zet de kapjes er terug op.",
                "4. Plaats in een ovenschaal met een klein laagje water op de bodem.",
                "5. Bak 25-30 minuten in een voorverwarmde oven op 180°C."
            ], 
            kid: "De courgette zit 'verstopt' in de vulling, ideaal voor moeilijke eters." 
        }
    ],
    week4: [
        { 
            m: "Kip in Romige Wortelsaus & Rijst", kcal: 520, p: 33, t: 25, prijs: 1.75,
            ing: ["450g Kipblokjes", "400g Wortelschijfjes (diepvries)", "250g Rijst", "100ml Room"], 
            steps: [
                "1. Kook de rijst. Kook tegelijkertijd de wortelschijfjes gaar in een bodempje bouillon.",
                "2. Mix de helft van de wortels met de room tot een gladde, oranje saus.",
                "3. Bak de kipblokjes goudbruin in de pan.",
                "4. Voeg de saus en de overige wortelschijfjes toe aan de kip en warm goed door.",
                "5. Serveer de romige saus over de rijst."
            ], 
            kid: "Een kleurrijke, zachte saus die kinderen erg aanspreekt." 
        },
        { 
            m: "Pasta Broccoli-Tonijn Romig", kcal: 490, p: 29, t: 15, prijs: 1.40,
            ing: ["300g Pasta", "400g Broccoli (diepvries)", "2 blikjes Tonijn", "1 el Roomkaas"], 
            steps: [
                "1. Kook de pasta en de broccoli samen in één grote pot water (bespaart afwas!).",
                "2. Giet af en houd een klein beetje kookvocht achter.",
                "3. Meng de tonijn (uitlekken!) en de roomkaas door de warme pasta.",
                "4. Voeg een scheutje kookvocht toe om het extra smeuïg te maken.",
                "5. Kruid met een beetje peper en eventueel uienpoeder."
            ], 
            kid: "Door de roomkaas smaakt de tonijn heel mild." 
        },
        { 
            m: "Milde Zoete Aardappel Curry met Linzen", kcal: 450, p: 18, t: 30, prijs: 1.20,
            ing: ["600g Zoete aardappel", "1 blik Linzen", "400ml Kokosmelk", "1 el Milde Currypasta"], 
            steps: [
                "1. Bak de milde currypasta kort aan in wat olie (dit opent de aroma's).",
                "2. Voeg de blokjes zoete aardappel en de kokosmelk toe.",
                "3. Laat 15 minuten pruttelen tot de aardappel gaar is.",
                "4. Voeg de uitgelekte linzen toe en warm nog 2 minuten door.",
                "5. Serveer eventueel met wat rijst of een stukje brood."
            ], 
            kid: "De kokosmelk en zoete aardappel maken de curry heel toegankelijk en niet pittig." 
        },
        { 
            m: "Gehakt-Paprika Schotel met Aardappelblokjes", kcal: 530, p: 27, t: 25, prijs: 1.65,
            ing: ["300g Rundergehakt", "400g Paprikamix (diepvries)", "600g Aardappelblokjes (diepvries)"], 
            steps: [
                "1. Bak de aardappelblokjes in een aparte pan tot ze goudbruin en krokant zijn.",
                "2. Bak ondertussen het gehakt rul in een grote pan en voeg de bevroren paprika toe.",
                "3. Kruid het gehaktmengsel stevig met mild paprikapoeder en uienpoeder.",
                "4. Meng op het allerlaatste moment de krokante aardappeltjes erdoor (zo blijven ze knapperig).",
                "5. Serveer direct."
            ], 
            kid: "Knapperige aardappeltjes vallen altijd in de smaak." 
        },
        { 
            m: "Wok Quinoa met Groenten & Ei", kcal: 440, p: 22, t: 20, prijs: 1.10,
            ing: ["150g Quinoa", "450g Gemengde groenten (diepvries)", "3 Eieren"], 
            steps: [
                "1. Kook de quinoa gaar in bouillon.",
                "2. Wok de bevroren groenten op hoog vuur met wat olie tot ze gaar zijn.",
                "3. Voeg de gekookte quinoa toe aan de groenten en bak kort mee.",
                "4. Maak een kuiltje in het midden, breek de eieren erin en roer tot ze gestold zijn (zoals scrambled eggs).",
                "5. Breng op smaak met een heel klein scheutje sojasaus."
            ], 
            kid: "De vrolijke kleuren van de verschillende groenten maken het bord aantrekkelijk." 
        }
    ]
};
