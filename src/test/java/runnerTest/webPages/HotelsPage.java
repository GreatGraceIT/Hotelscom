package runnerTest.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import stepdefinition.SharedSD;
import utils.BasePage;

import java.util.List;

public class HotelsPage extends ElementUtil {



    private By cityTextField = By.id("qf-0q-destination");
    private By listOfCites = By.xpath("//*[starts-with(@id,'citysqm-asi0')]//div");
    private By searchButton = By.xpath("//button[@class='cta cta-strong']");
    private By disclaimerText = By.className("disclaimer-text");
    private By fiveStars = By.id("f-label-star-rating-5");
    private By forStars = By.id("f-label-star-rating-4");
    private By threeStars = By.id("f-label-star-rating-3");
    private By starsRatings = By.xpath("//span[@class='star-rating-text star-rating-text-strong']");
    private By threeStarsRatings = By.xpath("//span[@class='star-rating-text']");
    private By resultInfo = By.id("result-info-container");
    private By milesToAirports = By.xpath("//ul[@class='property-landmarks']/li[2]");
    private By milesToDowntown = By.xpath("//ul[@class='property-landmarks']/li[1]");
    private By distance = By.linkText("Distance");
    private By cityCenter = By.linkText("City center");
    private By hotelTextFiled = By.id("f-name");
    private By buttonHotelTextFiled = By.id("f-name-cta");
    public void setCityTextField(String setCity) throws InterruptedException {
        ignoreAlert();
        //windowMaximize();
        sendValue(cityTextField, setCity);
        Thread.sleep(500);
        StringBuilder reString = new StringBuilder();
        String[] splitString = setCity.split(" ");
        for (String string : splitString) {
            reString.append(string.substring(0, 1).toUpperCase()).append(string.substring(1).toLowerCase()).append(" ");
        }
        //List<WebElement> cities = webElements(listOfCites);
        List<WebElement> cities = webElements(listOfCites);
        Thread.sleep(500);
        for (WebElement city : cities) {
            if (city.getText().contains(reString.toString())) {
                city.click();
                break;
            }
        }
        clickOn(searchButton);
    }
    public String iamOnSearchResultPage() {
        return getTextFromElement(disclaimerText);
    }
    //public void ignoreAlert() {
    private void ignoreAlert(){
        //SharedSD.getDriver().navigate().refresh();
        BasePage.get().navigate().refresh();
    }
    public void clickOnFiveStars() {
        //scrollByElement(fiveStars);
        clickOn(fiveStars);
    }
    public void clickOnForStars() {
        //scrollByElement(forStars);
        clickOn(forStars);
    }
    public void clickOnThreeStars() {
        // scrollByElement(threeStars);
        clickOn(threeStars);
    }
    public boolean isDisplaysOnlyFiveStarsResult() throws InterruptedException {
        List<WebElement> elements = webElements(starsRatings);
        int size;
        for (int i = 0; i < elements.size(); i++) {
            scrollByPixel("0", "600");
            Thread.sleep(2500);
            elements = webElements(starsRatings);
            size = elements.size();
            if (size >= 50 || isElementDisplayed(resultInfo)) {
                break;
            }
        }
        for (WebElement element : elements) {
            if (!element.getText().equals("5-star")) {
                System.out.println("Stars Rating is: " + element.getText());
                return false;
            }
        }
        return true;
    }
    public boolean isDisplaysOnlyForStarsResult() throws InterruptedException {
        List<WebElement> elements = webElements(starsRatings);
        int size;
        for (int i = 0; i < elements.size(); i++) {
            scrollByPixel("0", "600");
            Thread.sleep(2500);
            elements = webElements(starsRatings);
            size = elements.size();
            if (size >= 50 || isElementDisplayed(resultInfo)) {
                break;
            }
        }
        for (WebElement element : elements) {
            String[] ratings = element.getText().split("-");
            double stars = Double.parseDouble(ratings[0]);
            if (stars < 4.0 || stars > 4.99) {
                System.out.println("Stars Rating is: " + stars);
                return false;
            }
        }
        return true;
    }
    public boolean isDisplaysOnlyThreeStarsResult() throws InterruptedException {
        List<WebElement> elements = webElements(threeStarsRatings);
        int size;
        for (int i = 0; i < elements.size(); i++) {
            scrollByPixel("0", "600");
            Thread.sleep(2500);
            elements = webElements(threeStarsRatings);
            size = elements.size();
            if (size >= 50 || isElementDisplayed(resultInfo)) {
                break;
            }
        }
        for (WebElement element : elements) {
            String[] ratings = element.getText().split("-");
            double stars = Double.parseDouble(ratings[0]);
            if (stars < 3.0 || stars > 3.99) {
                System.out.println("Stars Rating is: " + stars);
                return false;
            }
        }
        return true;
    }
    private void clickOnCityCenter() throws InterruptedException {//public olucak
        moveToElement(distance);
        Thread.sleep(500);
        clickOn(cityCenter);
    }
    public boolean isDisplaysRadiusAirport() throws InterruptedException {
        clickOnCityCenter();
        Thread.sleep(500);
        List<WebElement> elements = webElements(milesToAirports);
        int size;
        for (int i = 0; i < elements.size(); i++) {
            scrollByPixel("0", "600");
            Thread.sleep(2500);
            elements = webElements(milesToAirports);
            size = elements.size();
            if (size >= 10 || isElementDisplayed(resultInfo)) {
                break;
            }
        }
        if (elements.size() > 10) {
            for (int i = 0; i < 10; i++) {
                String[] ratings = elements.get(i).getText().split(" ");
                double miles = Double.parseDouble(ratings[0]);
                if (miles > 10.00) {
                    System.out.println("Mile airport is:  " + miles);
                    return false;
                }
            }
        } else {
            for (WebElement element : elements) {
                String[] ratings = element.getText().split(" ");
                double miles = Double.parseDouble(ratings[0]);
                if (miles > 10.00) {
                    System.out.println("Mile airport is:  " + miles);
                    return false;
                }
            }
        }
        return true;
    }
    public void setHotelTextFiled(String hotel) {
        sendValue(hotelTextFiled, hotel);
        clickOn(buttonHotelTextFiled);
    }
    public boolean isDisplaysRadiusDowntown() throws InterruptedException {
        List<WebElement> elements = webElements(milesToDowntown);
        int size;
        for (int i = 0; i < elements.size(); i++) {
            scrollByPixel("0", "600");
            Thread.sleep(2500);
            elements = webElements(milesToDowntown);
            size = elements.size();
            if (size >= 10 || isElementDisplayed(resultInfo)) {
                break;
            }
        }
        if (elements.size() > 10) {
            for (int i = 0; i < 10; i++) {
                String[] ratings = elements.get(i).getText().split(" ");
                double miles = Double.parseDouble(ratings[0]);
                if (miles > 10.00) {
                    System.out.println("Mile downtown is: " + miles);
                    return false;
                }
            }
        } else {
            for (WebElement element : elements) {
                String[] ratings = element.getText().split(" ");
                double miles = Double.parseDouble(ratings[0]);
                if (miles > 10.00) {
                    System.out.println("Mile downtown is: " + miles);
                    return false;
                }
            }
        }
        return true;
    }
}
