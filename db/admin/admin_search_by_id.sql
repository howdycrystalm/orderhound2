/*change users to admins*/

SELECT * FROM users
WHERE id = $1
