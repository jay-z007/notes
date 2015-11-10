<?php

$conn = new mysqli('localhost', "root", "", "notesapp");

if(isset($_POST['newNote']))
{
	
	if ($_POST['id'] == -1)
	{
		$note = $_POST['newNote'];
		$sql = "INSERT INTO `notes` (`id`, `message`, `created`, `modified`) VALUES (NULL, '$note', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";	
	}
	else
	{
		$id = $_POST['id'];
		$note = $_POST['newNote'];
		$sql = "UPDATE `notes` SET `message`= '$note' WHERE id = '$id'";
	}
	$result = $conn->query($sql);
}

	$conn->close();

	header("Location:index.html");

?>