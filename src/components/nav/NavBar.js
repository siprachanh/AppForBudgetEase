import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar text-white flex-md-nowrap p-0 shadow">

      <img className="logo" src="../images/financialfree.jpg" alt="logo"/>

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/budget">
            Budget 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/income">
            Income 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/expense">
           Expense
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">
           Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};