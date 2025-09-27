<?php
session_start();
header('Content-Type: application/json');

// Check if user is logged in via session or cookie
$loggedIn = false;
$user = null;

if (isset($_SESSION['user_email'])) {
    $loggedIn = true;
    $user = [
        'email' => $_SESSION['user_email'],
        'name' => $_SESSION['user_name'] ?? ''
    ];
} elseif (isset($_COOKIE['user_email'])) {
    $loggedIn = true;
    $user = [
        'email' => $_COOKIE['user_email'],
        'name' => $_COOKIE['user_name'] ?? ''
    ];
    
    // Optionally restore session from cookie
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['user_name'] = $user['name'];
}

echo json_encode([
    'loggedIn' => $loggedIn,
    'user' => $user
]);
?>