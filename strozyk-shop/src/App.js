import React from 'react';
import './App.css';
import './css/strozyk_footer.css';
import './css/strozyk_header.css';
import './css/strozyk_header_small.css';
import './css/strozyk_product_list_section.css/strozyk_product_list_section.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header/Header.js";
function App() {
  return (
      <>
          <Header/>
          <section className="main-width section1">
              {/*Slideshow container*/}
              <a href="https://www.instagram.com/strozykofficial/" target="_blank" rel="noopener noreferrer" >
                  <div className="slideshow-container">
                      {/*Full-width images with number and caption text */}
                      <div className="mySlides fade">
                          <img
                              src="https://instagram.fpoz2-1.fna.fbcdn.net/vp/d14fcbdcef86a5d557527b056d9db401/5DD58E24/t51.2885-15/e35/s1080x1080/65826735_116112243025500_3361538176424471305_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"
                              alt={''}
                              style={{width: "100%"}}/>
                      </div>
                      <div className="mySlides fade">
                          <img
                              src="https://instagram.fpoz2-1.fna.fbcdn.net/vp/14cedc4862d3606e3448c01ab2564a7a/5DD19343/t51.2885-15/e35/43720906_200944234128848_1133205318988993349_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"
                              alt={''}
                              style={{width: "100%"}}/>
                      </div>
                      <div className="mySlides fade">
                          <img
                              src="https://instagram.fpoz2-1.fna.fbcdn.net/vp/63ecddbaab90f34b24a775c47eac3c48/5DB5AD7A/t51.2885-15/e35/p1080x1080/57678294_418181122311950_5775109474650180699_n.jpg?_nc_ht=instagram.fpoz2-1.fna.fbcdn.net"
                              alt={''}
                              style={{width: "100%"}}/>
                      </div>
                  </div>
              </a>
          </section>
          <aside> </aside>
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
      </>
  );
}

export default App;
