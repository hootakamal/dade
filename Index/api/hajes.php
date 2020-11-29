<?php

include ("config.php");
header('Content-type:text/html; charset=utf-8');
$data=json_decode(file_get_contents("php://input"),true);
print_r($data);


$name=$data['name'];
$address=$data['address'];
$phone=$data['phone'];
$from1=$data['from1'];
$into1=$data['into1'];
$time1=$data['time1'];


$result=mysqli_query($con,"insert into order1(name,address,phone,from1,into1,time1) VALUES('".$name."','".$address."','".$phone."','".$from1."','".$into1."','".$time1."')");

?>