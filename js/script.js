const burgerBtn = document.getElementById("burgerBtn");
const closeBurgerBtn = document.getElementById("closeBurgerBtn");
const burgerMenu = document.getElementById("burgerMenu");

const modalBtn = document.getElementById("modalBtn");
const backDrop = document.getElementById("backDrop");
const closeModalBtn = document.getElementById("closeModalBtn");

const bodyEl = document.body;

function updateScrollLock() {
  if (
    burgerMenu.classList.contains("is-open") ||
    backDrop.classList.contains("is-open")
  ) {
    bodyEl.style.overflow = "hidden";
  } else {
    bodyEl.style.overflow = "visible";
  }
}

function toggleBurger() {
  burgerMenu.classList.toggle("is-open");
  updateScrollLock();
}

function toggleModal() {
  backDrop.classList.toggle("is-open");
  updateScrollLock();
}

burgerBtn.addEventListener("click", toggleBurger);
closeBurgerBtn.addEventListener("click", toggleBurger);

modalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

backDrop.addEventListener("click", (e) => {
  if (e.target === backDrop) {
    toggleModal();
  }
});
