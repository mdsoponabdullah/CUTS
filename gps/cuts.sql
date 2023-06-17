-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2023 at 12:57 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cuts`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(255) NOT NULL,
  `dept_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`) VALUES
(1, 'IER'),
(2, 'IR'),
(3, 'Finance'),
(4, 'Accounting'),
(5, 'Management'),
(6, 'Marketing'),
(7, 'HR'),
(8, 'Banking'),
(9, 'Math'),
(10, 'CSE'),
(11, 'EEE'),
(13, 'Physics'),
(14, 'Chemistry'),
(15, 'Applied Chemistry'),
(16, 'Arabic'),
(17, 'Poly'),
(18, 'Bangla'),
(19, 'English'),
(20, 'History'),
(21, 'Fisheries'),
(22, 'Oceanology');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `Driver_id` int(255) NOT NULL,
  `Driver_name` varchar(255) NOT NULL,
  `phone` int(255) NOT NULL,
  `Transport_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`Driver_id`, `Driver_name`, `phone`, `Transport_id`) VALUES
(1, 'Mokbul', 3452585, 3),
(2, 'Korim', 4294042, 4),
(3, 'Rohim', 40293740, 5),
(4, 'Shofi', 2374230, 6),
(5, 'Golam', 495932, 7),
(6, 'Rosul', 74075934, 10),
(7, 'Nurul', 852057, 11),
(8, 'Saikat', 575482, 12),
(9, 'Rafiq', 453320, 13);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `details` text NOT NULL,
  `who` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `point`
--

CREATE TABLE `point` (
  `point_id` int(255) NOT NULL,
  `point_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `point`
--

INSERT INTO `point` (`point_id`, `point_name`) VALUES
(1, 'City College Mor'),
(2, 'CU Station'),
(3, 'Wapda Gate'),
(4, 'Rahattar Pul'),
(5, 'Sholosohor Station'),
(6, 'Sagarika Mor'),
(7, 'Newmarket Station'),
(8, 'Nandan Kanon'),
(9, 'CU Campus'),
(10, 'Shuloshohor');

-- --------------------------------------------------------

--
-- Table structure for table `proctorial_body`
--

CREATE TABLE `proctorial_body` (
  `Proctor_id` int(255) NOT NULL,
  `proctor_name` varchar(255) NOT NULL,
  `teacher_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sbuses`
--

CREATE TABLE `sbuses` (
  `id` int(11) NOT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lon` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sbuses`
--

INSERT INTO `sbuses` (`id`, `lat`, `lon`, `email`, `password`, `name`, `details`) VALUES
(1, '22.3660218', '91.8300758', 'bus1@gmail.com', '123', 'Staff Bus 1', 'sample'),
(2, NULL, NULL, 'bus2@gmail.com', '123', 'Staff Bus 2', 'sample'),
(3, '22.3660218', '91.8300758', 'bus3@gmail.com', '123', 'Staff Bus 3', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `shedule_no` int(255) NOT NULL,
  `point_id` int(255) NOT NULL,
  `Transport_id` int(255) NOT NULL,
  `time` time NOT NULL,
  `no_of_passengers` int(255) NOT NULL,
  `destination_id` int(255) NOT NULL,
  `day` varchar(255) NOT NULL DEFAULT 'Regular'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`shedule_no`, `point_id`, `Transport_id`, `time`, `no_of_passengers`, `destination_id`, `day`) VALUES
(1, 2, 1, '08:45:00', 0, 5, 'Regular'),
(2, 2, 1, '09:20:00', 0, 5, 'Regular'),
(3, 7, 1, '07:30:00', 0, 9, 'Regular'),
(4, 7, 1, '07:50:00', 0, 9, 'Regular'),
(5, 7, 1, '08:00:00', 0, 9, 'Regular'),
(6, 7, 1, '14:50:00', 0, 9, 'Regular'),
(7, 7, 1, '15:50:00', 0, 9, 'Regular'),
(8, 7, 1, '20:30:00', 0, 9, 'Regular'),
(9, 5, 1, '09:45:00', 0, 9, 'Regular'),
(10, 2, 1, '13:30:00', 0, 9, 'Regular'),
(11, 5, 1, '10:30:00', 0, 9, 'Regular'),
(12, 2, 1, '14:30:00', 0, 9, 'Regular'),
(13, 2, 1, '16:00:00', 0, 9, 'Regular'),
(14, 2, 1, '17:30:00', 0, 9, 'Regular'),
(15, 2, 1, '21:30:00', 0, 9, 'Regular'),
(16, 1, 3, '07:30:00', 0, 9, 'Regular'),
(17, 3, 10, '07:20:00', 0, 9, 'Regular'),
(18, 4, 11, '08:20:00', 0, 9, 'Regular'),
(19, 6, 12, '08:00:00', 0, 9, 'Regular'),
(20, 8, 13, '09:00:00', 0, 9, 'Regular'),
(21, 9, 3, '13:15:00', 0, 9, 'Regular'),
(22, 9, 10, '14:30:00', 0, 9, 'Regular'),
(23, 9, 11, '15:30:00', 0, 9, 'Regular'),
(24, 9, 12, '15:30:00', 0, 9, 'Regular'),
(25, 9, 13, '14:30:00', 0, 9, 'Regular'),
(26, 1, 4, '07:50:00', 0, 9, 'Regular'),
(27, 8, 5, '07:50:00', 0, 9, 'Regular'),
(28, 4, 6, '08:00:00', 0, 9, 'Regular'),
(29, 6, 7, '08:00:00', 0, 9, 'Regular'),
(30, 9, 4, '16:00:00', 0, 9, 'Regular'),
(31, 9, 5, '16:00:00', 0, 9, 'Regular'),
(32, 9, 6, '16:00:00', 0, 9, 'Regular'),
(33, 9, 7, '16:00:00', 0, 9, 'Regular'),
(36, 2, 1, '21:30:00', 0, 7, 'Regular'),
(104, 2, 1, '09:00:00', 0, 7, 'OffDay'),
(105, 2, 1, '16:00:00', 0, 7, 'OffDay'),
(106, 2, 1, '21:30:00', 0, 7, 'OffDay'),
(107, 7, 1, '20:30:00', 0, 9, 'OffDay'),
(108, 7, 1, '07:50:00', 0, 2, 'OffDay'),
(109, 7, 1, '14:50:00', 0, 2, 'OffDay');

-- --------------------------------------------------------

--
-- Table structure for table `shuttles`
--

CREATE TABLE `shuttles` (
  `id` int(11) NOT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lon` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shuttles`
--

INSERT INTO `shuttles` (`id`, `lat`, `lon`, `email`, `password`, `name`, `details`) VALUES
(1, '0', '0', 'shuttle1@gmail.com', '123', 'Shuttle 1', ''),
(2, '0', '0', 'shuttle2@gmail.com', '123', 'Shuttle 2', 'test details');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(255) NOT NULL,
  `staff_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `staff_name`, `email`, `phone`, `password`, `image`) VALUES
(1, 'Monjurul Alam', 'monjur@gmail.com', '54983729', '523532', NULL),
(2, 'Rafiqul Alam', 'roofik@gmail.com', '526456329', '556532', NULL),
(3, 'Torikullah', 'torikullah@gmail.com', '245259', '783532', NULL),
(4, 'Ramajan Mia', 'ramajan@gmail.com', '53458729', '528932', NULL),
(5, 'tota Mia', 'totamia@gmail.com', '65767829', '993532', NULL),
(6, 'korim ullah', 'mdshopon1862@gmail.com', '01738676314', '45', NULL),
(7, 'Shah Alam', 'salam@gmail.com', '9975329', '893532', NULL),
(8, 'Alamgir Molla', 'alamgir@gmail.com', '5636568789', '573732', NULL),
(9, 'Suruj Molla', 'surujr@gmail.com', '563456899', '5987325', NULL),
(10, 'Joshim Kamal', 'joshim@gmail.com', '53656367', '5926532', NULL),
(11, 'Md Sopon Abdullah', 'mdshopon1862@gmail.com', '01738676314', '45', NULL);

--
-- Triggers `staff`
--
DELIMITER $$
CREATE TRIGGER `DeleteriggerStaff` BEFORE DELETE ON `staff` FOR EACH ROW INSERT into logs 
values(old.staff_id,old.Staff_name,"Deleting","Staff Member")
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `InsertionTriggerStaff` AFTER INSERT ON `staff` FOR EACH ROW INSERT into logs 
values(New.staff_id,New.staff_name,"New Insertion","Staff Member")
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `UpdateTriggerStaff` AFTER UPDATE ON `staff` FOR EACH ROW INSERT into logs 
values(New.staff_id,New.Staff_name,"New Update Successful","Staff Member")
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `staff_community`
--

CREATE TABLE `staff_community` (
  `message_id` int(255) NOT NULL,
  `message` varchar(500) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `staff_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff_community`
--

INSERT INTO `staff_community` (`message_id`, `message`, `time`, `staff_id`) VALUES
(0, 'why bus is so late ', '2023-06-17 09:27:13', 10);

-- --------------------------------------------------------

--
-- Table structure for table `staff_complaint`
--

CREATE TABLE `staff_complaint` (
  `complaint_id` int(255) NOT NULL,
  `complaint` varchar(500) NOT NULL,
  `staff_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff_complaint`
--

INSERT INTO `staff_complaint` (`complaint_id`, `complaint`, `staff_id`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dictum enim. Curabitur fermentum neque auctor nulla imperdiet bibendum. Pellentesque sodales varius elit quis ornare. Mauris id bibendum sapien. Donec.', 1),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dictum enim. Curabitur fermentum neque auctor nulla imperdiet bibendum. Pellentesque sodales varius elit quis ornare. Mauris id bibendum sapien. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dictum enim. Curabitur fermentum neque auctor nulla imperdiet bibendum. Pellentesque sodales varius elit quis ornare. Mauris id bibendum sapien. Donec.', 1),
(3, 'Lorem pellentesque sodales varius elit quis ornare. Mauris id bibendum sapien. Donec.', 6);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `Student_id` int(255) NOT NULL,
  `Student_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `dept_id` int(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Student_id`, `Student_name`, `email`, `phone`, `dept_id`, `password`, `image`) VALUES
(1, 'Moyna Sakina', 'moyna@gmail.com', '12507234', 19, '12444', NULL),
(2, 'Sokina Akter', 'sok@gmail.com', '52326', 9, '121221', NULL),
(3, 'Nahid Islam', 'nahin@gmail.com', '236797896', 15, '124645', NULL),
(4, 'Akaash Sumu', 'akchy@gmail.com', '45869946', 13, '5433', NULL),
(5, 'Deehan Jhori', 'dhan@gmail.com', '523075', 7, '84833', NULL),
(13, 'Sultana Parvez', 'hih@gmail.com', '868', 2, '111', NULL),
(15, 'Samiha Fardu', 'easy@gmail.com', '94372852', 10, '111', NULL),
(19701002, 'Shoaib Uddin', 'shoaibu.ramim@gmail.com', '01614846369', 10, '19701002', NULL),
(19701055, 'Ateka Oishi', 'mdshopon1862@gmail.com', '01738676314', 10, '1234', NULL),
(19701073, 'Md Sopon Abdullah', 'mdshopon1862@gmail.com', '01738676314', 10, '1234', NULL);

--
-- Triggers `student`
--
DELIMITER $$
CREATE TRIGGER `DeleteriggerStudent` BEFORE DELETE ON `student` FOR EACH ROW INSERT into logs 
values(old.student_id,old.Student_name,"Deleting","Student")
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `InsertionTriggerStudent` AFTER INSERT ON `student` FOR EACH ROW INSERT into logs 
values(New.Student_id,New.Student_name,"New Insertion","Student")
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `UpdateTriggerStudent` AFTER UPDATE ON `student` FOR EACH ROW INSERT into logs 
values(New.Student_id,New.Student_name,"New Update Successful","Student")
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `student_community`
--

CREATE TABLE `student_community` (
  `message_id` int(255) NOT NULL,
  `message` varchar(500) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `student_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_community`
--

INSERT INTO `student_community` (`message_id`, `message`, `time`, `student_id`) VALUES
(113, 'Hi', '2023-06-17 06:54:39', 19701055),
(115, 'Its in Cantonment', '2023-06-17 06:54:39', 19701055),
(117, 'Hello guys Is there any bus at 2pm/', '2023-06-17 06:54:39', 13),
(118, 'From where you want to get in', '2023-06-17 06:54:39', 19701055),
(119, 'From sholoshohor', '2023-06-17 06:54:39', 13),
(120, 'Yeah. A bus will start for Campus at 1:30 PM from New Market', '2023-06-17 06:54:39', 19701002),
(121, 'thank you', '2023-06-17 06:54:39', 19701073),
(122, 'why train is no comming?', '2023-06-17 06:54:39', 19701055),
(123, 'ok', '2023-06-17 06:54:39', 19701055),
(124, 'where is the shuttle now', '2023-06-17 06:54:39', 19701073),
(125, '?', '2023-06-17 08:32:26', 19701073);

-- --------------------------------------------------------

--
-- Table structure for table `student_complaint`
--

CREATE TABLE `student_complaint` (
  `complaint_id` int(11) NOT NULL,
  `complaint` varchar(500) NOT NULL,
  `student_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_complaint`
--

INSERT INTO `student_complaint` (`complaint_id`, `complaint`, `student_id`) VALUES
(1, 'cvcxc xc', 19701073),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dictum enim. Curabitur fermentum neque auctor nulla imperdiet bibendum. Pellentesque sodales varius elit quis ornare. Mauris id bibendum sapien. Donec.', 4),
(3, 'Curabitur vel dictum enim. Curabitur fermentum neque auctor nulla imperdiet bibendum. Pellentesque sodales varius elit quis ornare. Mauris id bibendum sapien. Donec.', 5),
(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 5),
(5, 'hjhjkj', 19701073),
(6, 'md sopon abdullah', 19701073),
(7, 'klklklk,m,m', 19701073),
(8, 'fwefsdfdfdwer', 19701073),
(9, 'ggfdgr', 19701073);

-- --------------------------------------------------------

--
-- Table structure for table `tbuses`
--

CREATE TABLE `tbuses` (
  `id` int(11) NOT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lon` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbuses`
--

INSERT INTO `tbuses` (`id`, `lat`, `lon`, `email`, `password`, `name`, `details`) VALUES
(1, '22.4787314', '91.8012242', 'bus1@gmail.com', '123', 'Teacher Bus 1', 'Test'),
(2, '22.3660032', '91.8300842', 'bus2@gmail.com', '123', 'Teacher Bus 3', NULL),
(3, NULL, NULL, 'bus3@gmail.com', '123', 'Teacher Bus 4', 'sample'),
(4, NULL, NULL, 'bus4@gmail.com', '123', 'Teacher Bus 2', 'sample');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacher_id` int(255) NOT NULL,
  `teacher_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `dept_id` int(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacher_id`, `teacher_name`, `email`, `phone`, `dept_id`, `password`, `image`) VALUES
(1, 'Sopon Kumar', 'mdshopon1862@gmail.com', '01738676314', 2, '1', NULL),
(2, 'Md Sopon Abdullah', 'mdshopon1862@gmail.com', '01738676314', 4, '12', NULL),
(3, 'Torikullah', 'torikullah@gmail.com', '245259', 18, '1232', NULL),
(4, 'Ramajan Mia', 'ramajan@gmail.com', '53458729', 6, '1234', NULL),
(5, 'Tota Mia', 'totamia@gmail.com', '65767829', 10, '12345', NULL),
(6, 'Monjurul Alam', 'monjur@gmail.com', '54983729', 11, '123134', NULL),
(7, 'Shah Alam', 'salam@gmail.com', '9975329', 16, '12333', NULL),
(8, 'Joshim Kamal', 'joshim@gmail.com', '53656367', 10, '4267', NULL),
(11, 'Rafiqul Alam', 'roofik@gmail.com', '526456329', 2, '123111', NULL);

--
-- Triggers `teacher`
--
DELIMITER $$
CREATE TRIGGER `DeleteriggerTeacher` BEFORE DELETE ON `teacher` FOR EACH ROW INSERT into logs 
values(old.teacher_id,old.teacher_name,"Deleting","Teacher")
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `InsertionTriggerTeacher` AFTER INSERT ON `teacher` FOR EACH ROW INSERT into logs 
values(New.teacher_id,New.teacher_name,"New Insertion","Teacher")
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `UpdateTriggerTeacher` AFTER UPDATE ON `teacher` FOR EACH ROW INSERT into logs 
values(New.Teacher_id,New.Teacher_name,"New Update Successful","Teacher")
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_community`
--

CREATE TABLE `teacher_community` (
  `message_id` int(255) NOT NULL,
  `message` varchar(500) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `teacher_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher_community`
--

INSERT INTO `teacher_community` (`message_id`, `message`, `time`, `teacher_id`) VALUES
(0, 'hello i am tota mia', '2023-06-17 09:29:15', 5);

-- --------------------------------------------------------

--
-- Table structure for table `teacher_complaint`
--

CREATE TABLE `teacher_complaint` (
  `complaint_id` int(255) NOT NULL,
  `complaint` varchar(500) NOT NULL,
  `teacher_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher_complaint`
--

INSERT INTO `teacher_complaint` (`complaint_id`, `complaint`, `teacher_id`) VALUES
(1, 'Etiam commodo ut mauris non porta. In vel ipsum enim. In consequat a ipsum sit amet sodales. Phasellus ac pretium felis. Pellentesque habitant morbi tristique senectus et netus et malesuada.', 4),
(2, 'In consequat a ipsum sit amet sodales. Phasellus ac pretium felis. Pellentesque habitant morbi tristique senectus et netus et malesuada.', 2),
(3, 'Etiam commodo ut mauris non porta. In vel ipsum enim. Pellentesque habitant morbi tristique senectus et netus et malesuada.', 4);

-- --------------------------------------------------------

--
-- Table structure for table `transport`
--

CREATE TABLE `transport` (
  `Transport_id` int(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transport`
--

INSERT INTO `transport` (`Transport_id`, `type`, `category`) VALUES
(1, 'Shuttle', 'Student'),
(3, 'Bus', 'Teacher'),
(4, 'Bus', 'Staff'),
(5, 'Bus', 'Staff'),
(6, 'Bus', 'Staff'),
(7, 'Bus', 'Staff'),
(10, 'Bus', 'Teacher'),
(11, 'Bus', 'Teacher'),
(12, 'Bus', 'Teacher'),
(13, 'Bus', 'Teacher');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`Driver_id`),
  ADD KEY `Transport_id` (`Transport_id`);

--
-- Indexes for table `point`
--
ALTER TABLE `point`
  ADD PRIMARY KEY (`point_id`);

--
-- Indexes for table `proctorial_body`
--
ALTER TABLE `proctorial_body`
  ADD PRIMARY KEY (`Proctor_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `sbuses`
--
ALTER TABLE `sbuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`shedule_no`),
  ADD KEY `Transport_id` (`Transport_id`),
  ADD KEY `point_id` (`point_id`),
  ADD KEY `schedule_ibfk_3` (`destination_id`);

--
-- Indexes for table `shuttles`
--
ALTER TABLE `shuttles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `staff_community`
--
ALTER TABLE `staff_community`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `staff_id` (`staff_id`);

--
-- Indexes for table `staff_complaint`
--
ALTER TABLE `staff_complaint`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `staff_id` (`staff_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`Student_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `student_community`
--
ALTER TABLE `student_community`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `student_complaint`
--
ALTER TABLE `student_complaint`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `tbuses`
--
ALTER TABLE `tbuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `teacher_community`
--
ALTER TABLE `teacher_community`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `teacher_complaint`
--
ALTER TABLE `teacher_complaint`
  ADD PRIMARY KEY (`complaint_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`Transport_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sbuses`
--
ALTER TABLE `sbuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `shedule_no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `shuttles`
--
ALTER TABLE `shuttles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student_community`
--
ALTER TABLE `student_community`
  MODIFY `message_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT for table `student_complaint`
--
ALTER TABLE `student_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbuses`
--
ALTER TABLE `tbuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`Transport_id`) REFERENCES `transport` (`Transport_id`) ON DELETE CASCADE;

--
-- Constraints for table `proctorial_body`
--
ALTER TABLE `proctorial_body`
  ADD CONSTRAINT `proctorial_body_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE CASCADE;

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`point_id`) REFERENCES `point` (`point_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `schedule_ibfk_2` FOREIGN KEY (`Transport_id`) REFERENCES `transport` (`Transport_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `schedule_ibfk_3` FOREIGN KEY (`destination_id`) REFERENCES `point` (`point_id`) ON DELETE CASCADE;

--
-- Constraints for table `staff_community`
--
ALTER TABLE `staff_community`
  ADD CONSTRAINT `staff_community_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE CASCADE;

--
-- Constraints for table `staff_complaint`
--
ALTER TABLE `staff_complaint`
  ADD CONSTRAINT `staff_complaint_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE CASCADE;

--
-- Constraints for table `student_community`
--
ALTER TABLE `student_community`
  ADD CONSTRAINT `student_community_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`Student_id`) ON DELETE CASCADE;

--
-- Constraints for table `student_complaint`
--
ALTER TABLE `student_complaint`
  ADD CONSTRAINT `student_complaint_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`Student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE CASCADE;

--
-- Constraints for table `teacher_community`
--
ALTER TABLE `teacher_community`
  ADD CONSTRAINT `teacher_community_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE CASCADE;

--
-- Constraints for table `teacher_complaint`
--
ALTER TABLE `teacher_complaint`
  ADD CONSTRAINT `teacher_complaint_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
