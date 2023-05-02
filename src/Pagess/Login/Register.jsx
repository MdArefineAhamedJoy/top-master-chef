import React, { useContext, useState } from "react";
import { AuthContext } from "../../route/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createAccount } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [errorMs, setErrorMs] = useState("");
  const handelRegisterFrom = (event) => {
    event.preventDefault();
    // collect input filed value
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
 
    createAccount(email, password)
      .then((res) => {
        const currentUser = res.user;
        setSuccess(
          '"Success! Your action has been completed successfully. Thank you!"'
        );
        setErrorMs("");
        form.reset()
      })
      .catch((error) => {
        setErrorMs(error.message);
        setSuccess('')
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-green-300  opacity-80">
        <div className="hero-content  md:flex">
          <form
            onSubmit={handelRegisterFrom}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body w-full h-100%">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
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
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small>
                    You Already Login Place Go{" "}
                    <Link
                      className="label-text-alt link link-hover underline"
                      to="/login"
                    >
                      Login
                    </Link>
                  </small>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-green-500">{success}</p>
              <p className="text-red-700">{errorMs}</p>
            </div>
          </form>

          <div className="text-center  w-1/2 ">
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

export default Register;
