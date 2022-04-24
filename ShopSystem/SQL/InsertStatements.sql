#Insert System Users
INSERT INTO SystemUsers(Username, uPassword) VALUES ('admin', 'admin'), ('root', '1234'), ('user', '0000');







#Insert Customers
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Edythe Yocum', 380486913, 'Beitunia');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Jeanette Storment', 975200812, 'Abu Dis');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Shanna Tall', 666132425, 'Jenin');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Mel Brumley', 248533070, 'Nablus');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Treena Marton', 798960861, 'Dura');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Loida Toft', 169948355, 'Dura');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Muriel Mazza', 851036460, 'Surif');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Toshiko Halderman', 054367552, 'Ramallah');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Mel Brumley', 424234649, 'Jenin');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Lesley Navarette', 969750550, 'Jenin');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Verline Hegland', 566599778, 'al-Bireh');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Deana Doris', 692539572, 'Abu Dis');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Deana Doris', 068828801, 'Beit Ummar');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Nan Beamon', 720634682, 'Jerusalem');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Steve Runge', 891629561, 'Bani Naeim');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Deana Doris', 697549326, 'Sair');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Jacinta Lockhart', 986210591, 'Yatta');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Steve Runge', 247394072, 'Beitunia');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Evita Raymo', 662223304, 'Ramallah');
INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('Kristine Clevenger', 077456613, 'Beit Sahour');










#Insert Employees
INSERT INTO Employee (eName, SSN, Phone, Salary, Address) VALUES
	('Mohammed Anan', 406696325, 595654321, 1500.0, 'Jenin'),
	('Sami Ballot', 409654325, 598765432, 2100.0, 'Nablus'),
	('Rami Awad', 406693425, 595654987, 700.0, 'Jenin');


INSERT INTO EmployeeUsers(eID, uPassword) VALUES (2, '0000');
INSERT INTO EmployeeUsers(eID, uPassword) VALUES (1, '0000');






#Insert ItemTypes
INSERT INTO ItemType (tName, tDescription) VALUES
	('Trouser', 'Item of clothing that might have originated in Central Asia, worn from the waist to the ankles'),
	('Shirt', 'More specifically a garment with a collar, sleeves with cuffs, and a full vertical opening with buttons or snaps'),
	('Jacket', 'Garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side. '),
	('Suits', 'Set of mens or womens clothes comprising a suit jacket, or coat, and trousers. When of identical textile'),
	('Skirt', 'The lower part of a dress or a separate outer garment that covers a person from the waist downwards');
INSERT INTO ItemType (tName) VALUES
	('Short Dress'),
	('Long Dress');









#Insert Suppliers
INSERT INTO Supplier (sName, Phone, Website, MoreInfo, Address) VALUES
	('OZMOC', 966954326, 'www.ozmoc.com', 'big place nice wear', 'Turkey'),
	('BASHKARADA', 974326564, 'www.bashh.tr', 'info about bashh', 'Turkey'),
	('CHANGUE', 999999999, 'wear.changue.net', 'cheap and good', 'CHINA');










#Insert Items
INSERT INTO Item(ModelNumber, PurchasePrice, SellingPrice, ItemType, SupplierID, iDescription, Size, Color, Quantity) VALUES
	('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'S', 'RED', 1),
	('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'M', 'GREEN', 1),
	('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'L', 'GREEN', 1),
	('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'XL', 'BLUE', 2),
	('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'XXL', 'RED', 4),

	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '38', 'RED', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '40', 'BLACK', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '42', 'BLACK', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '40', 'GREEN', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '44', 'RED', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '42', 'YELLOW', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '46', 'WHITE', 1),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '44', 'WHITE', 3),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '46', 'GREEN', 2),
	('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '48', 'OFFWHITE', 2);


INSERT INTO Item(ModelNumber, PurchasePrice, SellingPrice, ItemType, SupplierID, Size, Color, Quantity) VALUES
	('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'BLACK', 5),
	('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'RED', 5),
	('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'GREEN', 4),
	('12-MDL-99
    43', 12.0, 29.99, 16, 102, 'OneSize', 'WHITE', 2),
	('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'YELLO', 1);









#Insert Supplier_Type
INSERT Supplier_Type (sID, tID) VALUE
	(100, 10),
	(100, 11),
	(100, 12),
	(101, 13),
	(101, 14),
	(101, 15),
	(102, 16);









#Insert Orders With Details
INSERT INTO Orders (cID, eID) VALUES
	(10000, 1),
	(10004, 1),
	(10005, 1),
	(10004, 2),
	(10004, 3),
	(10000, 2);

INSERT INTO OrderDetails (oID, iID, Price, Quantity) VALUES
	(100000
    , 100000, 175, 1),
	(100001, 100002, 160, 2),
	(100002, 100010, 100, 1),
	(100003, 100015, 25, 4),
	(100004, 100014, 90, 1),
	(100005, 100019, 30, 1);