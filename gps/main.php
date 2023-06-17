<?php
include "connect.php";
session_start();
if(count($_POST)>0) {
    $userRole = $_POST['userRole'];

    if ($userRole === 'student') {
      header('Location: studentlogin.php');
      exit;
    } else if ($userRole === 'profile') {
      header('Location: login.php');
      exit;
    } else if ($userRole === 'staff') {
      header('Location: stafflogin.php');
      exit;
    }
    else if ($userRole === 'tbus') {
      header('Location: busLogin.php');
      exit;
    }
    else if ($userRole === 'sbus') {
      header('Location: staffbuslogin.php');
      exit;
    }
    else if ($userRole === 'shuttle') {
      header('Location: shuttleLogin.php');
      exit;
    }
  }
?>
<html>
<head>
  <title>Login for MAP</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>

<body class="p-3 mb-2 bg-body-secondary fs-4">
  <div class="mx-auto p-2 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded fs-4" style="width: 350px;">
    <form action="" method="post">
    <label for="selectPage">Login as</label>
    <br><br>
    <select id="selectPage" class="mt-0" style="width:100%;" name="userRole">
        <option value="" disabled selected>Choose from the List</option>
        <option value="student" name="student">Student</option>
        <option value="profile"name="profile">Teacher</option>
        <option value="staff"name="staff">Staff</option>
        <option value="tbus" name="tbus" >Teacher's Bus Operator</option>
        <option value="sbus" name="sbus" >Staff Bus Operator</option>
        <option value="shuttle" name="shuttle" >Shuttle Operator</option>
    </select>
    <button type="submit" name="submit" value="Submit" class="fs-4 mt-2 btn btn-primary">Submit</button>
    </form>
  </div>
</body>
</html>
