function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.getElementById("controls");
const boxesContainerEl = document.getElementById("boxes");

const createBtn = controlsEl.querySelector("button[data-create]");
const destroyBtn = controlsEl.querySelector("button[data-destroy]");
const input = controlsEl.querySelector('input[type="number"]');

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainerEl.append(...boxes);
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = "";
}
