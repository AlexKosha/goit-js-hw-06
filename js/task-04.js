const counterEl = document.getElementById("counter");
const valueEl = document.getElementById("value");

let counterValue = 0;

function updateCounter() {
  valueEl.textContent = counterValue;
}
counterEl.addEventListener("click", onTargetButtonClick);

function onTargetButtonClick(event) {
  if (event.target.dataset.action === "decrement") {
    counterValue--;
  } else if (event.target.dataset.action === "increment") {
    counterValue++;
  }
  updateCounter();
}
