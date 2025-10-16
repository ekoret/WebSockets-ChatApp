export interface LoginDataRequest {
  username: string;
  password: string;
}

export interface LoginDataResponse {
  id: number;
  username: string;
  connectedAt: Date;
}

export class AuthService {
  private static PORT = 3000;
  private static BASE_URL = `http://localhost:${AuthService.PORT}`;
  private static AUTH_ENDPOINT = `${AuthService.BASE_URL}/auth`;
  private static API_ENDPOINT = `${AuthService.BASE_URL}/api`;

  public static async login(data: LoginDataRequest) {
    const { username, password } = data;

    // TODO: is check needed is handleLogin is handling it?
    if (!username || !password)
      throw new Error("Missing username or password when attempting to login");

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(`${AuthService.AUTH_ENDPOINT}/login`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e);
        throw new Error("Error logging in user");
      });

    console.log("Response result: ", response);
    return response;
  }
}
