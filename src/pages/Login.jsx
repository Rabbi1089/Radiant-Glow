import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";

const Login = () => {
 const {signIn} = useContext(AuthContext)  
  const hanleSignIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  }
  return (
    <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
      <h1 className="mb-3 text-4xl font-serif text-center">Login</h1>
      <form onSubmit={hanleSignIn} noValidate="" action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="leroy@jenkins.com"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          />
          <div className="flex justify-end text-xs text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">
          Sign in
        </button>
      </form>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-600" />
        <p className="px-3 text-gray-600">OR</p>
        <hr className="w-full text-gray-600" />
      </div>
      <div className="my-6 space-y-4">
        <button
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Sign-in with Google</p>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-600">
        Do not have an account?
        <a
          rel="noopener noreferrer"
          href="#"
          className="underline text-gray-800"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
