insert into users(user_id, user_name, user_password)
values(2018214877, "Wendy", "877"),
(2018214878, "liao", "878"),
(2018214875, "xf", "875"),
(2018214870,"可爱多","123456"),
(2022214601,"小测","123456")
;

insert into products( product_name, product_seller)
values("社会学的邀请", 2018214877),
( "认知天性", 2018214878),
("民俗学", 2018214875);

insert into buylists(user_id, product_id)
values(2018214877, 2);

insert into cartlists(user_id, product_id)
values(2018214877, 3);

insert into comments(product_id, user_id, comment_detail)
values(2, 2018214875, "878 receve comments from 875"),
      (3, 2018214877, "hly comments 875"),
      (1, 2018214875, "hly receive comments from 875");

insert into admins(admin_id, admin_password)
values(2018, "2018test");

insert into products(product_name,product_class,product_pic,product_describe,product_price,product_seller)
values("冀西南林路行","其他","https://img9.doubanio.com/view/subject/m/public/s29629026.jpg","手滑买多了！年度最佳不要错过！",15,2018214870);

INSERT INTO products(product_name,product_class,product_describe,product_detail,product_state,product_price,product_time,product_seller,product_pic)
VALUES('日语N2蓝宝书','书籍','七成新','可附送配套练习册！急急急出！',1,'10','2021-01-14 12:07:30','2018214870','https://lh3.googleusercontent.com/proxy/Hbwgg-j71V5llEVAVI9_qQufUC979v4B2wNWncSHCZGpt1i8hERpOHN1PDLS3nNaGvqNRwMgACd7JYYu5krTLrGx2QaBALHTSsNuHA');

update products set product_price = 13, product_describe = "999新" 
where product_name = "社会学的邀请";

update products set product_price = 12, product_describe = "大甩卖啊啊啊啊" 
where product_name = "民俗学";

update products set product_price = 10, product_describe = "一本工具书？？" 
where product_name = "认知天性";

insert into cartlists(user_id, product_id)
values(2018214877, 2);

-- update products 
-- set product_pic = load_file('/Users/mac/Desktop/SecondHand-Backend/src/tmp/people.JPG') 
-- where product_name = "民俗学";

-- update products 
-- set product_pic = load_file('/Users/mac/Desktop/SecondHand-Backend/src/tmp/renzhi.JPG') 
-- where product_name = "认知天性";

-- update products 
-- set product_pic = load_file('/Users/mac/Desktop/SecondHand-Backend/src/tmp/social.JPG') 
-- where product_name = "社会学的邀请";

insert into buylists(user_id, product_id)
values(2018214875, 1);

update products set product_state = 0
where product_seller = 2018214877;