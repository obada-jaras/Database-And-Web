package application;


import java.util.Optional;

import Project.Driver;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Alert.AlertType;
import javafx.stage.Stage;

public class Main extends Application {
	public static Stage stage;
	public static int permission;
	public static String username;
	
//	@Override
	public void start(Stage primaryStage) {
		try {			
			stage = primaryStage;
			Parent root = FXMLLoader.load(getClass().getResource("../Login/loginSample.fxml"));

			Scene scene = new Scene(root, 600, 600);


			scene.getStylesheets().add(getClass().getResource("../application.css").toExternalForm());

			primaryStage.setScene(scene);
			primaryStage.setTitle("Store Management System");
			primaryStage.setResizable(false);
			primaryStage.show();

			primaryStage.setOnCloseRequest(e -> {
				root.setDisable(false);
			});

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	

	public static void main(String[] args) {
		try {
			@SuppressWarnings("unused")
			Driver d = new Driver();
			launch(args);

			
			
		} catch (Exception e) {
			Alert ALRT_databaseError = new Alert(AlertType.ERROR);
			ALRT_databaseError.setTitle("Error!!");
			ALRT_databaseError.setHeaderText("Cannot connect to the database, please try again later");
			ALRT_databaseError.setContentText(null);
			Optional<ButtonType> result = ALRT_databaseError.showAndWait();
			if (result.get() != null) { 
				Main.stage.close();
				System.exit(0);
			}
		}
	}
	
}
