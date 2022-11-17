import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/Dashboard/SideBar/SideBar';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="block lg:flex">
          <div class="flex-none w-80 h-52 lg:h-full mr-10 ...">
            <SideBar></SideBar>
          </div>
          <div class="grow h-14 ...">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;