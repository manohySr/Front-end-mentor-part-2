// document
const inputEmail = document.querySelector(".input-email");
const button = document.querySelector("#button");
const error_message = document.querySelector(".item-1__email-error");

// className
error_message.style.display = "none";
inputEmail.className = "input-email";

// regex for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

button.addEventListener("click", (e) => {
  const emailValue = inputEmail.value;

  if (!emailRegex.test(emailValue)) {
    e.preventDefault();
    error_message.style.display = "block";
    inputEmail.className = "error-input";
  }
});
