<?php
// Step 1: Connect to the database
$connection = mysqli_connect("localhost", "username", "password", "database_name");

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Step 2: Retrieve form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

// Step 3: Insert data into the database
$sql = "INSERT INTO students (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";

if (mysqli_query($connection, $sql)) {
    echo "Data has been successfully stored.";
} else {
    echo "Error: " . mysqli_error($connection);
}

// Step 4: Close the database connection
mysqli_close($connection);
?>