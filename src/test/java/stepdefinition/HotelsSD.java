package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import runnerTest.webPages.HotelsPage;
import sun.jvm.hotspot.debugger.Page;
import utils.BasePage;

public class HotelsSD {
    private HotelsPage hotelsPage = new HotelsPage();
    public String city = "boston, massachusetts,";

    @Given("^I am on Hotels Home Page$")
    public void iAmOnHotelsHomePage() {
        Assert.assertEquals(BasePage.get().getCurrentUrl(), "https://www.hotels.com/");
    }
    @Given("^I am on default locations search result screen$")
    public void setCityTextField() throws InterruptedException {
        hotelsPage.setCityTextField(city);
        Assert.assertEquals(hotelsPage.iamOnSearchResultPage(),"How much we get paid influences your sort order");
    }
    @When("^I select property class (.+)$")
    public void selectStars(String stars){
        switch (stars){
            case "5 stars":
                hotelsPage.clickOnFiveStars();
                break;
            case "4 stars":
                hotelsPage.clickOnForStars();
                break;
            case "3 stars":
                hotelsPage.clickOnThreeStars();
                break;
        }
    }
    @Then("^I verify system displays only (.+) hotels on search result$")
    public void verifyDisplaysStars(String stars) throws InterruptedException {
        switch (stars){
            case "5 stars":
                Assert.assertEquals(hotelsPage.isDisplaysOnlyFiveStarsResult(), "System displays incorrectly 5 stars");
                break;
            case "4 stars":
                Assert.assertEquals(hotelsPage.isDisplaysOnlyForStarsResult(), "System displays incorrectly 4 stars");
                break;
            case "3 stars":
                Assert.assertEquals(hotelsPage.isDisplaysOnlyThreeStarsResult(),"System displays incorrectly 3 stars");
                break;

        }
    }
    @Then("^I verify system displays all hotels within 10 miles radius of airport$")
    public void verifyDisplaysRadiusAirport() throws InterruptedException {
        Assert.assertEquals(hotelsPage.isDisplaysRadiusAirport(), "System not displays all hotels within 10 miles radius of airport");
    }
    @And("^I verify (.+) is within 10 miles radius of downtown$")
    public void verifyDisplaysRadiusDowntown(String hotel) throws InterruptedException {
        hotelsPage.setHotelTextFiled(hotel);
        Assert.assertEquals(hotelsPage.isDisplaysRadiusDowntown(),"System not displays all hotels within 10 miles radius of downtown");
    }

    }


