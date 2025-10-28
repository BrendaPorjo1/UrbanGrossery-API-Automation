const fetch = require('node-fetch');
const config = require('../config');

test('GET /kits should return status 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('GET /kits should return a list of kits', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`);
		const data = await response.json();
		expect(Array.isArray(data)).toBe(true);
		expect(data.length).toBeGreaterThan(0);
	} catch (error) {
		console.error(error);
	}
});