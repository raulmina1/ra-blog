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

<div class="ra-diagram ra-wide"><div class="ra-diagram-head"><span class="ra-overline">Agent Anatomy &middot; One-Pager</span><h3>Anatomy of one agent — six layers, one loop</h3><p>Every agent in the fleet follows the same path, from the trigger that wakes it to the note it leaves behind.</p></div><iframe src="/static/mental-maps/agent-anatomy.html" style="width:100%;height:720px;border:0;background:#000;display:block" title="Agent anatomy — six layers"></iframe><div class="ra-diagram-foot"><span>6 layers</span><span>3 trigger types</span><span>51.811 triples in context</span><span>144 scheduled runs</span></div></div>

<style>
@media all and (min-width:900px){
  .ra-diagram.ra-wide{width:min(1180px,calc(100vw - 5rem));
    margin-left:calc((100% - min(1180px,calc(100vw - 5rem)))/2)}
}
</style>

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

The complete fleet — every agent and skill that runs on this machine, grouped by the job it replaces. **107 skills in total**, 18 of them active every day.

<div class="ra-rows">

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🧠</span><h3>Life, coaching and the daily rhythm</h3><span class="ra-meta">23 agents</span></div>
<p>The people layer: coaching, health, calendar, tasks and the daily plan.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Kio</strong> — life coach, scans open items, prioritises, unblocks</li>
<li><strong>Lebens-Coach</strong> — the long-horizon coach behind Kio</li>
<li><strong>Frank</strong> — career psychologist, decisions read through your values</li>
<li><strong>RA-Mirror</strong> — second perspective on the day, written at night</li>
<li><strong>Manhattan</strong> — audits contradictions and cognitive friction in the log</li>
<li><strong>Simara</strong> — game master over the real vault content</li>
<li><strong>Chila</strong> — relationship archivist for 04_LEBEN/02_LEUTE</li>
<li><strong>Caballo</strong> — nutrition coach with Strava data, gain weight</li>
<li><strong>Ernaehrungs-Coach</strong> — eating habits and meal structure</li>
<li><strong>Leonardo</strong> — responsible tracking of microdosing, with limits</li>
<li><strong>Leona Household Finances</strong> — rent, utilities and Wellhub owed monthly</li>
<li><strong>Health Records</strong> — the clinical history note, kept current</li>
<li><strong>Ejercicio Tracking</strong> — activity files → weekly training numbers</li>
<li><strong>Metrics Dashboard</strong> — activity, PC use, calendar and tasks in one view</li>
<li><strong>Amparo</strong> — calendar capture and routing, agenda, events, notes</li>
<li><strong>Calendario Solar</strong> — daily notes in 10_CALENDAR, events routed</li>
<li><strong>Umsetzungsplan</strong> — rebuilds the daily execution plan</li>
<li><strong>Dexter</strong> — restructures pending tasks into a clean shape</li>
<li><strong>Atum</strong> — turns one complex task into a step-by-step plan</li>
<li><strong>Alex</strong> — companion agent and router between the others</li>
<li><strong>Diego</strong> — messenger between Dexter and Marthyna</li>
<li><strong>Voice Dictation Decode</strong> — cleans up dictated messages before they are used</li>
<li><strong>Mera v2</strong> — business-idea analysis and code critique</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🇩🇪</span><h3>German and learning</h3><span class="ra-meta">12 agents</span></div>
<p>Course notes become decks, letters get explained, corrections come back as audio.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Wörter-Scout</strong> — fills empty vocabulary stubs, gender, plural, conjugations</li>
<li><strong>Klodi</strong> — VHS class note → 8 Anki cards</li>
<li><strong>Kasun</strong> — processes one lesson note end to end</li>
<li><strong>Marthyna</strong> — corrects German, Spanish and English, answers as audio</li>
<li><strong>Kendrik</strong> — explains a German letter sentence by sentence for B1</li>
<li><strong>Kontext B2 Drill</strong> — daily exam drill with corrections</li>
<li><strong>Deutsch Prüfung Simulation</strong> — builds DTZ/DTB exam simulations</li>
<li><strong>Deutsche Übungen Foto</strong> — photo of an exercise → corrected worksheet</li>
<li><strong>OCR Handschrift</strong> — handwritten German notes → text, with error tracking</li>
<li><strong>Image Processor</strong> — notebook photos processed locally</li>
<li><strong>German MOOC Certificates</strong> — finds courses and certificates worth doing</li>
<li><strong>German Degree Recognition</strong> — foreign degree recognition, step by step</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">💼</span><h3>Career and applications</h3><span class="ra-meta">12 agents</span></div>
<p>Documents, portals, research and the German paperwork around a job search.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Paula</strong> — German career consultant, covers, positioning, interviews</li>
<li><strong>Paula Application Docs</strong> — CV poster + Anschreiben + signature as one PDF</li>
<li><strong>Paula Naxcon</strong> — technical preparation for the NAXCON process role</li>
<li><strong>Cover Letter Reviewer</strong> — line-by-line review of a German cover letter</li>
<li><strong>Bewerbungsportal Forms</strong> — fills German job-portal forms field by field</li>
<li><strong>Interview Company Research</strong> — case study built from public company material</li>
<li><strong>German Salary Research</strong> — salary and net pay by location, DE/CH/NL/Gulf</li>
<li><strong>Berlin Engineering Networking</strong> — AI and engineering events worth attending</li>
<li><strong>Berlin Professional Events</strong> — process and AI events in Berlin, filtered</li>
<li><strong>Work Shift Schedule Sync</strong> — employer schedule → real shifts in the vault</li>
<li><strong>Employer Correspondence</strong> — mail to the employer, in the right tone</li>
<li><strong>Planeteers Wiki</strong> — CDR/OAE concepts, built for interview prep</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">💰</span><h3>Money, admin and documents</h3><span class="ra-meta">13 agents</span></div>
<p>Balances, payslips, letters with deadlines, receipts and the shopping list.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Maribel</strong> — personal finance, balance, projection, monthly review</li>
<li><strong>Keith</strong> — market report and portfolio view, Germany and Colombia split</li>
<li><strong>Job Hours Earnings</strong> — hours worked → earnings, feeds Maribel</li>
<li><strong>Cashflow Projection Chart</strong> — the money chart, drawn from real balances</li>
<li><strong>German Payslip Processing</strong> — Lohnabrechnung read, archived, net pay booked</li>
<li><strong>Official Document Intake</strong> — official letter → deadlines and obligations</li>
<li><strong>Einkaufs Checkliste</strong> — shopping list kept in the vault</li>
<li><strong>Einkauf Liste</strong> — adds items to the shopping checklist</li>
<li><strong>Mahecha</strong> — receipt photo → structured Quittung</li>
<li><strong>Household Energy Costs</strong> — what heating, hot water and showers cost</li>
<li><strong>Trip Budget Planning</strong> — budget for a trip, before booking</li>
<li><strong>German Freelance Setup</strong> — §21 visa, taxes, freelance paperwork</li>
<li><strong>Trading Copilot Sim</strong> — simulated trading, practice, never real money</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🕸️</span><h3>Vault, memory and knowledge</h3><span class="ra-meta">20 agents</span></div>
<p>The layer that keeps the vault itself healthy and answers with real context.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Misuko</strong> — general expert over the vault, answers with KG + RAG</li>
<li><strong>Vault RAG</strong> — vector index, 14.180 chunks, refreshed</li>
<li><strong>Vault KG Context</strong> — graph + vector context for any note</li>
<li><strong>Vault Audit</strong> — structure, orphans, gaps, with a repair list</li>
<li><strong>Vault Link Repair</strong> — broken wikilinks fixed against the slug index</li>
<li><strong>Vault Continuous Improvement</strong> — finds missing frontmatter, tags, sections</li>
<li><strong>Vault Content Locator</strong> — where a topic already lives in the vault</li>
<li><strong>Vault Task Closing</strong> — creates, closes and postpones TSK tasks</li>
<li><strong>Daily Note Routing</strong> — nightly routing of the day's content to its notes</li>
<li><strong>Pending Inbox</strong> — the 98_MARKDOWNS/02_PENDING queue, emptied</li>
<li><strong>Subrayados Deep Dive</strong> — new highlights → deeper explanations</li>
<li><strong>Scanned Book Page Library</strong> — scanned book stored page by page</li>
<li><strong>TTL to VOWL</strong> — ontology exported so a human can read the graph</li>
<li><strong>Hermes Memory</strong> — three memory tiers, kept within budget</li>
<li><strong>Galactus</strong> — maintains and evolves the ecosystem diagrams</li>
<li><strong>YellowVault Agent Creation</strong> — new agents created with the house conventions</li>
<li><strong>Vault Calendar Auto Notes</strong> — weather and moon notes, written daily</li>
<li><strong>Vault Auto Reports</strong> — keeps the automatic report scripts running</li>
<li><strong>YellowVault Event Changes</strong> — cancelled or moved events handled</li>
<li><strong>RA Context Plugin</strong> — the chat-context plugin, tuned and debugged</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🎬</span><h3>Content, publishing and brand</h3><span class="ra-meta">12 agents</span></div>
<p>Draft, check, publish, distribute — blog, Telegram, WhatsApp and print.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Wane</strong> — blog strategist, draft, privacy firewall, deploy</li>
<li><strong>Valentina</strong> — publishes the brand across blog, Telegram, WhatsApp</li>
<li><strong>Bob</strong> — single-panel illustrations from a note</li>
<li><strong>Laura</strong> — daily news digest from named sources</li>
<li><strong>Colombia Historia Posts</strong> — daily posts on Colombian history</li>
<li><strong>Lisa</strong> — concert radar from Spotify top artists</li>
<li><strong>Sly</strong> — Spotify library and taste work</li>
<li><strong>RA Brand Visuals</strong> — metric dashboards and data-viz posters</li>
<li><strong>RA Note Export</strong> — note → branded PDF, Chrome headless</li>
<li><strong>Obsidian Branded Export</strong> — same export, Obsidian side</li>
<li><strong>AI Image Generation</strong> — images generated or derived on demand</li>
<li><strong>Fullyellow Support</strong> — answers customer questions about Fullyellow</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🏗️</span><h3>Engineering and process</h3><span class="ra-meta">8 agents</span></div>
<p>Process simulation, P&ID deliverables and the layout work behind them.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Tommaso</strong> — engineering services, CAD exports, P&ID, projects</li>
<li><strong>Tommaso Projects</strong> — daily project radar: status and next steps</li>
<li><strong>Phase Envelope Simulation</strong> — PVT phase envelopes and PR-EOS flash</li>
<li><strong>Process Simulator Files</strong> — HYSYS .hsc files, or driving a running HYSYS</li>
<li><strong>P&ID and Process Standards</strong> — deliverables checked against the standards</li>
<li><strong>Industrial Water Quality</strong> — demineralised water, UPW and steam specs</li>
<li><strong>Satellite Plant Layout</strong> — plant layout derived from satellite images</li>
<li><strong>Local GPU Inference</strong> — ComfyUI, Ollama and local models on the 3050</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🛡️</span><h3>Operations, security and plumbing</h3><span class="ra-meta">12 agents</span></div>
<p>The agents that keep the machine, the mail and the backups running.</p>
<div class="ra-box ra-box-list"><ul>
<li><strong>Flu</strong> — Windows security guardian, keys, ports, one finding per path</li>
<li><strong>Javier</strong> — Outlook and MS Graph integration</li>
<li><strong>Email Pipeline Ops</strong> — 12 scripts and 12 cron jobs kept alive</li>
<li><strong>Amigo Visible</strong> — donor inbox for Manos Visibles, classified</li>
<li><strong>Prompt Runner</strong> — runs prompts from notes with run_prompt: true</li>
<li><strong>Prompt Runner Fast</strong> — fast dispatch without the scan</li>
<li><strong>Peer Review</strong> — audits another agent against its own SKILL.md</li>
<li><strong>Security Code Scanning</strong> — SAST over a repo, prioritised findings</li>
<li><strong>Windows Security Audit</strong> — exposed keys and open ports on this machine</li>
<li><strong>RA Taskbar HW Monitor</strong> — hardware readout in the taskbar</li>
<li><strong>YellowVault Backup System</strong> — USB backup from a verified manifest</li>
<li><strong>Log Forensics</strong> — JSONL logs read for the first real cause</li>
</ul></div>
</div>

</div>

<style>
.ra-box-list{padding-top:.35rem;padding-bottom:.35rem}
.ra-box-list li{margin:.16rem 0;line-height:1.45}
.ra-box-list li strong{color:#f0c040;font-weight:600}
</style>

> [!note] Not a demo
> Every agent above has a history: notes it wrote, runs it completed, failures it reported. You get the same skill file, adapted to your folder names and your rules.

---

## Packs & Pricing

<div class="ra-rows">

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🇩🇪</span><h3>German Learning Agent Pack</h3><span class="ra-meta">3 agents · €60</span></div>
<p>For anyone going through a German course who loses the evening to making cards instead of learning.</p>
<div class="ra-box"><ul>
<li><strong>What is inside:</strong> Wörter-Scout (empty vocabulary stubs filled with gender, plural, conjugations and examples — ~734 cards generated so far) · Klodi (one VHS class note → 8 Anki cards: vocabulary, grammar, Redemittel, exam tips) · Marthyna (corrects what you write, explains the mistake, answers as audio).</li>
<li><strong>What it changes:</strong> one command produces a full deck ready for import, and corrections arrive without a teacher — on demand, in the same minute.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🗂️</span><h3>Vault Automation Pack</h3><span class="ra-meta">3 agents · €60</span></div>
<p>For the vault that grows faster than you can file it — tasks, reflections and incoming files handled by agents, not by discipline.</p>
<div class="ra-box"><ul>
<li><strong>What is inside:</strong> Dexter (takes a scheduled task from the daily note and decomposes it into subtasks with A/B/C priority) · RA Mirror (reads the daily note at the end of the day and writes a second perspective) · Content Router (watches the vault root and moves each new file to the correct folder).</li>
<li><strong>What it changes:</strong> one task becomes clear next steps, the day gets reflected without you writing it, and the inbox stays at zero because nothing waits for you to file it.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🔧</span><h3>Custom Agent — your spec</h3><span class="ra-meta">1 bespoke agent · €40</span></div>
<p>You describe the task in one sentence; I build the agent around your folders, your rules and your data.</p>
<div class="ra-box"><ul>
<li><strong>What you get:</strong> `SKILL.md` with role, workflow, guardrails and output contract · the scripts it needs, tested against a vault of your size · a vault note documenting what it may read and write · trigger setup (manual, cron or file hook) · 30-minute installation call and 14 days of fixes.</li>
<li><strong>Recent builds:</strong> a job-matching agent scoring postings against a CV and a life-plan filter · a finance agent projecting cash flow from account exports · an intake agent turning official letters into deadlines · a publishing agent mirroring every blog page to a WhatsApp channel with its diagram.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📦</span><h3>Complete Agent Bundle</h3><span class="ra-meta">all 6 agents · €100 instead of €120</span></div>
<p>Both packs together — the German stack and the vault stack — for the price of one and a half.</p>
<div class="ra-box"><ul>
<li><strong>What is inside:</strong> Wörter-Scout · Klodi · Marthyna · Dexter · RA Mirror · Content Router, each with its `SKILL.md`, scripts and the vault note that documents the contract.</li>
<li><strong>What is included:</strong> one-time build, installation call (30 min), documentation and 14 days of fixes — ongoing maintenance by arrangement, prices excl. VAT.</li>
</ul></div>
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📬</span><h3>Delivery and requirements</h3><span class="ra-meta">files you own · no subscription</span></div>
<p>Everything arrives as files in a folder — not as access to a platform that can change under you.</p>
<div class="ra-box"><ul>
<li><strong>Delivery:</strong> `SKILL.md` + scripts + a vault note describing the contract + a 30-minute installation call, by mail, usually within 24–48 hours of the scope being agreed.</li>
<li><strong>Requirements:</strong> Hermes Agent (or a compatible MCP client) and a vault — Obsidian is what these were built against. No coding needed: the skills are files you drop in a folder.</li>
</ul></div>
</div>

</div>

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
