<?php

require_once __DIR__.'/BaseDao.class.php';

class SongDao extends BaseDao{

    public function __construct(){
      parent::__construct("song");
    }

    public function get_songs_by_search($search){
      return $this->search_elements_by_query($search);
    }
}
?>