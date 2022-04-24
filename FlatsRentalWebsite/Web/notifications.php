<?php
   session_start();

   if (!isset($_SESSION['ID'])){
      header("Location: ../");
   } 


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





<?php 
   ///// type 0 - manager  |  type 1 - owner |  type 2 - customer /////
   $id = $_SESSION['ID'];
   $sql = "SELECT id FROM Customer WHERE id = {$id}";
   $result = $pdo->query($sql)->fetchAll();

   //user is customer
   if (count($result) > 0) {
      $type = 2;
   }

   else {
      $sql = "SELECT id FROM FlatOwner WHERE id = {$id}";
      $result = $pdo->query($sql)->fetchAll();

      //user is owner
      if (count($result) > 0) {
         $type = 1;
      }

      else {
         $sql = "SELECT id FROM Manager WHERE id = {$id}";
         $result = $pdo->query($sql)->fetchAll();

         //user is manager
         if (count($result) > 0) {
            $type = 0;
         }

         //login failed
         else {
            back();
         }
      }
   }
?>






<?php
//button actions
   if (isset($_GET['fID'])){
      if ($type == 0){
         $sql = "UPDATE Flat SET Approved = 1 WHERE ID = ?";
         $pdo->prepare($sql)->execute([$_GET['fID']]);
      }
      else {
         echo "this action can done only by managers";
      }
   }



   else if (isset($_GET['pID'])){
      if ($type == 1) {
         $sql = "UPDATE PreviewAppointment SET Approved = 1 WHERE ID = ?";
         $pdo->prepare($sql)->execute([$_GET['pID']]);

         $sql = "INSERT INTO CustomerNotification (PreviewID) VALUES (?)";
         $pdo->prepare($sql)->execute([$_GET['pID']]);
      }
      else {
         echo "this action can done only by owners";
      }
   }
?>









<!DOCTYPE html>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Notifications - PFR</title>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="/images/logo50.png">
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">  
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
            <li><a href="reg_log/logout.php">Logout</a></li>
         </ul>
      </header>




      <main id="requestReview" class="notifications">
         <table>
            <tbody>
               <?php
                  //for managers
                  if ($type == 0){
                     echo "<caption> Manager Notifications </caption>";

                     $sql = "SELECT * FROM ManagerNotification ORDER BY ID DESC";
                     $result = $pdo->query($sql)->fetchAll();

                     foreach ($result as $row) {
                        $nID = $row['ID'];
                        $read = $row['nRead'];
                        $type = $row['nType'];
                        $rID = $row['rID'];



                        if ($row['nType'] == 0){
                           $sql = "SELECT f.ID, o.oName, f.Title, f.MonthCost, f.AddingDate, f.approved FROM Flat f, FlatOwner o WHERE f.OwnerID = o.ID AND f.ID = {$rID}";
                           $fResult = $pdo->query($sql)->fetchAll();

                           if (count($fResult) > 0) {
                              $fResult = $fResult[0];

                              $ownerName = $fResult['oName'];
                              $flatID = $fResult['ID'];
                              $flatTitle = $fResult['Title'];
                              $flatCost = $fResult['MonthCost'];
                              $time = $fResult['AddingDate'];
                              $isApproved = $fResult['approved'];

                              echo ($read == 0) ? "<tr class='nonReadNotification'>" : "<tr class='readNotification'>";
                              echo ($read == 0) ? "<td>&#9679;</td>" : "<td>&#9675;</td>";   //black or white circle
                              echo "<td>{$ownerName} wants to publish a new flat ({$flatTitle}) for {$flatCost}$/Month</td>";
                              echo "<td><a href='/flats/flat.php?id={$flatID}' target='{$flatID}'>See flat details</a></td>";
                              echo ($isApproved) ?
                                 "<td><button class='approvedBTN' disabled>Approved</button></td>" : 
                                 "<td><a href='notifications.php?fID={$flatID}'><button>Approve</button></a></td>";
                              echo "<td>{$time}</td>";
                              echo "</tr>";
                           }
                        }

                        else {
                           $sql = "SELECT c.oName AS cName, b.bTime, f.ID, f.Title, o.oName FROM Booking b, Customer c, Flat f, FlatOwner o WHERE b.CustomerID = c.ID AND b.FlatID = f.ID AND f.OwnerID = o.ID AND b.ID = {$rID}";
                           $bResult = $pdo->query($sql)->fetchAll();

                           if (count($bResult) > 0) {
                              $bResult = $bResult[0];

                              $customerName = $bResult['cName'];
                              $flatID = $bResult['ID'];
                              $flatTitle = $bResult['Title'];
                              $ownerName = $bResult['oName'];
                              $time = $bResult['bTime'];

                              echo ($read == 0) ? "<tr class='nonReadNotification'>" : "<tr class='readNotification'>";
                              echo ($read == 0) ? "<td>&#9679;</td>" : "<td>&#9675;</td>";   //black or white circle
                              echo "<td>{$customerName} rented flat \"$flatTitle\" from $ownerName</td>";
                              echo "<td><a href='/flats/flat.php?id={$flatID}' target='{$flatID}'>See flat details</a></td>";
                              echo "<td></td>";
                              echo "<td>{$time}</td>";
                              echo "</tr>";
                           }
                        }
                        
                        //mark notification as read
                        $sql = "UPDATE ManagerNotification SET nRead = 1 WHERE ID = {$nID}";
                        $pdo->prepare($sql)->execute([]);
                     }
                  }


                  //for owners
                  else if ($type == 1) {
                     echo "<caption> Owner Notifications </caption>";

                     $sql = "SELECT * FROM OwnerNotification ORDER BY ID DESC";
                     $result = $pdo->query($sql)->fetchAll();

                     foreach ($result as $row) {
                        $nID = $row['ID'];
                        $read = $row['nRead'];
                        $type = $row['nType'];
                        $rID = $row['rID'];
                        $time = $row['nDate'];

                        
                        if ($row['nType'] == 0) {
                           $sql = "SELECT r.ID, c.oName, f.ID AS fID, f.Title, t.DayAndTime, r.Approved FROM PreviewAppointment r, Customer c, Flat_Previewtime t, Flat f WHERE r.CustomerID = c.ID AND r.PreviewID = t.ID AND t.FlatID = f.ID AND r.ID = {$rID} AND f.OwnerID = {$id}";
                           $pResult = $pdo->query($sql)->fetchAll();
                           if (count($pResult) > 0) {
                              $pResult = $pResult[0];

                              $previewRequestID = $pResult['ID'];
                              $customerName = $pResult['oName'];
                              $flatID = $pResult['fID'];
                              $flatTitle = $pResult['Title'];
                              $previewDate = $pResult['DayAndTime'];
                              $isApproved = $pResult['Approved'];

                              echo ($read == 0) ? "<tr class='nonReadNotification'>" : "<tr class='readNotification'>";
                              echo ($read == 0) ? "<td>&#9679;</td>" : "<td>&#9675;</td>";   //black or white circle
                              echo "<td>{$customerName} requested a preview for \"$flatTitle\" at {$previewDate}</td>";
                              echo "<td><a href='/flats/flat.php?id={$flatID}' target='{$flatID}'>See flat details</a></td>";
                              echo ($isApproved) ?
                                 "<td><button class='approvedBTN' disabled>Approved</button></td>" : 
                                 "<td><a href='notifications.php?pID={$previewRequestID}'><button>Approve</button></a></td>";
                              echo "<td>{$time}</td>";
                              echo "</tr>";

                              //mark notification as read
                              $sql = "UPDATE OwnerNotification SET nRead = 1 WHERE ID = {$nID}";
                              $pdo->prepare($sql)->execute([]);
                           }
                        }

                        else {
                           
                           $sql = "SELECT c.oName, f.ID, f.Title, b.EndDate FROM Booking b, Customer c, Flat f WHERE b.CustomerID = c.ID AND b.FlatID = f.ID AND b.ID = {$rID} AND f.OwnerID = {$id}";
                           $bResult = $pdo->query($sql)->fetchAll();

                           if (count($bResult) > 0) {
                              $bResult = $bResult[0];

                              $customerName = $bResult['oName'];
                              $flatID = $bResult['ID'];
                              $flatTitle = $bResult['Title'];
                              $bookUntil = $bResult['EndDate'];

                              echo ($read == 0) ? "<tr class='nonReadNotification'>" : "<tr class='readNotification'>";
                              echo ($read == 0) ? "<td>&#9679;</td>" : "<td>&#9675;</td>";   //black or white circle
                              echo "<td>{$customerName} rented flat \"$flatTitle\" until {$bookUntil}</td>";
                              echo "<td><a href='/flats/flat.php?id={$flatID}' target='{$flatID}'>See flat details</a></td>";
                              echo "<td></td>";
                              echo "<td>{$time}</td>";
                              echo "</tr>";

                              //mark notification as read
                              $sql = "UPDATE OwnerNotification SET nRead = 1 WHERE ID = {$nID}";
                              $pdo->prepare($sql)->execute([]);
                           }
                        }
                     }
                  }


                  //for customers
                  else if ($type == 2) {
                     echo "<caption> Customer Notifications </caption>";

                     $sql = "SELECT * FROM CustomerNotification ORDER BY ID DESC";
                     $result = $pdo->query($sql)->fetchAll();

                     foreach ($result as $row) {
                        $nID = $row['ID'];
                        $read = $row['nRead'];
                        $rID = $row['PreviewID'];
                        $time = $row['nDate'];

                        $sql = "SELECT f.ID, f.Title, t.DayAndTime FROM PreviewAppointment r, Flat_Previewtime t, Flat f WHERE r.PreviewID = t.ID AND t.FlatID = f.ID AND r.ID = {$rID} AND r.CustomerID = {$id}";
                        $pResult = $pdo->query($sql)->fetchAll();

                        if (count($pResult) > 0) {
                           $pResult = $pResult[0];

                           $flatID = $pResult['ID'];
                           $flatTitle = $pResult['Title'];
                           $previewDate = $pResult['DayAndTime'];

                           echo ($read == 0) ? "<tr class='nonReadNotification'>" : "<tr class='readNotification'>";
                           echo ($read == 0) ? "<td>&#9679;</td>" : "<td>&#9675;</td>";   //black or white circle
                           echo "<td>preview for flat \"$flatTitle\" at {$previewDate} has been accepted</td>";
                           echo "<td><a href='/flats/flat.php?id={$flatID}' target='{$flatID}'>See flat details</a></td>";
                           echo "<td>{$time}</td>";
                           echo "</tr>";

                           //mark notification as read
                           $sql = "UPDATE CustomerNotification SET nRead = 1 WHERE ID = {$nID}";
                           $pdo->prepare($sql)->execute([]);
                        }
                     }
                  }
               ?>
            </tbody>
         </table>
      </main>


      <footer>
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>