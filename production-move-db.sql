-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2022 at 09:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `production-move`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_code` varchar(191) NOT NULL,
  `customer_name` varchar(191) NOT NULL,
  `address` varchar(191) NOT NULL,
  `phoneNumber` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_code`, `customer_name`, `address`, `phoneNumber`, `created_at`, `updated_at`) VALUES
('0210200', 'thuthu', 'thuthu', '08472998347', '2022-12-29 11:39:02', '2022-12-29 11:39:02'),
('12345', 'le van b', 'ha noi', '0234857298', '2022-12-30 08:35:07', '2022-12-30 08:35:07'),
('2002', 'nguyen van a', 'ha noi', '01234658', '2022-12-30 07:38:47', '2022-12-30 07:38:47'),
('20020001', 'thuthu', 'hanoi', '023648300', '2022-12-28 08:17:05', '2022-12-28 08:17:05');

-- --------------------------------------------------------

--
-- Table structure for table `factories`
--

CREATE TABLE `factories` (
  `factory_code` varchar(191) NOT NULL,
  `factory_name` varchar(191) NOT NULL,
  `address` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `factories`
--

INSERT INTO `factories` (`factory_code`, `factory_name`, `address`, `created_at`, `updated_at`) VALUES
('F100', 'Alas Factory', '104 Ngọc Hồi, Hoàng Mai, Hà Nội', '2022-12-25 00:53:49', '2022-12-25 00:53:49'),
('F101', 'Lamborghini VietNam', '77 Ngọc Khánh, Ba Đình, Hà Nội', '2022-12-25 01:17:27', '2022-12-25 01:17:27'),
('F102', 'Lexus Car', '45 Cầu Giấy, Cầu Giấy, Hà Nội', '2022-12-25 01:17:52', '2022-12-25 01:17:52');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(53, '2022_12_22_151420_create_add_foreign_table', 3),
(83, '2022_12_19_144438_create_modify_table', 4),
(88, '2014_10_12_000000_create_users_table', 5),
(89, '2014_10_12_100000_create_password_resets_table', 5),
(90, '2016_06_01_000001_create_oauth_auth_codes_table', 5),
(91, '2016_06_01_000002_create_oauth_access_tokens_table', 5),
(92, '2016_06_01_000003_create_oauth_refresh_tokens_table', 5),
(93, '2016_06_01_000004_create_oauth_clients_table', 5),
(94, '2016_06_01_000005_create_oauth_personal_access_clients_table', 5),
(95, '2019_08_19_000000_create_failed_jobs_table', 5),
(96, '2019_12_14_000001_create_personal_access_tokens_table', 5),
(97, '2022_12_16_155237_create_factories_table', 5),
(98, '2022_12_16_173540_create_stores_table', 5),
(99, '2022_12_16_173653_create_warranty_centers_table', 5),
(100, '2022_12_17_180210_create_products_table', 5),
(101, '2022_12_19_152257_create_productlines_table', 5),
(102, '2022_12_22_150726_create_customers_table', 5),
(103, '2022_12_22_151029_create_orders_table', 5),
(104, '2022_12_23_071001_create_order_details_table', 5),
(105, '2022_12_26_073448_create_modify_table', 6),
(106, '2022_12_26_073759_create_order_details_table', 7),
(107, '2022_12_26_094430_create_product_sold_factory_table', 8),
(108, '2022_12_26_095011_create_add_column_table', 9),
(109, '2022_12_26_140651_create_add_feature_table', 10),
(110, '2022_12_26_143600_create_add_store_column_table', 11),
(111, '2022_12_26_145149_create_warranty_product_table', 12),
(112, '2022_12_27_210244_create_add_add_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('002cc6fff0d10b3f00575569745a4ac635e3a5a890764f14301010efd4378fcc940a7f42c4d133fd', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 02:25:36', '2022-12-30 02:25:36', '2023-12-30 09:25:36'),
('04f49a0636589938bfceaf51613ce0f026854ddbf2ed6aa2fd0e35bfa7f2340ff11cc0bf8d9d696a', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:31:46', '2022-12-30 07:31:46', '2023-12-30 14:31:46'),
('0b37313f2ebb75279de32042caa9243410505170bd3d4cfe782d5f1fbcbdefca0d0de46f46240d00', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-28 10:50:31', '2022-12-28 10:50:31', '2023-12-28 17:50:31'),
('1115a70dce4df3d42bfc9be0bab8ccfb17dccd83c031b7c386eac5b459a61af1166669c170263fc3', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:50:38', '2022-12-30 07:50:38', '2023-12-30 14:50:38'),
('147ba41bf714210297a6dc6f8a5095697310d61f7dba8d53a0fce32effd93c0977558c5cf2c805c8', 2, 3, 'Personal Access Token', '[]', 1, '2022-12-26 08:06:16', '2022-12-26 09:08:18', '2023-12-26 15:06:16'),
('156a95d06f0471e61635510cf45bfff254a2f19338147e5c8c2ba5b9a9d018146da1b63407fff47a', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 08:24:07', '2022-12-30 08:24:07', '2023-12-30 15:24:07'),
('168b386b1f83bf186585dd463e29e264182ea15c1afd8d48b3ae8cacf40d8e78865a0c6af7713729', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:50:57', '2022-12-29 12:50:57', '2023-12-29 19:50:57'),
('1ac316743e46fab01b247166211964c7f8744d6a46a05a2659e9e4cc555b0696dae7ae2f6cebc811', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 10:48:24', '2022-12-29 10:48:24', '2023-12-29 17:48:24'),
('1b0363ae6215810d7ceeef741b28b1c6a33abc7152426072fc1f0105d8a354f8202854d419e5e6aa', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:56:15', '2022-12-29 11:56:15', '2023-12-29 18:56:15'),
('1cb0ab3807848963fcdfa4a16d4e31c9be852b43416945b2f69a8deaeb9e061883657b1309455836', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 08:38:55', '2022-12-29 08:38:55', '2023-12-29 15:38:55'),
('1d93038f0c211f8138089a329b7f73c67553cd35bc80b28b1dc7d195bd99e1d0c089d25e4a42e5a8', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:59:02', '2022-12-29 07:59:02', '2023-12-29 14:59:02'),
('1dd05a42b4ca19dca6049fdb4bb062421e14c06015796dc8825c30343bcc075e966c0d228d4d285d', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:32:10', '2022-12-29 12:32:10', '2023-12-29 19:32:10'),
('22053cb8d05f7053c0f291633a04e89a8c6559cc7a60b2d91711212d9243cfeeeb4a293723c1ba24', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:39:54', '2022-12-30 06:39:54', '2023-12-30 13:39:54'),
('22ebc4fd70ffb97c9f96caaeb201079b792cb137122ad9cb21fca5f6edc3cfdcf5a694c3294fa1fe', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-28 11:14:42', '2022-12-28 11:14:42', '2023-12-28 18:14:42'),
('23fdac8fa2ba84515b82153d135492b73c17609d6576b85396a0ac0396ae68b7f02771acc0f94b54', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:20:51', '2022-12-29 11:20:51', '2023-12-29 18:20:51'),
('25a45fa5e7687144b9ee8bf92d9cfe648b70c8bad48e8eebae64f9a4728e12562b86e840b0d481dc', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:59:14', '2022-12-30 06:59:14', '2023-12-30 13:59:14'),
('25a8de6c194ca2264272ee7f8f43f30fcf0810a94c2b6fcabb5f4b6bcee68a171f196078121b9277', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:31:35', '2022-12-29 07:31:35', '2023-12-29 14:31:35'),
('27a14da85a21ecad99da42c9d2a401c203efcd30ce9dd10932b59d81ba60e36ee19f89fcf374c775', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 09:01:23', '2022-12-29 09:01:23', '2023-12-29 16:01:23'),
('2851984b9dac41e7b64546a78302e1443f149afd4a2b8ae87200474e0a6c95d083ebab96bea7f57c', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:00:07', '2022-12-30 07:00:07', '2023-12-30 14:00:07'),
('2a7be156d3eeb6cd468f9ccea14890bda84623aacc6846b9b52d9c69d01374e7a6b9c4f2c5d3eb50', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:02:48', '2022-12-30 07:02:48', '2023-12-30 14:02:48'),
('2abc75dc330ba4be970c202bc752d31ff376ce33b5750aa52f2d8667ece8d67d008ac1ee025e2ec5', 2, 3, 'Personal Access Token', '[]', 1, '2022-12-25 01:04:19', '2022-12-25 01:06:28', '2023-12-25 08:04:19'),
('2af4c3574439ccd54acf0ab7f5ad819a82e4632e501377e3304b8cb1328f51b49b7bc84197c05df0', 16, 3, 'Personal Access Token', '[]', 0, '2022-12-27 21:55:09', '2022-12-27 21:55:09', '2023-12-28 04:55:09'),
('2e6022b76eec0164f7173fde04b99fd751c2dc00f7c7a9e959b5ec25c8aacc4dd1d7e6ad79515afc', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:47:27', '2022-12-30 07:47:27', '2023-12-30 14:47:27'),
('2ec1a78f63bb578d0d8325a47af0bdbbdb7e146f3a94896a0ff228b2f2625e263089812da52830d4', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:06:01', '2022-12-30 06:06:01', '2023-12-30 13:06:01'),
('2f20fd9b8cc24cefd2b51d2ce065d153b0e084e36d6d8c3399f1ee3146c6b0932e8224ed32de6b04', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 02:32:02', '2022-12-30 02:32:02', '2023-12-30 09:32:02'),
('30bbcb683dbe3907785c7c28d6537cc8421aec97a80a47e76bb777d73785461477ad53aa2a5331b8', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:59:41', '2022-12-30 06:59:41', '2023-12-30 13:59:41'),
('35c8cd2144237529f972c46582e3209dc1b2334d8cf86f2121309ddbae63ec93616e197f6f4e999c', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:08:21', '2022-12-30 06:08:21', '2023-12-30 13:08:21'),
('3617f58a12d94991e6dc18872b2967000e6b5456d1448d4f4bfb27115a5cf23bd60ea1d182541d41', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:18:56', '2022-12-29 07:18:56', '2023-12-29 14:18:56'),
('3676f5d48cdec23acd09e615cfffbe0435eed11aee09dcd244e86c783ceb8dee2bf2ca8b771a4bb5', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:30:14', '2022-12-29 11:30:14', '2023-12-29 18:30:14'),
('453870c6da08018a81326310a8bdab23700e9bb324d1eaef42b5e51a25e2a3f3cfd85253b00886ca', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:35:25', '2022-12-29 12:35:26', '2023-12-29 19:35:25'),
('45882227c73e02d8740d0c558837ca02ebbd082d5b176e27963d6d588c4d1b07ecf0a8d5dbed590b', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:33:04', '2022-12-30 06:33:04', '2023-12-30 13:33:04'),
('46f218d1bfa14f711336bd35d33fb53db308de0348f52494648fd68d857e709101df325c21f69e45', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:49:13', '2022-12-30 07:49:13', '2023-12-30 14:49:13'),
('500cfbb18f36402d83884a497c3111a9f1586f4cb4cedd29ba0e4313279f853c644b75c6fc1f58d6', 3, 3, 'Personal Access Token', '[]', 0, '2022-12-30 03:00:39', '2022-12-30 03:00:39', '2023-12-30 10:00:39'),
('514f67c27387adaf440131c9faae1f88af9956f9d909763c829f0eb5c0a7192f39695a3dae3067b5', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:27:52', '2022-12-29 11:27:52', '2023-12-29 18:27:52'),
('591a2a0530e3c460df621344931fb6294b9202e626f630d87cdf3168b38243270679908579f5b78a', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-27 22:20:26', '2022-12-27 22:20:26', '2023-12-28 05:20:26'),
('5d10efa5baeda3bfd6724a0e4f610ffadfc7c93fcb2fb0f6e349a641b8058f2c1822e55207164110', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:28:34', '2022-12-29 11:28:34', '2023-12-29 18:28:34'),
('62ddb4c491f04092a409771f4a037852ebc3ea6bd73c2ad010dceaf928a632c507ce3789e7b0c788', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 10:58:28', '2022-12-29 10:58:28', '2023-12-29 17:58:28'),
('63ede1c3b81e2a5a93cf305d9f518e5d6cee7181afe80983f5b555fe24ec49d744bec6ba4cd50d4a', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:28:20', '2022-12-29 11:28:20', '2023-12-29 18:28:20'),
('676860e7f955277a5b05aba895c74074de59c807aab73e6b7704a2b56d95ba79bd0eb290278307d8', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 05:59:59', '2022-12-30 05:59:59', '2023-12-30 12:59:59'),
('6f81b52128eb749f415d1e394ee217805cf9b7f74700933d4650c92695431ffcb6c91f0bf2f6e11e', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:30:08', '2022-12-29 07:30:08', '2023-12-29 14:30:08'),
('6ff6a737b599cdeb7d184716b3c5a70241a3e5f449c98460a0f9b3505ac03e64885e66504fb5d4fa', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:40:27', '2022-12-29 11:40:27', '2023-12-29 18:40:27'),
('73d03c9dce1fdb57e5cac135aff10546cddb0f6a2191f596ddfc31c0c1663c50b7b586b28b7c35b9', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:08:03', '2022-12-30 06:08:03', '2023-12-30 13:08:03'),
('7533faa851cf41d76d99859706ed6918398f96ca2e184cd52b00c5bdb7655542d54c1c2733079bc0', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:22:01', '2022-12-29 07:22:01', '2023-12-29 14:22:01'),
('76466fe417a62c0103528b55e6a82ca3641e8ae8ce532053d91fc08d54036d5e6e2d96724a8df8ec', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:41:33', '2022-12-30 07:41:33', '2023-12-30 14:41:33'),
('769e12936384b57934c3a0accf8b0782934b01e645b941430edc1e2a95303274c29ead5892d3195b', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-29 01:49:17', '2022-12-29 01:49:17', '2023-12-29 08:49:17'),
('76abef2d02baf86743a2ae879ce0035fc841b2058c19d3f8275fffaffb36abc5c776757577f6dcc4', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 08:25:26', '2022-12-29 08:25:26', '2023-12-29 15:25:26'),
('7adb379c3fc92ee376e374b7b71a0474a75fcd02a41576dc033f31c46888ac01f322ce31770745b6', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-27 21:40:49', '2022-12-27 21:40:49', '2023-12-28 04:40:49'),
('7ae514f3005bc95d65c86d6db74ff92ad58f4ebdbb75a00d0b5d9f3dfd49ee3f0e20a81a865fd79d', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-28 10:48:42', '2022-12-28 10:48:42', '2023-12-28 17:48:42'),
('7d75ecb40489e42641bb57ad5f758bddce05f5abb30fe3ac176e9e97b35d7d071a27f484c80e85de', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:05:18', '2022-12-30 06:05:18', '2023-12-30 13:05:18'),
('846df931cb189dc56105ecf1b91f2a1eac1ec4face4183ddf39dbb50443062836d2c4323f89ba603', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 02:36:06', '2022-12-30 02:36:06', '2023-12-30 09:36:06'),
('8630caf0924971316c481e1db908deca4cfc0fda9da006789fb36d2bc2a76431659bb86f71ef7889', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:08:34', '2022-12-30 07:08:34', '2023-12-30 14:08:34'),
('86f22d715c29cf503f3091a076abdc14ea1e8453a39e33a216092f41d1fe118830e03235e71ed58f', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:32:45', '2022-12-29 11:32:45', '2023-12-29 18:32:45'),
('874c795f48e0e80fa8b2a45ae9f71212cfe1bbe03cdf5226722f1accddcb7f7c257518140a89fd18', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-30 08:37:29', '2022-12-30 08:37:29', '2023-12-30 15:37:29'),
('883b452f2e7f87b50a3da16ad456d481439eec17564fef2d27701d8005e8295c2bc3ae4070c33858', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:26:58', '2022-12-29 07:26:58', '2023-12-29 14:26:58'),
('99474b3b17b712cec0f653fea7ff9614a24af56687b26d1cbff3b1db5e29131b88f6ce9068ea53f2', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-28 12:15:19', '2022-12-28 12:15:19', '2023-12-28 19:15:19'),
('9a670f66b29eacd7ce51fd8d9107218d411c37230eea5785929a8e09aefd6c9f65ab68d8c8d8088a', 16, 3, 'Personal Access Token', '[]', 0, '2022-12-27 22:04:09', '2022-12-27 22:04:09', '2023-12-28 05:04:09'),
('a06077e9d08dbf39a5e888c023e99bc8e5d8d05aa31905d22c144da5b76b2de6788bc3e67869ef90', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-28 12:30:11', '2022-12-28 12:30:11', '2023-12-28 19:30:11'),
('a24da1d97e6340143a266e0513d2a9fa1d9e964678916fd4605ad52856f7c85b27133f674966a3ef', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 08:33:22', '2022-12-30 08:33:22', '2023-12-30 15:33:22'),
('a66dc4fc45320d08994d1c447e05c1f79feed3d38d4bdbfe4807ec2c004de61be3f5f5819da7342f', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 07:11:14', '2022-12-29 07:11:14', '2023-12-29 14:11:14'),
('a7511760e9e9815336702bd0f5650a9c2f2eac7ab077a7d45f82229748848eae77d8b13e223f4bc9', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:56:02', '2022-12-30 06:56:02', '2023-12-30 13:56:02'),
('a76fd1b310cacc9b8be2be48395f31a347741d97502df3660efa508ffc5fb31d26e72af242a21ff2', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:20:32', '2022-12-30 07:20:33', '2023-12-30 14:20:32'),
('aee7b6736b4dc19810e202e6559d10824a48e030b6f6f5c1ecc688a7a862568fcd0a5c87238deec3', 1, 3, 'Personal Access Token', '[]', 1, '2022-12-25 01:01:34', '2022-12-25 01:03:05', '2023-12-25 08:01:34'),
('aef2d4fdc9754acb1b414b69d72e92c1e3bc2c7545669a0b701b7286890681c8779cd814e4c484fd', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:06:21', '2022-12-30 07:06:21', '2023-12-30 14:06:21'),
('af02d213c1698e0ff982adcc1db6798f155655066f01ae61369cc649def53cff953707a5e59ebbf0', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:51:51', '2022-12-29 12:51:51', '2023-12-29 19:51:51'),
('af5a276367f5badec9c3032089ec1d4f738ce887d4f5ab993f9da877c1740d8e8d94391c030d207f', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 08:30:12', '2022-12-30 08:30:12', '2023-12-30 15:30:12'),
('b2f14bf6eab91b6412a73f9f08b5d191300f75a45e10510b94b0240c7146829ea0ed1060034a0fe9', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 15:34:12', '2022-12-29 15:34:12', '2023-12-29 22:34:12'),
('b8b857b35613bd7a415e6e05345f1daa9bd091db6066ee6ad0449d65c9fe289ba132c79b65604ce1', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-29 15:33:48', '2022-12-29 15:33:48', '2023-12-29 22:33:48'),
('b98955f2cf32bf3107fb2031411838f66353dbd866692261dd458ae8a803cc970274465f81e75f24', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:08:01', '2022-12-30 07:08:01', '2023-12-30 14:08:01'),
('bb0909a957003f9c7f354b4d2e242326074aa044edff2fe120aae74ea975b92d3c8acac96f42f7c4', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:44:59', '2022-12-29 12:44:59', '2023-12-29 19:44:59'),
('bb8b14df925312d34e25b68ce71984fcf0567dcbad6f983ac226a3d08da45d962dbf29f0a937c63b', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-25 11:42:45', '2022-12-25 11:42:46', '2023-12-25 18:42:45'),
('bd1750e1a9651ead0a588586fab091d18c516b8b5235018be26ea7969057d4f356e22d60376f4d62', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 03:05:05', '2022-12-30 03:05:05', '2023-12-30 10:05:05'),
('c506f582f3c237b52ee01caa1b1de141e24fd3a0697c559bacf1206d0cea00d61db66e726e36fbce', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:08:01', '2022-12-30 07:08:01', '2023-12-30 14:08:01'),
('cee6b813f668112fd20826509a23f4240e0124d1a1828fcbfb4af06a073888e7992bb11614ded449', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:29:12', '2022-12-29 11:29:12', '2023-12-29 18:29:12'),
('d1040bf287ef457be1b006e1d7e31b21c3d8cbc2a63d7a3fbdc2ef7f1820f9628722cfd63cc67243', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-28 12:29:46', '2022-12-28 12:29:46', '2023-12-28 19:29:46'),
('d4c840f38173f10c6a81eb963f76cab9017905f6c71cc8da1fbe227703d9875d074fb268f0ae42d4', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 01:38:47', '2022-12-30 01:38:47', '2023-12-30 08:38:47'),
('d78c8a995dc9423bf2e7b55589264e6bf68c2c4c21b1cfbde06350433dfa82bf25ecc9a919e9739f', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-27 21:45:24', '2022-12-27 21:45:24', '2023-12-28 04:45:24'),
('dc10c3070b8590160b29fa6b0eb615e396b198093920b6fdb8ef6b0e63dd384a43902bbb288864ee', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:39:03', '2022-12-30 06:39:04', '2023-12-30 13:39:03'),
('dd6a06bf7c6bc2ce0cf9a271341f2d3bcd7ffd65c7d50bdfcccc0587612cdf91ef88865c31630023', 3, 3, 'Personal Access Token', '[]', 0, '2022-12-29 11:27:00', '2022-12-29 11:27:00', '2023-12-29 18:27:00'),
('de4f69271586848de9baf6e8887e8f3dde4c77e2220ecb354874052555f6145e196363b11426bc5b', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 10:57:36', '2022-12-29 10:57:36', '2023-12-29 17:57:36'),
('deef3fbbda27b206d5e8bc83151032388bd0feb3a40c69a01f16fb5da01bf7293b9b3616b60d83ff', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:40:31', '2022-12-30 06:40:31', '2023-12-30 13:40:31'),
('e11a36701441464c29df83db5dcdc23b5415697baa7eaa43d8a7c74db4371a95b9487ff49167214b', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 08:49:29', '2022-12-29 08:49:29', '2023-12-29 15:49:29'),
('e28852c175b61249b12a24c180bc59a5a18896b2a91c30d69877b9da8fd02b2b98db6938a6fcdf87', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 08:35:52', '2022-12-29 08:35:52', '2023-12-29 15:35:52'),
('e46d76423654f78b80d24c80c2992c5826e110ce4da60c39efbe0ff79ff52cd50772124e0229e0bf', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:36:52', '2022-12-30 07:36:52', '2023-12-30 14:36:52'),
('e5af43ffebeb0f200b3444608f3ab4b2a0c12a69ae96e2d720495e57b1d50291da482d79bd519b73', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-25 11:49:14', '2022-12-25 11:49:14', '2023-12-25 18:49:14'),
('e8eb7aa7b9714693eeb622775ff9abf167e7c4e8a236f4b3fd2cbc05e95efd14f9abd36ec1d1ad45', 19, 3, 'Personal Access Token', '[]', 0, '2022-12-29 01:49:05', '2022-12-29 01:49:05', '2023-12-29 08:49:05'),
('edb26d910dcf78acfad0a24e10a209ba6bf64a26843438fcc53eecd633faffabfab894c141b5cf76', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:25:54', '2022-12-30 07:25:54', '2023-12-30 14:25:54'),
('efba83af28f9df832f9b21b1eea6bcba3f6bf07ccc71fed10ec2f1e36dbf535919eb5a823e8c7f36', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:08:53', '2022-12-29 12:08:53', '2023-12-29 19:08:53'),
('f0facaa3559d5d6e4e6f754edbb1f851a22b221d95fceedd5c5b95cbe579621800bf73f39956a3d0', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:51:42', '2022-12-30 07:51:42', '2023-12-30 14:51:42'),
('f946116efc94fe5f03db3196ac7576d8fa4c5199789c2420b795486fd03ba32ba9ea1415ba6176e8', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-29 06:29:12', '2022-12-29 06:29:13', '2023-12-29 13:29:12'),
('fb57113e8a44c0093ca4b88fdce110e2e410fc9de5efd25cd54e0ba766f6c65f021b632d1c9e02e9', 1, 3, 'Personal Access Token', '[]', 0, '2022-12-30 02:59:09', '2022-12-30 02:59:09', '2023-12-30 09:59:09'),
('fd78a5217621c4c834f4f02cb729a233a971c79e1c197ac3f8f2684d47c7cba0df6c68abd13d477e', 8, 3, 'Personal Access Token', '[]', 0, '2022-12-29 12:02:07', '2022-12-29 12:02:07', '2023-12-29 19:02:07'),
('fdf2a7b765cd422453c06d28e5e817a020c5ff46f8f38d36e3123559de92237c6cc7097120e1ddfc', 17, 3, 'Personal Access Token', '[]', 0, '2022-12-30 07:03:05', '2022-12-30 07:03:05', '2023-12-30 14:03:05'),
('fe0c4d8bf5a8e4e2f30fb519b1d75e20dafd812a14da846e52c73f1d5c0651176ae418fd58db1d82', 2, 3, 'Personal Access Token', '[]', 0, '2022-12-30 06:01:08', '2022-12-30 06:01:08', '2023-12-30 13:01:08');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(191) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '5zzrnlTNDSKH5Lxnwu4ys2LbFHNDqzoohYOEIybD', NULL, 'http://localhost', 1, 0, 0, '2022-12-25 01:01:09', '2022-12-25 01:01:09'),
(2, NULL, 'Laravel Password Grant Client', 'mQAjcf1sBg4Hc655aauTv9bKyzQJcqK8YwXzg9os', 'users', 'http://localhost', 0, 1, 0, '2022-12-25 01:01:09', '2022-12-25 01:01:09'),
(3, NULL, 'Laravel Personal Access Client', 'r7RAhM2oznmGSj2NbS0xwGo2cyqKPbHuug2MnNmM', NULL, 'http://localhost', 1, 0, 0, '2022-12-25 01:01:28', '2022-12-25 01:01:28'),
(4, NULL, 'Laravel Password Grant Client', 'V5lVn2s770WV3BQsqBFpPN5yWkwW5qKnGRymHNzO', 'users', 'http://localhost', 0, 1, 0, '2022-12-25 01:01:28', '2022-12-25 01:01:28');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-12-25 01:01:09', '2022-12-25 01:01:09'),
(2, 3, '2022-12-25 01:01:28', '2022-12-25 01:01:28');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_number` varchar(191) NOT NULL,
  `customer_code` varchar(191) NOT NULL,
  `orderDate` datetime NOT NULL,
  `comment` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `store_code` varchar(191) NOT NULL,
  `product_code` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_number`, `customer_code`, `orderDate`, `comment`, `created_at`, `updated_at`, `store_code`, `product_code`) VALUES
('1112', '20020001', '2022-12-28 15:17:05', NULL, '2022-12-28 08:17:05', '2022-12-28 08:17:05', 'S101', '1234'),
('1200', '2002', '2022-12-30 14:38:47', NULL, '2022-12-30 07:38:47', '2022-12-30 07:38:47', 'S100', '1997'),
('3456', '12345', '2022-12-30 15:35:07', NULL, '2022-12-30 08:35:07', '2022-12-30 08:35:07', 'S100', '11112'),
('6666', '0210200', '2022-12-29 18:39:02', NULL, '2022-12-29 11:39:02', '2022-12-29 11:39:02', 'S100', '110003');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_number` varchar(191) NOT NULL,
  `product_code` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `store_code` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_number`, `product_code`, `created_at`, `updated_at`, `store_code`) VALUES
(3, '1100', '2471', '2022-12-26 07:19:03', '2022-12-26 07:19:03', 'S100');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productlines`
--

CREATE TABLE `productlines` (
  `productline_code` varchar(191) NOT NULL,
  `productline_name` varchar(191) NOT NULL,
  `make` varchar(191) NOT NULL,
  `year` varchar(191) NOT NULL,
  `engine_type` varchar(191) NOT NULL,
  `transmission` varchar(191) NOT NULL,
  `drive_type` varchar(191) NOT NULL,
  `cylinder` varchar(191) NOT NULL,
  `total_seats` varchar(191) NOT NULL,
  `total_doors` varchar(191) NOT NULL,
  `basic_warranty_years` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `productlines`
--

INSERT INTO `productlines` (`productline_code`, `productline_name`, `make`, `year`, `engine_type`, `transmission`, `drive_type`, `cylinder`, `total_seats`, `total_doors`, `basic_warranty_years`, `created_at`, `updated_at`) VALUES
('BMWM01', 'BMW M1', 'BMW', '2021', 'V12', '8 speed automatic', 'rear-wheel drive', 'V12', '5', '4', '5', '2022-12-27 22:33:53', '2022-12-27 22:33:53'),
('BMWX001', 'BMWX01', 'BMW', '2018', 'V12', '8 speed automatic', 'rear-wheel drive', 'V12', '5', '4', '4', NULL, NULL),
('LRVT1', 'Lamborghini Reventon 6.5', 'Lamborghini', '2007', 'V12', '6 speed manual', 'all-wheel drive', 'V12', '2', '2', '5', NULL, NULL),
('LXCT01', 'Lexus CT', 'Lexus', '2016', 'Hybrid', '7 speed automatic', 'front wheel drive', 'inline 4', '5', '5', '4', NULL, NULL),
('LXUX01', 'Lexus UX', 'Lexus', '2020', 'Hybrid', '7 speed automatic', 'front wheel drive', 'inline 4', '5', '5', '4', NULL, NULL),
('MAGT', 'Mercedes Benz AMG GT', 'Mercedes', '2014', 'V8', '7 speed automatic', 'rear-wheel drive', 'V8', '2', '3', '4', NULL, NULL),
('MBS01', 'Mercedes-Maybach S', 'Mercedes', '2016', 'V12', '7 speed automatic', 'rear-wheel drive', 'V12', '4', '2', '5', NULL, NULL),
('TEST', 'testtest', 'BMW', '2022', 'test', 'test', 'test', 'test', '3', '5', '3', '2022-12-30 07:27:08', '2022-12-30 07:27:08'),
('test1', 'test1', 'BMW', '2022', 'test1', 'test1', 'test1', 'test1', '4', '4', '4', '2022-12-30 08:25:28', '2022-12-30 08:25:28');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_code` varchar(191) NOT NULL,
  `product_line` varchar(191) NOT NULL,
  `brand` varchar(191) NOT NULL,
  `product_name` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL,
  `factory_code` varchar(191) DEFAULT NULL,
  `store_code` varchar(191) DEFAULT NULL,
  `warranty_center_code` varchar(191) DEFAULT NULL,
  `manufacturing_date` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_code`, `product_line`, `brand`, `product_name`, `status`, `factory_code`, `store_code`, `warranty_center_code`, `manufacturing_date`, `created_at`, `updated_at`) VALUES
('110001', 'Mercedes Benz AMG GT', 'Mercedes', 'Mercedes Benz AMG GT', 'mới sản xuất', 'F100', NULL, NULL, '1975-11-12 12:50:56', NULL, '2022-12-29 08:14:02'),
('110002', 'Lexus CT', 'Lexus', 'CT 200h Executive', 'đưa về đại lý', NULL, 'S100', NULL, '1991-01-16 15:18:45', NULL, '2022-12-26 02:56:31'),
('110003', 'Mercedes-Maybach S', 'Mercedes', 'Mercedes-Maybach S', 'lỗi đã đưa về nhà máy', 'F100', NULL, NULL, '1977-03-23 19:52:33', NULL, '2022-12-30 07:50:56'),
('110004', 'Lamborghini Reventon 6.5', 'Lamborghini', '2008 Lamborghini Reventon 6.5 V12', 'lỗi đã đưa về nhà máy', 'F100', NULL, NULL, '2010-12-31 18:30:23', NULL, '2022-12-27 15:14:00'),
('110005', 'BMWX01', 'BMW', 'BMW X1', 'mới sản xuất', 'F100', NULL, NULL, '1996-05-26 13:46:18', NULL, NULL),
('11112', 'BMWX01', 'BMW', 'test', 'lỗi đã đưa về nhà máy', NULL, NULL, NULL, '2022-12-30 15:32:07', '2022-12-30 08:32:07', '2022-12-30 08:40:39'),
('1222', 'BMVX01', 'BMW', 'BMW X1', 'đưa về đại lý', NULL, 'S102', NULL, '2022-12-28 08:47:20', '2022-12-28 01:47:20', '2022-12-28 02:07:17'),
('1234', 'BMWX01', 'BMW', 'test test', 'lỗi đã đưa về nhà máy', 'F100', NULL, NULL, '2022-12-28 14:47:35', '2022-12-28 07:47:35', '2022-12-28 08:28:32'),
('161924', 'Mercedes-Maybach S', 'Lamborghini', 'CT 200h Executive', 'lỗi đã đưa về nhà máy', 'F100', NULL, NULL, '2022-04-14 03:27:12', '2022-12-25 10:51:46', '2022-12-26 01:10:45'),
('173272', 'Mercedes-Maybach S', 'Lexus', 'CT 200h Executive', 'mới sản xuất', 'F102', NULL, NULL, '2022-06-28 10:59:33', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('176274', 'Mercedes-Maybach S', 'BMW', 'BMW X1', 'mới sản xuất', 'F101', NULL, NULL, '2022-01-02 07:08:49', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('1997', 'BMWX01', 'BMW', 'test', 'lỗi đã đưa về nhà máy', 'F100', NULL, NULL, '2022-12-30 14:33:12', '2022-12-30 07:33:12', '2022-12-30 08:41:12'),
('222477', 'Mercedes-Maybach S', 'BMW', 'Mercedes Benz AMG GT', 'mới sản xuất', 'F101', NULL, NULL, '2022-01-15 12:02:21', '2022-12-25 10:51:45', '2022-12-25 10:51:45'),
('23451', 'BMWX01', 'BMW', 'BMW X1', 'mới sản xuất', 'F102', NULL, NULL, '2022-12-27 23:02:00', '2022-12-27 16:02:00', '2022-12-27 16:02:00'),
('2471', 'Mercedes-Maybach S', 'Lamborghini', 'BMW X1', 'đang ở đại lý', NULL, 'S100', NULL, '2022-09-01 03:03:07', '2022-12-25 10:51:46', '2022-12-26 07:18:15'),
('315530', 'Mercedes-Maybach S', 'Lamborghini', 'Mercedes-Maybach S', 'đang ở đại lý', NULL, 'S100', NULL, '2022-10-10 07:11:14', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('333', 'BMWX01', 'BMW', 'test', 'đưa về đại lý', NULL, 'S100', NULL, '2022-12-28 08:52:34', '2022-12-28 01:52:34', '2022-12-28 02:03:58'),
('370552', 'BMWX01', 'Mercedes', 'Mercedes-Maybach S', 'đưa về đại lý', NULL, 'S101', NULL, '2022-04-19 16:30:34', '2022-12-25 10:47:44', '2022-12-25 10:47:44'),
('410065', 'Mercedes Benz AMG GT', 'BMW', 'Mercedes-Maybach S', 'đưa về đại lý', NULL, 'S102', NULL, '2022-12-07 00:16:23', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('422908', 'Lexus CT', 'Lexus', 'Mercedes-Maybach S', 'đưa về đại lý', NULL, 'S103', NULL, '2022-07-04 23:11:07', '2022-12-25 10:51:46', '2022-12-25 10:51:46'),
('431786', 'BMWX01', 'Mercedes', 'CT 200h Executive', 'mới sản xuất', 'F101', NULL, NULL, '2022-02-08 22:43:39', '2022-12-25 10:51:46', '2022-12-25 10:51:46'),
('445773', 'Mercedes-Maybach S', 'Lamborghini', 'Lamborghini Reventon 6.5 V12', 'đang ở đại lý', NULL, 'S102', NULL, '2022-02-22 08:38:40', '2022-12-25 10:51:45', '2022-12-25 10:51:45'),
('471822', 'Mercedes Benz AMG GT', 'Lamborghini', 'CT 200h Executive', 'mới sản xuất', 'F100', NULL, NULL, '2022-06-25 05:07:48', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('50350', 'Mercedes-Maybach S', 'Lexus', 'Mercedes Benz AMG GT', 'đưa về đại lý', NULL, 'S102', NULL, '2022-03-08 22:43:34', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('555079', 'Mercedes Benz AMG GT', 'Lexus', 'BMW X1', 'đang ở đại lý', NULL, 'S100', NULL, '2022-01-03 14:28:14', '2022-12-25 10:47:44', '2022-12-25 10:47:44'),
('662748', 'Lamborghini Reventon 6.5', 'Mercedes', 'Lamborghini Reventon 6.5 V12', 'mới sản xuất', 'F102', NULL, NULL, '2022-09-08 10:13:06', '2022-12-25 10:47:44', '2022-12-25 10:47:44'),
('679950', 'BMWX01', 'BMW', 'Lamborghini Reventon 6.5 V12', 'mới sản xuất', 'F100', NULL, NULL, '2022-08-20 22:23:39', '2022-12-25 10:51:45', '2022-12-25 10:51:45'),
('69641', 'Mercedes Benz AMG GT', 'Lamborghini', 'Lamborghini Reventon 6.5 V12', 'đưa về đại lý', NULL, 'S103', NULL, '2022-01-15 05:05:08', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('712772', 'BMWX01', 'BMW', 'Mercedes-Maybach S', 'đang ở đại lý', NULL, 'S102', NULL, '2022-07-29 01:12:42', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('724891', 'BMWX01', 'Lamborghini', 'Mercedes Benz AMG GT', 'đang ở đại lý', NULL, 'S103', NULL, '2022-11-02 17:10:42', '2022-12-25 10:51:46', '2022-12-25 10:51:46'),
('749835', 'BMWX01', 'Mercedes', 'Mercedes Benz AMG GT', 'mới sản xuất', 'F102', NULL, NULL, '2022-01-22 18:19:08', '2022-12-25 10:50:44', '2022-12-25 10:50:44'),
('792898', 'BMWX01', 'Mercedes', 'CT 200h Executive', 'đưa về đại lý', 'F102', 'S102', NULL, '2022-01-26 04:32:42', '2022-12-25 10:47:44', '2022-12-25 10:47:44'),
('834296', 'Mercedes-Maybach S', 'BMW', 'CT 200h Executive', 'đang ở đại lý', NULL, 'S101', NULL, '2022-05-02 04:10:14', '2022-12-25 10:51:46', '2022-12-25 10:51:46'),
('847048', 'Lexus CT', 'Lamborghini', 'Lamborghini Reventon 6.5 V12', 'đang ở đại lý', NULL, 'S102', NULL, '2022-12-12 06:06:18', '2022-12-25 10:51:45', '2022-12-25 10:51:45'),
('889498', 'Lamborghini Reventon 6.5', 'BMW', 'Mercedes Benz AMG GT', 'đưa về đại lý', 'F102', 'S100', NULL, '2022-08-18 16:17:50', '2022-12-25 10:47:44', '2022-12-25 10:47:44'),
('92823', 'Mercedes Benz AMG GT', 'Lamborghini', 'Mercedes-Maybach S', 'mới sản xuất', 'F101', NULL, NULL, '2022-07-17 05:23:01', '2022-12-25 10:50:44', '2022-12-25 10:50:44');

-- --------------------------------------------------------

--
-- Table structure for table `product_sold_factory`
--

CREATE TABLE `product_sold_factory` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `factory_code` varchar(191) NOT NULL,
  `product_code` varchar(191) NOT NULL,
  `store_code` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sold_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_sold_factory`
--

INSERT INTO `product_sold_factory` (`id`, `factory_code`, `product_code`, `store_code`, `created_at`, `updated_at`, `sold_date`) VALUES
(1, 'F100', '110002', 'S100', '2022-12-26 02:56:31', '2022-12-26 02:56:31', '2022-12-26 09:56:31'),
(2, 'F100', '110004', 'S101', '2022-12-27 13:59:03', '2022-12-27 13:59:03', '2022-12-27 20:59:03'),
(3, 'F100', '333', 'S100', '2022-12-28 02:03:58', '2022-12-28 02:03:58', '2022-12-28 09:03:58'),
(4, 'F100', '1222', 'S102', '2022-12-28 02:07:17', '2022-12-28 02:07:17', '2022-12-28 09:07:17'),
(5, 'F100', '1234', 'S101', '2022-12-28 07:48:03', '2022-12-28 07:48:03', '2022-12-28 14:48:03'),
(6, 'F100', '555', 'S100', '2022-12-28 07:55:01', '2022-12-28 07:55:01', '2022-12-28 14:55:01'),
(7, 'F100', '1234', 'S101', '2022-12-28 07:58:11', '2022-12-28 07:58:11', '2022-12-28 14:58:11'),
(8, 'F100', '1234', 'S101', '2022-12-28 08:16:16', '2022-12-28 08:16:16', '2022-12-28 15:16:16'),
(9, 'F100', '1997', 'S101', '2022-12-30 03:00:18', '2022-12-30 03:00:18', '2022-12-30 10:00:18'),
(10, 'F100', '1997', 'S100', '2022-12-30 07:34:11', '2022-12-30 07:34:11', '2022-12-30 14:34:11'),
(11, 'F100', '11112', 'S100', '2022-12-30 08:32:48', '2022-12-30 08:32:48', '2022-12-30 15:32:48');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `store_code` varchar(191) NOT NULL,
  `store_name` varchar(191) NOT NULL,
  `address` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`store_code`, `store_name`, `address`, `created_at`, `updated_at`) VALUES
('S100', 'BMW Hà Nội', '923 Láng, Hà Nội', '2022-12-25 00:54:57', '2022-12-25 00:54:57'),
('S101', 'Mecesdes Hanoi', '160 Phạm Văn Đồng, Hà Nội', '2022-12-25 01:15:12', '2022-12-25 01:15:12'),
('S102', 'Lamborghini Hanoi', '83 Trần Quang Khải, Hà Nội', '2022-12-25 01:15:56', '2022-12-25 01:15:56'),
('S103', 'Lexus Hai Phong', '47 Trần Duy Hưng, TP Hải Phòng', '2022-12-25 01:16:33', '2022-12-25 01:16:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `place_code` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `user_role` varchar(191) NOT NULL,
  `role_by_number` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(191) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `place_code`, `username`, `password`, `user_role`, `role_by_number`, `name`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'F100', 'factory100', '$2y$10$2GD6D.Tr.cbjv77sA6HQqefGnV6ug1M1rC/w3jh7LFJkS5M6a07a.', 'factory', 0, NULL, NULL, NULL, '2022-12-25 00:53:50', '2022-12-25 00:53:50'),
(2, 'S100', 'store100', '$2y$10$/RvsbYLhPgH.lGqYY6N2Ae2JFeLncy44pTcb1b0AQJbkRD41/aH6S', 'store', 0, NULL, NULL, NULL, '2022-12-25 00:54:57', '2022-12-25 00:54:57'),
(3, 'S101', 'store101', '$2y$10$F7qbSh5aoddpGxPGsVcYJOKSsLv6ymN5wdVcnjcz/QjC1G8JRdW7C', 'store', 0, NULL, NULL, NULL, '2022-12-25 01:15:12', '2022-12-25 01:15:12'),
(4, 'S102', 'store102', '$2y$10$E7pj/tvdr/PqZXceFyLbtO1IhRKkq21joWmRzcH1XqPqxV4QptSbu', 'store', 0, NULL, NULL, NULL, '2022-12-25 01:15:56', '2022-12-25 01:15:56'),
(5, 'S103', 'store103', '$2y$10$HIlwO2EQvT4IWlrZNsVWNeyHmxLQyPw9n1jtK1qHtwlVuUokegMcO', 'store', 0, NULL, NULL, NULL, '2022-12-25 01:16:33', '2022-12-25 01:16:33'),
(6, 'F101', 'factory101', '$2y$10$cOgIOo9R7HE9L9kbXkHGuu9/SvkWfFAvjmFmcAf0RRn3sgqLRZECG', 'factory', 0, NULL, NULL, NULL, '2022-12-25 01:17:27', '2022-12-25 01:17:27'),
(7, 'F102', 'factory102', '$2y$10$j5dGqGvI3fcA5Lk4jk.aMOSPdxKyt6JCaow.vJx7fQQoKdzMOf2A2', 'factory', 0, NULL, NULL, NULL, '2022-12-25 01:17:52', '2022-12-25 01:17:52'),
(8, 'W100', 'warranty100', '$2y$10$XA65GfFm/YopEpprW3ALkeWCWBIoTDBdTvir2wvKuQa23WjNMOGgu', 'warranty_center', 0, NULL, NULL, NULL, '2022-12-25 01:18:40', '2022-12-25 01:18:40'),
(16, 'ADMIN', 'admin01', '$2y$10$gcuuwS4lyiAaC2zKsFxbSe8ay5wJatWjjRqANNH2y7to1e1iozlSK', 'admin', 0, NULL, NULL, NULL, '2022-12-27 21:54:35', '2022-12-27 21:54:35'),
(17, 'ADMIN', 'admin', '$2y$10$PnxaiSbA.YMGfyzfycR19epD6IIKZ0/4yueuWpDDQTurxG.muVlgO', 'admin', 0, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `warranty_centers`
--

CREATE TABLE `warranty_centers` (
  `warranty_center_code` varchar(191) NOT NULL,
  `warranty_center_name` varchar(191) NOT NULL,
  `address` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `warranty_centers`
--

INSERT INTO `warranty_centers` (`warranty_center_code`, `warranty_center_name`, `address`, `created_at`, `updated_at`) VALUES
('W100', 'Lamborghini Hanoi', '83 Trần Quang Khải, Hà Nội', '2022-12-25 01:18:40', '2022-12-25 01:18:40');

-- --------------------------------------------------------

--
-- Table structure for table `warranty_products`
--

CREATE TABLE `warranty_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_code` varchar(191) NOT NULL,
  `warranty_center_code` varchar(191) NOT NULL,
  `date` datetime NOT NULL,
  `product_status` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_code`);

--
-- Indexes for table `factories`
--
ALTER TABLE `factories`
  ADD PRIMARY KEY (`factory_code`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_number`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `productlines`
--
ALTER TABLE `productlines`
  ADD PRIMARY KEY (`productline_code`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_code`);

--
-- Indexes for table `product_sold_factory`
--
ALTER TABLE `product_sold_factory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`store_code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_password_unique` (`password`);

--
-- Indexes for table `warranty_centers`
--
ALTER TABLE `warranty_centers`
  ADD PRIMARY KEY (`warranty_center_code`);

--
-- Indexes for table `warranty_products`
--
ALTER TABLE `warranty_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_sold_factory`
--
ALTER TABLE `product_sold_factory`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `warranty_products`
--
ALTER TABLE `warranty_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
