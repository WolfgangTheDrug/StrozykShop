import React, {Component} from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Header from '../Shop/Header/Header';
import '../Shop/Header/logo/logo.scss';
import Footer from '../Shop/Footer/Footer';
import Products from "./Products/Products";

class Shop extends Component {
    render() {
        return (<>
            <Header/>
            <Products/>
            <Footer/>
        </>)
    }
}

export default Shop;