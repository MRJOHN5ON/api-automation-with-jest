// eslint-disable-next-line no-undef
const config = require('../config');

// Test 1 - To verify HTTP code 200 when deleting a kit
test('should expect status code 200', async () => {
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

//TEST 2: to ensure the response body contains information expected from the api docs
test(`should expect response body to return true value`, async () => {
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
