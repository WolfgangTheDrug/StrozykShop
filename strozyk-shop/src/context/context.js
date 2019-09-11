import React, {Component} from 'react';
import {shopProducts, detailProduct} from '../data.js'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct:detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
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

    getItem = (id) => {
        return this.state.products.find(item => item.id === id)

    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    cart:[...this.state.cart , product]
                };
            },
            () => {
                console.log(this.state);
            }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => ({modalProduct: product, modalOpen: true}))
    };

    closeModal = () => {
        this.setState(() => ({modalOpen: false}))
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}