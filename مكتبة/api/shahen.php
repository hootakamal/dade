<?php

include ("config.php");
header('Content-type:text/html; charset=utf-8');
$data=json_decode(file_get_contents("php://input"),true);
print_r($data);


$name=$data['name'];
$address=$data['address'];
$phone=$data['phone'];
$type=$data['type'];
$numofsh=$data['numofsh'];
$from1=$data['from1'];
$into1=$data['into1'];
$typesh=$data['typesh'];

$result=mysqli_query($con,"insert into ordershahen(name,address,phone,type1,numofcar,from1,into1,typeofcar) VALUES('".$name."','".$address."','".$phone."','".$type."','".$numofsh."','".$from1."','".$into1."','".$typesh."')");

?>