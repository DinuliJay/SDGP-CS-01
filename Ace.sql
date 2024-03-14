-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2024 at 08:02 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ace`
--

-- --------------------------------------------------------

--
-- Table structure for table `ace`
--

CREATE TABLE `ace` (
  `ID` int(11) NOT NULL,
  `Job Role` text NOT NULL,
  `Question Type` text NOT NULL,
  `Questions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ace`
--

INSERT INTO `ace` (`ID`, `Job Role`, `Question Type`, `Questions`) VALUES
(1, 'Any', 'Common', 'Tell me about yourself and your experience in IT.'),
(2, 'Any', 'Common', 'What are your greatest strengths and weaknesses as an IT professional?\r\n'),
(3, 'Any', 'Common', 'How do you stay up-to-date with the latest trends in technology?'),
(4, 'Any', 'Common', 'What tools and strategies do you use to organize and prioritize your work to meet goals and expectations?\r\n'),
(5, 'Any', 'Common', 'Tell me about a time you faced a technical challenge and how you overcame it.\r\n'),
(6, 'Backend Developer\r\n', 'Not Common', 'Why are you passionate about backend development?\r\n'),
(7, 'Backend Developer\r\n', 'Not Common', 'Describe your experience working in a team environment and collaborating with other developers.\r\n'),
(8, 'Backend Developer\r\n', 'Not Common', 'Describe your experience with backend languages like Java, Python, C++.\r\n'),
(9, 'Backend Developer\r\n', 'Not Common', 'Tell me about a time you had to learn a new technology quickly and successfully.\r\n'),
(10, 'Backend Developer\r\n', 'Not Common', 'Explain the differences between SQL and NoSQL databases. When would you use one over the other?\r\n'),
(11, 'Front-end Web Development\r\n', 'Not Common', 'Why are you passionate about front-end web development?\r\n'),
(12, 'Front-end Web Development\r\n', 'Not Common', 'How do you approach testing your code?\r\n'),
(13, 'Front-end Web Development\r\n', 'Not Common', 'What tools do you use for debugging?\r\n'),
(14, 'Front-end Web Development\r\n', 'Not Common', 'Have you encountered any specific challenges with certain browsers?\r\n'),
(15, 'Front-end Web Development', 'Not Common', 'How would you optimize the performance of a web page?\r\n'),
(16, 'Software Engineering ', 'Not Common', 'What is Software Engineering?\r\n'),
(17, 'Software Engineering \r\n', 'Not Common', 'What are the characteristics of software?\r\n'),
(18, 'Software Engineering \r\n', 'Not Common', 'What is Debugging?\r\n\r\n'),
(19, 'Software Engineering \r\n', 'Not Common', 'What is the difference between stack and queue?\r\n'),
(20, 'Software Engineering \r\n', 'Not Common', 'What is a framework?\r\n'),
(21, 'Artificial Intelligence and Data science\r\n', 'Not Common', 'What is the bias-variance tradeoff in machine learning?\r\n'),
(22, 'Artificial Intelligence and Data science\r\n', 'Not Common', 'Explain the difference between supervised and unsupervised learning.\r\n\r\n'),
(23, 'Artificial Intelligence and Data science\r\n', 'Not Common', 'Which programming languages are commonly used in AI and data science? Can you explain why?\r\n'),
(24, 'Artificial Intelligence and Data science\r\n', 'Not Common', 'Explain the difference between correlation and causation.'),
(25, 'Artificial Intelligence and Data science', 'Not Common', 'How do you stay updated with the latest advancements in AI and data science?\r\n'),
(26, 'UI/UX Designer\r\n', 'Not Common', 'Can you describe the difference between user interface UI design and UX design?\r\n'),
(27, '⁠UI/UX Designer\r\n', 'Not Common', 'What are some common UX design principles?'),
(28, '⁠UI/UX Designer\r\n', 'Not Common', 'Can you explain the concept of wireframing and its purpose?\r\n'),
(29, 'UI/UX Designer\r\n', 'Not Common', 'What tools do you use for UI/UX design?\r\n'),
(30, 'UI/UX Designer\r\n', 'Not Common', 'What is responsive design, and why is it important?\r\n'),
(31, 'DevOps Engineer\r\n', 'Not Common', 'What benefits does DevOps have in business?\r\n'),
(32, 'DevOps Engineer\r\n', 'Not Common', 'What are the key components of a successful DevOps workflow?\r\n'),
(33, 'DevOps Engineer\r\n', 'Not Common', 'What are the different phases of the DevOps lifecycle?\r\n'),
(34, 'DevOps Engineer\r\n', 'Not Common', 'What are the best programming and scripting languages for DevOps engineers?\r\n'),
(35, 'DevOps Engineer\r\n', 'Not Common', 'What key metrics should you focus on for DevOps success?\r\n'),
(36, 'Quality Assurance Engineer\r\n', 'Not Common', 'What Do You Mean by Monkey Testing and Gorilla Testing?\r\n'),
(37, 'Quality Assurance Engineer\r\n', 'Not Common ', 'Distinguish Between Verification and Validation.\r\n'),
(38, 'Quality Assurance Engineer\r\n', 'Not Common ', 'Distinguish Between Retesting and Regression Testing?\r\n'),
(39, 'Quality Assurance Engineer\r\n', 'Not Common', 'What is the Difference Between Functional and Non-Functional Testing?\r\n'),
(40, 'Quality Assurance Engineer\r\n', 'Not Common', 'How Do You Decide When to Stop Testing?\r\n'),
(41, ' Data Scientist\r\n', 'Not Common ', 'What is Data Science?\r\n'),
(42, ' Data Scientist\r\n', 'Not Common ', 'Differentiate between Data Analytics and Data Science\r\n'),
(43, ' Data Scientist\r\n', 'Not Common', 'Explain the steps in making a decision tree.\r\n'),
(44, ' Data Scientist\r\n', 'Not Common', 'Differentiate between univariate, bivariate, and multivariate analysis.\r\n'),
(45, ' Data Scientist\r\n', 'Not Common', 'What are the assumptions required for a linear regression?\r\n\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ace`
--
ALTER TABLE `ace`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
