const payButton = document.querySelector(".pay-button");
const form = document.querySelector(".feedback-form");
const currentCardTitle = document.querySelector(".title-card").textContent;
const currentInputField = form.querySelector('input[type="text"]');

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Запобігає перезавантаженню сторінки

      let params = {
        current: document.getElementById("current").value,
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
      };

      emailjs
        .send("service_zo5qi0m", "template_wvlzqzp", params)
        .then(function (res) {
          alert("Success! Status: " + res.status);
        })
        .catch(function (error) {
          alert("Failed to send email: " + error);
        });
    });
});

payButton.addEventListener("click", () => {
  form.classList.toggle("hidden");
  if (!form.classList.contains("hidden")) {
    currentInputField.value = currentCardTitle;
  }
});
