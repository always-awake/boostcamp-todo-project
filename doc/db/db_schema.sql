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
  id VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  is_superuser TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (pk)
);

-- -----------------------------------------------------
-- Table `todo`.`PROJECTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`PROJECTS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  user_pk BIGINT(21) NOT NULL,
  is_public TINYINT NULL DEFAULT '1',
  task_lists_order VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (pk),
  FOREIGN KEY (user_pk)
  REFERENCES USERS(pk) ON UPDATE CASCADE ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `todo`.`TASK_LISTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`TASK_LISTS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  user_pk BIGINT(21) NOT NULL,
  project_pk BIGINT(21) NOT NULL,
  title VARCHAR(100) NOT NULL UNIQUE,
  tasks_order VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (pk),
  FOREIGN KEY (project_pk)
  REFERENCES PROJECTS(pk) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (user_pk)
  REFERENCES USERS(pk) ON UPDATE CASCADE ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `todo`.`TASKS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`TASKS` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  user_pk BIGINT(21) NOT NULL,
  task_list_pk BIGINT(21) NOT NULL,
  content VARCHAR(1500) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (pk),
  FOREIGN KEY (user_pk)
  REFERENCES USERS(pk) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (task_list_pk)
  REFERENCES TASK_LISTS(pk) ON UPDATE CASCADE ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `todo`.`USERS_has_PROJECTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`USERS_has_PROJECTS` (
  user_pk BIGINT(21) NOT NULL,
  project_pk BIGINT(21) NOT NULL,
  auth ENUM('ONLY_READ', 'EDITABLE') NOT NULL,
  PRIMARY KEY (user_pk, project_pk)
);

-- -----------------------------------------------------
-- Table `todo`.`ACTIVITIES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todo`.`ACTIVITIES` (
  pk BIGINT(21) NOT NULL AUTO_INCREMENT,
  user_pk BIGINT(21) NOT NULL,
  project_pk BIGINT(21) NOT NULL,
  content VARCHAR(300) NOT NULL,
  type ENUM('ADD', 'REMOVE', 'UPDATE', 'MOVE') NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (pk),
  FOREIGN KEY (user_pk)
  REFERENCES USERS(pk) ON UPDATE CASCADE ON DELETE NO ACTION,
  FOREIGN KEY (project_pk)
  REFERENCES PROJECTS(pk) ON UPDATE CASCADE ON DELETE NO ACTION
);
