<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'dao/SoundwaveDao.class.php';
require_once '../vendor/autoload.php';

//dao to flightPHP extend
Flight::register('soundwavedao', 'SoundwaveDao');

//CRUD operations for database table user

//list all users
Flight::route('GET /user', function(){
  Flight::json(Flight::soundwavedao()->get_all());
});

//list individual user
Flight::route('GET /user/@id', function($id){
  Flight::json(Flight::soundwavedao()->get_by_id($id));
});

//add user
Flight::route('POST /user', function(){
  Flight::json(Flight::soundwavedao()->add_element(Flight::request()->data->getData()));
});

//delete user
Flight::route('DELETE /user/@id', function($id){
  Flight::soundwavedao()->delete_element($id);
  Flight::json(["message" => "deleted"]);
});

//update user
Flight::route('PUT /user/@id', function($id){
  $data = Flight::request()->data->getData();
  $data['id'] = $id;
  Flight::json(Flight::soundwavedao()->update_element($data));
});

Flight::start();
?>