---
title: "KG Context Service — dein Vault als Wissensgraph"
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
description: "Ich baue dir einen Knowledge Graph aus deinem Obsidian-Vault: Jede Notiz weiß, wo sie lebt. Wikilinks, Tags, Nachbarn — exakt, deterministisch, null Halluzination. Plus Vektor-RAG und Link Prediction."
reading_time: "4 min"
publish: true
date: 2026-09-05
type: showcase
lang: de
semantic_class: showcase
see_also:
  - "[[Projekte/KGE Link Prediction YellowVault]]"
  - "[[Projekte/Agent Shop]]"
  - "[[Projekte/Prompt Shop]]"
---

###### Related: [[Projekte/Agent Shop|Agent Shop]] | [[Projekte/Prompt Shop|Prompt Shop]] | [[Projekte/KGE Link Prediction YellowVault|KGE]]

---

# KG Context Service — dein Vault als Wissensgraph

> Jede Notiz weiß, wo sie lebt. Ich baue dir einen Knowledge Graph aus deinem Obsidian-Vault, damit deine Notizen sich selbst verbinden — exakt, deterministisch, null Halluzination.

Dein Vault ist voller Wissen, aber es ist **verstreut**. Notizen existieren, aber niemand weiß, wie sie zusammenhängen. Der KG Context löst genau das: Er macht die **Struktur deines Wissens** sichtbar und abfragbar.

---

## 🎯 Für wen das ist

> [!question] Kennst du das?
> „Ich habe tausende Notizen — und weiß nicht, was womit zusammenhängt."
> „Vor einem Jahr hatten wir dasselbe Problem — und keiner erinnert sich, wie wir es gelöst haben."
> „Meine KI antwortet mit Dingen, die gar nicht in meinen Notizen stehen."

Wenn einer dieser Sätze von dir kommt, ist das hier für dich gebaut:

| Profil | Situation |
|--------|-----------|
| 🧳 **Selbstständige & Berater** | 3+ Jahre Projektnotizen, nichts ist mehr auffindbar |
| 👥 **Kleine Teams (3–15)** | Dokumentation in Markdown, aber kein durchsuchbares Wissen |
| 🎓 **Forschende & Doktoranden** | Tausende Notizen und PDFs, Verbindungen unsichtbar |

**Was sich ändert — in einem Satz:** Deine Notizen hören auf, Text zu sein, und werden ein Netz, in dem jede Notiz weiß, wozu sie gehört. Deine KI erfindet nichts mehr, weil sie nur Verbindungen sieht, die **wirklich existieren**.

---

## 🗺️ Der komplette Fluss

<iframe src="/static/mental-maps/kg-context-service.html" style="width:100%;height:720px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="KG Context Service — Flussdiagramm"></iframe>

---

## ⚙️ Was ich gebaut habe

Ein kompletter Knowledge-Graph-Stack, der aus einem Obsidian-Vault ein abfragbares semantisches Netz macht:

> [!note] 📁 Vault → RDF
> Jede Notiz wird zu einer **Entität**, jeder Wikilink zu einer **Kante**, jeder Tag zu einer **Verbindung**. Dein Wissen wird zu einem Graphen.

> [!info] 🗄️ GraphDB (SPARQL)
> Triplestore mit **OWL-Reasoning** — fragt die Struktur ab: Wer verlinkt wen? Welche Tags? Welche Nachbarn?

> [!success] 🧠 KG Context
> Injiziert die Struktur als **Kontext in den Prompt** — das Modell sieht, wo die Notiz im Netz lebt.

> [!tip] 🤖 KGE Link Prediction
> Machine Learning (TransE) sagt **fehlende Verbindungen** voraus — der Graph lernt.

**Die Zahlen (live 27.09.26):**

| Metrik | Wert |
|--------|------|
| Notizen | 8.175 |
| Wikilinks | 15.459 |
| Tags | 1.992 (9.046 Zuweisungen) |
| Triples im Graphen | 68.311 |
| Vektor-Chunks (RAG) | 13.659 |
| Entitäten im KGE | 8.597 |

---

## 💡 Warum Struktur zählt

> [!example] Eine Notiz ist nie allein
> Der Graph kennt ihre Verwandten — von wem sie verlinkt wird, welche Tags sie teilt, welche Nachbarn sie hat. Das ist Kontext, den man **nicht getippt hat**. Er entsteht automatisch aus der Struktur des Wissens.

> [!success] Null Halluzination
> Der KG liefert nur Verbindungen, die **physisch existieren**. Keine erfundenen Kanten, keine Interpretation — exakt und deterministisch.

---

## 🚀 Wie du es für deine Services nutzen kannst

Der KG Context ist kein Selbstzweck — er ist die **Basis für bessere AI-Agenten**. Wenn deine Agenten wissen, wo jede Notiz im Netz lebt, arbeiten sie mit dem vollen Kontext:

> [!note] 🎯 Bessere Antworten
> Der Agent sieht die **Struktur + die Bedeutung** — nicht nur ein Stück Text.

> [!success] 🛡️ Weniger Halluzination
> Kontext basiert auf **echten Verbindungen**, nicht auf Vermutungen.

> [!info] 🔄 Automatische Vernetzung
> Neue Notizen werden **automatisch** in den Graphen eingeordnet.

> [!tip] 🔍 Semantische Suche
> Frag den Graphen: *"Was hängt mit diesem Thema zusammen?"*

---

## 💰 Packs & Pricing

| Pack | Was du bekommst | Preis |
|------|----------------|-------|
| 🕸️ **KG Context Setup** | Vault → RDF → GraphDB → KG Context, komplett eingerichtet | €120 |
| 🧠 **KG + RAG Fusion** | KG Context + Vektor-RAG (ChromaDB) — die vollständige Erinnerung | €180 |
| 🤖 **KG + Agenten** | KG Context + 2 Custom-Agenten, die den Graphen nutzen | €240 |
| 📦 **Komplettes KG-System** | Alles oben + KGE Link Prediction + Dashboard | **€350** |

> [!tip] Laufende Betreuung (empfohlen)
> **+ €30–50 / Monat** — Graph-Sync, Updates, Agenten-Betrieb und Support. Dein Graph bleibt aktuell, ohne dass du etwas anfassen musst.
> Einmal-Setup ab **€120** · monatlich ab **€30**. Kündbar monatlich.

To order: **raul.mina1@outlook.com** — include which pack(s) you want.

---

## 📈 Läuft produktiv — auf meinem eigenen Vault

Das ist kein Konzept, sondern ein System im Tagesbetrieb:

| Was | Detail |
|-----|--------|
| 🗂️ Basis | 8.175 Notizen, 15.459 Wikilinks, 68.311 Triples |
| 🧠 Erinnerung | 13.659 Vektor-Chunks, KG + RAG fusioniert in einem Abruf |
| 🔮 Vorhersage | 8.597 Entitäten im KGE-Modell (TransE) — schlägt Verbindungen vor, die noch nicht geschrieben sind |
| ⚙️ Betrieb | tägliche Syncs, 100+ Cron-Jobs, Agenten die den Graphen live abfragen |

**Prüfbar, nicht behauptet:** Jeder Link und jeder Tag, den der KG Context liefert, existiert physisch in deinem Vault. Du kannst jede Antwort nachschlagen.

---

## 🛒 Order

[![Pay with PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/raulmina1)

1. Fill the form below with your email and which pack you want
2. You'll pay via PayPal (raulmina1@outlook.com)
3. After payment, you'll receive the setup files + documentation within 48 hours

**[Request Form →](mailto:raul.mina1@outlook.com?subject=KG%20Context%20Service%20Order&body=Email:%0A%0APack%20wanted:%0A%0AMessage:)** *Click to send me an email. Include your email, which pack you want, and a short description of your vault.*

> [!warning] Requirements
> You need **Obsidian** (or any Markdown vault) and **Docker Desktop** (for GraphDB). No coding required — I handle the setup.

> [!info] Rechnung & Kleinunternehmerregelung
> Ich rechne als Kleinunternehmer nach **§ 19 UStG** ab — keine Umsatzsteuer wird ausgewiesen. Steuernummer auf der Rechnung: **36/445/03887**. Zahlung per PayPal oder Überweisung; Rechnung kommt mit der Lieferung.

---

> [!note] RA
> Ein Knowledge Graph ist die stille Fabrik hinter jedem guten Prompt. Die Struktur ist das Produkt.

*Welche Notiz in deinem Vault sollte sich mit was verbinden? Ich bin gespannt, was du baust. → [raul.mina1@outlook.com](mailto:raul.mina1@outlook.com)*
