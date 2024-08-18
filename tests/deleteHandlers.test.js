// eslint-disable-next-line no-undef
const config = require('../config');

// Test 1 - To verify HTTP code 200 when deleting a kit
<<<<<<< HEAD
test('Should return HTTP status code 200', async () => {
=======
test('should expect status code 200', async () => {
>>>>>>> 4a000a2fedb0b9e1ec3616cabf0df9b890f39ecc
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}${config.DELETE_ENDPOINT}`, {
			method: 'DELETE',
		});
		actualResponse = response.status //get the actual response code
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse).toBe(200);
});

<<<<<<< HEAD
//TEST 2: to ensure the response body contains information expected from the api docs when deleting a kit 
test(`Should return a response body with "ok": true `, async () => {
=======
//TEST 2: to ensure the response body contains information expected from the api docs
test(`should expect response body to return true value`, async () => {
>>>>>>> 4a000a2fedb0b9e1ec3616cabf0df9b890f39ecc
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}${config.DELETE_ENDPOINT}`,{
			method: 'DELETE',
		});
		actualBody = await response.json()
	}
	catch (error) {
		console.error(error);
	}
	expect(actualBody.ok).toBe(true);
});
