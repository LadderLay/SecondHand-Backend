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
    product_id int not null,
    product_name char(50) not null,
    product_class char(50) null,
    product_pic char(255) null,
    product_describe char(255) null,
    product_state boolean not null default 1,
    product_price int null,
    product_time timestamp  null ,
    product_seller int not null,
    PRIMARY KEY (product_id),
    FOREIGN KEY (product_seller)
    REFERENCES users(user_id)
    
);

create table buylists
(
    user_id int not null primary key,
    product_id int not null
);

create table cartlists
(
    user_id int not null PRIMARY KEY,
    product_id int not null
);

create table comments 
(
    product_id int not null PRIMARY KEY,
    user_id int not null ,
    comment_detail char(255) null,
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
);

