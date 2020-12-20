insert into users(user_id, user_name, user_password)
values(2018214877, "Wendy", "877"),
(2018214878, "liao", "878"),
(2018214875, "xf", "875")
;

insert into products(product_id, product_name, product_seller)
values(1, "社会学的邀请", 2018214877),
(2, "认知天性", 2018214878),
(3, "民俗学", 2018214875);

insert into buylists(user_id, product_id)
values(2018214877, 2);

insert into cartlists(user_id, product_id)
values(2018214877, 3);

insert into comments(product_id, user_id, comment_detail)
values(2, 2018214875, "hly receve comments from 875"),
(3, 2018214877, "hly comments 875");

insert into admins(admin_id, admin_password)
values(2018, "2018test");
