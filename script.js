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
