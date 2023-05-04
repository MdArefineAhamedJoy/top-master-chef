import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../route/AuthProvider";
import { FaBars, FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handelLogOut = () => {
    console.log("click logout");
    logOut()
      .then((res) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };

  return (
    <div>
      <div className="w-full  bg-gray-100  ">
        <nav className={`md:flex justify-between items-center  p-2 md:px-5  `}>
          <h1 className=" md:text-3xl  md:mb-0 mb-3 py-4 md:p-4 text-xl font-extrabold md:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-white">
            Top Muster Chef
          </h1>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-3 top-4 cursor-pointer md:hidden"
          >
            {open ? <FaWindowClose></FaWindowClose> : <FaBars></FaBars>}
          </div>
          <div
            className={`absolute md:static md:bg-red-none pb-5 md:pb-0  bg-gray-100 ps-3 md:ps-0 md:z-auto  z-[1] left-0 w-screen md:w-auto transition-all duration-500 ease-in ${
              open
                ? "top-14 opacity-100"
                : "top-[-200px] md:opacity-100 opacity-0"
            } `}
          >
            <ul className="ms-auto md:flex">
              <li>
                <NavLink style={navLinkStyle} className="btn btn-ghost" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={navLinkStyle}
                  className="btn btn-ghost"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                {user ? (
                  <NavLink
                    style={navLinkStyle}
                    className="btn btn-ghost"
                    onClick={handelLogOut}
                  >
                    LogOut
                  </NavLink>
                ) : (
                  <NavLink
                    style={navLinkStyle}
                    className="btn btn-ghost"
                    to="/login"
                  >
                    LogIn
                  </NavLink>
                )}
              </li>
              <li>
                {user ? (
                  <div className="relative">
                    <img
                      className="w-12 h-12 mx-2 rounded-full active:block"
                      src={user?.photoURL}
                    />
                    <div className="absolute top-16 right-4 w-60 p-2 pb:4   bg-green-500 rounded-lg shadow-lg opacity-0 transition-opacity duration-300">
                      <p className="text-white font-bold">
                        {" "}
                        {user.displayName}
                      </p>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    style={navLinkStyle}
                    className="btn btn-ghost "
                    to="/register"
                  >
                    Register
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
