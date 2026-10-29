/* Fullyellow — Service Request form logic.
   Lives outside the Markdown because Quartz smartypants rewrites quotes inside
   inline <script> text nodes, which breaks the JS. Loaded by
   content/Service Request/index.md via <script src>. */
(function () {
  function v(id) {
    var e = document.getElementById(id);
    return e ? (e.value || "").trim() : "";
  }
  function st(msg, color) {
    var s = document.getElementById("sr_status");
    if (!s) return;
    s.textContent = msg;
    s.style.color = color || "#6b6b5e";
  }
  function body() {
    return [
      "SERVICE REQUEST - Fullyellow",
      "",
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
    if (!v("sr_name")) { st("Please write your name.", "#8a5a00"); return false; }
    if (!v("sr_email") || v("sr_email").indexOf("@") < 1) { st("Please write a valid email.", "#8a5a00"); return false; }
    if (!v("sr_kind")) { st("Please choose the kind of service.", "#8a5a00"); return false; }
    if (!v("sr_title")) { st("Please write your request in one line.", "#8a5a00"); return false; }
    if (!v("sr_desc")) { st("Please describe the problem.", "#8a5a00"); return false; }
    var c = document.getElementById("sr_consent");
    if (!c || !c.checked) { st("Please accept the data consent.", "#8a5a00"); return false; }
    return true;
  }
  function subject() {
    return "[KR] Service request - " + v("sr_name") + " - " + v("sr_title");
  }
  window.srSend = function () {
    if (!valid()) return;
    window.location.href =
      "mailto:raul.mina1@outlook.com?subject=" + encodeURIComponent(subject()) +
      "&body=" + encodeURIComponent(body());
    st("Your mail program should open now. If it does not, press Copy as text and send it to raul.mina1@outlook.com", "#2f6b2f");
  };
  window.srCopy = function () {
    if (!valid()) return;
    var t = body();
    function done() { st("Copied. Paste it into an email to raul.mina1@outlook.com with the subject: " + subject(), "#2f6b2f"); }
    function fb() {
      var p = document.getElementById("sr_preview");
      if (!p) return;
      p.style.display = "block";
      p.value = t;
      p.select();
      try { document.execCommand("copy"); done(); } catch (e) { st("Copy the text from the box below.", "#8a5a00"); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(done, fb);
    } else {
      fb();
    }
  };
  document.addEventListener("nav", function () { /* handlers are global, nothing to rebind */ });
})();
