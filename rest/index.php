<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

require_once __DIR__.'/../vendor/autoload.php';
require_once __DIR__.'/services/UserService.class.php';
require_once __DIR__.'/dao/UserDao.class.php';
require_once __DIR__.'/services/SongService.class.php';
require_once __DIR__.'/dao/SongDao.class.php';
require_once __DIR__.'/services/PlaylistService.class.php';
require_once __DIR__.'/dao/SongDao.class.php';
require_once __DIR__.'/services/PlaylistSongsService.class.php';
require_once __DIR__.'/dao/PlaylistSongsDao.class.php';
require_once __DIR__.'/services/CountryService.class.php';
require_once __DIR__.'/dao/CountryDao.class.php';


Flight::register('userDao','UserDao');
Flight::register('userService', 'UserService');
Flight::register('songDao','SongDao');
Flight::register('songService', 'SongService');
Flight::register('playlistDao','PlaylistDao');
Flight::register('playlistService', 'PlaylistService');
Flight::register('playlistSongsDao','PlaylistSongsDao');
Flight::register('playlistSongsService', 'PlaylistSongsService');
Flight::register('countryDao','CountryDao');
Flight::register('countryService', 'CountryService');



//middleware login method
Flight::route('/*', function(){
    $path = Flight::request()->url;
    if($path == '/login' || $path == '/register' || $path == '/country' || $path == '/docs.json'){
        return TRUE;
    }
    $headers = getallheaders();
    if(@!$headers['Authorization']){
        Flight::json(["message" => "Unauthorized access"], 403);
        return FALSE;
    }else{
        try {
            $decoded = (array)JWT::decode($headers['Authorization'], new Key(Config::JWT_SECRET(), 'HS256'));
            Flight::set('validUser', $decoded);
            return TRUE;
        } catch (\Exception $e) {
            Flight::json(["message" => "Token authorization invalid"], 403);
            return FALSE;
        }
    }
});

/*swagger*/
Flight::route('GET /docs.json', function(){
  $openapi = \OpenApi\scan('routes');
  header('Content-Type: application/json');
  echo $openapi->toJson();
});

require_once __DIR__.'/routes/UserRoutes.php';
require_once __DIR__.'/routes/SongRoutes.php';
require_once __DIR__.'/routes/PlaylistRoutes.php';
require_once __DIR__.'/routes/PlaylistSongsRoutes.php';
require_once __DIR__.'/routes/CountryRoutes.php';

Flight::start();
?>
