<?php
/**
 * PHPMailer SMTP Configuration
 * 
 * Fill in your SMTP details below.
 * If using Gmail, you MUST use an "App Password".
 */

return [
    'smtp_host'   => 'smtp.gmail.com',         // SMTP server (e.g., smtp.gmail.com)
    'smtp_auth'   => true,                    // Enable SMTP authentication
    'smtp_user'   => 'singh.rohan312514@gmail.com',  // Your email address
    'smtp_pass'   => 'gmxo xtzz oyvp bqtu',     // Your email password or App Password
    'smtp_secure' => 'tls',                   // Enable TLS encryption; `ssl` also accepted
    'smtp_port'   => 587,                     // TCP port to connect to (587 for TLS, 465 for SSL)
    
    'from_email'  => 'singh.rohan312514@gmail.com',
    'from_name'   => 'Zeal Website Notifications',
    
    'recipient_email' => 'singh.rohan312514@gmail.com', // Where you want to receive emails

    // Google Sheets Integration
    // To set this up, go to your Google Sheet -> Extensions -> Apps Script
    // and deploy the script I provided to get a Web App URL.
    'google_sheets_webhook_url' => 'https://script.google.com/macros/s/AKfycbxXIRaiYVZ6o5w3ifMhisCfkreEAkjJSe4WOdbkVPNXDiiPsPh0Z_0K48KtVSwLjesMnA/exec', 
];
