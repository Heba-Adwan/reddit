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
posts(title, content, image, user_id)
VALUES(
  'Build a website',
  'lorem ipsum dolor sit amet, elit',
  '/images/image_1',
  1
),
(
  'Build a website adobe',
  'lorem ipsum dolor sit amet, elit',
  '/images/image_2',
  2
);

COMMIT;






BEGIN;

INSERT INTO
comments(content, user_id, post_id)
VALUES
( 'Comment 1', 1, 1),( 'Comment 2', 1, 1),( 'Comment 3', 2, 2),( 'Comment 4', 2, 2);

COMMIT;
