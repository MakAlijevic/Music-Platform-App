<?php

//CRUD operations for playlist

  //get playlists from user
  /**
  * @OA\Get(path="/playlists", tags={"playlist"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Response(response="200", description="Get playlists from current user")
  * )
  */
  Flight::route('GET /playlists', function(){
  $validUser = Flight::get('validUser');
  Flight::json(Flight::playlistService()->get_playlist_by_user($validUser['id']));
});

  //add playlist
  /**
* @OA\Post(
*     path="/playlists", security={{"ApiKeyAuth": {}}},
*     description="Add new playlist",
*     tags={"playlist"},
*     @OA\RequestBody(description="Playlist info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="my new playlist",	description="Playlist name"),
*    				@OA\Property(property="userID", type="int", example=3,	description="User id"),
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="Playlist added"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('POST /playlists', function(){
    Flight::json(Flight::playlistService()->add(Flight::get('validUser'),Flight::request()->data->getData()));
});

  //delete playlist
  /**
* @OA\Delete(
*     path="/playlists/{id}", security={{"ApiKeyAuth": {}}},
*     description="Delete playlist",
*     tags={"playlist"},
*     @OA\Parameter(in="path", name="id", example=8, description="Playlist ID"),
*     @OA\Response(
*         response=200,
*         description="Playlist deleted"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('DELETE /playlists/@id', function($id){
    Flight::playlistService()->delete(Flight::get('validUser'),$id);
    Flight::json(["message" => "deleted"]);
  });

  //update playlist
  /**
* @OA\Put(
*     path="/playlists/{id}", security={{"ApiKeyAuth": {}}},
*     description="Update playlist",
*     tags={"playlist"},
*     @OA\Parameter(in="path", name="id", example=1, description="Playlist ID"),
*     @OA\RequestBody(description="Playlist info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="name", type="string", example="my old playlist",	description="Playlist name"),
*    				@OA\Property(property="userID", type="int", example=3,	description="User id"),
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
  Flight::route('PUT /playlists/@id', function($id){
    $data = Flight::request()->data->getData();
    Flight::json(Flight::playlistService()->update(Flight::get('validUser'),$id, $data));
  });


?>
