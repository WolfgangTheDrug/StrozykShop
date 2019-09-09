import React,{Component} from 'react';
import './Products.scss';
import Product from "../Product/Product";
/*import Product from '../Product/Product';*/
import Title from './Title';
import {ProductConsumer} from '../../../context/context';

class Products extends Component{

    render() {

        return (
            <>
                {/*<Product/>*/}
                <div className={'py-5'}>
                    <div className="container">
                        <Title name={'our'} title={'product'}/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product
                                            key={product.id}
                                            product={product}
                                        />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Products;
