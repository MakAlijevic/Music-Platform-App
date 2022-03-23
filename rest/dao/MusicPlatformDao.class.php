<?php

class MusicPlatformDAO{

  private $conn;

  public function __construct(){
    $servername = "localhost";
    $username = "root";
    $password = "admin";
    $schema = "music-platform";
    $this->conn = new PDO("mysql:host=$servername;dbname=$schema", $username, $password);
    // set the PDO error mode to exception
    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  }


  public function get_all(){
     $stmt = $this->conn->prepare("SELECT * FROM User");
     $stmt->execute();
     return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }


   //Add object to database

   public function addToDatabase($col,$values)
   {
     $stmt= $this->conn->prepare(INSERT INTO User ($col) VALUES ($values));
     $stmt->execute();
  
   }


}





?>
