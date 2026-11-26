---
title: From a voice note to a scheduled task
description: How a 40 second audio becomes a task, a calendar entry and a logbook line, without opening a single app.
date: 2026-11-26
tags: [workflow, agents, obsidian]
---

## The old loop

I used to record voice notes to myself. Walking to the train, in the kitchen, after a shift. The note was fine. The problem was what happened next: nothing. The audio sat in a chat, the task stayed in my head, and by the evening I could not remember whether I had already answered the message about the shift or only planned to.

Three inboxes: the phone, my head, the notebook. None of them talked to each other.

## What happens to the audio now

I send the voice note to the same chat I use for everything else. From there:

1. The audio is transcribed twice, with two different models. The fast one gives me the text in about thirty seconds, so I can keep working. The slow one runs in the background and I compare the two afterwards.
2. The comparison matters more than it sounds. My dictation is Spanish, fast, with German names in the middle. The fast model hears `Maybach Ufa`, the slow one hears `Maybachufer`. When only one model hears a name, that name is not confirmed, so it gets marked as uncertain instead of written into a title.
3. The text is decoded against my own notes, not against my memory. If a word does not exist in the vault, it is noise and it is dropped. If it matches a person, a place or an open case, it is linked.
4. Only then does it land somewhere: a calendar entry, a task, or a line in the logbook.

The rule that makes it work is boring. Nothing is created from an audio until the audio is resolved. No guessing, no probably he meant.

## The logbook

Every dictation also leaves a short block in a logbook: what I said, and the three or four key points, one line each. Not the full text. The point of the logbook is not to keep the audio, it is to be able to look back and see what I actually spend my days talking about.

Fifty one dictations on eighteen days since August. Before that, zero. Not because I talked less, but because nothing was recorded.

## The numbers

- Apps opened to capture a task: zero.
- Transcriptions per audio: two, one fast and one slow, compared.
- Time from audio to a scheduled task: under a minute when the audio is clear.
- Dictations in the logbook: 51, on 18 days.

## What still breaks

Names. A name that neither model confirms and the vault does not know is the one thing that still costs me a message and a correction. The second weak point is the audio itself: a dictation that gets cut in the middle produces half a task, and half a task is worse than no task.

Both are acceptable. What I will not accept anymore is an audio that turns into a confident, wrong entry.
