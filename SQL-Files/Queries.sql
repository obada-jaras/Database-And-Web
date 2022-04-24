use StoreSystem;

SELECT ID FROM Address WHERE (country = 'palestine' AND city = 'ramalaah' AND moreInfo = 'more');


insert into SystemUsers(username, upassword) values ('admin', 'admin'), ('root', '1234'), ('user', '0000');
select * from SystemUsers;
SELECT count(*) FROM SystemUsers WHERE Username = 'root' AND uPassword = '1234';


UPDATE Employee SET endDate = (NOW()) WHERE ID = 2 AND EndDate IS NULL;



SELECT E.ID, E.eName, E.SSN, E.Phone, E.Salary, E.StartDate, E.EndDate, A.City
FROM Employee E, Address A
WHERE
	E.AddressID = A.ID
UNION
SELECT E.ID, E.eName, E.SSN, E.Phone, E.Salary, E.StartDate, E.EndDate, NULL AS City
FROM Employee E
WHERE
	AddressID IS NULL;
