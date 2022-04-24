SELECT * FROM SystemUsers;

SELECT * FROM Address;
SELECT * FROM Customer;
SELECT * FROM Employee;
SELECT * FROM Item;
SELECT * FROM ItemType;
SELECT * FROM OrderDetails;
SELECT * FROM Orders;
SELECT * FROM Supplier;
SELECT * FROM Supplier_Type;
SELECT T.tName FROM ItemType T, Supplier_Type ST WHERE T.ID = tID AND sID = 101;

Update Orders set dateandtime = "2021-06-08 05:22:41" where id = 100005;

SELECT SUM(D.Price*D.Quantity) AS SUM FROM OrderDetails D, Orders O WHERE D.oID = O.ID AND DateAndTime BETWEEN "2021-06-05" AND "2021-06-13" ;
SELECT SUM((D.Price-I.PurchasePrice)*D.Quantity) AS SUM FROM OrderDetails D, Orders O, Item I WHERE D.oID = O.ID AND I.ID = D.iID AND DateAndTime BETWEEN "2021-06-05" AND "2021-06-13" ;

SELECT O.DateAndTime, CONCAT(I.ModelNumber, ' ' , I.Size, ' ', I.Color) AS Item, D.Price, D.Quantity, C.cName, E.eName FROM OrderDetails D, Orders O, Item I, Customer C, Employee E WHERE D.oID = O.ID AND D.iID = I.ID AND O.CID = C.ID AND O.eID = E.ID;


DELETE FROM Supplier_Type WHERE sID = 101;

INSERT INTO Supplier_Type(sID, tID) VALUE (101, 15);
SELECT ID FROM ItemType WHERE tName = 'Shirt';

SELECT t.tName FROM Supplier_Type s , ItemType t WHERE s.tid = t.id and sid = 102;
SELECT I.ID, I.ModelNumber, I.PurchasePrice, I.SellingPrice, I.DateOfAdding, I.iDescription, S.sName, T.tName, I.Size, I.Color, I.Quantity
FROM Item I, Supplier S, ItemType T WHERE I.ItemType = T.ID AND I.SupplierID = S.ID;
