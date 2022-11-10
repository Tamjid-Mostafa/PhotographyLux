import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../../src/logo.png";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const {
    providerGoogleSignIn,
    providerGithubSignIn,
    providerCreateUser,
    updateUserProfile,
    loading, setLoading
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  /* -----------Google Sign In Handler------------ */

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerGoogleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  /* Create user with Email Password*/
  const handleSignUpUSer = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    providerCreateUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        toast.success("Account Created successfully.");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        toast.error(error.message.slice(22, -2));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600"></div>
        </div>
      ) : (
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 mr-2" src={logo} alt="logo" />
            PhotgraphyLux
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form
                onSubmit={handleSignUpUSer}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlhtmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlhtmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlhtmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forgot_password"
                    className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-cyan-400 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already, an User? go to{" "}
                  <Link
                    to="/login"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Log In
                  </Link>
                </p>
              </form>
              
      {/*------ Sign Up  with Google-------- */} 

              <button
                onClick={handleGoogleSignIn}
                className="w-full font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-2">Log In with Google</span>
              </button>

            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default SignUp;
