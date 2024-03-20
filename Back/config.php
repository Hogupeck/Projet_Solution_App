<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "projet_solution_app";

$conn = mysqli_connect(
    $servername,
    $username,
    $password,
    $database
);

if ($conn) {
    // echo "success";
} else {
    die("Error" . mysqli_connect_error());
}
