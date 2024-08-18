// eslint-disable-next-line no-undef
const config = require('../config');

//first test: checking if database returns with http code 200
<<<<<<< HEAD
test('Should return HTTP status code 200', async () => {
=======
test('Should respond with status code 200', async () => {
>>>>>>> 4a000a2fedb0b9e1ec3616cabf0df9b890f39ecc
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
<<<<<<< HEAD
test('Should return a response body, "productsList"', async () => {
=======
test('Should contain productsList in response body', async () => {
>>>>>>> 4a000a2fedb0b9e1ec3616cabf0df9b890f39ecc
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
