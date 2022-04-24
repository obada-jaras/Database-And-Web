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
   session_start(); 

   if (!isset($_SESSION['Username'])){
      back();
   } 
   else {
      if ($_SESSION['Type'] != "Owner") {
         back();
      }

      else {
         $ownerID = $_SESSION['ID'];
         $flatID = $_GET['id'];

         $sql = "SELECT * FROM Flat WHERE ID = ".$flatID." AND OwnerID = ".$ownerID.";";
         $result = $pdo->query($sql)->fetchAll();

         if (count($result) == 0){
            back();
         }
      }
   }


   function back(){
      $url = (isset($_SESSION['url'])) ? $_SESSION['url'] : "index.php";
      header("Location: ".$url);
   }



   $_SESSION['url'] = $_SERVER['REQUEST_URI'];
?>










<?php
   function isAvailableTimeDate($datetime, $flatID) {
      date_default_timezone_set("Israel");
      $current = time();
      $entered = strtotime($datetime);
      if ($entered <= $current){
         echo "choose future date & time";
         return false;
      }

      return true;
   }
?>







<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Customer Registration - BFR</title>
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
            <li><a href="/flats/flats.php" id="selected">Flats</a></li>
            <li><a href="/about-us.php">About Us</a></li>
            <?php 
               if (isset($_SESSION['Username'])){
                  $nuNoti = 0;
                  if ($_SESSION['Type'] == "Owner") {
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


                  echo "<li><a href='/notifications.php'><img src='/images/notifications.png' class='notiIcon'>
                        <div class='notiNumberCirle'><p>{$nuNoti}</p></div>
                        </a></li>";
                  echo '<li><a href="/reg_log/logout.php">Logout</a></li>';
               }
            ?>
         </ul>
      </header>




      <main id="addTime" class="requestReview">
         <form method="post" action="">
               <fieldset>
               <legend>Add Appointments Times</legend>
                  <p>
                     <input type="datetime-local" name="datetime" value="<?php echo isset($_POST['datetime']) ? $_POST['datetime'] : '' ?>"/>
                     <input type="submit" name="add" value="Add Time"> 
                     <input type="submit" name="submit" value="Done">
                  </p>



                  <?php
                     if (isset($_POST['add'])) {

                        $datetime = $_POST['datetime'];


                        $sql = "SELECT * FROM Flat_Previewtime WHERE FlatID = ".$flatID." AND DayAndTime = '".$datetime."';";
                        $result = $pdo->query($sql)->fetchAll();
                        if (count($result) > 0){
                           echo "time and date are existed";
                        }
                        else {
                           if (isAvailableTimeDate($datetime, $flatID)){
                              $sql = "INSERT INTO Flat_Previewtime (FlatID, DayAndTime) VALUE (?, ?);";
                              $pdo->prepare($sql)->execute([$flatID, $datetime]);
                           }
                        }
                     }
                  ?>
               </fieldset>
         </form>


      
         <table>
            <?php
               $sql = "SELECT DayAndTime FROM Flat_Previewtime WHERE FlatID = ".$flatID." ORDER BY DayAndTime ASC;";
               $result = $pdo->query($sql)->fetchAll();

               echo "<br>";
               foreach ($result as $row) {
                  $dateTime = explode(" ", $row['DayAndTime']);
                  $day = $dateTime[0];
                  $time = substr($dateTime[1], 0, 5);
                  echo "<tr>";
                     echo "<td>".$day."</td>";
                     echo "<td>".$time."</td>";
                  echo "</tr>";
               }
            ?>
         </table>

         <?php
            if (isset($_POST['submit'])){
               echo "<meta http-equiv='refresh' content='0;url=/flats/flat.php?id={$flatID}'/>";
            }
         ?>

      </main>


      <footer style="top: 0;">
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>


