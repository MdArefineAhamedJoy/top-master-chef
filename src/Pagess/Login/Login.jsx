import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../route/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const handelLogin = event =>{
    event.preventDefault()
    const from = event.target ;
    const email = from.email.value ;
    const password = from.password.value;
    logIn(email,password)
    .then(res =>{
      const userRes = res.user ;
      console.log(userRes)
    })
    .catch(error =>{
      console.log(error)
    })
  

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  md:flex">
    
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  required
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                   <label className="label">
                  <small >
                    You Fist Time Visit ?  <Link className="label-text-alt link link-hover underline" to='/register'>Register</Link>
                  </small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;