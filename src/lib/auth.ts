export interface Headers {
  clientId: string
  accessToken: string
}

type HeadersT = {
  'X-Access-Token': string
  'X-Client-ID': string
  'Content-Type': string
}

class Auth {
  protected headers: HeadersT

  constructor(headers: Headers) {
    this.headers = this.setHeaders(headers)
  }

  private setHeaders({ clientId, accessToken }: Headers): HeadersT {
    return {
      'X-Access-Token': accessToken,
      'X-Client-ID': clientId,
      'Content-Type': 'application/json',
    }
  }
}

export default Auth
