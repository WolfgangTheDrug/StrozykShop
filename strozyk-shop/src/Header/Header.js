import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo/logo';
import Nav from './nav/nav';

function Header() {
    return (
        <header>
            <Logo/>
            <Nav/>
        </header>
    )
}
export default Header;