-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: soundwave
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Albania'),(2,'Andorra'),(3,'Armenia'),(4,'Australia'),(5,'Austria'),(6,'Belarus'),(7,'Belgium'),(8,'Bosnia and Herzegovina'),(9,'Bulgaria'),(10,'Canada'),(11,'China'),(12,'Croatia'),(13,'Cyprus'),(14,'Czech Republic'),(15,'Denmark'),(16,'Estonia'),(17,'Finland'),(18,'France'),(19,'Georgia'),(20,'Germany'),(21,'Greece'),(22,'Hungary'),(23,'Iceland'),(24,'India'),(25,'Indonesia'),(26,'Ireland'),(27,'Italy'),(28,'Japan'),(29,'Latvia'),(30,'Liechtenstein'),(31,'Lithuania'),(32,'Luxembourg'),(33,'Malaysia'),(34,'Malta'),(35,'Mexico'),(36,'Moldova'),(37,'Monaco'),(38,'Montenegro'),(39,'Netherlands'),(40,'New Zealand'),(41,'North Macedonia'),(42,'Norway'),(43,'Poland'),(44,'Portugal'),(45,'Qatar'),(46,'Romania'),(47,'San Marino'),(48,'Saudi Arabia'),(49,'Serbia'),(50,'Singapore'),(51,'Slovakia'),(52,'Slovenia'),(53,'South Africa'),(54,'South Korea'),(55,'Spain'),(56,'Sweden'),(57,'Switzerland'),(58,'Thailand'),(59,'Turkey'),(60,'Ukraine'),(61,'United Arab Emirates'),(62,'United Kingdom'),(63,'United States of America');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `userID` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userID_idx` (`userID`),
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist`
--

LOCK TABLES `playlist` WRITE;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
INSERT INTO `playlist` VALUES (1,'myPlaylist',3),(2,'FavSongs',35),(3,'Best Playlist',3),(4,'My favorite songs',3),(5,'Harry Styles',47),(6,'ColdPlay',47),(12,'emk',53),(13,'saba',54),(16,'Favorites',1),(17,'asd',1);
/*!40000 ALTER TABLE `playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist_songs`
--

DROP TABLE IF EXISTS `playlist_songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playlistID` int DEFAULT NULL,
  `songID` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `playlistID_idx` (`playlistID`),
  KEY `songID_idx` (`songID`),
  CONSTRAINT `playlistID` FOREIGN KEY (`playlistID`) REFERENCES `playlist` (`id`) ON DELETE CASCADE,
  CONSTRAINT `songID` FOREIGN KEY (`songID`) REFERENCES `song` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_songs`
--

LOCK TABLES `playlist_songs` WRITE;
/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` VALUES (1,1,5),(2,1,7),(3,1,1),(4,2,8),(5,2,9),(6,2,10),(7,3,11),(8,3,12),(9,3,17),(10,4,20),(11,4,21),(12,4,22),(13,5,11),(14,5,12),(15,6,3),(25,12,10),(26,12,12),(27,12,13),(28,12,14),(29,13,5),(31,12,1),(35,16,1),(36,16,1),(37,17,11),(38,17,12),(39,17,10),(40,17,3),(41,17,8),(42,12,39);
/*!40000 ALTER TABLE `playlist_songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `song` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cover` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `duration` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (1,'Charlie Puth - Light Switch','images/Charlie Puth - Light Switch','music/Charlie Puth - Light Switch','03:06'),(2,'Charlie Puth - We Dont Talk Anymore','images/Charlie Puth - We Dont Talk Anymore','music/Charlie Puth - We Dont Talk Anymore','03:50'),(3,'Coldplay X BTS - My Universe','images/Coldplay X BTS - My Universe','music/Coldplay X BTS - My Universe','03:48'),(4,'Dove Cameron - Boyfriend','images/Dove Cameron - Boyfriend','music/Dove Cameron - Boyfriend','02:33'),(5,'Dua Lipa - Levitating','images/Dua Lipa - Levitating','music/Dua Lipa - Levitating','04:27'),(6,'Dua Lipa - New Rules','images/Dua Lipa - New Rules','music/Dua Lipa - New Rules','03:44'),(7,'Ed Sheeran - Bad Habits','images/Ed Sheeran - Bad Habits','music/Ed Sheeran - Bad Habits','04:00'),(8,'Ed Sheeran - Shivers','images/Ed Sheeran - Shivers','music/Ed Sheeran - Shivers','03:57'),(9,'Elley Duhé - Middle of the Night','images/Elley Duhé - Middle of the Night','music/Elley Duhé - Middle of the Night','03:02'),(10,'Elton John, Dua Lipa - Cold Heart','images/Elton John, Dua Lipa - Cold Heart','music/Elton John, Dua Lipa - Cold Heart','04:14'),(11,'Harry Styles - As It Was','images/Harry Styles - As It Was','music/Harry Styles - As It Was','02:45'),(12,'Harry Styles - Late Night Talking','images/Harry Styles - Late Night Talking','music/Harry Styles - Late Night Talking','02:57'),(13,'Imagine Dragons - Bones','images/Imagine Dragons - Bones','music/Imagine Dragons - Bones','02:45'),(14,'Imagine Dragons x JID - Enemy','images/Imagine Dragons x JID - Enemy','music/Imagine Dragons x JID - Enemy','02:50'),(15,'Justin Bieber - Ghost','images/Justin Bieber - Ghost','music/Justin Bieber - Ghost','03:13'),(16,'Labrinth - Mount Everest','images/Labrinth - Mount Everest','music/Labrinth - Mount Everest','02:37'),(17,'Lil Nas X - THATS WHAT I WANT','images/Lil Nas X - THATS WHAT I WANT','music/Lil Nas X - THATS WHAT I WANT','02:24'),(18,'Måneskin - ZITTI E BUONI','images/Måneskin - ZITTI E BUONI','music/Måneskin - ZITTI E BUONI','03:18'),(19,'Megan Thee Stallion & Dua Lipa - Sweetest Pie','images/Megan Thee Stallion & Dua Lipa - Sweetest Pie','music/Megan Thee Stallion & Dua Lipa - Sweetest Pie','03:36'),(20,'Olivia Rodrigo - deja vu','images/Olivia Rodrigo - deja vu','music/Olivia Rodrigo - deja vu','03:51'),(21,'Olivia Rodrigo – drivers license','images/Olivia Rodrigo – drivers license','music/Olivia Rodrigo – drivers license','04:07'),(22,'Olivia Rodrigo - good 4 u','images/Olivia Rodrigo - good 4 u','music/Olivia Rodrigo - good 4 u','03:18'),(23,'Olivia Rodrigo - traitor','images/Olivia Rodrigo - traitor','music/Olivia Rodrigo - traitor','03:50'),(24,'Sean Paul - No Lie','images/Sean Paul - No Lie','music/Sean Paul - No Lie','03:48'),(25,'Shawn Mendes - It ll Be Okay','images/Shawn Mendes - It ll Be Okay','music/Shawn Mendes - It ll Be Okay','03:52'),(26,'Stromae - L enfer','images/Stromae - L enfer','music/Stromae - L enfer','03:14'),(27,'Swedish House Mafia, The Weeknd - Moth To A Flame','images/Swedish House Mafia, The Weeknd - Moth To A Flame','music/Swedish House Mafia, The Weeknd - Moth To A Flame','03:54'),(28,'The Kid LAROI - STAY','images/The Kid LAROI - STAY','music/The Kid LAROI - STAY','02:21'),(29,'The Weeknd - Die For You','images/The Weeknd - Die For You','music/The Weeknd - Die For You','04:20'),(30,'The Weeknd - Take My Breath','images/The Weeknd - Take My Breath','music/The Weeknd - Take My Breath','03:44'),(31,'Adele - Easy On Me','images/Adele - Easy On Me','music/Adele - Easy On Me','03:51'),(32,'Doja Cat - Woman','images/Doja Cat - Woman','music/Doja Cat - Woman','02:56'),(33,'Glass Animals - Heat Waves','images/Glass Animals - Heat Waves','music/Glass Animals - Heat Waves','04:05'),(34,'2Pac - All Eyez On Me','images/2Pac - All Eyez On Me','music/2Pac - All Eyez On Me','05:15'),(35,'50 Cent - In Da Club','images/50 Cent - In Da Club','music/50 Cent - In Da Club','03:22'),(36,'Eminem - Lose Yourself','images/Eminem - Lose Yourself','music/Eminem - Lose Yourself','05:28'),(37,'The Notorious B.I.G. - Hypnotize','images/The Notorious B.I.G. - Hypnotize','music/The Notorious B.I.G. - Hypnotize','03:55'),(38,'2Pac - Changes','images/2Pac - Changes','music/2Pac - Changes','04:35'),(39,'Eminem - Mockingbird','images/Eminem - Mockingbird','music/Eminem - Mockingbird','04:17'),(40,'2Pac - Hit Em Up','images/2Pac - Hit Em Up','music/2Pac - Hit Em Up','05:31'),(41,'Coolio - Gangstas Paradise','images/Coolio - Gangstas Paradise','music/Coolio - Gangstas Paradise','04:06');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `surname` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `username` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `dateOfBirth` date NOT NULL,
  `photo` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `countryID` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `countryID_idx` (`countryID`),
  CONSTRAINT `countryID` FOREIGN KEY (`countryID`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mak','alijevic','vodex','root','alijevic.mak@gmail.com','2002-02-03','avatars/male1.jpg',12),(3,'Emina','Sirki','emka123','emka','emka','2000-03-02','avatars/female3.jpg',NULL),(4,'emkica','sirbubalo2131','elfmina3','root','sirbubalo.emkica@gmail.com','2000-11-14','',NULL),(5,'ewrwerw','ereew','eewrwe','ewrwerew','werewrww','2022-04-13','',NULL),(6,'','','user123','passsss','email@gmail.com','2022-05-04','',NULL),(7,'','','user123','passsss','email@gmail.com','2022-05-04','',NULL),(8,'','','user','pass','email@email.com','2022-05-04','',NULL),(9,'','','dddd','ddd','emina.sirbubalo@stu.ibu.edu.ba','2022-05-06','',NULL),(10,'','','dddd','ddd','emina.sirbubalo@stu.ibu.edu.ba','2022-05-06','',NULL),(11,'ewrwerw','ereew','eewrwe','dddd','emina.sirbubalo@stu.ibu.edu.ba','2022-05-13','',NULL),(12,'','ewewe','ewewe','weewe','ewewewe','2022-05-13','',NULL),(13,'','ewewe','ewewe','weewe','ewewewe','2022-05-13','',NULL),(14,'','dsd','dsd','sdsd','dsdsd','2022-05-07','',NULL),(15,'ewrwerw','gffdsf','dfsdfsdf','dsfdsf','dsfdsf','2022-05-06','',NULL),(16,'ewrwerw','gffdsf','dfsdfsdf','dsfdsf','dsfdsf','2022-05-06','',NULL),(17,'sdsd','dsds','dsds','dsd','dsds','2022-04-29','',NULL),(18,'f','fdfd','dfdf','fdf','fdfd','2022-05-18','',NULL),(19,'','','dfdsf','fsdfds','d','2022-05-20','',NULL),(20,'dffs','fdsfsdfdsf','fsdfdsf','dfsdf','dsfdsfd','2022-05-13','',NULL),(21,'fds','fds','fsdfsd','fdsfds','fdsf','2022-05-06','',NULL),(22,'sad','ERWEREWR','DSFDF','DSFSDF','SDFSDFS','2022-05-07','',NULL),(23,'sad','ERWEREWR','DSFDF','DSFSDF','SDFSDFS','2022-05-07','',NULL),(24,'FDSFSDFDSF','FDSF','DSFDSFDSFDF','SDFFSDFDSF','DFSDFSDF','2022-05-15','',NULL),(25,'dfsfds','dfdsf','dsfds','dfsdfdsf','dfsdf','2022-05-06','',NULL),(26,'sdfdsf','fdsfsdf','dsfdfs','dfsf','fdsfsf','2022-05-07','',NULL),(27,'cxzc','czczxc','xzcxzc','cxzczxcc','xzczxc','2022-05-07','',NULL),(28,'dsfds','dfsfsf','dsfdf','sdfdsf','dfsfdsf','2022-05-27','',NULL),(29,'cvxvcx','vcxvxcv','cxvcxv','vcxvxcv','xcvxv','2022-05-21','',NULL),(30,'dsfsdffds','sdfsd','fdsfsdf','fsdfdsf','fsdfsdf','2022-05-07','',NULL),(31,'emkaa','emkaa','emkaa','emkaa','emkaa','2022-05-11','avatars/female3.jpg',NULL),(32,'emkaa','emkaa','emkaa123','emkaa','emkaa','2022-05-11','',NULL),(33,'fdsf','dsfsdf','asd','asd','dfsdf','2022-05-12',NULL,NULL),(34,'sdfds','sdfsdf','dfsf','sdfsf','dsfsdf','2022-05-15',NULL,NULL),(35,'pewds','pewds','pewds','pewds','pewds','2022-05-05','avatars/female3.jpg',NULL),(36,'newUser','newUser','newUser','newuser','newuser@gmail.com','2022-05-05','',NULL),(37,'fsdfds','dfsdf','dsfsdf','dsfdsf','dfsfds','2022-04-27','',NULL),(38,'pupo','pupo','pupo','pupo','pupo','2022-04-28','avatars/male2.jpg',NULL),(39,'example','exp','example','example','exp','2022-05-04','avatars/female2.jpg',NULL),(41,'g','g','g','g','g','2022-06-02','avatars/male3.jpg',NULL),(42,'g','g','ga','g','g','2022-06-09','avatars/male1.jpg',NULL),(43,'dgf','ds','sdfg','dsfg','dfg','2022-06-04','avatars/male1.jpg',NULL),(44,'u','u','u','u','u','2022-06-14','avatars/male1.jpg',9),(45,'r','r','r','r','r','2022-06-09','avatars/male1.jpg',5),(46,'w','w','w','w','w','2022-06-11','avatars/male1.jpg',7),(47,'mak','mak','mak','mak','mak','2022-06-03','avatars/male1.jpg',8),(48,'q','q','q','q','q','2022-06-19','avatars/male1.jpg',16),(49,'emk','emk','emk','emk','emk','2022-06-02','avatars/female3.jpg',8),(51,'a','g','apple.ghost8@gmail.com','MiaMia','w','2022-06-29','',1),(53,'u','ur','uu','u','u','2022-06-28','avatars/male2.jpg',8),(54,'ejub','ejub','ejub','ejub','ejub','2022-06-15','avatars/male3.jpg',8),(56,'rt','rt','rt','rt','rt','2022-06-15','avatars/male1.jpg',8),(57,'er','er','er','er','er','2022-06-14','',8),(58,'j','j','j','j','j','2022-06-17','avatars/male1.jpg',5);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-12 13:51:25
