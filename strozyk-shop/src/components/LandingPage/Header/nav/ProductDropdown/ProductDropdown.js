import React,{Component} from 'react';
import './ProductDropdown.scss';
import {Link} from 'react-router-dom'

class ProductDropdown extends Component{
constructor (props) {
    super(props);
    sex = () => (this.props.category === 'Niego')? 'him': 'her';

}
    render() {
        return(
            <ol>

                <li> <Link to={'/shop/'+this.sex()}> Dla {this.props.category}</Link>
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