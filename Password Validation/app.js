const form = document.querySelector("#form");

const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkPassword(password.value);
});

function checkPassword(password) {
  if (password.length < 8) {
    console.log("Your password is not allowed");
  } else {
    console.log("Your password is allowed");
  }
}
