INSERT INTO users (name, admin, checkpoint, photo, password, email)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;
