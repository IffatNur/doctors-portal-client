import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';


export const successful = () =>{
  toast.success('Sign up Successful');
}
function App() {
  
  
  return (
    <div className='max-w-[1440px] mx-auto' >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
