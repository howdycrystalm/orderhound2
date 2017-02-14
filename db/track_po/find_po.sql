SELECT * FROM in_production
WHERE po_num = $1
ORDER BY date DESC;
