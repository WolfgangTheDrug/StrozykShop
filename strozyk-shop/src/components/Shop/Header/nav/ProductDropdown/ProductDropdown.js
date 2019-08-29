import React,{Component} from 'react';
import './ProductDropdown.scss';
class ProductDropdown extends Component{
    render() {
        return(
            <ol>
                <li> Dla niego
                    <ul className={'dropdown__hidden'}>
                        <li>Kurtki</li>
                        <li>Bluzy</li>
                        <li>T-shirty</li>
                    </ul>
                </li>
            </ol>
        )
    }
}

export default ProductDropdown;

/*TO DO HERE: propsy na listy*/