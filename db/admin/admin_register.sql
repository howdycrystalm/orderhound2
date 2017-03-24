/*registers admins*/
/*note: to prevent admin's checkpoint autofilling NULL, add 'constant: Admin' to checkpoint column in sql table*/
INSERT INTO users2 (name, email, password, photo, admin, company)
VALUES ($1, $2, $3, $4, $5, $6);
