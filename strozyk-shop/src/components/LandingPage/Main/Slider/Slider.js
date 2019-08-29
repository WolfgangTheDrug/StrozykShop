import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.scss';

class Slider extends Component {
    render() {
        return (
            <Carousel
                autoPlay="true"
                infiniteLoop="true"
                interval={3000}
                transitionTime={600}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                className={"slideshow-container"}
            >

                <a href={'https://www.instagram.com/strozykofficial/'} target="_blank" rel="noopener noreferrer"><div>

                        <img alt={'strozyk'} src={"https://instagram.fpoz2-1.fna.fbcdn.net/vp/d14fcbdcef86a5d557527b056d9db401/5DD58E24/t51.2885-15/e35/s1080x1080/65826735_116112243025500_3361538176424471305_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"}/>

                </div></a>
                <a href={'https://www.instagram.com/strozykofficial/'} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img alt={'strozyk'} src={"https://instagram.fpoz2-1.fna.fbcdn.net/vp/14cedc4862d3606e3448c01ab2564a7a/5DD19343/t51.2885-15/e35/43720906_200944234128848_1133205318988993349_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"}/>

                </div></a>
                <a href={'https://www.instagram.com/strozykofficial/'} target="_blank" rel="noopener noreferrer"><div>

                        <img alt={'strozyk'} src={"https://instagram.fpoz2-1.fna.fbcdn.net/vp/63ecddbaab90f34b24a775c47eac3c48/5DB5AD7A/t51.2885-15/e35/p1080x1080/57678294_418181122311950_5775109474650180699_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"}/>

                </div></a>
            </Carousel>
        );
    }
}

export default Slider;