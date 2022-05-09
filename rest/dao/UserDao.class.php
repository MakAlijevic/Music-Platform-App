<?php

require_once __DIR__.'/BaseDao.class.php';

class UserDao extends BaseDao{

    public function __construct(){
      paretn::__construct("user");
    }
}
?>