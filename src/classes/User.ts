export default class User {
  public username: string;
  public connected: boolean;
  public connectedAt: Date;

  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.connected = false;
    this.connectedAt = new Date();
  }
}
