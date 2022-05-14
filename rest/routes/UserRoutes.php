<?php
require_once __DIR__.'/../Config.class.php';
  use Firebase\JWT\JWT;
  use Firebase\JWT\Key;

//verify login credentials
Flight::route('POST /login', function(){

$login = Flight::request()->data->getData();

$user = Flight::userDao()->get_user_by_username($login['username']);

if(isset($user['id'])){

  if($user['password'] == $login['password']){
    unset($user['password']);
    $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256');
    Flight::json(['token' => $jwt]);
  }else{
    Flight::json(["message"=>"Password is incorrect"], 404);
  }
}else{
  Flight::json(["message"=>"User with that username doesn't exist"], 404);
}

});

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