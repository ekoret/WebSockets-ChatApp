export default class User {
  public username: string;
  public connected: boolean;
  public connectedAt: Date;

  constructor(username: string) {
    this.username = username;
    this.connected = false;
    this.connectedAt = new Date();
  }
}
