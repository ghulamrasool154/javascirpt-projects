"use strict";

const buttons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

const closemodelFunction = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openmode = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//   buttons all query selector all

//
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openmode);
}

closeModal.addEventListener("click", closemodelFunction);
overlay.addEventListener("click", closemodelFunction);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.code === "Escape") {
    closemodelFunction();
  }
});
