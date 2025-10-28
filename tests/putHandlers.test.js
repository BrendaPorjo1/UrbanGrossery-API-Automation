// eslint-disable-next-line no-undef
const config = require('../config');

const orderId = 1;
const requestBody = {
  productsList: '[{"productId": "101", "quantity": 2}]'
};

test('PUT /orders/:id should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    expect(response.status).toBe(200);
  } catch (error) {
    console.error(error);
  }
});
test('PUT /orders/:id should return updated order', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    expect(data).toHaveProperty('orderId');
    expect(data).toHaveProperty('productsList');
  } catch (error) {
    console.error(error);
  }
});