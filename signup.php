<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$db_host = 'localhost'; // Change if your database is on a different server
$db_username = 'root'; // Change to your database username
$db_password = 'infiniti'; // Change to your database password
$db_name = 'busgo';

// Create connection
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set content type to JSON
header('Content-Type: application/json');

// Process form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $full_name = trim($_POST['full_name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Validate inputs
    $errors = [];

    // Check if all fields are filled
    if (empty($full_name) ){
        $errors['full_name'] = "Full name is required";
    }

    if (empty($email)) {
        $errors['email'] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Invalid email format";
    } else {
        // Check if email already exists
        $sql = "SELECT id FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        
        if ($stmt->num_rows > 0) {
            $errors['email'] = "Email is already taken";
        }
        $stmt->close();
    }

    if (empty($phone)) {
        $errors['phone'] = "Phone number is required";
    } elseif (!preg_match('/^[0-9]{10,15}$/', $phone)) {
        $errors['phone'] = "Invalid phone number format";
    }

    if (empty($password)) {
        $errors['password'] = "Password is required";
    } elseif (strlen($password) < 6) {
        $errors['password'] = "Password must be at least 6 characters";
    }

    if ($password !== $confirm_password) {
        $errors['confirm_password'] = "Passwords do not match";
    }

    // If no errors, proceed with registration
    if (empty($errors)) {
        // Hash the password
        $hashed_password = $password;

        // Insert user into database
        $created_at = date("Y-m-d H:i:s");
        $sql = "INSERT INTO users (full_name, email, phone, password, created_at) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss", $full_name, $email, $phone, $hashed_password, $created_at);


        if ($stmt->execute()) {
            // Registration successful
            echo json_encode([
                'success' => true,
                'message' => 'Registration successful! You can now login.'
            ]);
        } else {
            // Database error
            echo json_encode([
                'success' => false,
                'message' => 'Something went wrong. Please try again later.',
                'error' => $stmt->error
            ]);
        }
        $stmt->close();
    } else {
        // Return validation errors
        echo json_encode([
            'success' => false,
            'message' => 'Please enter new',
            'errors' => $errors
        ]);
    }
} else {
    // Not a POST request
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}

// Close connection
$conn->close();
?>