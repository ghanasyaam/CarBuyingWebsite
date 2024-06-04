import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

import { Link } from 'react-router-dom';
const Navigator = () =>{
    return(
        <>
        <div className="AppBar">
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/details">
                Models
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to=''>
                1. Overview
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Keyspecs" >
                2. Keyspecs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Features">
                3. Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Colours">
                4. Colours
              </a>
            </li>
            <li className="nav-item" id="Dealer">
              <a
                id="Dealer"
                className="nav-link"
                target="_blank"
                href="https://www.google.com/maps/search/Porsche/@13.7255275,69.5930934,6z/data=!3m1!4b1?authuser=0&entry=ttu"
              >
                <i className="fa fa-map-marker" /> Find a Dealer
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Menu-Bar">
        <div className="side-bar" id="sideBar">
          <ul>
            <li>
              <a href="/models_datta/details.html">Models</a>
            </li>
            <li>
              <a href="car.html">Overview</a>
            </li>
            <li>
              <a href="#Keyspecs">Keyspecs</a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Colours">Colours</a>
            </li>
            <li className="nav-item" id="Dealer">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.google.com/maps/search/Porsche/@13.7255275,69.5930934,6z/data=!3m1!4b1?authuser=0&entry=ttu"
              >
                <i className="fa fa-map-marker" /> Find a Dealer
              </a>
            </li>
          </ul>
        </div>
      </div>
      </>
    );
}
export default Navigator;