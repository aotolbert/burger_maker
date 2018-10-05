CREATE DATABASE burger_db;;
USE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    isEaten BOOLEAN,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
