<?php
//CRUD operations for song

  //list playlists from user

  Flight::route('GET /playlists', function(){
  // who is the user who calls this method?
  $validUser = Flight::get('validUser');
  Flight::json(Flight::playlistDao()->get_playlist_by_user($validUser['id']));
});



  //add playlist

  //delete playlist

  //update playlist

?>
