---
title: "RA Agent Shop"
tags:
  - agents
  - shop
  - automation
  - ai
  - services
  - pricing
related:
  - "[[AI Ecosystem]]"
  - "[[Projekte/Prompt Shop|Prompt Shop]]"
description: "107 agent skills, 144 scheduled automations, 18 agents in daily use. Every agent is a role, a workflow, a context layer and guardrails — sold as files you own."
reading_time: "9 min"
publish: true
date: 2026-07-09
updated: 2026-10-26
type: showcase
lang: en
semantic_class: showcase
see_also:
  - "[[Projekte/Prompt Shop]]"
  - "[[Projekte/Cron Shop]]"
  - "[[Projekte/Hook Shop]]"
  - "[[Projekte/AI Ecosystem Data Pipeline]]"
  - "[[AI Ecosystem]]"
relationship:
  - "references: [[AI Ecosystem]]"
  - "requires: [[Projekte/Cron Shop]]"
  - "requires: [[Projekte/Hook Shop]]"
  - "related_to: [[Projekte/Prompt Shop]]"
  - "related_to: [[Projekte/AI Ecosystem Data Pipeline]]"
---

###### Related: [[Projekte/Prompt Shop|Prompt Shop]] | [[Projekte/Cron Shop|Cron Shop]] | [[Projekte/Hook Shop|Hook Shop]] | [[Projekte/AI Ecosystem Data Pipeline|Data Pipeline]]

---

# RA Agent Shop

> Agents that live in a vault and work when nobody is watching. Not prompt snippets — complete specifications: role, workflow, context, guardrails, memory.

A prompt tells an AI what to do **once**. An agent has a **role**, a **workflow**, a **context layer** and **guardrails** — it runs on a schedule or on a file event, keeps state between sessions, and stops itself when a rule would be broken.

Everything on this page runs on this machine **before** it is offered: **107 agent skills installed**, **144 scheduled automations**, **18 agents in daily use**.

## The Complete Diagram

<div class="ra-diagram"><div class="ra-diagram-head"><span class="ra-overline">Agent Ecosystem &middot; One-Pager</span><h3>Anatomy of one agent — from trigger to output</h3><p>Six layers, every agent. Interactive: drag to pan, scroll or pinch to zoom, double-click to reset.</p></div><iframe src="/static/mental-maps/agent-ecosystem.html" style="width:100%;height:900px;border:0;background:#000;display:block" title="Agent ecosystem architecture"></iframe><div class="ra-diagram-foot"><span>4 trigger types</span><span>51.811 triples in context</span><span>14.180 RAG chunks</span><span>144 scheduled runs</span></div></div>

## What it looks like — a real daily note

<div class="ra-rows">
<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📸</span><h3>Inside a Daily Note — twelve sections, captured in Obsidian</h3><span class="ra-meta">demo vault · northlight engineering · 09.03.26</span></div>
<p>One day, twelve sections, eight agents writing into them. Not mock-ups: screenshots from the app itself, same theme (*Vanilla AMOLED*, gold accent, MADE TOMMY), same reading view. Fictional company, real structure.</p>
<div class="ra-box"><ul>
<li><strong>What you see:</strong> changed today, events with real timestamps, the plan, hour-by-hour tables, tasks with IDs, PC Workflow, money, the personal blocks, the 30-minute grid, the task index and the tracking table.</li>
<li><strong>Where:</strong> the full walk-through lives on its own page → <a href="/Projekte/System-Views">Inside a Daily Note</a>.</li>
</ul></div>
</div>
</div>

## The six layers

<div class="ra-rows">

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">⚡</span><h3>AG-1 · Triggers — what starts an agent</h3><span class="ra-meta">4 types · chat · cron · hook · bridge</span></div>
<p>An agent is not a chat window you remember to open. It wakes up on its own: a scheduled job, a file change, a message from my phone, or me asking for it.</p>
<div class="ra-box"><ul>
<li><strong>The four doors:</strong> chat (Hermes CLI or Telegram topic) · cron (144 enabled jobs, interval or expression) · watchdog on a vault path (`run_prompt: true`) · messaging bridge from WhatsApp or Telegram.</li>
<li><strong>The trigger only decides when it wakes up</strong> — never what it does. The same skill behaves identically whether it runs at 05:00 or because I typed a line.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🧩</span><h3>AG-2 · The skill — the part you actually buy</h3><span class="ra-meta">6 components · plain text</span></div>
<p>A skill file is `SKILL.md` plus the scripts it needs. No platform, no subscription, no hidden runtime: it runs on Hermes Agent and the vault side is just markdown.</p>
<div class="ra-box"><ul>
<li><strong>Six parts:</strong> role (who it is, its limits) · workflow (numbered steps, no shortcuts) · context rules (which notes, which graph queries, which memory tier) · guardrails (hard rules) · output contract (exact file, exact frontmatter) · memory (what it keeps between sessions).</li>
<li><strong>Reproducible, not creative:</strong> the same input produces the same file in the same folder — that is what makes an agent sellable and a prompt not.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🧠</span><h3>AG-3 · Context — three brains, one prompt</h3><span class="ra-meta">4.063 notes · 51.811 triples · 14.180 chunks</span></div>
<p>The agent never reads four thousand notes. It asks the knowledge graph for neighbours and the vector index for similar text, and gets a context block of a few hundred tokens.</p>
<div class="ra-box"><ul>
<li><strong>Three sources, fused:</strong> vault notes (frontmatter + wikilinks) · GraphDB over SPARQL via `sparql_bridge --kg-context` · vector RAG (e5-small → ChromaDB, fused by `hybrid_context.py`), plus three memory tiers.</li>
<li><strong>Cheap and precise:</strong> a small, cited context block keeps a run fast and stops the model from inventing the note it was supposed to read.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🛡️</span><h3>AG-4 · Execution and guardrails</h3><span class="ra-meta">5 hard rules · fail closed</span></div>
<p>Every run passes the same gate before anything leaves the machine. The gate is not advice in a prompt — it is checked in code, and a failure produces a report instead of a result.</p>
<div class="ra-box"><ul>
<li><strong>The five rules:</strong> privacy firewall (no money, diary, credentials or private contacts in public output) · GO before send (mail is drafted, never sent, until I answer) · red alerts only (monitors stay silent unless something is broken) · local by default · write-scope (each agent touches only the folders its skill declares).</li>
<li><strong>Failing closes the door:</strong> no "best effort" write, no silent partial run — the agent stops and says why.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📤</span><h3>AG-5 · Output — where the work lands</h3><span class="ra-meta">5 destinations · one loop</span></div>
<p>The result is not a paragraph in a chat that disappears. It is a file in the right folder, with frontmatter and links, ready for the graph to pick up on the next run.</p>
<div class="ra-box"><ul>
<li><strong>The destinations:</strong> vault note (frontmatter + wikilinks + folder) · Telegram topic per domain · blog page in Quartz · WhatsApp channel with its diagram as an image · Anki deck or calendar.</li>
<li><strong>The loop closes:</strong> the note goes back into the vault, the pipeline re-indexes it, and the next agent sees it as context — that is why the system gets better without retraining anything.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">⚙️</span><h3>AG-6 · Operations — the boring layer</h3><span class="ra-meta">144 cron jobs · 4 instruments</span></div>
<p>An agent that fails silently is worse than no agent. So the fleet watches itself: run history, healers, a log viewer and a nightly backup with a health check.</p>
<div class="ra-box"><ul>
<li><strong>The instruments:</strong> cron ticker with run history and failure delivery · healers and watchdogs (dead daemon, stale index, broken link) · RA Log Viewer (logs, memory/CPU, ecosystem tab) · Grafana with 5 SPARQL panels over the graph.</li>
<li><strong>Backups with a floor:</strong> GraphDB every Sunday at 4 AM, with an alert if the triple count drops below 35K — a backup you never test is a rumour.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📊</span><h3>Numbers behind the fleet</h3><span class="ra-meta">measured, not estimated</span></div>
<p>Everything on this page runs on this machine before it is offered — these are the live figures at the time of writing.</p>
<div class="ra-box"><ul>
<li><strong>The fleet:</strong> 107 agent skills installed, 18 in daily use, 144 enabled cron jobs out of 156 defined, four trigger types.</li>
<li><strong>The context:</strong> 4.063 notes, 51.811 triples, 14.180 RAG chunks, three memory tiers — plus log viewer, Grafana, health checks and a weekly backup.</li>
</ul></div>
</div>

</div>

<style>
.ra-rows{display:flex;flex-direction:column;gap:1.1rem;margin:1.2rem 0 1.6rem}
.ra-row{background:#0f0f0d;border:1px solid #2e2e28;border-radius:10px;padding:1rem 1.1rem 1.1rem;overflow:hidden}
.ra-row-head{display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.5rem}
.ra-row-head h3{margin:0;font-size:1.05rem;color:#f0c040;border:none;padding:0}
.ra-ic{font-size:1.1rem}
.ra-meta{font-size:.74rem;letter-spacing:.04em;text-transform:uppercase;color:#8f8f80}
.ra-row p{margin:.15rem 0 .7rem;font-size:.92rem;line-height:1.55;color:#d8d8cc}
.ra-box{background:#141410;border:1px solid #33332b;border-left:3px solid #c4ab00;border-radius:6px;padding:.55rem .9rem .55rem 1.1rem;margin:0 0 .3rem}
.ra-box ul{margin:.25rem 0;padding-left:1.05rem}
.ra-box li{font-size:.86rem;line-height:1.5;color:#bdbdb0;margin:.3rem 0}
.ra-box li strong{color:#e8e8dd}
.ra-row img{display:block;width:100%;height:auto;border:1px solid #26261f;border-radius:6px;background:#000;margin-top:.85rem}
@media all and (max-width:760px){
  .ra-row{padding:.85rem .8rem .9rem}
  .ra-row-head h3{font-size:.98rem}
  .ra-row p{font-size:.88rem}
  .ra-box li{font-size:.83rem}
}
</style>

---

## What is in the catalog

These are agents that already run here — grouped by the job they replace, not by technology.

<div class="ra-rows">

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🇩🇪</span><h3>German learning</h3><span class="ra-meta">7 agents · ~734 cards generated</span></div>
<p>From a photo of a class note to a finished Anki deck — plus a tutor that corrects what I write and answers with audio.</p>
<div class="ra-box"><ul>
<li><strong>The deck builders:</strong> Wörter-Scout (fills empty vocabulary stubs with gender, plural, conjugations, examples) · Klodi (VHS class note → 8 Anki cards) · Kasun (filters and rewrites a whole lesson note) · Kontext B2 drill (daily exam drill with corrections, not answers).</li>
<li><strong>The correctors:</strong> Marthyna (written German, Spanish, English + TTS audio) · Kendrik (a German letter explained sentence by sentence for a B1 reader) · handwriting OCR (photo → structured text, with a verification pass).</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">💼</span><h3>Career and applications</h3><span class="ra-meta">5 agents · CV, Anschreiben, portals</span></div>
<p>The part of a job search that eats evenings: tailoring the documents, filling the same form for the twentieth time, preparing for the interview.</p>
<div class="ra-box"><ul>
<li><strong>Documents:</strong> Paula (German career consultant: covers, applications, positioning) · Application docs (CV poster + Anschreiben + portfolio as one PDF set) · LinkedIn authoring (measured results in, invented claims out).</li>
<li><strong>Research and forms:</strong> employer research (interview case study from public material) · portal forms (fills German job-portal forms field by field through the browser).</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🕸️</span><h3>Knowledge and semantics</h3><span class="ra-meta">5 agents · 51.811 triples</span></div>
<p>Agents that keep the vault itself healthy — structure, links, frontmatter, and the graph on top of it.</p>
<div class="ra-box"><ul>
<li><strong>The readers:</strong> Misuko (general expert over the vault, answering with KG + RAG context) · ontology export (TTL → VOWL JSON, so the graph is readable by a human).</li>
<li><strong>The cleaners:</strong> vault audits (structure, dangling links, semantic gaps, with a repair list) · link repair (fixes broken wikilinks against the real slug index) · continuous improvement (missing frontmatter, tags and sections, with proposed fixes).</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">💰</span><h3>Money, admin and documents</h3><span class="ra-meta">6 agents · German paperwork</span></div>
<p>Letters with deadlines, payslips, reminders and invoices — the paperwork that punishes you for forgetting it.</p>
<div class="ra-box"><ul>
<li><strong>The advisors:</strong> Maribel (balances, projection, monthly review) · Keith (monthly market report, Germany and Colombia kept separate) · freelance invoices (German Rechnung with the mandatory fields).</li>
<li><strong>The intake:</strong> official document intake (deadlines and obligations extracted from a letter) · Mahnung / Stundung (answer to a payment reminder with the legal basis) · payslip processing (Lohnabrechnung read, archived, net pay booked).</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🎬</span><h3>Content and media</h3><span class="ra-meta">5 agents · blog, channel, digest</span></div>
<p>Publishing is a workflow, not a mood: draft, privacy check, deploy, distribute — and a daily digest that never invents a fact.</p>
<div class="ra-box"><ul>
<li><strong>The publishers:</strong> Wane (blog strategist: drafts, privacy firewall, deploy, distribution kit) · Valentina (brand publishing across blog, Telegram and the WhatsApp channel) · Bob (single-panel illustrations in the RA visual language).</li>
<li><strong>The inputs:</strong> Laura (daily news digest from named sources) · Lisa and Sly (concert radar and Spotify library work).</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🛡️</span><h3>Operations and security</h3><span class="ra-meta">4 agents · one finding per path</span></div>
<p>The agents that watch the machine, the vault and the repos — and stay quiet until something is actually wrong.</p>
<div class="ra-box"><ul>
<li><strong>Security:</strong> Flu (Windows guardian: exposed keys, open ports, one finding per path) · security audit (repo and machine scan with a prioritised report).</li>
<li><strong>Housekeeping:</strong> metrics dashboard (activity, PC usage and workload consolidated per day) · vault backup (USB backup built from a verified manifest).</li>
</ul></div>
</div>

</div>

> [!note] Not a demo
> Every agent above has a history: notes it wrote, runs it completed, failures it reported. You get the same skill file, adapted to your folder names and your rules.

---

## Packs & Pricing

| Pack | Agents included | Price |
|------|----------------|-------|
| 🇩🇪 **German Learning Agent Pack** | Wörter-Scout · Klodi · Marthyna | €60 |
| 🗂️ **Vault Automation Pack** | Dexter (task decomposition) · RA Mirror (daily reflection) · Content Router | €60 |
| 🔧 **Custom Agent** — your spec | 1 bespoke agent, built on your vault | €40 |
| 📦 **Complete Agent Bundle** — all 6 | €120 value | ~~€120~~ **€100** · ★ Recommended |

Each pack is delivered as: `SKILL.md` + scripts + a vault note describing the contract + a 30-minute installation call.

### 🇩🇪 German Learning Agent Pack — €60

| Agent | What it does | Real-world impact |
|-------|-------------|-------------------|
| **Wörter-Scout** | Watches for empty German vocabulary stubs, fills them with full lexical data (gender, plural, conjugations, examples). | ~734 cards generated automatically. No manual card creation. |
| **Klodi** | Reads a VHS class note and generates 8 Anki cards per session: vocabulary, grammar, Redemittel, exam tips. | One command → full deck ready for import. |
| **Marthyna** | Corrects what you write, explains the mistake and sends the answer as audio. | Correction without a teacher, on demand. |

### 🗂️ Vault Automation Pack — €60

| Agent | What it does | Real-world impact |
|-------|-------------|-------------------|
| **Dexter** | Takes a scheduled task from your daily note and decomposes it into subtasks with A/B/C priority. | One task → clear next steps. |
| **RA Mirror** | Reads the daily note at the end of the day and writes a second perspective on it. | Daily reflection without writing it yourself. |
| **Content Router** | Watches the vault root and moves each new file to the correct folder. | Zero inbox, every note where it belongs. |

### 🔧 Custom Agent — €40

You describe the task. I build the agent.

**What you get:**
- `SKILL.md` with role, workflow, guardrails and output contract
- The scripts it needs, tested against a vault of your size
- A vault note documenting what it may read and may write
- Trigger setup: manual, cron or file hook
- 30-minute installation call + 14 days of fixes

**Examples of recent custom builds:**
- A job-matching agent that scores new postings against a CV and a "life plan" filter
- A finance agent that projects cash flow from account exports
- An intake agent that reads official letters and writes deadlines into a task list
- A publishing agent that mirrors every blog page to a WhatsApp channel with its diagram

### 📦 Complete Agent Bundle — all 6 agents — €100

Both packs together, €20 cheaper than buying them separately.

> [!warning] What is included
> One-time build + installation call (30 min) + documentation + 14 days of fixes. Ongoing maintenance by arrangement. Prices excl. VAT. You need **Hermes Agent** (or a compatible MCP client) — no coding required to run the agents.

---

## How Can I Help You?

Choose what you are planning — the email arrives already prepared. Only a question or a comment? Use the other tabs. No call needed.

<div class="agent-tabs">
<style>
.agent-tabs{max-width:100%;margin:1rem 0}
.agent-tabs input{display:none}
.agent-tabs nav{display:flex;flex-wrap:wrap;gap:.5rem;border-bottom:1px solid var(--gray);margin-bottom:1rem}
.agent-tabs nav label{cursor:pointer;padding:.6rem 1.1rem;font-weight:600;color:var(--gray);border-radius:.45rem .45rem 0 0;border:1px solid transparent;border-bottom:none;transition:color .15s,background .15s;font-size:.92rem}
.agent-tabs nav label:hover{color:var(--secondary)}
.agent-tabs .panel{display:none;padding:.2rem .1rem 0;animation:fadeIn .25s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:none}}
.agent-tabs #at-dienst:checked~nav label[for="at-dienst"],
.agent-tabs #at-frage:checked~nav label[for="at-frage"],
.agent-tabs #at-kommentar:checked~nav label[for="at-kommentar"]{background:var(--lightgray);color:var(--secondary);border-color:var(--gray)}
.agent-tabs #at-dienst:checked~.panel-dienst,
.agent-tabs #at-frage:checked~.panel-frage,
.agent-tabs #at-kommentar:checked~.panel-kommentar{display:block}
.agent-btn{display:inline-block;padding:.65rem 1.3rem;background:#1a1a1a;color:#f0c040;border:1px solid #f0c040;border-radius:.5rem;font-weight:700;text-decoration:none;transition:background .15s,color .15s}
.agent-btn:hover{background:#f0c040;color:#1a1a1a}
.agent-meta{font-size:.9rem;color:var(--gray);margin-top:.6rem}
</style>
<input type="radio" name="agent-tabs" id="at-dienst" checked>
<input type="radio" name="agent-tabs" id="at-frage">
<input type="radio" name="agent-tabs" id="at-kommentar">
<nav>
<label for="at-dienst">🛒 Service</label>
<label for="at-frage">❓ Question</label>
<label for="at-kommentar">💬 Comment</label>
</nav>

<div class="panel panel-dienst">
<p><strong>You want an agent built.</strong> Tell me which pack interests you — or describe the task in one sentence — and in which vault or tool it should run. The email is already prepared, just fill in the blanks.</p>
<p>I reply within 24–48 hours with a concrete scope, a fixed price and a delivery date.</p>
<a class="agent-btn" href="mailto:raul.mina1@outlook.com?subject=Agent%20request%20%E2%80%94%20RA%20Agent%20Shop&body=Hello%2C%0A%0AI%27m%20interested%20in%3A%0A%0A%20%20%5B%20%5D%20German%20Learning%20pack%20%28%E2%82%AC60%29%0A%20%20%5B%20%5D%20Vault%20Automation%20pack%20%28%E2%82%AC60%29%0A%20%20%5B%20%5D%20Complete%20bundle%20%28%E2%82%AC100%29%0A%20%20%5B%20%5D%20Custom%20agent%20%28%E2%82%AC40%29%0A%0AThe%20task%20I%20want%20automated%3A%0A%0AWhere%20it%20should%20run%20%28Obsidian%2C%20Hermes%20Agent%2C%20other%29%3A%0A%0AReply-to%20email%3A" target="_blank" rel="noopener">Request an agent →</a>
<p class="agent-meta">Alternatively via <a href="https://paypal.me/raulmina1" target="_blank" rel="noopener">PayPal</a> — after your selection I send a payment link.</p>
</div>

<div class="panel panel-frage">
<p><strong>You have a question.</strong> About the guardrails, about running agents on your own machine, about what happens to your data, or whether a task is worth automating at all. Ask freely — it costs nothing and stays confidential.</p>
<a class="agent-btn" href="mailto:raul.mina1@outlook.com?subject=Question%20about%20the%20Agent%20Shop&body=Hello%2C%0A%0AI%20have%20a%20question%20about%20the%20agents%3A%0A%0AQuestion%3A%0A%0AReply-to%20email%3A" target="_blank" rel="noopener">Ask a question →</a>
<p class="agent-meta">Technical questions are answered free of charge and without obligation.</p>
</div>

<div class="panel panel-kommentar">
<p><strong>You just want to leave a comment.</strong> Feedback, an idea, a task you think should be automatable — every bit helps. Greetings are welcome too.</p>
<a class="agent-btn" href="mailto:raul.mina1@outlook.com?subject=Comment%20about%20the%20Agent%20Shop&body=Hello%2C%0A%0AI%27d%20like%20to%20leave%20a%20comment%20about%20the%20Agent%20Shop%3A%0A%0AComment%3A%0A%0AEmail%20for%20optional%20feedback%3A" target="_blank" rel="noopener">Leave a comment →</a>
<p class="agent-meta">Your email is used only for the reply and is not shared.</p>
</div>
</div>

> [!warning] Requirements
> **Hermes Agent** (or a compatible MCP client) to run the agents. A vault — Obsidian is what these were built against. No coding required: the skills are files you drop in a folder.

---

> [!note] RA
> Every agent is a task you no longer have to think about. That silence is the actual product.

---

*Which task would you most like to automate? Write to me → raul.mina1@outlook.com*
