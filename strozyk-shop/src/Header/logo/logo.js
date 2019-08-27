import React from "react";
import logo from '../../logo.jpeg';
import './logo.scss'

function Logo(){
    return (<img
            className={'logo'}
            src={logo}
            alt="strozyk logo"/>)
}

export default Logo;