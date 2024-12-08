import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/campaigns">All Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/addNewCampaign">Add New Campaign</NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink to="/myCampaigns">My Campaigns</NavLink>
          </li>
          <li>
            <NavLink to="/myDonations">My Donations</NavLink>
          </li>
        </>
      )}
      {!user && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-md px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-base-100 rounded-box shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Crowdcube
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">

        <button
          onClick={toggleTheme}
          className="btn btn-ghost text-xl text-primary-focus"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        {user?.photoURL ? (
          <div className="relative group">
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
            />
            <ul className="absolute right-0 hidden w-40 bg-base-100 rounded-lg shadow-lg group-hover:block">
              <li className="px-4 py-2 border-b">{user.displayName}</li>
              <li className="px-4 py-2">
                <button onClick={loggedOut} className="btn btn-sm btn-error">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
