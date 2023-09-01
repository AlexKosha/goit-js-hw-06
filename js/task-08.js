const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormLogin);

function onFormLogin(event) {
  event.preventDefault();
  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if ((emailValue && passwordValue) !== "") {
    const dataObj = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(dataObj);
    form.reset();
  } else {
    alert("Всі поля повинні бути заповнені");
  }
}
