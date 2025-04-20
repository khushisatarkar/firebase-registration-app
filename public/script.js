function showForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  if (formType === "login") {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  } else {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  }
}

function loginStudent(event) {
  event.preventDefault();
  alert("Login feature can be added using Firebase Auth!");
  return false;
}
