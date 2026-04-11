// ===== TEMPLATE DATA =====
const templateData = {
  ai_expert: {
    role: "World-class AI expert and master prompt engineer",
    goal: "Transform rough ideas into highly effective, professional AI prompts",
    context: "The user wants to improve their AI prompt results. They may have a basic idea or rough draft.",
    audience: "AI tool users (beginners to intermediate)",
    tone: "Expert",
    output: "Enhanced master prompt + explanation of improvements + 2 variations",
    constraints: "Make it clear, specific, and structured. Avoid jargon."
  },
  coder: {
    role: "Senior software engineer with 15+ years of experience",
    goal: "Help debug, write, or explain code in a clear and beginner-friendly way",
    context: "The user needs coding assistance. They may be stuck on a problem or learning something new.",
    audience: "Beginner to intermediate developers",
    tone: "Professional",
    output: "Working code with comments + step-by-step explanation + alternative approach",
    constraints: "Use simple variable names. Explain every step. Avoid complex terminology."
  },
  resume_writer: {
    role: "Certified professional resume writer and career coach",
    goal: "Transform basic job experience into powerful, ATS-optimized resume content",
    context: "The user wants to improve their resume to get more job interviews internationally.",
    audience: "Job seekers applying for remote international positions",
    tone: "Professional",
    output: "Rewritten resume bullet points with metrics + skills section + summary paragraph",
    constraints: "Use action verbs. Quantify achievements where possible. Keep ATS-friendly."
  },
  cover_letter: {
    role: "Professional career consultant and expert cover letter writer",
    goal: "Write a compelling, personalized cover letter that gets attention",
    context: "The user is applying for a job and needs a cover letter that stands out.",
    audience: "Hiring managers and recruiters",
    tone: "Professional",
    output: "Full cover letter (3 paragraphs) + subject line + follow-up message option",
    constraints: "Keep it under 400 words. Human-sounding. No clichés."
  },
  customer_support: {
    role: "Expert customer success and support specialist with 15+ years experience",
    goal: "Draft professional, empathetic responses that resolve customer issues",
    context: "A customer has raised a complaint or question that needs a professional response.",
    audience: "Customers (potentially frustrated or confused)",
    tone: "Empathetic and professional",
    output: "Professional response + de-escalation technique used + follow-up message",
    constraints: "Stay calm. Acknowledge the issue first. Offer a clear solution."
  },
  photographer: {
    role: "Award-winning luxury fashion photographer and creative director",
    goal: "Create a detailed, cinematic image generation prompt",
    context: "The user wants to generate a high-quality AI image for fashion, portrait, or creative purposes.",
    audience: "AI image tools (Midjourney, DALL-E, Gemini Imagine)",
    tone: "Creative and cinematic",
    output: "Full image prompt + camera settings + lighting description + negative prompt",
    constraints: "Include lens type, mood, color palette, and composition. No watermarks."
  },
  doctor: {
    role: "Experienced general practitioner and medical educator",
    goal: "Explain medical information clearly and safely in simple language",
    context: "The user has a medical question or wants to understand a health topic better.",
    audience: "General public (non-medical background)",
    tone: "Clear, reassuring, and accurate",
    output: "Simple explanation + when to see a doctor + lifestyle tips if relevant",
    constraints: "Always recommend professional consultation. Never diagnose. Keep it simple."
  },
  teacher: {
    role: "Experienced educator and curriculum designer",
    goal: "Explain complex topics in simple, easy-to-understand language",
    context: "The user wants to learn something new or understand a difficult concept.",
    audience: "Students or adult learners (beginner level)",
    tone: "Friendly and encouraging",
    output: "Simple explanation + real-life analogy + 3 key takeaways + quiz question",
    constraints: "Use everyday examples. Avoid jargon. Explain like teaching a 14-year-old."
  },
  content_creator: {
    role: "Viral content strategist and social media expert",
    goal: "Create engaging, shareable content ideas and captions",
    context: "The user wants to create content for social media or online platforms.",
    audience: "Social media followers and general internet users",
    tone: "Creative and engaging",
    output: "Content idea + caption + 5 hashtags + best posting time recommendation",
    constraints: "Keep captions under 150 words. Make it scroll-stopping."
  },
  sales: {
    role: "Elite sales consultant and persuasion expert",
    goal: "Create compelling sales messages, pitches, or outreach content",
    context: "The user needs help writing a sales email, pitch deck, or product description.",
    audience: "Potential customers or business decision-makers",
    tone: "Persuasive and professional",
    output: "Sales message + subject line + call-to-action + follow-up message",
    constraints: "Focus on benefits not features. Create urgency. Be honest."
  },
  data_analyst: {
    role: "Senior data analyst and business intelligence expert",
    goal: "Analyze data, create reports, or explain metrics clearly",
    context: "The user needs help understanding or presenting data insights.",
    audience: "Business stakeholders and management teams",
    tone: "Professional and precise",
    output: "Data analysis + key insights + visualization recommendations + action items",
    constraints: "Be specific with numbers. Focus on actionable insights."
  },
  storyteller: {
    role: "Published author and creative writing expert",
    goal: "Write compelling stories, narratives, or creative content",
    context: "The user wants help with creative writing, storytelling, or narrative development.",
    audience: "General readers",
    tone: "Creative and imaginative",
    output: "Story outline + opening paragraph + character descriptions + plot twist suggestion",
    constraints: "Show don't tell. Use vivid descriptions. Create emotional connection."
  }
};

// ===== EXAMPLE QUICK-LOAD DATA =====
const exampleData = {
  resume: {
    mode: 'simple',
    simple_role: 'Expert resume writer and career coach',
    simple_idea: 'Help me rewrite my resume bullet points for a customer support manager role. I have 15 years experience handling complaints, managing teams, and improving service workflows.',
    simple_format: 'bullet points'
  },
  email: {
    mode: 'simple',
    simple_role: 'Professional email writing expert',
    simple_idea: 'Write a polite professional email to a recruiter to reschedule an interview. The original time had a timezone confusion and I want to apologize and suggest a new time.',
    simple_format: 'professional email'
  },
  image: {
    mode: 'advanced',
    adv_role: 'Award-winning fashion photographer and cinematic director',
    adv_goal: 'Create a detailed AI image generation prompt for a luxury fashion editorial shoot',
    adv_context: 'The subject is a confident professional male in a dark navy suit. The setting is a modern luxury rooftop at golden hour.',
    adv_audience: 'Midjourney, DALL-E, Gemini Image Generator',
    adv_tone: 'Creative',
    adv_output: 'Full image prompt + camera details + lighting + negative prompt',
    adv_constraints: 'Cinematic quality. No text in image. Photorealistic. 8K resolution.'
  },
  support: {
    mode: 'simple',
    simple_role: 'Senior customer support specialist and customer success expert',
    simple_idea: 'Help me write a professional empathetic response to an angry customer who says their order has not arrived after 2 weeks and they are very frustrated.',
    simple_format: 'professional email'
  },
  medical: {
    mode: 'simple',
    simple_role: 'Experienced medical doctor and health educator',
    simple_idea: 'Explain what causes migraines and what are the best home remedies and when someone should see a doctor. Use very simple easy to understand language.',
    simple_format: 'step-by-step guide'
  },
  code: {
    mode: 'simple',
    simple_role: 'Senior software engineer and coding teacher',
    simple_idea: 'Help me understand how to create a simple website and host it for free on GitHub Pages. I am a complete beginner with zero coding experience.',
    simple_format: 'step-by-step guide'
  }
};

// ===== MODE SWITCHING =====
function setMode(mode) {
  document.getElementById('simpleFields').style.display = mode === 'simple' ? 'block' : 'none';
  document.getElementById('advancedFields').style.display = mode === 'advanced' ? 'block' : 'none';
  document.getElementById('simpleMode').classList.toggle('active', mode === 'simple');
  document.getElementById('advancedMode').classList.toggle('active', mode === 'advanced');
}

// ===== TEMPLATE LOADING =====
document.getElementById('template').addEventListener('change', function() {
  const t = templateData[this.value];
  if (!t) return;
  
  // Fill both simple and advanced fields
  document.getElementById('simple_role').value = t.role;
  document.getElementById('simple_idea').value = t.goal;
  
  document.getElementById('adv_role').value = t.role;
  document.getElementById('adv_goal').value = t.goal;
  document.getElementById('adv_context').value = t.context;
  document.getElementById('adv_audience').value = t.audience;
  document.getElementById('adv_output').value = t.output;
  document.getElementById('adv_constraints').value = t.constraints;
  
  // Set tone dropdown
  const toneSelect = document.getElementById('adv_tone');
  for (let option of toneSelect.options) {
    if (option.value === t.tone) { toneSelect.value = t.tone; break; }
  }
});

// ===== LOAD EXAMPLES =====
function loadExample(type) {
  const ex = exampleData[type];
  if (!ex) return;
  
  setMode(ex.mode);
  
  if (ex.mode === 'simple') {
    document.getElementById('simple_role').value = ex.simple_role || '';
    document.getElementById('simple_idea').value = ex.simple_idea || '';
    if (ex.simple_format) document.getElementById('simple_format').value = ex.simple_format;
  } else {
    document.getElementById('adv_role').value = ex.adv_role || '';
    document.getElementById('adv_goal').value = ex.adv_goal || '';
    document.getElementById('adv_context').value = ex.adv_context || '';
    document.getElementById('adv_audience').value = ex.adv_audience || '';
    document.getElementById('adv_output').value = ex.adv_output || '';
    document.getElementById('adv_constraints').value = ex.adv_constraints || '';
    if (ex.adv_tone) document.getElementById('adv_tone').value = ex.adv_tone;
  }
  
  document.querySelector('.tool-section').scrollIntoView({ behavior: 'smooth' });
}

// ===== BUILD PROMPT (THE MAIN FUNCTION) =====
function buildPrompt() {
  const isSimple = document.getElementById('simpleFields').style.display !== 'none';
  let finalPrompt = '';

  if (isSimple) {
    const idea = document.getElementById('simple_idea').value.trim();
    const role = document.getElementById('simple_role').value.trim();
    const format = document.getElementById('simple_format').value;

    if (!idea) {
      alert('Please describe what you want the AI to do.');
      document.getElementById('simple_idea').focus();
      return;
    }

    finalPrompt = `You are a ${role || 'world-class expert'}.

TASK:
${idea}

OUTPUT FORMAT:
Please provide your response as a ${format}.

QUALITY REQUIREMENTS:
- Be thorough, accurate, and practical
- Use clear, professional language
- Provide specific examples where relevant
- Structure the response for easy reading
- If anything is unclear, state your assumptions first

IMPORTANT:
Deliver the highest quality response possible. Think step by step before answering.`;

  } else {
    const role = document.getElementById('adv_role').value.trim();
    const goal = document.getElementById('adv_goal').value.trim();
    const context = document.getElementById('adv_context').value.trim();
    const audience = document.getElementById('adv_audience').value.trim();
    const tone = document.getElementById('adv_tone').value;
    const output = document.getElementById('adv_output').value.trim();
    const constraints = document.getElementById('adv_constraints').value.trim();

    if (!role || !goal) {
      alert('Please fill in at least the Role and Goal fields.');
      return;
    }

    finalPrompt = `ROLE:
You are a ${role}.

OBJECTIVE:
${goal}
${context ? `\nCONTEXT:\n${context}` : ''}
${audience ? `\nTARGET AUDIENCE:\n${audience}` : ''}

COMMUNICATION STYLE:
Use a ${tone.toLowerCase()} tone throughout the response.
${output ? `\nDELIVERABLE FORMAT:\n${output}` : ''}
${constraints ? `\nCONSTRAINTS:\n${constraints}` : ''}

QUALITY STANDARDS:
- Think deeply before responding
- Be specific and actionable, not vague
- Use structure (headers, bullets) for clarity
- Provide examples to illustrate key points
- If information is missing, state assumptions clearly`;
  }

  // Display the result
  document.getElementById('result').textContent = finalPrompt;
  document.getElementById('charCount').textContent = finalPrompt.length + ' characters';
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('resultBox').style.display = 'block';
  document.getElementById('resultBox').scrollIntoView({ behavior: 'smooth' });
}

// ===== COPY PROMPT =====
function copyPrompt() {
  const text = document.getElementById('result').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.btn-copy');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy Prompt'; }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Prompt copied!');
  });
}

// ===== DOWNLOAD PROMPT =====
function downloadPrompt() {
  const text = document.getElementById('result').textContent;
  if (!text) return;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'master-prompt-' + Date.now() + '.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// ===== SHARE PROMPT =====
function sharePrompt() {
  const text = document.getElementById('result').textContent;
  if (navigator.share) {
    navigator.share({ title: 'My AI Prompt', text: text });
  } else {
    copyPrompt();
    alert('Link copied to clipboard!');
  }
}

// ===== SAVE PROMPT =====
function savePrompt() {
  const text = document.getElementById('result').textContent;
  if (!text) {
    alert('Build a prompt first before saving!');
    return;
  }
  
  const saved = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
  saved.unshift({
    text: text,
    date: new Date().toLocaleString(),
    preview: text.substring(0, 80) + '...'
  });
  
  // Keep only last 10
  if (saved.length > 10) saved.pop();
  localStorage.setItem('savedPrompts', JSON.stringify(saved));
  displaySaved();
  
  const btn = document.querySelector('.action-buttons .btn-secondary:last-child');
  btn.textContent = '✅ Saved!';
  setTimeout(() => { btn.textContent = '💾 Save'; }, 2000);
}

// ===== DISPLAY SAVED PROMPTS =====
function displaySaved() {
  const saved = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
  const container = document.getElementById('savedList');
  
  if (!saved.length) {
    container.innerHTML = '<div class="no-saved">No saved prompts yet. Click Save after building a prompt.</div>';
    return;
  }
  
  container.innerHTML = saved.map((item, i) => `
    <div class="saved-item" onclick="loadSaved(${i})">
      <div class="saved-item-date">📅 ${item.date}</div>
      ${item.preview}
    </div>
  `).join('');
}

// ===== LOAD SAVED PROMPT =====
function loadSaved(index) {
  const saved = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
  if (saved[index]) {
    document.getElementById('result').textContent = saved[index].text;
    document.getElementById('charCount').textContent = saved[index].text.length + ' characters';
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('resultBox').scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== CLEAR SAVED =====
function clearSaved() {
  if (confirm('Clear all saved prompts?')) {
    localStorage.removeItem('savedPrompts');
    displaySaved();
  }
}

// ===== CLEAR FORM =====
function clearAll() {
  ['simple_idea', 'simple_role', 'adv_role', 'adv_goal', 'adv_context', 'adv_audience', 'adv_output', 'adv_constraints'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('template').value = '';
  document.getElementById('emptyState').style.display = 'block';
  document.getElementById('resultBox').style.display = 'none';
}

// ===== INIT =====
displaySaved();
