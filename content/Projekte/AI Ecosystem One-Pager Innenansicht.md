---
title: "A Look Inside: My AI Ecosystem on One Page"
tags:
  - ai
  - ecosystem
  - architecture
  - ra-blog
description: "Six layers, 16 nodes, no dead space: what really lives inside my AI ecosystem — from source to operations, with real numbers."
reading_time: "4 min"
type: showcase
lang: en
publish: true
created: 2026-08-14
status: published
semantic_class: showcase
see_also:
  - "[[AI Ecosystem]]"
  - "[[Projekte/AI Ecosystem One-Pager Autonomie]]"
  - "[[Projekte/AI Ecosystem Data Pipeline]]"
---

# A Look Inside: My AI Ecosystem on One Page

> An AI ecosystem — one page, six layers, zero dead space.

This is what my system looks like from the inside — in a single diagram, 16 nodes, all local, no SaaS:

<iframe src="/static/mental-maps/ecosystem-one-pager.html" style="width:100%;height:720px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="AI ecosystem One-Pager"></iframe>

## The Six Layers

### 📁 Source — 4.063 notes

Everything starts in the Obsidian vault. Every note with `run_prompt: true` activates the pipeline — guarded by a **dual watchdog** (1s polling, shared registry, 104+ runs).

### ⚙️ Automation — every 30 minutes

The orchestrator `vault_structure_sync.py` runs on a 30-minute cycle:

| Step | Script | Metric |
|---------|--------|----------|
| NER | `ner_extract.py` | 6.210 mentions · 74 entities |
| Enrichment | `frontmatter_enricher.py` | tags · created · aliases |
| Parse | `parse_vault_to_rdf.py` | incremental · 5 AM full build |
| Embeddings | `vault_rag.py` | e5-small |

### 🗄️ Two Brains

| Brain | What it stores | Status |
|--------|------------------|-------|
| 🕸️ **GraphDB** | structure (triples) | 51.811 triples · 4.063 notes · 226K 2-hop |
| 🧠 **ChromaDB** | meaning (chunks) | 14.180 chunks · 5.810 files |

### 🔌 Access — three query paths

`sparql_bridge` (KG context), `hybrid_context` (KG + RAG fused), `qa_kg` (natural language → SPARQL) — all feed **Prompt Runner v3.17**.

### 👁️ Visualization & Monitoring

WebVOWL (ontology browser), Grafana (5 SPARQL panels), RA Log Viewer (30s refresh).

### 🛡️ Operations

Backup Sundays at 4 AM, health check with a 35K threshold, keep-alive 8 AM–10 PM, auto-start 30–90s.

> [!note] RA
> Every system I've built is a mirror of a gap I found — not in the tools, but in how I used them.

---

*If a system is so complex it no longer fits on one page — do you really understand it? Write me → raul.mina1@outlook.com*
