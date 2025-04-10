document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("service_dpdbvi5");
    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(() => {
                alert("Message sent successfully!");
                this.reset();
            })
            .catch((error) => {
                alert("Failed to send message. Please try again.");
                console.error(error);
            });
    });
});
