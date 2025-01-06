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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-success font-semibold border-b-2 border-success"
              : "hover:text-success"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/campaigns"
          className={({ isActive }) =>
            isActive
              ? "text-success font-semibold border-b-2 border-success"
              : "hover:text-success"
          }
        >
          All Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addNewCampaign"
          className={({ isActive }) =>
            isActive
              ? "text-success font-semibold border-b-2 border-success"
              : "hover:text-success"
          }
        >
          Add New Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-success font-semibold border-b-2 border-success"
              : "hover:text-success"
          }
        >
          About Us
        </NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink
              to="/myCampaigns"
              className={({ isActive }) =>
                isActive
                  ? "text-success font-semibold border-b-2 border-success"
                  : "hover:text-success"
              }
            >
              My Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myDonations"
              className={({ isActive }) =>
                isActive
                  ? "text-success font-semibold border-b-2 border-success"
                  : "hover:text-success"
              }
            >
              My Donations
            </NavLink>
          </li>
        </>
      )}
      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className="hover:text-success font-semibold"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signUp"
              className="hover:text-success font-semibold"
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className={`shadow-md px-5 fixed top-0 left-0 right-0 ${theme === 'dark'? 'bg-gray-800' : 'bg-white'} dark:bg-gray-800 z-10`}>
      <div className="navbar w-4/5 mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-white rounded-box shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold text-success"
          >
            Crowdcube
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost text-xl text-success"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          {user?.photoURL && (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-success"
              />
              <ul className="absolute right-0 hidden w-40 bg-base-100 rounded-lg shadow-lg group-hover:block">
                <li className="px-4 py-2 border-b text-success font-semibold">
                  {user.displayName}
                </li>
                <li className="px-4 py-2">
                  <button
                    onClick={loggedOut}
                    className="btn btn-sm bg-error text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
