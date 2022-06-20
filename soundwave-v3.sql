-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: soundwave
-- ------------------------------------------------------
-- Server version	8.0.27

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
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist`
--

LOCK TABLES `playlist` WRITE;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
INSERT INTO `playlist` VALUES (1,'myPlaylist',3),(2,'FavSongs',35),(3,'Best Playlist',3),(4,'My favorite songs',3);
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
  CONSTRAINT `playlistID` FOREIGN KEY (`playlistID`) REFERENCES `playlist` (`id`),
  CONSTRAINT `songID` FOREIGN KEY (`songID`) REFERENCES `song` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_songs`
--

LOCK TABLES `playlist_songs` WRITE;
/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` VALUES (1,1,5),(2,1,7),(3,1,1),(4,2,8),(5,2,9),(6,2,10),(7,3,11),(8,3,12),(9,3,17),(10,4,20),(11,4,21),(12,4,22);
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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (1,'Charlie Puth - Light Switch','images/Charlie Puth - Light Switch','music/Charlie Puth - Light Switch','03:06'),(2,'Charlie Puth - We Dont Talk Anymore','images/Charlie Puth - We Dont Talk Anymore','music/Charlie Puth - We Dont Talk Anymore','03:50'),(3,'Coldplay X BTS - My Universe','images/Coldplay X BTS - My Universe','music/Coldplay X BTS - My Universe','03:48'),(4,'Dove Cameron - Boyfriend','images/Dove Cameron - Boyfriend','music/Dove Cameron - Boyfriend','02:33'),(5,'Dua Lipa - Levitating','images/Dua Lipa - Levitating','music/Dua Lipa - Levitating','04:27'),(6,'Dua Lipa - New Rules','images/Dua Lipa - New Rules','music/Dua Lipa - New Rules','03:44'),(7,'Ed Sheeran - Bad Habits','images/Ed Sheeran - Bad Habits','music/Ed Sheeran - Bad Habits','04:00'),(8,'Ed Sheeran - Shivers','images/Ed Sheeran - Shivers','music/Ed Sheeran - Shivers','03:57'),(9,'Elley Duhé - Middle of the Night','images/Elley Duhé - Middle of the Night','music/Elley Duhé - Middle of the Night','03:02'),(10,'Elton John, Dua Lipa - Cold Heart','images/Elton John, Dua Lipa - Cold Heart','music/Elton John, Dua Lipa - Cold Heart','04:14'),(11,'Harry Styles - As It Was','images/Harry Styles - As It Was','music/Harry Styles - As It Was','02:45'),(12,'Harry Styles - Late Night Talking','images/Harry Styles - Late Night Talking','music/Harry Styles - Late Night Talking','02:57'),(13,'Imagine Dragons - Bones','images/Imagine Dragons - Bones','music/Imagine Dragons - Bones','02:45'),(14,'Imagine Dragons x JID - Enemy','images/Imagine Dragons x JID - Enemy','music/Imagine Dragons x JID - Enemy','02:50'),(15,'Justin Bieber - Ghost','images/Justin Bieber - Ghost','music/Justin Bieber - Ghost','03:13'),(16,'Labrinth - Mount Everest','images/Labrinth - Mount Everest','music/Labrinth - Mount Everest','02:37'),(17,'Lil Nas X - THATS WHAT I WANT','images/Lil Nas X - THATS WHAT I WANT','music/Lil Nas X - THATS WHAT I WANT','02:24'),(18,'Måneskin - ZITTI E BUONI','images/Måneskin - ZITTI E BUONI','music/Måneskin - ZITTI E BUONI','03:18'),(19,'Megan Thee Stallion & Dua Lipa - Sweetest Pie','images/Megan Thee Stallion & Dua Lipa - Sweetest Pie','music/Megan Thee Stallion & Dua Lipa - Sweetest Pie','03:36'),(20,'Olivia Rodrigo - deja vu','images/Olivia Rodrigo - deja vu','music/Olivia Rodrigo - deja vu','03:51'),(21,'Olivia Rodrigo – drivers license','images/Olivia Rodrigo – drivers license','music/Olivia Rodrigo – drivers license','04:07'),(22,'Olivia Rodrigo - good 4 u','images/Olivia Rodrigo - good 4 u','music/Olivia Rodrigo - good 4 u','03:18'),(23,'Olivia Rodrigo - traitor','images/Olivia Rodrigo - traitor','music/Olivia Rodrigo - traitor','03:50'),(24,'Sean Paul - No Lie','images/Sean Paul - No Lie','music/Sean Paul - No Lie','03:48'),(25,'Shawn Mendes - It ll Be Okay','images/Shawn Mendes - It ll Be Okay','music/Shawn Mendes - It ll Be Okay','03:52'),(26,'Stromae - L enfer','images/Stromae - L enfer','music/Stromae - L enfer','03:14'),(27,'Swedish House Mafia, The Weeknd - Moth To A Flame','images/Swedish House Mafia, The Weeknd - Moth To A Flame','music/Swedish House Mafia, The Weeknd - Moth To A Flame','03:54'),(28,'The Kid LAROI - STAY','images/The Kid LAROI - STAY','music/The Kid LAROI - STAY','02:21'),(29,'The Weeknd - Die For You','images/The Weeknd - Die For You','music/The Weeknd - Die For You','04:20'),(30,'The Weeknd - Take My Breath','images/The Weeknd - Take My Breath','music/The Weeknd - Take My Breath','03:44');
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
  `photo` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mak','alijevic','vodex','root','alijevic.mak@gmail.com','2002-02-03',''),(3,'Emina','Sirki','emka123','emka','emka','2000-03-02','avatars/female3.jpg'),(4,'emkica','sirbubalo2131','elfmina3','root','sirbubalo.emkica@gmail.com','2000-11-14',''),(5,'ewrwerw','ereew','eewrwe','ewrwerew','werewrww','2022-04-13',''),(6,'','','user123','passsss','email@gmail.com','2022-05-04',''),(7,'','','user123','passsss','email@gmail.com','2022-05-04',''),(8,'','','user','pass','email@email.com','2022-05-04',''),(9,'','','dddd','ddd','emina.sirbubalo@stu.ibu.edu.ba','2022-05-06',''),(10,'','','dddd','ddd','emina.sirbubalo@stu.ibu.edu.ba','2022-05-06',''),(11,'ewrwerw','ereew','eewrwe','dddd','emina.sirbubalo@stu.ibu.edu.ba','2022-05-13',''),(12,'','ewewe','ewewe','weewe','ewewewe','2022-05-13',''),(13,'','ewewe','ewewe','weewe','ewewewe','2022-05-13',''),(14,'','dsd','dsd','sdsd','dsdsd','2022-05-07',''),(15,'ewrwerw','gffdsf','dfsdfsdf','dsfdsf','dsfdsf','2022-05-06',''),(16,'ewrwerw','gffdsf','dfsdfsdf','dsfdsf','dsfdsf','2022-05-06',''),(17,'sdsd','dsds','dsds','dsd','dsds','2022-04-29',''),(18,'f','fdfd','dfdf','fdf','fdfd','2022-05-18',''),(19,'','','dfdsf','fsdfds','d','2022-05-20',''),(20,'dffs','fdsfsdfdsf','fsdfdsf','dfsdf','dsfdsfd','2022-05-13',''),(21,'fds','fds','fsdfsd','fdsfds','fdsf','2022-05-06',''),(22,'sad','ERWEREWR','DSFDF','DSFSDF','SDFSDFS','2022-05-07',''),(23,'sad','ERWEREWR','DSFDF','DSFSDF','SDFSDFS','2022-05-07',''),(24,'FDSFSDFDSF','FDSF','DSFDSFDSFDF','SDFFSDFDSF','DFSDFSDF','2022-05-15',''),(25,'dfsfds','dfdsf','dsfds','dfsdfdsf','dfsdf','2022-05-06',''),(26,'sdfdsf','fdsfsdf','dsfdfs','dfsf','fdsfsf','2022-05-07',''),(27,'cxzc','czczxc','xzcxzc','cxzczxcc','xzczxc','2022-05-07',''),(28,'dsfds','dfsfsf','dsfdf','sdfdsf','dfsfdsf','2022-05-27',''),(29,'cvxvcx','vcxvxcv','cxvcxv','vcxvxcv','xcvxv','2022-05-21',''),(30,'dsfsdffds','sdfsd','fdsfsdf','fsdfdsf','fsdfsdf','2022-05-07',''),(31,'emkaa','emkaa','emkaa','emkaa','emkaa','2022-05-11','avatars/female3.jpg'),(32,'emkaa','emkaa','emkaa123','emkaa','emkaa','2022-05-11',''),(33,'fdsf','dsfsdf','asd','asd','dfsdf','2022-05-12',NULL),(34,'sdfds','sdfsdf','dfsf','sdfsf','dsfsdf','2022-05-15',NULL),(35,'pewds','pewds','pewds','pewds','pewds','2022-05-05','avatars/female3.jpg'),(36,'newUser','newUser','newUser','newuser','newuser@gmail.com','2022-05-05',''),(37,'fsdfds','dfsdf','dsfsdf','dsfdsf','dfsfds','2022-04-27',''),(38,'pupo','pupo','pupo','pupo','pupo','2022-04-28','avatars/male2.jpg'),(39,'example','exp','example','example','exp','2022-05-04','avatars/female2.jpg'),(40,'a','a','a','a','a','2022-05-13','avatars/female2.jpg');
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

-- Dump completed on 2022-06-20 12:18:22
