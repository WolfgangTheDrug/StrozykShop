import React,{Component} from 'react';
import {Link} from "react-router-dom";
import './NavUpperPart.scss';

class NavUpperPart extends Component{
    render() {
        return <div className={'nup'}>

            <p><Link to="/contact">Kontakt</Link></p>
            <p><Link to="/about_me">O mnie</Link></p>
        </div>/*nup=NavUpperPart*/
    }
}

export default NavUpperPart;