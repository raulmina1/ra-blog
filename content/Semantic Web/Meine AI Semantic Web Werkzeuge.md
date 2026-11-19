---
title: "Meine AI & Semantic Web Werkzeuge im Alltag"
tags:
  - ai
  - semantic-web
  - tools
  - knowledge-graph
  - ra-blog
description: "Die Werkzeuge, mit denen ich täglich arbeite: von meinem AI-Ökosystem über den Knowledge Graph bis zur Semantic-Web-Entwicklung. Alles selbst gebaut, Modelle frei wählbar."
reading_time: "5 min"
type: showcase
lang: de
publish: true
created: 2026-08-20
status: draft
semantic_class: showcase
see_also:
  - "[[AI Ecosystem]]"
  - "[[Semantic Web/KG-Context-vs-RAG]]"
  - "[[Semantic Web/Knowledge-Graphs]]"
  - "[[Projekte/AI Ecosystem Data Pipeline]]"
---

# Meine AI & Semantic Web Werkzeuge im Alltag

> Ich baue mir meine Werkzeuge selbst. Hier ist, womit ich jeden Tag arbeite — von der AI-Automatisierung bis zur Semantic-Web-Entwicklung.

Mein Tag läuft über ein **AI-Ökosystem**, das auf meinem Obsidian-Vault aufbaut, und eine **Semantic-Web-Entwicklung**, die aus Notizen einen echten Knowledge Graph macht. Alles selbst gebaut und ohne SaaS-Lock-in — die Modelle sind austauschbar: pro Projekt kommt der Anbieter zum Einsatz, der die regionalen Sicherheits- und Datenschutzvorgaben erfüllt.

## 🧠 AI-Ökosystem — die tägliche Automatisierung

| Werkzeug | Was es tut |
|----------|-----------|
| **Obsidian (YellowVault)** | Meine Wissensbasis — 4.063 Notizen, alle verknüpft |
| **Hermes Agent** | Die Agenten-Plattform, auf der meine Assistenten laufen (Prompt Runner, Watchdogs, Cron) |
| **Prompt Runner** | Dual-Watchdog, der Notizen mit `run_prompt: true` erkennt und automatisch verarbeitet (104+ Notizen) |
| **vault_structure_sync.py** | Orchestrator alle 30 Minuten: NER → Parse → Enrich → KG-Sync → RAG |
| **ner_extract.py** | Lokale Entity-Erkennung per Wörterbuch — 6.210 Mentions, 74 Entitäten |
| **frontmatter_enricher.py** | Reichert Notizen automatisch mit Tags, created und Aliassen an |
| **vault_rag.py** | Vektor-Index mit e5-small-Embeddings → ChromaDB (14.180 Chunks) |
| **hybrid_context.py** | Fusioniert Knowledge Graph + Vektor-RAG mit 0,5s Cache |
| **qa_kg.py** | Natürliche Sprache → SPARQL (DeepSeek) |
| **sparql_bridge.py** | `--kg-context` für Agenten: Tags, Backlinks, Nachbarn aus dem Graph |
| **RA Log Viewer** | Dashboard für Logs, Memory/CPU, Ecosistema-Tab — 24/7 |
| **ecosystem_status.py** | Status aller 8 Komponenten → Grafana + Telegram |

## 🕸️ Semantic Web — der Knowledge Graph

| Werkzeug | Was es tut |
|----------|-----------|
| **GraphDB** | RDF-Triplestore + SPARQL-Endpoint — 57.964 Triples im Repo `yellowvault` |
| **parse_vault_to_rdf.py** | Baut RDF-Triples aus dem Vault (inkrementell + 5-Uhr-Rebuild) |
| **load_ttl_to_graphdb.py** | Lädt die TTL-Exporte in 11 Chunks nach GraphDB |
| **kg_incremental_sync.py** | Hält den Graph stündlich frisch |
| **WebVOWL** | Visualisiert die Ontologie als interaktiven Graphen |
| **Grafana** | 5 SPARQL-Panels + Prometheus-Metriken |
| **yellowvault_export.ttl** | Die Ontologie als Turtle — 51.811 Triples |
| **ChromaDB** | Vektor-Datenbank für den RAG-Index (14.180 Chunks) |

## 🖥️ Infrastruktur & Plattform

| Werkzeug | Was es tut |
|----------|-----------|
| **Docker Desktop** | Läuft den ganzen Semantic-Web-Stack: GraphDB + WebVOWL + Grafana + RA Log Viewer |
| **Linux (WSL)** | Meine Entwicklungsumgebung — Scripts, Python, Node, Automatisierung |
| **Python 3.12** | Die Sprache hinter allen Pipeline-Scripts (NER, RDF, RAG, Sync) |
| **Node.js 22** | Für Quartz (Blog), Hermes und die Web-Tools |
| **Git / GitHub** | Versionierung + Deploy des Blogs (Quartz 4) und der Scripts |
| **Quartz 4** | Das Static-Site-Generator-Framework dieses Blogs |
| **Tailscale** | Sicheres Netzwerk zwischen meinen Geräten |
| **WhatsApp / Telegram Bridge** | Kommunikation mit meinen Agenten von überall |

## 🛡️ Betrieb — die langweilige Schicht

| Komponente | Job |
|------------|-----|
| **backup_graphdb.py** | Backup So 4 Uhr → OneDrive, Retention 7 |
| **sync_health_check.py** | Alarm unter 35K Triples |
| **keep-alive cron** | GraphDB 8–22 Uhr am Leben halten, Auto-Start 30–90s |
| **Cron jobs** | 79 automatisierte Jobs (Notifier, Healer, Sync, Backup) |

## Zahlen hinter dem System

| Etappe | Live-Kennzahlen |
|--------|-----------------|
| 📁 Quelle | 4.063 Notizen |
| ⚙️ Ingesta | 6.210 Mentions · 74 Entitäten · 30-Min-Tick |
| 🕸️ Knowledge Graph | 57.964 Triples · 51.811 im Export · stündlicher Sync |
| 🧠 Vektor-RAG | 14.180 Chunks · 5.810 Dateien · Cache 0,5s |
| 🛡️ Betrieb | 79 Cron-Jobs · Backup So 4 Uhr · Keep-alive 8–22 Uhr |

> [!note] RA
> Ein Werkzeug ist erst dann fertig, wenn du aufhören kannst, es zu beobachten.

---

*Was baust du dir selbst? Schreib mir → raul.mina1@outlook.com*
