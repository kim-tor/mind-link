DROP DATABASE IF EXISTS sequelize_mind_link;
CREATE DATABASE sequelize_mind_link;
USE sequelize_mind_link;

CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(61) NOT NULL
);

CREATE TABLE posts(
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(250) NOT NULL,
 thoughts TEXT NOT NULL,
 userId INT NOT NULL
);