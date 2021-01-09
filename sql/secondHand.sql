create database secondHand;

use secondHand;

create table users
(
    user_id int NOT NULL,
    user_name char(50) NOT NULL,
    user_password char(50) NOT NULL,
    primary key (user_id)
);

create table admins
(
    admin_id int NOT NULL,
    admin_password char(50) NOT NULL,
    primary key (admin_id)
);

create table products
(
    product_id int not null primary key AUTO_INCREMENT,
    product_name char(50) not null,
    product_class char(50) null,
    product_pic char(255) null,
    product_describe char(255) null,
    product_detail char(255) null,
    product_state int not null default 1,
    product_price int null,
    product_time timestamp  null ,
    product_seller int not null,
    FOREIGN KEY (product_seller)
    REFERENCES users(user_id)
);

create table buylists
(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    user_id int not null ,
    product_id int not null
);

create table cartlists
(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    user_id int not null ,
    product_id int not null
);

create table comments 
(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    product_id int not null ,
    user_id int not null ,
    comment_detail char(255) null,
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
);

