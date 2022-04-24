<?php
   session_start();
   $_SESSION['url'] = $_SERVER['REQUEST_URI'];
?>





<?php 
   try {
      require_once('../config.php'); 
      $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   }
   catch (PDOException $e) {
      die($e->getMessage());
   }
?>





<?php
   $flatID = $_GET['id'];

   $sql = "SELECT f.*, l.City, l.Street, l.postalCode, o.oName, o.EmailAddress, o.MobileNumbers, o.TelephoneNumbers
            FROM Flat f, FlatLocation l, FlatOwner o
            WHERE 
               LocationID = l.ID AND
               OwnerId = o.ID AND
               f.ID = ".$flatID;
   $result = $pdo->query($sql)->fetchAll()[0];

   $title = $result['Title'];
   $description = $result['fDescription'];
   $cost = $result['MonthCost'];
   $availableDate = $result['AvailablDate'];
   $conditions = $result['RentConditions'];

   $bedrooms = $result['BedroomsNo'];
   $bathrooms = $result['BathroomsNo'];
   $size = $result['Size'];

   $furnished = $result['Furnished'];
   $hHeating = $result['hHeating'];
   $hAir = $result['hAir'];
   $hAccess = $result['hAccess'];
   $hParking = $result['hParking'];
   $hBackYard = $result['hBackYard'];
   $hPlayingGround = $result['hPlayingGround'];
   $hStorage = $result['hStorage'];

   $nuPhotos = $result['NumberOfPhotos'];

   $nearTitle = $result['NearbyTitle'];
   $nearDescription = $result['NearbyDescription'];
   $nearLink = $result['NearbyLink'];

   $city = $result['City'];
   $street = $result['Street'];
   $postal = $result['postalCode'];

   $oName = $result['oName'];
   $oMail = $result['EmailAddress'];
   $oMobile = $result['MobileNumbers'];
   $oTelephone = $result['TelephoneNumbers'];
?>










<!DOCTYPE html>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title><?php echo $title?> - PFR</title>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="/images/logo50.png">  


      <!-- for image slider -->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
      <link rel="stylesheet" href="/slider/css/owl.carousel.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css">
      <link rel="stylesheet" href="/slider/css/style.css">

   </head>



   <body>
      <header>
         <a href="/">
            <img src="/images/logo800.png" height="50px">
            <h1> BIRZEIT FLAT RENT (PFR)</h1>
         </a>

         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="flats.php" id="selected">Flats</a></li>
            <li><a href="/about-us.php">About Us</a></li>
            <?php 
               if (isset($_SESSION['Username'])){
                  $nuNoti = 0;
                  if ($_SESSION['Type'] == "Customer") {
                     $sql = "SELECT COUNT(*) AS n FROM CustomerNotification n, PreviewAppointment p WHERE nRead = 0 AND n.PreviewID = p.ID AND p.CustomerID = {$_SESSION['ID']}";
                     $nuNoti = $pdo->query($sql)->fetchAll()[0]['n'];
                  }

                  else if ($_SESSION['Type'] == "Owner") {
                     $sql = "SELECT * FROM OwnerNotification WHERE nRead = 0 ORDER BY ID DESC";
                     $result = $pdo->query($sql)->fetchAll();

                     $nuNoti = 0;
                     foreach ($result as $row) {
                        if ($row['nType'] == 0) {
                           $sql = "SELECT * FROM PreviewAppointment p, Flat_Previewtime t, Flat f WHERE p.PreviewID = t.ID AND t.FlatID = f.ID AND f.OwnerID = {$_SESSION['ID']} AND p.ID = {$row['rID']}";

                           $pResult = $pdo->query($sql)->fetchAll();
                           if (count($pResult) > 0) {
                              $nuNoti++;
                           }
                        }

                        else {
                           $sql = "SELECT * FROM Booking b, Flat f WHERE b.FlatID = f.ID AND f.OwnerID = {$_SESSION['ID']} AND b.ID = {$row['rID']}";

                           $pResult = $pdo->query($sql)->fetchAll();
                           if (count($pResult) > 0) {
                              $nuNoti++;
                           }
                        }
                     }
                  }

                  else if ($_SESSION['Type'] == "Manager") {
                     $sql = "SELECT COUNT(*) AS n FROM {$_SESSION['Type']}Notification WHERE nRead = 0";
                     $nuNoti = $pdo->query($sql)->fetchAll()[0]['n'];
                  }


                  echo "<li><a href='/notifications.php'><img src='/images/notifications.png' class='notiIcon'>
                        <div class='notiNumberCirle'><p>{$nuNoti}</p></div>
                        </a></li>";
                  echo '<li><a href="/reg_log/logout.php">Logout</a></li>';
               }

               else {
                  echo '<li><a href="/reg_log/reg/pre-register.php">Register</a></li>';
                  echo '<li><a href="/reg_log/login.php">Login</a></li>';
               }
            ?>
         </ul>
      </header>




      <main id="flat">
         <aside id='left-aside'>
            <div>
               <h2><a href="review-request.php?id=<?php echo $flatID?>">Request Flat Review</a></h2>
               <hr>
               <p><?php echo $cost?>$/Month</p>
               <h1><a href="book.php?id=<?php echo $flatID?>">BOOK NOW</a></h1>
               <p>Available Until <?php echo $availableDate?></p>
            </div>

            <div>
               <h1>Contact Information</h1>
               <hr>
               <p>Owner: <?php echo $oName?></p>
               <p><?php echo $oMail?></p>
               <p><?php echo $oMobile?></p>
               <p><?php echo $oTelephone?></p>
            </div>
         </aside>


         <aside id="right-aside">
            <div>
               <h1>Marketing Information</h1>
               <hr>
               <h3><?php echo $nearTitle?></h3>
               <p><?php echo $nearDescription?></p>
               <a href="<?php echo $nearLink?>"><?php echo $nearLink?></a>
            </div>
         </aside>




         <div id="middle">
            <h1 id="flatTitle"><?php echo $title?></h1>

            <!-- images slider -->
            <!-- https://colorlib.com/wp/template/carousel-09/ -->
            <section class="ftco-section" style="padding: 0;">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="hero featured-carousel owl-carousel">
                           <?php
                              for ($i = 0; $i < $nuPhotos; $i++){
                                 echo "<div class='item'>";
                                    echo "<div class='work'>";
                                       echo "<div class='img d-flex align-items-center justify-content-center' style='background-image: url(/images/UPLOADS/";
                                       echo $flatID."_".$i;
                                       echo ".jpg);'></div>";
                                 echo "</div></div>";
                              }
                           ?>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <!-- end of images slider -->


            <p>Reference ID: #<?php echo $flatID?></p>

            <section id="flatLocation">
               <p><strong>LOCATION:</strong> <?php echo $city.", ".$street.", ".$postal?></p>
            </section>

            <section id="flatNumbers">
               <p>Number of bedrooms: <strong><?php echo $bedrooms?></strong></p>
               <p>Number of bathrooms: <strong><?php echo $bathrooms?></strong></p>
               <p>Size: <strong><?php echo $size?>m&#178;</strong></p>
            </section>

            <section id="flatDescription">
               <h2>Description</h2>
               <hr>
               <p><?php echo $description?></p>
            </section>

            <?php
               function echoImage($var)   {
                  echo ($var == 1) ? "<img src='/images/flat/true.png' height='18px'>" : "<img src='/images/flat/x.png' height='18px'>";
               }
            ?>

            <section id="flatHas">
               <h2>Has: </h2>
               <hr>
               <div>
                  <ul>
                     <li>Furnished <?php echoImage($furnished); ?></li>
                     <li>Heating System <?php echoImage($hHeating); ?> </li>
                     <li>Air-Condition System <?php echoImage($hAir); ?></li>
                     <li>Access Control <?php echoImage($hAccess); ?></li>
                  </ul>
               </div>

               <div>
                  <ul>
                     <li>Car Parking <?php echoImage($hParking); ?></li>
                     <li>Backyard
                        <?php
                           if ($hBackYard == "no")
                              echo "<img src='/images/flat/x.png' height='18px'>";
                           else
                              echo "(".$hBackYard.")<img src='/images/flat/true.png' height='18px'>";
                        ?></li>
                     <li>Playing Ground <?php echoImage($hPlayingGround); ?></li>
                     <li>Storage <?php echoImage($hStorage); ?></li>
                  </ul>
               </div>   
            </section>

            <section id="flatConditions">
               <h2>Rent Conditions:</h2>
               <hr>
               <p><?php echo $conditions?></p>
            </section>
         </div>
      </main>












      <footer>
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>


      <!-- for image slider -->
      <script src="/slider/js/jquery.min.js"></script>
      <script src="/slider/js/popper.js"></script>
      <script src="/slider/js/bootstrap.min.js"></script>
      <script src="/slider/js/owl.carousel.min.js"></script>
      <script src="/slider/js/main.js"></script>
   </body>
</html>