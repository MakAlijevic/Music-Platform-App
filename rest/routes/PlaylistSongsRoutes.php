<?php
//CRUD operations for playlist-songs

  //get songs from playlists
  /**
  * @OA\Get(path="/playlistsongs/{id}", tags={"playlist_songs"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="id", example=1, description="Playlist id"),
  *     @OA\Response(response="200", description="Get songs fom playlist")
  * )
  */
  Flight::route('GET /playlistsongs/@id', function($id){
  Flight::json(Flight::playlistSongsDao()->get_songs_by_playlistID($id));
});

  //add songs to playlist
  /**
* @OA\Post(
*     path="/addsongs", security={{"ApiKeyAuth": {}}},
*     description="Add new song to playlist",
*     tags={"playlist_songs"},
*     @OA\RequestBody(description="Playlist_songs info", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="playlistID", type="string", example="15",	description="Playlist id"),
*    				@OA\Property(property="songID", type="int", example=3,	description="Song id"),
*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="Songs added to playlist"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('POST /playlistsongs', function(){
  Flight::json(Flight::playlistSongsService()->add_element(Flight::request()->data->getData()));
});

  //delete playlist songs
  /**
* @OA\Delete(
*     path="/playlistsongs/{id}", security={{"ApiKeyAuth": {}}},
*     description="Delete playlist songs",
*     tags={"playlist_songs"},
*     @OA\Parameter(in="path", name="id", example=8, description="Playlist ID"),
*     @OA\Response(
*         response=200,
*         description="Playlist songs deleted"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/
  Flight::route('DELETE /playlistsongs/@id', function($id){
    Flight::playlistSongsService()->delete_element($id);
    Flight::json(["message" => "deleted"]);
  });

    //update playlist songs
    /**
  * @OA\Put(
  *     path="/playlistsongs/{id}", security={{"ApiKeyAuth": {}}},
  *     description="Update playlist songs",
  *     tags={"playlist_songs"},
  *     @OA\Parameter(in="path", name="id", example=1, description="id"),
  *     @OA\RequestBody(description="Playlist info", required=true,
  *       @OA\MediaType(mediaType="application/json",
  *    			@OA\Schema(
  *    				@OA\Property(property="playlistID", type="string", example="15",	description="Playlist id"),
  *    				@OA\Property(property="songID", type="int", example=4,	description="Song id"),
  *        )
  *     )),
  *     @OA\Response(
  *         response=200,
  *         description="Playlist songs has been updated"
  *     ),
  *     @OA\Response(
  *         response=500,
  *         description="Error"
  *     )
  * )
  */
    Flight::route('PUT /playlistsongs/@id', function($id){
      $data = Flight::request()->data->getData();
      Flight::json(Flight::playlistSongsService()->update_element($id, $data));
    });


?>
