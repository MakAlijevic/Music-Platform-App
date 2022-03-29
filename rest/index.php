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
  Flight::json(Flight::dao()->addToDatabase(Flight::request()->data->getData()));
});



Flight::start();
?>
