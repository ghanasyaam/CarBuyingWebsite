import React from 'react';
import './detailStyles.css';
import { Link, useNavigate } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();

  const searchCar = () => {
    const searchInput = document.getElementById('searchForCar').value.toLowerCase();
    let path;
    switch (searchInput) {
      case "911":
        path = "/Overview?model=p911";
        break;
      case "718":
        path = "/Overview?model=p718";
        break;
      case "panamera":
        path = "/Overview?model=Panamera";
        break;
      case "taycan":
        path = "/Overview?model=Taycan";
        break;
      case "macan":
        path = "/Overview?model=Macan";
        break;
      case "cayenne":
        path = "/Overview?model=Cayenne";
        break;
      default:
        alert("No Such Car!\nTry the following:\n1. 911\n2. 718\n3. Panamera\n4. Taycan\n5. Macan\n6. Cayenne");
        return;
    }
    navigate(path);
  };

  return (
    <div id="model_main">
      <div className="navigation">
        <div id="head">
          <h1 style={{ textIndent: '15vw', paddingTop: '10px' }}>Models</h1><br />
        </div>
        <div className="search">
          <label htmlFor="searchForCar"></label>
          <input type="text" id="searchForCar" placeholder="Type to Search" />
          <button type="submit" id="searchButton" onClick={searchCar}><i className="fa fa-search"></i></button>
        </div>
        <div className="logo">
          <img style={{ width: '10vw' }} src="https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo-2014.png" alt="Porsche Logo" />
        </div>
      </div>
      <div className="model-img">
       <Link to="/Overview?model=p911"><div className="gallery-images" id="p911"></div></Link>
       <Link to="/Overview?model=p718"><div className="gallery-images" id="p718"></div></Link>
       <Link to="/Overview?model=Panamera"><div className="gallery-images" id="Panamera"></div></Link>
       <Link to="/Overview?model=Taycan"><div className="gallery-images" id="Taycan"></div></Link>
       <Link to="/Overview?model=Macan"><div className="gallery-images" id="Macan"></div></Link>
       <Link to="/Overview?model=Cayenne"><div className="gallery-images" id="Cayenne"></div></Link>
      </div>
    </div>
  );
}

export default Details;
