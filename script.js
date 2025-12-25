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

  fetch("https://script.google.com/macros/s/AKfycbxFk5Jb_wsAXubaODdJeGQQoumlg8ZK7xKrm0TsGVKzgrNnqpt4O6U_qIVDMDXFYF7S8Q/exec", {
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
