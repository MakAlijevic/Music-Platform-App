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

    //Get all objects from database table User

  public function get_all(){
     $stmt = $this->conn->prepare("SELECT * FROM user");
     $stmt->execute();
     return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }

//Get by id

 public function get_by_id($id){
    $stmt = $this->conn->prepare("SELECT * FROM user WHERE id=:id");
    $stmt->execute(['id' => $id]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return reset($result);

  }

   //Add object to database

   public function addToDatabase($username,$password,$email)
   {
     $stmt= $this->conn->prepare("INSERT INTO user (username,password,email) VALUES (:username,:password,:email)");
     $stmt->execute();

   }

   //Delete object from databse

   public function delete($id){
    $stmt = $this->conn->prepare("DELETE FROM user WHERE id=:id");
    // SQL injection prevention
    $stmt->bindParam(':id', $id);
    $stmt->execute();
  }

  //Update object in database

  public function update($user){
    $stmt = $this->conn->prepare("UPDATE user SET username = :username, password =:password, email =:email WHERE id=:id");
    $stmt->execute($todo);
    return $todo;
  }


}





?>
