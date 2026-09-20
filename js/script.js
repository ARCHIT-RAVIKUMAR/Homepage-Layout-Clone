const header = document.getElementById("site-header");
const toggle = document.getElementById("nav-toggle");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// fake live timestamp on the status widget
const timestamp = document.querySelector(".status-timestamp");
if (timestamp) {
  let seconds = 12;
  setInterval(() => {
    seconds = seconds >= 30 ? 1 : seconds + 1;
    timestamp.textContent = `checked ${seconds}s ago`;
  }, 1000);
}
