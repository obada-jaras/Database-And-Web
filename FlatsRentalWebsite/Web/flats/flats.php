<?php
   session_start();
   $_SESSION['url'] = $_SERVER['REQUEST_URI'];
?>


<?php
   if(isset($_GET['reset'])){
      header("Location: ../flats/flats.php");
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
   function swap4Vars(&$var1, &$var2, &$var3, &$var4){
      $temp = $var1;
      $var1 = $var2;
      $var2 = $temp;

      $temp = $var3;
      $var3 = $var4;
      $var4 = $temp;
   }


   if (isset($_GET['submit'])){
      $priceFrom = isNotEmbty($_GET['priceFrom']) ? $_GET['priceFrom'] : '0';
      $priceTo = isNotEmbty($_GET['priceTo']) ? $_GET['priceTo'] : PHP_INT_MAX;
      if ($priceFrom > $priceTo) {
         swap4Vars($priceFrom, $priceTo, $_GET['priceFrom'], $_GET['priceTo']);
      }

      $bedFrom = isNotEmbty($_GET['noBedroomsFrom']) ? $_GET['noBedroomsFrom'] : '0';
      $bedTo = isNotEmbty($_GET['noBedroomsTo']) ? $_GET['noBedroomsTo'] : PHP_INT_MAX;
      if ($bedFrom > $bedTo) {
         swap4Vars($bedFrom, $bedTo, $_GET['noBedroomsFrom'], $_GET['noBedroomsTo']);
      }

      $bathFrom = isNotEmbty($_GET['noBathroomsFrom']) ? $_GET['noBathroomsFrom'] : '0';
      $bathTo = isNotEmbty($_GET['noBathroomsTo']) ? $_GET['noBathroomsTo'] : PHP_INT_MAX;
      if ($bathFrom > $bathTo) {
         swap4Vars($bathFrom, $bathTo, $_GET['noBathroomsFrom'], $_GET['noBathroomsTo']);
      }
   }
?>





<!DOCTYPE html>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>FLATS - PFR</title>
      <link rel="stylesheet" href="/style.css" />
      <link rel="icon" href="/images/logo50.png">  


      <!-- JavaScript & jQuery used to make the locations select box searchable-->
      <!-- https://stackoverflow.com/a/60831923/15256130 -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>  

      <script type="text/javascript">
         $(document).ready(function () {
            $("#location").select2();
         });
      </script>

   </head>



   <body>
      <header>
         <a href="/">
            <img src="/images/logo800.png" height="50px">
            <h1> BIRZEIT FLAT RENT (PFR)</h1>
         </a>

         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="" id="selected">Flats</a></li>
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




      <main id="flats">
         <?php
            if (isset($_SESSION['Username'])) {
               if ($_SESSION['Type'] == "Owner") {
                  echo "<a href='/addFlat/add-flat.php'><button>Offer New Flat</button></a>";
                  echo "<hr>";
               }
            }
         ?>

         <form method="get" action="">
            <div id="srearchSortBox">
               <p>
                  <input name="search" placeholder="search" id="searchInput" value="<?php echo isset($_GET['search']) ? $_GET['search'] : '' ?>">
                  <input type="submit" name="submit" value="Go">
               </p>

               <p>
                  <?php
                     $selected =  isset($_GET['sort']) ? $_GET['sort'] : 'costLtH';
                     $scLH = ($selected == "costLtH") ? 'selected' : '';
                     $scHL = ($selected == "costHtL") ? 'selected' : '';
                     $ssHL = ($selected == "sizeHtL") ? 'selected' : '';
                     $sslh = ($selected == "sizeLtH") ? 'selected' : '';

                  ?>
                  <label for="sort">Sort By: </label>
                  <select name="sort" id="sort">
                     <optgroup label="Rent Cost">
                        <option value="costLtH" <?php echo $scLH;?>>Cost - Low to High</option>
                        <option value="costHtL"<?php echo $scHL;?>>Cost - High to Low</option>
                     </optgroup>
                     <optgroup label="Size">
                        <option value="sizeHtL" <?php echo $ssHL;?>>Size - High to Low</option>
                        <option value="sizeLtH" <?php echo $sslh;?>>Size - Low to High</option>
                     </optgroup>
                  </select>
               </p>

               <p>
                  <input type="submit" name="reset" value="Remove All Filters" id="resetBTN">
               </p>
            </div>


            <hr>


            <div id="filteringBox">
               <div id="firstLine">
                  <p>
                     <label for="priceFrom">Price from </label>
                     <input type="number" name="priceFrom" id="priceFrom" value="<?php echo isset($_GET['priceFrom']) ? $_GET['priceFrom'] : '' ?>">
                     <label for="priceTo">to </label>
                     <input type="number" name="priceTo" id="priceTo" value="<?php echo isset($_GET['priceTo']) ? $_GET['priceTo'] : '' ?>">
                  </p>

                  <p id="furnished">
                     <?php
                        $selected =  isset($_GET['Furnished']) ? $_GET['Furnished'] : 'any';
                        $any = ($selected == "any") ? 'checked' : '';
                        $yes = ($selected == "yes") ? 'checked' : '';
                        $no = ($selected == "no") ? 'checked' : '';
                     ?>
                     <label>Furnished: &nbsp;&nbsp;&nbsp;</label>
                     <input type="radio" name="Furnished" value="any" <?php echo $any;?>>
                     <label>any&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                     <input type="radio" name="Furnished" value="yes" <?php echo $yes;?>>
                     <label>yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                     <input type="radio" name="Furnished" value="no" <?php echo $no;?>>
                     <label>no</label>
                  </p>

                  <p>
                     <label for="location">Location: </label>
                     <select name="location" id="location">
                        <option>any</option>
                        <?php
                           $selected =  isset($_GET['location']) ? $_GET['location'] : 'any';

                           $sql = "SELECT DISTINCT City FROM FlatLocation;";
                           $result = $pdo->query($sql)->fetchAll(); 
                           foreach ($result as $row) {
                              $city = $row['City'];
                              if ($city == $selected) {
                                 echo "<option value='".$city."' selected>".$city."</option>";
                              }
                              else {
                                 echo "<option value='".$city."'>".$city."</option>";
                              }
                           }
                        ?>
                     </select>
                  </p>
               </div>

               <div id="secondLine">
                  <p>
                     <label for="noBedroomsFrom">Number of bedrooms between </label>
                     <input type="number" name="noBedroomsFrom" id="noBedroomsFrom" value="<?php echo isset($_GET['noBedroomsFrom']) ? $_GET['noBedroomsFrom'] : '' ?>">
                     <label for="noBedroomsTo">and </label>
                     <input type="number" name="noBedroomsTo" id="noBedroomsTo" value="<?php echo isset($_GET['noBedroomsTo']) ? $_GET['noBedroomsTo'] : '' ?>">
                  </p>

                  <p>
                     <label for="noBathroomsFrom">Number of bathrooms between </label>
                     <input type="number" name="noBathroomsFrom" id="noBathroomsFrom"  value="<?php echo isset($_GET['noBathroomsFrom']) ? $_GET['noBathroomsFrom'] : '' ?>">
                     <label for="noBathroomsTo">and </label>
                     <input type="number" name="noBathroomsTo" id="noBathroomsTo" value="<?php echo isset($_GET['noBathroomsTo']) ? $_GET['noBathroomsTo'] : '' ?>">
                  </p>
               </div>
            </div>
            
         </form>



         <hr style="border: 3px solid black; background-color: black;">



         <table>
            <tbody>
               <?php
                  function isNotEmbty($variavle){
                     return (!isset($variavle) || $variavle == "" || $variavle == " ") ? false : true;
                  }



                  if (!isset($_GET['submit'])) {
                     $sql = "SELECT Flat.ID AS ID, approved, Title, City, BedroomsNo, MonthCost, AvailablDate FROM Flat, FlatLocation WHERE LocationID = FlatLocation.ID AND approved = 1 ORDER BY MonthCost ASC;";
                  }

                  else {
                     $search = isNotEmbty($_GET['search']) ? $_GET['search'] : '';
                     $sortby = isNotEmbty($_GET['sort']) ? $_GET['sort'] : 'costLtH';
                     $furnished = isNotEmbty($_GET['Furnished']) ? $_GET['Furnished'] : 'any';
                     $location = isNotEmbty($_GET['location']) ? $_GET['location'] : 'any';



                     $locationStr = ($location == 'any') ? '' : " AND City = '".$location."'";
                     $furnishedStr = ($furnished == 'any') ? '' : (($furnished == 'yes') ? " AND Furnished = 1" : " AND Furnished = 0");

                     switch ($sortby) {
                        case 'costLtH': 
                           $sortStr = ' ORDER BY MonthCost ASC';
                           break;

                        case 'costHtL': 
                           $sortStr = ' ORDER BY MonthCost DESC';
                           break;

                        case 'sizeHtL': 
                           $sortStr = ' ORDER BY Size DESC';
                           break;

                        case 'sizeLtH': 
                           $sortStr = ' ORDER BY Size ASC';
                           break;

                        default:
                           $sortStr = ' ORDER BY MonthCost ASC';
                           break;
                     }


                     $sql = "
                        SELECT Flat.ID AS ID, Title, City, BedroomsNo, MonthCost, AvailablDate
                        FROM Flat, FlatLocation
                        WHERE LocationID = FlatLocation.ID AND 
                            approved = 1 AND

                            CONCAT(Title,' ',City) LIKE '%{$search}%' AND
                            MonthCost >= {$priceFrom} AND
                            MonthCost <= {$priceTo} AND
                            BedroomsNo >= {$bedFrom} AND
                            BedroomsNo <= {$bedTo} AND
                            BathroomsNo >= {$bathFrom} AND
                            BathroomsNo <= {$bathTo}".$locationStr.$furnishedStr.$sortStr;
                  }

                  
                  $result = $pdo->query($sql)->fetchAll(); 
                  foreach ($result as $row) {
                     $flatID = $row['ID'];
                     $flatName = $row['Title'];
                     $flatCity = $row['City'];
                     $date = $row['AvailablDate'];
                     $linkStr = "<a href='/flats/flat.php?id=".$flatID."' target='".$flatID."'>";

                     echo "<tr>";
                        echo "<td class='imgTD'>".$linkStr."<img src='/images/UPLOADS/".$flatID."_0.jpg' alt='".$flatName." - ".$flatCity."' /></a></td>";
                        echo "<td class='nameTD'>".$linkStr.$flatName."<br><span>".$flatCity."</span></td>";
                        echo "<td class='bedroomsTD'>".$linkStr.$row['BedroomsNo']." Bedrooms</td>";
                        echo "<td class='costTD'>".$linkStr.$row['MonthCost']."$/Month</td>";
                        if (strtotime($date) < time()){
                           echo "<td class='dateTD'>".$linkStr."Available Now</td>";
                        }
                        else {
                           echo "<td class='dateTD'>".$linkStr."Available From <span>".$date."</span></td>";
                        }
                        echo "<td class='moreTD'>".$linkStr."<img src='/images/flats/more.png' alt='more' class='moreIcon'/></td>";
                     echo "</tr>";
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