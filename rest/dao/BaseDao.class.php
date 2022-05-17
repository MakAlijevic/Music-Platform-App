<?php
require_once __DIR__.'/../Config.class.php';

class BaseDao{

    private $conn;
    private $table_name;

    public function __construct($table_name){

        //database table login
        $this -> table_name = $table_name;
        $servername = Config::DB_HOST();
        $username = Config::DB_USERNAME();
        $password = Config::DB_PASSWORD();
        $schema = Config::DB_SCHEMA();
        $port = Config::DB_PORT();

        //database connection - connection to database schema
        $this->conn = new PDO("mysql:host=$servername;port=$port;dbname=$schema", $username, $password);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    //method to read all objects from database table
    public function get_all(){
        $stmt = $this->conn->prepare("SELECT * FROM ".$this->table_name);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //method to read element from database table
    public function get_by_id($id){
        $stmt = $this->conn->prepare("SELECT * FROM ".$this->table_name." WHERE id=:id");
        $stmt->execute(['id' => $id]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return @reset($result);
    }

    //method to delete objects from database table
    public function delete_element($id){
        $stmt = $this->conn->prepare("DELETE FROM user WHERE id=:id");
        //SQL Injection prevention
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }


    protected function add($entity){
        $query = "INSERT INTO ".$this->table_name." (";
        foreach ($entity as $column => $value) {
          $query .= $column.", ";
        }
        $query = substr($query, 0, -2);
        $query .= ") VALUES (";
        foreach ($entity as $column => $value) {
          $query .= ":".$column.", ";
        }
        $query = substr($query, 0, -2);
        $query .= ")";

        $stmt= $this->conn->prepare($query);
        $stmt->execute($entity); // sql injection prevention
        $entity['id'] = $this->conn->lastInsertId();
        return $entity;
      }

      protected function update($id, $entity, $id_column = "id"){
        $query = " UPDATE ".$this->table_name." SET ";
        foreach($entity as $name => $value){
          $query .= $name ."= :". $name. ", ";
        }
        $query = substr($query, 0, -2);
        $query .= " WHERE ${id_column} = :id";

        $stmt= $this->conn->prepare($query);
        $entity['id'] = $id;
        $stmt->execute($entity);
      }

      //method for any kind of query with any parameters
      protected function query($query, $params){
        $stmt = $this->conn->prepare($query);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
      }

      //method for unique query with only 1 output
      protected function query_unique($query, $params){
        $results = $this->query($query, $params);
        return reset($results);
      }


    //method to add object to database table
    public function add_element($entity){
        return $this->add($entity);
    }

    //method to update objects from database table
    public function update_element($id, $entity){
        $this->update($id, $entity);
    }
}
?>
