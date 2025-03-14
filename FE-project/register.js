const userInfoForm = document.getElementById("userInfoForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

userInfoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => msg.remove());

  let isValid = true;
  let alertMessages = [];

  if (nameInput.value.trim() === "") {
    alertMessages.push("Name is required.");
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    alertMessages.push("Email is required.");
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    alertMessages.push("Please enter a valid email address.");
    isValid = false;
  }

  if (phoneInput.value.trim() === "") {
    alertMessages.push("Phone number is required.");
    isValid = false;
  } else if (!/^[0-9]{10}$/.test(phoneInput.value)) {
    alertMessages.push("Phone number must contain only digits.");
    isValid = false;
  }

  if (!isValid) {
    alert(alertMessages.join("\n"));
  } else {
    alert("Form submitted successfully!");
    userInfoForm.submit();
    window.location.href="fe-login.html"
  }
});

function displayError(inputElement, message) {
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.style.color = "red";
  errorSpan.style.fontSize = "0.9em";
  errorSpan.textContent = message;
  inputElement.insertAdjacentElement("afterend", errorSpan);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}