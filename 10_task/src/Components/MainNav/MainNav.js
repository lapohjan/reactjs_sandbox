import React from "react";
import { Link } from "react-router-dom";
//import "./MainNav.css";

const MainNav = () => {
  return (
    <div>
       <nav className='ml-auto'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog" >Message Board</Link>
          </li>
          <li>
            <Link to="/newpost">New Message</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
