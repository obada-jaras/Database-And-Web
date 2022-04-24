INSERT INTO SystemUsers(Username, uPassword) VALUES ('admin', 'admin'), ('root', '1234'), ('user', '0000');

#INSERT INTO Employee(eName, SSN, Phone, Salary, AddressID)


INSERT INTO Address(Country, City, MoreInfo) VALUE ('', '', '');
INSERT INTO Customer(cName, PhoneNumber, AddressID) VALUE ('', , );
select * from address;
select * from color;
drop table address;
INSERT INTO Address(ID, Country, City, MoreInfo) VALUE (id-2, '48 territories', 'Jaffa', '') ON DUPLICATE KEY UPDATE id = id-1;
INSERT INTO Address(Country, City, MoreInfo) VALUE ('Palestine', 'Beit Sahour', 'Street number 29') ON DUPLICATE KEY UPDATE Country = Country;
INSERT INTO Address(Country, City, MoreInfo) VALUE ('Palestine', 'Jenin', '') ON DUPLICATE KEY UPDATE Country = Country;
INSERT INTO Address(Country, City, MoreInfo) VALUE ('Palestine', 'Jerusalem', '') ON DUPLICATE KEY UPDATE Country = Country;

INSERT INTO ItemType (tName, tDescription) VALUES 
	('Trouser', 'Item of clothing that might have originated in Central Asia, worn from the waist to the ankles'),
    ('Shirt', 'More specifically a garment with a collar, sleeves with cuffs, and a full vertical opening with buttons or snaps'),
    ('Jacket', 'Garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side. '),
    ('Suits', 'Set of mens or womens clothes comprising a suit jacket, or coat, and trousers. When of identical textile'),
    ('Skirt', 'The lower part of a dress or a separate outer garment that covers a person from the waist downwards');
INSERT INTO ItemType (tName) VALUES
	('Short Dress'),
	('Long Dress');
    select * from itemtype;
    
    
INSERT INTO Item(ModelNumber, PurchasePrice, SellingPrice, ItemType, iDescription, Size, ColorID) VALUES
('XAU-1255', 120.0, 180.0, 12, '2021 model' , 'S', 1),
('XAU-1255', 120.0, 180.0, 12, '2021 model' , 'M', 4),
('XAU-1255', 120.0, 180.0, 12, '2021 model' , 'L', 4),
('XAU-1255', 120.0, 180.0, 12, '2021 model' , 'XL', 2),
('XAU-1255', 120.0, 180.0, 12, '2021 model' , 'XXL', 1),

('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '38', 1),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '40', 1),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '42', 1),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '40', 2),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '44', 2),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '42', 7),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '46', 7),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '44', 5),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '46', 5),
('RTT110', 40.0, 90.0, 14, 'New Model Of Women Wear' , '48', 5);

INSERT INTO Item(ModelNumber, PurchasePrice, SellingPrice, ItemType, Size, ColorID) VALUES
('12-MDL-9943', 12.0, 29.99, 16, 'OneSize', 3),
('12-MDL-9943', 12.0, 29.99, 16, 'OneSize', 6),
('12-MDL-9943', 12.0, 29.99, 16, 'OneSize', 8),
('12-MDL-9943', 12.0, 29.99, 16, 'OneSize', 9),
('12-MDL-9943', 12.0, 29.99, 16, 'OneSize', 2);

select * from item;





INSERT INTO Address (Country) VALUES ('Turkey'), ('CHINA');
INSERT INTO Supplier (sName, Phone, Website, MoreInfo, AddressID) VALUES
('OZMOC', 966954326, 'www.ozmoc.com', 'big place nice wear', 100),
('BASHKARADA', 9743265464, 'www.bashh.tr', 'info about bashh', 100),
('CHANGUE', 8964653214, 'wear.changue.net', 'cheap and good', 101);



INSERT INTO Orders (cID, eID) VALUES
(10000, 1),
(10004, 1),
(10005, 1),
(10004, 2),
(10004, 3),
(10000, 2);


INSERT INTO OrderDetails (oID, iID, Price, Quantity) VALUES
(100000, 100000, 175, 1),
(100001, 100002, 160, 2),
(100002, 100010, 100, 1),
(100003, 100015, 25, 4),
(100004, 100014, 90, 1),
(100005, 100019, 30, 1);
