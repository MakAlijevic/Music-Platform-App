<?php
//CRUD operations for song

  //list songs from playlists

  Flight::route('GET /playlistsongs/@id', function($id){

  Flight::json(Flight::playlistSongsDao()->get_songs_by_playlistID($id));

});

  //add songs to playlist

  Flight::route('POST /addsongs', function(){

  Flight::json(Flight::playlistSongsDao()->add_element(Flight::request()->data->getData()));

});



  //update playlist

?>
