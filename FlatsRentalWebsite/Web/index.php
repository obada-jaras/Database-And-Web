<?php
   session_start(); 
   $_SESSION['url'] = $_SERVER['REQUEST_URI'];
?>



<?php 
   try {
      require_once('config.php'); 
      $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   }
   catch (PDOException $e) {
      die($e->getMessage());
   }
?>








<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>BIRZEIT FLAT RENT</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="icon" href="images/logo50.png">    
   </head>



   <body>
      <header>
         <a href="">
            <img src="images/logo800.png" height="50px">
            <h1> BIRZEIT FLAT RENT (PFR)</h1>
         </a>

         <ul>
            <li><a href="/" id="selected">Home</a></li>
            <li><a href="/flats/flats.php">Flats</a></li>
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




      <main id="homeMain">
         <div id="firstView">
            <img src="images/home/background.jpeg">
            <h2>BIRZEIT FLAT RENT</h2>
            <h3>--- THE BEST PLACE TO FIND A FLAT ---</h3>
         </div>
         

         <div class="secondView">
            <a href="flats/flats.php">
               <figure>
                  <img src="images/home/flats.png" alt="Flats For Rent">
                  <figcaption>See All Available Flats</figcaption>
               </figure>
            </a>
            
            <a href="about-us.php">
               <figure>
                  <img src="images/home/about-us.jpg" alt="about us">
                  <figcaption>About Us</figcaption>
               </figure>
            </a>
         </div>

         <hr>

         <div id="thirdView">
            <h3>You Are Flats Owner? <a href="reg_log/reg/owner-registration.php">Register Now</a> To Offer Your Flats On <a href="" style="color: var(--color1); text-decoration: none;">BFR</a></h3>
            <h3>You Are Looking For A Flat? <a href="reg_log/reg/customer-registration.php">Register Now</a></h3>
            <h3>You Have An Account? <a href="reg_log/login.php">Sign In</a></h3>
         </div>
      </main>



      <footer>
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="images/logo50.png" height="40px">
      </footer>
   </body>
</html>