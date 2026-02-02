(function () {
    emailjs.init("xLD4o8tXX1JW8HHOU"); // replace with your public key
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.emailjs-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent page reload  

        // Set current time
        let timeInput = form.querySelector('input[name="current_time"]');
        if (timeInput) {
            timeInput.value = new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' });
        }

        emailjs.sendForm('service_vffyasg', 'template_bnj9of4', this)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                console.error("Failed to send message:", error);
                alert("Failed to send message: " + JSON.stringify(error));
            });
    });
});