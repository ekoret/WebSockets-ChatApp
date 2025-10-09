export default class User {
  public username: string;
  public firstConnected: number;

  constructor(username: string) {
    this.username = username;
    this.firstConnected = Date.now();
  }
}
