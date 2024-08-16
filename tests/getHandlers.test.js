// eslint-disable-next-line no-undef
const config = require('../config');

//first test: checking if database returns with http code 200
test('Database Code 200', async () => {
	let actualResponse;
	try {
		const response = await fetch(`${config.API_URL}${config.GET_ENDPOINT}`);
		actualResponse = response.status //get the actual response code 
	} catch (error) {
		console.error(error); // show error codes in console 
	}
	expect(actualResponse).toBe(200)
});

// second test to ensure response body gives database info
test('accurate response body', async () => {
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}${config.GET_ENDPOINT}`);
		actualBody = await response.text() // wait to recieve the body response as text
		console.log(actualBody) //print in the console to check
	} catch (error) {
		console.error(error); //otherwise print any errors in console
	}
	expect(actualBody).toContain(`productsList`)

});
