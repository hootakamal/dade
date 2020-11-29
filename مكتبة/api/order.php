<?php

include ("config.php");
header('Content-type:text/html; charset=utf-8');
$data=json_decode(file_get_contents("php://input"),true);

$status=array();
$resp=array();

$name=$data['name'];
$address=$data['address'];
$email=$data['email'];
$type=$data['type'];
$phone=$data['phone'];
$wwork=$data['wwork'];
$numcard=$data['numcard'];
$numbaccount=$data['numaccount'];
$time1=$data['time1'];

$salaryacount=mysqli_query($con,"select * from useraccount WHERE numberaccount=$numbaccount");
$resp=mysqli_fetch_assoc($salaryacount);


$resultsalay =500*$time1;
    $x= $resp['salary'];
    if($x > $resultsalay){

        $result1=$x-$resultsalay;

        mysqli_query($con,"insert into req_order(name,address,email,type,phone,wwork,numbercard,numaccount,time1) VALUES('$name','$address','$email','$type','$phone','$wwork','$numcard','$numbaccount','$time1')");

        mysqli_query($con,"insert into bank(name,salary,numberaccount) VALUES('".$name."','".$resultsalay."','".$numbaccount."') ");

        mysqli_query($con,"update useraccount set salary=$result1 WHERE numberaccount='$numbaccount'");

        $status['a']=1;

    }



echo json_encode($status);
?>