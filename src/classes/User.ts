export default class User {
  public id: number;
  public username: string;
  public connectedAt: Date;

  constructor(id: number, username: string, connectedAt: Date) {
    this.id = id;
    this.username = username;
    this.connectedAt = new Date();
  }
}
