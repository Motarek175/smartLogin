let nameInput = document.querySelector("input[type = 'text']");
let emailInput = document.querySelector("input[type = 'email']");
let passwordInput = document.querySelector("input[type = 'password']");
let signUpBtn = document.querySelector("input[type = 'button']");
let signIn = document.querySelector("form p span");
let users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    swal({
      text: "Please fill all fields",
      icon: "error",
    });
    return;
  }

  if (validEmail(emailInput.value) && newEmail(emailInput.value)) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    swal({
      title: "Success!",
      icon: "success",
    });
  } else {
    swal({
      title: "Invalid email or email already exist",
      icon: "warning",
    });
  }
}

function validEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function newEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

signUpBtn.addEventListener("click", () => {
  signUp();
});

signIn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
