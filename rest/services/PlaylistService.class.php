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


  public function delete($validUser, $id){
   $playlist = parent::get_by_id($id);
   if ($playlist['userID'] != $validUser['id']){
     throw new Exception("Hack attempt!");
   }
   parent::delete_element($id);
 }

 public function update($validUser, $id, $data){
   $playlist = parent::get_by_id($id);
   if ($playlist['userID'] != $validUser['id']){
     throw new Exception("Hack attempt!");
   }
   return parent::update_element($id, $data);
}

public function add($validUser, $data){
  if ($data['userID'] != $validUser['id']){
    throw new Exception("Hack attempt!");
  }
  return parent::add_element($data);
}

}
?>
