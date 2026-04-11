const els = {
  template: document.getElementById("template"),
  role: document.getElementById("role"),
  goal: document.getElementById("goal"),
  context: document.getElementById("context"),
  audience: document.getElementById("audience"),
  tone: document.getElementById("tone"),
  output: document.getElementById("output"),
  constraints: document.getElementById("constraints"),
  result: document.getElementById("result"),
  build: document.getElementById("build"),
  clear: document.getElementById("clear"),
  copy: document.getElementById("copy"),
  download: document.getElementById("download"),
  save: document.getElementById("save"),
  saved: document.getElementById("saved")
};

const templates = [
  {
    name: "General (Best Default)",
    role: "Expert problem-solver and clear communicator",
    goal: "Create the best possible output based on the context",
    audience: "General audience",
    tone: "Clear, direct, professional",
    output: "A structured answer with steps and examples",
    constraints: "Be realistic. If something is weak, critique it and improve it. No fluff."
  },
  {
    name: "Recruiter + Resume Writer",
    role: "Executive resume writer and technical recruiter",
    goal: "Rewrite and optimize a resume for ATS and interviews",
    audience: "Hiring manager and recruiter",
    tone: "Confident, concise, metric-driven",
    output: "Scorecard + immediate fixes + rewritten bullets + final resume",
    constraints: "Be strict. Flag inconsistencies and risks. Use ATS-safe formatting."
  },
  {
    name: "Freelancing & Online Jobs Mentor",
    role: "Freelancing coach and online income strategist",
    goal: "Create a realistic plan to earn online quickly",
    audience: "Beginner from Pakistan",
    tone: "Direct, encouraging, practical",
    output: "7-day plan + scripts + platforms + daily targets",
    constraints: "Avoid paid subscriptions/connects. Focus on fast income paths."
  },
  {
    name: "Doctor (Explain Simply)",
    role: "Doctor explaining to a 12-year-old",
    goal: "Explain the topic in simple words",
    audience: "A beginner",
    tone: "Simple, calm, clear",
    output: "Short explanation + do/don't list",
    constraints: "Avoid complex medical words. Use examples."
  },
  {
    name: "Fashion Photographer (Cinematic Prompt)",
    role: "Luxury fashion photographer and cinematic director",
    goal: "Create a high-end image/video generation prompt",
    audience: "Creative team",
    tone: "Premium, cinematic, precise",
    output: "Prompt + camera directions + lighting + negative prompt",
    constraints: "No spelling mistakes. Keep it clean and professional."
  },
  {
    name: "AI Expert + Prompt Engineer",
    role: "AI expert and prompt engineer",
    goal: "Improve a prompt to produce consistent results",
    audience: "AI tool user",
    tone: "Technical but beginner-friendly",
    output: "Improved prompt + reasoning + variations",
    constraints: "Be honest about free-tier limitations."
  }
];

function fillTemplates() {
  els.template.innerHTML = templates.map((t, i) =>
    `<option value="${i}">${t.name}</option>`
  ).join("");
}

function applyTemplate(index) {
  const t = templates[index];
  els.role.value = t.role;
  els.goal.value = t.goal;
  els.audience.value = t.audience;
  els.tone.value = t.tone;
  els.output.value = t.output;
  els.constraints.value = t.constraints;
}

function buildPrompt() {
  const role = els.role.value.trim() || "(add role)";
  const goal = els.goal.value.trim() || "(add goal)";
  const context = els.context.value.trim() || "(add context)";
  const audience = els.audience.value.trim() || "(add audience)";
  const tone = els.tone.value.trim() || "(add tone)";
  const output = els.output.value.trim() || "(add output)";
  const constraints = els.constraints.value.trim() || "(add constraints)";

  const prompt =
`ROLE:
${role}

GOAL:
${goal}

AUDIENCE:
${audience}

CONTEXT:
${context}

OUTPUT REQUIREMENTS:
${output}

CONSTRAINTS:
${constraints}

QUALITY CHECK:
- Make it realistic and actionable
- Ask 1-3 clarifying questions if needed
- Provide a strong final answer even with limited info`;

  els.result.textContent = prompt;
  return prompt;
}

function clearAll() {
  els.role.value = "";
  els.goal.value = "";
  els.context.value = "";
  els.audience.value = "";
  els.tone.value = "";
  els.output.value = "";
  els.constraints.value = "";
  els.result.textContent = "";
}

function copyPrompt() {
  navigator.clipboard.writeText(els.result.textContent || "").then(() => {
    alert("Copied!");
  });
}

function downloadTxt() {
  const text = els.result.textContent || "";
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "prompt.txt";
  a.click();
  URL.revokeObjectURL(url);
}

const STORAGE_KEY = "promptBuilderSaved";

function loadSaved() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const items = raw ? JSON.parse(raw) : [];
  renderSaved(items);
}

function renderSaved(items) {
  if (!items.length) {
    els.saved.innerHTML = `<div class="savedItem"><small>No saved prompts yet.</small></div>`;
    return;
  }

  els.saved.innerHTML = items.map((item, idx) => `
    <div class="savedItem">
      <div class="row">
        <small><b>${escapeHtml(item.title)}</b></small>
        <div>
          <button data-load="${idx}">Load</button>
          <button data-del="${idx}">Delete</button>
        </div>
      </div>
      <small>${escapeHtml(item.preview)}</small>
    </div>
  `).join("");

  els.saved.querySelectorAll("button[data-load]").forEach(btn => {
    btn.addEventListener("click", () => {
      els.result.textContent = items[btn.dataset.load].text;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  els.saved.querySelectorAll("button[data-del]").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.del);
      items.splice(i, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      renderSaved(items);
    });
  });
}

function savePrompt() {
  const text = els.result.textContent || buildPrompt();
  const title = prompt("Name this prompt (example: Sobria follow-up email)") || "Saved Prompt";
  const preview = (text.replace(/\s+/g, " ").slice(0, 120) + "...");

  const raw = localStorage.getItem(STORAGE_KEY);
  const items = raw ? JSON.parse(raw) : [];
  items.unshift({ title, preview, text, savedAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  renderSaved(items);
  alert("Saved!");
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[m]));
}

/* Events */
fillTemplates();
applyTemplate(0);
loadSaved();

els.template.addEventListener("change", (e) => applyTemplate(Number(e.target.value)));
els.build.addEventListener("click", buildPrompt);
els.clear.addEventListener("click", clearAll);
els.copy.addEventListener("click", copyPrompt);
els.download.addEventListener("click", downloadTxt);
els.save.addEventListener("click", savePrompt);
