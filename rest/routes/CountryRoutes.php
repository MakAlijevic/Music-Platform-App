<?php
//CRUD operations for country
  //list all countrys
  Flight::route('GET /country', function(){
    Flight::json(Flight::countryService()->get_all());
  });

  //list individual country
  Flight::route('GET /country/@id', function($id){
    Flight::json(Flight::countryService()->get_by_id($id));
  });

  //add country
  Flight::route('POST /country', function(){
    Flight::json(Flight::countryService()->add_element(Flight::request()->data->getData()));
  });

  //delete country
  Flight::route('DELETE /country/@id', function($id){
    Flight::countryService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });

  //update country
  Flight::route('PUT /country/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::countryService()->update_element($id, $data));
  });

  //list country by name
  Flight::route('GET /country/getcountry/@name', function($name){
    Flight::json(Flight::countryDao()->get_country_by_name($name));
  });
?>