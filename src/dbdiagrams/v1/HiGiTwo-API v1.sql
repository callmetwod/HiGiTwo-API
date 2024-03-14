CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(20),
  `email` varchar(50),
  `password` varchar(50),
  `admin` boolean,
  `created_at` date
);

CREATE TABLE `userlist` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `users_id` integer
);

CREATE TABLE `status` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `status_name` varchar(20),
  `status_description` varchar(50),
  `created_at` date
);

CREATE TABLE `gametags` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `tag_name` varchar(20),
  `tag_description` text,
  `created_at` date
);

CREATE TABLE `games` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `game_name` varchar(50),
  `game_description` text,
  `game_tags` int,
  `release_date` date,
  `last_update` date,
  `developer` varchar(50),
  `publisher` varchar(50),
  `status` int,
  `star` boolean,
  `created_at` date
);

CREATE TABLE `gamelist` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `gamelist_name` varchar(20),
  `gamelist_description` varchar(50),
  `games_id` int,
  `userlist_id` int,
  `created_by` int,
  `created_at` date
);

CREATE TABLE `users_userlist` (
  `users_id` integer,
  `userlist_users_id` integer,
  PRIMARY KEY (`users_id`, `userlist_users_id`)
);

ALTER TABLE `users_userlist` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `users_userlist` ADD FOREIGN KEY (`userlist_users_id`) REFERENCES `userlist` (`users_id`);


CREATE TABLE `gametags_games` (
  `gametags_id` integer,
  `games_game_tags` int,
  PRIMARY KEY (`gametags_id`, `games_game_tags`)
);

ALTER TABLE `gametags_games` ADD FOREIGN KEY (`gametags_id`) REFERENCES `gametags` (`id`);

ALTER TABLE `gametags_games` ADD FOREIGN KEY (`games_game_tags`) REFERENCES `games` (`game_tags`);


ALTER TABLE `games` ADD FOREIGN KEY (`status`) REFERENCES `status` (`id`);

CREATE TABLE `games_gamelist` (
  `games_id` integer,
  `gamelist_games_id` int,
  PRIMARY KEY (`games_id`, `gamelist_games_id`)
);

ALTER TABLE `games_gamelist` ADD FOREIGN KEY (`games_id`) REFERENCES `games` (`id`);

ALTER TABLE `games_gamelist` ADD FOREIGN KEY (`gamelist_games_id`) REFERENCES `gamelist` (`games_id`);

