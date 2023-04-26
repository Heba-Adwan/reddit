BEGIN;

INSERT INTO 
users (username, password, email)
VALUES(
  'admin',
  '$dj33jjkhkhdgk54646*jkjd.ljsfjkjkhdnjghj',
  'admin@gmail.com'
),
(
  'user',
  '$dj23jjkhkhdgk54646*jkjd.ljsfjkjkhdnjghf',
  'user@gmail.com'
);

COMMIT;





BEGIN;

INSERT INTO 
posts( title,content, user_id)
VALUES(
  'Build a website',
  'lorem ipsum dolor sit amet, elit',
  1
),
(
  'Build a website adobe',
  'lorem ipsum dolor sit amet, elit',
  2
);

COMMIT;






BEGIN;

INSERT INTO
comments(message, user_id, post_id)
VALUES
( 'Comment 1 is here', 1, 1),( 'Comment 2 is here', 1, 1),( 'Comment 3 is here', 2, 2),( 'Comment 4 is here', 2, 2);

COMMIT;


