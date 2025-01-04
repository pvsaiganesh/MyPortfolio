// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
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

headerLogoConatiner.addEventListener("click", () => {
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
function toggleDarkMode() {
  let isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
