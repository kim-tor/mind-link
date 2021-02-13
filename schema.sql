DROP DATABASE IF EXISTS mind_link;
CREATE DATABASE mind_link;
USE mind_link;

CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(61) NOT NULL
);

CREATE TABLE posts(
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(250) NOT NULL,
 username VARCHAR(100) NOT NULL,
 thoughts TEXT NOT NULL,
);

CREATE TABLE articles(
    title VARCHAR(100) NOT NULL,
    authors VARCHAR(100) NOT NULL,
    link varchar(max) NOT NULL,
    description VARCHAR (250) NOT NULL
);