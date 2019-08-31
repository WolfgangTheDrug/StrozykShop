import React,{Component} from 'react';
import {HashRouter,Route,Switch,Link} from "react-router-dom";
import './Products.scss';
import Product from '../Product/Product';

class Products extends Component{
    render() {
        return (
            <HashRouter>
                <section className="section2">
                    <Switch>
                        <div className="col">
                            {/*<Route path='/shop/product/:productID' component={Product} />*/}
                            <Link to='/shop/product/1' className="shopImg1"/>
                            <p>nazwa</p>
                            <p> cena</p>
                        </div>
                        <div className="col">
                            <a href={''} className="shopImg2"/>
                            <p>nazwa</p>
                            <p> cena</p>
                        </div>
                        <div className="col">
                            <div className="shopImg3"/>
                            <p>nazwa</p>
                            <p> cena</p>
                        </div>

                        <div className="col">
                            <div className="shopImg4"/>
                            <p>nazwa</p>
                            <p> cena</p>
                        </div>
                        <div className="col">
                            <div className="shopImg5"/>
                            <p>nazwa</p>
                            <p> cena</p>
                        </div>
                        <div className="col">
                            <div className="shopImg6"/>
                            <p>nazwa</p>
                            <p> cena</p>
                        </div>
                    </Switch>
            </section>
        </HashRouter>)
    }
}

export default Products;