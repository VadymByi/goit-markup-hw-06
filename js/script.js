const modalBtn = document.getElementById("modalBtn");
const backDrop = document.getElementById("backDrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const bodyEl = document.body;

modalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  backDrop.classList.toggle("is-open");

  if (backDrop.classList.contains("is-open")) {
    bodyEl.style.overflow = "hidden";
  } else {
    bodyEl.style.overflow = "visible";
  }
}
