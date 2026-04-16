<?php
/**
 * Zeal Website Mailing Handler
 * Uses PHPMailer to send contact form submissions.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

function sendContactEmail($formData) {
    $config = require 'mail-config.php';
    
    $mail = new PHPMailer(true);

    try {
        // --- Server Settings ---
        $mail->isSMTP();
        $mail->Host       = $config['smtp_host'];
        $mail->SMTPAuth   = $config['smtp_auth'];
        $mail->Username   = $config['smtp_user'];
        $mail->Password   = $config['smtp_pass'];
        $mail->SMTPSecure = $config['smtp_secure'];
        $mail->Port       = $config['smtp_port'];

        // --- Recipients ---
        $mail->setFrom($config['from_email'], $config['from_name']);
        $mail->addAddress($config['recipient_email']);
        $mail->addReplyTo($formData['email'], $formData['fname'] . ' ' . $formData['lname']);

        // --- Content ---
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission: ' . $formData['fname'] . ' ' . $formData['lname'];
        
        $body = "<h2>New Website Enquiry</h2>";
        $body .= "<p><strong>Name:</strong> {$formData['fname']} {$formData['lname']}</p>";
        $body .= "<p><strong>Email:</strong> {$formData['email']}</p>";
        $body .= "<p><strong>Phone:</strong> {$formData['phone']}</p>";
        $body .= "<p><strong>Interest:</strong> " . ucfirst($formData['interest'] ?: 'Not specified') . "</p>";
        $body .= "<p><strong>Message:</strong><br>" . nl2br($formData['message']) . "</p>";
        $body .= "<hr>";
        $body .= "<p><small>This email was sent from the Zeal by Kasana contact form.</small></p>";

        $mail->Body    = $body;
        $mail->AltBody = strip_tags(str_replace(['<br>', '</h2>', '</p>'], ["\n", "\n\n", "\n"], $body));

        $mail->send();
        return true;
    } catch (Exception $e) {
        // Keep the error for logging purposes but don't expose sensitive info to use
        error_log("PHPMailer Error: {$mail->ErrorInfo}");
        return false;
    }
}
