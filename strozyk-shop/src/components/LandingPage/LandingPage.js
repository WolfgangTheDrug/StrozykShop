import React,{Component} from 'react';
import Header from './Header/Header';
import Footer from '../Shop/Footer/Footer';
import Main from "./Main/Main";

class LandingPage extends Component{
    render(){
        return (<>
            <Header/>
            <Main/>
            <Footer/>
        </>)
    }
}

export default LandingPage;