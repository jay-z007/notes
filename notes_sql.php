<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli('localhost', "root", "", "notesApp");
$sql = "SELECT * FROM `notes`";
$result = $conn->query($sql);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Sr":"' . $rs["id"] . '",';
    $outp .= '"Message":"' . $rs["message"] . '",';
    $outp .= '"Created":"' . $rs["created"] . '",';
    $outp .= '"Modified":"'. $rs["modified"] . '"}'; 
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>