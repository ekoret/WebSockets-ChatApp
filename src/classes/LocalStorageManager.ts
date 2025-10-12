export class LocalStorageManager {
  public static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public static getItem(key: string) {
    return localStorage.getItem(key);
  }

  public static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public static clear() {
    localStorage.clear();
  }
}
