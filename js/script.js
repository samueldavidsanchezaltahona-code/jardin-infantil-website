document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const inscriptionForm = document.getElementById("inscriptionForm");

  if (inscriptionForm) {
    inscriptionForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const parentName = document.getElementById("parentName")?.value.trim();
      const childName = document.getElementById("childName")?.value.trim();

      if (!parentName || !childName) {
        alert("Por favor completa los campos obligatorios.");
        return;
      }

      alert(
        `¡Gracias ${parentName}! Hemos recibido tu solicitud para ${childName}. En breve nos pondremos en contacto contigo.`
      );

      inscriptionForm.reset();
    });
  }
});
