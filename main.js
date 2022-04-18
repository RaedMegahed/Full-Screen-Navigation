const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

// when we click on burger menu
toggle.addEventListener("click", (eo) => {
  nav.classList.add("swap");
});

// when we click on close icon
close.addEventListener("click", (eo) => {
  nav.classList.remove("swap");
});

// when we click on esc
document.addEventListener("keyup", (eo) => {
  if (eo.key === "Escape") {
    nav.classList.remove("swap");
  }
});
