<?php

class MusicPlatformDAO{

  private $conn;

  public function __construct(){
    $servername = "localhost";
    $username = "root";
    $password = "admin";
    $schema = "music-platform";
    $this->conn = new PDO("mysql:host=$servername;dbname=$schema", $username, $password);
    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  }

    //Get all objects from database table user

  public function get_all(){
     $stmt = $this->conn->prepare("SELECT * FROM user");
     $stmt->execute();
     return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }

//Get element from user table by userID

 public function get_by_id($id){
    $stmt = $this->conn->prepare("SELECT * FROM user WHERE userID=:id");
    $stmt->execute(['userID' => $id]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return reset($result);

  }

   //Add object to table user

   public function addToDatabase($user){
     $stmt= $this->conn->prepare("INSERT INTO user (username,password,email) VALUES (:username,:password,:email)");
     $stmt->execute($user);
     $user['userID'] = $this->conn->lastInsertId();
     return $user;

   }

   //Delete object from table user

   public function delete($id){
    $stmt = $this->conn->prepare("DELETE FROM user WHERE id=:id");
    // SQL injection prevention
    $stmt->bindParam(':id', $id);
    $stmt->execute();
  }

  //Update object in table user

  public function update($user){
    $stmt = $this->conn->prepare("UPDATE user SET username = :username, password =:password, email =:email WHERE id=:id");
    $stmt->execute($user);
    return $user;
    }
  }

?>
