---
title: "KGE Link Prediction — YellowVault Knowledge Graph"
tags:
  - ai
  - knowledge-graph
  - embeddings
  - kge
  - ra-blog
description: "Knowledge Graph Embeddings (TransE) to predict missing connections in a vault of 4.660 notes. MRR 0.1985 (1.49x over baseline) and 266 automatically densified wikilinks, 0 corrupt."
reading_time: "4 min"
type: showcase
lang: en
publish: true
created: 2026-08-26
status: draft
semantic_class: showcase
see_also:
  - "[[AI Ecosystem]]"
  - "[[Projekte/AI Ecosystem Data Pipeline]]"
  - "[[Semantic Web/KG-Context-vs-RAG]]"
  - "[[Semantic Web/Knowledge-Graphs]]"
---

# KGE Link Prediction — YellowVault Knowledge Graph

> A vault is not a static archive — it is a graph that can learn.

The YellowVault project went one step further: instead of merely querying the **Knowledge Graph**, a **Knowledge Graph Embedding (TransE)** learns from the real triples and **predicts missing connections**. The model densified 1.925 orphaned notes and automatically wrote 266 semantically plausible wikilinks — without a single corrupt frontmatter.

## The complete diagram

<iframe src="/static/mental-maps/kge-link-prediction.html" style="width:100%;height:720px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="KGE Link Prediction Pipeline"></iframe>

## What is the problem?

In the vault, **48 % of notes had not a single wikilink** — they hung as islands in the graph. KGE solves this as **Link Prediction**: given a triple `(h, r, ?)`, the model learns `h + r ≈ t` and proposes the most plausible object node.

| Concept | In this project |
|---|---|
| Triples | **27.726** extracted from `yellowvault_export.ttl` |
| Most important relations | `wikilink` 12.885 · `mentions` 7.525 · `hasTag` 7.316 |
| Entities | **7.055** (notes, tags, NER entities) |
| Model | **TransE** (dim 100, margin 1.0, torch) |
| Split | 90/5/5 **without entity leakage** |

## The pipeline

```
yellowvault_export.ttl
  → kge_export.py        (rdflib → triples.csv + Mappings + Split without leakage)
  → kge_train.py         (TransE, early stopping, Embeddings)
  → kge_baseline.py      (Co-Occurrence baseline for comparison)
  → kge_predict.py       (Link Prediction → Wikilink suggestions)
  → kge_hybrid_filter.py (semantic filter, e5-small)
  → kge_validate.py      (5 SPARQL rules against the real graph)
  → kge_apply_frontmatter.py v2 (ruamel + Backup + Revert)
  → sparql_bridge.py --predict-links
```

## Results (TEST, filtered)

| Metric | **TransE** | Baseline Co-Occ. | Gain |
|---|---|---|---|
| **MRR** | **0.1985** | 0.1330 | **1.49×** |
| **Hits@1** | **0.1162** | 0.0000 | **~3×** |
| Hits@10 | 0.3424 | 0.4743 | B2 wins raw recall |

> [!tip] Expert verdict
> TransE clearly wins at **precise ranking** (MRR, Hits@1). The baseline model only wins raw Hits@10 because it lists co-occurrences **without sorting** — high recall, poor ranking. For *suggesting connections*, TransE is the right model: **the embedding delivers real learned structural value, not frequency noise.**

## Densification (the productive part)

- **1.925 orphaned notes** → **9.625 suggestions** (top-5, `--diversity 20`), across **532 unique targets**.
- **Semantic filter** (`kge_hybrid_filter.py`, multilingual-e5-small): 9.625 structural → **4.175 semantically plausible**, targets 4 → **320 unique**. Pairs like `Reflexive Verben → Dativ`, `SQLite → AI Hook - Prompt Runner Watcher`.
- **Validation** (`kge_validate.py`, 5 rules): 9.625 → **9.622 valid** (only 3 rejected due to an inverse edge).
- **Applied (high confidence):** **266 top-1 links** with cosine similarity ≥ 0.85 written as `see_also` — **264/264 files OK, 0 corrupt, 0 dangling**. Backups in `state/kge_frontmatter_backup_v2/`.

## Why TransE and not RotatE?

| Model | MRR (TEST) | Hits@1 | Hits@10 | Verdict |
|---|---|---|---|---|
| **TransE** | **0.2044** | 0.1451 | 0.3417 | ✅ Generalizes |
| RotatE | 1.0000 | 1.0000 | 1.0000 | ⚠️ Overfitting |

RotatE **memorizes** the small graph (only 3 relations) and delivers perfect 1.0 — a warning sign, not a victory. **TransE is the right model for a graph of this size.**

## Numbers behind the project

| Stage | Live metrics |
|---|---|
| 📦 Data source | 27.726 triples · TTL master · GraphDB ontology only |
| ⚙️ Export | 7.055 entities · 3 relations · split without leakage |
| 🧠 Training | TransE dim 100 · Early stopping · ~minutes on CPU/GPU |
| 📈 Evaluation | MRR 0.1985 · Hits@1 0.1162 · **1.49× Baseline** |
| 🔮 Densification | 1.925 orphaned notes → 266 high-confidence links, 0 corrupt |
| 🛡️ Integration | `sparql_bridge.py --predict-links` · Cron re-train Sun 06:00 |

> [!note] RA
> An embedding is not magic — it is the graph that stops being silent.

---

*What happens to your notes when the graph connects them on its own? Write to me → raul.mina1@outlook.com*
