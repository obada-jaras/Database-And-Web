<?php
   session_start();

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
   $customerID = $_SESSION['ID'];

   $flatID = $_GET['id'];
   $sql = "SELECT * FROM Flat, FlatLocation, FlatOwner WHERE Flat.ID = {$flatID} AND FlatLocation.ID = Flat.LocationID AND Flat.OwnerID = FlatOwner.ID";
   $flatsResult = $pdo->query($sql)->fetchAll()[0];

   $flatName = $flatsResult['Title'];
   $availableFrom = $flatsResult['AvailablDate'];
   $flatLocation = $flatsResult['City'].", ".$flatsResult['Street'].", ".$flatsResult['PostalCode'];
   $flatMonthCost = $flatsResult['MonthCost'];

   $ownerName = $flatsResult['oName'];
   $ownerEmail = $flatsResult['EmailAddress'];
   $ownerMobile = $flatsResult['MobileNumbers'];
   $ownerTelephone = $flatsResult['TelephoneNumbers'];


   
   $sql = "SELECT * FROM Customer WHERE ID = {$customerID}";
   $customerResult = $pdo->query($sql)->fetchAll()[0];

   $customerName = $customerResult['oName'];
?>




<?php
   function isEmbty($variavle){
      return (!isset($variavle) || $variavle == "" || $variavle == " ") ? true : false;
   }

   function isAvailable($startDate, $duration, $cardNumber, $cardExpireDate, $bankName, $availableFrom){
      if (isEmbty($startDate)) {
         echo "plase enter the start date";
         return false;
      }

      else if (strtotime($startDate) < time()) {
         echo "start date should be in the future";
         return false;
      }

      else if (strtotime($startDate) < strtotime($availableFrom)) {
         echo "you shloud choose available start date";
         return false;
      }

      else if (isEmbty($duration)) {
         echo "plase enter renting duration";
         return false;
      }

      else if (isEmbty($cardNumber)) {
         echo "plase enter card number";
         return false;
      }

      else if (strlen(strval($cardNumber)) != 9) {
         echo "card number should be 9 digits";
         return false;
      }

      else if (!str_starts_with($cardNumber, '111') & !str_starts_with($cardNumber, '222') & !str_starts_with($cardNumber, '333')) {
         echo "card number should start with 111(Visa) or 222(MasterCard) or 333(American Express)";
         return false;
      }

      else if (isEmbty($cardExpireDate)) {
         echo "plase enter card expire date";
         return false;
      }

      else if (strtotime($cardExpireDate) < time()) {
         echo "expire date should be in the future";
         return false;
      }

      else if (isEmbty($bankName)) {
         echo "plase enter bank name";
         return false;
      }

      return true;
   }

   
?>




<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Book Flat - BFR</title>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="/images/logo50.png">
   </head>



   <body id="login">
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


      <main class="registration book">
         <?php
            if (isset($_GET['submit'])){
               $startDate = $_GET['startDate'];
               $duration = $_GET['duration'];
               $cardNumber = $_GET['cardNumber'];
               $cardExpireDate = $_GET['cardExpireDate'];
               $bankName = $_GET['bankName'];

                  $newAvailableDate = date("Y-m-d", strtotime("+{$duration} month", strtotime($startDate)));
                  $amount = $flatMonthCost * $duration;




                  //update flat's available date
                  $sql = "UPDATE Flat SET AvailablDate = ? WHERE ID = ?";
                  $pdo->prepare($sql)->execute([$newAvailableDate, $flatID]);

                  //check if the card existed
                  $sql = "SELECT id FROM CreditCard WHERE cNumber = {$cardNumber} AND ExpireDate = '{$cardExpireDate}' AND BankName = '{$bankName}'";
                  $result = $pdo->query($sql)->fetchAll();

                  //if no same card exists, insert new one, and save its id in $cardID
                  if (count($result) == 0) {
                     $sql = "INSERT INTO CreditCard (cNumber, ExpireDate, BankName) VALUES (?, ?, ?)";
                     $pdo->prepare($sql)->execute([$cardNumber, $cardExpireDate, $bankName]);

                     $sql = "SELECT ID FROM CreditCard ORDER BY id DESC LIMIT 1";
                     $result = $pdo->query($sql)->fetchAll();
                     $cardID = $result[0]['ID'];
                  }
                  //if there is exist a same card, save its id in $cardID
                  else {
                     $cardID = $result[0]['id'];
                  }


                  //insert new booking data
                  $sql = "INSERT INTO Booking (StartDate, EndDate, Amount, CustomerID, FlatID, cardID) VALUES (?, ?, ?, ?, ?, ?)";
                  $pdo->prepare($sql)->execute([$startDate, $newAvailableDate, $amount, $customerID, $flatID, $cardID]);

                  $bookingID = $pdo->query("SELECT id FROM Booking ORDER BY id DESC LIMIT 1")->fetchAll()[0]['id'];


                  //add manager notification
                  $sql = "INSERT INTO ManagerNotification (nType, rID) VALUES (1, ?)";
                  $pdo->prepare($sql)->execute([$bookingID]);

                  //add owner notification
                  $sql = "INSERT INTO OwnerNotification (nType, rID) VALUES (1, ?)";
                  $pdo->prepare($sql)->execute([$bookingID]);



                  echo "<p style='margin-top:175px'>Flat has been successfully rented</p>";
                  echo "<p>You can collect keys from the owner</p>";
                  echo "<br><br><br>";
                  echo "<h2>Owner's Contact Information: </h2>";
                  echo "<p>Name: {$ownerName}</p>";
                  echo "<p>e-Mail: {$ownerEmail}</p>";
                  echo "<p>Phone Number: {$ownerMobile}</p>";
                  echo "<p>Telephone Number: {$ownerTelephone}</p>";
                  exit;
            }
         ?>






         <form method="get" action="">
            <fieldset>
            <legend>Booking Info</legend>
               <p>
                  <label>Flat </label>
                  <input type="hidden" name="id" value="<?php echo $flatID;?>">
                  <input name="flat" value="<?php echo $flatName;?>" disabled/>
               </p>

               <p>
                  <label>Flat Location </label>
                  <input value="<?php echo $flatLocation;?>" disabled/>
               </p>

               <hr>
               
               <p>
                  <label>Customer Name </label>
                  <input value="<?php echo $customerName;?>" disabled/>
               </p>

               <p>
                  <label>Customer ID </label>
                  <input value="<?php echo $customerID;?>" disabled/>
               </p>
            </fieldset>

            <fieldset>
            <legend>Date & Period</legend>
                <p> 
                  <label>Start Date: <span>(Available From <?php echo $availableFrom;?>)</span></label>
                  <input type="date" name="startDate" value="<?php echo isset($_GET['startDate']) ? $_GET['startDate'] : '' ?>"/>
               </p>

               <p> 
                  <label>Rent Duration (Months) <span>(Integer Value)</span></span></label>
                  <input type="number" name="duration" value="<?php echo isset($_GET['duration']) ? $_GET['duration'] : '' ?>"/>
               </p>
            </fieldset>


            <fieldset>
            <legend>Payment Info</legend>
               <p> 
                  <label>Card Number </label>
                  <input type="number" name="cardNumber" value="<?php echo isset($_GET['cardNumber']) ? $_GET['cardNumber'] : '' ?>"/>
               </p>

               <p> 
                  <label>Expire Date </label>
                  <input type="date" name="cardExpireDate" value="<?php echo isset($_GET['cardExpireDate']) ? $_GET['cardExpireDate'] : '' ?>"/>
               </p>

               <p> 
                  <label>Bank Name </label>
                  <input name="bankName" value="<?php echo isset($_GET['bankName']) ? $_GET['bankName'] : '' ?>"/>
               </p>
            </fieldset>

            <div">
               <input type="submit" value="Submit" name="submit" style="margin-bottom: 0;">
               <br>

               
               
               
               
               
               



               <?php

                  if(isset($_GET['submit'])){
                     $startDate = $_GET['startDate'];
                     $duration = $_GET['duration'];
                     $cardNumber = $_GET['cardNumber'];
                     $cardExpireDate = $_GET['cardExpireDate'];
                     $bankName = $_GET['bankName'];

                     if(isAvailable($startDate, $duration, $cardNumber, $cardExpireDate, $bankName, $availableFrom)){
                        $newAvailableDate = date("Y-m-d", strtotime("+{$duration} month", strtotime($startDate)));
                        $amount = $flatMonthCost * $duration;

                        echo "<hr style='margin-top:30px'>";
                        echo "<p>Total Amount: {$amount}$</p>";
                        echo "<p>Renting Start Date: {$startDate}</p>";
                        echo "<p>Renting End Date: {$newAvailableDate}</p>";
                        echo "<p>Customer Name: {$customerName}</p>";
                        echo "<input type='submit' name='confirm' value='confirm'>";
                     }
                  }
               ?>


            </div>


         </form>
      </main>


      

      <footer style="position: relative; top: 50px;">
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>