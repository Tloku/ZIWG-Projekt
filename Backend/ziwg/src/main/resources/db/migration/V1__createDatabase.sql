CREATE TABLE category (
                          id   SERIAL NOT NULL,
                          name varchar(255),
                          PRIMARY KEY (id));
CREATE TABLE customer (
                          id           SERIAL NOT NULL,
                          login        varchar(255),
                          phone_number varchar(11),
                          email        varchar(255) UNIQUE,
                          password     varchar(255),
                          city         varchar(255),
                          country      varchar(255),
                          address      varchar(255),
                          PRIMARY KEY (id));
CREATE TABLE product_image (
                       id         SERIAL NOT NULL,
                       name       varchar(255),
                       image_data bytea,
                       PRIMARY KEY (id));
CREATE TABLE customer_order (
                         id              SERIAL NOT NULL,
                         order_date       date,
                         price           varchar(255),
                         Customerid      int4 NOT NULL,
                         additional_info varchar(255),
                         PRIMARY KEY (id));
CREATE TABLE product (
                         id                                 SERIAL NOT NULL,
                         name                               varchar(255),
                         weight                             int4,
                         length                             int4,
                         width                              int4,
                         full_length                         int4,
                         lure_max_weight                    int4,
                         price                              varchar(255),
                         type                               varchar(255),
                         number_of_sections                 int4,
                         is_on_discount                     boolean,
                         discount                           int4,
                         number_of_bearings                 int4,
                         reel_ratio                         varchar(255),
                         spool_capacity                     int4,
                         line_length                        int4,
                         line_diameter                      int4,
                         line_durability                    int4,
                         float_type                         varchar(255),
                         hook_size                          int4,
                         hook_type                          varchar(255),
                         number_of_hooks_in_package         int4,
                         manufacturer                       varchar(255),
                         bait_purpose                       varchar(255),
                         landing_net_depth                  int4,
                         height                             int4,
                         landing_net_length_after_unfolding int4,
                         Imageid                            int4 NOT NULL,
                         Categoryid                         int4 NOT NULL,
                         PRIMARY KEY (id));
CREATE TABLE product_quantity (
                                  id        SERIAL NOT NULL,
                                  quantity  int4,
                                  Productid int4 NOT NULL,
                                  Orderid   int4 NOT NULL,
                                  PRIMARY KEY (id));
ALTER TABLE product ADD CONSTRAINT FKProduct563902 FOREIGN KEY (Imageid) REFERENCES product_image (id);
ALTER TABLE product ADD CONSTRAINT FKProduct367954 FOREIGN KEY (Categoryid) REFERENCES category (id);
ALTER TABLE product_quantity ADD CONSTRAINT FKProduct_Qu778262 FOREIGN KEY (Productid) REFERENCES product (id);
ALTER TABLE customer_order ADD CONSTRAINT FKOrder558759 FOREIGN KEY (Customerid) REFERENCES customer (id);
ALTER TABLE product_quantity ADD CONSTRAINT FKProduct_Qu871616 FOREIGN KEY (Orderid) REFERENCES customer_order (id);


-- ALTER TABLE Product DROP CONSTRAINT FKProduct563902;
-- ALTER TABLE Product DROP CONSTRAINT FKProduct367954;
-- ALTER TABLE Product_Quantity DROP CONSTRAINT FKProduct_Qu778262;
-- ALTER TABLE "Order" DROP CONSTRAINT FKOrder558759;
-- ALTER TABLE Product_Quantity DROP CONSTRAINT FKProduct_Qu871616;
-- DROP TABLE IF EXISTS Category CASCADE;
-- DROP TABLE IF EXISTS Customer CASCADE;
-- DROP TABLE IF EXISTS Image CASCADE;
-- DROP TABLE IF EXISTS "Order" CASCADE;
-- DROP TABLE IF EXISTS Product CASCADE;
-- DROP TABLE IF EXISTS Product_Quantity CASCADE;
