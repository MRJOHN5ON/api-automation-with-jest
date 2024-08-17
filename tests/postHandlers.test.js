// eslint-disable-next-line no-undef
const config = require('../config');

//sending xml in request body

const requestBody =
	`<InputModel>
    <productsCount>02</productsCount>
    <productsWeight>5.115</productsWeight>
    <deliveryTime>7</deliveryTime>
</InputModel>`;

const time = 22; // Specific time to test for test 3

//TEST 1: to check the http status will be 200

test('Should be status code 200', async () => {
	let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}${config.POST_ENDPOINT}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/xml'
			},
			body: requestBody, //sending xml body we declared above
		});
		actualResponse = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualResponse).toBe(200)
});

//TEST 2: to ensure the response body contains information expected from the api docs

test('Should have response body containing Fast delivery ', async () => {
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}${config.POST_ENDPOINT}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/xml'
			},
			body: requestBody, //sending xml body we declared above
		});
		actualBody = await response.text() //wait for the response body and get it as text format
	} catch (error) {
		console.error(error); //catch any errors and show them in console logs
	}
	expect(actualBody).toContain(`Fast Delivery`)
});

//Test 3
// According to previous requirements response body should contain isItPossibleToDeliver="false for times 
// outside of 07-21.. therefore this test to check the time of 22
test('Should have response body contain isItPossibleToDeliver="false"', async () => {

	let actualBody;

	try {
		const response = await fetch(`${config.API_URL}${config.POST_ENDPOINT}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/xml'
			},
			body: `<InputModel>
                    <productsCount>02</productsCount>
                    <productsWeight>5.115</productsWeight>
                    <deliveryTime>${time}</deliveryTime>
                </InputModel>`,
		});

		actualBody = await response.text();
		console.log('Response Body:', actualBody); // Log the response body


		expect(actualBody).toContain('isItPossibleToDeliver="false"');
	} catch (error) {
		console.error(error);
	}
});

