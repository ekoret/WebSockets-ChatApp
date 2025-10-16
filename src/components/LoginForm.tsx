import { useNavigate } from "@tanstack/react-router";
import { useUserContext } from "../hooks/useUserContext";
import { LocalStorageManager } from "../classes/LocalStorageManager";
import {
  AuthService,
  type LoginDataResponse,
  type LoginErrorResponse,
} from "../classes/AuthService";
import { useState } from "react";
import User from "../classes/User";

interface LoginFormData {
  username: string;
  password: string;
}

function LoginForm() {
  const userContext = useUserContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const username = form.get("username") as string | null;
    const password = form.get("password") as string | null;

    if (!username) {
      setUsernameError("Username cannot be empty");
      return;
    } else if (!password) {
      setPasswordError("Password cannot be empty");
      return;
    }

    const user = await AuthService.login({
      username,
      password,
    });

    if ("error" in user) {
      setLoginError(user.error);
      setUsernameError(null);
      setPasswordError(null);
      return;
    }

    console.log("Logged in successfully, user is: ", user);
    LocalStorageManager.setItem("user", JSON.stringify(user));

    const appUser = new User(user.id, user.username, user.connectedAt);
    userContext.setUser(appUser);

    navigate({
      to: "/",
    });
  };

  const updateFormState = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    if (usernameError || passwordError || loginError) {
      setUsernameError(null);
      setPasswordError(null);
      setLoginError("");
    }

    if (formData) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  console.log(formData);

  return (
    <form
      onInput={(e) => updateFormState(e)}
      className="flex flex-col"
      method="post"
      onSubmit={handleLogin}
    >
      {usernameError && <small className="text-red-500">{usernameError}</small>}
      <label className="text-left" htmlFor="username">
        Username
      </label>
      <input
        className="border-3 rounded mb-4 p-2"
        name="username"
        type="text"
      />
      {passwordError && <small className="text-red-500">{passwordError}</small>}
      <label className="text-left" htmlFor="password">
        Password
      </label>
      <input
        className="border-3 rounded mb-4 p-2"
        name="password"
        type="password"
      />
      {loginError && <small className="text-red-500 mb-2">{loginError}</small>}
      <button
        className="bg-bg-base p-4 rounded-xl text-white text-lg font-bold dark:bg-white dark:text-bg-base"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
