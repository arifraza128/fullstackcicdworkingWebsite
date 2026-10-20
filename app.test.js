const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('./server');

test('health endpoint returns status ok', async () => {
  const server = createServer();

  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

  try {
    const response = await fetch(
      `http://127.0.0.1:${server.address().port}/health`
    );

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
  } finally {
    await new Promise((resolve, reject) =>
      server.close(error => error ? reject(error) : resolve())
    );
  }
});
