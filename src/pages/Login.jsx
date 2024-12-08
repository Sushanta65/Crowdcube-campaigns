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
    <div className="text-center">
      <div className="my-10">
        <h2 className="font-bold text-3xl pb-2">Login Now</h2>
        <p>Login into your account for participate here.</p>
      </div>
      <form
        onSubmit={handleLogin}
        className="w-4/5 mx-auto flex flex-col gap-5"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            className="w-3/6 py-2 px-3"
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            className="w-3/6 py-2 px-3"
            type="password"
            placeholder="Password"
            name="password"
          />
        </label>
        <input className="btn" type="submit" value="Login" />
        {error && error === userNotFindError && (
          <p className="text-red-800">Email or Password Incorrect!</p>
        )}
        {error && error === shortPassword && (
          <p className="text-red-800">
            Password should be at least 6 characters long.
          </p>
        )}
        <div className="divider"></div>
        <button
          className="btn"
          onClick={() => signInWithGoogle(navigate, location)}
        >
          Login With Google
        </button>
        <span>
          New User? <Link to="/signUp">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
