const fromEl = document.getElementById("my-form");

fromEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // get value
  const nameEl = document.getElementById("name").value.trim();
  const emailEl = document.getElementById("email").value.trim();
  const phoneEl = document.getElementById("phone").value.trim();
  const passwordEl = document.getElementById("password").value.trim();
  const confirmPasswordEl = document
    .getElementById("confirm-password")
    .value.trim();

  let isValid = true;

  // name validation
  if (nameEl === "") {
    document.getElementById("name-error").innerText = "name is required";
    isValid = false;
  } else {
    document.getElementById("name-error").innerText = "";
  }

  // email validation
  if (!emailEl.includes("@")) {
    document.getElementById("email-error").innerText = "valid email required";
    isValid = false;
  } else {
    document.getElementById("email-error").innerText = "";
  }

  // phone number validation
  if (phoneEl.length !== 10 || isNaN(phoneEl)) {
    document.getElementById("phone-error").innerText =
      "enter valid 10-digit number";
    isValid = false;
  } else {
    document.getElementById("phone-error").innerText = "";
  }

  // password validation
  if (passwordEl.length < 6) {
    document.getElementById("password-error").innerText = "min 6 characters";
    isValid = false;
  } else {
    document.getElementById("password-error").innerText = "";
  }

  // confirm-password validation
  if (passwordEl !== confirmPasswordEl) {
    document.getElementById("confirm-password-error").innerText =
      "do not match password";
    isValid = false;
  } else {
    document.getElementById("confirm-password-error").innerText = "";
  }

  if (isValid) {
    const formData = {
      nameEl,
      emailEl,
      phoneEl,
      passwordEl,
      confirmPasswordEl,
    };

    console.log(formData);
  }
});
