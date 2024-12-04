import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

    const {loginUser, signInWithGoogle} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
         
        loginUser(email, password)
        
    }

  return (
    <div className="text-center">
      <div className="my-10">
        <h2 className="font-bold text-3xl pb-2">Login Now</h2>
        <p>Login into your account for participate here.</p>
      </div>
      <form onSubmit={handleLogin} className="w-4/5 mx-auto flex flex-col gap-5">
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
        <div className="divider"></div>
        <button className="btn" onClick={signInWithGoogle}>Login With Google</button>
        <span>New User? <Link to='/signUp'>Sign Up</Link></span>
      </form>
    </div>
  );
};

export default Login;
