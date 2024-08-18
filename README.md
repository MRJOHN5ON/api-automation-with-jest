# <span style="color:yellow">API Testing Using JavaScript and Jest</span>

This repository contains 5 test suites for basic HTTP code verification and response body validation for the Urban Grocers API. This is a student project offered by TripleTen. The API_URL is hosted on a temporary server. To receive an active API_URL, Please reach out to me or TripleTen.<br>
API Documentation is available `API_URL` + `/docs/` or `API_URL` + `/API/SWAGGER` 

## <span style="color:red"> Languages and Frameworks Used</span>

- JavaScript
- Node.js
- Jest

## <span style="color:red">Config.js</span>

This file contains the base URL for the API and different endpoints for the respective test suites.

## <span style="color:Red"> Test Suites</span>

### `getHandlers.test.js`

This suite contains 2 tests:
- **<span style="color:yellow">Test 1**:</span> Ensures we can send a `GET` request to an endpoint containing a database and receive an `HTTP CODE 200`.
- **<span style="color:yellow">Test 2**:</span> Verifies that the response body contains the expected information from the database.

### `postHandlers.test.js`

This suite contains 3 tests:
- **<span style="color:yellow">Test 1**:</span> Ensures we can send a `POST` request with the appropriate request body (XML) as provided in the API docs and receive an `HTTP CODE 200`. This request checks the cost and possibility of fast delivery.
- **<span style="color:yellow">Test 2**:</span> Verifies that the response body matches the expected response as stated in the API docs.
- **<span style="color:yellow">Test 3**:</span> Checks if the response correctly handles a specific delivery time scenario according to the API's delivery rules.

### `putHandlers.test.js`

This suite contains 3 tests:
- **<span style="color:yellow">Test 1**:</span>
Ensures we can send a `PUT` request with the appropriate request body (JSON) as provided in the API docs and receive an `HTTP CODE 200`. This request updates the price of a pre-existing product in the database.
- **<span style="color:yellow">Test 2**:</span> 
Verifies that the response body matches the expected response as stated in the API docs.
- **<span style="color:yellow">Test 3**:</span> This test ensures that the API returns `HTTP CODE 404` when attempting to update the price of a product not listed in the database. To do this, the `PUT_ENDPOINT2` is used from the `config.js` file. 

### `deleteHandlers.test.js`
This suite contains 2 tests:
- **<span style="color:yellow">Test 1**:</span> Validates that when using the `DELETE_ENDPOINT` the API returns `HTTP CODE 200`. This request deletes a kit by the id number passed in the path params of the endpoint. 
- **<span style="color:yellow">Test 2**:</span>
Verifies that the response body matches the expected response as stated in the API docs. In this particular case when deleting a pre-existing kit, we can expect the response body to return key/value pair of `"OK":TRUE`

### `postDelete.test.js`
This suite contains 1 tests:
- **<span style="color:yellow">Test 1**:</span> First I created a new kit by making a new function `createTestKit`. This function sends a `POST` request to `API_URL` `/api/v1/kits/`. It then returns the data which contains a kit ID. The test then extracts the ID from the data and makes a `DELETE` call to the `API_URL` `/api/v1/kits/` adding the kit ID path parameter. Then the test expects the response body to return key/value pair of `"OK":TRUE`.<br><br> <strong>This ensure the newly created kit was deleted</strong> 
## <span style="color:red">Running Tests</span>
Ensure the API_URL in config.js is correct.
Verify that the API server is running and accessible





To run the tests, use the following command:

```bash
npm test
