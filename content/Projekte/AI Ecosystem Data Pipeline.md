---
title: "Der Weg einer Notiz: meine Daten-Pipeline"
tags:
  - ai
  - ecosystem
  - data-pipeline
  - ra-blog
  - services
  - pricing
description: "Was passiert mit einer Notiz, nachdem du sie geschrieben hast? NER → Knowledge Graph (51.811 Triples) → RAG (14.180 Chunks). Meine lokale Daten-Pipeline, alle 30 Minuten. Jetzt auch als Dienstleistung buchbar."
reading_time: "5 min"
type: showcase
lang: de
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

# Der Weg einer Notiz: meine Daten-Pipeline

> Ich schreibe eine Notiz. Dann passiert etwas — ohne dass ich einen Finger rühre.

Jede Notiz in meinem Obsidian-Vault durchläuft eine Daten-Pipeline: **Entitäten werden erkannt, Metadaten angereichert, alles wird in einen Knowledge Graph (51.811 Triples) und parallel in einen Vektor-Index (14.180 Chunks) verwandelt.** Alle 30 Minuten, automatisch, lokal — ohne SaaS.

## Das komplette Diagramm

<iframe src="/static/mental-maps/ecosystem-data-pipeline.html" style="width:100%;height:720px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="Daten-Pipeline AI-Ökosystem"></iframe>

## DP-1 · Ingesta & Anreicherung

Ein Orchestrator (`vault_structure_sync.py`) tickt alle 30 Minuten und koordiniert:

| Schritt | Werkzeug | Ergebnis |
|---------|----------|----------|
| Entity-Erkennung | `ner_extract.py` (lokal, Wörterbuch) | 6.210 Mentions · 74 Entitäten |
| Zwischenspeicher | `ner_cache.ndjson` + `mentions.ttl` | Input für den RDF-Parser |
| Anreicherung | `frontmatter_enricher.py` | Tags, created, Aliase — mit Backup + Changelog |

## DP-2 · Knowledge Graph

- **`parse_vault_to_rdf.py`** baut inkrementell (`--since` + State-File) RDF-Triples; um 5 Uhr ein kompletter Rebuild (`--replace`).
- **`yellowvault_export.ttl`** — 51.811 Triples — wird in **11 Chunks** nach **GraphDB** geladen.
- Stündlich hält **`kg_incremental_sync.py`** den Graph frisch (inkl. WebVOWL-Refresh).
- Drei Dashboards lesen direkt vom Graph: **WebVOWL :3000** (Ontologie), **Grafana :4000** (5 SPARQL-Panels), **RA Log Viewer :8485** (Ecosistema-Tab).

## DP-3 · Vektor-RAG

Notizen werden mit **e5-small** eingebettet → **ChromaDB** (14.180 Chunks, 5.810 Dateien). Ein optionaler **Cross-Encoder** re-rankt die Treffer. `hybrid_context.py` fusioniert KG- und Vektor-Ergebnisse — mit 0,5s Cache.

## DP-4 · Konsumenten

Drei Abfrage-Pfade speisen den **Prompt Runner**:

| Agent | Funktion |
|-------|----------|
| `sparql_bridge --kg-context` | 3 SPARQL-Queries: Tags, Backlinks, Nachbarn → Kontextblock |
| `qa_kg` | Natürliche Sprache → SPARQL |
| `hybrid_context` | KG + RAG fusioniert |

## DP-5 · Betrieb — die langweilige Schicht

| Komponente | Job |
|------------|-----|
| `backup_graphdb.py` | Backup So 4 Uhr → OneDrive, Retention 7 |
| `sync_health_check.py` | Alarm unter 35K Triples |
| `keep-alive cron` | GraphDB 8–22 Uhr am Leben halten, Auto-Start 30–90s |
| `ecosystem_status.py` | Status → Grafana + Telegram |

## Zahlen hinter der Pipeline

| Etappe | Live-Kennzahlen |
|--------|-----------------|
| 📁 Quelle | 4.063 Notizen |
| ⚙️ Ingesta | 6.210 Mentions · 74 Entitäten · 30-Min-Tick |
| 🕸️ Knowledge Graph | 51.811 Triples · 11 Chunks · stündlicher Sync |
| 🧠 Vektor-RAG | 14.180 Chunks · 5.810 Dateien · Cache 0,5s |
| 🛡️ Betrieb | Backup So 4 Uhr · 35K-Schwelle · Keep-alive 8–22 Uhr |

---

## Dienstleistungen & Preise

Diese Pipeline ist kein einmaliges Experiment — sie läuft bei mir jeden Tag. Wenn du so etwas für deinen eigenen Wissensbestand, dein Team oder dein Produkt willst, buche ich es auf, installiere und dokumentiere es. Alles läuft lokal, ohne SaaS-Zwangsabos.

| Paket | Was du bekommst | Preis |
|-------|-----------------|-------|
| 🧠 **Knowledge Graph Setup** | NER → RDF → GraphDB, einmalig aufgebaut und geladen, inkl. SPARQL-Endpoint und WebVOWL-Ansicht | €390 |
| 🔍 **RAG + KG-Fusion Setup** | ChromaDB-Vektorindex, Cross-Encoder, `hybrid_context` (KG + Vektor fusioniert) | €340 |
| 📦 **Komplette Daten-Pipeline** | Ingesta + Knowledge Graph + Vektor-RAG + Doku, alles alle 30 Min automatisch | **€690** |
| 🩺 **Pipeline-Audit (bestehendes Setup)** | Architektur-Review, Performance-Flaschenhälse, Sicherheits-Check, Bericht | €150 |
| 🛠️ **Custom Integration** | Nach deinem Stack (Docker, Obsidian, Confluence, Datenbank) — Stundensatz | €60/h |

> [!warning] Was inklusive ist
> Einmaliges Setup + Installations-Call (30 Min) + Dokumentation. Laufende Wartung über separate Betreuung nach Absprache. Preise zzgl. Umsatzsteuer.

---

## Wie kann ich dir helfen?

Wähle unten, was du vorhast — ich bekomme automatisch eine passend vorbereitete Nachricht. Wenn es nur eine kurze Frage oder ein Kommentar zur Seite ist: Wähle die entsprechende Registerkarte. Kein Anruf nötig, antworte per E-Mail.

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
<label for="tab-dienst">🛒 Dienstleistung</label>
<label for="tab-frage">❓ Frage</label>
<label for="tab-kommentar">💬 Kommentar</label>
</nav>

<div class="panel panel-dienst">
<p><strong>Du möchtest eine Dienstleistung buchen.</strong> Sag mir, welches Paket dich interessiert und in welcher Umgebung es laufen soll (Obsidian, Team-Wiki, Datenbank, ...). Die E-Mail ist schon vorbereitet — fülle nur das Formularfeld aus.</p>
<p>Ich antworte in der Regel innerhalb von 24–48 Stunden mit einem konkreten Angebot.</p>
<a class="pipeline-btn" href="mailto:raul.mina1@outlook.com?subject=Dienstleistung%20Daten-Pipeline&body=Hallo,%0A%0AIch%20interessiere%20mich%20f%C3%BCr%20folgende%20Dienstleistung:%0A%0A%20%20%5B%20%5D%20Knowledge%20Graph%20Setup%20(%E2%82%AC390)%0A%20%20%5B%20%5D%20RAG%20%2B%20KG-Fusion%20Setup%20(%E2%82%AC340)%0A%20%5B%20%5D%20Komplette%20Daten-Pipeline%20(%E2%82%AC690)%0A%20%20%5B%20%5D%20Pipeline-Audit%20(%E2%82%AC150)%0A%20%20%5B%20%5D%20Custom%20Integration%20(%E2%82%AC60/h)%0A%0AUmgebung:%0A%0AE-Mail%20f%C3%BCr%20die%20Antwort:%0A%0ANachricht:" target="_blank" rel="noopener">Dienstleistung anfragen →</a>
<p class="pipeline-meta">Alternativ über <a href="https://paypal.me/raulmina1" target="_blank" rel="noopener">PayPal</a> — ich schicke dir nach deiner Auswahl einen Zahlungslink.</p>
</div>

<div class="panel panel-frage">
<p><strong>Du hast eine Frage.</strong> Vielleicht zu den Technologien (GraphDB, ChromaDB, SPARQL), zur Skalierung, zu Datenschutz oder ob sich das für deinen Anwendungsfall lohnt. Stell sie frei — es kostet nichts und bleibt vertraulich.</p>
<a class="pipeline-btn" href="mailto:raul.mina1@outlook.com?subject=Frage%20zur%20Daten-Pipeline&body=Hallo,%0A%0AIch%20habe%20eine%20Frage%20zur%20Daten-Pipeline:%0A%0AFrage:%0A%0AE-Mail%20f%C3%BCr%20die%20Antwort:" target="_blank" rel="noopener">Frage stellen →</a>
<p class="pipeline-meta">Ich beantworte technische Fragen kostenlos und ohne Verpflichtung.</p>
</div>

<div class="panel panel-kommentar">
<p><strong>Du willst einfach deinen Kommentar zur Seite loswerden.</strong> Feedback, eine Idee, ein Tipp, etwas, das ich verbessern könnte — jede Rückmeldung hilft. Auch reine Lob- oder Grußnachrichten sind willkommen.</p>
<a class="pipeline-btn" href="mailto:raul.mina1@outlook.com?subject=Kommentar%20zur%20Daten-Pipeline&body=Hallo,%0A%0AIch%20m%C3%B6chte%20einen%20Kommentar%20zur%20Seite%20hinterlassen:%0A%0AKommentar:%0A%0AE-Mail%20f%C3%BCr%20freiwillige%20R%C3%BCckmeldung:" target="_blank" rel="noopener">Kommentar hinterlassen →</a>
<p class="pipeline-meta">Deine E-Mail wird nur für die Antwort verwendet und nicht weitergegeben.</p>
</div>
</div>

> [!note] RA
> Eine Pipeline ist erst dann fertig, wenn du aufhören kannst, sie zu beobachten.

---

*Was passiert mit deinen Notizen, wenn du nicht hinsiehst? Schreib mir → raul.mina1@outlook.com*
