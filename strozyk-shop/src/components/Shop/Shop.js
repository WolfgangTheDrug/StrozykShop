import React, {Component} from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Header from '../Shop/Header/Header';
import '../Shop/Header/logo/logo.scss';
import Footer from '../Shop/Footer/Footer';

class Shop extends Component {
    render() {
        return (<>
            <Header/>

            <Footer/>
        </>)
    }
}

export default Shop;