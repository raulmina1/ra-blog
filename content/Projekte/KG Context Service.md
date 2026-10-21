---
title: "KG Context Service — your Vault as a Knowledge Graph"
tags:
  - knowledge-graph
  - service
  - semantic-web
  - ra-blog
  - shop
related:
  - "[[AI Ecosystem]]"
  - "[[Projekte/Agent Shop|Agent Shop]]"
  - "[[Projekte/Prompt Shop|Prompt Shop]]"
description: "I build you a Knowledge Graph from your Obsidian vault: every note knows where it lives. Wikilinks, tags, neighbors — exact, deterministic, zero hallucination. Plus vector RAG and link prediction."
reading_time: "4 min"
publish: true
date: 2026-09-05
type: showcase
lang: en
semantic_class: showcase
see_also:
  - "[[Projekte/KGE Link Prediction YellowVault]]"
  - "[[Projekte/Agent Shop]]"
  - "[[Projekte/Prompt Shop]]"
---

###### Related: [[Projekte/Agent Shop|Agent Shop]] | [[Projekte/Prompt Shop|Prompt Shop]] | [[Projekte/KGE Link Prediction YellowVault|KGE]]

---

# KG Context Service — your Vault as a Knowledge Graph

> Every note knows where it lives. I build you a Knowledge Graph from your Obsidian vault so your notes connect themselves — exact, deterministic, zero hallucination.

Your vault is full of knowledge, but it is **scattered**. Notes exist, but nobody knows how they are connected. The KG Context solves exactly that: it makes the **structure of your knowledge** visible and queryable.

---

## 🎯 Who this is for

> [!question] Do you know this?
> “I have thousands of notes — and I don't know what relates to what.”
> “A year ago we had the same problem — and nobody remembers how we solved it.”
> “My AI answers with things that aren't even in my notes.”

If one of these sentences comes from you, this here is built for you:

| Profile | Situation |
|--------|-----------|
| 🧳 **Freelancers & consultants** | 3+ years of project notes, nothing is findable anymore |
| 👥 **Small teams (3–15)** | Documentation in Markdown, but no searchable knowledge |
| 🎓 **Researchers & PhD students** | Thousands of notes and PDFs, connections invisible |

**What changes — in one sentence:** Your notes stop being text and become a network in which every note knows what it belongs to. Your AI no longer invents anything, because it only sees connections that **actually exist**.

---

## 🗺️ The complete flow

<iframe src="/static/mental-maps/kg-context-service.html" style="width:100%;height:720px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="KG Context Service — flow diagram"></iframe>

---

## ⚙️ What I built

A complete knowledge-graph stack that turns an Obsidian vault into a queryable semantic network:

> [!note] 📁 Vault → RDF
> Every note becomes an **entity**, every wikilink becomes an **edge**, every tag becomes a **connection**. Your knowledge becomes a graph.

> [!info] 🗄️ GraphDB (SPARQL)
> Triplestore with **OWL reasoning** — queries the structure: who links to whom? Which tags? Which neighbors?

> [!success] 🧠 KG Context
> Injects the structure as **context into the prompt** — the model sees where the note lives in the network.

> [!tip] 🤖 KGE Link Prediction
> Machine learning (TransE) predicts **missing connections** — the graph learns.

**The numbers (live 27.09.26):**

| Metric | Value |
|--------|------|
| Notes | 8.175 |
| Wikilinks | 15.459 |
| Tags | 1.992 (9.046 assignments) |
| Triples in the graph | 68.311 |
| Vector chunks (RAG) | 13.659 |
| Entities in KGE | 8.597 |

---

## 💡 Why structure matters

> [!example] A note is never alone
> The graph knows its relatives — who links to it, which tags it shares, which neighbors it has. That is context that was **not typed**. It emerges automatically from the structure of the knowledge.

> [!success] Zero hallucination
> The KG delivers only connections that **physically exist**. No invented edges, no interpretation — exact and deterministic.

---

## 🚀 How you can use it for your services

The KG Context is not an end in itself — it is the **basis for better AI agents**. When your agents know where every note lives in the network, they work with the full context:

> [!note] 🎯 Better answers
> The agent sees the **structure + the meaning** — not just a piece of text.

> [!success] 🛡️ Less hallucination
> Context is based on **real connections**, not on guesses.

> [!info] 🔄 Automatic linking
> New notes are **automatically** placed into the graph.

> [!tip] 🔍 Semantic search
> Ask the graph: *"What is connected to this topic?"*

---

## 💰 Packs & Pricing

| Pack | What you get | Price |
|------|----------------|-------|
| 🕸️ **KG Context Setup** | Vault → RDF → GraphDB → KG Context, fully set up | €120 |
| 🧠 **KG + RAG Fusion** | KG Context + vector RAG (ChromaDB) — the complete memory | €180 |
| 🤖 **KG + Agents** | KG Context + 2 custom agents that use the graph | €240 |
| 📦 **Complete KG system** | Everything above + KGE Link Prediction + dashboard | **€350** |

> [!tip] Ongoing support (recommended)
> **+ €30–50 / month** — graph sync, updates, agent operations and support. Your graph stays current without you having to touch anything.
> One-time setup from **€120** · monthly from **€30**. Cancelable monthly.

To order: **raul.mina1@outlook.com** — include which pack(s) you want.

---

## 📈 Runs in production — on my own vault

This is not a concept, but a system in daily operation:

| What | Detail |
|-----|--------|
| 🗂️ Base | 8.175 notes, 15.459 wikilinks, 68.311 triples |
| 🧠 Memory | 13.659 vector chunks, KG + RAG fused in a single retrieval |
| 🔮 Prediction | 8.597 entities in the KGE model (TransE) — suggests connections that are not yet written |
| ⚙️ Operations | daily syncs, 100+ cron jobs, agents that query the graph live |

**Verifiable, not claimed:** Every link and every tag that the KG Context delivers physically exists in your vault. You can look up every answer.

---

## 🛒 Order

[![Pay with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/raulmina1)

1. Fill the form below with your email and which pack you want
2. You'll pay via PayPal (raulmina1@outlook.com)
3. After payment, you'll receive the setup files + documentation within 48 hours

**[Request Form →](mailto:raul.mina1@outlook.com?subject=KG%20Context%20Service%20Order&body=Email:%0A%0APack%20wanted:%0A%0AMessage:)** *Click to send me an email. Include your email, which pack you want, and a short description of your vault.*

> [!warning] Requirements
> You need **Obsidian** (or any Markdown vault) and **Docker Desktop** (for GraphDB). No coding required — I handle the setup.

> [!info] Invoice & small-business regulation
> I invoice as a small business under **§ 19 UStG** — no VAT is shown. Tax number on the invoice: **36/445/03887**. Payment via PayPal or bank transfer; the invoice comes with delivery.

---

> [!note] RA
> A Knowledge Graph is the silent factory behind every good prompt. The structure is the product.

*Which note in your vault should connect with what? I'm curious what you'll build. → [raul.mina1@outlook.com](mailto:raul.mina1@outlook.com)*
