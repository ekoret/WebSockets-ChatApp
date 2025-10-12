import { useNavigate } from "@tanstack/react-router";
import { useUserContext } from "../hooks/useUserContext";
import User from "../classes/User";

function LoginForm() {
  const userContext = useUserContext();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const username = form.get("username") as string;
    const password = form.get("password") as string;

    const user = new User(username, password);

    userContext.setUser(user);

    navigate({
      to: "/",
    });
  };

  return (
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
  );
}

export default LoginForm;
