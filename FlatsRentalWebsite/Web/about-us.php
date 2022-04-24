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
      <title>About US - BFR</title>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="/images/logo50.png">
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">    
   </head>



   <body>
      <header>
         <a href="/">
            <img src="images/logo800.png" height="50px">
            <h1> BIRZEIT FLAT RENT (PFR)</h1>
         </a>

         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/flats/flats.php">Flats</a></li>
            <li><a href="/about-us.php" id="selected">About Us</a></li>
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
                  echo '<li><a href="reg_log/reg/pre-register.php">Register</a></li>';
                  echo '<li><a href="reg_log/login.php">Login</a></li>';
               }
            ?>
         </ul>
      </header>




      <main id="about-us">
         <section>
            <h2>Birziet Flat Rent (BFR)</h2>
            <p>general introduction about the agency company, when it was established, history, awards, and management hierarchy. general introduction about the agency company, when it was established, history, awards, and management hierarchy. general introduction about the agency company, when it was established, history, awards, and management hierarchy. general introduction about the agency company, when it was established, history, awards, and management hierarchy. general introduction about the agency company, when it was established, history, awards, and management hierarchy. general introduction about the agency company, when it was established, history, awards, and management hierarchy. general introduction about the agency company, when it was established, history, awards, and management hierarchy. </p>
         </section>

         <hr>

         <section>
            <h2>Ramallah City</h2>
            <p>general information about the city in which the company is located, such as population, location, weather, famous places, famous products and famous people. You need to add a reference to other web pages in the internet that might have more information about the city. general information about the city in which the company is located, such as population, location, weather, famous places, famous products and famous people. You need to add a reference to other web pages in the internet that might have more information about the city. general information about the city in which the company is located, such as population, location, weather, famous places, famous prod  general information abou</p>

            <figure>
               <img src="https://static.timesofisrael.com/www/uploads/2017/06/f110911ns37.jpg" alt="Ramallah City" height="350px">
               <figcaption>Ramallah City</figcaption>
            </figure>
            
            <p style="margin-top: 60px;">general information about the city in which the company is located, such as population, location, weather, famous places, famous products and famous people. You need to add a reference to other web pages in the internet that might have more information about the city.general information about the city in which the company is located, such as population, location, weather, famous places, famous products and famous people. You need to add a reference to other web pages in the internet that might have more information about the city. general information about the city in which the company is located, such as population, location, weather, famous places, famous products and famous people. Check <a href="https://en.wikipedia.org/wiki/Ramallah">Wikipedia</a> and <a href="https://www.ramallah.ps/">ramallah.ps</a>.</p>
         </section>

         <hr>

         <section>
            <h2>Business Activities</h2>
            <p>a list of the main business activities done by the company. a list of the main business activities done by the company. a list of the main business activities done by the company. </p>
            <ul class="activitiesList">
               <li>Activity 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est turpis, dapibus sed congue ac.</li>
               <li>Activity 2: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</li>
               <li>Activity 3: There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</li>
            </ul>
         </section>
      </main>



      <footer>
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="images/logo50.png" height="40px">
      </footer>
   </body>
</html>