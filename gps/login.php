<?php
    include "connect.php";
    session_start();
    $message="";
    if(count($_POST)>0)
     {
        $email    = $_POST['email'];
        $password = $_POST['password'];

        $query = "SELECT * FROM teacher WHERE email='".$email."' and password='".$password."'";
    
        $result = mysqli_query($con, $query);
        $rows    = mysqli_fetch_assoc($result);

        while($rows ){

            $_SESSION['tchr_id'] = $rows["teacher_id"];
            $_SESSION['tchr_name'] = $rows["teacher_name"];
            $_SESSION['tchr_email'] = $rows["email"];
            $_SESSION['tchr_phone'] = $rows["phone"];
            header("Location:teacherprofile.php");
            exit;
        }
    
    }
    
?>
<html>
<head>
<title>User Login</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body class="p-3 mb-2 bg-body-secondary fs-4">
<div class="mx-auto p-2 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded " style="width: 350px;">
    <form name="frmUser" method="post" action="" class="mx-auto p-2" style="width: 300px;">
  <div class="mb-3">
  <div class="message"><?php if($message!="") { echo $message; } ?></div>

  <h3 align="center">Login as a Teacher</h3>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" name="submit" value="Submit" class="btn btn-primary fs-4">Submit</button>
</form>
</div>
</body>
</html>