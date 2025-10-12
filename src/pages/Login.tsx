import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="mx-auto max-w-[300px] text-center h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
