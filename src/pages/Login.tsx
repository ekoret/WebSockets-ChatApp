const Login = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const form = new FormData(formEl);

    const username = form.get("username");
    const password = form.get("password");

    console.log(username, password);
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
