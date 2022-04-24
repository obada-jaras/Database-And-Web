package Orders;

public class CartItem implements Cloneable {
	int id;
	String model;
	String descriptin;
	String size;
	String color;
	int quantity;
	double unitPrice;
	double totalPrice;
	
	
	public CartItem(int id, String model, String descriptin, String size, String color, double unitPrice) {
		this.id = id;
		this.model = model;
		this.descriptin = descriptin;
		this.size = size;
		this.color = color;
		this.unitPrice = unitPrice;
	}


	public CartItem(int id, String model, String descriptin, String size, String color, int quantity, double unitPrice, double totalPrice) {
		this.id = id;
		this.model = model;
		this.descriptin = descriptin;
		this.size = size;
		this.color = color;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
		this.totalPrice = totalPrice;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getDescriptin() {
		return descriptin;
	}

	public void setDescriptin(String descriptin) {
		this.descriptin = descriptin;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
		updateTotalPrice();
	}

	public double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
		updateTotalPrice();
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	private void updateTotalPrice() {
		this.totalPrice = this.quantity * this.unitPrice;
	}


	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}

}
