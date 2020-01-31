const request = require('supertest');
const createApp = require('./app');

describe('Version routes', () => {
  let app;
  beforeEach(() => {
    app = createApp();
  });
  describe('GET /version-compare', () => {
    it('should respond that 2.0 is greater than 0.9', async () => {
      const response = await request(app)
        .get('/version-compare')
        .query({
          versions: ['2.0', '0.9']
        })
        .expect(200)

        expect(response.body).toEqual('2.0');
    });

    it('should respond with an error when no versions provided', async () => {
      const response = await request(app)
        .get('/version-compare')
        .query({
          versions: []
        })
        .expect(400)

        expect(response.body.error).toEqual('Must supply two or more versions');
    });

    it('should response that "abc" and "1.2.x" are invalid versions', async () => {
      const response = await request(app)
        .get('/version-compare')
        .query({
          versions: ['abc', '1.2.x', '3']
        })
        .expect(400)

        expect(response.body.error).toEqual('These versions are invalid: abc, 1.2.x');
    });
  });
});
