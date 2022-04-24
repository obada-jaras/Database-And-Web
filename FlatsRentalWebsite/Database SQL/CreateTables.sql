USE c435_1191319;


CREATE TABLE Manager (
	id INT AUTO_INCREMENT PRIMARY KEY,
	mUsername VARCHAR(16) UNIQUE NOT NULL,
    mPassword VARCHAR(20) NOT NULL
);


CREATE TABLE PersonAddress (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	City VARCHAR(15),
    Street VARCHAR(25),
    PostalCode VARCHAR(11),
    HouseNo VARCHAR(16),
    
	UNIQUE (City, Street, PostalCode, HouseNo)
);

CREATE TABLE FlatOwner (
	ID INT PRIMARY KEY,				##ID number
    oName VARCHAR(32),
    DateOfBirth DATE,
    EmailAddress VARCHAR(72),
    MobileNumbers VARCHAR(92),
    TelephoneNumbers VARCHAR(92),
	AddingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				##Date Of Adding A New User To The System
	AddressID INT,

    BankName VARCHAR(48),
    BankBranch VARCHAR(48),
    AccountNumber VARCHAR(48),

    UserName VARCHAR(32) UNIQUE NOT NULL,
    oPassword VARCHAR(15) NOT NULL,
    
    
	FOREIGN KEY (AddressID) REFERENCES PersonAddress(ID) ON UPDATE CASCADE ON DELETE SET NULL
);










CREATE TABLE FlatLocation (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    City VARCHAR(15),
    Street VARCHAR(25),
    PostalCode VARCHAR(11)
);



CREATE TABLE Flat (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    approved BOOLEAN DEFAULT FALSE,
    OwnerID INT,
    Title VARCHAR(256), 
    fDescription VARCHAR(4500),
	MonthCost INT,
    AvailablDate DATE,
    RentConditions VARCHAR(512),
    BedroomsNo INT,
    BathroomsNo INT,
    Size INT,
    Furnished BOOLEAN,
    hHeating BOOLEAN,
    hAir BOOLEAN, 
    hAccess BOOLEAN,
    hParking BOOLEAN,
    hBackYard VARCHAR(10),
    hPlayingGround BOOLEAN, 
    hStorage BOOLEAN,
	AddingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				##Date Of Adding A New Flat To The System
	LocationID INT,
    NumberOfPhotos INT,
    
    NearbyTitle VARCHAR(256),
    NearbyDescription VARCHAR(1024),
    NearbyLink VARCHAR(1024),
    

	FOREIGN KEY (LocationID) REFERENCES FlatLocation(ID) ON UPDATE CASCADE ON DELETE SET NULL,
	FOREIGN KEY (OwnerID) REFERENCES FlatOwner(ID) ON UPDATE CASCADE ON DELETE SET NULL
);




CREATE TABLE Flat_Previewtime (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	FlatID INT,
    DayAndTime TIMESTAMP,
    Taken BOOLEAN DEFAULT FALSE,
    
    UNIQUE (FlatID, DayAndTime),
	FOREIGN KEY (FlatID) REFERENCES Flat(ID) ON UPDATE CASCADE ON DELETE CASCADE
);





CREATE TABLE Customer (
	ID INT PRIMARY KEY,				##ID number
    oName VARCHAR(32),
    DateOfBirth DATE,
    EmailAddress VARCHAR(72),
    MobileNumbers VARCHAR(92),
    TelephoneNumbers VARCHAR(92),
	AddingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				##Date Of Adding A New User To The System
    AddressID INT,

    UserName VARCHAR(32) UNIQUE NOT NULL,
    oPassword VARCHAR(15) NOT NULL,
    
    
	FOREIGN KEY (AddressID) REFERENCES PersonAddress(ID) ON UPDATE CASCADE ON DELETE SET NULL
);



CREATE TABLE CreditCard (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	cNumber BIGINT,
    ExpireDate DATE,
    BankName VARCHAR(32),
	AddingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				##Date Of Adding A New User To The System
    
	UNIQUE (cNumber, ExpireDate, BankName)
);


CREATE TABLE Booking (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    StartDate DATE,
    EndDate DATE,
    Amount REAL,
    CustomerID INT,
    FlatID INT,
    cardID INT,
    bTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				##Date Of Adding A New Book To The System

	FOREIGN KEY (CustomerID) REFERENCES Customer(ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (FlatID) REFERENCES Flat(ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (cardID) REFERENCES CreditCard(ID) ON UPDATE CASCADE ON DELETE SET NULL
);


CREATE TABLE PreviewAppointment (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    
    CustomerID INT,
    PreviewID INT,
    Approved BOOLEAN DEFAULT FALSE,

	FOREIGN KEY (CustomerID) REFERENCES Customer(ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (PreviewID) REFERENCES Flat_Previewtime(ID) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE ManagerNotification (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	nRead BOOLEAN DEFAULT FALSE,
    nType INT, 					#0-approve flat		, 1-renting history
    rID INT 					#Flat.ID			, Booking.ID
);

CREATE TABLE OwnerNotification (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	nRead BOOLEAN DEFAULT FALSE,
    nDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				#request preview time		, booking time
    nType INT, 												#0-approve preview			, 1-renting
    rID INT 												#PreviewAppointment.ID		, Booking.ID
);


CREATE TABLE CustomerNotification (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	nRead BOOLEAN DEFAULT FALSE,
    nDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,				#approving request preview time
    PreviewID INT 											#PreviewAppointment.ID
);