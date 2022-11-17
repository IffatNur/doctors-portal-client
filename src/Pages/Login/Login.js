import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ResetModal from '../Dashboard/ResetModal/ResetModal';

const Login = () => {
  const { signIn, googleSignin } = useContext(AuthContext);
    const { register,formState:{errors}, handleSubmit } = useForm();
    const [loginError, setLoginerror] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = (data) =>{
        console.log(data);
        setLoginerror('')
        signIn(data.email, data.password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
        })
        .catch(error=> {
          console.log(error);
          setLoginerror(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
      googleSignin()
      .then(()=>{})
      .then(error=>console.log(error));
    }
    return (
      <div className="flex justify-center items-center h-[600px]">
        <ResetModal></ResetModal>
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1 className="text-center text-2xl font-bold">Login</h1>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              className="input input-bordered w-full mb-5"
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>{" "}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="input input-bordered w-full mb-5"
            />
            {errors.password && (
              <p role="alert" className="text-error">
                Password must contain 6 characters
              </p>
            )}
          </div>{" "}
          {loginError && <small className="text-error">{loginError}</small>}{" "}
          <label
            // onClick={() => resetPass(resetEmail)}
            htmlFor="reset-pass"
            className=""
          >
            Forgot Password?
          </label>
          <br />
          <small className="text-center my-5">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to="/signup">
              Create New Account
            </Link>
          </small>
          <br />
          <input type="submit" className="btn btn-wide btn-accent my-5" />{" "}
          <br />
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-wide"
          >
            Sign in with Google
          </button>
        </form>{" "}
        <br />
      </div>
    );
};

export default Login;