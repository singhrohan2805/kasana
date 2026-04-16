<?php
/**
 * AJAX Handler for Contact Form
 */

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit;
}

require_once 'mail-handler.php';

$form_data = [
    'fname'    => trim(htmlspecialchars($_POST['fname']   ?? '')),
    'lname'    => trim(htmlspecialchars($_POST['lname']   ?? '')),
    'phone'    => trim(htmlspecialchars($_POST['phone']   ?? '')),
    'email'    => trim(htmlspecialchars($_POST['email']   ?? '')),
    'interest' => trim(htmlspecialchars($_POST['interest'] ?? '')),
    'message'  => trim(htmlspecialchars($_POST['message'] ?? '')),
];

if (!$form_data['fname'] || !$form_data['phone'] || !$form_data['email'] || !$form_data['message']) {
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($form_data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

if (sendContactEmail($form_data)) {
    // --- Store in Google Sheets ---
    $config = require 'mail-config.php';
    if (!empty($config['google_sheets_webhook_url'])) {
        $ch = curl_init($config['google_sheets_webhook_url']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($form_data));
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5); // Don't hang the user if Google is slow
        curl_exec($ch);
        curl_close($ch);
    }

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Message could not be sent. Please try again later.']);
}
