window.addEventListener("DOMContentLoaded", function () {
  if (window.VANTA) {
    VANTA.GLOBE({
      el: "#bg3d",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x00fff0,
      color2: 0x4facfe,
      backgroundColor: 0x141e30
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    status.innerHTML = "Sending...";
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.innerHTML = "<span style='color:#0ff;'>Message sent! Thank you.</span>";
      form.reset();
    } else {
      status.innerHTML = "<span style='color:red;'>There was a problem. Please try again.</span>";
    }
  });
});
