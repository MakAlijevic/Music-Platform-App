<?php
//CRUD operations for song
  //list all songs
  Flight::route('GET /song', function(){
    Flight::json(Flight::songService()->get_all());
  });

  //list individual song
  Flight::route('GET /song/@id', function($id){
    Flight::json(Flight::songService()->get_by_id($id));
  });

  //add song
  Flight::route('POST /song', function(){
    Flight::json(Flight::songService()->add_element(Flight::request()->data->getData()));
  });

  //delete song
  Flight::route('DELETE /song/@id', function($id){
    Flight::songService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });

  //update song
  Flight::route('PUT /song/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::songService()->update_element($id, $data));
  });
?>