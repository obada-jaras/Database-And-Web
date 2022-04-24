SELECT * from customer;
SELECT * from PersonAddress;
select * from flatowner;
select * from flat;
select * from flatlocation;
select * from Flat_Previewtime;
select * from booking;
select DISTINCT FlatID from Booking;
select * from previewappointment;
SELECT * FROM Flat, FlatLocation WHERE Flat.ID = 6 AND FlatLocation.ID = Flat.LocationID;
SELECT * FROM Customer WHERE ID = 111111111;
SELECT * FROM CreditCard;
select * from manager;
SELECT * FROM PreviewAppointment;

SELECT f.ID, f.Title, t.DayAndTime FROM PreviewAppointment r, Flat_Previewtime t, Flat f WHERE r.PreviewID = t.ID AND t.FlatID = f.ID AND r.ID = 1 AND f.OwnerID = 111111111;
SELECT f.ID, f.Title, t.DayAndTime FROM PreviewAppointment r, Flat_Previewtime t, Flat f WHERE r.PreviewID = t.ID AND t.FlatID = f.ID AND f.OwnerID = 222222222;

SELECT * FROM ManagerNotification;
SELECT COUNT(*) AS n FROM CustomerNotification n, PreviewAppointment p WHERE nRead = 0 AND n.PreviewID = p.ID AND p.CustomerID = 1;


SELECT * FROM CustomerNotification;
UPDATE ManagerNotification SET nRead = 1 WHERE ID = 3;

SELECT * FROM OwnerNotification;

SELECT c.oName, f.ID, f.Title, b.EndDate FROM Booking b, Customer c, Flat f WHERE b.CustomerID = c.ID AND b.FlatID = f.ID AND b.ID = 2 AND f.OwnerID = 222222222;




SELECT c.oName AS cName, b.bTime, f.ID, f.Title, o.oName 
FROM Booking b, Customer c, Flat f, FlatOwner o
WHERE b.CustomerID = c.ID AND b.FlatID = f.ID AND f.OwnerID = o.ID AND
b.ID = 1 AND f.OwnerID = 111111111;


SELECT c.oName AS cName, b.bTime, f.ID, f.Title, o.oName FROM Booking b, Customer c, Flat f, FlatOwner o WHERE b.CustomerID = c.ID AND b.FlatID = f.ID AND f.OwnerID = o.ID AND b.ID = 2;
SELECT f.ID, o.oName, f.Title, f.MonthCost, f.AddingDate FROM Flat f, FlatOwner o WHERE f.OwnerID = o.ID;

use `webprojectdb`;

select * from ManagerNotification;
SELECT id FROM CreditCard WHERE cNumber = 111456789 AND ExpireDate = '2022-01-25' AND BankName = 'bankname';
SELECT * FROM Flat, FlatLocation, FlatOwner WHERE Flat.ID = 6 AND FlatLocation.ID = Flat.LocationID AND Flat.OwnerID = FlatOwner.ID;
SELECT * FROM PreviewAppointment WHERE CustomerID = 40664396595;
INSERT INTO PreviewAppointment (CustomerID, PreviewID) VALUES ();

UPDATE Flat_Previewtime SET Taken = 1 WHERE ID = 1;

ALTER TABLE previewappointment
ADD COLUMN approved BOOLEAN DEFAULT FALSE;

SELECT * FROM Flat_Previewtime WHERE FlatID = 6 ORDER BY DayAndTime ASC;
SELECT f.*, l.City, l.Street, l.postalCode, o.oName, o.EmailAddress, o.MobileNumbers, o.TelephoneNumbers
FROM Flat f, FlatLocation l, FlatOwner o
WHERE 
	LocationID = l.ID AND
    OwnerId = o.ID AND
	f.ID = 5;

insert into booking(flatid) value (1);
SELECT Flat.ID AS ID, approved, Title, City, BedroomsNo, MonthCost, AvailablDate FROM Flat, FlatLocation WHERE LocationID = FlatLocation.ID;

SELECT Flat.ID AS ID, Title, City, BedroomsNo, MonthCost, AvailablDate
FROM Flat, FlatLocation
WHERE 
	LocationID = FlatLocation.ID AND 
	AvailablDate <= CURRENT_TIMESTAMP AND
    approved = 1 AND
    FlatID NOT IN (SELECT DISTINCT FlatID FROM Booking Where EndDate <= CURRENT_TIMESTAMP);
  

SELECT Flat.ID AS ID, Title, City, BedroomsNo, MonthCost, AvailablDate
FROM Flat, FlatLocation
WHERE LocationID = FlatLocation.ID AND 
    approved = 0 AND
    CONCAT(Title,' ',City) LIKE '%%' AND
    MonthCost > 0 AND
    MonthCost < 2147483647 AND
    BedroomsNo > 0 AND
    BedroomsNo < 2147483647 AND
    BathroomsNo > 0 AND
    BathroomsNo < 2147483647;


SELECT Flat.ID, approved, Title, City, BedroomsNo, MonthCost, AvailablDate
FROM Flat, FlatLocation
WHERE 
	LocationID = FlatLocation.ID AND
    Flat.ID NOT IN (select DISTINCT FlatID from Booking)
    ;




SELECT * FROM Flat_Previewtime WHERE FlatID = 1 AND DayAndTime = "2022-05-02 12:15:13";

SELECT DISTINCT City FROM FlatLocation;

INSERT INTO Flat_Previewtime (FlatID, DayAndTime) VALUE (1, "2022-05-02 12:15:00");
INSERT INTO Flat_Previewtime (FlatID, DayAndTime) VALUE (1, "2022-05-03 12:15:13");
INSERT INTO Flat_Previewtime (FlatID, DayAndTime) VALUE (1, "2022-05-01 12:15:13");
INSERT INTO Flat_Previewtime (FlatID, DayAndTime) VALUE (1, "2022-05-01 10:15:13");
INSERT INTO Flat_Previewtime (FlatID, DayAndTime) VALUE (1, "2022-05-02 12:15:00");



SELECT * FROM PersonAddress;
SELECT * FROM PersonAddress ORDER BY id DESC;
SELECT * FROM PersonAddress ORDER BY id DESC LIMIT 1;
SELECT id FROM PersonAddress WHERE City = ? AND Street = ? AND PostalCode = ? AND HouseNo = ?;
SELECT id FROM PersonAddress WHERE City = 'Ramallah' AND Street = 'street' AND PostalCode = '00972' AND HouseNo = 'hnog';

SELECT * FROM Customer;
INSERT INTO Customer (oName, DateOfBirth, EmailAddress, MobileNumbers, TelephoneNumbers, AddingDate, AddressID, UserName, oPassword) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?);
SELECT UserName FROM Customer WHERE UserName = 'obada.jaras';


SELECT * FROM FlatOwner;
SELECT id FROM FlatOwner WHERE id = 123456789 UNION SELECT id FROM Customer WHERE id = 123456789;
SELECT id FROM FlatOwner WHERE id = 123456789 UNION SELECT id FROM Customer WHERE id = 123456789;


SELECT UserName FROM Customer WHERE UserName = 'hello';
SELECT UserName FROM FlatOwner WHERE UserName = 'hello' UNION SELECT UserName FROM Customer WHERE UserName = 'hello';

SELECT id FROM Customer WHERE UserName = 'hello' AND oPassword = '123456vc';

INSERT INTO Flat (OwnerID, MonthCost, AvailablDate, RentConditions, BedroomsNo, BathroomsNo, Size, hHeating, hAir, hAccess, hParking, hBackYard, hPlayingGround, hStorage, AddingDate, LocationID, NumberOfPhotos, NearbyTitle, NearbyDescription, NearbyLink) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
SELECT * FROM Flat WHERE ID = id AND OwnerID = oID;
