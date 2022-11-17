import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-accent text-primary">
            <li>
              <Link>Sidebar Item 1</Link>
            </li>
            <li>
              <Link>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default SideBar;