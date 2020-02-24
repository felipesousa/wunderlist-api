import Auth, { Headers } from './lib/auth';

class WunderlistApi {
  private auth: Auth;

  constructor({ accessToken, clientId }: Headers) {
    this.auth = new Auth({ accessToken, clientId });
  }
}

export default WunderlistApi;
