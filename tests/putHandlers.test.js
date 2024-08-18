// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 175
}
// Test 1 to ensure HTTP status 200 is returned when making a price change using a PUT request
test('Should return HTTP status 200', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}${config.PUT_ENDPOINT}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody) 
		});
		actualResponse = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse).toBe(200)
});

// Test 2 to validate accurate response body when making a price change on a product
test('Should return a response body with "ok": true', async () => {
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}${config.PUT_ENDPOINT}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualBody = await response.json() //wait for the json response body
	} catch (error) {
		console.error(error); //catch any errors and show them in console logs
	}
	expect(actualBody.ok).toBe(true); 
});

// Test 3 - ensure HTTP status 404 is returned when making a price change on a product ID not listed in product db
test('status 404', async () => {
	let actualResponse;
    try {
		const response = await fetch(`${config.API_URL}${config.PUT_ENDPOINT2}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody) 
		});
		actualResponse = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse).toBe(404)
});