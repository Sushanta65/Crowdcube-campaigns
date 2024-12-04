import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user} = useContext(AuthContext)

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allCampaign">All Campaign</Link>
      </li>
      <li>
        <Link to="/addNewCampaign">Add New Campaign</Link>
      </li>
     {user?.email &&  <> <li>
        <Link to="/myCampaign">My Campaign</Link>
      </li>
      <li>
        <Link to="/myDonation">My Donations</Link>
      </li></>}
      {user? <></>: <><li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li></>}
      
      {user?.email? <li className="relative group">
        <button className="cursor-pointer">User</button>
        <ul className="absolute left-0 top-8 hidden w-40 bg-base-100 p-2 shadow group-hover:block">
          <li>
            <span>{user.displayName}</span>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </li>: <></>}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Crowdcube</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
