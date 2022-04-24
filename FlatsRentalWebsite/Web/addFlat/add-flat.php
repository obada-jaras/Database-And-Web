<?php
   session_start(); 

   if (!isset($_SESSION['Username'])){
      back();
   } 
   else {
      if ($_SESSION['Type'] != "Owner") {
         back();
      }
   }


   function back(){
      $url = (isset($_SESSION['url'])) ? $_SESSION['url'] : "../";
      header("Location: ".$url);
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
   function isAvailable($title, $cost, $availableFromDate, $bedroomsNo, $bathroomsNo, $size){
      if (isEmbty($title)) {
         echo "plase enter the title";
         return false;
      }

      else if (isEmbty($cost)) {
         echo "plase enter the cost";
         return false;
      }

      else if (isEmbty($availableFromDate)) {
         echo "plase enter available date";
         return false;
      }

      else if (isEmbty($bedroomsNo)) {
         echo "plase enter bedrooms number";
         return false;
      }

      else if (isEmbty($bathroomsNo)) {
         echo "plase enter bathrooms number";
         return false;
      }

      else if (isEmbty($size)) {
         echo "plase enter the size";
         return false;
      }

      return true;
   }


   function isEmbty($variavle){
      return (!isset($variavle) || $variavle == "" || $variavle == " ") ? true : false;
   }



   function isFilesAccepted($arrayOfFiles){
      $count=0;
      // loop through each uploaded file
      foreach ($arrayOfFiles['error'] as $error) {
         if ($error == UPLOAD_ERR_OK) {
            $clientName = $arrayOfFiles['name'][$count];

            $components = explode(".", $clientName);
            $extension = end($components);
            if ($extension != "png" && $extension != "jpg"){
               return false;
            }
            $count++;
         }
      }
      return true;
   }
?>










<?php
   function moveFile($fileToMove, $destination, $fileType, $newName) {
      $validExt = array("jpg", "png");
      $validMime = array("image/jpeg","image/png");

      // make an array of two elements, first=filename before extension,
      // and the second=extension
      $components = explode(".", $destination);
      // retrieve just the end component (i.e., the extension)
      $extension = end($components);

      // check to see if file type is a valid one
      if (in_array($fileType,$validMime) && in_array($extension, $validExt)) {
         $destination = $newName.".".$extension;
         move_uploaded_file($fileToMove, "../images/UPLOADS/" . $destination) or die("error");
         return true;
      }
      else {
         return false;
      }
   }
?>


<!DOCTYPE html>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Add Flat - BFR</title>
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




      <main id="addFlat">
         <form method="post" action="" id="form" enctype="multipart/form-data">
            <div>
               <fieldset>
               <legend>General Information</legend>
                  <p>
                     <label for="title">Title<span>*</span> </label>
                     <input name="title" value="<?php echo isset($_POST['title']) ? $_POST['title'] : '' ?>" required/>
                  </p>

                  <p>
                     <label for="description">Short Description </label>
                     <textarea name="description" form="form" ><?php echo isset($_POST['description']) ? $_POST['description'] : '' ?></textarea>
                  </p>

                  <p>
                     <label for="costPerMonth">Rent Cost (Per Month)<span>*</span> </label>
                     <input type="number" name="costPerMonth" value="<?php echo isset($_POST['costPerMonth']) ? $_POST['costPerMonth'] : '' ?>" required/>
                  </p>

                  <p>
                     <label for="availableDate">Available From<span>*</span> </label>
                     <input type="date" name="availableDate" value="<?php echo isset($_POST['availableDate']) ? $_POST['availableDate'] : '' ?>" required/>
                  </p>

                  <p>
                     <label for="bedroomsNo">Number Of Bedrooms<span>*</span> </label>
                     <input type="number" name="bedroomsNo" value="<?php echo isset($_POST['bedroomsNo']) ? $_POST['bedroomsNo'] : '' ?>" required/>
                  </p>

                  <p>
                     <label for="bathroomsNo">Number Of Bathrooms<span>*</span> </label>
                     <input type="number" name="bathroomsNo" value="<?php echo isset($_POST['bathroomsNo']) ? $_POST['bathroomsNo'] : '' ?>" required/>
                  </p>

                  <p>
                     <label for="size">Size (In Square Meter)<span>*</span> </label>
                     <input type="number" name="size" value="<?php echo isset($_POST['size']) ? $_POST['size'] : '' ?>" required/>
                  </p>


                  <p>
                     <label for="conditions">Rent Conditions </label>
                     <input name="conditions" value="<?php echo isset($_POST['conditions']) ? $_POST['conditions'] : '' ?>" />
                  </p>
               </fieldset>

               <fieldset id="has">
               <legend>Has</legend>
                  <p>
                     <label>Furnished</label>
                     <input type="checkbox" name="furnished" value="1"><br/>

                     <label>Heating System</label>
                     <input type="checkbox" name="heating" value="1"><br/>

                     <label>Air Condition System</label>
                     <input type="checkbox" name="air" value="1"><br>

                     <label>Access Control</label>
                     <input type="checkbox" name="access" value="1"><br>

                     <label>Parking</label>
                     <input type="checkbox" name="parking" value="1"><br>

                     <label>Storage</label>
                     <input type="checkbox" name="storage" value="1"><br>

                     <label>Playing Ground</label>
                     <input type="checkbox" name="playingG" value="1"><br>
                     <hr>
                     <label>Backyard: </label><br>
                     <label for="individual">Individual</label>
                     <input type="radio" name="backYard" value="individual" id="individual"><br>
                     <label for="shared">Shared</label>
                     <input type="radio" name="backYard" value="shared" id="shared"><br>
                     <label for="no">No Backyard</label>
                     <input type="radio" name="backYard" value="no" id="no" checked>
                  </p>
               </fieldset>

            </div>
            

            <div>
               <fieldset>
               <legend>Location Information</legend>
                  <p>
                     <label for="city">City </label>
                     <input name="city" maxlength="15" value="<?php echo isset($_POST['city']) ? $_POST['city'] : '' ?>"/>
                  </p>

                  <p>
                     <label for="postal">Postal Code </label>
                     <input name="postal" maxlength="11" value="<?php echo isset($_POST['postal']) ? $_POST['postal'] : '' ?>"/>
                  </p>

                  <p>
                     <label for="street">Street Number </label>
                     <input name="street" maxlength="25" value="<?php echo isset($_POST['street']) ? $_POST['street'] : '' ?>"/>
                  </p>
               </fieldset>


               <fieldset>
               <legend>Nearby Place</legend>
                  <p>
                     <label for="nearbyTitle">Title </label>
                     <input name="nearbyTitle" value="<?php echo isset($_POST['nearbyTitle']) ? $_POST['nearbyTitle'] : '' ?>"/>
                  </p>

                  <p>
                     <label for="nearbyDescription">Short Description </label>
                     <input name="nearbyDescription" value="<?php echo isset($_POST['nearbyDescription']) ? $_POST['nearbyDescription'] : '' ?>"/>
                  </p>

                  <p>
                     <label for="nearbyLink">URL Link </label>
                     <input type="url" name="nearbyLink" value="<?php echo isset($_POST['nearbyLink']) ? $_POST['nearbyLink'] : '' ?>"/>
                  </p>
               </fieldset>


               <fieldset id="photos">
               <legend>Photos</legend>
                  <p>
                     <input value="choose photos" type="file" name="file1[]" id="file1" accept=".png, .jpg" multiple>
                     <label>Select at least 3 photos</label>
                  </p>
               </fieldset>
            </div>

            <input type="submit" name="submit" value="ADD FLAT">
 
         </form>




         <?php
            if (isset($_POST['submit'])) {
               $title = $_POST['title'];
               $cost = $_POST['costPerMonth'];
               $availableFromDate = $_POST['availableDate'];
               $bedroomsNo = $_POST['bedroomsNo'];
               $bathroomsNo = $_POST['bathroomsNo'];
               $size = $_POST['size'];

               if (isAvailable($title, $cost, $availableFromDate, $bedroomsNo, $bathroomsNo, $size)){

                  $numberOfPhotos = count($_FILES["file1"]["error"]);
                  if ($numberOfPhotos < 3){
                     echo "please choose at least 3 photos";
                  }


                  else {
                     if (!isFilesAccepted($_FILES["file1"])) {
                        echo "only png and jpg images available";
                     }


                     else {
                        $userID = $_SESSION['ID'];
                        $description = $_POST['description'];
                        $conditions = $_POST['conditions'];
                        $city = $_POST['city'];
                        $postal = $_POST['postal'];
                        $street = $_POST['street'];
                        $nearbyTitle = $_POST['nearbyTitle'];
                        $nearbyDescription = $_POST['nearbyDescription'];
                        $nearbyLink = $_POST['nearbyLink'];

                        $furnished = (isset($_POST['furnished'])) ? $_POST['furnished'] : 0;
                        $heating = (isset($_POST['heating'])) ? $_POST['heating'] : 0;
                        $air = (isset($_POST['air'])) ? $_POST['air'] : 0;
                        $access = (isset($_POST['access'])) ? $_POST['access'] : 0;
                        $parking = (isset($_POST['parking'])) ? $_POST['parking'] : 0;
                        $storage = (isset($_POST['storage'])) ? $_POST['storage'] : 0;
                        $playingG = (isset($_POST['playingG'])) ? $_POST['playingG'] : 0;
                        $backYard = (isset($_POST['backYard'])) ? $_POST['backYard'] : 0;


                        //serch if address is already exist
                        $sql = "SELECT id FROM FlatLocation WHERE City = '".$city."' AND Street = '".$street."' AND PostalCode = '".$postal."';";
                        $result = $pdo->query($sql)->fetchAll();


                        //if no same address exists, insert new one, and save its id in $addressID
                        if (count($result) == 0){ 
                           $sql = "INSERT INTO FlatLocation (City, Street, PostalCode) VALUES (?, ?, ?)";
                           $pdo->prepare($sql)->execute([$city, $street, $postal]);

                           $sql = "SELECT id FROM FlatLocation ORDER BY id DESC LIMIT 1";
                           $result = $pdo->query($sql)->fetchAll();
                           $addressID = $result[0]['id'];
                        }

                        //if there is exist a same address, save its id in $addressID
                        else {
                           $addressID = $result[0]['id'];
                        }


                        $sql = "INSERT INTO Flat (OwnerID, Title, fDescription, MonthCost, AvailablDate, RentConditions, BedroomsNo, BathroomsNo, Size, Furnished, hHeating, hAir, hAccess, hParking, hBackYard, hPlayingGround, hStorage, LocationID, NumberOfPhotos, NearbyTitle, NearbyDescription, NearbyLink) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";    //insert new Flat
                        $pdo->prepare($sql)->execute([$userID, $title, $description, $cost, $availableFromDate, $conditions, $bedroomsNo, $bathroomsNo , $size, $furnished, $heating, $air, $access, $parking, $backYard, $playingG, $storage, $addressID, $numberOfPhotos, $nearbyTitle, $nearbyDescription, $nearbyLink]);        //insert new Flat


                        $flatID = $pdo->query("SELECT id FROM Flat ORDER BY id DESC LIMIT 1")->fetchAll()[0]['id'];
                        
                        $count=0;
                        // loop through each uploaded file
                        foreach ($_FILES["file1"]["error"] as $error) {
                           if ($error == UPLOAD_ERR_OK) {
                              $clientName = $_FILES["file1"]["name"][$count];
                              $serverName = $_FILES["file1"]["tmp_name"][$count];
                              $fileType = $_FILES["file1"]["type"][$count];
                              moveFile($serverName, $clientName, $fileType, $flatID."_".$count);
                              $count++;
                           }
                        }



                        //add manager notification
                        $sql = "INSERT INTO ManagerNotification (nType, rID) VALUES (0, ?)";
                        $pdo->prepare($sql)->execute([$flatID]);



                        echo '<meta http-equiv="refresh" content="0;url=add-appointments.php?id='.$flatID.'" />';
                     }
                  }
               }
            }
         ?>


      </main>


      <footer>
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>