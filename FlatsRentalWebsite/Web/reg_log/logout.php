<?php
	session_start();
	unset($_SESSION['Username']);
	unset($_SESSION['Type']);
	unset($_SESSION['ID']);
	header("Location: ".$_SERVER['HTTP_REFERER']);
?>