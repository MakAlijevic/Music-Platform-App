<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'dao/MusicPlatformDao.class.php';
require_once '../vendor/autoload.php';

Flight::register('dao', 'MusicPlatformDAO');




// CRUD operations for todos entity

//List all objects from database user

Flight::route('GET /user', function(){
  Flight::json(Flight::dao()->get_all());
});

//list individual objects from database user by userID
Flight::route('GET /user/@userID', function($id){
  Flight::json(Flight::dao()->get_by_id($id));
});

//Add objects to database user
Flight::route('POST /user', function()){
  $data = Flight::request()->data->getData();
  Flight::json(Flight::dao()->addToDatabase($data);
});

//Update objects in database user by userID
Flight::route('PUT /user/@userID', function($id){
  $data = Flight::request()->data->getData();
  $data['userID'] = $id;
  Flight::json(Flight::dao()->update($data));
});


//Delete objects from database user by userID
Flight::route('DELETE /user/@userID', function($id){
  Flight::dao()->delete($id);
  Flight::json(["message" => "Deleted!"]);
});



Flight::start();
?>
