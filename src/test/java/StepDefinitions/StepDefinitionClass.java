package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionClass {

	WebDriver driver = null;

	@Given("^User is on the landing page$")
	public void user_is_on_the_landing_page() {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver",
				"E:\\Java and Selenium learning\\eclipse_workspace\\CucumberBDD\\src\\main\\java\\drivers\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.get("https://facebook.com");
		driver.manage().window().maximize();

	}

	 @When("^user enters (.+) and (.+) credentials$")
	    public void user_enters_and_credentials(String username, String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		WebElement userName = driver.findElement(By.xpath("//*[@id='email']"));
		WebElement passWord = driver.findElement(By.xpath("//*[@id='pass']"));
		userName.sendKeys(username);
		passWord.sendKeys(password);
		WebElement login = driver.findElement(By.name("login"));
		login.click();

	}

	@Then("^user is now on the home page$")
	public void user_is_now_on_the_home_page() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		WebDriverWait wait = new WebDriverWait(driver, 20);

		WebElement home = driver.findElement(By.xpath("//*[@aria-label='Home']"));
		wait.until(ExpectedConditions.visibilityOf(home));
		if (home.isDisplayed()) {
			System.out.println("your test cases is passed");
		}

	}
}
