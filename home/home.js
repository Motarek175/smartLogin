let logout = document.querySelector(".header .content button");
let span = document.querySelector(".welcome .title h1 span");
let username = localStorage.getItem("userName");

span.innerHTML = username;

logout.addEventListener("click", function () {
  window.location.replace("../index.html");
});
