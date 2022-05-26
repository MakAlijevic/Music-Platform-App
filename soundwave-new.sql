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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mak','alijevic','vodex','root','alijevic.mak@gmail.com','2002-02-03'),(2,'emina','sirbubalo','elfmina','root','sirbubalo.emina@gmail.com','2000-11-14'),(3,'emkica','sirbubalo2131122','elfmina3','root','sirbubalo.emkica@gmail.com','2000-11-14'),(4,'Enadin','Ombasic','nino123','nino123','nino@gmail.com','1978-02-26'),(5,'kmk','oijoi','kjbgiug8','oiu98z87tz','jbjhvbuz','0007-09-08'),(6,'kmk','oijoi','kjbgiug8','oiu98z87tz','jbjhvbuz','0007-09-08'),(7,'emkica123','sirbubalo222','elfmina3','root','sirbubalo.emkica@gmail.com','2000-11-14'),(8,'asd','asd','asd','asd','asd','2022-05-23'),(9,'saa','asd','asd','asd','asd','2022-05-22'),(10,'asdasds','sadsad','sadasdasd','sadasdsadasd','sadsadas','2022-05-09'),(11,'sadasd','sadasd','dsasad','sadasdsa','sadasd','2022-05-17'),(12,'sadasd','asdasd','asdasd','asdsad','sadasd','2022-05-06'),(13,'sadasd','asdasd','asdasd','asdsad','sadasd','2022-05-06'),(14,'sad','asd','sadsadas','asdsadsad','sadasdsa','2022-05-18'),(15,'dasdsad','sadasd','asdasdas','asdaaaaa','aaaaa','2022-06-11'),(16,'fsafsfs','safasfsa','asfsfasf','safsafsf','safsafasf','2022-05-05'),(17,'aaa','aa','aa','aa','aa','2022-05-12'),(18,'aaaaa','aaaaaaa','aaa','aaa','aaaaaa','2022-05-12'),(19,'aaa','a','a','a','a','2022-05-26'),(20,'a','a','a','a','a','2022-05-20'),(21,'a','a','a','a','a','2022-05-20'),(22,'a','a','a','a','a','2022-05-13'),(23,'a','a','a','a','a','2022-05-14'),(24,'a','a','a','a','a','2022-05-14'),(25,'a','a','a','a','a','2022-05-14'),(26,'a','a','abcd','a','a','2022-05-05'),(27,'sf','as','sfgh','sfgh','asd','2022-05-26'),(28,'a','a','aasdgfg','a','a','2022-05-05'),(29,'mak','alijevic','Vodex','vodex','alijevic.mak@gmail.com','2022-05-11'),(30,'mia','Civic','vodexć','zzzzz','kcfhjseohgfoishdgf','2022-05-27'),(31,'a','a','afndsnfiosdng','a','a','2022-05-11'),(32,'a','a','$skoca$','asd','a','2022-05-10');
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

-- Dump completed on 2022-05-26 17:44:28
