package Project;

//import java.io.File;
//import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
//import java.util.Scanner;

public class DummyData {
	static String filePath = "D:\\New folder\\University\\120.2\\COMP333 Database\\Project\\Final\\InsertStatements.sql";
	static FileWriter fileWriter;
	final static int numberOfAddresses = 20;
	final static int numberOfCustomers = 20;
	final static int numberOfTypes = 7;

	
	public static void main(String[] args) throws IOException {
		
		startOver();
		
		insertSystemUsers();
		insertCustomers();
		insertEmployees();
		insertItemTypes();
		insertSupplier();
		insertItems();
		insertSupplier_Type();
		insertOrders();
		
		System.out.println("Done");
	}
	
	
	
	
	private static void startOver() throws IOException {
		fileWriter = new FileWriter(filePath);
		fileWriter.write("");
		fileWriter.close();		
	}




	private static void insertSystemUsers() throws IOException {
		writeLine("#Insert System Users\n");
		writeLine("INSERT INTO SystemUsers(Username, uPassword) VALUES ('admin', 'admin'), ('root', '1234'), ('user', '0000');\n\n\n\n\n\n\n\n\n\n");
	}
	
	private static String getRandomAddress() {
		String[] palestineCities = {"Jenin", "Jerusalem", "Ramallah", "Jenin", "Tulkarm", "Nablus", "Hebron", "Bethlehem", "Jericho", "Abu Dis", "Beit Jala", "Beit Sahour", 
				"Dura", "ad-Dhahiriya", "Beit Ummar", "Bani Naeim", "Halhul", "Idhna", "Sair", "as-Samu", "Surif", "Yatta", "Jenin", 
				"Qabatiya", "Tubas", "Qalqilya", "Beitunia", "al-Bireh", "Ramallah", "Tulkarm", "Jenin"};
		
		return palestineCities[(int)(palestineCities.length * Math.random())];
		
	}
	

	
	private static void insertCustomers() throws IOException {
		writeLine("#Insert Customers\n");
		String[] names = {"Rosa Alers", "Adelia Burget", "Toshiko Halderman", "Laverne Arbour", "Shanna Tall", "Sabra Dubinsky", "Verline Hegland", "Vincenza Puleo",
						"Jacinta Lockhart", "Jeanette Storment", "Fernando Flink", "Michel Oesterling", "Shanita Quashie", "Nathan Harpin", "Lilla Ash",
						"Apolonia Mcateer", "Kaitlyn Mcwain", "Ashli Beckham", "Loida Toft", "Wm Schipper", "Kory Augsburger", "Treena Marton", "Steve Runge",
						"Shaunna Lundgren", "Deana Doris", "Amiee Bitterman", "Kristine Clevenger", "Evita Raymo", "Tonya Mullins", "Glory Buelow", "Dalila Legrand",
						"Lino Husted", "Muriel Mazza", "Keva Rutigliano", "Rey Piehl", "Coy Fontanilla", "Karissa Sang", "Nan Beamon", "Edythe Yocum",
						"Lesley Navarette", "Minda Cratty", "Leena Mosca", "Isela Winburn", "Aletha Pixler", "Mel Brumley", "Margarette Gouveia", "Cinthia Niemiec",
						"Bryanna Grajales", "Tula Strachan", "Leisa Poplin", "Jeraldine Woodland", "Lillian Houston", "Andres Jusino", "Asha Plemons",
						"Jacqualine Skiles"};

		
		
		for (int i = 0; i < numberOfCustomers; i++) {
			String CS_name = names[(int)(names.length * Math.random())];
			String CS_phoneNumber = String.format("%09d", (int)(999999999 *  Math.random()));
			
			String SQL_insertCustomers;
			SQL_insertCustomers = "INSERT INTO Customer(cName, PhoneNumber, Address) VALUE ('" + CS_name + "', " + CS_phoneNumber + ", '" + getRandomAddress() + "');";
			
			writeLine(SQL_insertCustomers + "\n");
		}
		
		writeLine("\n\n\n\n\n\n\n\n\n\n");
	}
	
	
	private static void insertEmployees() throws IOException {
		writeLine("#Insert Employees\n");
		writeLine("INSERT INTO Employee (eName, SSN, Phone, Salary, Address) VALUES\n"
				+ "\t('Mohammed Anan', 406696325, 595654321, 1500.0, 'Jenin'),\n"
				+ "\t('Sami Ballot', 409654325, 598765432, 2100.0, 'Nablus'),\n"
				+ "\t('Rami Awad', 406693425, 595654987, 700.0, 'Jenin');\n\n\n\n\n\n\n\n\n\n");
	}

	
	private static void insertItemTypes() throws IOException {
		writeLine("#Insert ItemTypes\n");
		writeLine("INSERT INTO ItemType (tName, tDescription) VALUES\n"
				+ "\t('Trouser', 'Item of clothing that might have originated in Central Asia, worn from the waist to the ankles'),\n"
				+ "\t('Shirt', 'More specifically a garment with a collar, sleeves with cuffs, and a full vertical opening with buttons or snaps'),\n"
				+ "\t('Jacket', 'Garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side. '),\n"
				+ "\t('Suits', 'Set of mens or womens clothes comprising a suit jacket, or coat, and trousers. When of identical textile'),\n"
				+ "\t('Skirt', 'The lower part of a dress or a separate outer garment that covers a person from the waist downwards');\n"
				+ "INSERT INTO ItemType (tName) VALUES\n"
				+ "\t('Short Dress'),\n"
				+ "\t('Long Dress');\n\n\n\n\n\n\n\n\n\n");
	}
	
	

	
	private static void insertSupplier() throws IOException {
		writeLine("#Insert Suppliers\n");
		writeLine("INSERT INTO Supplier (sName, Phone, Website, MoreInfo, Address) VALUES\n"
				+ "\t('OZMOC', 966954326, 'www.ozmoc.com', 'big place nice wear', 'Turkey'),\n"
				+ "\t('BASHKARADA', 974326564, 'www.bashh.tr', 'info about bashh', 'Turkey'),\n"
				+ "\t('CHANGUE', 999999999, 'wear.changue.net', 'cheap and good', 'CHINA');\n"
				+ "\n\n\n\n\n\n\n\n\n\n");
	}
	
	
	private static void insertItems() throws IOException {
		writeLine("#Insert Items\n");
		writeLine("INSERT INTO Item(ModelNumber, PurchasePrice, SellingPrice, ItemType, SupplierID, iDescription, Size, Color, Quantity) VALUES\n"
				+ "\t('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'S', 'RED', 1),\n"
				+ "\t('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'M', 'GREEN', 1),\n"
				+ "\t('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'L', 'GREEN', 1),\n"
				+ "\t('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'XL', 'BLUE', 2),\n"
				+ "\t('XAU-1255', 120.0, 180.0, 12, 100, '2021 model' , 'XXL', 'RED', 4),\n"
				+ "\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '38', 'RED', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '40', 'BLACK', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '42', 'BLACK', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '40', 'GREEN', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '44', 'RED', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '42', 'YELLOW', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '46', 'WHITE', 1),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '44', 'WHITE', 3),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '46', 'GREEN', 2),\n"
				+ "\t('RTT110', 40.0, 90.0, 14, 101, 'New Model Of Women Wear' , '48', 'OFFWHITE', 2);\n"
				+ "\n"
				+ "INSERT INTO Item(ModelNumber, PurchasePrice, SellingPrice, ItemType, SupplierID, Size, Color, Quantity) VALUES\n"
				+ "\t('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'BLACK', 5),\n"
				+ "\t('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'RED', 5),\n"
				+ "\t('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'GREEN', 4),\n"
				+ "\t('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'WHITE', 2),\n"
				+ "\t('12-MDL-9943', 12.0, 29.99, 16, 102, 'OneSize', 'YELLO', 1);"
				+ "\n\n\n\n\n\n\n\n\n\n");
		
	}
	
	
	private static void insertSupplier_Type() throws IOException {
		writeLine("#Insert Supplier_Type\n");
		writeLine("INSERT Supplier_Type (sID, tID) VALUE\n"
				+ "\t(100, 10),\n"
				+ "\t(100, 11),\n"
				+ "\t(100, 12),\n"
				+ "\t(101, 13),\n"
				+ "\t(101, 14),\n"
				+ "\t(101, 15),\n"
				+ "\t(102, 16);"
				+ "\n\n\n\n\n\n\n\n\n\n");
	}

	
	private static void insertOrders() throws IOException {
		writeLine("#Insert Orders With Details\n");
		writeLine("INSERT INTO Orders (cID, eID) VALUES\n"
				+ "\t(10000, 1),\n"
				+ "\t(10004, 1),\n"
				+ "\t(10005, 1),\n"
				+ "\t(10004, 2),\n"
				+ "\t(10004, 3),\n"
				+ "\t(10000, 2);\n\n");
		writeLine("INSERT INTO OrderDetails (oID, iID, Price, Quantity) VALUES\n"
				+ "\t(100000, 100000, 175, 1),\n"
				+ "\t(100001, 100002, 160, 2),\n"
				+ "\t(100002, 100010, 100, 1),\n"
				+ "\t(100003, 100015, 25, 4),\n"
				+ "\t(100004, 100014, 90, 1),\n"
				+ "\t(100005, 100019, 30, 1);");
	}
	
	
	
	
	
	

	
//	private static boolean isLineExisted(String str) throws FileNotFoundException {
//		Scanner sc = new Scanner(new File(filePath));
//		while (sc.hasNext()) {
//			String line = sc.nextLine().trim();
//			if (str.trim().equals(line)) {
//				sc.close();
//				return true;
//			}
//		}
//		sc.close();
//		return false;
//	}
	
	
	private static void writeLine(String str) throws IOException {
		fileWriter = new FileWriter(filePath, true);
		fileWriter.write(str);
		fileWriter.close();
	}
}
