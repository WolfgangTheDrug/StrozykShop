import React,{Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-sections">
                    <section className="footer-section">
                        <p>Kupuj</p>
                        <p><a href="">Dla niego</a></p>
                        <p><a href="">Dla niej</a></p>
                    </section>
                    <section className="footer-section">
                        <p>Pomoc</p>
                        <p><a href="">Kontakt</a></p>
                        <p><a href="">Regulamin Zwrótów</a></p>
                        <p><a href="">FAQ</a></p>
                        <p><a href="">O mnie</a></p>
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