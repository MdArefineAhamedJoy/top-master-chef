import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../route/AuthProvider";

const Navbar = () => {
  const {user,   logOut} = useContext(AuthContext)

  const handelLogOut = () =>{
    console.log('click is ')
    logOut()
    .then(res =>{})
    .then(error => {})
  }
  return (
    <div>
      <div className="navbar bg-base-100 opacity-70 md:px-5">
        <h2 className=" p-4 text-2xl font-extrabold text-white bg-green-700">Top Muster Chef</h2>
        <ul className="ms-auto">
            <li>
                <Link className="btn btn-ghost" to="/">Home</Link>
            </li>
            <li>
                <Link className="btn btn-ghost" to="/blog">Blog</Link>
            </li>
            <li>
                {
                  user ?<Link className="btn btn-ghost" onClick={handelLogOut} >LogOut</Link> :
                  <Link className="btn btn-ghost" to="/login">LogIn</Link>
                }
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
