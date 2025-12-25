const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    mobile: document.getElementById("mobile").value,
    date: document.getElementById("date").value,
    symptoms: document.getElementById("symptoms").value
  };

  fetch("PASTE_YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(() => {
    message.textContent = "Registration successful!";
    form.reset();
  })
  .catch(() => {
    message.textContent = "Error. Please try again.";
  });
});
