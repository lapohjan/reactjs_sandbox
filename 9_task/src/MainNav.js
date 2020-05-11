import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';


const MainNav = () => {
    return (
        <Nav className='ml-auto'>
            <LinkContainer to='/' exact>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>  
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
                <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/newpost'>
                <Nav.Link>New Post</Nav.Link>
            </LinkContainer>
        </Nav>   
    );
};


export default MainNav;