'use strict';

console.log("<=== TASK-6 ============================================>");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.querySelector("#controls");
  const input = controls.querySelector("input");
  const createBtn = controls.querySelector("[data-create]");
  const destroyBtn = controls.querySelector("[data-destroy]");
  const boxes = document.querySelector("#boxes");

  createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    }
  });

  destroyBtn.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    boxes.innerHTML = "";
    let size = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = "5px";
      fragment.appendChild(div);
      size += 10;
    }
    boxes.appendChild(fragment);
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }
});