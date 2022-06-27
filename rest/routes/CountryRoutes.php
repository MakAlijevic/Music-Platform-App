<?php
//CRUD operations for country
  //list all countries
  /**
  * @OA\Get(path="/country", tags={"country"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Response(response="200", description="Get all countries")
  * )
  */
  Flight::route('GET /country', function(){
    Flight::json(Flight::countryService()->get_all());
  });

  //list individual country
  /**
  * @OA\Get(path="/country/{id}", tags={"country"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="id", example=1, description="Country id"),
  *     @OA\Response(response="200", description="Get individual country")
  * )
  */
  Flight::route('GET /country/@id', function($id){
    Flight::json(Flight::countryService()->get_by_id($id));
  });

  //add country
  /**
* @OA\Post(
*     path="/country", security={{"ApiKeyAuth": {}}},
*     description="Add new country",
*     tags={"country"},
*     @OA\RequestBody(description="Country info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="Vatican City",	description="Country name"),
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="Country added"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('POST /country', function(){
    Flight::json(Flight::countryService()->add_element(Flight::request()->data->getData()));
  });

  //delete country
  /**
* @OA\Delete(
*     path="/country/{id}", security={{"ApiKeyAuth": {}}},
*     description="Delete country",
*     tags={"country"},
*     @OA\Parameter(in="path", name="id", example=30, description="Country ID"),
*     @OA\Response(
*         response=200,
*         description="Country deleted"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('DELETE /country/@id', function($id){
    Flight::countryService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });

  //update country
  /**
* @OA\Put(
*     path="/country/{id}", security={{"ApiKeyAuth": {}}},
*     description="Update country",
*     tags={"country"},
*     @OA\Parameter(in="path", name="id", example=59, description="Country ID"),
*     @OA\RequestBody(description="Country info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="Turkiye",	description="Country name"),
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="Country that has been updated"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('PUT /country/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::countryService()->update_element($id, $data));
  });

  //list country by name
  /**
  * @OA\Get(path="/country/getcountry/{name}", tags={"country"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="name", example="Italy", description="Country name"),
  *     @OA\Response(response="200", description="Get country by name")
  * )
  */
  Flight::route('GET /country/getcountry/@name', function($name){
    Flight::json(Flight::countryService()->get_country_by_name($name));
  });
?>
