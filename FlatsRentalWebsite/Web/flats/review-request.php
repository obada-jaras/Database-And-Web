<?php
   session_start();
   $_SESSION['url'] = $_SERVER['REQUEST_URI'];


   if (!isset($_SESSION['Username'])){
      header("Location: /reg_log/login.php");
   } 
   
   else {
      if ($_SESSION['Type'] != "Customer") {
         unset($_SESSION['Username']);
         unset($_SESSION['Type']);
         unset($_SESSION['ID']);
         
         header("Location: /reg_log/login.php");
      }
   }
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
   $customerID = $_SESSION['ID'];
   $classTakenStr = '';
   $taken = 0;

   $sql = "SELECT * FROM PreviewAppointment p, Flat_Previewtime t WHERE p.PreviewID = t.ID AND t.FlatID = {$_GET['id']} AND p.CustomerID = {$customerID}";
   $result = $pdo->query($sql)->fetchAll();

   if (count($result) > 0) { 
      $taken = 1;
      $classTakenStr = "class='taken'";
   }


   if (isset($_GET['previewID'])){
      $sql = "INSERT INTO PreviewAppointment (CustomerID, PreviewID) VALUES (?, ?)";
      $pdo->prepare($sql)->execute([$customerID, $_GET['previewID']]);

      $sql = "UPDATE Flat_Previewtime SET Taken = 1 WHERE ID = ?";
      $pdo->prepare($sql)->execute([$_GET['previewID']]);


      $previewID = $pdo->query("SELECT ID FROM PreviewAppointment ORDER BY ID DESC LIMIT 1")->fetchAll()[0]['ID'];

      //add owner notification
      $sql = "INSERT INTO OwnerNotification (nType, rID) VALUES (0, ?)";
      $pdo->prepare($sql)->execute([$previewID]);


      $classTakenStr = "class='taken'";
      $taken = 1;
   }

?>







<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Request For Preview  - BFR</title>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="/images/logo50.png">    
   </head>



   <body>
      <header>
         <a href="/">
            <img src="/images/logo800.png" height="50px">
            <h1> BIRZEIT FLAT RENT (PFR)</h1>
         </a>

         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/flats/flats.php">Flats</a></li>
            <li><a href="/about-us.php">About Us</a></li>
            <?php 
               if (isset($_SESSION['Username'])){
                  $nuNoti = 0;
                  if ($_SESSION['Type'] == "Customer") {
                     $sql = "SELECT COUNT(*) AS n FROM CustomerNotification n, PreviewAppointment p WHERE nRead = 0 AND n.PreviewID = p.ID AND p.CustomerID = {$_SESSION['ID']}";
                     $nuNoti = $pdo->query($sql)->fetchAll()[0]['n'];
                  }


                  echo "<li><a href='/notifications.php'><img src='/images/notifications.png' class='notiIcon'>
                        <div class='notiNumberCirle'><p>{$nuNoti}</p></div>
                        </a></li>";
                  echo '<li><a href="/reg_log/logout.php">Logout</a></li>';
               }
            ?>
         </ul>
      </header>




      <main class="requestReview">
         <table>
         <caption>Available Preview's Times Table</caption>

            <thead>
               <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th></th>
               </tr>
            </thead>

            <tbody>
               <?php
                  $flatID = $_GET['id'];


                  $sql = "SELECT * FROM Flat_Previewtime WHERE FlatID = {$flatID} AND DayAndTime >= CURRENT_TIMESTAMP ORDER BY DayAndTime ASC";
                  $result = $pdo->query($sql)->fetchAll();

                  foreach ($result as $row) {
                     $previewID = $row['ID'];
                     $dateTime = explode(" ", $row['DayAndTime']);
                     $day = $dateTime[0];
                     $time = substr($dateTime[1], 0, 5);

                     if ($row['Taken'] == 1){
                        echo "<tr class='taken'>";
                           echo "<td>".$day."</td>";
                           echo "<td>".$time."</td>";
                           echo "<td>Taken</td>";
                        echo "</tr>";
                     }

                     else {
                        echo "<tr {$classTakenStr}>";
                           echo "<td>".$day."</td>";
                           echo "<td>".$time."</td>";
                           echo "<td><a href='?id={$flatID}&previewID={$previewID}'>Take This</a></td>";
                        echo "</tr>";
                     }
                  }
               ?>
                           
            </tbody>
         </table>

         <?php
           if ($taken == 1) {
               echo "<p style='margin-top:25px'>Your request has been sent to the owner, wait while the owner accepte it, please check your messages.</p>";
            } 
         ?>
      </main>


      <footer style="top: 0;">
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>


