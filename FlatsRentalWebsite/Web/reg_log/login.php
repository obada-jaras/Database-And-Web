<?php
   session_start();

   if (isset($_SESSION['Username'])){
      $url = (isset($_SESSION['url'])) ? $_SESSION['url'] : "../index.php";
      header("Location: ".$url);
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




<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Login - BFR</title>
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
            <li><a href="/reg_log/reg/pre-register.php">Register</a></li>
            <li><a href="" id="selected">Login</a></li>
         </ul>
      </header>


      <main class="registration">
         <form method="post" action="">
            <div id="eAccount">
               <fieldset>
               <legend>Login</legend>
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
         </form>



         <?php
            if (isset($_POST['submit'])){
               $username = $_POST['un'];
               $password = $_POST['pw'];

               $sql = "SELECT id FROM Customer WHERE UserName = '".$username."' AND oPassword = '".$password."';";
               $result = $pdo->query($sql)->fetchAll();

               //user is customer
               if (count($result) > 0) {
                  $_SESSION['Username'] = $username;
                  $_SESSION['Type'] = "Customer";
                  $_SESSION['ID'] = $result[0]['id'];
               }


               else {
                  $sql = "SELECT id FROM FlatOwner WHERE UserName = '".$username."' AND oPassword = '".$password."';";
                  $result = $pdo->query($sql)->fetchAll();

                  //user is owner
                  if (count($result) > 0) {
                     $_SESSION['Username'] = $username;
                     $_SESSION['Type'] = "Owner";
                     $_SESSION['ID'] = $result[0]['id'];
                  }

                  else {
                     $sql = "SELECT id FROM Manager WHERE mUsername = '".$username."' AND mPassword = '".$password."';";
                     $result = $pdo->query($sql)->fetchAll();

                     //user is manager
                     if (count($result) > 0) {
                        $_SESSION['Username'] = $username;
                        $_SESSION['Type'] = "Manager";
                        $_SESSION['ID'] = $result[0]['id'];
                     }

                     //login failed
                     else {
                        echo "<p>Login Failed, try again!</p>";
                     }
                  }
               }


               if (isset($_SESSION['Username'])){
                  $url = (isset($_SESSION['url'])) ? $_SESSION['url'] : "../index.php";
                  header("Location: ".$url);
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