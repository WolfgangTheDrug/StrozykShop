import React from "react";
import SocialMedia from './SocialMedia/SocialMedia'
function Dropdown() {
    return(
        <>
            <div>
                <dropdown>
                    <div id="toggle1">
                        <label htmlFor="toggle1" className="animate">Dla niego<i
                            className="fa fa-   list float-right"/></label>
                        <ul className="animate">
                            <li className="animate">Kurtki</li>
                            <li className="animate">Spodnie</li>
                            <li className="animate">T-shirty</li>
                        </ul>
                    </div>
                </dropdown>
                <dropdown>
                    <div id="toggle2">
                        <label htmlFor="toggle2" className="animate">Dla niej<i
                            className="fa fa-list float-right"/></label>
                        <ul className="animate">
                            <li className="animate">Kurtki</li>
                            <li className="animate">Spodnie</li>
                            <li className="animate">T-shirty</li>
                        </ul>
                    </div>
                </dropdown>
            </div>
            <div>
                <dropdown>
                    <div id="toggle4">
                        <label htmlFor="toggle4" className="animate">Zmień język<i
                            className="fa fa-list float-right"/></label>
                        <ul className="animate">
                            <li className="animate">Angielski</li>
                            <li className="animate">Hiszpańsk</li>
                            <li className="animate">Polski</li>
                        </ul>
                    </div>
                </dropdown>
                <SocialMedia/>
            </div>
        </>
    )
}

export default Dropdown;