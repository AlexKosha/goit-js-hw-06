const validationEl = document.getElementById("validation-input");

validationEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const requiredLength = Number(validationEl.getAttribute("data-length"));
  const inputValue = event.currentTarget.value;
  if (inputValue.length === requiredLength) {
    validationEl.classList.add("valid");
    validationEl.classList.remove("invalid");
  } else {
    validationEl.classList.add("invalid");
    validationEl.classList.remove("valid");
  }
}
