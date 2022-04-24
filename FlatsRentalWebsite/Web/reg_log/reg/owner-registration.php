<?php
   session_start();

   if (isset($_SESSION['Username'])){
      header("Location: index.php");
   }
?>


<?php 
   try {
      require_once('../../config.php'); 
      $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   }
   catch (PDOException $e) {
      die($e->getMessage());
   }
?>



<?php
   function availableInfo($fName, $lName, $idN, $email, $mobileNo, $bankName, $bankBranch, $BankAccountNo){
      if (!isset($fName) || $fName == "" || $fName == " ") {
         echo "plase fill your first name";
         return false;
      }

      else if (!isset($lName) || $lName == "" || $lName == " ") {
         echo "plase fill your last name";
         return false;
      }

      else if (!ctype_alpha($fName) || !ctype_alpha($lName)) {
         echo "name should contain only characters";
         return false;
      }

      else if (!isset($idN) || $idN == "" || $idN == " ") {
         echo "plase fill your ID number";
         return false;
      }

      else if ($idN < 100000000 || $idN > 999999999) {
         echo "id number should be 9 digits";
         return false;
      }

      else if (!isset($email) || $email == "" || $email == " ") {
         echo "plase fill your e-mail address";
         return false;
      }

      else if (!isset($mobileNo) || $mobileNo == "" || $mobileNo == " ") {
         echo "plase fill your mobile number";
         return false;
      }

      else if (!isset($bankName) || $bankName == "" || $bankName == " ") {
         echo "plase fill your bank name";
         return false;
      }

      else if (!isset($bankBranch) || $bankBranch == "" || $bankBranch == " ") {
         echo "plase fill your bank branch";
         return false;
      }

      else if (!isset($BankAccountNo) || $BankAccountNo == "" || $BankAccountNo == " ") {
         echo "plase fill your bank account number";
         return false;
      }

      return true;
   }


   function availableEAccount($un, $pw) {
      if (!isset($un) || $un == "" || $un == " ") {
         echo "plase enter username";
         return false;
      }

      else if (!isset($pw) || $pw == "" || $pw == " ") {
         echo "plase enter a password";
         return false;
      }

      else if (strlen($un) < 3 || strlen($un) > 20) {
         echo "username should be between 3-20 characters";
         return false;
      }

      else if (strlen($pw) < 6 || strlen($pw) > 15) {
         echo "password should be between 6-15 characters";
         return false;
      }

      else if (!ctype_digit($pw[0])) {
         echo "password should start with a digit";
         return false;
      }

      else if (!ctype_lower(substr($pw, -1))) {
         echo "password should ends with lowercase alphabet";
         return false;
      }

      return true;
   } 
?>




<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Owner Registertion - BFR</title>
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
            <li><a href="pre-register.php" id="selected">Register</a></li>
            <li><a href="/reg_log/login.php">Login</a></li>
         </ul>
      </header>




      <main class="registration">
         <form method="post" action="">
            <div>
               <fieldset>
               <legend>General Information</legend>
                  <p>
                     <label for="fName">First Name<span>*</span> </label>
                     <input name="fName" maxlength="32" value="<?php echo isset($_POST['fName']) ? $_POST['fName'] : '' ?>" required/>
                  </p>

                  <p>
                     <label for="lName">Last Name<span>*</span> </label>
                     <input name="lName" maxlength="32" value="<?php echo isset($_POST['lName']) ? $_POST['lName'] : '' ?>" required />
                  </p>

                  <p>
                     <label for="id">ID Number<span>*</span> </label>
                     <input type="number" name="id" maxlength="9" value="<?php echo isset($_POST['id']) ? $_POST['id'] : '' ?>" required />
                  </p>

                  <p>
                     <label for="dob">Date of Birth </label>
                     <input type="date" name="dob" value="<?php echo isset($_POST['dob']) ? $_POST['dob'] : '' ?>"/>
                  </p>
               </fieldset>


               <fieldset>
               <legend>Address Information</legend>
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

                  <p>
                     <label for="houseNo">House Number </label>
                     <input name="houseNo" maxlength="16" value="<?php echo isset($_POST['houseNo']) ? $_POST['houseNo'] : '' ?>"/>
                  </p>
               </fieldset>
            </div>


            <div>
               <fieldset>
               <legend>Contact Information</legend>
                  <p>
                     <label for="mail">E-mail Address<span>*</span> </label>
                     <input type="email" name="mail" maxlength="72" value="<?php echo isset($_POST['mail']) ? $_POST['mail'] : '' ?>" required />
                  </p>

                  <p>
                     <label for="mobile">Mobile Number<span>*</span> </label>
                     <input name="mobile" maxlength="15" value="<?php echo isset($_POST['mobile']) ? $_POST['mobile'] : '' ?>" required />
                  </p>

                  <p>
                     <label for="telephone">Telephone Number </label>
                     <input name="telephone" maxlength="15" value="<?php echo isset($_POST['telephone']) ? $_POST['telephone'] : '' ?>" />
                  </p>
               </fieldset>


               <fieldset>
               <legend>Bank Details</legend>
                  <p>
                     <label for="bankName">Bank Name<span>*</span> </label>
                     <input name="bankName" maxlength="72" value="<?php echo isset($_POST['bankName']) ? $_POST['bankName'] : '' ?>" required />
                  </p>

                  <p>
                     <label for="bankBranch">Bank Branch<span>*</span> </label>
                     <input name="bankBranch" maxlength="15" value="<?php echo isset($_POST['bankBranch']) ? $_POST['bankBranch'] : '' ?>" required />
                  </p>

                  <p>
                     <label for="bankAccountNo">Account Number<span>*</span> </label>
                     <input type="number" name="bankAccountNo" maxlength="15" value="<?php echo isset($_POST['bankAccountNo']) ? $_POST['bankAccountNo'] : '' ?>" />
                  </p>
               </fieldset>
            </div>

            <input type="submit" name="checkInfo" value="Check Information">

            <?php
               $eAccountForm = '
                  <div id="eAccount">
                     <fieldset>
                     <legend>E-Account</legend>
                        <p>
                           <label for="un">Username<span>*</span></label>
                           <input name="un" minlength="3" maxlength="20" />
                        </p>

                        <p>
                           <label for="pw">Password<span>*</span></label>
                           <input type="password" name="pw" minlength="6" maxlength="15" />
                        </p>

                        <p>
                           <ul>
                              <li>Username should be between 3-20 characters.</li>
                              <li>Password should be between 6-15 characters.</li>
                              <li>Password should start with a digit and ends with a lower case alphabet.</li>
                           </ul>
                        </p>
                     </fieldset>

                     <div>
                        <input type="submit" value="Submit" name="submit">
                     </div>
                  </div>
               ';
            ?>

            <?php
               if(isset($_POST['checkInfo'])){
                  $fName = $_POST["fName"];
                  $lName = $_POST["lName"];
                  $idN = $_POST["id"];
                  $email = $_POST["mail"];
                  $mobileNo = $_POST["mobile"];
                  $bankName = $_POST["bankName"];
                  $bankBranch = $_POST["bankBranch"];
                  $BankAccountNo = $_POST["bankAccountNo"];

                  if (availableInfo($fName, $lName, $idN, $email, $mobileNo, $bankName, $bankBranch, $BankAccountNo)){
                     echo $eAccountForm;
                  }
               }

               if (isset($_POST['submit'])){
                  echo $eAccountForm;

                  $fName = $_POST["fName"];
                  $lName = $_POST["lName"];
                  $idN = $_POST["id"];
                  $email = $_POST["mail"];
                  $mobileNo = $_POST["mobile"];
                  $bankName = $_POST["bankName"];
                  $bankBranch = $_POST["bankBranch"];
                  $BankAccountNo = $_POST["bankAccountNo"];

                  if (availableInfo($fName, $lName, $idN, $email, $mobileNo, $bankName, $bankBranch, $BankAccountNo)){
                     $un = $_POST["un"];
                     $pw = $_POST["pw"];
                     
                     if (availableEAccount($un, $pw)){
                        $dof = $_POST['dob'];
                        $telephoneN = $_POST['telephone'];
                        $city = $_POST['city'];
                        $postal = $_POST['postal'];
                        $street = $_POST['street'];
                        $houseN = $_POST['houseNo'];


                        //serch if the ID number is used
                        $sql = "SELECT id FROM FlatOwner WHERE id = ".$idN." UNION SELECT id FROM Customer WHERE id = ".$idN.";";
                        $result = $pdo->query($sql)->fetchAll();


                        //no problem with the id (not used)
                        if (count($result) == 0){

                           //serch if the username is used
                           $sql = "SELECT UserName FROM FlatOwner WHERE UserName = '".$un."' UNION SELECT UserName FROM Customer WHERE UserName = '".$un."';";
                           $result = $pdo->query($sql)->fetchAll();

                           //no problem with the username (not used)
                           if (count($result) == 0){

                              //serch if address already exists
                              $sql = "SELECT id FROM PersonAddress WHERE City = '".$city."' AND Street = '".$street."' AND PostalCode = '".$postal."' AND HouseNo = '".$houseN."';";
                              $result = $pdo->query($sql)->fetchAll();


                              //if no same address exists, insert new one, and save its id in $addressID
                              if (count($result) == 0){ 
                                 $sql = "INSERT INTO PersonAddress (City, Street, PostalCode, HouseNo) VALUES (?, ?, ?, ?)";
                                 $pdo->prepare($sql)->execute([$city, $street, $postal, $houseN]);

                                 $sql = "SELECT id FROM PersonAddress ORDER BY id DESC LIMIT 1";
                                 $result = $pdo->query($sql)->fetchAll();
                                 $addressID = $result[0]['id'];
                              }

                              //if there is exist a same address, save its id in $addressID
                              else {
                                 $addressID = $result[0]['id'];
                              }


                              $sql = "INSERT INTO FlatOwner (id, oName, DateOfBirth, EmailAddress, MobileNumbers, TelephoneNumbers, AddressID, BankName, BankBranch, AccountNumber, UserName, oPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";    //insert new Owner
                              $pdo->prepare($sql)->execute([$idN, $fName." ".$lName, $dof, $email, $mobileNo, $telephoneN, $addressID, $bankName, $bankBranch, $BankAccountNo, $un, $pw]);                                                               //insert new Owner

                              echo "Registration Completed...<br>";
                              echo "Username: ".$un."<br>";
                              echo "OwnerID: ".$idN."<br>";
                              echo '<a href="../login.php"> Go To Login Page </a>';
                           }

                           //if usename is already taken
                           else {
                              echo "Username taken, please select another one";
                           }
                        }

                        //if id is used before
                        else {
                           echo "ID Number used before, please change it and try again";
                        }
                     }
                  }
               } 
            ?>

           
         </form>
      </main>






      <footer>
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>