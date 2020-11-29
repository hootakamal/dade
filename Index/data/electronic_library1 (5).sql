-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 27 نوفمبر 2020 الساعة 23:56
-- إصدار الخادم: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electronic library1`
--

-- --------------------------------------------------------

--
-- بنية الجدول `electronic library1`
--

DROP TABLE IF EXISTS `electronic library1`;
CREATE TABLE IF NOT EXISTS `electronic library1` (
  `Id` int(1) DEFAULT NULL,
  `user_Id` int(10) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_passwired` varchar(50) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `reg_time` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- إرجاع أو استيراد بيانات الجدول `electronic library1`
--

INSERT INTO `electronic library1` (`Id`, `user_Id`, `user_name`, `user_passwired`, `user_email`, `reg_time`) VALUES
(1, 10, 'kingy', 'hoota', 'm555999222@gmail.com', '2020-11-27 09:59:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
