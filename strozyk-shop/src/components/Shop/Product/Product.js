import React,{Component} from 'react';
import './Product.scss';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../../../context/context";

export default class Product extends Component {
    render() {
        const {id, type, title, collection, color, img, price, info, inCart, count, total} = this.props.product;
        return (<>
            <ProductWrapper className={'col-9 mx-auto col-md-6 col=lg-3 my-3'}>
                <div className="card">
                    <div className={'img-container p-5'} onClick={console.log('clicked')}>hello from product</div>
                </div>
            </ProductWrapper>
        </>)
    }
}
const ProductWrapper = styled.div`
`;
