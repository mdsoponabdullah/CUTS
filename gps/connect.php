<?php

$con = new mysqli('localhost','root','','cuts');

if(!$con){
    die(mysqli_error($con));
}

?>