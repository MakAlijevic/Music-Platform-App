<?php
//CRUD operations for song

  //list playlists from user
  /**
  * @OA\Get(path="/playlists", tags={"playlist"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Response(response="200", description="Get playlists from current user")
  * )
  */
  Flight::route('GET /playlists', function(){
  // who is the user who calls this method?
  $validUser = Flight::get('validUser');
  Flight::json(Flight::playlistDao()->get_playlist_by_user($validUser['id']));
});

//CRUD operations for playlist

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
    Flight::json(Flight::playlistService()->add_element(Flight::request()->data->getData()));
});

  //update playlist

?>
