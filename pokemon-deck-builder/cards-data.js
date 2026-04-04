// ============================================================
// 你擁有的寶可夢卡牌收藏
// ============================================================

const MY_COLLECTION = [
  // ==================== 火屬性寶可夢 ====================
  {
    id: "fire-001",
    name: "噴火龍 V",
    nameEn: "Charizard V",
    category: "pokemon",
    type: "fire",
    stage: "basic",
    hp: 220,
    weakness: "water",
    retreat: 2,
    abilities: [
      { name: "烈焰爆發", damage: 100, energyCost: ["fire", "fire"], effect: "丟棄此寶可夢身上的1張火能量" },
      { name: "龍之爪", damage: 180, energyCost: ["fire", "fire", "colorless"], effect: "下回合此招式的傷害 -50" }
    ],
    rarity: "V",
    quantity: 2,
    rating: 9.5
  },
  {
    id: "fire-002",
    name: "噴火龍 VMAX",
    nameEn: "Charizard VMAX",
    category: "pokemon",
    type: "fire",
    stage: "vmax",
    evolvesFrom: "噴火龍 V",
    hp: 330,
    weakness: "water",
    retreat: 3,
    abilities: [
      { name: "極巨火焰", damage: 300, energyCost: ["fire", "fire", "fire", "colorless"], effect: "丟棄此寶可夢身上的2張能量" }
    ],
    rarity: "VMAX",
    quantity: 1,
    rating: 10
  },
  {
    id: "fire-003",
    name: "火伊布 V",
    nameEn: "Flareon V",
    category: "pokemon",
    type: "fire",
    stage: "basic",
    hp: 210,
    weakness: "water",
    retreat: 2,
    abilities: [
      { name: "灼熱之風", damage: 60, energyCost: ["fire"], effect: null },
      { name: "烈焰衝鋒", damage: 170, energyCost: ["fire", "fire", "colorless"], effect: "此寶可夢也受到 30 點傷害" }
    ],
    rarity: "V",
    quantity: 2,
    rating: 7.5
  },
  {
    id: "fire-004",
    name: "熔岩蝸牛",
    nameEn: "Magcargo",
    category: "pokemon",
    type: "fire",
    stage: "stage1",
    evolvesFrom: "熔岩蟲",
    hp: 120,
    weakness: "water",
    retreat: 3,
    abilities: [
      { name: "熔岩流", damage: 80, energyCost: ["fire", "colorless"], effect: null }
    ],
    ability: { name: "岩漿之甲", effect: "此寶可夢受到的傷害 -30" },
    rarity: "uncommon",
    quantity: 3,
    rating: 6
  },
  {
    id: "fire-005",
    name: "熔岩蟲",
    nameEn: "Slugma",
    category: "pokemon",
    type: "fire",
    stage: "basic",
    hp: 70,
    weakness: "water",
    retreat: 2,
    abilities: [
      { name: "火花", damage: 20, energyCost: ["fire"], effect: null }
    ],
    rarity: "common",
    quantity: 4,
    rating: 3
  },
  {
    id: "fire-006",
    name: "六尾",
    nameEn: "Vulpix",
    category: "pokemon",
    type: "fire",
    stage: "basic",
    hp: 60,
    weakness: "water",
    retreat: 1,
    abilities: [
      { name: "引火", damage: 0, energyCost: ["fire"], effect: "從牌庫搜尋1張火能量放到此寶可夢上" }
    ],
    rarity: "common",
    quantity: 3,
    rating: 5
  },
  {
    id: "fire-007",
    name: "九尾",
    nameEn: "Ninetales",
    category: "pokemon",
    type: "fire",
    stage: "stage1",
    evolvesFrom: "六尾",
    hp: 120,
    weakness: "water",
    retreat: 1,
    abilities: [
      { name: "狐火", damage: 90, energyCost: ["fire", "colorless"], effect: "對手的戰鬥寶可夢陷入灼傷狀態" }
    ],
    ability: { name: "九尾之光", effect: "每回合可從牌庫抽1張卡" },
    rarity: "rare",
    quantity: 2,
    rating: 7.5
  },

  // ==================== 水屬性寶可夢 ====================
  {
    id: "water-001",
    name: "暴鯉龍 V",
    nameEn: "Gyarados V",
    category: "pokemon",
    type: "water",
    stage: "basic",
    hp: 230,
    weakness: "lightning",
    retreat: 3,
    abilities: [
      { name: "狂暴巨浪", damage: 120, energyCost: ["water", "water", "colorless"], effect: null },
      { name: "龍捲風", damage: 200, energyCost: ["water", "water", "water", "colorless"], effect: "丟棄場上1張場地卡" }
    ],
    rarity: "V",
    quantity: 1,
    rating: 8
  },
  {
    id: "water-002",
    name: "拉普拉斯 V",
    nameEn: "Lapras V",
    category: "pokemon",
    type: "water",
    stage: "basic",
    hp: 210,
    weakness: "lightning",
    retreat: 2,
    abilities: [
      { name: "海洋呼喚", damage: 0, energyCost: ["water"], effect: "從牌庫搜尋2張水能量卡放到備戰區的寶可夢上" },
      { name: "暴風雪", damage: 150, energyCost: ["water", "water", "colorless"], effect: null }
    ],
    rarity: "V",
    quantity: 2,
    rating: 8.5
  },
  {
    id: "water-003",
    name: "鯉魚王",
    nameEn: "Magikarp",
    category: "pokemon",
    type: "water",
    stage: "basic",
    hp: 30,
    weakness: "lightning",
    retreat: 1,
    abilities: [
      { name: "跳躍", damage: 10, energyCost: ["colorless"], effect: null }
    ],
    rarity: "common",
    quantity: 4,
    rating: 2
  },
  {
    id: "water-004",
    name: "乘龍",
    nameEn: "Lapras",
    category: "pokemon",
    type: "water",
    stage: "basic",
    hp: 130,
    weakness: "lightning",
    retreat: 2,
    abilities: [
      { name: "衝浪", damage: 70, energyCost: ["water", "colorless"], effect: null }
    ],
    rarity: "uncommon",
    quantity: 2,
    rating: 5
  },

  // ==================== 電屬性寶可夢 ====================
  {
    id: "lightning-001",
    name: "皮卡丘 V",
    nameEn: "Pikachu V",
    category: "pokemon",
    type: "lightning",
    stage: "basic",
    hp: 190,
    weakness: "fighting",
    retreat: 1,
    abilities: [
      { name: "電擊", damage: 40, energyCost: ["lightning"], effect: null },
      { name: "十萬伏特", damage: 150, energyCost: ["lightning", "lightning", "colorless"], effect: "丟棄此寶可夢身上的全部能量" }
    ],
    rarity: "V",
    quantity: 2,
    rating: 7
  },
  {
    id: "lightning-002",
    name: "皮卡丘 VMAX",
    nameEn: "Pikachu VMAX",
    category: "pokemon",
    type: "lightning",
    stage: "vmax",
    evolvesFrom: "皮卡丘 V",
    hp: 310,
    weakness: "fighting",
    retreat: 2,
    abilities: [
      { name: "極巨電球", damage: 120, energyCost: ["lightning", "lightning"], effect: "額外造成備戰區每隻寶可夢 30 點傷害" },
      { name: "極巨雷鳴", damage: 270, energyCost: ["lightning", "lightning", "lightning", "colorless"], effect: null }
    ],
    rarity: "VMAX",
    quantity: 1,
    rating: 9
  },
  {
    id: "lightning-003",
    name: "雷丘",
    nameEn: "Raichu",
    category: "pokemon",
    type: "lightning",
    stage: "stage1",
    evolvesFrom: "皮卡丘",
    hp: 120,
    weakness: "fighting",
    retreat: 1,
    abilities: [
      { name: "雷電拳", damage: 100, energyCost: ["lightning", "colorless"], effect: "擲硬幣，正面則對手的戰鬥寶可夢陷入麻痺" }
    ],
    rarity: "rare",
    quantity: 2,
    rating: 6.5
  },
  {
    id: "lightning-004",
    name: "皮卡丘",
    nameEn: "Pikachu",
    category: "pokemon",
    type: "lightning",
    stage: "basic",
    hp: 60,
    weakness: "fighting",
    retreat: 1,
    abilities: [
      { name: "電光一閃", damage: 20, energyCost: ["lightning"], effect: null }
    ],
    rarity: "common",
    quantity: 4,
    rating: 3
  },
  {
    id: "lightning-005",
    name: "三合一磁怪 V",
    nameEn: "Magnezone V",
    category: "pokemon",
    type: "lightning",
    stage: "basic",
    hp: 210,
    weakness: "fighting",
    retreat: 2,
    abilities: [
      { name: "磁力炸彈", damage: 120, energyCost: ["lightning", "lightning", "colorless"], effect: null }
    ],
    ability: { name: "磁力充電", effect: "每回合可從牌庫搜尋1張雷能量放到此寶可夢上" },
    rarity: "V",
    quantity: 1,
    rating: 8
  },

  // ==================== 草屬性寶可夢 ====================
  {
    id: "grass-001",
    name: "妙蛙花 V",
    nameEn: "Venusaur V",
    category: "pokemon",
    type: "grass",
    stage: "basic",
    hp: 220,
    weakness: "fire",
    retreat: 3,
    abilities: [
      { name: "森林風暴", damage: 130, energyCost: ["grass", "grass", "colorless"], effect: null },
      { name: "日光束", damage: 80, energyCost: ["grass", "colorless"], effect: "回復此寶可夢 30 HP" }
    ],
    rarity: "V",
    quantity: 1,
    rating: 7.5
  },
  {
    id: "grass-002",
    name: "蜥蜴王",
    nameEn: "Sceptile",
    category: "pokemon",
    type: "grass",
    stage: "stage2",
    evolvesFrom: "森林蜥蜴",
    hp: 150,
    weakness: "fire",
    retreat: 1,
    abilities: [
      { name: "葉刃", damage: 130, energyCost: ["grass", "colorless"], effect: "擲硬幣，正面額外 +60 傷害" }
    ],
    ability: { name: "叢林精靈", effect: "你的草屬性寶可夢使用招式所需的能量 -1" },
    rarity: "rare-holo",
    quantity: 1,
    rating: 7
  },
  {
    id: "grass-003",
    name: "森林蜥蜴",
    nameEn: "Grovyle",
    category: "pokemon",
    type: "grass",
    stage: "stage1",
    evolvesFrom: "木守宮",
    hp: 80,
    weakness: "fire",
    retreat: 1,
    abilities: [
      { name: "快速斬擊", damage: 40, energyCost: ["grass"], effect: null }
    ],
    rarity: "uncommon",
    quantity: 2,
    rating: 4
  },
  {
    id: "grass-004",
    name: "木守宮",
    nameEn: "Treecko",
    category: "pokemon",
    type: "grass",
    stage: "basic",
    hp: 60,
    weakness: "fire",
    retreat: 1,
    abilities: [
      { name: "拍打", damage: 20, energyCost: ["grass"], effect: null }
    ],
    rarity: "common",
    quantity: 3,
    rating: 3
  },

  // ==================== 超能力屬性寶可夢 ====================
  {
    id: "psychic-001",
    name: "超夢 V",
    nameEn: "Mewtwo V",
    category: "pokemon",
    type: "psychic",
    stage: "basic",
    hp: 220,
    weakness: "darkness",
    retreat: 2,
    abilities: [
      { name: "念力", damage: 70, energyCost: ["psychic", "colorless"], effect: null },
      { name: "精神擊破", damage: 190, energyCost: ["psychic", "psychic", "colorless"], effect: "此寶可夢在下回合無法使用招式" }
    ],
    rarity: "V",
    quantity: 2,
    rating: 8.5
  },
  {
    id: "psychic-002",
    name: "超夢 VSTAR",
    nameEn: "Mewtwo VSTAR",
    category: "pokemon",
    type: "psychic",
    stage: "vstar",
    evolvesFrom: "超夢 V",
    hp: 280,
    weakness: "darkness",
    retreat: 2,
    abilities: [
      { name: "傳送攻擊", damage: 120, energyCost: ["psychic", "colorless"], effect: "從棄牌堆選擇1張訓練家卡加入手牌" },
      { name: "念力星", damage: 0, energyCost: [], effect: "【VSTAR Power】將對手的戰鬥寶可夢上的全部能量丟棄" }
    ],
    rarity: "VSTAR",
    quantity: 1,
    rating: 9.5
  },
  {
    id: "psychic-003",
    name: "胡地",
    nameEn: "Alakazam",
    category: "pokemon",
    type: "psychic",
    stage: "stage2",
    evolvesFrom: "勇基拉",
    hp: 150,
    weakness: "darkness",
    retreat: 1,
    abilities: [
      { name: "精神衝擊", damage: 120, energyCost: ["psychic", "colorless"], effect: null }
    ],
    ability: { name: "心靈感應", effect: "對手必須展示手牌" },
    rarity: "rare-holo",
    quantity: 1,
    rating: 6
  },

  // ==================== 格鬥屬性寶可夢 ====================
  {
    id: "fighting-001",
    name: "路卡利歐 V",
    nameEn: "Lucario V",
    category: "pokemon",
    type: "fighting",
    stage: "basic",
    hp: 210,
    weakness: "psychic",
    retreat: 2,
    abilities: [
      { name: "波導拳", damage: 40, energyCost: ["fighting"], effect: null },
      { name: "真空波", damage: 160, energyCost: ["fighting", "fighting", "colorless"], effect: null }
    ],
    rarity: "V",
    quantity: 2,
    rating: 8
  },
  {
    id: "fighting-002",
    name: "路卡利歐 VSTAR",
    nameEn: "Lucario VSTAR",
    category: "pokemon",
    type: "fighting",
    stage: "vstar",
    evolvesFrom: "路卡利歐 V",
    hp: 260,
    weakness: "psychic",
    retreat: 2,
    abilities: [
      { name: "鬥氣之星", damage: 0, energyCost: [], effect: "【VSTAR Power】從牌庫搜尋任意2張卡加入手牌" },
      { name: "撞擊碎裂", damage: 190, energyCost: ["fighting", "fighting", "colorless"], effect: null }
    ],
    rarity: "VSTAR",
    quantity: 1,
    rating: 9
  },

  // ==================== 惡屬性寶可夢 ====================
  {
    id: "darkness-001",
    name: "黑暗鴉 V",
    nameEn: "Murkrow V",
    category: "pokemon",
    type: "darkness",
    stage: "basic",
    hp: 200,
    weakness: "grass",
    retreat: 1,
    abilities: [
      { name: "暗影爪", damage: 60, energyCost: ["darkness"], effect: "隨機丟棄對手手牌中1張卡" },
      { name: "黑夜俯衝", damage: 140, energyCost: ["darkness", "darkness", "colorless"], effect: null }
    ],
    rarity: "V",
    quantity: 1,
    rating: 7
  },

  // ==================== 龍屬性寶可夢 ====================
  {
    id: "dragon-001",
    name: "雷希拉姆 V",
    nameEn: "Reshiram V",
    category: "pokemon",
    type: "dragon",
    stage: "basic",
    hp: 220,
    weakness: null,
    retreat: 2,
    abilities: [
      { name: "烈焰十字", damage: 100, energyCost: ["fire", "lightning"], effect: null },
      { name: "藍色閃焰", damage: 200, energyCost: ["fire", "fire", "lightning"], effect: "丟棄此寶可夢身上的2張能量" }
    ],
    rarity: "V",
    quantity: 1,
    rating: 8
  },

  // ==================== 無色屬性寶可夢 ====================
  {
    id: "colorless-001",
    name: "卡比獸",
    nameEn: "Snorlax",
    category: "pokemon",
    type: "colorless",
    stage: "basic",
    hp: 150,
    weakness: "fighting",
    retreat: 4,
    abilities: [
      { name: "翻滾壓制", damage: 100, energyCost: ["colorless", "colorless", "colorless"], effect: null }
    ],
    ability: { name: "厚脂肪", effect: "此寶可夢受到的傷害 -30" },
    rarity: "rare",
    quantity: 2,
    rating: 6.5
  },
  {
    id: "colorless-002",
    name: "波克基斯 V",
    nameEn: "Togekiss V",
    category: "pokemon",
    type: "colorless",
    stage: "basic",
    hp: 200,
    weakness: "lightning",
    retreat: 1,
    abilities: [
      { name: "白色風", damage: 0, energyCost: ["colorless"], effect: "從牌庫抽卡直到手牌達到8張" },
      { name: "力量衝擊", damage: 120, energyCost: ["colorless", "colorless", "colorless"], effect: null }
    ],
    rarity: "V",
    quantity: 1,
    rating: 7.5
  },

  // ==================== 鋼屬性寶可夢 ====================
  {
    id: "metal-001",
    name: "帝牙盧卡 V",
    nameEn: "Dialga V",
    category: "pokemon",
    type: "metal",
    stage: "basic",
    hp: 220,
    weakness: "fire",
    retreat: 2,
    abilities: [
      { name: "金屬爆裂", damage: 100, energyCost: ["metal", "metal"], effect: null },
      { name: "時空咆哮", damage: 180, energyCost: ["metal", "metal", "colorless", "colorless"], effect: null }
    ],
    rarity: "V",
    quantity: 1,
    rating: 7.5
  },

  // ==================== 訓練家卡 ====================
  {
    id: "trainer-001",
    name: "博士的研究",
    nameEn: "Professor's Research",
    category: "trainer",
    trainerType: "supporter",
    effect: "丟棄你的手牌，然後從牌庫抽7張卡",
    rarity: "uncommon",
    quantity: 4,
    rating: 10
  },
  {
    id: "trainer-002",
    name: "瑪俐",
    nameEn: "Marnie",
    category: "trainer",
    trainerType: "supporter",
    effect: "雙方將手牌放回牌庫底部，你抽5張卡，對手抽4張卡",
    rarity: "uncommon",
    quantity: 3,
    rating: 9
  },
  {
    id: "trainer-003",
    name: "老大的命令",
    nameEn: "Boss's Orders",
    category: "trainer",
    trainerType: "supporter",
    effect: "選擇對手備戰區的1隻寶可夢，將其與戰鬥寶可夢交換",
    rarity: "rare",
    quantity: 3,
    rating: 10
  },
  {
    id: "trainer-004",
    name: "快速球",
    nameEn: "Quick Ball",
    category: "trainer",
    trainerType: "item",
    effect: "丟棄手牌中1張卡，從牌庫搜尋1隻基礎寶可夢放入手牌",
    rarity: "uncommon",
    quantity: 4,
    rating: 9.5
  },
  {
    id: "trainer-005",
    name: "超級球",
    nameEn: "Ultra Ball",
    category: "trainer",
    trainerType: "item",
    effect: "丟棄手牌中2張卡，從牌庫搜尋任意1隻寶可夢放入手牌",
    rarity: "uncommon",
    quantity: 4,
    rating: 9.5
  },
  {
    id: "trainer-006",
    name: "進化薰香",
    nameEn: "Evolution Incense",
    category: "trainer",
    trainerType: "item",
    effect: "從牌庫搜尋1隻進化寶可夢放入手牌",
    rarity: "uncommon",
    quantity: 3,
    rating: 8
  },
  {
    id: "trainer-007",
    name: "交換",
    nameEn: "Switch",
    category: "trainer",
    trainerType: "item",
    effect: "將你的戰鬥寶可夢與備戰區的1隻寶可夢交換",
    rarity: "common",
    quantity: 4,
    rating: 8
  },
  {
    id: "trainer-008",
    name: "能量回收",
    nameEn: "Energy Recycler",
    category: "trainer",
    trainerType: "item",
    effect: "從棄牌堆選擇最多5張基本能量卡洗入牌庫",
    rarity: "uncommon",
    quantity: 2,
    rating: 7
  },
  {
    id: "trainer-009",
    name: "大型斗篷",
    nameEn: "Big Charm",
    category: "trainer",
    trainerType: "tool",
    effect: "此寶可夢的最大 HP +30",
    rarity: "uncommon",
    quantity: 2,
    rating: 7
  },
  {
    id: "trainer-010",
    name: "強力頭帶",
    nameEn: "Choice Belt",
    category: "trainer",
    trainerType: "tool",
    effect: "此寶可夢對 V 寶可夢的傷害 +30",
    rarity: "uncommon",
    quantity: 3,
    rating: 8.5
  },
  {
    id: "trainer-011",
    name: "極巨化結晶",
    nameEn: "VMAX Crystal",
    category: "trainer",
    trainerType: "item",
    effect: "從棄牌堆將1張VMAX寶可夢加入手牌",
    rarity: "rare",
    quantity: 2,
    rating: 7.5
  },
  {
    id: "trainer-012",
    name: "風暴山谷",
    nameEn: "Stormy Mountains",
    category: "trainer",
    trainerType: "stadium",
    effect: "每回合，每位玩家可從牌庫搜尋1隻基礎雷屬性或龍屬性寶可夢放到備戰區",
    rarity: "uncommon",
    quantity: 2,
    rating: 8
  },
  {
    id: "trainer-013",
    name: "巨大熔爐",
    nameEn: "Giant Hearth",
    category: "trainer",
    trainerType: "stadium",
    effect: "每回合，每位玩家可丟棄1張手牌，然後從牌庫搜尋2張火能量卡加入手牌",
    rarity: "uncommon",
    quantity: 2,
    rating: 8.5
  },
  {
    id: "trainer-014",
    name: "奧利薇",
    nameEn: "Irida",
    category: "trainer",
    trainerType: "supporter",
    effect: "從牌庫搜尋1張水屬性寶可夢和1張道具卡加入手牌",
    rarity: "rare",
    quantity: 2,
    rating: 8
  },
  {
    id: "trainer-015",
    name: "薰衣草回收",
    nameEn: "Rescue Carrier",
    category: "trainer",
    trainerType: "item",
    effect: "從棄牌堆回收最多3隻 HP 90 以下的寶可夢到手牌",
    rarity: "uncommon",
    quantity: 2,
    rating: 6
  },

  // ==================== 能量卡 ====================
  {
    id: "energy-fire",
    name: "火能量",
    nameEn: "Fire Energy",
    category: "energy",
    type: "fire",
    energyType: "basic",
    rarity: "energy",
    quantity: 15,
    rating: 5
  },
  {
    id: "energy-water",
    name: "水能量",
    nameEn: "Water Energy",
    category: "energy",
    type: "water",
    energyType: "basic",
    rarity: "energy",
    quantity: 12,
    rating: 5
  },
  {
    id: "energy-lightning",
    name: "雷能量",
    nameEn: "Lightning Energy",
    category: "energy",
    type: "lightning",
    energyType: "basic",
    rarity: "energy",
    quantity: 12,
    rating: 5
  },
  {
    id: "energy-grass",
    name: "草能量",
    nameEn: "Grass Energy",
    category: "energy",
    type: "grass",
    energyType: "basic",
    rarity: "energy",
    quantity: 10,
    rating: 5
  },
  {
    id: "energy-psychic",
    name: "超能量",
    nameEn: "Psychic Energy",
    category: "energy",
    type: "psychic",
    energyType: "basic",
    rarity: "energy",
    quantity: 10,
    rating: 5
  },
  {
    id: "energy-fighting",
    name: "鬥能量",
    nameEn: "Fighting Energy",
    category: "energy",
    type: "fighting",
    energyType: "basic",
    rarity: "energy",
    quantity: 8,
    rating: 5
  },
  {
    id: "energy-darkness",
    name: "惡能量",
    nameEn: "Darkness Energy",
    category: "energy",
    type: "darkness",
    energyType: "basic",
    rarity: "energy",
    quantity: 6,
    rating: 5
  },
  {
    id: "energy-metal",
    name: "鋼能量",
    nameEn: "Metal Energy",
    category: "energy",
    type: "metal",
    energyType: "basic",
    rarity: "energy",
    quantity: 6,
    rating: 5
  },
  {
    id: "energy-double",
    name: "雙無色能量",
    nameEn: "Double Colorless Energy",
    category: "energy",
    type: "colorless",
    energyType: "special",
    effect: "提供2個無色能量",
    rarity: "uncommon",
    quantity: 4,
    rating: 8
  }
];

// ============================================================
// 預組牌組配方
// ============================================================

const PRESET_DECKS = {
  "fire-vmax": {
    name: "噴火龍 VMAX 爆焰牌組",
    description: "以噴火龍 VMAX 為核心的超高火力牌組，利用巨大熔爐快速充能，一擊 300 傷害摧毀一切！",
    strategy: "speed-aggro",
    cards: [
      { id: "fire-002", qty: 1 },  // 噴火龍 VMAX
      { id: "fire-001", qty: 2 },  // 噴火龍 V
      { id: "fire-003", qty: 2 },  // 火伊布 V
      { id: "fire-006", qty: 3 },  // 六尾 (引火加速)
      { id: "fire-007", qty: 2 },  // 九尾 (抽卡引擎)
      { id: "colorless-002", qty: 1 }, // 波克基斯 V (抽卡)
      { id: "trainer-001", qty: 4 }, // 博士的研究
      { id: "trainer-002", qty: 3 }, // 瑪俐
      { id: "trainer-003", qty: 3 }, // 老大的命令
      { id: "trainer-004", qty: 4 }, // 快速球
      { id: "trainer-005", qty: 4 }, // 超級球
      { id: "trainer-006", qty: 2 }, // 進化薰香
      { id: "trainer-007", qty: 3 }, // 交換
      { id: "trainer-008", qty: 2 }, // 能量回收
      { id: "trainer-010", qty: 2 }, // 強力頭帶
      { id: "trainer-013", qty: 2 }, // 巨大熔爐
      { id: "energy-fire", qty: 12 }, // 火能量
      { id: "energy-double", qty: 2 }, // 雙無色能量
    ]
  },
  "psychic-control": {
    name: "超夢 VSTAR 控制牌組",
    description: "以超夢 VSTAR 為核心的控制型牌組，利用 VSTAR Power 剝奪對手能量，掌控遊戲節奏。",
    strategy: "control",
    cards: [
      { id: "psychic-002", qty: 1 }, // 超夢 VSTAR
      { id: "psychic-001", qty: 2 }, // 超夢 V
      { id: "colorless-002", qty: 1 }, // 波克基斯 V
      { id: "colorless-001", qty: 1 }, // 卡比獸
      { id: "trainer-001", qty: 4 }, // 博士的研究
      { id: "trainer-002", qty: 3 }, // 瑪俐
      { id: "trainer-003", qty: 3 }, // 老大的命令
      { id: "trainer-004", qty: 4 }, // 快速球
      { id: "trainer-005", qty: 4 }, // 超級球
      { id: "trainer-007", qty: 4 }, // 交換
      { id: "trainer-009", qty: 2 }, // 大型斗篷
      { id: "trainer-010", qty: 3 }, // 強力頭帶
      { id: "trainer-008", qty: 2 }, // 能量回收
      { id: "trainer-011", qty: 1 }, // 極巨化結晶
      { id: "energy-psychic", qty: 10 }, // 超能量
      { id: "energy-double", qty: 2 }, // 雙無色能量
    ]
  },
  "lucario-fighting": {
    name: "路卡利歐 VSTAR 格鬥牌組",
    description: "以路卡利歐 VSTAR 為核心的穩定攻擊牌組，VSTAR Power 可搜尋任意2張卡，靈活應對各種局面。",
    strategy: "midrange",
    cards: [
      { id: "fighting-002", qty: 1 }, // 路卡利歐 VSTAR
      { id: "fighting-001", qty: 2 }, // 路卡利歐 V
      { id: "fire-003", qty: 1 },     // 火伊布 V (副攻手)
      { id: "colorless-002", qty: 1 }, // 波克基斯 V
      { id: "colorless-001", qty: 1 }, // 卡比獸
      { id: "trainer-001", qty: 4 },   // 博士的研究
      { id: "trainer-002", qty: 3 },   // 瑪俐
      { id: "trainer-003", qty: 3 },   // 老大的命令
      { id: "trainer-004", qty: 4 },   // 快速球
      { id: "trainer-005", qty: 4 },   // 超級球
      { id: "trainer-007", qty: 4 },   // 交換
      { id: "trainer-010", qty: 3 },   // 強力頭帶
      { id: "trainer-009", qty: 2 },   // 大型斗篷
      { id: "energy-fighting", qty: 8 }, // 鬥能量
      { id: "energy-fire", qty: 3 },     // 火能量
      { id: "energy-double", qty: 2 },   // 雙無色能量
    ]
  }
};
