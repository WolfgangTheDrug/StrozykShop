import React,{Component} from 'react';


/*
console.log("Jest!");
let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

*/

class Slider extends Component {
    render() {
        return (
            <a href="https://www.instagram.com/strozykofficial/" target="_blank" rel="noopener noreferrer">
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img alt={'strozyk'} src={"https://instagram.fpoz2-1.fna.fbcdn.net/vp/d14fcbdcef86a5d557527b056d9db401/5DD58E24/t51.2885-15/e35/s1080x1080/65826735_116112243025500_3361538176424471305_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"}/>
                    </div>
                    <div className="mySlides fade">
                        <img alt={'strozyk'} src={"https://instagram.fpoz2-1.fna.fbcdn.net/vp/14cedc4862d3606e3448c01ab2564a7a/5DD19343/t51.2885-15/e35/43720906_200944234128848_1133205318988993349_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"}/>
                    </div>
                    <div className="mySlides fade">
                        <img alt={'strozyk'} src={"https://instagram.fpoz2-1.fna.fbcdn.net/vp/63ecddbaab90f34b24a775c47eac3c48/5DB5AD7A/t51.2885-15/e35/p1080x1080/57678294_418181122311950_5775109474650180699_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"}/>
                    </div>
                </div>
            </a>
        )
    }
}


export default Slider;