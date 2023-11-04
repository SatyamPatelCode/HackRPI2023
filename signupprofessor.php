<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Step 1: Connect to the database
    $connection = mysqli_connect("localhost", "root", "database_name");

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Step 2: Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Step 3: Insert data into the database
    $sql = "INSERT INTO professors (username, password) VALUES ('$username', '$password')";

    if (mysqli_query($connection, $sql)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . mysqli_error($connection);
    }

    // Step 4: Close the database connection
    mysqli_close($connection);
}
?>
