<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "malikiatazazaltaf@gmail.com.com";  // Replace with your email address
    $headers = "From: $email";

    // Prepare the email body
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
