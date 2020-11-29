<?php

include ("config.php");

$resp=array();

$result=mysqli_query($con,"select * from contact");

while ($row=mysqli_fetch_assoc($result)){
    array_push($resp,$row);
}

echo json_encode($resp);

?>