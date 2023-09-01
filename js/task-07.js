const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
