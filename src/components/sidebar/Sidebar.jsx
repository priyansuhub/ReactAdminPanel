import React from "react";
import "./sidebar.scss";
import {
  AiFillProject,
  AiFillEye,
  AiFillFolder,
  AiFillRead,
  AiFillUnlock,
  AiOutlineBarChart,
  AiOutlineBars,
  AiOutlineBuild,
  AiOutlineFolderView,
  AiOutlineFlag,
  AiOutlineForward,
} from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Priyansu Rath</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <AiFillProject />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li>
            <AiFillProject />
            <span>Users</span>
          </li>
          <li>
            <AiFillProject />
            <span>Products</span>
          </li>
          <li>
            <AiFillProject />
            <span>Orders</span>
          </li>
          <li>
            <AiFillProject />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <AiFillProject />
            <span>Stats</span>
          </li>
          <li>
            <AiFillProject />
            <span>Notifications</span>
          </li>
          <p className="title">Services</p>
          <li>
            <AiFillProject />
            <span>System Health</span>
          </li>
          <li>
            <AiFillProject />
            <span>Logs</span>
          </li>
          <li>
            <AiFillProject />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AiFillProject />
            <span>Profile</span>
          </li>
          <li>
            <AiFillProject className="icon" />
            <span>Log Health</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
