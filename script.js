const eyes = document.querySelectorAll(".eye");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// helper: move eyes
function moveEyes(x, y) {
  eyes.forEach(eye => {
    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// MOUSE MOVE → eyes follow cursor
document.addEventListener("mousemove", (e) => {
  const rect = document.body.getBoundingClientRect();

  const x = ((e.clientX / rect.width) - 0.5) * 20;
  const y = ((e.clientY / rect.height) - 0.5) * 20;

  // only follow mouse if password not focused
  if (document.activeElement !== passwordInput) {
    moveEyes(x, y);
  }
});

// EMAIL FOCUS → eyes look straight
emailInput.addEventListener("focus", () => {
  moveEyes(0, 0);
});

// EMAIL BLUR → resume mouse tracking
emailInput.addEventListener("blur", () => {
  moveEyes(0, 0);
});

// PASSWORD FOCUS → eyes look away (privacy)
passwordInput.addEventListener("focus", () => {
  moveEyes(0, 18);
});

// PASSWORD BLUR → resume mouse tracking
passwordInput.addEventListener("blur", () => {
  moveEyes(0, 0);
});
