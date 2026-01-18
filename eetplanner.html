<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Eetplanner Pro</title>
    
    <link rel="manifest" href="manifest.json">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#E3F33D">
    <link rel="apple-touch-icon" href="icon.png">
    <link rel="icon" type="image/png" href="icon.png">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        /* STANDAARD THEMA (Nu: Tour de Tietema Style) 🚴 */
        :root { 
            --primary: #287685; /* TDT Blauw/Petrol */
            --secondary: #E3F33D; /* TDT Fel Geel */
            --bg: #F0F4F5; 
            --card: #ffffff; 
            --text: #1a2a30; 
            --gray: #b2b2b2; 
        }
        
        /* 🎀 BARBIE THEMA (Hemmeryckx) 🎀 */
        body.barbie-mode { 
            --primary: #E91E63; --secondary: #00BCD4; --bg: #FCE4EC; --card: #FFF0F5; --text: #880E4F; --gray: #F8BBD0;
        }
        
        /* ✨ GLITTER THEMA (Tielemans) ✨ */
        body.glitter-mode { 
            --primary: #B8860B; --secondary: #000000; --bg: #FDF5E6; --card: #FFFFFF; --text: #333333;
            background-image: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
        }

        /* TDT Specifieke styling overrides */
        body.tdt-mode .total-box {
            background: var(--secondary);
            color: #1a2a30; /* Zwarte tekst op geel voor leesbaarheid */
            border: 2px solid var(--primary);
            box-shadow: 4px 4px 0px var(--primary);
        }
        body.tdt-mode .family-btn.active[data-family="ricour"] {
            background: var(--secondary);
            color: #1a2a30;
            border-color: var(--primary);
            box-shadow: 3px 3px 0px var(--primary);
            transform: translate(-2px, -2px);
        }
        body.tdt-mode h3 {
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        /* Glitter animatie */
        @keyframes sparkle { 0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;} }
        body.glitter-mode .total-box, body.glitter-mode .family-btn.active[data-family="ricour_tielemans"] {
            background: linear-gradient(45deg, #DAA520, #FFD700, #DAA520); background-size: 200% 200%;
            animation: sparkle 3s infinite; color: #000; border: 2px solid #FFD700;
        }
        body.glitter-mode h3 {
            background: linear-gradient(to right, #B8860B, #FFD700, #B8860B); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800;
        }
        
        * { box-sizing: border-box; transition: all 0.3s ease; -webkit-tap-highlight-color: transparent; }
        body { font-family: 'Poppins', sans-serif; background: var(--bg); color: var(--text); margin: 0; padding: 15px; padding-top: env(safe-area-inset-top); }
        .container { max-width: 1200px; margin: 0 auto; padding-bottom: 50px; }
        
        /* --- KNOPPEN BALK --- */
        .controls-bar { 
            display: flex; flex-direction: column; gap: 20px; align-items: center; 
            background: var(--card); padding: 25px; border-radius: 25px; margin-bottom: 25px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        
        .family-selector { display: flex; gap: 10px; width: 100%; justify-content: center; flex-wrap: wrap; }
        .family-btn {
            padding: 15px 15px; border: 2px solid transparent; border-radius: 12px;
            font-size: 0.95rem; font-weight: 700; cursor: pointer; flex: 1; min-width: 140px;
            background: #f4f4f4; color: #777; text-align: center;
        }
        
        .family-btn.active { transform: scale(1.02); }
        
        /* TDT (Ricour) */
        .family-btn[data-family="ricour"] { border-color: #E3F33D; color: #889900; background: #fff; }
        /* Barbie */
        .family-btn[data-family="hemmeryckx"] { border-color: #E91E63; color: #E91E63; background: #fff; }
        .family-btn[data-family="hemmeryckx"].active { background: #E91E63; color: white; }
        /* Glitter */
        .family-btn[data-family="ricour_tielemans"] { border-color: #B8860B; color: #B8860B; background: #fff; }
        .family-btn[data-family="ricour_tielemans"].active { background: #B8860B; color: white; }

        select { padding: 10px 20px; border-radius: 15px; border: 2px solid var(--gray); background: transparent; color: var(--text); font-weight: bold; font-size: 1rem; outline: none; }
        
        .nav-tabs { display: flex; gap: 10px; margin-bottom: 20px; justify-content: center; }
        .tab-btn { padding: 10px 25px; border-radius: 20px; border: none; cursor: pointer; background: rgba(0,0,0,0.05); color: var(--text); font-weight: 600; }
        .tab-btn.active { background: var(--primary); color: white; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        body.tdt-mode .tab-btn.active { color: var(--secondary); } /* Gele tekst op blauwe knop */
        body.barbie-mode .tab-btn.active { background: #E91E63; }

        .total-box { background: var(--primary); color: white; padding: 15px; border-radius: 20px; text-align: center; margin-bottom: 25px; font-weight: 800; font-size: 1.2rem; }
        
        .shopping-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .shop-card { background: var(--card); padding: 20px; border-radius: 25px; box-shadow: 0 5px 20px rgba(0,0,0,0.03); }
        .shop-card h3 { margin-top: 0; font-size: 1.1rem; border-bottom: 2px solid rgba(0,0,0,0.05); padding-bottom: 10px; }
        
        .item-list li { 
            display: flex; justify-content: space-between; align-items: center; padding: 12px 0; 
            border-bottom: 1px solid rgba(0,0,0,0.03); font-size: 0.95rem; cursor: pointer; 
        }
        .stock-check { width: 22px; height: 22px; border: 2px solid var(--gray); border-radius: 50%; margin-right: 12px; display: inline-block; position: relative; }
        .item-list li.stocked { color: var(--gray); text-decoration: line-through; }
        .item-list li.stocked .stock-check { background: var(--secondary); border-color: var(--secondary); }
        .item-list li.stocked .stock-check::after { content: '✓'; color: #000; position: absolute; top: -1px; left: 4px; font-size: 14px; font-weight: bold; }

        .calendar-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .day-card { 
            background: var(--card); padding: 20px; border-radius: 25px; cursor: pointer; 
            position: relative; overflow: hidden; border: 2px solid transparent;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: flex; flex-direction: column;
        }
        .day-card.completed { opacity: 0.6; filter: grayscale(0.8); background: rgba(255,255,255,0.4); border-color: #ddd; }
        .day-card.completed h3 { text-decoration: line-through; }
        
        .check-btn { 
            position: absolute; top: 15px; right: 15px; width: 36px; height: 36px; 
            border-radius: 50%; background: #eee; border: none; cursor: pointer; color: transparent;
            z-index: 5; font-size: 1.2rem; display:flex; align-items:center; justify-content:center;
        }
        .day-card.completed .check-btn { background: var(--secondary); color: #000; }

        .day-card h3 { color: var(--primary); margin: 5px 0 15px 0; font-size: 1.1rem; padding-right: 40px; }
        .stat-bar { display: flex; gap: 10px; font-size: 0.8rem; color: #777; margin-bottom: 15px; font-weight: 600; }
        .mini-ing-box { background: rgba(0,0,0,0.03); padding: 12px; border-radius: 15px; font-size: 0.85rem; color: #555; flex-grow: 1; line-height: 1.5; }

        .modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); backdrop-filter: blur(5px); }
        .modal-content { background: var(--card); margin: 10% auto; padding: 30px; width: 90%; max-width: 600px; border-radius: 30px; position: relative; max-height: 80vh; overflow-y: auto; }
        .close { position: absolute; right: 25px; top: 20px; font-size: 28px; cursor: pointer; color: var(--primary); }
    </style>
</head>
<body class="tdt-mode"> <div class="container">
    <div class="controls-bar">
        <div class="family-selector">
            <button class="family-btn active" data-family="ricour" onclick="setFamily('ricour')">
                🚴 TDT Ricour (3p)
            </button>
            <button class="family-btn" data-family="hemmeryckx" onclick="setFamily('hemmeryckx')">
                🎀 Hemmeryckx (2p)
            </button>
            <button class="family-btn" data-family="ricour_tielemans" onclick="setFamily('ricour_tielemans')">
                ✨ Tielemans (4p)
            </button>
        </div>

        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; justify-content:center;">
            <select id="monthSelect" onchange="loadNewData()">
                <option value="januari">Januari</option>
                <option value="februari">Februari</option>
            </select>
            <button onclick="clearProgress()" style="border:none; background:rgba(0,0,0,0.05); color:var(--text); padding:10px 20px; border-radius:15px; cursor:pointer;">Reset</button>
        </div>
    </div>

    <div class="nav-tabs">
        <button id="w12Btn" class="tab-btn active" onclick="setPeriode('w1&2')">Week 1 & 2</button>
        <button id="w34Btn" class="tab-btn" onclick="setPeriode('w3&4')">Week 3 & 4</button>
    </div>

    <div id="priceBanner" class="total-box">Laden...</div>

    <div class="shopping-grid">
        <div class="shop-card"><h3>🥩 Vlees & Vis</h3><ul id="vList" class="item-list"></ul></div>
        <div class="shop-card"><h3>🥦 Groenten</h3><ul id="gList" class="item-list"></ul></div>
        <div class="shop-card"><h3>🥫 Voorraad</h3><ul id="kList" class="item-list"></ul></div>
    </div>

    <div id="calendar" class="calendar-grid"></div>
</div>

<div id="receptModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2 id="mTitle" style="color:var(--primary); margin-top:0;"></h2>
        <div id="mStats" style="display:flex; gap:20px; margin-bottom:20px; font-weight:600; color:#666;"></div>
        <h4 style="margin-bottom:10px;">🛒 Ingrediënten</h4><ul id="mIng" style="margin-top:0; padding-left:20px; line-height:1.6;"></ul>
        <h4 style="margin-bottom:10px;">👩‍🍳 Bereiding</h4><div id="mSteps" style="line-height:1.6;"></div>
        <div id="mKid" style="background:#FFF9C4; padding:15px; border-radius:15px; margin-top:25px; color:#5D4037;"></div>
    </div>
</div>

<script>
    let currentPeriode = 'w1&2';
    let currentFamilyKey = 'ricour'; 
    let completedRecipes = JSON.parse(localStorage.getItem('completedRecipes')) || [];
    let stockedItems = JSON.parse(localStorage.getItem('stockedItems')) || [];

    // Functie om familie te wisselen via de knoppen
    function setFamily(key) {
        currentFamilyKey = key;
        
        // Update visuele status van knoppen
        document.querySelectorAll('.family-btn').forEach(btn => {
            btn.classList.remove('active');
            if(btn.getAttribute('data-family') === key) btn.classList.add('active');
        });

        updateUI();
    }

    function loadNewData() {
        const maand = document.getElementById('monthSelect').value;
        const banner = document.getElementById('priceBanner');
        banner.innerText = "Bezig met laden...";
        
        const oldScript = document.getElementById('data-script');
        if (oldScript) oldScript.remove();

        const script = document.createElement('script');
        script.id = 'data-script';
        script.src = `${maand}/recepten_${currentPeriode}.js?t=${new Date().getTime()}`;
        
        script.onload = () => {
            if (typeof shoppingData === 'undefined') {
                banner.innerText = "Error: Data niet gevonden";
                banner.style.background = "red";
            } else {
                updateUI();
            }
        };
        
        script.onerror = () => {
            banner.innerText = `Bestand niet gevonden: ${maand}/recepten_${currentPeriode}.js`;
        };
        
        document.head.appendChild(script);
    }

    function setPeriode(p) {
        currentPeriode = p;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(p === 'w1&2' ? 'w12Btn' : 'w34Btn').classList.add('active');
        loadNewData();
    }

    function toggleRecipe(id, event) {
        event.stopPropagation();
        if (completedRecipes.includes(id)) {
            completedRecipes = completedRecipes.filter(rid => rid !== id);
        } else {
            completedRecipes.push(id);
        }
        localStorage.setItem('completedRecipes', JSON.stringify(completedRecipes));
        updateUI();
    }

    function toggleStock(itemName) {
        if (stockedItems.includes(itemName)) {
            stockedItems = stockedItems.filter(i => i !== itemName);
        } else {
            stockedItems.push(itemName);
        }
        localStorage.setItem('stockedItems', JSON.stringify(stockedItems));
        updateUI();
    }

    function clearProgress() {
        if(confirm("Alles resetten?")) {
            completedRecipes = []; stockedItems = [];
            localStorage.removeItem('completedRecipes'); localStorage.removeItem('stockedItems');
            updateUI();
        }
    }

    function updateUI() {
        try {
            // THEMA LOGICA
            document.body.className = ''; 
            let factor = 1.0;

            if (currentFamilyKey === 'hemmeryckx') {
                document.body.classList.add('barbie-mode');
                factor = 0.67; 
            } else if (currentFamilyKey === 'ricour_tielemans') {
                document.body.classList.add('glitter-mode');
                factor = 1.33; 
            } else {
                document.body.classList.add('tdt-mode'); // TDT is standaard
                factor = 1.0; 
            }

            if (typeof shoppingData === 'undefined' || typeof recipeData === 'undefined') return;

            const currentShopData = shoppingData[currentFamilyKey] || shoppingData['ricour'];

            // Boodschappenlijst
            let totalCost = 0;
            const renderShopList = (id, list) => {
                const el = document.getElementById(id); el.innerHTML = '';
                if(!list) return;

                list.forEach(itemStr => {
                    const parts = itemStr.split(' - €');
                    const name = parts[0];
                    const price = parts[1] ? parseFloat(parts[1]) : 0;
                    const isStocked = stockedItems.includes(name);
                    
                    if (!isStocked) totalCost += price;

                    const li = document.createElement('li');
                    li.className = isStocked ? 'stocked' : '';
                    li.onclick = () => toggleStock(name);
                    li.innerHTML = `<div style="display:flex; align-items:center;"><span class="stock-check"></span>${name}</div><b>${price > 0 ? '€'+price.toFixed(2) : ''}</b>`;
                    el.appendChild(li);
                });
            };

            renderShopList('vList', currentShopData.v);
            renderShopList('gList', currentShopData.g);
            renderShopList('kList', currentShopData.k);
            
            const banner = document.getElementById('priceBanner');
            banner.innerText = `Te Betalen: €${totalCost.toFixed(2)}`;

            // Kalender
            const grid = document.getElementById('calendar'); grid.innerHTML = '';
            recipeData.recipes.forEach(x => {
                const safeId = x.id || Math.random().toString(36).substr(2, 9);
                const isDone = completedRecipes.includes(safeId);
                
                const card = document.createElement('div');
                card.className = `day-card ${isDone ? 'completed' : ''}`;
                const ingPreview = x.ing ? x.ing.map(i => i.replace(/^[\d.,]+(g|ml|l|kg|stuks|st)?\s*/i, '')).slice(0, 3).join(', ') : '';

                card.innerHTML = `
                    <button class="check-btn" onclick="toggleRecipe('${safeId}', event)">✓</button>
                    <h3>${x.m}</h3>
                    <div class="stat-bar"><span>🔥 ${x.kcal}</span><span>💪 ${x.p}g</span><span>🕒 ${x.t}m</span></div>
                    <div class="mini-ing-box">🛒 ${ingPreview}...</div>
                `;
                card.onclick = () => showModal(x, factor);
                grid.appendChild(card);
            });

        } catch (error) {
            console.error(error);
        }
    }

    function showModal(x, f) {
        document.getElementById('mTitle').innerText = x.m;
        document.getElementById('mStats').innerHTML = `<span>🔥 ${x.kcal} kcal/p</span> <span>💪 ${x.p}g eiwit</span> <span>🕒 ${x.t} min</span>`;
        
        if(x.ing) {
            document.getElementById('mIng').innerHTML = x.ing.map(i => {
                let newItem = i.replace(/(\d+([.,]\d+)?)/g, (match) => {
                    let num = parseFloat(match.replace(',', '.'));
                    let raw = num * f;
                    let rounded = (raw > 10) ? Math.round(raw / 5) * 5 : Math.round(raw * 10) / 10;
                    return rounded;
                });
                return `<li>${newItem}</li>`;
            }).join('');
        }
        
        if(x.steps) document.getElementById('mSteps').innerHTML = x.steps.map(s => `<p>${s}</p>`).join('');
        
        const kidEl = document.getElementById('mKid');
        kidEl.style.display = x.kid ? 'block' : 'none';
        kidEl.innerHTML = x.kid ? `<b>👶 Kind-Tip:</b> ${x.kid}` : '';
        document.getElementById('receptModal').style.display = 'block';
    }

    function closeModal() { document.getElementById('receptModal').style.display = 'none'; }
    window.onclick = (e) => { if(e.target.className === 'modal') closeModal(); }
    window.onload = loadNewData;
</script>
</body>
</html>
