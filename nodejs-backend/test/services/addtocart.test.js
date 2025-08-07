const assert = require('assert');
const app = require('../../src/app');

describe('\'addtocart\' service', () => {
  it('registered the service', () => {
    const service = app.service('addtocart');

    assert.ok(service, 'Registered the service (addtocart)');
  });
});
