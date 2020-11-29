<?php

include ("config.php");
header('Content-type:text/html; charset=utf-8');
$data=json_decode(file_get_contents("php://input"),true);
print_r($data);


$name=$data['name'];
$email=$data['email'];
$msg=$data['msg'];


$result=mysqli_query($con,"insert into contact(name,email,masseg) VALUES('".$name."','".$email."','".$msg."')");

?>