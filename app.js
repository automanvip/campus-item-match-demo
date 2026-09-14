const foundItems = [
  {
    id: "F-018",
    title: "蓝色透明水杯",
    category: "水杯",
    color: "蓝色",
    location: "操场",
    time: "早上",
    description: "蓝色透明塑料水杯，杯盖有一圈白色，早操后在操场东侧看到。",
  },
  {
    id: "F-011",
    title: "绿色运动水杯",
    category: "水杯",
    color: "绿色",
    location: "操场",
    time: "中午",
    description: "绿色不透明运动水杯，中午在篮球架附近捡到。",
  },
  {
    id: "F-025",
    title: "红色条纹笔袋",
    category: "笔袋",
    color: "红色",
    location: "图书馆",
    time: "下午",
    description: "红白条纹布质笔袋，上面有一个小船图案，下午在图书馆窗边看到。",
  },
  {
    id: "F-029",
    title: "黑色文具盒",
    category: "笔袋",
    color: "黑色",
    location: "教室",
    time: "放学",
    description: "黑色硬壳文具盒，有蓝色拉链，放学后在走廊窗台看到。",
  },
  {
    id: "F-032",
    title: "黄色星星挂件",
    category: "钥匙挂件",
    color: "黄色",
    location: "食堂",
    time: "中午",
    description: "黄色软塑料星星挂件，连着一个银色小圆环，中午在食堂门口捡到。",
  },
  {
    id: "F-036",
    title: "蓝白校服外套",
    category: "校服",
    color: "蓝色",
    location: "体育馆",
    time: "下午",
    description: "蓝白色校服外套，下午体育活动后留在体育馆北侧长椅上。",
  },
];

const lostReports = [
  {
    id: "L-104",
    title: "蓝色透明水杯",
    category: "水杯",
    color: "蓝色",
    location: "操场",
    time: "早上",
    description: "求助同学说：早操后水杯不见了，杯身蓝色透明，杯盖有一圈白色，可能落在操场。",
  },
  {
    id: "L-107",
    title: "红白条纹笔袋",
    category: "笔袋",
    color: "红色",
    location: "图书馆",
    time: "下午",
    description: "求助同学说：下午去过图书馆，一个红白条纹布笔袋不见了，表面有小船图案。",
  },
  {
    id: "L-112",
    title: "黄色星星挂件",
    category: "钥匙挂件",
    color: "黄色",
    location: "食堂",
    time: "中午",
    description: "求助同学说：中午在食堂附近丢了黄色星星挂件，上面连着银色小圆环。",
  },
  {
    id: "L-115",
    title: "黑色校服针织外套",
    category: "校服",
    color: "黑色",
    location: "教室",
    time: "下午",
    description: "求助同学说：下午在教室和走廊活动过，黑色针织校服外套没找到。",
  },
];

const samples = {
  bottle: {
    lostDescription: "我早操后在操场附近丢了一个蓝色透明水杯，杯盖上有一圈白色。",
    foundDescription: "我早操后在操场东侧捡到一个蓝色透明水杯，杯盖有一圈白色。",
    category: "水杯",
    color: "蓝色",
    location: "操场",
    time: "早上",
  },
  pencil: {
    lostDescription: "我下午去过图书馆，红白条纹的布笔袋不见了，上面有小船。",
    foundDescription: "我下午在图书馆窗边看到一个红白条纹的布笔袋，上面有小船。",
    category: "笔袋",
    color: "红色",
    location: "图书馆",
    time: "下午",
  },
  key: {
    lostDescription: "中午在食堂附近丢了一个黄色星星小挂件，上面连着银色圆环。",
    foundDescription: "中午在食堂门口捡到一个黄色星星小挂件，上面连着银色圆环。",
    category: "钥匙挂件",
    color: "黄色",
    location: "食堂",
    time: "中午",
  },
};

const dictionaries = {
  category: {
    "水杯": ["水杯", "杯子", "保温杯", "塑料杯", "运动杯"],
    "笔袋": ["笔袋", "文具盒", "笔盒", "笔袋"],
    "钥匙挂件": ["钥匙", "挂件", "钥匙圈", "小挂饰"],
    "校服": ["校服", "外套", "衣服", "衣物"],
    "书本": ["书", "书本", "练习册", "本子", "笔记本"],
  },
  color: {
    "蓝色": ["蓝色", "蓝白", "天蓝", "深蓝", "浅蓝"],
    "红色": ["红色", "红白", "朱红", "粉红"],
    "绿色": ["绿色", "草绿", "墨绿"],
    "黄色": ["黄色", "金黄", "橙黄"],
    "黑色": ["黑色", "黑灰"],
    "白色": ["白色", "米白"],
  },
  location: {
    "操场": ["操场", "跑道", "篮球架", "球场", "早操"],
    "食堂": ["食堂", "餐厅", "吃饭"],
    "图书馆": ["图书馆", "阅览室", "借书"],
    "教室": ["教室", "走廊", "楼道", "窗台"],
    "体育馆": ["体育馆", "室内球馆", "体育课"],
  },
  time: {
    "早上": ["早上", "早操", "早晨", "上午"],
    "中午": ["中午", "午休", "午饭"],
    "下午": ["下午", "午后"],
    "放学": ["放学", "放学后", "傍晚"],
  },
};

const distinctiveTerms = [
  "透明", "白色圈", "白色", "条纹", "小船", "硬壳", "拉链",
  "星星", "银色", "圆环", "软塑料", "塑料", "长椅", "窗边",
];

const form = document.querySelector("#match-form");
const descriptionInput = document.querySelector("#description");
const characterCount = document.querySelector("#character-count");
const resultsSection = document.querySelector("#results");
const resultList = document.querySelector("#result-list");
const extractedTags = document.querySelector("#extracted-tags");
const resetButton = document.querySelector("#reset-demo");
const toast = document.querySelector("#toast");
const photoInput = document.querySelector("#photo-input");
const photoPreview = document.querySelector("#photo-preview");

const normalizeText = (text) =>
  text
    .toLowerCase()
    .replace(/[\s，。！？、,.;:!?；：“”"'\-_/]+/g, "")
    .trim();

function inferField(text, dictionary) {
  const normalized = normalizeText(text);
  let best = "";
  let bestLength = 0;
  Object.entries(dictionary).forEach(([canonical, words]) => {
    words.forEach((word) => {
      if (normalized.includes(normalizeText(word)) && word.length > bestLength) {
        best = canonical;
        bestLength = word.length;
      }
    });
  });
  return best;
}

function extractFeatures(description) {
  const formData = new FormData(form);
  return {
    category: formData.get("category") || inferField(description, dictionaries.category),
    color: formData.get("color") || inferField(description, dictionaries.color),
    location: formData.get("location") || inferField(description, dictionaries.location),
    time: formData.get("time") || inferField(description, dictionaries.time),
    terms: distinctiveTerms.filter((term) => normalizeText(description).includes(normalizeText(term))),
  };
}

function scoreItem(features, item) {
  const weights = { category: 44, color: 20, location: 18, time: 8 };
  let earned = 0;
  let available = 0;
  const reasons = [];
  const mismatches = [];

  Object.entries(weights).forEach(([field, weight]) => {
    if (!features[field]) return;
    available += weight;
    if (features[field] === item[field]) {
      earned += weight;
      reasons.push(`${fieldLabel(field)}一致`);
    } else {
      mismatches.push(`${fieldLabel(field)}不同`);
    }
  });

  const itemText = normalizeText(item.description);
  const matchedTerms = features.terms.filter((term) => {
    const normalizedTerm = normalizeText(term);
    return itemText.includes(normalizedTerm) && !itemText.includes(`不${normalizedTerm}`);
  });
  if (features.terms.length) {
    available += 10;
    earned += (matchedTerms.length / features.terms.length) * 10;
    matchedTerms.slice(0, 2).forEach((term) => reasons.push(`特征“${term}”`));
  }

  if (!available) {
    return { score: 15, reasons: ["线索太少"], mismatches: ["请补充颜色或地点"] };
  }

  const evidenceFactor = Math.min(1, available / 75);
  const score = Math.round((earned / available) * 88 * evidenceFactor + 7);
  return { score: Math.max(5, Math.min(96, score)), reasons, mismatches };
}

function fieldLabel(field) {
  return { category: "类别", color: "颜色", location: "地点", time: "时间" }[field];
}

function renderResults(features) {
  const mode = new FormData(form).get("mode");
  const targetItems = mode === "found" ? lostReports : foundItems;
  const ranked = targetItems
    .map((item) => ({ item, ...scoreItem(features, item) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const featureEntries = [
    ["类别", features.category],
    ["颜色", features.color],
    ["地点", features.location],
    ["时间", features.time],
  ].filter(([, value]) => value);

  extractedTags.innerHTML = featureEntries.length
    ? featureEntries.map(([label, value]) => `<span>${label}：${escapeHtml(value)}</span>`).join("")
    : "<span>未提取到明确线索</span>";

  resultList.innerHTML = ranked
    .map(
      ({ item, score, reasons, mismatches }, index) => `
        <article class="result-card" style="animation-delay:${index * 80}ms">
          <div class="result-score" style="--score:${score}%">
            <b>${score}</b><span>匹配分</span>
          </div>
          <div class="result-copy">
            <header><h3>${escapeHtml(item.title)}</h3><span>演示编号 ${item.id}</span></header>
            <p>${escapeHtml(item.description)}</p>
            <div class="match-reasons">
              ${reasons.length ? reasons.map((reason) => `<span>${escapeHtml(reason)}</span>`).join("") : "<span>暂无相同特征</span>"}
              ${mismatches.slice(0, 1).map((reason) => `<span class="mismatch">${escapeHtml(reason)}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}

descriptionInput.addEventListener("input", () => {
  characterCount.textContent = `${descriptionInput.value.length} / 80`;
  descriptionInput.classList.remove("invalid");
});

document.querySelectorAll("[data-sample]").forEach((button) => {
  button.addEventListener("click", () => {
    const sample = samples[button.dataset.sample];
    const mode = new FormData(form).get("mode");
    const description = mode === "found" ? sample.foundDescription : sample.lostDescription;
    descriptionInput.value = description;
    characterCount.textContent = `${description.length} / 80`;
    ["category", "color", "location", "time"].forEach((field) => {
      document.querySelector(`#${field}`).value = sample[field];
    });
    showToast("已填入演示线索，点击“开始匹配”");
  });
});

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", () => {
    const isFound = input.value === "found" && input.checked;
    descriptionInput.placeholder = isFound
      ? "例如：我早操后在操场附近捡到一个蓝色透明水杯……"
      : "例如：我早操后在操场附近丢了一个蓝色透明水杯……";
    resultsSection.hidden = true;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const description = descriptionInput.value.trim();
  if (description.length < 4) {
    descriptionInput.classList.add("invalid");
    descriptionInput.focus();
    showToast("请先写一句简单描述");
    return;
  }
  renderResults(extractFeatures(description));
});

resetButton.addEventListener("click", () => {
  resultsSection.hidden = true;
  descriptionInput.focus();
  descriptionInput.scrollIntoView({ behavior: "smooth", block: "center" });
});

photoInput.addEventListener("change", () => {
  const [file] = photoInput.files;
  if (!file) {
    photoPreview.hidden = true;
    photoPreview.style.backgroundImage = "";
    return;
  }
  if (!file.type.startsWith("image/")) {
    showToast("请选择图片文件");
    photoInput.value = "";
    return;
  }
  const url = URL.createObjectURL(file);
  photoPreview.style.backgroundImage = `url("${url}")`;
  photoPreview.hidden = false;
  showToast("照片只在本机预览，没有上传");
});

document.querySelectorAll("[data-open-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.querySelector(`#${button.dataset.openDialog}`);
    if (typeof dialog.showModal === "function") dialog.showModal();
  });
});

document.querySelectorAll(".section-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".section-nav a").forEach((item) => item.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
