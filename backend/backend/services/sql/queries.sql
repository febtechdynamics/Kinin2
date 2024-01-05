-- table category which is injected from table product  

CREATE TABLE IF NOT EXISTS `category` (
   `category_id` int(11) NOT NULL AUTO_INCREMENT,
   `category_name` VARCHAR(255),
   PRIMARY KEY (category_id)
) ENGINE=InnoDB;


--   table user 
CREATE TABLE IF NOT EXISTS `user` (
   `user_id` int(11) NOT NULL AUTO_INCREMENT ,
   `user_email` VARCHAR(255),
   `active_user` VARCHAR(255),
   `created_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (user_id),
   UNIQUE (user_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `user_info` (
   `user_info_id` int(11) NOT NULL AUTO_INCREMENT,
   `user_id` int(11) NOT NULL,
   `user_first_name` VARCHAR(255),
   `user_last_name` VARCHAR(255),
   `user_phone_number_1` VARCHAR(255),
   `user_phone_number_2` VARCHAR(255),
   `registered_by` VARCHAR(255),
   `updated_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `updated_by` VARCHAR(255),
   PRIMARY KEY (user_info_id),
   FOREIGN KEY (user_id) REFERENCES user(user_id) 
) ENGINE=InnoDB;

    -- users role  tables 
CREATE TABLE IF NOT EXISTS `roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  PRIMARY KEY (role_id),
  UNIQUE (role_name)
) ENGINE=InnoDB;

--  table user_role 
CREATE TABLE IF NOT EXISTS `user_role` (
   `user_role_id` int(11) NOT NULL AUTO_INCREMENT,
   `user_id` int(11) NOT NULL,
   `role_id` int(11) NOT NULL,
   PRIMARY KEY (user_role_id),
   FOREIGN KEY (user_id) REFERENCES user(user_id),
   FOREIGN KEY (role_id) REFERENCES roles(role_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `user_password` (
  `user_pass_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_password_hashed` varchar(255) NOT NULL,
  PRIMARY KEY (user_pass_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
) ENGINE=InnoDB;

-- table Pharmacy_Information 
CREATE TABLE IF NOT EXISTS `pharmacy_` (
   `pharmacy_id` int(11) NOT NULL AUTO_INCREMENT,
   `user_id` int(11) NOT NULL,
   `pharmacist_license` VARCHAR(255),
   `pharmacy_name` VARCHAR(255),
   `pharmacy_Address_Sub_city` VARCHAR(255),
   `Pharmacy_Address_District` VARCHAR(255),
   `Hours_Of_Operation` VARCHAR(255),
   PRIMARY KEY (pharmacy_id),
   UNIQUE (pharmacist_license),
   FOREIGN KEY (user_id) REFERENCES user(user_id)
) ENGINE=InnoDB;

-- table login instade of authentication

CREATE TABLE IF NOT EXISTS `login` (
   `login_id` int(11) NOT NULL AUTO_INCREMENT,
   `email` VARCHAR(255),
   `password` VARCHAR(255),
   PRIMARY KEY (login_id),
   UNIQUE (email)
) ENGINE=InnoDB;


  -- table product

CREATE TABLE IF NOT EXISTS `product` (
   `product_id` int(11) NOT NULL AUTO_INCREMENT,
   `pharmacy_id` int(11) NOT NULL,
   `category_id` int(11) NOT NULL,
   `product_generic_name` VARCHAR(255),
   `product_brand_name` VARCHAR(255),
   PRIMARY KEY (product_id),
   UNIQUE (product_generic_name),
   FOREIGN KEY (pharmacy_id) REFERENCES pharmacy_(pharmacy_id),
   FOREIGN KEY (category_id) REFERENCES category(category_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `product_information`(
   `product_info_id` int(11) NOT NULL AUTO_INCREMENT,
   `product_id` int(11) NOT NULL, 
   `product_price` VARCHAR(255),
   `product_description` TEXT,
   `manufactured_by` VARCHAR(255),
   `country_of_origin` VARCHAR(255),
   `expired_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (product_info_id),
   FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB;

   -- table User_Searches 

CREATE TABLE IF NOT EXISTS `user_searches` (
   `search_id` int(11) NOT NULL AUTO_INCREMENT,
   `product_id` int(11) NOT NULL,
   `search_time_stamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (search_id),
   FOREIGN KEY (product_id) REFERENCES product (product_id)
) ENGINE=InnoDB;

      --  table Catalog 
CREATE TABLE IF NOT EXISTS `catalog` (
   `catalog_id` int(11) NOT NULL AUTO_INCREMENT,
   `product_image` LONGBLOB,
   `product_name` VARCHAR(255),
   `product_description` TEXT,
   PRIMARY KEY (catalog_id)
) ENGINE=InnoDB;




-- ===table supplier=======
CREATE TABLE IF NOT EXISTS `supplier`(
`supplier_id` int(11) NOT NULL AUTO_INCREMENT,
`user_id` int(11) NOT NULL,
`supplier_license` VARCHAR(255),
`supplier_company_name` VARCHAR(255),
`supplier_district` VARCHAR(255),
`supplier_sub_city` VARCHAR(255),
PRIMARY KEY (supplier_id),
UNIQUE(supplier_license),
FOREIGN KEY (user_id) REFERENCES user (user_id)
)ENGINE=InnoDB;



-- Creating the Order table
CREATE TABLE IF NOT EXISTS `product_order_table` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `pharmacy_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `product_name` VARCHAR(255),
  `order_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` VARCHAR(255),
  PRIMARY KEY (order_id),
  FOREIGN KEY(category_id) REFERENCES category(category_id),
  FOREIGN KEY (pharmacy_id) REFERENCES pharmacy_(pharmacy_id),
  FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id)
)ENGINE=InnoDB;


-- Add the roles to the database 

INSERT INTO `roles` (role_name)
VALUES ('Admin'), ('Agent'), ('Pharmacist'), ('Supplier'); 



-- =========status query=========

DELETE FROM product_information WHERE product_id = 1;
DELETE FROM product WHERE product_id = 1;