INSERT INTO users (name, company, admin, email, checkpoint, photo, password )
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;
