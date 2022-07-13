<?php

require_once __DIR__.'/BaseDao.class.php';

class SongDao extends BaseDao{

    public function __construct(){
      parent::__construct("song");
    }

    public function get_songs_by_search($search){
      return $this->query_without_params("SELECT * FROM song WHERE title LIKE '%".$search."%'");
    }

    public function get_song_by_title($title){
      return $this->query_unique("SELECT * FROM song WHERE title = :title", ['title' => $title]);
    }
}
?>
