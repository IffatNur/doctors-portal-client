import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const ResetModal = () => {
    const {passwordReset} = useContext(AuthContext);
    const handleResetEmail = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      passwordReset(email)
      .then(()=>{})
      .catch(error=>console.log(error));
    };
  return (
    <div>
      <input type="checkbox" id="reset-pass" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reset-pass"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Provide your email address</h3>
          <form onSubmit={handleResetEmail} action="">
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            <br />
            <button type='submit' className="btn btn-wide my-3 bg-primary text-white mx-auto">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;