---
title: "RA Cron Shop"
tags:
  - crons
  - shop
  - automation
  - schedule
related:
  - "[[AI Ecosystem]]"
  - "[[Projekte/Prompt Shop|Prompt Shop]]"
  - "[[Projekte/Agent Shop|Agent Shop]]"
description: Pre-configured cron jobs running AI agents on schedule — daily German review, vault maintenance, blog sync, and custom automations with no manual triggers.
reading_time: "4 min"
publish: true
date: 2026-07-09
type: showcase
lang: en
semantic_class: showcase
see_also:
  - "[[Projekte/Prompt Shop]]"
  - "[[Projekte/Agent Shop]]"
  - "[[Projekte/Hook Shop]]"
  - "[[AI Ecosystem]]"
relationship:
  - "references: [[AI Ecosystem]]"
  - "requires: [[Projekte/Agent Shop]]"
  - "related_to: [[Projekte/Prompt Shop]]"
  - "related_to: [[Projekte/Hook Shop]]"
---

###### Related: [[Projekte/Prompt Shop|Prompt Shop]] | [[Projekte/Agent Shop|Agent Shop]] | [[Projekte/Hook Shop|Hook Shop]]

---

# RA Cron Shop

> Scheduled AI automations that run without you. A cron is a prompt + agent + schedule bundled into one package — fire and forget.

Unlike a prompt (one-time) or an agent (on-demand), a cron runs **automatically at set intervals**. You never have to remember to run it. It just works.

---

## How a cron works

```mermaid
flowchart LR
    A[⏰ Schedule<br/>fires] --> B[Hermes loads<br/>agent + skill]
    B --> C[Agent executes<br/>defined prompt]
    C --> D[Output written<br/>to vault / delivered]
    D --> E[Logged to<br/>cron history]
    E --> A
    
    style A fill:#1a1a1a,stroke:#f0c040,color:#fff
    style B fill:#1a1a1a,stroke:#f0c040,color:#fff
    style C fill:#1a1a1a,stroke:#f0c040,color:#fff
    style D fill:#1a1a1a,stroke:#f0c040,color:#fff
    style E fill:#1a1a1a,stroke:#f0c040,color:#fff
```

---

## Packs & Pricing

| Pack | Crons included | Price |
|------|----------------|-------|
| 🇩🇪 Daily German Routine | 3 crons | €35 |
| 🗂️ Vault Maintenance Pack | 3 crons | €35 |
| 🔧 Custom Cron (your spec) | 1 bespoke schedule | €20 |
| 📦 Complete Cron Bundle — All 6 | 6 crons | **€55** |

To order: **raul.mina1@outlook.com** — include which pack(s) you want.

---

## 🇩🇪 Daily German Routine — €35

3 crons that keep your German practice going every day without lifting a finger.

| Cron | Schedule | What it does |
|------|----------|-------------|
| **Daily Vocabulary Review** | Every morning | Picks 10 random vocabulary cards from your vault and generates a formatted review note with conjugations, example sentences, and gender reminders. |
| **VHS Class Processing** | After class | Reads the latest class note and triggers Klodi to generate Anki cards. If no new class note, stays silent. |
| **Weekly Summary** | Every Sunday | Synthesizes the week's new vocabulary, grammar concepts, and mistakes into one master review note. |

### Flowchart: Daily German Routine

```mermaid
flowchart TD
    A["⏰ 07:00<br/>Daily Review"] --> B[Pick 10 random<br/>vocab cards from vault]
    B --> C[Generate review note<br/>with conjugations + examples]
    C --> D[Note delivered<br/>to daily inbox]
    
    E["⏰ After class<br/>(detected via file change)"] --> F[Read latest<br/>VHS class note]
    F --> G{New content?}
    G -->|Yes| H[Generate Anki cards<br/>via Klodi agent]
    G -->|No| I[Skip — stay silent]
    
    J["⏰ Sunday 18:00<br/>Weekly Summary"] --> K[Scan week's<br/>new vocabulary]
    K --> L[Generate master<br/>review note]
    L --> M[Note written to<br/>German folder]
    
    style A fill:#1a1a1a,stroke:#f0c040,color:#fff
    style B fill:#1a1a1a,stroke:#f0c040,color:#fff
    style C fill:#1a1a1a,stroke:#f0c040,color:#fff
    style D fill:#1a1a1a,stroke:#f0c040,color:#fff
    style E fill:#1a1a1a,stroke:#f0c040,color:#fff
    style F fill:#1a1a1a,stroke:#f0c040,color:#fff
    style G fill:#1a1a1a,stroke:#f0c040,color:#fff
    style H fill:#1a1a1a,stroke:#f0c040,color:#fff
    style I fill:#1a1a1a,stroke:#f0c040,color:#fff
    style J fill:#1a1a1a,stroke:#f0c040,color:#fff
    style K fill:#1a1a1a,stroke:#f0c040,color:#fff
    style L fill:#1a1a1a,stroke:#f0c040,color:#fff
    style M fill:#1a1a1a,stroke:#f0c040,color:#fff
```

---

## 🗂️ Vault Maintenance Pack — €35

3 crons that keep your vault clean, backed up, and growing.

| Cron | Schedule | What it does |
|------|----------|-------------|
| **Daily Note Processor** | Every evening | Reads the day's daily note, extracts completed tasks, moves them to the task archive, and appends unfinished tasks to tomorrow's note. |
| **Weekly Vault Audit** | Every Monday | Scans the vault for orphan notes (no wikilinks pointing to them), suggests folders for unclassified notes, and reports vault health metrics. |
| **Blog Sync** | Every 6 hours | Checks the blog source folder for new publishable notes, runs Privacy Firewall, copies approved notes to Quartz `content/`, and runs `quartz sync`. |

### Flowchart: Vault Maintenance Pipeline

```mermaid
flowchart TD
    A["⏰ 22:00<br/>Daily Note Processor"] --> B[Read today's<br/>daily note]
    B --> C[Extract completed<br/>tasks]
    C --> D[Move to<br/>task archive]
    D --> E[Carry forward<br/>unfinished tasks]
    
    F["⏰ Monday 09:00<br/>Weekly Audit"] --> G[Scan vault for<br/>orphan notes]
    G --> H{Orphans found?}
    H -->|Yes| I[Suggest folder<br/>placement]
    H -->|No| J[Report: vault<br/>healthy ✓]
    I --> K[Generate audit<br/>report note]
    J --> K
    
    L["⏰ Every 6h<br/>Blog Sync"] --> M[Check source<br/>folder for notes]
    M --> N{Run Privacy<br/>Firewall}
    N -->|Pass| O[Copy to content/]
    N -->|Fail| P[Report blocked<br/>note]
    O --> Q["npx quartz sync<br/>→ deploy"]
    
    style A fill:#1a1a1a,stroke:#f0c040,color:#fff
    style B fill:#1a1a1a,stroke:#f0c040,color:#fff
    style C fill:#1a1a1a,stroke:#f0c040,color:#fff
    style D fill:#1a1a1a,stroke:#f0c040,color:#fff
    style E fill:#1a1a1a,stroke:#f0c040,color:#fff
    style F fill:#1a1a1a,stroke:#f0c040,color:#fff
    style G fill:#1a1a1a,stroke:#f0c040,color:#fff
    style H fill:#1a1a1a,stroke:#f0c040,color:#fff
    style I fill:#1a1a1a,stroke:#f0c040,color:#fff
    style J fill:#1a1a1a,stroke:#f0c040,color:#fff
    style K fill:#1a1a1a,stroke:#f0c040,color:#fff
    style L fill:#1a1a1a,stroke:#f0c040,color:#fff
    style M fill:#1a1a1a,stroke:#f0c040,color:#fff
    style N fill:#1a1a1a,stroke:#f0c040,color:#fff
    style O fill:#1a1a1a,stroke:#f0c040,color:#fff
    style P fill:#1a1a1a,stroke:#f0c040,color:#fff
    style Q fill:#1a1a1a,stroke:#f0c040,color:#fff
```

---

## 🔧 Custom Cron — €20

Describe the schedule and the task. I build the cron.

**What you get:**
- Cron manifest with exact schedule
- Prompt + skill configuration
- Hermes cron job definition
- Delivery configuration (vault, email, or message)
- Tested end-to-end

**Examples:**
- Nightly backup status report
- Weekly AI art prompt delivery
- Monthly expense report generator
- Daily quote or word-of-the-day
- Periodic market/price checker

---

## 📦 Complete Cron Bundle — All 6 crons — €55

Everything in both packs at a discount. Save €15 vs. buying separately.

---

## Order

[![Pay with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/raulmina1)

1. Fill the form below with your email and which cron(s) you want
2. You'll pay via PayPal (raulmina1@outlook.com)
3. After payment, you'll receive the cron manifests + setup within 24 hours

**[Request Form →](mailto:raul.mina1@outlook.com?subject=Cron%20Pack%20Order&body=Email:%0A%0ACrons%20wanted:%0A%0AMessage:)** *Click to send me an email. Include your email, which crons you want, and the schedule for Custom orders.*

> [!warning] Requirements
> You need **Hermes Agent** (or compatible cron system) to run these schedules. No coding required — just import the JSON definitions.

---

> [!note] RA
> The best automation is the one you forget exists because it always just works.

*What schedule would make your life easier if it just ran by itself? → [raul.mina1@outlook.com](mailto:raul.mina1@outlook.com)*
