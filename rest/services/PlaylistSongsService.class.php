<?php

require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/PlaylistSongsDao.class.php';

class PlaylistSongsService extends BaseService{

    private $dao;

    public function __construct(){
        parent::__construct(new PlaylistSongsDao());
    }

    public function get_songs_by_playlistID($playlistID){
    return $this->dao->get_songs_by_playlistID($playlistID);
  }
}
?>
