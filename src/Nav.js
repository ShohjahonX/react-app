import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return(
    <div>
       <nav>
          <a id="logo" href="#">Logo</a> 

          <ul>
            <li>
                <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
                <Link to={"/about"}>About </Link>
            </li>
          </ul>
       </nav>     
    </div>
  );
};

export default Nav;