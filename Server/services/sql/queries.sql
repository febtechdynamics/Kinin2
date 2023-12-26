    
--   table user 
CREATE TABLE IF NOT EXISTS `User` (
   `User_ID` int(11) NOT NULL AUTO_INCREMENT ,
   `User_First_Name` VARCHAR(255),
   `User_Last_Name` VARCHAR(255),
   `User_Phone_Number_1` VARCHAR(255),
   `User_Phone_Number_2` VARCHAR(255),
   `User_Email` VARCHAR(255),
   PRIMARY KEY (User_ID),
   UNIQUE (User_Email)
) ENGINE=InnoDB;

--  table user_role 
CREATE TABLE IF NOT EXISTS `user_role` (
   `User_Role_ID` int(11) NOT NULL AUTO_INCREMENT,
   `User_ID` int(11) NOT NULL,
   `IsActive` int(11) NOT NULL,
   `Created_At` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `Updated_At` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `Registered_By` VARCHAR(255),
   `Updated_By` VARCHAR(255),
   PRIMARY KEY (User_Role_ID),
   FOREIGN KEY (User_ID) REFERENCES User(User_ID)
) ENGINE=InnoDB;

-- table Pharmacy_Information 
CREATE TABLE IF NOT EXISTS `Pharmacy_Information` (
   `Pharmacy_ID` int(11) NOT NULL AUTO_INCREMENT,
   `User_ID` int(11) NOT NULL,
   `Pharmacy_Name` VARCHAR(255),
   `Pharmacy_Address_Sub_city` VARCHAR(255),
   `Pharmacy_Address_District` VARCHAR(255),
   `Hours_Of_Operation` VARCHAR(255),
   PRIMARY KEY (Pharmacy_ID),
   FOREIGN KEY (User_ID) REFERENCES User(User_ID)
) ENGINE=InnoDB;

-- table login instade of authentication

CREATE TABLE IF NOT EXISTS `Login` (
   `Login_ID` int(11) NOT NULL AUTO_INCREMENT,
   `Email` VARCHAR(255),
   `Password` VARCHAR(255),
   PRIMARY KEY (Login_ID),
   UNIQUE (Email)
) ENGINE=InnoDB;

-- table category which is injected from table product  

CREATE TABLE IF NOT EXISTS `Category` (
   `Category_ID` int(11) NOT NULL AUTO_INCREMENT,
   `CategoryName` VARCHAR(255),
   PRIMARY KEY (Category_ID)
) ENGINE=InnoDB;

  -- table product

CREATE TABLE IF NOT EXISTS `Product` (
   `Product_ID` int(11) NOT NULL AUTO_INCREMENT,
   `Pharmacy_ID` int(11) NOT NULL,
   `Category_ID` int(11) NOT NULL,
   `Product_Generic_Name` VARCHAR(255),
   `Product_Brand_Name` VARCHAR(255),
   `Product_Price` VARCHAR(255),
   `Product_Description` TEXT,
   `Manufactured_By` VARCHAR(255),
   `Country_Of_Origin` VARCHAR(255),
   `Expiry_Date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (Product_ID),
   FOREIGN KEY (Pharmacy_ID) REFERENCES Pharmacy_Information (Pharmacy_ID),
   FOREIGN KEY (Category_ID) REFERENCES Category(Category_ID)
) ENGINE=InnoDB;

   -- table User_Searches 

CREATE TABLE IF NOT EXISTS `User_Searches` (
   `Search_ID` int(11) NOT NULL AUTO_INCREMENT,
   `Product_ID` int(11) NOT NULL,
   `Search_Time_stamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (Search_ID),
   FOREIGN KEY (Product_ID) REFERENCES Product (Product_ID)
) ENGINE=InnoDB;

      --  table Catalog 
CREATE TABLE IF NOT EXISTS `Catalog` (
   `Catalog_ID` int(11) NOT NULL AUTO_INCREMENT,
   `Product_Image` LONGBLOB,
   `Product_Name` VARCHAR(255),
   `Product_Description` TEXT,
   PRIMARY KEY (Catalog_ID)
) ENGINE=InnoDB;