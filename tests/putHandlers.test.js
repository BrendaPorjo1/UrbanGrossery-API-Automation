// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  productsList: [
    { id: 5, quantity: 1 }
  ]
};
const requestBodyPost = {
  productsList: [
    { id: 5, quantity: 1 }
  ],
  deliveryTime: 11
};


test('PUT /orders/:id should return status 200', async () => {
  try {const responsePost = await fetch(`${config.API_URL}/api/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBodyPost)
      });
     const dataPost = await responsePost.json()
     const orderId = dataPost.id
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
  try {const responsePost = await fetch(`${config.API_URL}/api/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBodyPost)
      });
     const dataPost = await responsePost.json()
     const orderId = dataPost.id
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

    expect(data).toHaveProperty('courierService');
    expect(data.courierService).toBe('Order and Go');

    expect(data).toHaveProperty('wareHouse');
    expect(data.wareHouse.toLowerCase()).toBe('fresh food');

    expect(data).toHaveProperty('status');
    expect(data.status).toBe(0);
  } catch (error) {
    console.error(error);
  }
});