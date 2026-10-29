---
title: Service Request
tags:
  - service
  - form
  - request
description: "Send a service request to Raul Mina — analysis, calculation, small tool or document. Structured intake, answer within 24 hours."
reading_time: "2 min"
publish: true
semantic_class: note
---

# 🎫 Service Request

Every request gets a number, a scope and a delivery date. Fill this form and it lands in my request register — no request gets lost in a chat.

> [!info] How it works
> 1. You send the form — it arrives in my inbox immediately.
> 2. I acknowledge within **24 hours** and write the scope (what is in, what is out, effort) within **48 hours**.
> 3. You get a clear **GO** decision: price fixed, delivery date fixed.
> 4. The deliverable is filed and sent to you as a dated file (PDF, XLSX, link).
>
> **First consultation is free.** The form does not commit you to anything.

---

## 📋 Request form

<form id="requestForm" action="https://formsubmit.co/raul.mina1@outlook.com" method="POST">
  <input type="hidden" name="_subject" value="[KR] New service request — RA Blog">
  <input type="hidden" name="_next" value="https://raulmina1.github.io/ra-blog/Service-Request/thanks">
  <input type="hidden" name="_template" value="box">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_replyto" value="email">
  <input type="hidden" name="_autoresponse" value="Thank you, your service request has arrived. You will get an acknowledgement within 24 hours and a written scope with effort and price within 48 hours. If you do not hear from me, write to raul.mina1@outlook.com. — Vielen Dank, Ihre Serviceanfrage ist eingegangen. Sie erhalten innerhalb von 24 Stunden eine Bestätigung und innerhalb von 48 Stunden einen schriftlichen Umfang mit Aufwand und Preis. — Raul Mina — Fullyellow — Process Engineer & AI Automation — Berlin">
  <input type="hidden" name="form_name" value="RA Service Request v1">
  <input type="text" name="_honey" style="display:none">

  <div style="margin-bottom:16px;">
    <label for="name" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Your name *</label>
    <input type="text" id="name" name="name" required placeholder="First and last name"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
  </div>

  <div style="margin-bottom:16px;">
    <label for="email" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Email *</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
  </div>

  <div style="margin-bottom:16px;">
    <label for="service_type" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">What kind of service? *</label>
    <select id="service_type" name="service_type" required
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option value="">— please choose —</option>
      <option value="Financial analysis">Financial analysis (company, market, personal budget)</option>
      <option value="Calculation or model">Calculation or model (costs, scenarios, projection)</option>
      <option value="Small tool or automation">Small tool or automation (script, sheet, agent)</option>
      <option value="Document or report">Document or report (PDF, one-pager, summary)</option>
      <option value="Consultation">Consultation / sparring session</option>
      <option value="Other">Something else</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="title" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Your request in one line *</label>
    <input type="text" id="title" name="title" required placeholder="e.g. Monthly budget model for my household"
      style="width:100%;max-width:520px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
  </div>

  <div style="margin-bottom:16px;">
    <label for="description" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Describe the problem *</label>
    <textarea id="description" name="description" rows="7" required
      placeholder="What is the situation? What should the result be? What have you tried?"
      style="width:100%;max-width:520px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;"></textarea>
  </div>

  <div style="margin-bottom:16px;">
    <label for="result" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">What should I hand over?</label>
    <select id="result" name="result"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option value="Not sure yet">Not sure yet</option>
      <option value="PDF report">PDF report</option>
      <option value="Excel workbook">Excel workbook</option>
      <option value="Working tool or script">Working tool or script</option>
      <option value="Short answer in chat or email">Short answer in chat or email</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="deadline" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">When do you need it?</label>
    <input type="date" id="deadline" name="deadline"
      style="width:100%;max-width:220px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
    <label for="urgency" style="display:block;margin:10px 0 4px;font-weight:600;color:#1a1a10;">Urgency</label>
    <select id="urgency" name="urgency"
      style="width:100%;max-width:220px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option value="Normal">Normal</option>
      <option value="This week">This week</option>
      <option value="Urgent">Urgent</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="data_scope" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Whose data is involved?</label>
    <select id="data_scope" name="data_scope"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option value="No personal data">No personal data</option>
      <option value="My own data">My own data</option>
      <option value="Third-party data">Third-party data (clients, employer, family)</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="notes" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Anything else (links, files mentioned, budget idea)</label>
    <textarea id="notes" name="notes" rows="3"
      placeholder="Optional. Files you want to send can follow by reply to my acknowledgement."
      style="width:100%;max-width:520px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;"></textarea>
  </div>

  <div style="margin-bottom:20px;">
    <label style="display:flex;gap:8px;align-items:flex-start;max-width:520px;color:#1a1a10;">
      <input type="checkbox" name="consent" value="yes" required style="margin-top:4px;">
      <span>I agree that my name, email and the content of this request are stored for the purpose of processing it. No sharing with third parties. *</span>
    </label>
  </div>

  <button type="submit"
    style="padding:12px 32px;background:#807500;color:#fff;border:none;border-radius:6px;font-size:16px;font-weight:600;cursor:pointer;">
    🚀 Send request
  </button>
</form>

---

## 📮 Or send it by email

Prefer your own mail client? Write to [raul.mina1@outlook.com](mailto:raul.mina1@outlook.com?subject=%5BKR%5D%20Service%20request) with the subject **`[KR] Service request`** and the same six points:

1. Your name and email
2. What kind of service
3. Your request in one line
4. The problem and what the result should be
5. When you need it
6. Whose data is involved

---

## 📌 What happens after you send it

| Step | Time | What you get |
| :--- | :--- | :--- |
| Acknowledgement | within 24 h | Your request number (`KR-001`, `KR-002`, …) |
| Scope | within 48 h | What is included, what is excluded, effort, price |
| GO | when you confirm | Work starts, delivery date is fixed |
| Delivery | agreed date | File with a date in its name, filed and archived |

---

*Questions before sending? [raul.mina1@outlook.com](mailto:raul.mina1@outlook.com) · WhatsApp [+49 176 81056196](https://wa.me/4917681056196) · [@RAFullYellowbot](https://t.me/RAFullYellowbot)*
