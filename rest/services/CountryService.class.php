<?php

require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/CountryDao.class.php';

class CountryService extends BaseService{

    private $dao;

    public function __construct(){
        parent::__construct(new CountryDao());
    }
}    
?>