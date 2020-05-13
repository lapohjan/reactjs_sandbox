import React from "react";
import Nav from 'react-bootstrap/Nav';
//import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
//import "./MainNav.css";

const MainNav = () => {
  return (
        <Nav className='ml-auto'>
            <LinkContainer to='/' exact>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>  
            <LinkContainer to="/blog">
                <Nav.Link>Message Board</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/newpost'>
                <Nav.Link>New Message</Nav.Link>
            </LinkContainer>
        </Nav> 
  );
};

export default MainNav;

  

/*

<div>
<Nav className='ml-auto'>
 <ul>
   <li>
     <Nav.Link to="/">Home</Nav.Link>
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
*/