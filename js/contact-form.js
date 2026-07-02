// contact-form.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameEl = form.querySelector("#name");
  const emailEl = form.querySelector("#email");
  const messageEl = form.querySelector("#message");
  const submitBtn = form.querySelector(".submit-btn");
  const helper = form.querySelector(".helper-text");
  const formWrap = document.getElementById("form-body");
  const successWrap = document.getElementById("success-body");
  const toast = document.getElementById("toast");
  const sendAnother = document.getElementById("send-another");

  function checkValid() {
    const valid = nameEl.value.trim() && emailEl.value.trim() && messageEl.value.trim();
    submitBtn.classList.toggle("ready", !!valid);
    helper.textContent = valid ? "Ready to Send" : "Complete Required Fields";
    helper.classList.toggle("ready", !!valid);
    return valid;
  }

  [nameEl, emailEl, messageEl].forEach(el => el.addEventListener("input", checkValid));
  checkValid();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!checkValid()) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = icon("loader", 18, "spinner-icon");
    helper.textContent = "Sending...";

    setTimeout(() => {
      formWrap.style.display = "none";
      successWrap.style.display = "block";
      showToast();
    }, 1500);
  });

  function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  }

  if (sendAnother) {
    sendAnother.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      submitBtn.disabled = false;
      submitBtn.classList.remove("ready");
      submitBtn.innerHTML = icon("send", 18);
      checkValid();
      formWrap.style.display = "block";
      successWrap.style.display = "none";
    });
  }
});
