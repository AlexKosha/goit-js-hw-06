function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnEl: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
};

refs.btnEl.addEventListener("click", onColorChange);

function onColorChange(event) {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.spanColor.textContent = randomColor;
}
