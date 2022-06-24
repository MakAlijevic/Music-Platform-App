<?php
//get songs by search
/**
* @OA\Get(path="/song/search/{search}", tags={"song"}, security={{"ApiKeyAuth": {}}},
*     @OA\Parameter(in="path", name="search", example="Harry", description="Search input"),
*     @OA\Response(response="200", description="Get songs by search input")
* )
*/
Flight::route('GET /song/search/@search', function($search){
  Flight::json(Flight::songDao()->get_songs_by_search($search));
});

//CRUD operations for song
  //list all songs
  /**
  * @OA\Get(path="/song", tags={"song"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Response(response="200", description="Get all songs")
  * )
  */
  Flight::route('GET /song', function(){
    Flight::json(Flight::songService()->get_all());
  });

  //list individual song
  /**
  * @OA\Get(path="/song/{id}", tags={"song"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="id", example=1, description="Song id"),
  *     @OA\Response(response="200", description="Get individual song")
  * )
  */
  Flight::route('GET /song/@id', function($id){
    Flight::json(Flight::songService()->get_by_id($id));
  });

  //add song
  /**
* @OA\Post(
*     path="/song", security={{"ApiKeyAuth": {}}},
*     description="Add new song",
*     tags={"song"},
*     @OA\RequestBody(description="Song info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="title", type="string", example="Coldplay - Paradise",	description="Song title"),
*    				@OA\Property(property="cover", type="string", example="images/Coldplay - Paradise",	description="Cover of the song" ),
*           @OA\Property(property="path", type="string", example="music/Coldplay - Paradise",	description="Path of the song" ),
*           @OA\Property(property="duration", type="string", example="02:03",	description="Duration of the song" ),
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="Song added"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('POST /song', function(){
    Flight::json(Flight::songService()->add_element(Flight::request()->data->getData()));
  });

  //delete song
  /**
* @OA\Delete(
*     path="/song/{id}", security={{"ApiKeyAuth": {}}},
*     description="Delete song",
*     tags={"song"},
*     @OA\Parameter(in="path", name="id", example=30, description="Song ID"),
*     @OA\Response(
*         response=200,
*         description="Song deleted"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('DELETE /song/@id', function($id){
    Flight::songService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });

  //update song
  /**
* @OA\Put(
*     path="/song/{id}", security={{"ApiKeyAuth": {}}},
*     description="Update song",
*     tags={"song"},
*     @OA\Parameter(in="path", name="id", example=30, description="Song ID"),
*     @OA\RequestBody(description="Song info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="title", type="string", example="Coldplay - Paradise",	description="Song title"),
*    				@OA\Property(property="cover", type="string", example="images/Coldplay - Paradise",	description="Cover of the song" ),
*           @OA\Property(property="path", type="string", example="music/Coldplay - Paradise",	description="Path of the song" ),
*           @OA\Property(property="duration", type="string", example="02:03",	description="Duration of the song" ),
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="Song that has been updated"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('PUT /song/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::songService()->update_element($id, $data));
  });

  /**
  * @OA\Get(path="/song/getsong/{title}", tags={"song"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="title", example="Justin Bieber - Ghost", description="Song title"),
  *     @OA\Response(response="200", description="Get song by title")
  * )
  */
  Flight::route('GET /song/getsong/@title', function($title){
    Flight::json(Flight::songDao()->get_song_by_title($title));
  });
?>
