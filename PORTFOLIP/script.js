document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        alert('Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}');
        contactForm.reset();
    });
});
