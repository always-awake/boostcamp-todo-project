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
-- Init `todo`.`PROJECTS`
-- -----------------------------------------------------
INSERT INTO PROJECTS(user_pk)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1)
);

INSERT INTO PROJECTS(user_pk)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 2)
);

INSERT INTO PROJECTS(user_pk)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 3)
);

INSERT INTO PROJECTS(user_pk, is_public)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    0
);
INSERT INTO USERS_has_PROJECTS(user_pk, project_pk, auth)
VALUE(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM PROJECTS WHERE pk = 4),
    'OWNER'
);

-- -----------------------------------------------------
-- Init `todo`.`TASK_LISTS`
-- -----------------------------------------------------
INSERT INTO TASK_LISTS(user_pk, project_pk, title, seq)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM PROJECTS WHERE pk = 1),
    '할 일',
    1
);
UPDATE PROJECTS SET task_list_count = task_list_count + 1 WHERE pk = 1;

INSERT INTO TASK_LISTS(user_pk, project_pk, title, seq)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM PROJECTS WHERE pk = 1),
    '하는 중',
    2
);
UPDATE PROJECTS SET task_list_count = task_list_count + 1 WHERE pk = 1;

INSERT INTO TASK_LISTS(user_pk, project_pk, title, seq)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM PROJECTS WHERE pk = 1),
    '다 함',
    3
);
UPDATE PROJECTS SET task_list_count = task_list_count + 1 WHERE pk = 1;

-- -----------------------------------------------------
-- Init `todo`.`TASKS`
-- -----------------------------------------------------
INSERT INTO TASKS(user_pk, task_list_pk, content, seq)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM TASK_LISTS WHERE pk = 1),
    '자바스크립트 공부하기',
    1
);
UPDATE TASK_LISTS SET task_count = task_count + 1 WHERE pk = 1;

INSERT INTO TASKS(user_pk, task_list_pk, content, seq)
VALUES(
    (SELECT pk FROM USERS WHERE pk = 1),
    (SELECT pk FROM TASK_LISTS WHERE pk = 1),
    '파이썬 공부하기',
    2
);
UPDATE TASK_LISTS SET task_count = task_count + 1 WHERE pk = 1;
