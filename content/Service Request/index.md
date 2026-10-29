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

Every request gets a number, a scope and a delivery date. Fill this form, press send, and it arrives in my inbox, so no request gets lost in a chat.

> [!info] How it works
> 1. You fill the form and press **Send by email**. Your own mail program opens with the request already written out; you press send.
> 2. I acknowledge within **24 hours** and give you your request number.
> 3. Within **48 hours** you get the written scope: what is included, what is excluded, effort, price.
> 4. Work starts only after your **GO**.
>
> **First consultation is free.** The form does not commit you to anything.

---

## 📋 Request form

<form id="reqForm" onsubmit="return false;">

  <div style="margin-bottom:16px;">
    <label for="sr_name" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Your name *</label>
    <input type="text" id="sr_name" required placeholder="First and last name"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_email" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Your email *</label>
    <input type="email" id="sr_email" required placeholder="you@example.com"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_kind" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">What kind of service? *</label>
    <select id="sr_kind" required
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option value="">— please choose —</option>
      <option>Financial analysis (company, market, personal budget)</option>
      <option>Calculation or model (costs, scenarios, projection)</option>
      <option>Small tool or automation (script, sheet, agent)</option>
      <option>Document or report (PDF, one-pager, summary)</option>
      <option>Consultation / sparring session</option>
      <option>Something else</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_title" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Your request in one line *</label>
    <input type="text" id="sr_title" required placeholder="e.g. Monthly budget model for my household"
      style="width:100%;max-width:520px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_desc" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Describe the problem *</label>
    <textarea id="sr_desc" rows="6" required
      placeholder="What is the situation? What should the result be? What have you tried?"
      style="width:100%;max-width:520px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;"></textarea>
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_result" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">What should I hand over?</label>
    <select id="sr_result"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option>Not sure yet</option>
      <option>PDF report</option>
      <option>Excel workbook</option>
      <option>Working tool or script</option>
      <option>Short answer in chat or email</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_deadline" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">When do you need it?</label>
    <input type="date" id="sr_deadline"
      style="width:100%;max-width:220px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
    <label for="sr_urgency" style="display:block;margin:10px 0 4px;font-weight:600;color:#1a1a10;">Urgency</label>
    <select id="sr_urgency"
      style="width:100%;max-width:220px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option>Normal</option>
      <option>This week</option>
      <option>Urgent</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_data" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Whose data is involved?</label>
    <select id="sr_data"
      style="width:100%;max-width:420px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;">
      <option>No personal data</option>
      <option>My own data</option>
      <option>Third-party data (clients, employer, family)</option>
    </select>
  </div>

  <div style="margin-bottom:16px;">
    <label for="sr_notes" style="display:block;margin-bottom:4px;font-weight:600;color:#1a1a10;">Anything else (links, files mentioned, budget idea)</label>
    <textarea id="sr_notes" rows="3"
      placeholder="Optional. Files can follow as a reply to my acknowledgement."
      style="width:100%;max-width:520px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#f5f5f0;color:#1a1a10;font-family:inherit;"></textarea>
  </div>

  <div style="margin-bottom:20px;">
    <label style="display:flex;gap:8px;align-items:flex-start;max-width:520px;color:#1a1a10;">
      <input type="checkbox" id="sr_consent" required style="margin-top:4px;">
      <span>I agree that my name, email and the content of this request are stored for the purpose of processing it. No sharing with third parties. *</span>
    </label>
  </div>

  <button type="button" onclick="srSend()"
    style="padding:12px 32px;background:#807500;color:#fff;border:none;border-radius:6px;font-size:16px;font-weight:600;cursor:pointer;">
    ✉️ Send by email
  </button>
  <button type="button" onclick="srCopy()"
    style="padding:12px 20px;margin-left:8px;background:transparent;color:#807500;border:1px solid #807500;border-radius:6px;font-size:15px;font-weight:600;cursor:pointer;">
    📋 Copy as text
  </button>

  <div id="sr_status" style="margin-top:12px;font-size:14px;color:#6b6b5e;min-height:20px;"></div>
  <textarea id="sr_preview" readonly style="display:none;width:100%;max-width:520px;min-height:220px;margin-top:12px;font-family:ui-monospace,Consolas,monospace;font-size:12.5px;padding:10px;border:1px solid #b0b0a0;border-radius:6px;background:#fff;color:#1a1a10;"></textarea>

</form>

<script>
(function(){
  function v(id){ var e=document.getElementById(id); return e?(e.value||'').trim():''; }
  function st(msg,color){ var s=document.getElementById('sr_status'); s.textContent=msg; s.style.color=color||'#6b6b5e'; }
  function body(){
    return [
      'SERVICE REQUEST - Fullyellow',
      '',
      'Name:            '+v('sr_name'),
      'Email:           '+v('sr_email'),
      'Service type:    '+v('sr_kind'),
      'Request:         '+v('sr_title'),
      '',
      'Problem:',
      v('sr_desc'),
      '',
      'Handover wanted: '+v('sr_result'),
      'Needed by:       '+(v('sr_deadline')||'not specified'),
      'Urgency:         '+v('sr_urgency'),
      'Data involved:   '+v('sr_data'),
      '',
      'Notes:',
      v('sr_notes')||'-',
      '',
      'Consent to store the data for processing: yes',
      '',
      '- sent from the Fullyellow service request form'
    ].join(String.fromCharCode(10));
  }
  function valid(){
    if(!v('sr_name')){ st('Please write your name.','#8a5a00'); return false; }
    if(!v('sr_email')||v('sr_email').indexOf('@')<1){ st('Please write a valid email.','#8a5a00'); return false; }
    if(!v('sr_kind')){ st('Please choose the kind of service.','#8a5a00'); return false; }
    if(!v('sr_title')){ st('Please write your request in one line.','#8a5a00'); return false; }
    if(!v('sr_desc')){ st('Please describe the problem.','#8a5a00'); return false; }
    if(!document.getElementById('sr_consent').checked){ st('Please accept the data consent.','#8a5a00'); return false; }
    return true;
  }
  function subject(){ return '[KR] Service request - '+v('sr_name')+' - '+v('sr_title'); }
  window.srSend=function(){
    if(!valid()) return;
    window.location.href='mailto:raul.mina1@outlook.com?subject='+encodeURIComponent(subject())+'&body='+encodeURIComponent(body());
    st('Your mail program should open now. If it does not, press Copy as text and send it to raul.mina1@outlook.com','#2f6b2f');
  };
  window.srCopy=function(){
    if(!valid()) return;
    var t=body();
    function done(){ st('Copied. Paste it into an email to raul.mina1@outlook.com with the subject: '+subject(),'#2f6b2f'); }
    function fb(){ var p=document.getElementById('sr_preview'); p.style.display='block'; p.value=t; p.select();
      try{ document.execCommand('copy'); done(); }catch(e){ st('Copy the text from the box below.','#8a5a00'); } }
    if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(t).then(done,fb); } else { fb(); }
  };
})();
</script>

---

## 📮 Or write it directly

Prefer to skip the form? Write to [raul.mina1@outlook.com](mailto:raul.mina1@outlook.com?subject=%5BKR%5D%20Service%20request) with the subject **`[KR] Service request`** and these six points:

1. Your name and email
2. What kind of service
3. Your request in one line
4. The problem and the result you want
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
