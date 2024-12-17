<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "shagos2@fordham.edu"; 

    // Set the email subject
    $email_subject = "New contact form submission: $subject";

    // Construct the email body
    $email_body = "You have received a new message from the contact form.\n\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n".
                  "Message:\n$message\n";

    // Send the email
    if (mail($to, $email_subject, $email_body)) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent. Please try again.";
    }
}
?>
