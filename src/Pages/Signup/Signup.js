import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { successful } from '../../App';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../Dashboard/useToken/useToken';

const Signup = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const navigate = useNavigate();
    if(token){
      navigate('/');
    }
    const handleSignup = (data)=>{
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            successful();
            updateUser(data.name)
            .then(()=>{
              registered(data.name, data.email);
            })
            .catch(error=>console.log(error))
          })
          .catch((error) => {
            console.log(error);
            setSignupError(error.message);
          });
    }
    const registered = (name, email)=>{
      const userInfo = {name, email};
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserEmail(email);
        });
    }

    // const getToken = (email) =>{
    //   fetch(`http://localhost:5000/jwt?email=${email}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if(data.accessToken){
    //       localStorage.setItem("Token", data.accessToken);
    //       navigate("/");
    //     }
    //   });
    // }
    return (
      <div className="flex justify-center items-center h-[600px]">
        <form onSubmit={handleSubmit(handleSignup)}>
          <h1 className="text-center text-2xl font-bold">Sign Up</h1>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Full Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full mb-5"
            />
          </div>{" "}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input input-bordered w-full mb-5"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>{" "}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must contain 6 character",
                },
                pattern: {
                  value: /(?=.*?[#@$?])/,
                  message: "Password must contain a special character",
                }
              })}
              type="password"
              className="input input-bordered w-full mb-5"
            />
            {errors.password && (
              <small className="text-error">{errors.password?.message}</small>
            )}
          </div>{" "}
          {signupError && <small className='text-error'>{signupError}</small>} <br />
          <small className="text-center my-5">
            Already have an account?{" "}
            <Link className="text-secondary" to="/login">
              login
            </Link>
          </small>
          <br />
          <input type="submit" className="btn btn-wide btn-accent my-5" />{" "}
          <br />
          <button className="btn btn-outline btn-wide">
            Sign in with Google
          </button>
        </form>
      </div>
    );
};

export default Signup;