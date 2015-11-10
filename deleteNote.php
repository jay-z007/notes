<?php

$conn = new mysqli('localhost', "root", "", "notesapp");

	$id = $_POST['id'];
	$sql = "DELETE FROM `notes` WHERE id = '$id'";
	$result = $conn->query($sql);
	$conn->close();
?>