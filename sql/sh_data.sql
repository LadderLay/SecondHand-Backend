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

update products set product_price = 13, product_describe = "999新" 
where product_name = "社会学的邀请"

update products set product_price = 12, product_describe = "大甩卖啊啊啊啊" 
where product_name = "民俗学"

update products set product_price = 10, product_describe = "一本工具书？？" 
where product_name = "认知天性"

insert into cartlists(user_id, product_id)
values(2018214877, 2);