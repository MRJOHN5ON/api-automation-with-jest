// eslint-disable-next-line no-undef
const config = require('../config');


const createTestKit = async () => {
    const response = await fetch(`${config.API_URL}${config.CREATE_KIT}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Ryleys kit', // New kit name
            cardId: 4 // New card ID
        })
    });
    const data = await response.json();
    return data; 
};

test('Should delete the created kit and return true value', async () => {
    let actualBody;
    try {
        const testKit = await createTestKit(); // runs function of creating new kit 
        const kitId = testKit.id; // Extract the ID from new kit

        const deleteResponse = await fetch(`${config.API_URL}${config.DELETE_ENDPOINT2}/${kitId}`, { 
            method: 'DELETE',
        });

        actualBody = await deleteResponse.json();
        
        // Check if the delete operation was successful
        expect(actualBody.ok).toBe(true);
    } catch (error) {
        console.error(error);
    }
});
