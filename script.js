/* ===== DARK/LIGHT MODE TOGGLE ===== */
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // dynamically changes page colors
});

/* ===== SALE BOX ANIMATION FUNCTION ===== */
function animateSaleBox() {
  const box = document.getElementById("saleBox");
  box.classList.add("animate"); // triggers CSS animation
  setTimeout(() => box.classList.remove("animate"), 1000); // removes class after 1s
  return "Animation Triggered!"; // demonstrates function return value
}

/* ===== VISITOR COUNTER ===== */
let visits = 0; // variable in outer scope
const visitBtn = document.getElementById("visitBtn");
const visitCount = document.getElementById("visitCount");

visitBtn.addEventListener("click", () => {
  visits++; // local scope inside listener
  visitCount.textContent = visits;
});

/* ===== PASSWORD SHOW/HIDE ===== */
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");

togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "Show";
  }
});

/* ===== FORM VALIDATION ===== */
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents default form submission
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let valid = true; // local variable

  if (nameInput.value.trim() === "") { 
    nameError.textContent = "Name cannot be empty."; 
    valid = false; 
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) { 
    emailError.textContent = "Enter a valid email."; 
    valid = false; 
  }

  if (passwordInput.value.length < 6) { 
    passwordError.textContent = "Password must be at least 6 chars."; 
    valid = false; 
  }

  if (valid) {
    formSuccess.textContent = "Thank you for signing up! 🎉";
    form.reset();
  }
});
