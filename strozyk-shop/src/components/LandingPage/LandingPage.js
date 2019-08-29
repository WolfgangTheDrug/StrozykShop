import React,{Component} from 'react';
import Header from '../Shop/Header/Header';
import '../Shop/Header/logo/logoSmall.scss';
import Slider from './Slider/Slider'
import Footer from '../Shop/Footer/Footer';

class LandingPage extends Component{
    render(){
        return (<>
            <Header/>
            <Slider/>
            <Footer/>
        </>)
    }
}

export default LandingPage;