import React from 'react';
import MainNav from './MainNav/MainNav';

import Navbar from 'react-bootstrap/Navbar';
//import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
 return (
     <Navbar bg="dark" variant="dark" expand="md">
         <Link to='/#'>
             <Navbar.Brand>MessagePad</Navbar.Brand>
         </Link>
         <Navbar.Toggle aria-controls='basic-navbar-nav' />
         <Navbar.Collapse id='basic-navbar-nav'>
             <MainNav />
         </Navbar.Collapse>
     </Navbar>
   );
};


export default Header;