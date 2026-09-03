CREATE USER 'appuser'@'%' IDENTIFIED BY 'MyPassword123';

GRANT ALL PRIVILEGES ON product_db.* TO 'appuser'@'%';

FLUSH PRIVILEGES;