window.addEventListener("DOMContentLoaded", function () {
  // === VANTA 3D Background (Choose ONE effect) ===
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
    // If you want the GLOBE effect instead, comment out NET above and uncomment below:
    /*
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
    */
  }

  // === Contact Form AJAX Submission ===
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      if (form.botcheck && form.botcheck.value !== "") {
        status.innerHTML = "<span style='color:red;'>Spam detected. Submission blocked.</span>";
        return;
      }
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
  }

  // === Fade-in on Scroll (Intersection Observer) ===
  const faders = document.querySelectorAll('.fade-in-section');
  if (faders.length) {
    const appearOptions = { threshold: 0.2 };
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
  }

  // === Active Nav Link on Scroll ===
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70; // adjust offset if needed
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

  // === Project Card Flip on Tap (Mobile) + Accessibility ===
  const cards = document.querySelectorAll('.project-card.flip-effect');
  cards.forEach(card => {
    card.addEventListener('touchstart', function() {
      this.classList.toggle('flipped');
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === "Enter" || e.key === " ") {
        this.classList.toggle('flipped');
      }
    });
    card.setAttribute('tabindex', '0');
  });
});
