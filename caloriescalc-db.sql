-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 15 Lip 2022, 12:36
-- Wersja serwera: 10.4.24-MariaDB-cll-lve
-- Wersja PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `bkolsutj1_api`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `favourite_meals`
--

CREATE TABLE `favourite_meals` (
  `mealId` varchar(36) NOT NULL DEFAULT uuid(),
  `userId` varchar(36) NOT NULL,
  `title` varchar(50) NOT NULL DEFAULT 'Title'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `favourite_meals`
--

INSERT INTO `favourite_meals` (`mealId`, `userId`, `title`) VALUES
('01bb7e61-e65c-48b9-bd64-42f5e12f7a78', 'd9d09936-646f-4942-a3d5-0e6176eda077', 'WieśMak'),
('096631b9-6a2d-4b9c-89e7-65229b962429', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'Obiad'),
('1a99ce82-a5a3-415f-b37e-7fed0bb7259b', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'Jajecznica'),
('299c33bd-9347-4a4d-a194-0f7f0f8046ae', '96dae97a-314b-4ce3-8afb-892de9c1a34d', 'Pizza z biedry'),
('43eaaf1a-f2e8-11ec-81e8-48e7dad88f56', '0f62700a-1dc4-48dc-b809-b19b0e41d3dd', 'Chleb na jajku2'),
('6f331d72-673f-47c2-ac0a-b9c294837472', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'Lololo'),
('86a13e3a-6448-4c39-95e2-dc4ddea3bf77', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'xxx'),
('8dab8033-8fcb-4799-b376-e5e53d20f4bd', '96dae97a-314b-4ce3-8afb-892de9c1a34d', '[10.07.2022] Śniadanie'),
('b5f3a37c-3b09-4536-84dd-1461c7439f0e', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'obiad1'),
('b8301c03-dd79-4822-9e6e-40c46cb96587', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'Ryż'),
('e28abe78-fc78-4868-89ad-670bde1571c7', 'be9cbc92-d745-4302-bb17-24db5fab2b70', 'Ryż z kurczakiem');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `favourite_products`
--

CREATE TABLE `favourite_products` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `mealID` varchar(36) NOT NULL,
  `index` tinyint(4) NOT NULL DEFAULT 0,
  `name` varchar(70) NOT NULL,
  `proteins` float(4,1) NOT NULL,
  `carbohydrates` float(4,1) NOT NULL,
  `fats` float(4,1) NOT NULL,
  `calories` float(6,1) NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `favourite_products`
--

INSERT INTO `favourite_products` (`id`, `mealID`, `index`, `name`, `proteins`, `carbohydrates`, `fats`, `calories`, `amount`) VALUES
('062e2a70-c473-451a-a80f-bc8b971805bc', '8dab8033-8fcb-4799-b376-e5e53d20f4bd', 2, 'Szynka wieprzowa Piratki Lidl', 5.2, 0.4, 0.2, 24.8, 25),
('1e8d111d-d217-4cbd-9576-78bdf7cfda62', '096631b9-6a2d-4b9c-89e7-65229b962429', 2, 'Ryż basmati Kuchnia Lidla 100g', 4.5, 37.5, 0.6, 175.0, 50),
('302f0b5f-f501-4cc9-bd0a-764d58359957', 'b5f3a37c-3b09-4536-84dd-1461c7439f0e', 0, 'Jaja kurze (100g)', 12.5, 9.7, 0.6, 139.7, 100),
('31fbb704-7839-4c9b-8ddb-0a9176be2b33', '096631b9-6a2d-4b9c-89e7-65229b962429', 0, 'Kukurydza Gold Supersweet Corn Freshona 100g', 7.2, 36.3, 4.8, 228.0, 300),
('3de8a2e8-0c61-4439-9f82-9c1f755e206c', 'e28abe78-fc78-4868-89ad-670bde1571c7', 1, 'Kurczak', 88.0, 12.0, 20.0, 440.0, 400),
('4a20ecfd-e060-4863-908e-0782a43efb48', '299c33bd-9347-4a4d-a194-0f7f0f8046ae', 0, 'Pizza', 50.0, 100.0, 50.0, 1200.0, 100),
('5de8293a-3fe8-4097-87bf-b8cd43a6f4dc', 'b8301c03-dd79-4822-9e6e-40c46cb96587', 1, 'Ryż basmati Kuchnia Lidla 100g', 8.9, 75.0, 1.1, 350.0, 100),
('7022e517-60a1-4a27-b496-b39fcea03d37', '096631b9-6a2d-4b9c-89e7-65229b962429', 1, 'Jaja kurze (100g)', 12.5, 9.7, 0.6, 139.7, 100),
('72fad2d0-6ce6-4ecb-93bb-420dfc564a2c', '01bb7e61-e65c-48b9-bd64-42f5e12f7a78', 0, 'Wieśmak', 44.0, 60.0, 30.0, 1030.0, 200),
('7926f389-1f5c-48c6-a98a-b534211e81b9', '8dab8033-8fcb-4799-b376-e5e53d20f4bd', 0, 'Hummus paprykowy Vemondo', 1.8, 3.0, 5.4, 73.4, 34),
('908a2779-190e-4641-bbc9-fb5161743aea', 'e28abe78-fc78-4868-89ad-670bde1571c7', 0, 'Ryż', 8.0, 50.0, 5.0, 350.0, 100),
('9d2e7702-f2e9-11ec-81e8-48e7dad88f56', '43eaaf1a-f2e8-11ec-81e8-48e7dad88f56', 0, 'Kajzerka', 8.0, 70.0, 5.0, 170.0, 60),
('a785bae8-3bfb-4a9d-8248-2b8aaf9a26e9', 'b8301c03-dd79-4822-9e6e-40c46cb96587', 0, 'Ryż basmati Kuchnia Lidla 100g', 8.9, 75.0, 1.1, 350.0, 100),
('aa024e32-ffa1-4ecf-ad40-65403c8da3f1', '8dab8033-8fcb-4799-b376-e5e53d20f4bd', 1, 'Ser żółty gouda Pilos', 4.7, 0.0, 4.9, 62.5, 18),
('bea34924-e1fa-4a66-8201-d65ec5a66adb', 'b8301c03-dd79-4822-9e6e-40c46cb96587', 2, 'Ryż basmati Kuchnia Lidla 100g', 8.9, 75.0, 1.1, 350.0, 100),
('c269bfa2-f2e9-11ec-81e8-48e7dad88f56', '43eaaf1a-f2e8-11ec-81e8-48e7dad88f56', 1, 'Jajko', 15.0, 5.0, 17.0, 400.0, 210),
('dbc20f19-4e92-49dc-8d88-6bf26c76db5f', '8dab8033-8fcb-4799-b376-e5e53d20f4bd', 3, 'Bułka z czarnuszką LIDL', 6.0, 38.2, 2.2, 203.2, 75);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(70) NOT NULL,
  `proteins` float(4,1) NOT NULL DEFAULT 0.0,
  `carbohydrates` float(4,1) NOT NULL DEFAULT 0.0,
  `fats` float(4,1) NOT NULL DEFAULT 0.0,
  `calories` float NOT NULL DEFAULT 0,
  `amount` int(6) NOT NULL DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `products`
--

INSERT INTO `products` (`id`, `name`, `proteins`, `carbohydrates`, `fats`, `calories`, `amount`) VALUES
('01710577-b102-11ec-b265-48e7dad88f56', 'Bułka pszenna 100g LIDL', 8.1, 57.7, 1.5, 273, 100),
('17023951-02bb-11ed-9d72-48e7dad88f56', 'Serek wiejski wysokobiałkowy Piątnica 100g', 14.0, 2.4, 3.0, 93, 100),
('24ebae97-b101-11ec-b265-48e7dad88f56', 'Jaja kurze (100g)', 12.5, 9.7, 0.6, 139.7, 100),
('3b3f8502-02bb-11ed-9d72-48e7dad88f56', 'Twaróg półtłusty naturalny Pilos 100g', 17.0, 4.0, 4.0, 120, 100),
('3c7e2a28-02ba-11ed-9d72-48e7dad88f56', 'Czerwona fasolka Red Kidney Beans Freshona 100g', 6.6, 15.0, 1.0, 107, 100),
('5d62a4a1-02ba-11ed-9d72-48e7dad88f56', 'Kukurydza Gold Supersweet Corn Freshona 100g', 2.4, 12.1, 1.6, 76, 100),
('68afa47c-02bb-11ed-9d72-48e7dad88f56', 'Mozarella Lovilio 100g', 17.0, 2.0, 16.0, 220, 100),
('7382acff-02b8-11ed-9d72-48e7dad88f56', 'Parówki z filetem z indyka premium Pikok 100g', 14.0, 1.7, 18.0, 226, 100),
('8351c975-02ba-11ed-9d72-48e7dad88f56', 'Passata Solo Pomodoro Mutti 100g', 1.6, 5.1, 0.4, 36, 100),
('8a6b30f7-02bb-11ed-9d72-48e7dad88f56', 'Skyr jogurt pitny truskawka & kiwi Piątnica 100g', 6.5, 10.0, 1.5, 80, 100),
('98a78122-02b8-11ed-9d72-48e7dad88f56', 'Ser żółty Gouda Pilos 100g', 26.0, 0.0, 27.0, 347, 100),
('b4d61a02-02b8-11ed-9d72-48e7dad88f56', 'Szynka prosciutto cotto Dulano Selection 100g', 20.0, 2.0, 3.0, 115, 100),
('d18a09d2-02b8-11ed-9d72-48e7dad88f56', 'Mięso mielone z fileta z piersi indyka Rzeźnik Fit Life 100g', 22.0, 0.5, 2.0, 111, 100),
('d36afe6f-02bb-11ed-9d72-48e7dad88f56', 'Ryż basmati Kuchnia Lidla 100g', 8.9, 75.0, 1.1, 350, 100),
('f6f716a0-02ba-11ed-9d72-48e7dad88f56', 'Hummus z sosem pomidorowym Chef Select 100g', 6.8, 10.6, 18.9, 251, 100);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
('00f0cb0f-9ab3-45d4-9243-f4644170a508', 'sds', '$2b$10$frKByGrJ5gpQl3S9LRrUsea4uU2dQ66unjbnoIEsmAsBHqI8eVP2G'),
('0f62700a-1dc4-48dc-b809-b19b0e41d3dd', 'Admin', '$2b$10$.U3GHqQsyK0FONA6.xkw.uBGM/xozlB9yebReZTjWxb8Mk4VNtpK2'),
('3740b9cb-5da5-4dfe-aba8-f5ab1a877e10', 'Locagus12', '$2b$10$7M1YpVKe7spHQVf9BDWYvuGUm2kok73LxhWAfkAz.cz7DVOjIrej.'),
('3bbda4ac-dc41-4363-a47b-0a03bba5a3c4', '12345', '$2b$10$HgxoEndOdcbJyBd7bPWL3eJiL2Kv4IWQ8xoWVn6t3KAHAh/W.qh.u'),
('3e500a62-28c3-44dd-9413-147cfbeca087', 'Locagus1', '$2b$10$AtzXh2T9aebbrEkKFzxcA.dswELL9J7pa3U6/TCsQKSyucuTm8zGG'),
('48d3ba4f-0c2a-4222-b296-ad49baa0181b', 'qqwqw', '$2b$10$mKZfSJ6/uH5h3J8elqEpruYSCVW4UoeAdaYsFiDzvv1CSslKeOlRy'),
('77c78be2-dcf5-43bf-afcd-a879edfe26c2', 'Ania123', '$2b$10$y3MzfZvFOheh/Fxs/4TZKeTV/HTon.wAo4MgVg6JkiDNuhEqP5FZm'),
('7ebd6712-1e84-4da3-b224-31c804c3d402', 's12', '$2b$10$2O0OSOjFuzUFIZsAIoP7BuNxuzBK0eWYJ5M4OkjfPatztwEC7fQzi'),
('96dae97a-314b-4ce3-8afb-892de9c1a34d', 'Locagus', '$2b$10$.GZXUcZkpE4wRWtahTYqJ.y0rlefUnM02.L.qJSUN/Yc5mKQKk1lq'),
('bcb3315f-5676-410a-bd45-74b4c7b77f20', 's1', '$2b$10$cj5rCk5sH0zPHAXZhuGVeuxynwZ.Sr7w4kgzmweO9OOcyAjw9bujO'),
('be9cbc92-d745-4302-bb17-24db5fab2b70', 'mehul', '$2b$10$LrrgfvHbNKINkpeklb36J.t5kLc2eV87UlptR75FnS12yGJRwDKhu'),
('c5b7962b-54d3-4806-8b66-9daded70e7be', '123', '$2b$10$oGk0TpHVA8uEqLcTNPSvo.Xr9o5brW85.Yq/XvL/y46TGwyIzXOdK'),
('d4907c41-0271-4e00-b390-b9185bcdf1b4', 'KingHealer', '$2b$10$.3QH.Y6vwl5MNVoRTIje5eP9jgdPGgjf8rt5IaqOQFaM/96Ju2t06'),
('d9d09936-646f-4942-a3d5-0e6176eda077', 'Locagus153', '$2b$10$wv//g/rs258.S.5Tpz0YZOtGYoiMR4wUV/COUCFmP0HmMEE04ImSK');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `favourite_meals`
--
ALTER TABLE `favourite_meals`
  ADD PRIMARY KEY (`mealId`),
  ADD KEY `userId` (`userId`);

--
-- Indeksy dla tabeli `favourite_products`
--
ALTER TABLE `favourite_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `mealID` (`mealID`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `favourite_meals`
--
ALTER TABLE `favourite_meals`
  ADD CONSTRAINT `FK_favourite_meals_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `favourite_products`
--
ALTER TABLE `favourite_products`
  ADD CONSTRAINT `FK_favourite_products_favourite_meals` FOREIGN KEY (`mealID`) REFERENCES `favourite_meals` (`mealId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
