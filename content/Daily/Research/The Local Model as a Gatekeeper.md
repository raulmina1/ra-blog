---
title: "The Local Model as a Gatekeeper: 45 % of Runs, Zero Cost"
date: 2026-10-19
tags:
  - daily
  - research
  - ai
  - automation
  - local-llm
description: "45 % of scheduled agent runs ended in 'nothing to do', at 485 million tokens. A local 7B model now decides whether the expensive model wakes at all."
reading_time: "6 min"
type: research
lang: en
publish: true
semantic_class: concept-guide
see_also:
  - "[[AI Ecosystem]]"
  - "[[Daily/index|Daily Brief]]"
  - "[[Semantic Web/KG-Context-Graph|Knowledge Graph Context]]"
---

# The Local Model as a Gatekeeper: 45 % of Runs, Zero Cost

> Between 4,000 scheduled runs, nearly half finished the same way: the agent woke up, read everything, concluded that nothing needed doing, and billed for the privilege. The fix was not a faster model. It was a smaller one, standing at the door.

## The bill for saying nothing

An automation stack that runs on timers has a structural problem: the timer fires whether or not there is work. Every tick that reaches a frontier model is paid in full, even when the correct output is a single line — *nothing changed*.

Measured over 30 days on a working stack of roughly 150 scheduled jobs:

| Metric | Value |
| --- | --- |
| Scheduled runs | 4,361 |
| Runs that ended with no output | 1,967 (**45 %**) |
| Tokens spent on those runs | **485 million** |
| Machine time spent on them | 52.5 hours |
| Runs killed by the weekly quota limit | 150 |

A single silent run was not cheap either: the four consecutive no-op runs of one executor cost 75,000, 52,000, 61,000 and 24,000 tokens — each to produce nothing.

## What a gatekeeper is

The gate sits between the trigger and the expensive model. It answers exactly one question: **is there work here, or is this noise?** It does not do the work, does not write anything, does not decide what should happen. It only decides whether the door opens.

<iframe src="/static/mental-maps/local-model-gatekeeper.html" style="width:100%;height:760px;border:1px solid #3a3a3a;border-radius:8px;background:#000" title="The local model as a gatekeeper — flow"></iframe>

Three details make the flow work.

**The fingerprint comes first.** Before any model is involved, the monitor reduces its watched source to a stable string. If that string is identical to the last tick, the run is skipped entirely — no model of any size is called. This is where most of the saving comes from, and it is not intelligence, it is arithmetic.

**Not every gate needs a language model.** Two very different criteria are in use:

| Type | Question | Cost | Example |
| --- | --- | --- | --- |
| Deterministic | Did a new file appear? Did a watermark move? | milliseconds, no GPU | Inbox with pending notes |
| Judgement | Is this three-line diff real information or formatting noise? | ~0.7–30 s on local GPU | Plan and calendar changes |

Using a language model for the first kind would be waste dressed as sophistication.

**The small model only judges, never writes.** A 7B model quantised to 4 bits occupies 4.7 GB and runs entirely inside the 6 GB of a laptop GPU — no system RAM, no cloud, no per-token cost. Its task is a binary question over a diff of one to three lines. That is narrow enough for a small model to be good at: on 32 audited decisions it agreed with the large model 29 times (91 %).

## Fail-open, always

A gatekeeper that breaks the pipeline is worse than no gatekeeper. Three rules:

- If the local model is unavailable, slow, or returns garbage, **the door opens** and the large model runs. A failed gate can cost an extra call, never lost work.
- If the gate itself crashes, it exits cleanly and opens.
- Every decision is logged, so the expensive model can audit the cheap one afterwards and turn its mistakes into rules.

## What it does not fix

The same 7B model was tested on a much harder question — classifying 6,700 documents into twelve categories. It scored **33 %** on a fair sample. The failures were systematic: it confuses *about a topic* with *is that thing* — an index of projects becomes a Project, a list of companies becomes a Company. A binary judgement survives on a small model; a taxonomy does not.

That distinction is the actual lesson of the build: **the size of the model is not the variable that matters, the shape of the question is.** A narrow yes/no question with a cheap, reversible error can be answered locally for free. Anything that needs nuance belongs on the other side of the door.

## Where it stands

| Component | State |
| --- | --- |
| Gated workflows | 7 |
| Local model | 7B, 4-bit, 100 % GPU, 0 € per call |
| Agreement with the teacher | 91 % (29/32 audited) |
| Measured effect | a ticked run that produced no agent call at all |

The honest caveat: the sample of real production decisions is still small, and every one of them so far ended in *open*. The gate has proven it does not block real work. Whether it reliably recognises noise is what the next weeks of logged decisions will answer.

> [!note] RA
> The expensive model was never the bottleneck. The bottleneck was waking it up to tell it there was nothing to do.

## Related

- [[AI Ecosystem]] — the stack this gate sits inside
- [[Semantic Web/KG-Context-Graph|Knowledge Graph Context]] — how structured context reaches the agents
- [[Daily/index|Daily Brief]]
