<?php

require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/SongDao.class.php';

class SongService extends BaseService{

    private $dao;

    public function __construct(){
        parent::__construct(new SongDao());
    }
}    
?>