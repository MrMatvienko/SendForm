document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Запобігає перезавантаженню сторінки

      let params = {
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
