<?php

//list all users
Flight::route('GET /user', function(){
    Flight::json(Flight::userService()->get_all());
  });
  
  //list individual user
  Flight::route('GET /user/@id', function($id){
    Flight::json(Flight::userService()->get_by_id($id));
  });
  
  //add user
  Flight::route('POST /user', function(){
    Flight::json(Flight::userService()->add_element(Flight::request()->data->getData()));
  });
  
  //delete user
  Flight::route('DELETE /user/@id', function($id){
    Flight::userService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });
  
  //update user
  Flight::route('PUT /user/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userService()->update_element($id, $data));
  });
?>