import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImage1 from './backiee-122170-landscape.jpg';
import carouselImage2 from './backiee-258069-landscape.jpg';
import carouselImage3 from './backiee-274078-landscape.jpg';
import footerLogo from './pngwing.com (2).png'
import navLogo from './pngimg.com - porsche_logo_PNG9.png'
import './HomeStyle.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {useLocation, useNavigate} from 'react-router-dom';




function Homepage() {
  
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.id || 'Guest';

    const handleSignupClick = () => {
      navigate('/Overview');
  };

  function openPage(model) {
    let url;
    switch (model) {
      case '911':
        url = "../Overview/car.html?model=p911";
        break;
      case 'Cayenne':
        url = "../Overview/car.html?model=Cayenne";
        break;
      case '718':
        url = "../Overview/car.html?model=p718";
        break;
      case 'Taycan':
        url = "../Overview/car.html?model=Taycan";
        break;
      case 'Macan':
        url = "../Overview/car.html?model=Macan";
        break;
      case 'Panamera':
        url = "../Overview/car.html?model=Panamera";
        break;
      default:
        url = "#";
    }
    window.open(url);
  }

  return (
    <div>
     <header>
     <nav className="nav">
          <div className="nav-left">
            <a className="nav-links" href="../models_datta/details.html">Models</a>
            <a className="nav-links" href="">Brands</a>
            <a className="nav-links" href="#">Ownership</a>
            <Link className="nav-links" to="/quote">Corse</Link>
          </div>
          <div className="nav-middle">
            <img className="nav-logo" src={navLogo} alt="" />
          </div>
          <div  className="nav-right"><button id="user-email" onClick={handleSignupClick}>{userId}</button></div>
        </nav>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div class="carousel-image-container">
              <img src={carouselImage1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
            <div class="carousel-image-container">
              <img src={carouselImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
            <div class="carousel-image-container">
              <img src={carouselImage3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <section className="section-one">
        <a href="../Overview/car.html?model=p911"><button id="division-button1" className="division-button"></button></a>
        <a href="../Overview/car.html?model=Taycan"><button id="division-button2" className="division-button"></button></a>
        <a href="../Overview/car.html?model=Panamera"><button id="division-button3" className="division-button"></button></a>
      </section>
      <footer>
        <div className="footer-1">
          <div className="footer-buttons-1">
            <div id="two-button-container-1" className="two-button-container">
              <button id="footer-top-button-1" className="footer-top-buttons"><strong>Enter your zip code</strong></button>
              <button id="footer-top-button-2" className="footer-top-buttons"><strong>BUILD YOUR OWN</strong></button>
            </div>
            <div id="two-button-container-2" className="two-button-container">
              <a href="#footer-social-media"><button id="footer-top-button" className="footer-top-buttons"><strong>GET IN TOUCH</strong></button></a>
              <button id="footer-top-button" className="footer-top-buttons"><strong>TEST DRIVE</strong></button>
            </div>
            <div id="two-button-container-3" className="two-button-container">
              <a href="../HomePage/Quote.html"><button id="footer-top-button" className="footer-top-buttons"><strong>QUOTE</strong></button></a>
              <button id="footer-top-button" className="footer-top-buttons"><strong>DEALER LOCATOR</strong></button>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <img className="footer-logo" src={footerLogo} alt="Footer Logo" />
        </div>
        <div className="footer-3">
          <div className="footer-links-container">
            <div className="footer-link-boxes">
              <select className="footer-select" onChange={(e) => openPage(e.target.value)}>
                <option value="" disabled selected>Models</option>
                <option value="911">911</option>
                <option value="Boxster">Boxster</option>
                <option value="Cayenne">Cayenne</option>
                <option value="Macan">Macan</option>
                <option value="Panamera">Panamera</option>
                <option value="Taycan">Taycan</option>
                <option value="718">718 Cayman</option>
                <option value="718">718 Boxster</option>
              </select>
              <select className="footer-select">
                <option value="" disabled selected>Brand</option>
                <option value="History">History</option>
                <option value="Values">Values</option>
                <option value="Stories">Stories</option>
              </select>
              <select className="footer-select">
                <option value="" disabled selected>Corse</option>
                <option value="History">GT3RS</option>
                <option value="Values">Formula E</option>
                <option value="Stories">GTS</option>
              </select>
              <select className="footer-select">
                <option value="" disabled selected>Ownership</option>
                <option value="History">Porche Heritage</option>
                <option value="Values">Financial Services</option>
                <option value="Stories">Certified Pre-Owned</option>
              </select>
            </div>
            <div className="footer-link-boxes">
              <button className="footer-select-buttons">Services & Aftersales</button>
              <button className="footer-select-buttons">Catalogues</button>
              <a href="https://www.google.com/maps/search/Porsche/@13.6129087,69.5921315,6z/data=!3m1!4b1?authuser=0&entry=ttu"><button className="footer-select-buttons">Dealer Locator</button></a>
              <button className="footer-select-buttons">Build and Price</button>
            </div>
            <div className="footer-link-boxes">
              <button className="footer-select-buttons">Press Releases (Media)</button>
              <button className="footer-select-buttons">Contact Us</button>
              <button className="footer-select-buttons">Newsletter</button>
              <button className="footer-select-buttons">Bluetooth Compatibility</button>
            </div>
            <div id="last-box" className="footer-link-boxes">
              <button className="footer-select-buttons">Stay Up To Date</button>
              <button id="newsletter-button" className="footer-select-buttons">Subscribe To Our Newsletter</button>
            </div>
          </div>
          <div className="footer-social-media" id="footer-social-media">
          <Link  className='social-media-links'><FontAwesomeIcon icon={faFacebook} />  Facebook</Link>
          <Link  className='social-media-links'><FontAwesomeIcon icon={faXTwitter} />  Twitter</Link>          <Link  className='social-media-links'><FontAwesomeIcon icon={faLinkedin} />  LinkedIn</Link>          <Link  className='social-media-links'><FontAwesomeIcon icon={faInstagram} />  Instagram</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
