<?php
session_start();
header('Content-Type: application/json');

// Database connection
$host = 'localhost';
$dbname = 'busgo';
$username = 'root';
$password = 'infiniti';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

// Get POST data
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$remember = isset($_POST['rememberMe']);

// Validate inputs
$errors = [];
if (empty($email)) {
    $errors['email'] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email format';
}

if (!empty($errors)) {
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed',
        'errors' => $errors
    ]);
    exit;
}

try {
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$user) {
        echo json_encode([
            'success' => false,
            'message' => 'User not found'
        ]);
        exit;
    }

    // Store user in session
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['user_name'] = $user['full_name'];

    // Set cookies (expires in 30 days if 'remember me' is checked, otherwise session cookie)
    if ($remember) {
        $expire = time() + (86400 * 30); // 30 days
    } else {
        $expire = 0; // Session cookie (will expire when browser is closed)
    }

    // You can set as many cookies as needed
    setcookie('user_email', $user['email'], $expire, '/');
    setcookie('user_name', $user['full_name'], $expire, '/');
    setcookie('user_password', $password, $expire, '/');

    echo json_encode([
        'success' => true,
        'message' => 'Login successful',
        'user' => [
            'name' => $user['full_name'],
            'email' => $user['email']
        ]
    ]);
    
} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
