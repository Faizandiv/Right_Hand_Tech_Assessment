# Right_Hand_Tech_Assessment

 ### Here is a detailed breakdown of the code the first test case:

 ### Test Case 1

class TestCase1

This class defines a test case for the demo request form. It has several properties and methods that are used to interact with the form and submit the data via API requests.
constructor()
The constructor method is used to initialize the class properties. It sets the values of several CSS selectors for form fields, URLs for visiting the website and submitting the form, and a URL for sending a demo email.
visitPage()
This method uses the cy.visit() command to navigate to the website's URL specified in the constructor.
fillDemoRequestForm()
This method is used to fill out the demo request form. It types in values for the first name, last name, business name, and email fields. It also generates a CAPTCHA code by getting two numbers from the page, adding them together, and then typing in the sum as the answer.
hubspotRequest(data)
This method is used to submit the form data to a HubSpot API endpoint. It creates a FormData object from the data passed as an argument, and then sends a POST request to the API endpoint with the form data. It uses cy.request() to make the API call.
demoEmailRequest(data)
This method is used to send a demo email with the form data. It creates a FormData object from the data passed as an argument, and then sends a POST request to a demo email API endpoint with the form data. It uses cy.request() to make the API call.
submitRequestviaApi()
This method is used to retrieve the data filled out in the form and then submit it via the two API requests. It retrieves the values of the first name, last name, business name, and email fields, and then creates two objects of form data to be used in the API 


### Test Case 2

loginUser()
This function visits the login page of the Sauce Demo Shopping website, enters the username and password, and clicks the login button to log in.

sort()
This function sorts the items on the inventory page of the Sauce Demo Shopping website in descending order of their names.

verifySorting()
This function verifies that the items on the inventory page are sorted in descending order of their names.

addFirstItem()
This function adds the first item to the cart on the inventory page. It reads the details of the item to be added from a testData.json file, verifies that the item's name and price are displayed correctly on the page, and clicks the "Add to Cart" button to add the item to the cart.

addSecondItem()
This function adds the second item to the cart on the inventory page. Like addFirstItem(), it reads the details of the item to be added from the testData.json file, verifies that the item's name and price are displayed correctly on the page, and clicks the "Add to Cart" button to add the item to the cart.

cart()
This function clicks the shopping cart icon on the top-right corner of the page to view the items in the cart.

checkOut()
This function navigates to the checkout page, enters the first name, last name, and postal code of the user, verifies that the postal code input field can accept non-integers as well, and finally clicks the "Continue" button to proceed with the checkout process.

verifyitemPriceandTotalPrice()
This function verifies that the total price displayed on the checkout page is correct, based on the prices of the items in the cart and the tax amount.

verifyCheckout()
This function verifies that the checkout process has been completed successfully by checking if the "Finish" button is visible on the page.

backToHome()
This function clicks the "Back Home" button on the checkout complete page and verifies that the URL is redirected to the inventory page.



