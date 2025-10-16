export interface LoginDataRequest {
  username: string;
  password: string;
}

export interface LoginDataResponse {
  id: number;
  username: string;
  connectedAt: Date;
}

export interface LoginErrorResponse {
  error: string;
}

export class AuthService {
  private static PORT = 3000;
  private static BASE_URL = `http://localhost:${AuthService.PORT}`;
  private static AUTH_ENDPOINT = `${AuthService.BASE_URL}/auth`;

  public static async login(
    data: LoginDataRequest
  ): Promise<LoginDataResponse | LoginErrorResponse> {
    const { username, password } = data;

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    try {
      const response = await fetch(
        `${AuthService.AUTH_ENDPOINT}/login`,
        options
      );

      const responseJson: LoginDataResponse = await response.json();

      if (response.ok) {
        return responseJson;
      }

      console.log("Unknown error occured: ", response);
      return {
        error: "Unknown error occured.",
      };
    } catch (error) {
      console.log("Network error: ", error);
      return {
        error: "Network error. Please try again later.",
      };
    }
  }
}
