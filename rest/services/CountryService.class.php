<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__.'/BaseService.class.php';
require_once __DIR__.'/../dao/CountryDao.class.php';

class CountryService extends BaseService{

    public function __construct(){
        parent::__construct(new CountryDao());
    }

    public function get_country_by_name($name){
        return $this->dao->get_country_by_name($name);
    }
}    
?>