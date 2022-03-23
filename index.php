<?php
require_once("rest/dao/MusicPlatformDAO.class.php");

$dao = new MusicPlatformDAO();
$result = $dao->get_all();
//$result=$dao->addToDatabase("email","mail@gmail.com");
print_r($result);
 ?>
