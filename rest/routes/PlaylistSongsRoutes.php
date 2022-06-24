<?php
//CRUD operations for song

  //list songs from playlists
  /**
  * @OA\Get(path="/playlistsongs/{id}", tags={"playlist_songs"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="id", example=1, description="Playlist id"),
  *     @OA\Response(response="200", description="Get songs fom playlist")
  * )
  */
  Flight::route('GET /playlistsongs/@id', function($id){
  Flight::json(Flight::playlistSongsDao()->get_songs_by_playlistID($id));
});

//CRUD operations for playlist-songs
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
  Flight::route('POST /addsongs', function(){
  Flight::json(Flight::playlistSongsService()->add_element(Flight::request()->data->getData()));
});



  //update playlist

?>
