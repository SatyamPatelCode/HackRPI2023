<?php
$db = new PDO('mysql:host=localhost;dbname=professorLogin', 'username', 'password');
$username = $_POST['username'];
$password = $_POST['password'];

$sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
$stmt = $db->prepare($sql);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password', $password);
?>