import Auth from './auth';

describe('Auth', () => {
  describe('::Instance', () => {
    let auth: Auth;

    beforeAll(() => {
      auth = new Auth({
        accessToken: 'accessToken',
        clientId: 'clientId',
      });
    });

    test('should be a instance of Auth ', () => {
      expect(auth).toBeInstanceOf(Auth);
    });

    test('should set the headers when initialize a new instance', () => {
      expect(auth['headers']).toEqual({
        'Content-Type': 'application/json',
        'X-Access-Token': 'accessToken',
        'X-Client-ID': 'clientId',
      });
    });
  });
});
