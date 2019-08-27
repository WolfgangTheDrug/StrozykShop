import React,{Component} from 'react';

class Section extends Component {
    render() {
        return (
            <section className="main-width section1">
                <a href="https://www.instagram.com/strozykofficial/" target="_blank" rel="noopener noreferrer" >
                    <div className="slideshow-container">
                        {/*Full-width images with number and caption text */}
                        <div className="mySlides fade">
                            <img
                                src="https://instagram.fpoz2-1.fna.fbcdn.net/vp/d14fcbdcef86a5d557527b056d9db401/5DD58E24/t51.2885-15/e35/s1080x1080/65826735_116112243025500_3361538176424471305_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"
                                alt={'strozyk slideshow img 1'}
                                style={{width: "100%"}}/>
                        </div>
                        <div className="mySlides fade">
                            <img
                                src="https://instagram.fpoz2-1.fna.fbcdn.net/vp/14cedc4862d3606e3448c01ab2564a7a/5DD19343/t51.2885-15/e35/43720906_200944234128848_1133205318988993349_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"
                                alt={'strozyk slideshow img 2'}
                                style={{width: "100%"}}/>
                        </div>
                        <div className="mySlides fade">
                            <img
                                src="https://instagram.fpoz2-1.fna.fbcdn.net/vp/63ecddbaab90f34b24a775c47eac3c48/5DB5AD7A/t51.2885-15/e35/p1080x1080/57678294_418181122311950_5775109474650180699_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"
                                alt={'strozyk slideshow img 3'}
                                style={{width: "100%"}}/>
                        </div>
                    </div>
                </a>
            </section>
        )
    }
}

export default Section;