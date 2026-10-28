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

## What it looks like — screenshots from the app

Not mock-ups. Every image below was captured from **Obsidian itself**, with the theme and settings I use every day (*Vanilla AMOLED*, gold accent, MADE TOMMY). The data is fictional: a made-up company, **Northlight Engineering**, and one made-up day, **Monday 09.03.26** — the structure, the sections and the agents writing into them are the real ones.

<div class="ra-shots">
<figure class="wide"><img loading="lazy" src="/static/posters/northlight/window.webp" alt="Obsidian window with the daily note"><figcaption>The daily note as it opens: file tree on the left, the note in reading view, backlinks on the right.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-01-top.webp" alt="Properties and prompt block"><figcaption>Top of the note — 21 properties the agents read, the note links, the two databanks and the prompt block that turns one line into a task.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-02-events.webp" alt="Events and migration report"><figcaption>24 events the agents wrote into the day — run, meditation, work blocks, German, gym — plus the Dexter migration report.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-03-dayplan.webp" alt="Day plan"><figcaption>The day plan: fixed appointments from the calendar first, then the rules the plan obeys. Dictation beats inference.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-04-hourly.webp" alt="Hour by hour table"><figcaption>Hour by hour, morning to evening, with the notes the activity tracker actually saw — empty hours stay empty.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-05-tasks.webp" alt="Tasks table and history"><figcaption>Tasks with IDs, group, due date and state — plus the change history of the plan over the day.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-06-pcworkflow.webp" alt="PC workflow metrics"><figcaption>PC Workflow — screen time 7h 58m, focus 81 %, per-app time, and the exact files edited in every folder.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-07-money.webp" alt="Money and comments"><figcaption>Money — what came in, what went out, what is still open in the quote — followed by the day's comments.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-08-journal.webp" alt="Dream, meditation, how I feel"><figcaption>The personal blocks: dream, meditation, how I feel, and the A/B/C the next day starts from.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-09-metadata.webp" alt="Metadata insight and 30-minute grid"><figcaption>Metadata insight and the 30-minute grid: every half hour of the day, one line each, with the track that was playing.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-10-taskindex.webp" alt="Task index note"><figcaption>The task index is its own note — today and this week, grouped, every task with an ID and a due date.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-11-taskindex2.webp" alt="Task index — closed today"><figcaption>Same task index further down: closed today and the later bucket, so nothing disappears without a trace.</figcaption></figure>
<figure><img loading="lazy" src="/static/posters/northlight/d-12-tracking.webp" alt="Tracking note"><figcaption>Tracking: 14 days of habits and the weekly totals, written by the agent — streaks without a spreadsheet.</figcaption></figure>
</div>

<style>
.ra-shots{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin:1.2rem 0 1.6rem}
.ra-shots figure{margin:0;background:#0f0f0d;border:1px solid #2e2e28;border-radius:10px;overflow:hidden}
.ra-shots figure.wide{grid-column:1 / -1}
.ra-shots img{display:block;width:100%;height:auto;border-bottom:1px solid #1e1e18}
.ra-shots figcaption{font-size:.78rem;line-height:1.45;color:#a8a89a;padding:.6rem .75rem}
.ra-shots figure.wide figcaption{color:#c9c9bd}
@media all and (max-width:760px){ .ra-shots{grid-template-columns:1fr} }
</style>

What the screenshots cover: 21 properties and the prompt block · 24 agent-written events · the migration report · the day plan and its rules · the hour-by-hour tables · the task table and plan history · PC Workflow metrics · money and comments · dream, meditation and how I feel · the 30-minute grid · the task index · the tracking table.

Want a second opinion on your own vault? Send me one note you write by hand — I'll show you what the same view looks like after the agents touch it.

## AG-1 · Triggers — what starts an agent

| Trigger | Mechanism | Used for |
|---|---|---|
| **Chat** | Hermes CLI / Telegram topic | Work that needs a decision from me |
| **Cron** | 144 enabled jobs, interval or cron expression | Nightly scans, digests, syncs, backups |
| **Watchdog / hook** | File watcher on vault paths | Prompt Runner (`run_prompt: true`), new documents |
| **Bridge** | WhatsApp / Telegram channels | Mobile input, publishing to the channel |

The same agent can be reachable from all four — the trigger only decides *when* it wakes up, never what it does.

## AG-2 · The skill — the part you actually buy

| Component | What it contains | Why it matters |
|---|---|---|
| **Role** | Who the agent is, its voice, its limits | No generic "helpful assistant" answers |
| **Workflow** | Numbered steps, in order, no shortcuts | Reproducible output on every run |
| **Context rules** | Which notes, which graph queries, which memory tier to read | Answers grounded in your vault, not in guesses |
| **Guardrails** | Hard rules the agent must not cross | The failure mode is a stop, not a wrong write |
| **Output contract** | Exact file, exact frontmatter, exact place in the vault | No manual filing afterwards |
| **Memory** | What it remembers between sessions | It gets better at *your* data, not at generic tasks |

A skill file is plain text (`SKILL.md`) plus scripts. No lock-in: it runs on Hermes Agent, and the vault side is just markdown.

## AG-3 · Context — three brains, one prompt

| Source | Implementation | Live figure |
|---|---|---|
| 📝 **Vault notes** | Obsidian, frontmatter + wikilinks | 4.063 notes |
| 🕸️ **Knowledge graph** | GraphDB + SPARQL via `sparql_bridge --kg-context` | 51.811 triples |
| 🧠 **Vector RAG** | e5-small → ChromaDB, `hybrid_context.py` fusion | 14.180 chunks |
| 🧩 **Memory** | User profile · project skills · session history | 3 tiers |

The agent never reads 4.000 notes. It asks the graph for neighbours and the vector index for similar text, and gets a **context block of a few hundred tokens** — that is what keeps a run cheap and precise.

## AG-4 · Execution and guardrails

Every agent runs through the same gate before anything leaves the machine:

| Rule | Behaviour when hit |
|---|---|
| **Privacy firewall** | No financial data, no diary, no credentials, no private contacts in any public output |
| **GO before send** | Emails are drafted, never sent, until I answer with an explicit go |
| **Red alerts only** | Monitors and healers stay silent unless something is actually broken |
| **Local by default** | Models, embeddings and databases run on the machine; cloud only where it pays off |
| **Write-scope** | Each agent may only touch the folders its skill declares |

Failing the gate does not produce a "best effort" result — it produces a report and no write.

## AG-5 · Output — where the work lands

| Destination | Example |
|---|---|
| **Vault note** | Frontmatter, wikilinks and the right folder — ready for the graph |
| **Telegram topic** | One topic per domain, so a month of output stays searchable |
| **Blog / Quartz** | Daily Brief, project pages, semantic sections |
| **WhatsApp channel** | Published pages with their diagram as an image |
| **Anki / calendar** | German cards, shifts, exam drills |

Then the loop closes: the note goes back into the vault, the pipeline re-indexes it, and the next agent run sees it.

## AG-6 · Operations — the boring layer

| Component | Job |
|---|---|
| `cron` ticker | 144 enabled jobs, run history + failure delivery |
| Healers / watchdogs | Detect a dead daemon, a stale index or a broken link and repair it |
| **RA Log Viewer** | Live logs, memory/CPU, ecosystem tab |
| **Grafana** | 5 SPARQL panels over the graph |
| Backups + health checks | GraphDB Sunday 4 AM, alert below 35K triples |

## Numbers Behind the Fleet

| Layer | Live metrics |
|---|---|
| Agent skills | 107 installed · 18 in daily use |
| Automations | 144 enabled cron jobs (156 defined) |
| Triggers | chat · cron · file hook · messaging bridge |
| Context | 4.063 notes · 51.811 triples · 14.180 chunks |
| Guardrails | privacy firewall · GO-before-send · red-alert-only |
| Operations | log viewer · Grafana · health checks · backup |

---

## What is in the catalog

These are agents that already run here. They are grouped by the job they replace — not by technology.

### 🇩🇪 German learning

| Agent | What it does |
|---|---|
| **Wörter-Scout** | Finds empty vocabulary stubs and fills them with gender, plural, conjugations and examples — ~734 cards generated so far |
| **Klodi** | One VHS class note → 8 Anki cards (vocabulary, grammar, *Redemittel*, exam tips) |
| **Kasun** | Processes a whole lesson note, filters it and writes the structured version |
| **Marthyna** | Corrects written German, Spanish and English — and answers with TTS audio |
| **Kendrik** | Breaks a German letter or email down sentence by sentence for a B1 reader |
| **Kontext B2 drill** | Daily exam drill with corrections, not just answers |
| **Handwriting OCR** | Photo of handwritten notes → structured text, with a verification pass |

### 💼 Career and applications

| Agent | What it does |
|---|---|
| **Paula** | German career consultant: covers, applications, positioning, interview prep |
| **Application docs** | CV poster + *Anschreiben* + portfolio generated as one PDF set |
| **Portal forms** | Fills German job-portal forms through the browser, field by field |
| **Employer research** | Builds an interview case study from the company's public material |
| **LinkedIn authoring** | Turns measured results into a profile text without invented claims |

### 🕸️ Knowledge and semantics

| Agent | What it does |
|---|---|
| **Misuko** | General expert over the vault, answering with KG + RAG context |
| **Vault audits** | Structure, dangling links, semantic gaps — with a repair list |
| **Link repair** | Fixes broken wikilinks against the real slug index |
| **Continuous improvement** | Scans for missing frontmatter, tags and sections and proposes fixes |
| **Ontology export** | TTL → VOWL JSON, so the graph is readable by a human |

### 💰 Money, admin and documents

| Agent | What it does |
|---|---|
| **Maribel** | Personal finance coach: balances, projection, monthly review |
| **Keith** | Monthly market report, Germany and Colombia kept separate |
| **Official document intake** | Reads an official letter, extracts deadlines and obligations |
| **Mahnung / Stundung** | Drafts the answer to a payment reminder with the legal basis |
| **Payslip processing** | Reads a *Lohnabrechnung*, archives it and books the net pay |
| **Freelance invoices** | German *Rechnung* with the correct mandatory fields |

### 🎬 Content and media

| Agent | What it does |
|---|---|
| **Wane** | Blog strategist: drafts, privacy firewall, deploy, distribution kit |
| **Valentina** | Brand publishing across blog, Telegram and the WhatsApp channel |
| **Bob** | Single-panel illustrations in the RA visual language |
| **Laura** | Daily news digest from named sources, no invented facts |
| **Lisa / Sly** | Concert radar and Spotify library work |

### 🛡️ Operations and security

| Agent | What it does |
|---|---|
| **Flu** | Windows security guardian: exposed keys, open ports, one finding per path |
| **Metrics dashboard** | Activity, PC usage and workload consolidated per day |
| **Security audit** | Repo and machine scan with a prioritised report |
| **Vault backup** | USB backup built from a verified manifest |

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
