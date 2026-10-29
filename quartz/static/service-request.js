/* Fullyellow — Service Request form logic.
   Lives outside the Markdown because Quartz smartypants rewrites quotes inside
   inline <script> text nodes, which breaks the JS.
   Every request carries the client service code (format RA-######). */

(function () {
  var CODE_RE = /^RA-[0-9]{6}$/;

  function el(id) { return document.getElementById(id); }
  function v(id) { var e = el(id); return e ? (e.value || "").trim() : ""; }

  function st(msg, kind) {
    var s = el("sr_status");
    if (!s) return;
    s.textContent = msg;
    s.className = "sr-status" + (kind ? " " + kind : "");
  }

  function code() { return v("sr_code").toUpperCase(); }

  function body() {
    return [
      "SERVICE REQUEST - Fullyellow",
      "",
      "Service code:    " + code(),
      "Name:            " + v("sr_name"),
      "Email:           " + v("sr_email"),
      "Service type:    " + v("sr_kind"),
      "Request:         " + v("sr_title"),
      "",
      "Problem:",
      v("sr_desc"),
      "",
      "Handover wanted: " + v("sr_result"),
      "Needed by:       " + (v("sr_deadline") || "not specified"),
      "Urgency:         " + v("sr_urgency"),
      "Data involved:   " + v("sr_data"),
      "",
      "Notes:",
      v("sr_notes") || "-",
      "",
      "Consent to store the data for processing: yes",
      "",
      "- sent from the Fullyellow service request form",
    ].join("\n");
  }

  function valid() {
    if (!CODE_RE.test(code())) {
      st("Please enter your service code, format RA-123456.", "warn");
      var c = el("sr_code"); if (c) c.focus();
      return false;
    }
    if (!v("sr_name")) { st("Please write your name.", "warn"); return false; }
    if (!v("sr_email") || v("sr_email").indexOf("@") < 1) { st("Please write a valid email.", "warn"); return false; }
    if (!v("sr_kind")) { st("Please choose the kind of service.", "warn"); return false; }
    if (!v("sr_title")) { st("Please write your request in one line.", "warn"); return false; }
    if (!v("sr_desc")) { st("Please describe the problem.", "warn"); return false; }
    var k = el("sr_consent");
    if (!k || !k.checked) { st("Please accept the data consent.", "warn"); return false; }
    return true;
  }

  function subject() {
    return "[KR] " + code() + " - " + v("sr_name") + " - " + v("sr_title");
  }

  function normaliseCode() {
    var c = el("sr_code");
    if (!c) return;
    var raw = (c.value || "").toUpperCase().replace(/\s+/g, "");
    if (raw && raw.indexOf("-") < 0 && /^RA[0-9]{6}$/.test(raw)) raw = raw.slice(0, 2) + "-" + raw.slice(2);
    c.value = raw;
  }

  window.srSend = function () {
    normaliseCode();
    if (!valid()) return;
    window.location.href =
      "mailto:raul.mina1@outlook.com?subject=" + encodeURIComponent(subject()) +
      "&body=" + encodeURIComponent(body());
    st("Your mail program should open now. If it does not, press Copy as text and send it to raul.mina1@outlook.com", "ok");
  };

  window.srCopy = function () {
    normaliseCode();
    if (!valid()) return;
    var t = body();
    function done() { st("Copied. Paste it into an email to raul.mina1@outlook.com", "ok"); }
    function fb() {
      var p = el("sr_preview");
      if (!p) return;
      p.style.display = "block";
      p.value = t;
      p.select();
      try { document.execCommand("copy"); done(); } catch (e) { st("Copy the text from the box below.", "warn"); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(done, fb);
    } else {
      fb();
    }
  };

  document.addEventListener("input", function (e) {
    if (e.target && e.target.id === "sr_code") normaliseCode();
  });

  document.addEventListener("nav", function () {});
})();
