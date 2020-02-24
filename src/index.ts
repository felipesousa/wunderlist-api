import Auth, { Headers } from './lib/auth';

class WunderlistApi {
  public auth: null | any;

  constructor({ accessToken, clientId }: Headers) {
    this.auth = null;
    this.authorize({ accessToken, clientId });
  }

  authorize({ accessToken, clientId }: Headers): void {
    this.auth = new Auth({ accessToken, clientId });
  }
}

export default WunderlistApi;
