const categories = [
  { id: "basics", title: "Python asoslari", icon: "🐍", questions: [
    { text: "Python’da butun sonning ma’lumot turi qaysi?", options: ["str", "int", "float", "bool"], answer: 1, explanation: "Butun sonlar int turida saqlanadi." },
    { text: "len('Python') natijasi nechiga teng?", options: ["5", "6", "7", "Xatolik"], answer: 1, explanation: "Python so‘zida 6 ta belgi bor." },
    { text: "Bir qatorli izoh qaysi belgi bilan boshlanadi?", options: ["//", "#", "/*", "--"], answer: 1, explanation: "Python izohi # belgisi bilan boshlanadi." },
  ] },
  { id: "variables", title: "O‘zgaruvchilar", icon: "📦", questions: [
    { text: "Qaysi o‘zgaruvchi nomi to‘g‘ri yozilgan?", options: ["2son", "my-name", "my_name", "class"], answer: 2, explanation: "Nom raqam bilan boshlanmaydi, tire ishlatmaydi va kalit so‘z bo‘lmasligi kerak." },
    { text: "x = 3; x = x + 2 dan keyin x nechiga teng?", options: ["3", "5", "6", "Xatolik"], answer: 1, explanation: "3 ga 2 qo‘shiladi, natijada x = 5 bo‘ladi." },
    { text: "a, b = 1, 2 yozuvi nimani anglatadi?", options: ["a va b ga mos ravishda 1 va 2 beriladi", "Faqat a yaratiladi", "Matn birlashadi", "Xatolik beradi"], answer: 0, explanation: "Bu Python’dagi bir vaqtda qiymat tayinlash usuli." },
  ] },
  { id: "flow", title: "Shartlar va sikllar", icon: "🔁", questions: [
    { text: "range(3) qaysi sonlarni beradi?", options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3"], answer: 1, explanation: "range(3) 0 dan boshlanadi, 3 ni qo‘shmaydi." },
    { text: "Siklni darhol to‘xtatadigan kalit so‘z qaysi?", options: ["skip", "return", "break", "stop"], answer: 2, explanation: "break eng yaqin siklni yakunlaydi." },
    { text: "for i in range(1, 4) sikli necha marta ishlaydi?", options: ["2", "3", "4", "1"], answer: 1, explanation: "Sikl 1, 2 va 3 qiymatlarida ishlaydi." },
  ] },
  { id: "functions", title: "Funksiyalar", icon: "⚙️", questions: [
    { text: "Python’da funksiya e’lon qilish kalit so‘zi qaysi?", options: ["func", "def", "function", "lambda"], answer: 1, explanation: "Oddiy funksiya def kalit so‘zi bilan e’lon qilinadi." },
    { text: "return ishlatilmagan funksiya nimani qaytaradi?", options: ["0", "False", "None", "Bo‘sh matn"], answer: 2, explanation: "Qiymat qaytarmagan funksiya avtomatik None qaytaradi." },
    { text: "add(2, 3) funksiyasi a + b ni qaytarsa, natija nima?", options: ["23", "5", "2", "None"], answer: 1, explanation: "2 + 3 = 5." },
  ] },
  { id: "collections", title: "Ro‘yxat va lug‘at", icon: "🧺", questions: [
    { text: "Qaysi tuzilma tartibli va o‘zgartirilishi mumkin?", options: ["tuple", "list", "set", "frozenset"], answer: 1, explanation: "list tartibli va o‘zgaruvchan ketma-ketlik." },
    { text: "len({1, 1, 2}) qiymati nechiga teng?", options: ["1", "2", "3", "Xatolik"], answer: 1, explanation: "set takroriy elementlarni saqlamaydi: {1, 2}." },
    { text: "d.get('x', 0) da x kaliti topilmasa nima qaytadi?", options: ["KeyError", "None har doim", "0", "False"], answer: 2, explanation: "get() kalit topilmaganda berilgan standart qiymatni qaytaradi." },
  ] },
  { id: "strings", title: "Matnlar", icon: "🔤", questions: [
    { text: "'python'.upper() natijasi nima?", options: ["'Python'", "'PYTHON'", "'python'", "Xatolik"], answer: 1, explanation: "upper() barcha harflarni katta harfga o‘tkazadi." },
    { text: "'salom'[1] qaysi belgini qaytaradi?", options: ["'s'", "'a'", "'l'", "'o'"], answer: 1, explanation: "Python indekslari 0 dan boshlanadi." },
    { text: "'py' in 'python' ifodasi nima qaytaradi?", options: ["True", "False", "'py'", "Xatolik"], answer: 0, explanation: "in operatori matn ichida qismmatn mavjudligini tekshiradi." },
  ] },
  { id: "errors", title: "Xato va modullar", icon: "🧩", questions: [
    { text: "Nolga bo‘lish qanday xatoni keltirib chiqaradi?", options: ["ValueError", "ZeroDivisionError", "TypeError", "NameError"], answer: 1, explanation: "Sonni nolga bo‘lish ZeroDivisionError xatosiga sabab bo‘ladi." },
    { text: "Xatoni ushlash uchun qaysi blok ishlatiladi?", options: ["catch", "except", "error", "rescue"], answer: 1, explanation: "Python’da try blokidan keyin except xatolarni ushlaydi." },
    { text: "import math as m yozuvi nimani bildiradi?", options: ["math moduliga m taxallusi beriladi", "m fayli yaratiladi", "math o‘chiriladi", "Funksiya chaqiriladi"], answer: 0, explanation: "as modulni shu kod ichida qisqa nom bilan ishlatish imkonini beradi." },
  ] },
  { id: "oop", title: "Obyektlar (OOP)", icon: "🧱", questions: [
    { text: "Python’da klass e’lon qilish kalit so‘zi qaysi?", options: ["object", "class", "struct", "type"], answer: 1, explanation: "Klass class kalit so‘zi bilan e’lon qilinadi." },
    { text: "Metod ichidagi self odatda nimani bildiradi?", options: ["Klassning o‘zini", "Joriy obyekt nusxasini", "Ota klassni", "Modulni"], answer: 1, explanation: "self metod chaqirilayotgan joriy obyekt nusxasini anglatadi." },
    { text: "Yangi obyektning boshlang‘ich holatini sozlaydigan metod qaysi?", options: ["__start__", "__init__", "__newclass__", "__main__"], answer: 1, explanation: "__init__ yangi obyektning boshlang‘ich holatini sozlaydi." },
  ] },
  { id: "html", title: "HTML", icon: "🌐", questions: [
    { text: "HTML hujjatining eng katta sarlavhasi qaysi teg bilan yoziladi?", options: ["<head>", "<h1>", "<title>", "<header>"], answer: 1, explanation: "<h1> sahifadagi eng yuqori darajadagi sarlavha uchun ishlatiladi." },
    { text: "Navigatsiya havolasi yaratishda qaysi teg va atribut ishlatiladi?", options: ["<link src='...'>", "<a href='...'>", "<nav url='...'>", "<route to='...'>"], answer: 1, explanation: "<a> havola yaratadi, href esa manzilni ko‘rsatadi." },
    { text: "HTML form yuborilganda serverga ma’lumot jo‘natish uchun qaysi atributlar muhim?", options: ["id va class", "name va method", "style va title", "alt va width"], answer: 1, explanation: "name maydon nomini, method esa GET yoki POST kabi so‘rov usulini belgilaydi." },
  ] },
  { id: "css", title: "CSS", icon: "🎨", questions: [
    { text: "Matn rangini o‘zgartiradigan CSS xususiyati qaysi?", options: ["font-style", "color", "background", "text-size"], answer: 1, explanation: "color matn rangini belgilaydi." },
    { text: "CSS Grid’da elementlarni 3 teng ustunga joylash qaysi yozuv bilan mumkin?", options: ["grid-template-columns: repeat(3, 1fr)", "display: columns(3)", "grid: 3 equal", "columns: 1fr 3"], answer: 0, explanation: "repeat(3, 1fr) uchta teng kenglikdagi ustun hosil qiladi." },
    { text: "Quyidagi selektorlardan qaysi biri specificity bo‘yicha eng kuchli?", options: [".menu a", "#menu a", "nav a:hover", "a"], answer: 1, explanation: "ID selektori class, pseudo-class va element selektorlaridan yuqori specificityga ega." },
  ] },
  { id: "bootstrap", title: "Bootstrap", icon: "🅱️", questions: [
    { text: "Bootstrap’da tugmaga standart ko‘k ko‘rinish beruvchi klass qaysi?", options: [".button-blue", ".btn-primary", ".primary-button", ".btn-blue"], answer: 1, explanation: ".btn va .btn-primary klasslari Bootstrap tugma komponentini yaratadi." },
    { text: "Bootstrap grid tizimida qator (row) ichida ustunlar qaysi klass bilan yoziladi?", options: [".col-*", ".grid-*", ".cell-*", ".span-*"], answer: 0, explanation: ".col-* klasslari row ichida grid ustunlarini belgilaydi." },
    { text: "Elementni faqat md breakpoint va undan kattada ko‘rsatish uchun qaysi klass mos?", options: [".d-none .d-md-block", ".d-md-none", ".show-md-only", ".visible-md"], answer: 0, explanation: ".d-none yashiradi, .d-md-block esa md va undan katta breakpointlarda ko‘rsatadi." },
  ] },
  { id: "django", title: "Django", icon: "🟩", questions: [
    { text: "Django loyihasini yaratish uchun odatda qaysi buyruq ishlatiladi?", options: ["django start", "django-admin startproject", "python new django", "django create app"], answer: 1, explanation: "django-admin startproject loyiha skeletini yaratadi." },
    { text: "Django ORM’da barcha obyektlarni olish uchun qaysi yozuv ishlatiladi?", options: ["Model.all()", "Model.objects.all()", "Model.get_all()", "db.select(Model)"], answer: 1, explanation: "Model.objects.all() QuerySet orqali barcha yozuvlarni oladi." },
    { text: "Django template formida CSRF token kiritish tegi qaysi?", options: ["{{ csrf }}", "{% csrf_token %}", "{% secure_post %}", "{{ request.csrf }}"], answer: 1, explanation: "{% csrf_token %} formaga token qo‘shadi; CSRF middleware ham yoqilgan bo‘lishi kerak." },
  ] },
];

const difficultyOrder = ["easy", "medium", "hard"];
const difficultyNames = { easy: "Oson", medium: "O‘rta", hard: "Qiyin" };
for (const category of categories) {
  category.questions = category.questions.map((question, index) => ({
    ...question,
    difficulty: question.difficulty || difficultyOrder[index % difficultyOrder.length],
  }));
}

const screens = {
  home: document.querySelector("#home-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
  flashcards: document.querySelector("#flashcards-screen"),
  mistakes: document.querySelector("#mistakes-screen"),
};
const telegramUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
const STORAGE_KEY = `python-quiz-progress-v1:${telegramUserId || "guest"}`;
const state = { questions: [], category: "", index: 0, score: 0, answered: false, mode: "regular" };
let selectedDifficulty = "all";
const letters = ["A", "B", "C", "D"];
const flashcards = [
  ["Variable", "O‘zgaruvchida saqlanadigan, keyin foydalanish mumkin bo‘lgan qiymat. Masalan: age = 18"],
  ["List", "Tartibli va o‘zgartiriladigan elementlar ketma-ketligi. Masalan: colors = ['qizil', 'ko‘k']"],
  ["Tuple", "Tartibli, ammo yaratilgandan keyin o‘zgarmaydigan ketma-ketlik. Masalan: point = (3, 5)"],
  ["Dictionary", "Kalit va qiymat juftliklarini saqlaydi. Masalan: user = {'name': 'Ali'}"],
  ["Function", "Qayta ishlatish mumkin bo‘lgan nomlangan kod bloki. def bilan yaratiladi."],
  ["Loop", "Bir kod qismini takror bajaradi. Python’da for va while sikllari bor."],
  ["Exception", "Dastur ishlashi paytida yuzaga keladigan xato holati; try/except bilan boshqariladi."],
  ["Class", "Obyektlar yaratish uchun andoza; ma’lumot va metodlarni birlashtiradi."],
];

function readProgress() {
  const empty = { xp: 0, streak: 0, lastActiveDate: "", dailyCompleted: "", quizzes: 0, correct: 0, mistakes: [] };
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!stored || typeof stored !== "object" || Array.isArray(stored)) return empty;
    return {
      xp: Number.isFinite(stored.xp) ? stored.xp : 0,
      streak: Number.isFinite(stored.streak) ? stored.streak : 0,
      lastActiveDate: typeof stored.lastActiveDate === "string" ? stored.lastActiveDate : "",
      dailyCompleted: typeof stored.dailyCompleted === "string" ? stored.dailyCompleted : "",
      quizzes: Number.isFinite(stored.quizzes) ? stored.quizzes : 0,
      correct: Number.isFinite(stored.correct) ? stored.correct : 0,
      mistakes: Array.isArray(stored.mistakes) ? stored.mistakes.filter((item) => item && typeof item.text === "string") : [],
    };
  } catch (error) {
    console.warn("Saqlangan natijalarni o‘qib bo‘lmadi:", error);
    return empty;
  }
}

let progress = readProgress();

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Natijalarni qurilmada saqlab bo‘lmadi:", error);
  }
  renderProgress();
}

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function renderProgress() {
  document.querySelector("#stat-xp").textContent = String(progress.xp);
  document.querySelector("#stat-streak").textContent = String(progress.streak);
  document.querySelector("#stat-quizzes").textContent = String(progress.quizzes);
  document.querySelector("#mistake-count").textContent = String(progress.mistakes.length);
  const completedToday = progress.lastActiveDate === localDateString() && progress.dailyCompleted === localDateString();
  document.querySelector("#daily-title").textContent = completedToday ? "Kunlik sinov bajarildi!" : "Kunlik sinov";
  document.querySelector("#daily-button").innerHTML = completedToday ? "Yana ishlash <span>↻</span>" : "Boshlash <span>→</span>";
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("hidden", key !== name);
  });
  if (window.Telegram?.WebApp) {
    if (name === "home") window.Telegram.WebApp.BackButton.hide();
    else window.Telegram.WebApp.BackButton.show();
  }
  if (name === "mistakes") renderMistakes();
  if (name === "flashcards") renderFlashcard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategories() {
  const grid = document.querySelector("#category-grid");
  grid.replaceChildren(...categories.map((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    const count = selectedDifficulty === "all"
      ? category.questions.length
      : category.questions.filter((question) => question.difficulty === selectedDifficulty).length;
    const levelLabel = selectedDifficulty === "all" ? "barcha darajalar" : difficultyNames[selectedDifficulty];
    button.innerHTML = `<span class="category-icon">${category.icon}</span><span><span class="category-title">${category.title}</span><span class="category-subtitle">${count} ta savol · ${levelLabel}</span></span>`;
    button.addEventListener("click", () => startQuiz(category.id));
    return button;
  }));
}

function startQuiz(categoryId, mode = "regular") {
  const fullPool = categoryId === "mixed" || mode === "daily"
    ? categories.flatMap((category) => category.questions.map((question) => ({ ...question, category: category.title })))
    : categories.find((category) => category.id === categoryId).questions.map((question) => ({ ...question, category: categories.find((category) => category.id === categoryId).title }));
  const pool = mode === "daily" || selectedDifficulty === "all"
    ? fullPool
    : fullPool.filter((question) => question.difficulty === selectedDifficulty);
  if (mode === "daily") {
    const dateSeed = Number(localDateString().replaceAll("-", ""));
    const startIndex = dateSeed % pool.length;
    state.questions = Array.from({ length: 5 }, (_, index) => pool[(startIndex + index) % pool.length]);
  } else {
    state.questions = shuffle(pool).slice(0, categoryId === "mixed" ? 10 : pool.length);
  }
  state.category = categoryId === "mixed" ? "Aralash sinov" : categories.find((category) => category.id === categoryId).title;
  if (mode === "daily") state.category = "Kunlik sinov · barcha mavzular";
  state.mode = mode;
  state.index = 0;
  state.score = 0;
  state.answered = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.index];
  document.querySelector("#quiz-category").textContent = state.category;
  document.querySelector("#quiz-counter").textContent = `${state.index + 1} / ${state.questions.length}`;
  document.querySelector("#question-number").textContent = String(state.index + 1).padStart(2, "0");
  const difficultyBadge = document.querySelector("#question-difficulty");
  difficultyBadge.textContent = difficultyNames[question.difficulty];
  difficultyBadge.className = `question-difficulty difficulty-${question.difficulty}`;
  document.querySelector("#question-text").textContent = question.text;
  document.querySelector("#progress-bar").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  document.querySelector("#answer-feedback").classList.add("hidden");
  document.querySelector("#continue-button").classList.add("hidden");
  state.answered = false;

  const answerList = document.querySelector("#answer-list");
  answerList.replaceChildren(...question.options.map((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = letters[index];
    const label = document.createElement("span");
    label.textContent = option;
    button.append(letter, label);
    button.addEventListener("click", () => chooseAnswer(index));
    return button;
  }));
}

function chooseAnswer(choice) {
  if (state.answered) return;
  state.answered = true;
  const question = state.questions[state.index];
  const answerButtons = [...document.querySelectorAll(".answer-option")];
  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    else if (index === choice) button.classList.add("incorrect");
  });

  const isCorrect = choice === question.answer;
  if (isCorrect) {
    state.score += 1;
  } else {
    const mistake = { text: question.text, answer: question.options[question.answer], explanation: question.explanation, category: question.category || state.category, difficulty: question.difficulty };
    if (!progress.mistakes.some((item) => item.text === mistake.text)) progress.mistakes.unshift(mistake);
    progress.mistakes = progress.mistakes.slice(0, 50);
    saveProgress();
  }
  const feedback = document.querySelector("#answer-feedback");
  feedback.innerHTML = `<strong>${isCorrect ? "✅ To‘g‘ri javob!" : "💡 Keyingi safar!"}</strong>${question.explanation}`;
  feedback.classList.remove("hidden");
  const continueButton = document.querySelector("#continue-button");
  continueButton.querySelector("span").textContent = "→";
  continueButton.firstChild.textContent = state.index === state.questions.length - 1 ? "Natijani ko‘rish " : "Keyingi savol ";
  continueButton.classList.remove("hidden");
}

function showResult() {
  const total = state.questions.length;
  const percent = Math.round((state.score / total) * 100);
  const outcome = percent >= 80
    ? { emoji: "🏆", title: "Zo‘r natija!", message: "Python bilimlaringiz juda mustahkam!" }
    : percent >= 50
      ? { emoji: "✨", title: "Yaxshi ketayapti!", message: "Yana biroz mashq qilsangiz, yanada zo‘r bo‘ladi." }
      : { emoji: "🌱", title: "Yaxshi boshlanish!", message: "Har bir urinish sizni kuchliroq dasturchi qiladi." };
  document.querySelector("#result-emoji").textContent = outcome.emoji;
  document.querySelector("#result-title").textContent = outcome.title;
  document.querySelector("#result-message").textContent = `${state.category} bo‘yicha natijangiz`;
  document.querySelector("#result-score").textContent = `${state.score}/${total}`;
  document.querySelector("#result-percent").textContent = `${percent}% to‘g‘ri javob`;
  progress.quizzes += 1;
  progress.correct += state.score;
  progress.xp += state.score * 10 + 5;
  const today = localDateString();
  const yesterday = localDateString(new Date(Date.now() - 86400000));
  progress.streak = progress.lastActiveDate === today
    ? progress.streak
    : progress.lastActiveDate === yesterday ? progress.streak + 1 : 1;
  progress.lastActiveDate = today;
  if (state.mode === "daily") progress.dailyCompleted = today;
  saveProgress();
  showScreen("result");
}

let flashcardIndex = 0;
let flashcardFlipped = false;

function renderFlashcard() {
  document.querySelector("#flashcard-counter").textContent = `${flashcardIndex + 1} / ${flashcards.length}`;
  document.querySelector("#flashcard-side").textContent = flashcardFlipped ? "TA’RIF" : "ATAMA";
  document.querySelector("#flashcard-content").textContent = flashcards[flashcardIndex][flashcardFlipped ? 1 : 0];
  document.querySelector("#flashcard-hint").textContent = flashcardFlipped ? "Keyingi kartaga o‘ting →" : "Javobini ko‘rish uchun bosing ↻";
  document.querySelector("#flashcard").classList.toggle("flipped", flashcardFlipped);
}

function renderMistakes() {
  const list = document.querySelector("#mistakes-list");
  document.querySelector("#mistakes-heading-count").textContent = `${progress.mistakes.length} TA`;
  document.querySelector("#empty-mistakes").classList.toggle("hidden", progress.mistakes.length > 0);
  document.querySelector("#clear-mistakes").classList.toggle("hidden", progress.mistakes.length === 0);
  list.replaceChildren(...progress.mistakes.map((mistake) => {
    const card = document.createElement("article");
    card.className = "mistake-card";
    const category = document.createElement("span");
    category.className = "mistake-category";
    category.textContent = mistake.category;
    const question = document.createElement("strong");
    question.textContent = mistake.text;
    const answer = document.createElement("p");
    answer.textContent = `Javob: ${mistake.answer}`;
    const explanation = document.createElement("small");
    explanation.textContent = mistake.explanation;
    card.append(category, question, answer, explanation);
    return card;
  }));
}

document.querySelector("#mixed-button").addEventListener("click", () => startQuiz("mixed"));
document.querySelector("#difficulty-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-difficulty]");
  if (!button) return;
  selectedDifficulty = button.dataset.difficulty;
  document.querySelectorAll(".difficulty-option").forEach((option) => {
    option.classList.toggle("selected", option === button);
  });
  renderCategories();
});
document.querySelector("#daily-button").addEventListener("click", () => startQuiz("basics", "daily"));
document.querySelector("#flashcards-button").addEventListener("click", () => {
  flashcardIndex = 0;
  flashcardFlipped = false;
  showScreen("flashcards");
});
document.querySelector("#mistakes-button").addEventListener("click", () => showScreen("mistakes"));
document.querySelectorAll(".home-back-button").forEach((button) => button.addEventListener("click", () => showScreen("home")));
document.querySelector("#flashcard").addEventListener("click", () => {
  flashcardFlipped = !flashcardFlipped;
  renderFlashcard();
});
document.querySelector("#flashcard-prev").addEventListener("click", () => {
  flashcardIndex = (flashcardIndex + flashcards.length - 1) % flashcards.length;
  flashcardFlipped = false;
  renderFlashcard();
});
document.querySelector("#flashcard-next").addEventListener("click", () => {
  flashcardIndex = (flashcardIndex + 1) % flashcards.length;
  flashcardFlipped = false;
  renderFlashcard();
});
document.querySelector("#clear-mistakes").addEventListener("click", () => {
  progress.mistakes = [];
  saveProgress();
  renderMistakes();
});
document.querySelector("#back-button").addEventListener("click", () => showScreen("home"));
document.querySelector("#continue-button").addEventListener("click", () => {
  if (state.index === state.questions.length - 1) showResult();
  else {
    state.index += 1;
    renderQuestion();
  }
});
document.querySelector("#again-button").addEventListener("click", () => startQuiz("mixed"));
document.querySelector("#home-button").addEventListener("click", () => showScreen("home"));
window.Telegram?.WebApp?.BackButton.onClick(() => showScreen("home"));

const playerName = window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name;
if (playerName) document.querySelector("#player-name").textContent = playerName.toLocaleUpperCase("uz");
if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}
renderCategories();
renderProgress();
