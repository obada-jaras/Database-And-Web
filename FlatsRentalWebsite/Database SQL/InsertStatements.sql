INSERT INTO PersonAddress (City, Street, PostalCode, HouseNo) VALUES ('Ramallah', 'street', '00972', 'hnog');
INSERT INTO PersonAddress (City, Street, PostalCode, HouseNo) VALUES ('Jenin', 'abu baker', '42', 'hello');
INSERT INTO PersonAddress (City, Street, PostalCode, HouseNo) VALUES ('Tulkarm', 'alsha', '072', '042');


INSERT INTO Manager (mUsername, mPassword) VALUES ("mm1", "123456m"), ("mm2", "123456m");

INSERT INTO Customer (ID, oName, AddressID, UserName, oPassword)
VALUES (199999999, 'customer1', 1, 'cc1', '123456c'), (299999999, 'customer2', 3, 'cc2', '123456c');

INSERT INTO FlatOwner (ID, oName, AddressID, UserName, oPassword)
VALUES (111111111, 'owner1', 2, 'oo1', '123456o'), (222222222, 'owner2', 1, 'oo2', '123456o');