-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2026 at 02:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticket_system_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `contact_information` varchar(255) NOT NULL,
  `status` enum('pending','accepted','resolved','rejected') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `title`, `description`, `contact_information`, `status`, `created_at`, `updated_at`) VALUES
(1, 'WiFi Not Connecting', 'Cannot connect to the office network in room 402.', '081-234-5678', 'pending', '2026-03-16 02:00:00', '2026-03-16 02:00:00'),
(2, 'Printer Jammed', 'The printer on the 2nd floor has a paper jam error.', 'Somchai (IT Support)', 'accepted', '2026-03-15 03:00:00', '2026-03-15 03:30:00'),
(3, 'Access Card Expired', 'Building access card is not working.', '099-876-5432', 'resolved', '2026-03-14 02:00:00', '2026-03-15 04:45:00'),
(4, 'Monitor Flickering', 'Computer monitor is flickering frequently.', 'Galya (Accounting)', 'rejected', '2026-03-16 04:20:00', '2026-03-16 05:00:00'),
(5, 'Laptop Overheating', 'Laptop fan makes loud noise.', '088-123-4567', 'pending', '2026-03-16 07:00:00', '2026-03-16 07:00:00'),
(6, 'Coffee Machine Broken', 'Machine on 3rd floor is leaking water.', 'Admin Team', 'accepted', '2026-03-16 01:30:00', '2026-03-16 02:15:00'),
(7, 'Chair Wheel Broken', 'One wheel is missing.', 'Somchai (IT Support)', 'resolved', '2026-03-15 07:00:00', '2026-03-16 02:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
