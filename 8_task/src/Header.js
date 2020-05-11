import React from 'react';
import Nav from './Nav';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Laura Pohjanpalo</Link>
            <Nav />
        </div>
    );
};

export default Header;