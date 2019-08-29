import React,{Component} from 'react';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-sections">
                    <section className="footer-section">
                        <p>Kupuj</p>
                        <p><a href="/shop/him">Dla niego</a></p>
                        <p><a href="/shop/her">Dla niej</a></p>
                    </section>
                    <section className="footer-section">
                        <p>Pomoc</p>
                        <p><a href="/contact">Kontakt</a></p>
                        <p><a href="/terms">Regulamin Zwrótów</a></p>
                        <p><a href="/FAQ">FAQ</a></p>
                        <p><a href="/about_me">O mnie</a></p>
                    </section>
                </div>
                <div className="footer-social-media">
                    <div className="social-media"></div>
                    <div className="social-media"></div>
                    <div className="social-media"></div>
                    <div className="social-media"></div>
                </div>
            </footer>
        );
    }
}


export default Footer;