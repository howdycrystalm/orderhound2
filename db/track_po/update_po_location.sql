/*current user/employee is updating the location by adding the po*/

UPDATE in_production
SET date = $1
WHERE po_num = $2
AND checkpoint_id = $3
AND employee_photo = $4;
