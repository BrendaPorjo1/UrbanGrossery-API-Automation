// eslint-disable-next-line no-undef
const config = require('../config');

const kitId = 7;

test('DELETE /kits/:id should return status 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
      method: 'DELETE'
    });
    expect(response.status).toBe(200);
  } catch (error) {
    console.error(error);
  }
});
test('DELETE /kits/:id should confirm deletion', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    expect(data).toHaveProperty('message');
    expect(data.message).toMatch(/successfully delete/i);
  } catch (error) {
    console.error(error);
  }
});