<?php
    session_start();
    include "connect.php";

    if(!isset($_SESSION['tchr_id'])){
        header("Location:teacherlogin.php");
        exit;
    }
?>

<html>
    <head>
        <title>User Profile</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"
        />
    </head>
    <body class="p-3 mb-2 bg-body-secondary fs-4">

        <div class="container">
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-6 mx-auto p-2 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">

                   

                    <div class="mt-2">
                        

                        <hr>
                        <h2>Available Bus</h2>

                        <?php
                            $Query = "SELECT * FROM tbuses where lat IS NOT NULL AND lon IS NOT NULL";
                            $executeQuery = mysqli_query($con, $Query);

                            while ($data = mysqli_fetch_assoc($executeQuery)){
                                ?>
                                <button
                                    onclick="getShuttle( <?php echo  $data['lat'].",".$data['lon'] ?> )"
                                    class="btn btn-outline-success m-2 getShuttle fs-4"
                                    type="button">
                                    <?php echo $data["name"];  ?>
                                </button>
                                
                        <?php
                        
                            }
                        ?>
                        <br>
                        <br>
                        <div class="d-grid gap-2"><a class="btn btn-outline-danger fs-4 " href="logout.php" role="button">Log Out </a></div>
                        
                    </div>
                </div>
            </div>
        </div>


        <script>

            let myCurrentLat = null;
            let myCurrentLon = null;

            
            let destinationLat = 22.4758039;
            let destinationLon = 91.8113628;


            function goToMapView( ) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);

                    setTimeout(function () {
                        
                        redirectTo(
                            myCurrentLat,
                            myCurrentLon,
                            destinationLat,
                            destinationLon
                        );
                    },500);
                } else {
                  alert( "Geolocation is not supported by this browser.");
                }
              }


              function showPosition(position) {

                  myCurrentLat = position.coords.latitude;
                  myCurrentLon = position.coords.longitude;

                  console.log(
                      "Current Lat : ",myCurrentLat,
                      "Current Lon : ",myCurrentLon,
                  );
              }

              function redirectTo(
                  lat,
                  lon,
                  destinationLat,
                  destinationLon
              ){
                  let redirectURL = `https://www.google.es/maps/dir/${lat},${lon}/${destinationLat},${destinationLon}`;
                  console.log("Redirect URL", redirectURL);

                  window.open(redirectURL, "_blank");
              }


              function getShuttle(
                  myBusCurrentLat,
                  myBusCurrentLon
              )
              {
                  

                  destinationLat = myCurrentLat;
                  destinationLon = myCurrentLon;

                  myCurrentLat = myBusCurrentLat;
                  myCurrentLon = myBusCurrentLon;

                  goToMapView();
              }
        </script>
    </body>
</html>