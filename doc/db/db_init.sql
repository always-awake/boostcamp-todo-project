-- -----------------------------------------------------
-- Init `todo`.`USERS`
-- -----------------------------------------------------
INSERT INTO USERS(id, password, name, is_superuser)
VALUES('user1', 'admin12345', 'user1', True);

INSERT INTO USERS(id, password, name, is_superuser)
VALUES('user2', 'admin12345', 'user2', False);

INSERT INTO USERS(id, password, name, is_superuser)
VALUES('user3', 'admin12345', 'user3', False);

-- -----------------------------------------------------
-- Init `todo`.`BOARDS`
-- -----------------------------------------------------
INSERT INTO BOARDS(creator)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1)
);

INSERT INTO BOARDS(creator)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 2)
);

INSERT INTO BOARDS(creator)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 3)
);

-- -----------------------------------------------------
-- Init `todo`.`LISTS`
-- -----------------------------------------------------
INSERT INTO LISTS(creator, board, title)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM BOARDS WHERE pk = 1),
    '할 일'
);
UPDATE BOARDS SET lists_order = '1' WHERE pk = 1;

INSERT INTO LISTS(creator, board, title)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM BOARDS WHERE pk = 1),
    '하는 중'
);
UPDATE BOARDS SET lists_order = '1,2' WHERE pk = 1;

INSERT INTO LISTS(creator, board, title)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM BOARDS WHERE pk = 1),
    '다 함'
);
UPDATE BOARDS SET lists_order = '1,2,3' WHERE pk = 1;

-- -----------------------------------------------------
-- Init `todo`.`TASKS`
-- -----------------------------------------------------
INSERT INTO TASKS(creator, list, content)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM LISTS WHERE pk = 2),
    '자바스크립트 공부하기'
);
UPDATE LISTS SET tasks_order = '1' WHERE pk = 1;

INSERT INTO TASKS(creator, list, content)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM LISTS WHERE pk = 2),
    '파이썬 공부하기'
);
UPDATE LISTS SET tasks_order = '1,2' WHERE pk = 1;
