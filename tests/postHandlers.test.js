// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  productsList: [
    { id: 1, quantity: 2 },
    { id: 5, quantity: 2 },
    { id: 3, quantity: 1 }
  ]
};

test('POST /orders should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: 'POST',
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
    expect(data).toHaveProperty('courierService');
    expect(data.courierService).toBe('Fast Delivery');
    expect(data).toHaveProperty('status');
    expect(data.status).toBe(0);
    expect(data).toHaveProperty('wareHouse');
    expect(data.wareHouse).toBe('Fresh food');
    expect(Array.isArray(data.productsList)).toBe(true);
    expect(data.productsList.length).toBeGreaterThan(0);
  } catch (error) {
    console.error(error);
  }
});