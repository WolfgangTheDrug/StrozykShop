import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
    const {cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-ms-5 ml-md-auto col-sm text-capitalize text-right">
                        <Link to={'/'}>
                            <button
                                className={"btn btn-outline-danger text-uppercase mb-3 px-5"}
                                type={"button"}
                                onClick={() => clearCart()}>
                                Wyczyść koszyk
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title"> Całość </span>
                            <strong> {cartTotal}zł </strong> {/*5:07:51*/}
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}