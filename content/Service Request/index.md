---
title: Service Request
tags:
  - service
  - form
  - request
description: "Send a service request to Fullyellow with your service code. Structured intake, answer within 24 hours."
reading_time: "2 min"
publish: true
semantic_class: note
---

<link rel="stylesheet" href="/ra-blog/static/service-request.css">
<script src="/ra-blog/static/service-request.js" defer></script>

<div class="sr-shell">

<div class="sr-brand"><span class="dot"></span> Fullyellow · Raul Mina · Berlin</div>

<div class="sr-h1">Service Request</div>

<p class="sr-lead">Every request gets a number, a scope and a delivery date. Fill the form, press send, and it lands in my inbox already tagged with your service code, so nothing gets lost in a chat.</p>

<div class="sr-steps">
  <div class="sr-step"><span class="n">1</span><strong>Your code</strong><p>Identifies you or your company in the register.</p></div>
  <div class="sr-step"><span class="n">2</span><strong>You send</strong><p>Your own mail program opens with the request written out.</p></div>
  <div class="sr-step"><span class="n">3</span><strong>Acknowledgement</strong><p>Within 24 h, with your request number.</p></div>
  <div class="sr-step"><span class="n">4</span><strong>Scope and GO</strong><p>Within 48 h: included, excluded, effort, price.</p></div>
</div>

<form id="reqForm" onsubmit="return false;">

  <section class="sr-section">
    <div class="sr-legend">01 · Service code</div>
    <div class="sr-code-wrap">
      <div class="sr-field">
        <label for="sr_code">Your service code <span class="req">*</span></label>
        <input id="sr_code" type="text" inputmode="text" autocomplete="off" spellcheck="false" maxlength="9" placeholder="RA-000000" required>
        <p class="hint">Format <b>RA-123456</b>.<span id="sr_code_state" class="sr-code-state"></span> You receive it with your first inquiry. No code yet? Write to <a href="mailto:raul.mina1@outlook.com?subject=Service%20code%20request">raul.mina1@outlook.com</a> and you get one within 24 hours.</p>
      </div>
    </div>
  </section>

  <section class="sr-section">
    <div class="sr-legend">02 · Who is asking</div>
    <div class="sr-grid">
      <div class="sr-field">
        <label for="sr_name">Your name <span class="req">*</span></label>
        <input id="sr_name" type="text" autocomplete="name" placeholder="First and last name" required>
      </div>
      <div class="sr-field">
        <label for="sr_email">Email <span class="req">*</span></label>
        <input id="sr_email" type="email" autocomplete="email" placeholder="you@example.com" required>
      </div>
    </div>
  </section>

  <section class="sr-section">
    <div class="sr-legend">03 · What you need</div>
    <div class="sr-grid">
      <div class="sr-field">
        <label for="sr_kind">Kind of service <span class="req">*</span></label>
        <select id="sr_kind" required>
          <option value="">— please choose —</option>
          <option>Financial analysis (company, market, personal budget)</option>
          <option>Calculation or model (costs, scenarios, projection)</option>
          <option>Small tool or automation (script, sheet, agent)</option>
          <option>Document or report (PDF, one-pager, summary)</option>
          <option>Consultation / sparring session</option>
          <option>Something else</option>
        </select>
      </div>
      <div class="sr-field">
        <label for="sr_result">What should I hand over?</label>
        <select id="sr_result">
          <option>Not sure yet</option>
          <option>PDF report</option>
          <option>Excel workbook</option>
          <option>Working tool or script</option>
          <option>Short answer in chat or email</option>
        </select>
      </div>
      <div class="sr-field full">
        <label for="sr_title">Your request in one line <span class="req">*</span></label>
        <input id="sr_title" type="text" placeholder="e.g. Monthly budget model for my household" required>
      </div>
      <div class="sr-field full">
        <label for="sr_desc">Describe the problem <span class="req">*</span></label>
        <textarea id="sr_desc" rows="6" placeholder="What is the situation? What should the result be? What have you tried?" required></textarea>
      </div>
    </div>
  </section>

  <section class="sr-section">
    <div class="sr-legend">04 · Timing and data</div>
    <div class="sr-grid">
      <div class="sr-field">
        <label for="sr_deadline">When do you need it?</label>
        <input id="sr_deadline" type="date">
      </div>
      <div class="sr-field">
        <label for="sr_urgency">Urgency</label>
        <select id="sr_urgency">
          <option>Normal</option>
          <option>This week</option>
          <option>Urgent</option>
        </select>
      </div>
      <div class="sr-field full">
        <label for="sr_data">Whose data is involved?</label>
        <select id="sr_data">
          <option>No personal data</option>
          <option>My own data</option>
          <option>Third-party data (clients, employer, family)</option>
        </select>
      </div>
      <div class="sr-field full">
        <label for="sr_notes">Anything else <span class="hint">links, files mentioned, budget idea</span></label>
        <textarea id="sr_notes" rows="3" placeholder="Optional. Files can follow as a reply to my acknowledgement."></textarea>
      </div>
    </div>
  </section>

  <section class="sr-section">
    <div class="sr-legend">05 · Consent</div>
    <label class="sr-consent">
      <input type="checkbox" id="sr_consent" required>
      <span>I agree that my name, email, service code and the content of this request are stored for the purpose of processing it. No sharing with third parties. <span class="req">*</span></span>
    </label>
  </section>

  <div class="sr-actions">
    <button type="button" class="sr-btn sr-btn-primary" onclick="srSend()">✉️ Send request</button>
    <button type="button" class="sr-btn sr-btn-ghost" onclick="srCopy()">📋 Copy as text</button>
  </div>
  <div id="sr_status" class="sr-status"></div>
  <textarea id="sr_preview" class="sr-preview" readonly></textarea>

</form>

<div class="sr-foot">
  <span class="mono">Fullyellow · Service Request v2</span>
  <span>First consultation free</span>
  <span><a href="mailto:raul.mina1@outlook.com">raul.mina1@outlook.com</a></span>
  <span><a href="https://wa.me/4917681056196">WhatsApp</a></span>
  <span><a href="https://t.me/RAFullYellowbot">Telegram</a></span>
</div>

</div>
