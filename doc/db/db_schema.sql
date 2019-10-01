-- -----------------------------------------------------
-- Schema todo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS todo DEFAULT CHARACTER SET utf8 ;
USE todo ;

-- -----------------------------------------------------
-- Table `todo`.`USERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`USERS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  id VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  is_superuser TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (pk)
);

-- -----------------------------------------------------
-- Table `todo`.`BOARDS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`BOARDS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  creator BIGINT(21) NOT NULL,
  is_public TINYINT NULL DEFAULT '1',
  lists_order VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (pk),
  FOREIGN KEY (creator)
  REFERENCES USERS(pk)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `todo`.`LISTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`LISTS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  creator BIGINT(21) NOT NULL,
  board BIGINT(21) NOT NULL,
  title VARCHAR(100) NOT NULL,
  tasks_order VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (pk),
  FOREIGN KEY (board)
  REFERENCES BOARDS(pk) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (creator)
  REFERENCES USERS(pk) ON UPDATE CASCADE ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `todo`.`TASKS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`TASKS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  creator BIGINT(21) NOT NULL,
  list BIGINT(21) NOT NULL,
  content VARCHAR(1500) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (pk),
  FOREIGN KEY (creator)
  REFERENCES USERS(pk) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (list)
  REFERENCES LISTS(pk) ON UPDATE CASCADE ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `todo`.`USERS_has_BOARD`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`USERS_has_BOARD` (
  user_pk BIGINT(21) NOT NULL,
  board_pk BIGINT(21) NOT NULL,
  auth ENUM('ONLY_READ', 'EDITABLE') NOT NULL,
  PRIMARY KEY (user_pk, board_pk)
);


