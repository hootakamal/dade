<?php

include ("config.php");
header('Content-type:text/html; charset=utf-8');
$resp=array();

$result=mysqli_query($con,"select * from ordershahen");

while ($row=mysqli_fetch_assoc($result)){
    array_push($resp,$row);
}


echo json_encode($resp);



?>