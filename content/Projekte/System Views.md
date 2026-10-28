---
title: "Inside a Daily Note"
tags:
  - agents
  - obsidian
  - demo
  - vault
description: "The daily note the agents write — section by section, captured inside Obsidian. Demo vault, fictional company, real structure."
publish: true
date: 2026-10-28
type: showcase
lang: en
see_also:
  - "[[Projekte/Agent Shop|RA Agent Shop]]"
---

###### Related: [[Projekte/Agent Shop|RA Agent Shop]] | [[Daily]]

---

# Inside a Daily Note

> One note, twelve sections, written by eight agents across a single day. Screenshots taken inside **Obsidian** — the same theme, the same reading view, the same status bar I use every day.

The vault below is fictional: a made-up company (**Northlight Engineering**) and one made-up day (**Monday 09.03.26**). The structure is not. Every section exists in my real `10_CALENDAR/00_DATABASE/` notes, is filled by a named agent, and is read by the next one on the list.

<figure class="ra-hero"><img loading="lazy" src="/static/posters/northlight/window.webp" alt="Obsidian window with the daily note"><figcaption>The whole window: file tree left, the day in reading view, backlinks right.</figcaption></figure>

## The sections

<div class="ra-rows">

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🧾</span><h3>Changed today</h3><span class="ra-meta">12 notes · written by the vault plugin</span></div>
<p>Every note touched during the day, in the order the work happened — not what I planned, what the vault actually saw change.</p>
<div class="ra-box"><ul>
<li><strong>Why it matters:</strong> it is the index of the day. Every other section can be rebuilt from these twelve notes.</li>
<li><strong>Who writes it:</strong> the folder-activity plugin, no LLM involved — so it cannot be talked into inventing an edit.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/ra-changed.webp" alt="Changed today list in Obsidian">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📅</span><h3>Events — the day, written by the agents</h3><span class="ra-meta">24 events · 06:00 → 20:00</span></div>
<p>Each line is a real block with `startTime` and `endTime` as inline fields — not a sentence in prose, a record a query can read back.</p>
<div class="ra-box"><ul>
<li><strong>Calendar first:</strong> fixed appointments come in from the calendar, then activity data fills the gaps, then my dictation overrides both.</li>
<li><strong>Nothing without a time:</strong> an activity with no exact hour is not allowed into the day — that rule alone removed the vague planning.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/ra-events.webp" alt="Events list with start and end times">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🎯</span><h3>Plan for today</h3><span class="ra-meta">6 blocks · one decision per line</span></div>
<p>The short version at the top of the note: what today is actually for, phrased as actions — run, walkdown, mass balance, quote, client call, German and gym.</p>
<div class="ra-box"><ul>
<li><strong>Written for a human in a hurry:</strong> six lines, each starting with the verb, so the day is legible in ten seconds.</li>
<li><strong>One source:</strong> it points to [[Task Index]] instead of copying the tasks — no second list that drifts.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/ra-plan.webp" alt="Plan for today list">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🧮</span><h3>Hour by hour</h3><span class="ra-meta">morning · afternoon · evening</span></div>
<p>Three tables, one per part of the day: start → end, activity, the notes the tracker saw, and a status that is either done, in progress or free.</p>
<div class="ra-box"><ul>
<li><strong>Empty hours stay empty:</strong> lunch has no PC signal and shows as free — the table is not padded to look productive.</li>
<li><strong>Every row carries a link:</strong> a block with no note behind it is treated as unproven and gets flagged at the end of the day.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/ra-hourly.webp" alt="Hour by hour table, morning">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🗂️</span><h3>Tasks and the history of the plan</h3><span class="ra-meta">8 tasks shown · 52 in the index</span></div>
<p>A task table with an ID, a group, a due date and a state — plus the change log of the plan itself: 00:21 rebuilt, 08:40 morning filled, 12:05 deviation found, 18:12 afternoon closed, 21:40 day closed.</p>
<div class="ra-box"><ul>
<li><strong>IDs, not prose:</strong> TSK-1041 can be referenced from a mail, a note or a chat message and still resolve to the same row.</li>
<li><strong>The log is the audit trail:</strong> it shows what the agent changed and when, so a wrong plan can be traced instead of argued about.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/d-05-tasks.webp" alt="Tasks table and plan history">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🖥️</span><h3>PC Workflow</h3><span class="ra-meta">7h 58m · 81 % focus · 8 deep-work sessions</span></div>
<p>Screen time from ActivityWatch, folded into something readable: distribution over the day, time per app, and per-folder activity inside the vault with the exact files.</p>
<div class="ra-box"><ul>
<li><strong>Files, not categories:</strong> `Model P-204.md` (1h 04m) is more useful than \"Engineering: 2h 26m\" — it tells me where the day actually went.</li>
<li><strong>Compared to the week:</strong> 7h 58m against a 6h 05m average, so a long day reads as a deviation and not as a compliment.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/ra-pcworkflow.webp" alt="PC Workflow metrics">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">💰</span><h3>Money and comments</h3><span class="ra-meta">6 movements · 6 notes to self</span></div>
<p>What came in, what went out, what is still open in a quote — followed by the comments I would otherwise lose between two tabs.</p>
<div class="ra-box"><ul>
<li><strong>Net, not list:</strong> the row closes with +1.790 € in, 1.190 € out and 4.280 € open, so the day has a number instead of a pile.</li>
<li><strong>Comments become tasks:</strong> anything actionable in that list (the 2026-014 reminder) ends up as TSK-1038 the same evening.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/d-07-money.webp" alt="Money and comments section">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">💛</span><h3>Dream, meditation, how I feel</h3><span class="ra-meta">three lines · one minute</span></div>
<p>The personal blocks the other agents are not allowed to touch: what I dreamt, how long I sat, and an entry with energy, mood and a note about the day.</p>
<div class="ra-box"><ul>
<li><strong>Fenced by the privacy firewall:</strong> these sections never reach a public output — the agent that publishes reads around them.</li>
<li><strong>Cheap to write, expensive to lose:</strong> three lines a day is the difference between a log and a diary.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/d-08-journal.webp" alt="Dream, meditation and how I feel">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📊</span><h3>Daily Metadata</h3><span class="ra-meta">30-minute grid · 06:00 → 21:00</span></div>
<p>Every half hour of the day in one row: the track that was playing, the app and the notes in focus, edits in Obsidian, tasks closed, and a bar for how much of the slot was used.</p>
<div class="ra-box"><ul>
<li><strong>Gaps are data:</strong> lunch and the gym show as empty half hours — the grid is not smoothed, so the shape of the day stays honest.</li>
<li><strong>Music next to work:</strong> after a month it answers a question no tracker answers — which tasks survive with a soundtrack and which do not.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/ra-metadata.webp" alt="Daily Metadata 30-minute grid">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">🧾</span><h3>Task Index — its own note</h3><span class="ra-meta">52 open · 9 closed today</span></div>
<p>The daily note carries a two-line pointer; the table lives next door. Today, this week, later, and everything closed — grouped by importance, not by project.</p>
<div class="ra-box"><ul>
<li><strong>One table, one truth:</strong> closing a task means one edit here, and the daily note stops mentioning it by itself.</li>
<li><strong>Closed is kept:</strong> the closed table keeps the exact time, so \"when did I finish that\" is a lookup and not a memory test.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/d-10-taskindex.webp" alt="Task Index note">
</div>

<div class="ra-row">
<div class="ra-row-head"><span class="ra-ic">📈</span><h3>Tracking — habits without a spreadsheet</h3><span class="ra-meta">14 days · 6 habits · streaks</span></div>
<p>One row per evening, written by the agent from what the day already contains: run distance, gym, meditation, German, reading, journal, and the streak that follows.</p>
<div class="ra-box"><ul>
<li><strong>Derived, not typed:</strong> the row is built from the day's own sections, so tracking costs no extra minute.</li>
<li><strong>Weekly totals above the rows:</strong> the trend is visible without opening a spreadsheet or a dashboard.</li>
</ul></div>
<img loading="lazy" src="/static/posters/northlight/d-12-tracking.webp" alt="Tracking note with habits and streaks">
</div>

</div>

<style>
.ra-hero{margin:1.2rem 0 1.8rem;background:#0f0f0d;border:1px solid #2e2e28;border-radius:10px;overflow:hidden}
.ra-hero img{display:block;width:100%;height:auto;border-bottom:1px solid #1e1e18}
.ra-hero figcaption{font-size:.8rem;color:#c9c9bd;padding:.6rem .8rem}

.ra-rows{display:flex;flex-direction:column;gap:1.1rem;margin:1.2rem 0 1.6rem}

.ra-row{background:#0f0f0d;border:1px solid #2e2e28;border-radius:10px;padding:1rem 1.1rem 1.1rem;overflow:hidden}
.ra-row-head{display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap;margin-bottom:.5rem}
.ra-row-head h3{margin:0;font-size:1.05rem;color:#f0c040;border:none;padding:0}
.ra-ic{font-size:1.1rem}
.ra-meta{font-size:.74rem;letter-spacing:.04em;text-transform:uppercase;color:#8f8f80}
.ra-row p{margin:.15rem 0 .7rem;font-size:.92rem;line-height:1.55;color:#d8d8cc}

.ra-box{background:#141410;border:1px solid #33332b;border-left:3px solid #c4ab00;border-radius:6px;padding:.55rem .9rem .55rem 1.1rem;margin:0 0 .85rem}
.ra-box ul{margin:.25rem 0;padding-left:1.05rem}
.ra-box li{font-size:.86rem;line-height:1.5;color:#bdbdb0;margin:.3rem 0}
.ra-box li strong{color:#e8e8dd}

.ra-row img{display:block;width:100%;height:auto;border:1px solid #26261f;border-radius:6px;background:#000}

@media all and (max-width:760px){
  .ra-row{padding:.85rem .8rem .9rem}
  .ra-row-head h3{font-size:.98rem}
  .ra-row p{font-size:.88rem}
  .ra-box li{font-size:.83rem}
}
</style>

---

Want the same thing on your vault? The [[Projekte/Agent Shop|Agent Shop]] lists the packs — or send me one note you write by hand and I will show you what the same view looks like after the agents touch it.
