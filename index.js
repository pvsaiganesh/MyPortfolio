// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerBurger = document.getElementById("burger");
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");
const themeSwitches = document.querySelectorAll(".theme-switch__checkbox");

headerBurger?.addEventListener("click", () => {
  smallMenu?.classList.toggle("header__sm-menu--active");
});

// for (let i = 0; i < headerSmallMenuLinks.length; i++) {
//   headerSmallMenuLinks[i].addEventListener("click", () => {
//     smallMenu.classList.remove("header__sm-menu--active");
//     headerHamMenuBtn.classList.remove("d-none");
//     headerHamMenuCloseBtn.classList.add("d-none");
//   });
// }

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner?.addEventListener("click", () => {
  location.href = "index.html";
});

// const gmailEl = document.querySelector(".gmail-container") || null;
// gmailEl?.onclick = () => {
//   navigator.clipboard.writeText("ipvsaiganesh@gmail.com");
// };
// const gmailEl2 = document.querySelector(".gmail-container-2") || null;
// gmailEl2?.onclick  = () => {
//   navigator.clipboard.writeText("+917780531969");
// };
function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  themeSwitches.forEach((themeSwitch) => {
    themeSwitch.checked = isDark;
  });
}

function toggleDarkMode() {
  setTheme(!document.body.classList.contains("dark-mode"));
}

themeSwitches.forEach((themeSwitch) => {
  themeSwitch.addEventListener("change", (event) => {
    setTheme(event.target.checked);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "enabled";

  setTheme(isDark);
  initScrollReveal();
});

function initScrollReveal() {
  const revealItems = document.querySelectorAll(
    [
      ".heading-sec",
      ".about__content",
      ".skill-card",
      ".timeline li",
      ".projects__row-img-cont",
      ".btn-custom",
      ".contact .col-4",
      ".main-footer__upper",
    ].join(",")
  );

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  document.body.classList.add("motion-ready");

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-on-scroll");

    if (
      item.classList.contains("skill-card") ||
      item.classList.contains("projects__row-img-cont") ||
      item.classList.contains("btn-custom") ||
      item.classList.contains("col-4")
    ) {
      item.classList.add("reveal-scale");
    }

    item.classList.add(`reveal-delay-${(index % 4) + 1}`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}
