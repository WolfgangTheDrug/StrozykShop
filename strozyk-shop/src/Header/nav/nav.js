import React from "react";
import './nav.scss'
import ProductDropdown from './ProductDropdown/ProductDropdown'
/*import Dropdown from './Dropdown/Dropdown';*/

function Nav(){
    return (<nav>
        <div>
          <ProductDropdown/>
          <ProductDropdown/>
        </div>

        <div/>
    </nav>)
}

export default Nav;