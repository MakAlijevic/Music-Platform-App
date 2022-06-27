<?php

require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/PlaylistDao.class.php';

class PlaylistService extends BaseService{

    public function __construct(){
        parent::__construct(new PlaylistDao());
    }

    public function get_playlist_by_user($userID){
    return $this->dao->get_playlist_by_user($userID);
  }
}
?>
