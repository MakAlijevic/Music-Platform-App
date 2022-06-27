<?php

require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/SongDao.class.php';

class SongService extends BaseService{

    public function __construct(){
        parent::__construct(new SongDao());
    }

    public function get_songs_by_search($search){
        return $this->dao->get_songs_by_search($search);
    }

    public function get_song_by_title($title){
        return $this->dao->get_song_by_title($title);
    }
}    
?>