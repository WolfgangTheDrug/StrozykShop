import React from "react";
import logo from '../../../../logo.jpeg';
import './logo.scss'

function Logo(){
    return (<a href={'/'}><img
            className={'logo'}
            src={logo}
            alt="strozyk logo"/></a>)
}

export default Logo;