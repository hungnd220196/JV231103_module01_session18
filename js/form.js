const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");
const formElement = document.getElementById("formAdd");

formElement.addEventListener("submit", (e) => {
  // ngăn chặn sự kiện lóa lại trang của form
  e.preventDefault();
  console.log("email", emailElement.value);
  console.log("password", passwordElement.value);
});
