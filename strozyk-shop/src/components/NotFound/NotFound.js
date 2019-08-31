import React,{Component} from 'react'
import Header from '../Shop/Header/Header'
import Footer from '../Shop/Footer/Footer'
import './NotFound.scss';
import Scissors from './Scissors'

export default class NotFound extends Component {
    render() {
        return (<>
            <Header/>
            <div className='notfound'>
                <Scissors/>
                <p>Nie znaleziono strony :(</p>
            </div>
            <Footer/>
        </>)
    }
}