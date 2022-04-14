
CREATE TABLE `song` (
  `songID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `artist` varchar(45) DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `year` date DEFAULT NULL,
  PRIMARY KEY (`songID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `songplays` (
  `songplayID` int NOT NULL AUTO_INCREMENT,
  `userID` int DEFAULT NULL,
  `songID` int DEFAULT NULL,
  `sessionID` int DEFAULT NULL,
  PRIMARY KEY (`songplayID`),
  KEY `userID_idx` (`userID`),
  KEY `songID_idx` (`songID`),
  CONSTRAINT `songID` FOREIGN KEY (`songID`) REFERENCES `song` (`songID`),
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `created` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
