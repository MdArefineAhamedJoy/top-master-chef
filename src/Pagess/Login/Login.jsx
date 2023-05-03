import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../route/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { logIn, handelGoogleLogin , handelGithubLogin} = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  // handel login email password
  const handelLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    logIn(email, password)
      .then((res) => {
        const userRes = res.user;
        navigate(from,{replace : true})
        setSuccess('')
        setError('')
      })
      .catch((error) => {
        setSuccess('')
        setError('')
      });
  };
  // handle login with google
  const loginWithGoogle = () => {
    handelGoogleLogin()
      .then((res) => {
        const currenUser = res.user;
        navigate(from,{replace : true})
        setSuccess("");
        setError("");
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };
// login with github 
  const loginWithGitHub = () =>{
    handelGithubLogin()
    .then(res => {
      const currenUser = res.user ;
      navigate(from,{replace : true})
      setSuccess(currenUser)
      setError('')
    })
    .catch(error =>{
      console.log(error.message)
      setSuccess(" ")
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  md:flex">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handelLogin} >
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
                    <small>
                      You Fist Time Visit ?{" "}
                      <Link
                        className="label-text-alt link link-hover underline"
                        to="/register"
                      >
                        Register
                      </Link>
                    </small>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn btn-primary">SingIn</button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <hr className="w-5/12 border-t-4 border-green-600" />
                  <small className="font-bold">or</small>
                  <hr className="w-5/12 border-t-4 border-green-600" />
                </div>
              </form>
              <div className="mt-3">
                <button
                 onClick={loginWithGoogle}
                className="bg-gray-600 rounded-xl flex py-2 px-5 items-center font-bold text-white  w-full text-left ">
                  <FaGoogle size='xs'  className="w-8 me-5"></FaGoogle> Sing In
                  With Google
                </button>
              </div>
              <div className="mb-5 mt-3">
                <button 
                  onClick={loginWithGitHub}
                  className="bg-gray-600 rounded-xl flex py-2 px-5 items-center font-bold text-white  w-full text-left "
                >
                  <FaGithub size='xs' className="w-8 me-5"></FaGithub> Sing In
                  With GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              {error}
            </p>
            <p className="py-6">
              {success}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
