<?php
   session_start();

   if (isset($_SESSION['Username'])){
      header("Location: index.php");
   }
?>


<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Register - BFR</title>
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
            <li><a href="" id="selected">Register</a></li>
            <li><a href="../login.php">Login</a></li>
         </ul>
      </header>




      <main id="registerType">
         <div class="secondView">
            <a href="owner-registration.php">
               <figure>
                  <img src="/images/register/owner.png" alt="Regiser As Owner">
                  <figcaption>Rsgister As Flats Owner</figcaption>
               </figure>
            </a>
            
            <a href="customer-registration.php">
               <figure>
                  <img src="/images/register/customer.png" alt="Register As Customer">
                  <figcaption>Register As Customer</figcaption>
               </figure>
            </a>
         </div>
      </main>



      <footer style="top: 0;">
         <p>COPYRIGHT &copy; 2022, <a href="/web2" target="mainPage">OBADA TAHAYNA 1191319.</a> All Rights Reserved.</p>
         <img src="/images/logo50.png" height="40px">
      </footer>
   </body>
</html>