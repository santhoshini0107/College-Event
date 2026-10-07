document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let selectedEvent = document.getElementById("event").value;

    let message = document.getElementById("message");

    message.textContent =
        "Registration successful! 🎉 " +
        name +
        ", you are registered for " +
        selectedEvent +
        ".";

    this.reset();
});