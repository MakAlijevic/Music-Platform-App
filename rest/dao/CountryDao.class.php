<?php

require_once __DIR__.'/BaseDao.class.php';

class CountryDao extends BaseDao{

    public function __construct(){
      parent::__construct("country");
    }

    public function get_country_by_name($name){
        return $this->query_unique("SELECT * FROM country WHERE name = :name", ['name' => $name]);
    }
}
?>