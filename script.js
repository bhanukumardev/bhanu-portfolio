window.addEventListener("DOMContentLoaded", function () {
  if (window.VANTA) {
    VANTA.NET({
      el: "#bg3d",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0ff,
      backgroundColor: 0x141e30,
      points: 12.0,
      maxDistance: 22.0,
      spacing: 18.0
    });
  }
});

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

// Fade-in on scroll
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = {
    threshold: 0.2
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70; // adjust offset as needed
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
