---
title: "The Journey of a Note: My Data Pipeline"
tags:
  - ai
  - ecosystem
  - data-pipeline
  - ra-blog
  - services
  - pricing
description: "What happens to a note after you write it? NER → Knowledge Graph (51.811 triples) → RAG (14.180 chunks). My local data pipeline, every 30 minutes. Now also bookable as a service."
reading_time: "5 min"
type: showcase
lang: en
publish: true
created: 2026-08-17
status: published
semantic_class: showcase
see_also:
  - "[[AI Ecosystem]]"
  - "[[Projekte/KGE Link Prediction YellowVault]]"
  - "[[Projekte/KG Context Service]]"
  - "[[Semantic Web/KG-Context-vs-RAG]]"
---

# The Journey of a Note: My Data Pipeline

> I write a note. Then something happens — without me lifting a finger.

Every note in my Obsidian vault passes through a data pipeline: **entities are recognized, metadata is enriched, everything is turned into a Knowledge Graph (51.811 triples) and, in parallel, into a vector index (14.180 chunks).** Every 30 minutes, automatically, locally — without SaaS.

## The Complete Diagram

<div class="ra-diagram"><div class="ra-diagram-head"><span class="ra-overline">Data Pipeline &middot; One-Pager</span><h3>From a written note to two queryable brains</h3><p>Every stage, every 30 minutes. Interactive: drag to pan, scroll or pinch to zoom, double-click to reset.</p></div><iframe src="/static/mental-maps/ecosystem-data-pipeline.html" style="width:100%;height:900px;border:0;background:#000;display:block" title="AI ecosystem data pipeline"></iframe><div class="ra-diagram-foot"><span>6.210 mentions</span><span>51.811 triples</span><span>14.180 chunks</span><span>30 min tick</span></div></div>

## DP-1 · Ingestion & Enrichment

An orchestrator (`vault_structure_sync.py`) ticks every 30 minutes and coordinates:

| Step | Tool | Result |
|---------|----------|----------|
| Entity recognition | `ner_extract.py` (local, dictionary) | 6.210 mentions · 74 entities |
| Cache | `ner_cache.ndjson` + `mentions.ttl` | Input for the RDF parser |
| Enrichment | `frontmatter_enricher.py` | Tags, created, aliases — with backup + changelog |

## DP-2 · Knowledge Graph

- **`parse_vault_to_rdf.py`** builds RDF triples incrementally (`--since` + state file); at 5 AM a complete rebuild (`--replace`).
- **`yellowvault_export.ttl`** — 51.811 triples — is loaded into **GraphDB** in **11 chunks**.
- Hourly, **`kg_incremental_sync.py`** keeps the graph fresh (incl. WebVOWL refresh).
- Three dashboards read directly from the graph: **WebVOWL :3000** (ontology), **Grafana :4000** (5 SPARQL panels), **RA Log Viewer :8485** (Ecosistema tab).

## DP-3 · Vector RAG

Notes are embedded with **e5-small** → **ChromaDB** (14.180 chunks, 5.810 files). An optional **cross-encoder** re-ranks the hits. `hybrid_context.py` fuses KG and vector results — with a 0.5s cache.

## DP-4 · Consumers

Three query paths feed the **Prompt Runner**:

| Agent | Function |
|-------|----------|
| `sparql_bridge --kg-context` | 3 SPARQL queries: tags, backlinks, neighbors → context block |
| `qa_kg` | Natural language → SPARQL |
| `hybrid_context` | KG + RAG fused |

## DP-5 · Operations — the boring layer

| Component | Job |
|------------|-----|
| `backup_graphdb.py` | Backup Sun 4 AM → OneDrive, retention 7 |
| `sync_health_check.py` | Alert below 35K triples |
| `keep-alive cron` | Keep GraphDB alive 8–22, auto-start 30–90s |
| `ecosystem_status.py` | Status → Grafana + Telegram |

## Numbers Behind the Pipeline

| Stage | Live metrics |
|--------|-----------------|
| 📁 Source | 4.063 notes |
| ⚙️ Ingestion | 6.210 mentions · 74 entities · 30-min tick |
| 🕸️ Knowledge Graph | 51.811 triples · 11 chunks · hourly sync |
| 🧠 Vector RAG | 14.180 chunks · 5.810 files · 0.5s cache |
| 🛡️ Operations | Backup Sun 4 AM · 35K threshold · Keep-alive 8–22 |

---

## Services & Pricing

This pipeline is no one-off experiment — it runs for me every day. If you want something like it for your own knowledge base, your team, or your product, I'll set it up, install it, and document it. Everything runs locally, without forced SaaS subscriptions.

| Package | What you get | Price |
|-------|-----------------|-------|
| 🧠 **Knowledge Graph Setup** | NER → RDF → GraphDB, set up and loaded once, incl. SPARQL endpoint and WebVOWL view | €390 |
| 🔍 **RAG + KG Fusion Setup** | ChromaDB vector index, cross-encoder, `hybrid_context` (KG + vector fused) | €340 |
| 📦 **Complete Data Pipeline** | Ingestion + Knowledge Graph + vector RAG + docs, all automatically every 30 min | **€690** |
| 🩺 **Pipeline Audit (existing setup)** | Architecture review, performance bottlenecks, security check, report | €150 |
| 🛠️ **Custom Integration** | For your stack (Docker, Obsidian, Confluence, database) — hourly rate | €60/h |

> [!warning] What's Included
> One-time setup + installation call (30 min) + documentation. Ongoing maintenance via separate support by arrangement. Prices excl. VAT.

---

## How Can I Help You?

Choose below what you're planning to do — I automatically receive a suitably prepared message. If it's just a short question or a comment about the page, choose the relevant tab. No call needed, reply by email.

<div class="pipeline-tabs">
<style>
.pipeline-tabs{max-width:100%;margin:1rem 0}
.pipeline-tabs input{display:none}
.pipeline-tabs nav{display:flex;flex-wrap:wrap;gap:.5rem;border-bottom:1px solid var(--gray);margin-bottom:1rem}
.pipeline-tabs nav label{cursor:pointer;padding:.6rem 1.1rem;font-weight:600;color:var(--gray);border-radius:.45rem .45rem 0 0;border:1px solid transparent;border-bottom:none;transition:color .15s,background .15s;font-size:.92rem}
.pipeline-tabs nav label:hover{color:var(--secondary)}
.pipeline-tabs .panel{display:none;padding:.2rem .1rem 0;animation:fadeIn .25s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:none}}
.pipeline-tabs #tab-dienst:checked~nav label[for="tab-dienst"],
.pipeline-tabs #tab-frage:checked~nav label[for="tab-frage"],
.pipeline-tabs #tab-kommentar:checked~nav label[for="tab-kommentar"]{background:var(--lightgray);color:var(--secondary);border-color:var(--gray)}
.pipeline-tabs #tab-dienst:checked~.panel-dienst,
.pipeline-tabs #tab-frage:checked~.panel-frage,
.pipeline-tabs #tab-kommentar:checked~.panel-kommentar{display:block}
.pipeline-btn{display:inline-block;padding:.65rem 1.3rem;background:#1a1a1a;color:#f0c040;border:1px solid #f0c040;border-radius:.5rem;font-weight:700;text-decoration:none;transition:background .15s,color .15s}
.pipeline-btn:hover{background:#f0c040;color:#1a1a1a}
.pipeline-meta{font-size:.9rem;color:var(--gray);margin-top:.6rem}
</style>
<input type="radio" name="pipeline-tabs" id="tab-dienst" checked>
<input type="radio" name="pipeline-tabs" id="tab-frage">
<input type="radio" name="pipeline-tabs" id="tab-kommentar">
<nav>
<label for="tab-dienst">🛒 Service</label>
<label for="tab-frage">❓ Question</label>
<label for="tab-kommentar">💬 Comment</label>
</nav>

<div class="panel panel-dienst">
<p><strong>You'd like to book a service.</strong> Tell me which package interests you and in which environment it should run (Obsidian, team wiki, database, ...). The email is already prepared — just fill in the form field.</p>
<p>I usually reply within 24–48 hours with a concrete offer.</p>
<a class="pipeline-btn" href="mailto:raul.mina1@outlook.com?subject=Service%20request%20%E2%80%94%20Data%20Pipeline&body=Hello%2C%0A%0AI%27m%20interested%20in%20the%20following%20service%3A%0A%0A%20%20%5B%20%5D%20Knowledge%20Graph%20setup%20%28%E2%82%AC390%29%0A%20%20%5B%20%5D%20RAG%20%2B%20KG%20fusion%20setup%20%28%E2%82%AC340%29%0A%20%20%5B%20%5D%20Full%20data%20pipeline%20%28%E2%82%AC690%29%0A%20%20%5B%20%5D%20Pipeline%20audit%20%28%E2%82%AC150%29%0A%20%20%5B%20%5D%20Custom%20integration%20%28%E2%82%AC60%2Fh%29%0A%0AEnvironment%3A%0A%0AReply-to%20email%3A%0A%0AMessage%3A" target="_blank" rel="noopener">Request service →</a>
<p class="pipeline-meta">Alternatively via <a href="https://paypal.me/raulmina1" target="_blank" rel="noopener">PayPal</a> — after your selection I'll send you a payment link.</p>
</div>

<div class="panel panel-frage">
<p><strong>You have a question.</strong> Maybe about the technologies (GraphDB, ChromaDB, SPARQL), about scaling, about data protection, or whether it's worth it for your use case. Ask freely — it costs nothing and stays confidential.</p>
<a class="pipeline-btn" href="mailto:raul.mina1@outlook.com?subject=Question%20about%20the%20Data%20Pipeline&body=Hello%2C%0A%0AI%20have%20a%20question%20about%20the%20data%20pipeline%3A%0A%0AQuestion%3A%0A%0AReply-to%20email%3A" target="_blank" rel="noopener">Ask a question →</a>
<p class="pipeline-meta">I answer technical questions free of charge and without obligation.</p>
</div>

<div class="panel panel-kommentar">
<p><strong>You just want to share your comment about the page.</strong> Feedback, an idea, a tip, something I could improve — every bit of feedback helps. Pure praise or greeting messages are welcome too.</p>
<a class="pipeline-btn" href="mailto:raul.mina1@outlook.com?subject=Comment%20about%20the%20Data%20Pipeline&body=Hello%2C%0A%0AI%27d%20like%20to%20leave%20a%20comment%20about%20the%20page%3A%0A%0AComment%3A%0A%0AEmail%20for%20optional%20feedback%3A" target="_blank" rel="noopener">Leave a comment →</a>
<p class="pipeline-meta">Your email is used only for the reply and is not shared.</p>
</div>
</div>

> [!note] RA
> A pipeline is only finished when you can stop watching it.

---

*What happens to your notes when you're not looking? Write to me → raul.mina1@outlook.com*
