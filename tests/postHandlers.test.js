// eslint-disable-next-line no-undef
const config = require('../config');

let createdOrderId;

const requestBody = {
  productsList: [
    { id: 5, quantity: 1 }
  ],
  deliveryTime: 11
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

    createdOrderId = data.id;

    expect(data).toHaveProperty('courierService');
    expect(data.courierService).toBe('Order and Go');

    expect(data).toHaveProperty('status');
    expect(data.status).toBe(0);

    expect(data).toHaveProperty('wareHouse');
    expect(data.wareHouse.toLowerCase()).toBe('fresh food');

    expect(Array.isArray(data.productsList)).toBe(true);
    expect(data.productsList.length).toBeGreaterThan(0);
  } catch (error) {
    console.error(error);
  }
});