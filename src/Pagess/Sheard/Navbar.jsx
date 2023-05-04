import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../route/AuthProvider";
import { FaBars, FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handelLogOut = () => {};
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <div>
      <div className="w-full  bg-gray-100  ">
        <nav className={`md:flex justify-between items-center  p-2 md:px-5  `}>
          <h1 className=" md:text-3xl  md:mb-0 mb-3 p-4 text-2xl font-extrabold text-white bg-green-700">
            Top Muster Chef
          </h1>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-3 top-4 cursor-pointer md:hidden"
          >
            {open ? <FaWindowClose></FaWindowClose> : <FaBars></FaBars>}
          </div>
          <div
            className={`absolute md:static md:bg-red-none  bg-gray-100 ps-3 md:ps-0 md:z-auto  z-[1] left-0 w-screen md:w-auto transition-all duration-500 ease-in ${
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
                <NavLink style={navLinkStyle} className="btn btn-ghost" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                {user ? (
                  <NavLink style={navLinkStyle} className="btn btn-ghost" onClick={handelLogOut}>
                    LogOut
                  </NavLink>
                ) : (
                  <NavLink style={navLinkStyle} className="btn btn-ghost" to="/login">
                    LogIn
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink style={navLinkStyle} className="btn btn-ghost " to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
