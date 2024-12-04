import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
    const {createNewUser, users} = useContext(AuthContext)
    
    const handleSingUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        
        createNewUser(email, password, name, photoUrl)
        console.log(users)
    }

  return (
    <div className="text-center">
      <div className="my-10">
        <h2 className="font-bold text-3xl pb-2">Sign Up Now</h2>
        <p>Sign Up a account for participate here.</p>
      </div>
      <div>
        <form onSubmit={handleSingUp} className="w-4/5 mx-auto flex flex-col gap-5">
          <label className="input input-bordered flex items-center gap-2">
            <input className="grow" type="Name" placeholder="Name" name="name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="email" placeholder="Email" name="email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="url" placeholder="Photo Url" name="photoUrl" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="password" placeholder="Password" name="password" />
          </label>
          <input className="btn" type="submit" value='Sign Up' />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
