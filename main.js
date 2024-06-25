let emailInput = document.querySelector("input[type = 'email']");
let passwordInput = document.querySelector("input[type = 'password']");
let loginbtn = document.querySelector("input[type = 'button']");
let signUp = document.querySelector("form p span");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function login() {
  let email = emailInput.value;
  let password = passwordInput.value;

  if (emailInput.value === "" || passwordInput.value === "") {
    swal({
      title: "Please fill in all fields",
      icon: "error",
    });
    return;
  }

  if (correct(email, password)) {
    window.location.href = "home/home.html";
  } else {
    swal({
      title: "Wrong Email or Password",
      icon: "error",
    });
  }
}

function correct(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginbtn.addEventListener("click", () => {
  login();
});

signUp.addEventListener("click", () => {
  window.location.href = "signup/signup.html";
});
