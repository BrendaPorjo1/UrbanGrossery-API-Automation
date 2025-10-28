// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  kitId: "1",
  quantity: 1
};

test('POST /orders should return status 201', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    expect(response.status).toBe(201);
  } catch (error) {
    console.error(error);
  }
});
test('POST /orders should return order details', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    expect(data).toHaveProperty('orderId');
    expect(data).toHaveProperty('status');
  } catch (error) {
    console.error(error);
  }
});