// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const topTop = document.querySelector("#to-top");
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    topTop.classList.remove("hidden");
    topTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    topTop.classList.add("hidden");
    topTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  // toggle untuk tambahkan jika tidak ada class dan hilangkan jiga sudah ada
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Click diluar hamburger
// apapun yg diclick dalam windows
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggel sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
