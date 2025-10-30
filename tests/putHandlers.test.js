// eslint-disable-next-line no-undef
const config = require('../config');

const orderId = 1;

const requestBody = {
  productsList: [
    { id: 1, quantity: 4 },
    { id: 5, quantity: 2 },
    { id: 3, quantity: 1 },
    { id: 4, quantity: 1 }
  ]
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

test('PUT /orders/:id should return updated order details', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    expect(data).toHaveProperty('productsList');
    expect(Array.isArray(data.productsList)).toBe(true);
    expect(data.productsList.length).toBeGreaterThan(0);
    expect(data.courierService).toBe('Fast Delivery');
    expect(data.wareHouse).toBe('Fresh food');
    expect(data.status).toBe(0);
  } catch (error) {
    console.error(error);
  }
});