-- Active: 1686015083600@@127.0.0.1@3306@bd_sicp
CREATE DATABASE Prueba01;

USE Prueba01;

CREATE TABLE tbb_personas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50),
    age INT
);

SELECT * FROM tbb_personas;