
/*change users to admins*/
SELECT * FROM users
WHERE email = $1
