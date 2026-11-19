---
title: "Semantic Web & Knowledge Graphs"
tags:
  - semantic-web
  - knowledge-graphs
  - ontology
  - vault
description: "A complete guide to Semantic Web — RDF, SPARQL, OWL, Knowledge Graphs, and Ontology Engineering. Built from hands-on research and practical implementation."
reading_time: "2 min"
lang: en
publish: true
type: section-index
date: 2026-07-09
semantic_class: section-index
see_also:
  - "[[AI Ecosystem]]"
  - "[[Kolumnen/Die Werkzeuge, die ich mir selbst gebaut habe]]"
---

# Semantic Web & Knowledge Graphs

> A complete learning journey into semantic web technologies — from RDF triples to enterprise ontology engineering. Every guide here is built from hands-on research for the **TIB Semantic Data Architect** position.

---

## The guides

| Guide | What you'll learn |
|---|---|
| [Knowledge Graphs](/Semantic-Web/Knowledge-Graphs) | Architecture, components, comparison with relational DBs |
| [RDF — Resource Description Framework](/Semantic-Web/RDF) | Triple data model, serialization, practical example |
| [SPARQL — Query Language](/Semantic-Web/SPARQL) | Graph pattern matching, federation, example queries |
| [OWL — Web Ontology Language](/Semantic-Web/OWL) | Formal semantics, reasoning, OWL profiles |
| [Ontology Engineering](/Semantic-Web/Ontology-Engineering) | 8-step methodology, competency questions |
| [Linked Data Principles](/Semantic-Web/Linked-Data) | 4 rules, 5-star deployment, LOD cloud |
| [Semantic Web Standards](/Semantic-Web/Semantic-Web-Standards) | Full W3C stack overview |
| [GraphDB](/Semantic-Web/GraphDB) | Enterprise RDF triplestore — setup, SPARQL, OWL reasoning, vs Neo4j |
| [Neo4j — Property Graphs vs RDF](/Semantic-Web/Neo4j-Property-Graphs-vs-RDF) | The other side of the graph world — LPG data model, Cypher, and when to choose each |
| [Meine AI & Semantic Web Werkzeuge im Alltag](/Semantic-Web/Meine-AI-Semantic-Web-Werkzeuge) | The tools I use daily — AI ecosystem + knowledge graph, model-agnostic |
| [KG Context vs RAG](/Semantic-Web/KG-Context-vs-RAG) | Why structure (knowledge graph) and meaning (vector RAG) together form the complete memory |
| [KG Context — Semantic Context Injection](/Semantic-Web/KG-Context-Graph) | Inject live knowledge-graph context into LLM prompts — sparql_bridge, hybrid KG+RAG, anti-hallucination |

---

## Learning path

If you're new to the Semantic Web, follow this order:

1. **Knowledge Graphs** — what they are and why they matter
2. **RDF** — the fundamental data model
3. **SPARQL** — how to query RDF data
4. **OWL** — formal ontologies with reasoning
5. **Ontology Engineering** — building your own ontologies
6. **Linked Data** — publishing interconnected data
7. **Semantic Web Standards** — putting it all together

Each guide includes practical examples you can adapt to your own projects.

---

## Quick reference

| Standard | Acronym | W3C Since | Purpose |
|---|---|---|---|
| Resource Description Framework | RDF | 1999 | Triple data model |
| RDF Schema | RDFS | 1998 | Lightweight ontology |
| Web Ontology Language | OWL | 2004 | Formal ontology |
| SPARQL Protocol and RDF Query Language | SPARQL | 2008 | Query language |
| Shapes Constraint Language | SHACL | 2017 | Validation |
| Simple Knowledge Organization System | SKOS | 2009 | Taxonomies |
| Rule Interchange Format | RIF | 2010 | Rules |

---

## Real-world context

These notes were built as part of the **YellowVault AI System** — a structured AI layer over an Obsidian vault that automates German learning, job applications, knowledge management, and personal tracking.

The vault's frontmatter already contains semantic metadata (`Topics`, `semantic_class`, `relationship`, `see_also`), effectively making it a lightweight knowledge graph. The ontology is serialized as OWL/Turtle.

---

## Related

- [[AI Ecosystem|AI Ecosystem — What I've Built]]
- [[Kolumnen/Die Werkzeuge, die ich mir selbst gebaut habe|Die Werkzeuge, die ich mir selbst gebaut habe]]

---

*Ready to build your own knowledge graph? Start with [[Semantic Web/RDF|RDF]] and work your way up.*
