import React, {Component} from 'react';
import {shopProducts, detailProduct} from '../data.js'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct:detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        shopProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];

        });
        this.setState(() => {
            return {products: tempProducts}
        })
    };//wszystko powyżej ma zapewnić, że nie bawimy się w przekazywanie przez referencję, a przez wartość!

    handleDetail = () => {
        console.log('hello from detail');
    };

    addToCart = (id) => {
        console.log(`hello from addToCart: ${id}`);
    };


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}