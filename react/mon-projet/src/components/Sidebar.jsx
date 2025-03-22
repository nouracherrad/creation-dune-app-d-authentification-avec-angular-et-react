import React, { useState } from "react";
import "./../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      

      <ul>
          <li>
          <button className="toggle-btn" onClick={toggleSidebar}>
  <FontAwesomeIcon icon={faBars} />
</button>        </li>
        
        <li>
          <a href="/dashboard">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="/products">
            <i className="fas fa-boxes"></i> Products
          </a>
        </li>
        <li>
          <a href="/upload">
            <i className="fas fa-upload"></i> Upload File
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;