<?php
//CRUD operations for song

  //list songs from playlists

  Flight::route('GET /playlistsongs/@id', function($id){

  Flight::json(Flight::playlistSongsDao()->get_songs_by_playlistID($id));

});

  //add playlist

  //delete playlist

  //update playlist

?>
