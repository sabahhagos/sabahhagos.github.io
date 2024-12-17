$(document).ready(function () {
    var typed = new Typed(".text", {
        strings: ["Aspiring Developer", "Eager CS Student"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });

    $('#submit-button').click(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        var formData = {
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val(),
            subject: $('input[name="subject"]').val(),
            message: $('textarea[name="message"]').val(),
        };

        // Send data using AJAX
        $.ajax({
            url: 'submit_form.php', // The backend script
            type: 'POST',          // HTTP method
            data: formData,        
            success: function (response) {
                alert(response); // Show success message
                $('#contact-form')[0].reset(); // Clear the form
            },
            error: function (xhr, status, error) {
                console.error("Error: " + error); // Log errors
                alert("There was an error. Please try again.");
            },
        });
    });
});
