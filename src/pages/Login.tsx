import { useNavigate } from "@tanstack/react-router";
import { AppContext, type IGlobalData } from "../contexts/AppContext";
import { useContext } from "react";
import User from "../classes/User";

const Login = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const username = form.get("username") as string;
    const password = form.get("password") as string;

    const updatedGlobalData: IGlobalData = {
      user: new User(username, password),
    };

    context?.setGlobalData((prev) => ({
      ...prev,
      ...updatedGlobalData,
    }));

    navigate({
      to: "/",
    });
  };

  return (
    <div className="mx-auto max-w-[300px] text-center h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8">Login</h2>
      <form className="flex flex-col" method="post" onSubmit={handleLogin}>
        <label className="text-left" htmlFor="username">
          Username
        </label>
        <input
          className="border-3 rounded mb-4 p-2"
          name="username"
          type="text"
        />
        <label className="text-left" htmlFor="password">
          Password
        </label>
        <input
          className="border-3 rounded mb-4 p-2"
          name="password"
          type="password"
        />
        <button
          className="bg-bg-base p-4 rounded-xl text-white text-lg font-bold dark:bg-white dark:text-bg-base"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
