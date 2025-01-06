import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createNewUser, users, signInWithGoogle, error } = useContext(AuthContext);
  const userAlreadyExistError = "Firebase: Error (auth/email-already-in-use).";
  const shortPasswordError = "short-password";
  const strongLessPassword = 'easy-password';

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    createNewUser(email, password, name, photoUrl);
    console.log(users);
  };

  return (
    <div className="flex min-h-screen bg-green-50 dark:bg-gray-900">
      {/* Left side with the sign-up form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="text-center mb-6">
            <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
              Sign Up Now
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Create an account to participate and support campaigns.
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                className="input input-bordered w-full py-2 px-4 mt-2 bg-white"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                className="input input-bordered w-full py-2 px-4 mt-2 bg-white"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Photo URL</label>
              <input
                className="input input-bordered w-full py-2 px-4 mt-2 bg-white"
                type="url"
                name="photoUrl"
                placeholder="Enter your photo URL"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                className="input input-bordered w-full py-2 px-4 mt-2 bg-white"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && error === shortPasswordError && (
              <p className="text-red-600">Password must be at least 6 characters.</p>
            )}
            {error && error === userAlreadyExistError && (
              <p className="text-red-600">This email is already used in another account.</p>
            )}
            {error && error === strongLessPassword && (
              <p className="text-red-600">Password must include at least one uppercase letter and one lowercase letter.</p>
            )}

            <button
              type="submit"
              className="btn btn-success w-full py-3 mt-4 rounded-full"
            >
              Sign Up
            </button>

            <div className="flex items-center justify-between mt-6">
              <span className="text-gray-600 dark:text-gray-300">
                Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
              </span>
             
            </div>
          </form>
          <button
                className="btn btn-outline w-full"
                onClick={signInWithGoogle}
              >
                Sign Up with Google
              </button>
        </div>
      </div>

      {/* Right side with context content */}
      <div className="w-1/2 hidden lg:flex flex-col justify-center items-center text-center bg-gradient-to-l from-green-400 to-blue-500 text-white p-8 rounded-r-xl">
        <h1 className="text-4xl font-bold">Welcome to Crowdcube</h1>
        <p className="mt-4 text-lg">
          Empower your ideas and make a difference in the world. Join our community and help fund meaningful projects!
        </p>
        <p className="mt-6 text-xl">
          Your support can turn dreams into reality.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
