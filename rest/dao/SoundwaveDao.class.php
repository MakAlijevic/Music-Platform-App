<?php

class SoundwaveDao{

    private $conn;

    public function __construct(){

        //database user login
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $schema = "soundwave";
        
        //database connection - connection to database schema
        $this->conn = new PDO("mysql:host=$servername;dbname=$schema", $username, $password);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    //method to read all objects from database table user
    public function get_all(){
        $stmt = $this->conn->prepare("SELECT * FROM user");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //method to read element from database table user
    public function get_by_id($id){
        $stmt = $this->conn->prepare("SELECT * FROM user WHERE id=:id");
        $stmt->execute(['id' => $id]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return @reset($result);
    }
    
    //method to add object to database table user
    public function add_element($user){
        $stmt = $this->conn->prepare("INSERT INTO user (name, surname, username, password, email, dateOfBirth) VALUES (:name, :surname, :username, :password, :email, :dateOfBirth)");
        //SQL Injection prevention
        $stmt->execute($user);
        $user['id'] = $this->conn->lastInsertId();
        return $user;
    }

    //method to delete objects from database table user
    public function delete_element($id){
        $stmt = $this->conn->prepare("DELETE FROM user WHERE id=:id");
        //SQL Injection prevention
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }

    //method to update objects from database table user
    public function update_element($user){
        $stmt = $this->conn->prepare("UPDATE user SET name=:name, surname=:surname, username=:username, password=:password, email=:email, dateOfBirth=:dateOfBirth WHERE id=:id");
        $stmt->execute($user);
        return $user;
    }
}
?>