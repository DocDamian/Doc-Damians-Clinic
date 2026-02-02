(function () {
    emailjs.init("xLD4o8tXX1JW8HHOU"); // replace with your EmailJS public key
})();

// Function to handle form submission
function setupEmailJSForms() {
    const forms = document.querySelectorAll('.emailjs-form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // prevent page reload

            // 🔹 SET CURRENT TIME (auto, user doesn't type this)
            let timeInput = form.querySelector('input[name="current_time"]');
            if (timeInput) {
                timeInput.value = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Manila'
                });
            }

            emailjs.sendForm('service_vffyasg', 'template_bnj9of4', this)
                .then(() => {
                    alert("Message sent successfully!");
                    form.reset();
                }, (error) => {
                    alert("Failed to send message: " + error.text);
                });
        });
    });
}

// Run setup after DOM loads
document.addEventListener('DOMContentLoaded', setupEmailJSForms);
