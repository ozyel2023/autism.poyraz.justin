const bindPrintButton = () => {
  const printButton = document.getElementById("print-brochure");
  if (!printButton) return;
  printButton.addEventListener("click", () => {
    window.print();
  });
};

const bindNavigationToggle = () => {
  const toggle = document.querySelector(".site-nav__toggle");
  const menu = document.getElementById("site-menu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const nextState = !isExpanded;
    toggle.setAttribute("aria-expanded", String(nextState));
    menu.classList.toggle("is-open", nextState);
    if (nextState) {
      const firstLink = menu.querySelector("a");
      firstLink?.focus();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  bindPrintButton();
  bindNavigationToggle();
});


