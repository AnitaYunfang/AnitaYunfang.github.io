// ============================================================
// 寶可夢卡牌組牌器 - 主程式
// ============================================================

const TYPE_INFO = {
  fire:      { name: "火", color: "#F08030", emoji: "🔥" },
  water:     { name: "水", color: "#6890F0", emoji: "💧" },
  lightning: { name: "雷", color: "#F8D030", emoji: "⚡" },
  grass:     { name: "草", color: "#78C850", emoji: "🌿" },
  psychic:   { name: "超", color: "#F85888", emoji: "🔮" },
  fighting:  { name: "鬥", color: "#C03028", emoji: "👊" },
  darkness:  { name: "惡", color: "#705848", emoji: "🌑" },
  dragon:    { name: "龍", color: "#7038F8", emoji: "🐉" },
  metal:     { name: "鋼", color: "#B8B8D0", emoji: "⚙️" },
  colorless: { name: "無色", color: "#A8A878", emoji: "⭐" },
};

const RARITY_LABEL = {
  "common": "C",
  "uncommon": "U",
  "rare": "R",
  "rare-holo": "R✦",
  "V": "V",
  "VMAX": "VMAX",
  "VSTAR": "VSTAR",
  "energy": "E",
};

// Current deck
let currentDeck = [];

// ============================================================
// Tab Navigation
// ============================================================
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ============================================================
// Render Collection
// ============================================================
function renderCollection(filter = {}) {
  const grid = document.getElementById("collection-grid");
  const countEl = document.getElementById("collection-count");

  let cards = MY_COLLECTION;
  if (filter.type && filter.type !== "all") {
    cards = cards.filter(c => c.type === filter.type);
  }
  if (filter.category && filter.category !== "all") {
    cards = cards.filter(c => c.category === filter.category);
  }

  cards.sort((a, b) => b.rating - a.rating);
  countEl.textContent = `(${cards.length} 種，共 ${cards.reduce((s, c) => s + c.quantity, 0)} 張)`;

  grid.innerHTML = cards.map(card => createCardHTML(card)).join("");

  grid.querySelectorAll(".card-item").forEach(el => {
    el.addEventListener("click", () => {
      const card = MY_COLLECTION.find(c => c.id === el.dataset.id);
      if (card) showCardModal(card);
    });
  });
}

function createCardHTML(card) {
  const typeInfo = TYPE_INFO[card.type] || { name: "?", color: "#888", emoji: "?" };
  const rarityLabel = RARITY_LABEL[card.rarity] || card.rarity;

  if (card.category === "energy") {
    return `
      <div class="card-item card-energy" data-id="${card.id}" style="border-color: ${typeInfo.color}">
        <div class="card-type-badge" style="background: ${typeInfo.color}">${typeInfo.emoji}</div>
        <div class="card-name">${card.name}</div>
        <div class="card-name-en">${card.nameEn}</div>
        <div class="card-qty">x${card.quantity}</div>
        ${card.effect ? `<div class="card-effect">${card.effect}</div>` : ""}
      </div>`;
  }

  if (card.category === "trainer") {
    return `
      <div class="card-item card-trainer" data-id="${card.id}">
        <div class="card-trainer-type">${card.trainerType === "supporter" ? "支援者" : card.trainerType === "item" ? "道具" : card.trainerType === "tool" ? "寶可夢道具" : "場地"}</div>
        <div class="card-name">${card.name}</div>
        <div class="card-name-en">${card.nameEn}</div>
        <div class="card-effect">${card.effect}</div>
        <div class="card-bottom">
          <span class="card-rarity">${rarityLabel}</span>
          <span class="card-qty">x${card.quantity}</span>
        </div>
      </div>`;
  }

  // Pokemon card
  const stageLabel = { basic: "基礎", stage1: "一階", stage2: "二階", vmax: "VMAX", vstar: "VSTAR" };
  return `
    <div class="card-item card-pokemon" data-id="${card.id}" style="border-color: ${typeInfo.color}">
      <div class="card-header">
        <span class="card-stage">${stageLabel[card.stage] || card.stage}</span>
        <span class="card-hp">HP ${card.hp}</span>
        <span class="card-type-badge" style="background: ${typeInfo.color}">${typeInfo.emoji}</span>
      </div>
      <div class="card-name">${card.name}</div>
      <div class="card-name-en">${card.nameEn}</div>
      ${card.evolvesFrom ? `<div class="card-evolves">進化自: ${card.evolvesFrom}</div>` : ""}
      ${card.ability ? `<div class="card-ability"><strong>特性:</strong> ${card.ability.name} — ${card.ability.effect}</div>` : ""}
      <div class="card-attacks">
        ${card.abilities.map(a => `
          <div class="card-attack">
            <span class="attack-cost">${a.energyCost.map(e => TYPE_INFO[e]?.emoji || "⭐").join("")}</span>
            <span class="attack-name">${a.name}</span>
            ${a.damage ? `<span class="attack-damage">${a.damage}</span>` : ""}
          </div>
          ${a.effect ? `<div class="attack-effect">${a.effect}</div>` : ""}
        `).join("")}
      </div>
      <div class="card-bottom">
        <span class="card-weakness">弱點: ${card.weakness ? TYPE_INFO[card.weakness]?.emoji : "無"}</span>
        <span class="card-retreat">撤退: ${"⭐".repeat(card.retreat)}</span>
        <span class="card-rarity">${rarityLabel}</span>
        <span class="card-qty">x${card.quantity}</span>
      </div>
      <div class="card-rating">
        <div class="rating-bar" style="width: ${card.rating * 10}%; background: ${typeInfo.color}"></div>
        <span>${card.rating}/10</span>
      </div>
    </div>`;
}

// ============================================================
// Card Modal
// ============================================================
function showCardModal(card) {
  const modal = document.getElementById("card-modal");
  const body = document.getElementById("modal-body");
  const typeInfo = TYPE_INFO[card.type] || { name: "?", color: "#888", emoji: "?" };

  let html = `<div class="modal-card" style="border-color: ${typeInfo.color}">`;
  html += `<h2>${typeInfo.emoji} ${card.name} <small>${card.nameEn}</small></h2>`;

  if (card.category === "pokemon") {
    html += `<p><strong>類型:</strong> ${card.stage} | <strong>HP:</strong> ${card.hp} | <strong>屬性:</strong> ${typeInfo.name}</p>`;
    if (card.evolvesFrom) html += `<p><strong>進化自:</strong> ${card.evolvesFrom}</p>`;
    if (card.ability) html += `<div class="modal-ability"><strong>🔷 特性 — ${card.ability.name}:</strong> ${card.ability.effect}</div>`;
    html += `<h3>招式</h3>`;
    card.abilities.forEach(a => {
      html += `<div class="modal-attack">
        <strong>${a.energyCost.map(e => TYPE_INFO[e]?.emoji || "⭐").join("")} ${a.name}</strong>
        ${a.damage ? ` — <span class="damage">${a.damage} 傷害</span>` : ""}
        ${a.effect ? `<p class="effect-text">${a.effect}</p>` : ""}
      </div>`;
    });
    html += `<p><strong>弱點:</strong> ${card.weakness ? TYPE_INFO[card.weakness]?.emoji + " x2" : "無"} | <strong>撤退:</strong> ${"⭐".repeat(card.retreat)}</p>`;
  } else if (card.category === "trainer") {
    html += `<p><strong>類型:</strong> 訓練家 — ${card.trainerType}</p>`;
    html += `<div class="modal-effect">${card.effect}</div>`;
  } else {
    html += `<p><strong>類型:</strong> ${typeInfo.name}能量</p>`;
    if (card.effect) html += `<div class="modal-effect">${card.effect}</div>`;
  }

  html += `<p><strong>擁有數量:</strong> ${card.quantity} 張 | <strong>稀有度:</strong> ${RARITY_LABEL[card.rarity] || card.rarity}</p>`;

  const inDeck = currentDeck.filter(d => d.id === card.id).reduce((s, d) => s + d.qty, 0);
  html += `<div class="modal-actions">`;
  html += `<p>牌組中: ${inDeck} 張</p>`;
  if (getDeckTotal() < 60 && inDeck < card.quantity && (card.category !== "energy" || true)) {
    html += `<button class="btn btn-primary" onclick="addToDeck('${card.id}')">加入牌組 +1</button>`;
  }
  if (inDeck > 0) {
    html += `<button class="btn btn-danger" onclick="removeFromDeck('${card.id}')">移出牌組 -1</button>`;
  }
  html += `</div></div>`;

  body.innerHTML = html;
  modal.classList.remove("hidden");
}

document.querySelector(".modal-overlay")?.addEventListener("click", closeModal);
document.querySelector(".modal-close")?.addEventListener("click", closeModal);
function closeModal() {
  document.getElementById("card-modal").classList.add("hidden");
}

// ============================================================
// Deck Management
// ============================================================
function getDeckTotal() {
  return currentDeck.reduce((s, d) => s + d.qty, 0);
}

function addToDeck(cardId) {
  const card = MY_COLLECTION.find(c => c.id === cardId);
  if (!card || getDeckTotal() >= 60) return;

  const existing = currentDeck.find(d => d.id === cardId);
  const currentQty = existing ? existing.qty : 0;

  // Max 4 copies except basic energy (unlimited)
  const maxCopies = card.category === "energy" && card.energyType === "basic" ? 60 : 4;
  if (currentQty >= Math.min(maxCopies, card.quantity)) return;

  if (existing) {
    existing.qty++;
  } else {
    currentDeck.push({ id: cardId, qty: 1 });
  }
  renderDeck();
  showCardModal(card); // refresh modal
}

function removeFromDeck(cardId) {
  const idx = currentDeck.findIndex(d => d.id === cardId);
  if (idx === -1) return;
  currentDeck[idx].qty--;
  if (currentDeck[idx].qty <= 0) currentDeck.splice(idx, 1);
  renderDeck();
  const card = MY_COLLECTION.find(c => c.id === cardId);
  if (card) showCardModal(card);
}

function renderDeck() {
  const countEl = document.getElementById("deck-count");
  const statsEl = document.getElementById("deck-stats");
  const sectionsEl = document.getElementById("deck-sections");

  const total = getDeckTotal();
  countEl.textContent = `${total}/60`;
  countEl.style.color = total === 60 ? "#4CAF50" : total > 60 ? "#F44336" : "#FFC107";

  // Stats
  let pokemonCount = 0, trainerCount = 0, energyCount = 0;
  currentDeck.forEach(d => {
    const card = MY_COLLECTION.find(c => c.id === d.id);
    if (!card) return;
    if (card.category === "pokemon") pokemonCount += d.qty;
    else if (card.category === "trainer") trainerCount += d.qty;
    else energyCount += d.qty;
  });

  statsEl.innerHTML = `
    <div class="stat-box"><span class="stat-num">${pokemonCount}</span><span class="stat-label">寶可夢</span></div>
    <div class="stat-box"><span class="stat-num">${trainerCount}</span><span class="stat-label">訓練家</span></div>
    <div class="stat-box"><span class="stat-num">${energyCount}</span><span class="stat-label">能量</span></div>
    <div class="stat-box ${total === 60 ? 'stat-ok' : 'stat-warn'}"><span class="stat-num">${total}</span><span class="stat-label">總計/60</span></div>
  `;

  // Sections
  const sections = { pokemon: [], trainer: [], energy: [] };
  currentDeck.forEach(d => {
    const card = MY_COLLECTION.find(c => c.id === d.id);
    if (card) sections[card.category].push({ ...card, deckQty: d.qty });
  });

  const sectionNames = { pokemon: "寶可夢", trainer: "訓練家", energy: "能量" };
  sectionsEl.innerHTML = Object.entries(sections).map(([key, cards]) => {
    if (cards.length === 0) return "";
    return `
      <div class="deck-section">
        <h3>${sectionNames[key]} (${cards.reduce((s, c) => s + c.deckQty, 0)})</h3>
        <div class="deck-list">
          ${cards.map(c => {
            const typeInfo = TYPE_INFO[c.type] || { emoji: "⭐", color: "#888" };
            return `<div class="deck-list-item" style="border-left: 4px solid ${typeInfo.color}">
              <span>${typeInfo.emoji} ${c.name}</span>
              <span class="deck-item-qty">x${c.deckQty}</span>
              <button class="btn-sm btn-remove" onclick="removeFromDeck('${c.id}')">-</button>
              <button class="btn-sm btn-add" onclick="addToDeck('${c.id}')">+</button>
            </div>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");
}

// ============================================================
// Auto Build - Strongest Deck
// ============================================================
document.getElementById("auto-build-btn")?.addEventListener("click", () => {
  // Use the fire-vmax preset as the strongest deck
  const preset = PRESET_DECKS["fire-vmax"];
  currentDeck = preset.cards.map(c => ({ id: c.id, qty: c.qty }));
  renderDeck();

  // Show notification
  showNotification(`已自動組建: ${preset.name}！`);

  // Switch to guide for strategy
  setTimeout(() => {
    document.querySelector('[data-tab="deck"]').click();
  }, 100);
});

document.getElementById("clear-deck-btn")?.addEventListener("click", () => {
  currentDeck = [];
  renderDeck();
});

function showNotification(msg) {
  const el = document.createElement("div");
  el.className = "notification";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add("show"), 10);
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

// ============================================================
// Filters
// ============================================================
function populateFilters() {
  const typeFilter = document.getElementById("type-filter");
  const types = [...new Set(MY_COLLECTION.filter(c => c.type).map(c => c.type))];
  types.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = `${TYPE_INFO[t]?.emoji || ""} ${TYPE_INFO[t]?.name || t}`;
    typeFilter.appendChild(opt);
  });

  typeFilter.addEventListener("change", () => {
    renderCollection({ type: typeFilter.value, category: document.getElementById("category-filter").value });
  });
  document.getElementById("category-filter").addEventListener("change", () => {
    renderCollection({ type: typeFilter.value, category: document.getElementById("category-filter").value });
  });
}

// ============================================================
// Guide Content
// ============================================================
function renderGuide() {
  const el = document.getElementById("guide-content");
  el.innerHTML = `
    <h2>噴火龍 VMAX 爆焰牌組 — 對戰指南</h2>

    <div class="guide-section">
      <h3>🏆 牌組概覽</h3>
      <p>這是你收藏中最強的牌組配置。以<strong>噴火龍 VMAX</strong>（330 HP，300 傷害）為核心打手，搭配快速充能系統和強力訓練家卡，能在 2-3 回合內完成設置並開始輸出毀滅性傷害。</p>
      <div class="guide-deck-comp">
        <div><strong>核心打手:</strong> 噴火龍 V ×2 → 噴火龍 VMAX ×1</div>
        <div><strong>副攻手:</strong> 火伊布 V ×2</div>
        <div><strong>加速引擎:</strong> 六尾 ×3 → 九尾 ×2</div>
        <div><strong>輔助:</strong> 波克基斯 V ×1</div>
        <div><strong>訓練家:</strong> 22 張</div>
        <div><strong>能量:</strong> 14 張</div>
      </div>
    </div>

    <div class="guide-section">
      <h3>🎯 開局策略（第 1-2 回合）</h3>
      <ol>
        <li><strong>理想首發:</strong> 六尾或噴火龍 V 上場，其餘基礎寶可夢放備戰區</li>
        <li>使用<strong>快速球</strong>搜尋噴火龍 V（如果不在手上）</li>
        <li>六尾使用「引火」從牌庫搜火能量加速充能</li>
        <li>使用<strong>巨大熔爐</strong>場地卡，每回合從牌庫搜 2 張火能量</li>
        <li>盡快進化噴火龍 V → VMAX（使用超級球或進化薰香搜尋）</li>
      </ol>
    </div>

    <div class="guide-section">
      <h3>⚔️ 中盤戰術（第 3-4 回合）</h3>
      <ol>
        <li>噴火龍 VMAX 使用<strong>「極巨火焰」— 300 傷害</strong>，可以一擊擊倒大部分寶可夢</li>
        <li>搭配<strong>強力頭帶</strong>對 V 寶可夢額外 +30 = 330 傷害</li>
        <li>使用<strong>能量回收</strong>將棄牌堆的能量洗回牌庫循環利用</li>
        <li>九尾的特性「九尾之光」每回合額外抽 1 張卡，保持手牌充足</li>
        <li>火伊布 V 作為備用打手，170 傷害足以處理中等威脅</li>
      </ol>
    </div>

    <div class="guide-section">
      <h3>🛡️ 關鍵操作技巧</h3>
      <ul>
        <li><strong>老大的命令:</strong> 強制對手備戰區的弱小寶可夢上場，輕鬆拿取獎賞卡</li>
        <li><strong>瑪俐:</strong> 打亂對手手牌節奏，同時你抽 5 張新卡</li>
        <li><strong>博士的研究:</strong> 手牌不好時果斷丟棄換 7 張新卡</li>
        <li><strong>交換:</strong> 當噴火龍 VMAX 受傷嚴重時，撤退費用需 3 能量，用交換卡免費換下</li>
      </ul>
    </div>

    <div class="guide-section">
      <h3>⚠️ 弱點與應對</h3>
      <table class="guide-table">
        <tr><th>威脅</th><th>應對方式</th></tr>
        <tr><td>水屬性對手（弱點 x2）</td><td>利用速度優勢搶先擊倒，使用老大的命令拉後排弱點</td></tr>
        <tr><td>對手鎖場地卡</td><td>保留交換卡確保機動性，場地被破壞後手動貼能量</td></tr>
        <tr><td>能量不足</td><td>六尾引火 + 巨大熔爐 + 能量回收三重保險</td></tr>
        <tr><td>噴火龍被擊倒</td><td>火伊布 V 立即接棒，170 傷害不弱</td></tr>
      </table>
    </div>

    <div class="guide-section">
      <h3>📊 傷害計算速查表</h3>
      <table class="guide-table">
        <tr><th>招式</th><th>基本傷害</th><th>+強力頭帶</th><th>打弱點x2</th></tr>
        <tr><td>極巨火焰</td><td>300</td><td>330 (對V)</td><td>600 / 660</td></tr>
        <tr><td>龍之爪（噴火龍V）</td><td>180</td><td>210 (對V)</td><td>360 / 420</td></tr>
        <tr><td>烈焰衝鋒（火伊布V）</td><td>170</td><td>200 (對V)</td><td>340 / 400</td></tr>
      </table>
    </div>

    <div class="guide-section">
      <h3>🔄 回合流程速查</h3>
      <div class="turn-flow">
        <div class="turn-step">1. 抽卡（九尾特性額外抽1張）</div>
        <div class="turn-step">2. 使用巨大熔爐搜火能量</div>
        <div class="turn-step">3. 使用道具卡（快速球、超級球等）</div>
        <div class="turn-step">4. 使用支援者卡（博士/瑪俐/老大）</div>
        <div class="turn-step">5. 進化寶可夢 & 貼能量</div>
        <div class="turn-step">6. 撤退/交換（如需要）</div>
        <div class="turn-step">7. 攻擊！極巨火焰 300 傷害</div>
      </div>
    </div>

    <div class="guide-section">
      <h3>🎲 其他可用牌組</h3>
      <div class="alt-decks">
        ${Object.entries(PRESET_DECKS).map(([key, deck]) => `
          <div class="alt-deck-card">
            <h4>${deck.name}</h4>
            <p>${deck.description}</p>
            <button class="btn btn-primary" onclick="loadPresetDeck('${key}')">使用此牌組</button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function loadPresetDeck(key) {
  const preset = PRESET_DECKS[key];
  if (!preset) return;
  currentDeck = preset.cards.map(c => ({ id: c.id, qty: c.qty }));
  renderDeck();
  showNotification(`已載入: ${preset.name}`);
  document.querySelector('[data-tab="deck"]').click();
}

// ============================================================
// Initialize
// ============================================================
populateFilters();
renderCollection();
renderDeck();
renderGuide();
