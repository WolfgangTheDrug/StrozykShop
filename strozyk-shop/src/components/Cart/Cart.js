import React, {Component} from 'react';
import Title from '../Shop/Products/Title';
import CartColumns from './CartColumns';

class Cart extends Component {
    render() {
        return (
            <section>

                <Title name={'your'} title={'cart'}/>
                <CartColumns> </CartColumns>
            </section>
        );
    }
}

export default Cart;