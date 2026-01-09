const eyes = document.querySelectorAll(".eye");
const email = document.getElementById("email");
const password = document.getElementById("password");

// mouse movement → eyes follow
document.addEventListener("mousemove", (e) => {
  eyes.forEach(eye => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    eye.style.transform = translate(${x}px, ${y}px);
  });
});

// email focus → look
email.addEventListener("focus", () => {
  eyes.forEach(eye => {
    eye.style.transform = "translate(0,0)";
  });
});

// password focus → look away
password.addEventListener("focus", () => {
  eyes.forEach(eye => {
    eye.style.transform = "translate(0, 20px)";
  });
});
