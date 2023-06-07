const .form-box = document.querySelector(".form-box");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");

registerlink.addEventListener("click", () => {
  .form-box .classList.add("active");
});
