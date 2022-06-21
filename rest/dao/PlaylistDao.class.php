<?php

require_once __DIR__.'/BaseDao.class.php';

class PlaylistDao extends BaseDao{

    public function __construct(){
      parent::__construct("playlist");
    }

    public function get_playlist_by_user($userID){
      return $this->query("SELECT * FROM playlist WHERE userID = :userID", ['userID' => $userID]);
    }

}
?>
