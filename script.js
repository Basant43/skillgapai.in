// ===============================
// ADDITIONAL CAREERS
// ===============================

careerData.packagingDesigner = {
  title: "Packaging Designer",
  demand: "Very high demand",
  score: "91%",
  salary: "INR 3L - 14L",

  note:
    "Packaging design is growing rapidly in FMCG, pharma, cosmetics, and ecommerce industries.",

  must: [
    "Dieline design",
    "Print production",
    "Brand packaging",
    "Mockup presentation",
    "Material understanding"
  ],

  gaps: [
    "3D packaging",
    "Luxury branding",
    "Shelf impact thinking",
    "AI-assisted concepts"
  ],

  roadmap: [
    ["Month 1", "Learn packaging structure, labels, print formats, and dielines."],
    ["Month 2", "Create FMCG and medicine packaging projects with variants."],
    ["Month 3", "Build a premium Behance-style packaging portfolio."]
  ],

  projects: [
    ["Medicine packaging", "Design pharma packaging with print-ready layout and hierarchy."],
    ["FMCG redesign", "Redesign a snack or beverage product with modern branding."],
    ["Luxury cosmetic pack", "Create premium packaging with mockups and product story."]
  ],

  solutions: [
    ["Shelf impact study", "Explain why your packaging stands out among competitors."],
    ["Print-ready proof", "Show CMYK setup, bleed, cutting marks, and production thinking."],
    ["Mockup storytelling", "Present realistic 3D packaging mockups with branding context."]
  ]
};

careerData.motionDesigner = {
  title: "Motion Designer",
  demand: "High demand",
  score: "83%",
  salary: "INR 4L - 12L",

  note:
    "Brands need reels, ads, UI animation, and motion content for social media growth.",

  must: [
    "After Effects",
    "Video editing",
    "Motion graphics",
    "Typography animation",
    "Social ads"
  ],

  gaps: [
    "3D motion",
    "Storyboarding",
    "Sound design",
    "Brand animation systems"
  ],

  roadmap: [
    ["Month 1", "Learn transitions, typography animation, and reels editing."],
    ["Month 2", "Create product ads and social media animations."],
    ["Month 3", "Build a showreel portfolio with commercial-style edits."]
  ],

  projects: [
    ["Instagram ad reel", "Create a premium product advertisement reel."],
    ["UI animation", "Animate app onboarding and interactions."],
    ["Brand intro", "Create animated logo and identity motion system."]
  ],

  solutions: [
    ["Fast-paced edits", "Use rhythm, cuts, and motion hierarchy professionally."],
    ["Commercial feel", "Create premium ad style with cinematic timing."],
    ["Portfolio reel", "Build a 30-second strong motion showcase."]
  ]
};

careerData.aiEngineer = {
  title: "AI Engineer",
  demand: "Extremely high demand",
  score: "95%",
  salary: "INR 8L - 30L",

  note:
    "AI engineering demand is growing rapidly across startups and enterprise companies.",

  must: [
    "Python",
    "Machine learning",
    "LLM APIs",
    "Prompt engineering",
    "AI automation"
  ],

  gaps: [
    "Model deployment",
    "Vector databases",
    "AI agents",
    "Fine tuning"
  ],

  roadmap: [
    ["Month 1", "Learn Python, APIs, and machine learning basics."],
    ["Month 2", "Build AI tools using OpenAI or Gemini APIs."],
    ["Month 3", "Deploy AI projects with real workflows and dashboards."]
  ],

  projects: [
    ["AI chatbot", "Build a smart AI assistant with memory and workflow."],
    ["Resume analyzer", "Create ATS resume analysis system."],
    ["AI dashboard", "Build analytics dashboard with AI-generated insights."]
  ],

  solutions: [
    ["Real-world workflows", "Focus on automation instead of tutorial-only projects."],
    ["Deployment proof", "Host projects publicly with clean UI and documentation."],
    ["Business use cases", "Solve actual company problems using AI systems."]
  ]
};

careerData.cybersecurityAnalyst = {
  title: "Cybersecurity Analyst",
  demand: "Very high demand",
  score: "89%",
  salary: "INR 5L - 18L",

  note:
    "Companies are investing heavily in digital security and data protection.",

  must: [
    "Network security",
    "Linux",
    "Threat analysis",
    "Security tools",
    "Ethical hacking basics"
  ],

  gaps: [
    "Cloud security",
    "SOC workflows",
    "Automation",
    "Threat intelligence"
  ],

  roadmap: [
    ["Month 1", "Learn networking, Linux, and security basics."],
    ["Month 2", "Practice vulnerability scanning and system hardening."],
    ["Month 3", "Build security reports and incident analysis projects."]
  ],

  projects: [
    ["Security dashboard", "Create SOC monitoring dashboard concept."],
    ["Threat analysis report", "Analyze attack vectors and prevention methods."],
    ["Linux hardening", "Secure a Linux system with best practices."]
  ],

  solutions: [
    ["Hands-on labs", "Practice using virtual labs and simulations."],
    ["Security documentation", "Create professional audit reports."],
    ["Real attack scenarios", "Understand practical company risks and defense."]
  ]
};

// ===============================
// AI ASSISTANT
// ===============================

const assistantToggle =
  document.getElementById("aiAssistantToggle");

const assistantBox =
  document.getElementById("aiAssistantBox");

const assistantSend =
  document.getElementById("assistantSend");

const assistantInput =
  document.getElementById("assistantInput");

const assistantMessages =
  document.getElementById("assistantMessages");

// OPEN CLOSE CHAT

if (assistantToggle) {

  assistantToggle.addEventListener("click", () => {

    assistantBox.style.display =
      assistantBox.style.display === "flex"
        ? "none"
        : "flex";

  });

}

// SMART REPLIES

const assistantReplies = {

  salary: `
Most high-income careers today are:
AI Engineer,
UI/UX Designer,
Data Analyst,
Cybersecurity,
Packaging Designer,
and Digital Marketing.
`,

  freelance: `
Freelancing grows faster when you build:
real projects,
strong portfolio,
client communication,
and niche specialization.
`,

  portfolio: `
A strong portfolio should show:
real projects,
problem solving,
before-after transformation,
and business thinking.
`,

  roadmap: `
The best roadmap is:
learn → build → prove → apply.
Avoid only watching tutorials.
`,

  ai: `
AI skills are becoming important in almost every career.
Learn AI-assisted workflows early.
`,

  default: `
Focus on practical skills,
real projects,
and industry demand instead of random certificates.
`
};

// SEND MESSAGE

if (assistantSend) {

  assistantSend.addEventListener("click", () => {

    const text =
      assistantInput.value
        .toLowerCase()
        .trim();

    if (!text) return;

    // USER MESSAGE

    const userMessage =
      document.createElement("div");

    userMessage.className =
      "assistant-message user";

    userMessage.textContent = text;

    assistantMessages.appendChild(userMessage);

    // BOT REPLY

    let reply = assistantReplies.default;

    if (text.includes("salary")) {

      reply = assistantReplies.salary;

    }

    else if (
      text.includes("freelance") ||
      text.includes("client")
    ) {

      reply = assistantReplies.freelance;

    }

    else if (
      text.includes("portfolio") ||
      text.includes("project")
    ) {

      reply = assistantReplies.portfolio;

    }

    else if (
      text.includes("roadmap") ||
      text.includes("learn")
    ) {

      reply = assistantReplies.roadmap;

    }

    else if (
      text.includes("ai")
    ) {

      reply = assistantReplies.ai;

    }

    const botMessage =
      document.createElement("div");

    botMessage.className =
      "assistant-message bot";

    setTimeout(() => {

      botMessage.textContent = reply;

      assistantMessages.appendChild(botMessage);

      assistantMessages.scrollTop =
        assistantMessages.scrollHeight;

    }, 500);

    assistantInput.value = "";

  });

}