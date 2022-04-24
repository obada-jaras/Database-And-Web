drop database StoreSystem;


CREATE DATABASE StoreSystem;
USE StoreSystem;



#CREATE TABLES
CREATE TABLE SystemUsers (
	Username VARCHAR(25),
    uPassword VARCHAR(42) NOT NULL,
    uName VARCHAR(24),
    
    PRIMARY KEY (Username)
);






CREATE TABLE Customer (
	ID BIGINT AUTO_INCREMENT,
    cName VARCHAR(32),
    PhoneNumber BIGINT,
    DateOfAdding DATE DEFAULT (now()),
    Address VARCHAR(128),
    
    PRIMARY KEY (ID)
);
ALTER TABLE Customer AUTO_INCREMENT = 10000;




CREATE TABLE Employee (
	ID INT AUTO_INCREMENT,
    eName VARCHAR(32) NOT NULL,
    SSN BIGINT NOT NULL UNIQUE,
    Phone BIGINT NOT NULL,
    Salary REAL NOT NULL,
    StartDate DATE DEFAULT (now()),
    EndDate DATE,
    Address VARCHAR(128),
    
	PRIMARY KEY (ID)
);



CREATE TABLE EmployeeUsers (
	eID INT,
    uPassword VARCHAR(42) NOT NULL,
    
    PRIMARY KEY (eID, uPassword),
    FOREIGN KEY (eID) REFERENCES Employee(ID)
			ON UPDATE CASCADE ON DELETE CASCADE
);



CREATE TABLE ItemType (
	ID INT AUTO_INCREMENT,
    tName VARCHAR(40) NOT NULL unique,
    tDescription VARCHAR(256),
    
    PRIMARY KEY (ID)
);
ALTER TABLE ItemType AUTO_INCREMENT = 10;










CREATE TABLE Supplier (
	ID INT AUTO_INCREMENT,
    sName VARCHAR(32) NOT NULL,
    Phone BIGINT NOT NULL,
    Website VARCHAR(512),
    DateOfAdding DATE DEFAULT (now()),
    MoreInfo VARCHAR(128),
    Address VARCHAR(128),
	
    UNIQUE (sName, Phone, Website, Address),
	PRIMARY KEY (ID)
);
ALTER TABLE Supplier AUTO_INCREMENT = 100;



CREATE TABLE Item (
	ID BIGINT AUTO_INCREMENT,
    ModelNumber VARCHAR(32),
    PurchasePrice REAL NOT NULL,
    SellingPrice REAL,
    DateOfAdding DATE DEFAULT (now()),
	iDescription VARCHAR(128),
	Size VARCHAR(8) NOT NULL,
    Quantity INT NOT NULL,
    SupplierID INT,
    Color VARCHAR(16),
    ItemType INT NOT NULL,
    
    PRIMARY KEY (ID),
    UNIQUE (ModelNumber, Size, Color),
	FOREIGN KEY (ItemType) REFERENCES ItemType(ID)
			ON UPDATE CASCADE,
	FOREIGN KEY (SupplierID) REFERENCES Supplier(ID)
			ON UPDATE CASCADE ON DELETE SET NULL
);
ALTER TABLE Item AUTO_INCREMENT = 100000;








CREATE TABLE Supplier_Type (
	sID INT NOT NULL,
    tID INT NOT NULL,
    
    CONSTRAINT SupTypKEY PRIMARY KEY (sID, tID)
);


CREATE TABLE Orders (
	ID BIGINT AUTO_INCREMENT,
    DateAndTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    cID BIGINT,
    eID INT,
    
    PRIMARY KEY (ID),
	FOREIGN KEY (cID) REFERENCES Customer(ID)
			ON UPDATE CASCADE ON DELETE SET NULL,
	FOREIGN KEY (eID) REFERENCES Employee(ID)
			ON UPDATE CASCADE ON DELETE SET NULL
);
ALTER TABLE Orders AUTO_INCREMENT = 100000;



CREATE TABLE OrderDetails (
	oID BIGINT,
	iID BIGINT,
    Price REAL NOT NULL,
    Quantity INT NOT NULL,
    
	CONSTRAINT OrderDetailsKEY PRIMARY KEY (oID, iID),
    FOREIGN KEY (oID) REFERENCES Orders(ID)
			ON UPDATE CASCADE,
	FOREIGN KEY (iID) REFERENCES Item(ID)
			ON UPDATE CASCADE
);
ALTER TABLE OrderDetails AUTO_INCREMENT = 100000;