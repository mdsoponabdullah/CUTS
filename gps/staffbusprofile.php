<?php
session_start();
include "connect.php";

if(!isset($_SESSION['bus_id'])){
    header("Location:staffbuslogin.php");
    exit;
}

if (isset($_POST['lat'])){
    $bus_id = $_SESSION['bus_id'];

    $lat = $_POST['lat'];
    $lon = $_POST['lon'];

    $updateQuery = "UPDATE sbuses SET lat={$lat}, lon='{$lon}' WHERE id = {$bus_id}";

    $executeQuery = mysqli_query($con, $updateQuery);

    if($executeQuery){

        return [
            "success"=>true,
            "message" => "Bus Location Updated"
        ];
    }
}

?>



<html>
<head>
    <title>Bus Profile</title>
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

            Bus Name : <?php echo $_SESSION['bus_name'];?><br>

            <div class="mt-2">
                <button
                    type="button"
                    class="btn btn-success fs-4"
                    onclick="showMeAtGoogleMap()">
                    Show me at Google Map
                </button>
                <a class="btn btn-outline-primary fs-4" href="logout.php" role="button">Log Out </a>
            </div>
        </div>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<script>

    $(document).ready(function (){
        mapLoader();
    });

    function mapLoader(){
        setInterval(function () {
            console.log("Map Location Updating...");
            geoLocationCollect(); 
        },5000); 
    }


    function geoLocationCollect( ) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert( "Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {

        myCurrentLat = position.coords.latitude;
        myCurrentLon = position.coords.longitude;

        storeBusLatLonViaAjax();
    }

    function showBusCurrentLatLon(){
        $(".currentLat").text(myCurrentLat);
        $(".currentLon").text(myCurrentLon);
    }


    function storeBusLatLonViaAjax(){
        showBusCurrentLatLon();
        $.ajax({
            method : "POST",
            url : "staffbusprofile.php",
            data : { lat : myCurrentLat , lon : myCurrentLon},
            success: function (response) {

                console.log("Response", response);
            }
        });
    }

    function showMeAtGoogleMap(){
        geoLocationCollect();

        setTimeout(function () {
            redirectTo();
        },300);
    }

    function redirectTo(){
        let redirectURL = `https://www.google.es/maps/dir/${myCurrentLat},${myCurrentLon}`;
        console.log("Redirect URL", redirectURL);

        window.open(redirectURL, "_blank");
    }


</script>
</body>
</html>
