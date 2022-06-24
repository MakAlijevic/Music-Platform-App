<?php
require_once __DIR__.'/../Config.class.php';
  use Firebase\JWT\JWT;
  use Firebase\JWT\Key;

//get username
/**
* @OA\Get(path="/username", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get username of current user")
* )
*/
Flight::route('GET /username',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['username']);
});

//get id
/**
* @OA\Get(path="/id", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get id of current user")
* )
*/
Flight::route('GET /id',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['id']);
});

//get firstname
/**
* @OA\Get(path="/firstname", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get first name of current user")
* )
*/
Flight::route('GET /firstname',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['name']);
});

//get lastname
/**
* @OA\Get(path="/lastname", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get last name of current user")
* )
*/
Flight::route('GET /lastname',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['surname']);
});

//get email
/**
* @OA\Get(path="/email", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get email of current user")
* )
*/
Flight::route('GET /email',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['email']);
});

//get date of birth
/**
* @OA\Get(path="/dob", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get date of birth of current user")
* )
*/
Flight::route('GET /dob',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['dateOfBirth']);
});

//get country
/**
* @OA\Get(path="/country/user", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get countryID of current user")
* )
*/
Flight::route('GET /country/user', function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['countryID']);
});

//get photo
/**
* @OA\Get(path="/photo", tags={"user"}, security={{"ApiKeyAuth": {}}},
*     @OA\Response(response="200", description="Get photo of current user")
* )
*/
Flight::route('GET /photo',function(){
  $validUser=Flight::get('validUser');
  $user=Flight::json($validUser['photo']);
});

//user registration
/**
* @OA\Post(
*     path="/register", security={{"ApiKeyAuth": {}}},
*     description="Register new user",
*     tags={"user"},
*     @OA\RequestBody(description="User info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="emina",	description="First name of user"),
*    				@OA\Property(property="surname", type="string", example="sirbubalo",	description="Last name of user" ),
*           @OA\Property(property="username", type="string", example="emina123",	description="Username" ),
*           @OA\Property(property="password", type="string", example="12345678",	description="Password" ),
*           @OA\Property(property="email", type="string", example="emina@gmai.com",	description="Email" ),
*           @OA\Property(property="dateOfBirth", type="date", example="2000-10-10",	description="Date of birth" ),
*           @OA\Property(property="photo", type="string", example="avatars/female1",	description="Photo" ),
*           @OA\Property(property="countryID", type="int", example="1",	description="CountryID" )
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="User created"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
Flight::route('POST /register', function(){
  $registerUser = Flight::request()->data->getData();
  $storedUser = Flight::userDao()->get_user_by_username($registerUser['username']);

  if(isset($storedUser['id'])){
    Flight::json(["message"=>"User with that username already exists. Try different username."], 404);
  }else{
    Flight::json(Flight::userService()->add_element(Flight::request()->data->getData()));
  }
});

//verify login credentials
/**
* @OA\Post(
*     path="/login",
*     description="Soundwave login",
*     tags={"user"},
*     @OA\RequestBody(description="User info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="username", type="string", example="emina",	description="Email"),
*    				@OA\Property(property="password", type="string", example="12345678",	description="Password" )
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="JWT Token on successful response"
*     ),
*     @OA\Response(
*         response=404,
*         description="Wrong Password | User doesn't exist"
*     )
* )
*/
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

//CRUD operations for user


  //list all users
  /**
 * @OA\Get(path="/user", tags={"user"}, security={{"ApiKeyAuth": {}}},
 *     @OA\Response(response="200", description="Fetch all users")
 * )
 */
  Flight::route('GET /user', function(){
    Flight::json(Flight::userService()->get_all());
  });

  //list individual user
  /**
 * @OA\Get(path="/user/{id}", tags={"user"}, security={{"ApiKeyAuth": {}}},
 *     @OA\Parameter(in="path", name="id", example=1, description="Id of user"),
 *     @OA\Response(response="200", description="Fetch individual user")
 * )
 */
  Flight::route('GET /user/@id', function($id){
    Flight::json(Flight::userService()->get_by_id($id));
  });

  //add user
  /**
* @OA\Post(
*     path="/user", security={{"ApiKeyAuth": {}}},
*     description="Add new user",
*     tags={"user"},
*     @OA\RequestBody(description="User info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="emina",	description="First name of user"),
*    				@OA\Property(property="surname", type="string", example="sirbubalo",	description="Last name of user" ),
*           @OA\Property(property="username", type="string", example="emina123",	description="Username" ),
*           @OA\Property(property="password", type="string", example="12345678",	description="Password" ),
*           @OA\Property(property="email", type="string", example="emina@gmai.com",	description="Email" ),
*           @OA\Property(property="dateOfBirth", type="date", example="2000-10-10",	description="Date of birth" ),
*           @OA\Property(property="photo", type="string", example="images/female1",	description="Photo" ),
*           @OA\Property(property="countryID", type="int", example="1",	description="CountryID" )
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="User created"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('POST /user', function(){
    Flight::json(Flight::userService()->add_element(Flight::request()->data->getData()));
  });

  //delete user
  /**
* @OA\Delete(
*     path="/user/{id}", security={{"ApiKeyAuth": {}}},
*     description="Delete user",
*     tags={"user"},
*     @OA\Parameter(in="path", name="id", example=1, description="User ID"),
*     @OA\Response(
*         response=200,
*         description="User deleted"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('DELETE /user/@id', function($id){
    Flight::userService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });

  //update user
  /**
* @OA\Put(
*     path="/user/{id}", security={{"ApiKeyAuth": {}}},
*     description="Update user",
*     tags={"user"},
*     @OA\Parameter(in="path", name="id", example=1, description="User ID"),
*     @OA\RequestBody(description="User info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="emina",	description="First name of user"),
*    				@OA\Property(property="surname", type="string", example="sirbubalo",	description="Last name of user" ),
*           @OA\Property(property="username", type="string", example="emina123",	description="Username" ),
*           @OA\Property(property="password", type="string", example="newpassword",	description="Password" ),
*           @OA\Property(property="email", type="string", example="emina@gmai.com",	description="Email" ),
*           @OA\Property(property="dateOfBirth", type="date", example="2000-10-10",	description="Date of birth" ),
*           @OA\Property(property="photo", type="string", example="images/female1",	description="Photo" ),
*           @OA\Property(property="countryID", type="int", example="1",	description="CountryID" )
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="User that has been updated"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('PUT /user/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::userService()->update_element($id, $data));
  });

?>
