import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, signInWithGoogle, error } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const userNotFindError = "Firebase: Error (auth/invalid-credential).";
  const shortPassword = "short-password";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password, navigate, location);
  };

  return (
    <div className="flex min-h-screen bg-green-50 dark:bg-gray-900">
      {/* Left side with text content */}
      <div className="w-1/2 hidden lg:flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-l-xl">
        <h1 className="text-4xl font-bold">Welcome to Crowdcube</h1>
        <p className="mt-4 text-lg">
          Empower your ideas and make a difference in the world. Join our community and help fund meaningful projects!
        </p>
        <p className="mt-6 text-xl">
          Your support can turn dreams into reality.
        </p>
      </div>

      {/* Right side with the login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="text-center mb-6">
            <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
              Login Now
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Login into your account to participate and support campaigns.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                className="input input-bordered w-full py-2 px-4 mt-2 bg-white"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                className="input input-bordered w-full py-2 px-4 mt-2 bg-white" 
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && error === userNotFindError && (
              <p className="text-red-600">Email or Password Incorrect!</p>
            )}
            {error && error === shortPassword && (
              <p className="text-red-600">
                Password should be at least 6 characters long.
              </p>
            )}

            <button
              type="submit"
              className="btn btn-success w-full py-3 mt-4 rounded-full bg-white"
            >
              Login
            </button>

            <div className="flex items-center justify-between mt-6">
              <span className="text-gray-600 dark:text-gray-300">
                New User? <Link to="/signUp" className="text-blue-600">Sign Up</Link>
              </span>
             
            </div>
          </form>
          <button
                className="btn btn-outline w-full"
                onClick={() => signInWithGoogle(navigate, location)}
              >
                Login with Google
              </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
