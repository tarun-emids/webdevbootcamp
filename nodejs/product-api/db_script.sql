create table `product_db`.`product` (
	id int auto_increment primary key,
    name varchar(100) not null,
    price decimal(10, 2) not null,
    description text,
    created_at timestamp default current_timestamp
);
