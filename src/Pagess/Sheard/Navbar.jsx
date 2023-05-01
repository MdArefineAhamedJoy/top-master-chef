import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 opacity-70 px-7">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <ul className="ms-auto">
            <li>
                <Link className="btn btn-ghost" to="/">Home</Link>
            </li>
            <li>
                <Link className="btn btn-ghost" to="/login">Login</Link>
            </li>
            <li>
                <Link className="btn btn-ghost" to="/register">Register</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
