// ===== DATA =====
// Point the image paths at your ORIGINAL character renders.
// e.g. "img/virtual/miku.png" etc.
const UNITS = {
  virtualSinger: [
    {
      id: "miku",
      ja: "初音ミク",
      en: "HATSUNE MIKU",
      vert: "HATSUNE MIKU",
      stage: 10,
      accent: "#00c7ff",
      accentSoft: "rgba(0,199,255,0.24)",
      progress: 0.6,
      img: "img/vs_miku.png"
    },
    {
      id: "rin",
      ja: "鏡音リン",
      en: "KAGAMINE RIN",
      vert: "KAGAMINE RIN",
      stage: 10,
      accent: "#fecb3a",
      accentSoft: "rgba(254,203,58,0.24)",
      progress: 0.6,
      img: "img/vs_rin.png"
    },
    {
      id: "len",
      ja: "鏡音レン",
      en: "KAGAMINE LEN",
      vert: "KAGAMINE LEN",
      stage: 5,
      accent: "#ffc73b",
      accentSoft: "rgba(255,199,59,0.24)",
      progress: 0.3,
      img: "img/vs_len.png"
    },
    {
      id: "luka",
      ja: "巡音ルカ",
      en: "MEGURINE LUKA",
      vert: "MEGURINE LUKA",
      stage: 5,
      accent: "#ff9ad0",
      accentSoft: "rgba(255,154,208,0.24)",
      progress: 0.3,
      img: "img/vs_luka.png"
    },
    {
      id: "meiko",
      ja: "MEIKO",
      en: "MEIKO",
      vert: "MEIKO",
      stage: 8,
      accent: "#ff4a48",
      accentSoft: "rgba(255,74,72,0.24)",
      progress: 0.45,
      img: "img/vs_meiko.png"
    },
    {
      id: "kaito",
      ja: "KAITO",
      en: "KAITO",
      vert: "KAITO",
      stage: 7,
      accent: "#1a85ff",
      accentSoft: "rgba(26,133,255,0.24)",
      progress: 0.4,
      img: "img/vs_kaito.png"
    }
  ],
  leoNeed: [
    {
      id: "ichika",
      ja: "星乃 一歌",
      en: "HOSHINO ICHIKA",
      vert: "HOSHINO ICHIKA",
      stage: 16,
      accent: "#44a7ff",
      accentSoft: "rgba(68,167,255,0.24)",
      progress: 0.7,
      img: "img/leo_ichika.png"
    },
    {
      id: "saki",
      ja: "天馬 咲希",
      en: "TENMA SAKI",
      vert: "TENMA SAKI",
      stage: 8,
      accent: "#ffd359",
      accentSoft: "rgba(255,211,89,0.24)",
      progress: 0.4,
      img: "img/leo_saki.png"
    },
    {
      id: "honami",
      ja: "望月 穂波",
      en: "MOCHIZUKI HONAMI",
      vert: "MOCHIZUKI HONAMI",
      stage: 7,
      accent: "#ff6b70",
      accentSoft: "rgba(255,107,112,0.24)",
      progress: 0.35,
      img: "img/leo_honami.png"
    },
    {
      id: "shiho",
      ja: "日野森 志歩",
      en: "HINOMORI SHIHO",
      vert: "HINOMORI SHIHO",
      stage: 12,
      accent: "#7ed36d",
      accentSoft: "rgba(126,211,109,0.24)",
      progress: 0.55,
      img: "img/leo_shiho.png"
    }
  ],
  moreMoreJump: [
    {
      id: "minori",
      ja: "花里 みのり",
      en: "HANASATO MINORI",
      vert: "HANASATO MINORI",
      stage: 11,
      accent: "#f5b469",
      accentSoft: "rgba(245,180,105,0.24)",
      progress: 0.5,
      img: "img/mmj_minori.png"
    },
    {
      id: "haruka",
      ja: "桐谷 遥",
      en: "KIRITANI HARUKA",
      vert: "KIRITANI HARUKA",
      stage: 42,
      accent: "#73caff",
      accentSoft: "rgba(115,202,255,0.24)",
      progress: 1,
      img: "img/mmj_haruka.png"
    },
    {
      id: "airi",
      ja: "桃井 愛莉",
      en: "MOMOI AIRI",
      vert: "MOMOI AIRI",
      stage: 11,
      accent: "#ff83b6",
      accentSoft: "rgba(255,131,182,0.24)",
      progress: 0.5,
      img: "img/mmj_airi.png"
    },
    {
      id: "shizuku",
      ja: "日野森 雫",
      en: "HINOMORI SHIZUKU",
      vert: "HINOMORI SHIZUKU",
      stage: 11,
      accent: "#7dcfd5",
      accentSoft: "rgba(125,207,213,0.24)",
      progress: 0.5,
      img: "img/mmj_shizuku.png"
    }
  ],
  vividBadSquad: [
    {
      id: "kohane",
      ja: "小豆沢 こはね",
      en: "AZUSAWA KOHANE",
      vert: "AZUSAWA KOHANE",
      stage: 5,
      accent: "#ff87bf",
      accentSoft: "rgba(255,135,191,0.24)",
      progress: 0.3,
      img: "img/vbs_kohane.png"
    },
    {
      id: "an",
      ja: "白石 杏",
      en: "SHIRAISHI AN",
      vert: "SHIRAISHI AN",
      stage: 9,
      accent: "#54d7ff",
      accentSoft: "rgba(84,215,255,0.24)",
      progress: 0.4,
      img: "img/vbs_an.png"
    },
    {
      id: "akito",
      ja: "東雲 彰人",
      en: "SHINONOME AKITO",
      vert: "SHINONOME AKITO",
      stage: 4,
      accent: "#ffaf54",
      accentSoft: "rgba(255,175,84,0.24)",
      progress: 0.25,
      img: "img/vbs_akito.png"
    },
    {
      id: "toya",
      ja: "青柳 冬弥",
      en: "AOYAGI TOYA",
      vert: "AOYAGI TOYA",
      stage: 5,
      accent: "#6cc9ff",
      accentSoft: "rgba(108,201,255,0.24)",
      progress: 0.3,
      img: "img/vbs_toya.png"
    }
  ],
  wonderlandsXShowtime: [
    {
      id: "tsukasa",
      ja: "天馬 司",
      en: "TENMA TSUKASA",
      vert: "TENMA TSUKASA",
      stage: 5,
      accent: "#ffc94e",
      accentSoft: "rgba(255,201,78,0.24)",
      progress: 0.3,
      img: "img/wxs_tsukasa.png"
    },
    {
      id: "emu",
      ja: "鳳 えむ",
      en: "OTORI EMU",
      vert: "OTORI EMU",
      stage: 7,
      accent: "#ff7dc3",
      accentSoft: "rgba(255,125,195,0.24)",
      progress: 0.4,
      img: "img/wxs_emu.png"
    },
    {
      id: "nene",
      ja: "草薙 寧々",
      en: "KUSANAGI NENE",
      vert: "KUSANAGI NENE",
      stage: 13,
      accent: "#5dd594",
      accentSoft: "rgba(93,213,148,0.24)",
      progress: 0.6,
      img: "img/wxs_nene.png"
    },
    {
      id: "rui",
      ja: "神代 類",
      en: "KAMISHIRO RUI",
      vert: "KAMISHIRO RUI",
      stage: 4,
      accent: "#a787ff",
      accentSoft: "rgba(167,135,255,0.24)",
      progress: 0.25,
      img: "img/wxs_rui.png"
    }
  ],
  nightcord: [
    {
      id: "kanade",
      ja: "宵崎 奏",
      en: "YOISAKI KANADE",
      vert: "YOISAKI KANADE",
      stage: 17,
      accent: "#f090c8",
      accentSoft: "rgba(240,144,200,0.24)",
      progress: 0.7,
      img: "img/25n_kanade.png"
    },
    {
      id: "mafuyu",
      ja: "朝比奈 まふゆ",
      en: "ASAHINA MAFUYU",
      vert: "ASAHINA MAFUYU",
      stage: 13,
      accent: "#7bb2ff",
      accentSoft: "rgba(123,178,255,0.24)",
      progress: 0.55,
      img: "img/25n_mafuyu.png"
    },
    {
      id: "ena",
      ja: "東雲 絵名",
      en: "SHINONOME ENA",
      vert: "SHINONOME ENA",
      stage: 10,
      accent: "#dec188",
      accentSoft: "rgba(222,193,136,0.24)",
      progress: 0.45,
      img: "img/25n_ena.png"
    },
    {
      id: "mizuki",
      ja: "暁山 瑞希",
      en: "AKIYAMA MIZUKI",
      vert: "AKIYAMA MIZUKI",
      stage: 9,
      accent: "#caa0ff",
      accentSoft: "rgba(202,160,255,0.24)",
      progress: 0.4,
      img: "img/25n_mizuki.png"
    }
  ]
};

// ===== DOM HOOKS =====
const cardStrip = document.getElementById("cardStrip");
const unitTabs = Array.from(document.querySelectorAll(".unit-tab"));
const overlay = document.getElementById("selectionOverlay");
const selectionText = document.getElementById("selectionText");

let currentUnit = "virtualSinger";

// ===== RENDERING =====

function createCard(char) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--accent", char.accent);
  card.style.setProperty("--accent-soft", char.accentSoft);
  card.style.setProperty("--stage-progress", char.progress);
  card.dataset.charId = char.id;

  // card inner HTML (structure matches design)
  card.innerHTML = `
    <div class="card-bg"></div>
    <div class="card-panel" data-vlabel="${char.vert}"></div>
    <div class="card-strip-accent"></div>
    <div class="card-accent-diagonal"></div>
    <img class="card-art" src="${char.img}" alt="${char.en}">
    <div class="card-info">
      <div class="stage-row">
        <div class="stage-badge">
          <span class="stage-label">STAGE</span>
          <span class="stage-number">${char.stage}</span>
        </div>
        <div class="stage-progress">
          <div class="stage-bar"></div>
        </div>
      </div>
      <div class="name-tag">
        <div class="name-ja">${char.ja}</div>
        <div class="name-en">${char.en}</div>
      </div>
    </div>
  `;

  // click handler
  card.addEventListener("click", () => {
    // remove previous selection
    document
      .querySelectorAll(".card.selected")
      .forEach((c) => c.classList.remove("selected"));

    // trigger animation class
    card.classList.add("selected");

    // centered overlay text
    selectionText.textContent = `${char.ja} / ${char.en}`;
    overlay.classList.add("show");
  });

  return card;
}

function renderUnit(unitKey) {
  const chars = UNITS[unitKey] || [];
  cardStrip.innerHTML = "";
  cardStrip.classList.remove("slide");
  void cardStrip.offsetWidth; // force reflow to restart animation
  cardStrip.classList.add("slide");

  chars.forEach((ch) => {
    cardStrip.appendChild(createCard(ch));
  });
}

// ===== INIT =====
renderUnit(currentUnit);

// sidebar interactions
unitTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const unit = tab.dataset.unit;
    if (unit === currentUnit) return;
    currentUnit = unit;

    // update active tab
    unitTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    renderUnit(currentUnit);
  });
});

// overlay close
overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
});
