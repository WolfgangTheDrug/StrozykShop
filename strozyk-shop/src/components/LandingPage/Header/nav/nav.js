import React from "react";
import './nav.scss'
import ProductDropdown from './ProductDropdown/ProductDropdown'
import NavUpperPart from './NavUpperPart/NavUpperPart'
/*import Dropdown from './Dropdown/Dropdown';*/

function Nav(){
    return (<>
        <NavUpperPart/>
        <nav>
            <div>
              <ProductDropdown category="Niej"/>
              <ProductDropdown category="Niego"/>
            </div>
            <div><i className="fas fa-shopping-cart" style={{fontSize: "30px"}}/></div>
        </nav>
    </>)
}

export default Nav;