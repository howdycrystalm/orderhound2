INSERT INTO users (name, admin, photo, password, email)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;
