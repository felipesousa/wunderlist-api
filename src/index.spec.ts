import WunderlistApi from './';
import Auth from './lib/auth';

describe('Core', () => {
  describe('::Instance', () => {
    let instance: WunderlistApi;

    beforeEach(() => {
      instance = new WunderlistApi({
        accessToken: 'accessToken',
        clientId: 'clientId',
      });
    });

    test('should be a instance of WunderlistApi', () => {
      expect(instance).toBeInstanceOf(WunderlistApi);
    });

    test('should has a auth property with the headers', () => {
      expect(instance['auth']).toBeInstanceOf(Auth);
      expect(instance['auth']).toEqual({
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': 'accessToken',
          'X-Client-ID': 'clientId',
        },
      });
    });
  });
});
