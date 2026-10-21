---
title: "An AI system that monitors itself"
tags:
  - ai
  - ecosystem
  - automation
  - ra-blog
description: "My complete AI ecosystem on one page: 4.063 notes, dual watchdog, two brains (GraphDB + ChromaDB), all local — a system that monitors itself."
reading_time: "4 min"
type: showcase
lang: en
publish: true
created: 2026-08-14
status: published
semantic_class: showcase
see_also:
  - "[[AI Ecosystem]]"
  - "[[Projekte/AI Ecosystem One-Pager Innenansicht]]"
  - "[[Projekte/AI Ecosystem Data Pipeline]]"
---

# An AI system that monitors itself

> I didn't buy a productivity system — I built one that monitors itself.

Over the last few months, my Obsidian vault has grown into a complete AI ecosystem: **130+ components, 12 autonomous agents, 44 prompts, 5 hooks** — all local, 24/7, no SaaS lock-in.

The one-pager behind it is brutally simple: **4.063 notes → dual watchdog + orchestrator every 30 minutes → two parallel brains → agents → back to the notes.**

## The complete diagram

<iframe src="/static/mental-maps/ecosystem-one-pager.html" style="width:100%;height:720px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="AI ecosystem One-Pager"></iframe>

## Two brains, one system

| Brain | Stores | Status |
|--------|-----------|-------|
| 🕸️ **GraphDB** | Structure — who is connected to whom | 51.811 Triples |
| 🧠 **ChromaDB** | Meaning — what is similar to what | 14.180 Chunks |

Every 30 minutes the vault reorganizes itself: tags, links, entities (6.210 mentions recognized), knowledge-graph sync, semantic index. No manual effort.

## The system heals itself

When a watcher dies, the system repairs itself — I no longer watch. **It monitors itself.**

## Numbers behind the one-pager

| Layer | Components | Live metrics |
|-------|-------------|-----------------|
| 📁 Source | Obsidian vault, `run_prompt: true` | 4.063 notes |
| ⚙️ Automation | `vault_structure_sync.py` every 30 min, NER, RDF parse, embeddings | 6.210 mentions · 74 entities |
| 🗄️ Two brains | GraphDB (triples) + ChromaDB (chunks) | 51.811 triples · 14.180 chunks · 5.810 files |
| 🔌 Access | `sparql_bridge`, `hybrid_context`, `qa_kg` | Prompt Runner v3.17 |
| 👁️ Visualization & monitoring | WebVOWL · Grafana · RA Log Viewer | 5 SPARQL panels · 30s refresh |
| 🛡️ Operations | Backup · Health · Keep-alive · Auto-start | Backup Sun 4 am · 35K threshold |

> [!note] RA
> Every system I've built is a mirror of a gap I found — not in the tools, but in how I used them.

---

*What would your own system look like if you stopped buying tools? Write me → raul.mina1@outlook.com*
