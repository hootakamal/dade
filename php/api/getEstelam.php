<?php

include ("config.php");
header('Content-type:text/html; charset=utf-8');
$data=json_decode(file_get_contents("php://input"),true);

$phone=$data['number'];

$resp=array();

$result=mysqli_query($con,"select * from req_order WHERE phone='".$phone."'");

while ($row=mysqli_fetch_assoc($result)){
    array_push($resp,$row);
}


echo json_encode($resp);
?>