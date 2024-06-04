import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

import { colorimageSources } from './Components & Constants/constants';
import FAQ from './Components & Constants/drop';
import Navigator from './Components & Constants/Navgitor';

const Overview = () => {
  const [model, setModel] = useState('');
  const [carData, setCarData] = useState(null);
  const [color, setColor] = useState('red');
  const [isEmiModalOpen, setIsEmiModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const modelParam = urlParams.get('model');
    if (modelParam) {
      setModel(modelParam);
      fetchCarData(modelParam);
    }
  }, []);

  const fetchCarData = async (model) => {
    try {
      const response = await axios.get(`http://localhost:8000/admin/car/${model}`);
      setCarData(response.data);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  useEffect(() => {
    if (carData && carData.colorImages) {
      const colorIndex = ['red', 'black', 'grey', 'white'].indexOf(color);
      if (colorIndex !== -1) {
        const imageUrl = carData.colorImages[color];
        if (imageUrl) {
          document.getElementById('color-image').src = imageUrl;
        }
      }
    }
  }, [carData, color]);

  const details = [
    {
      question: "Power Unit",
      answer: "Engine Type - V6\n\nDisplacement - 2.0L - 4.0L",
    },
    {
      question: "Engine",
      answer: "Power Output - 250hp - 400hp\n\nFuel Type - Petrol",
    },
    {
      question: "Transmission",
      answer: "Transmission Type - Manual, Automatic\n\nDrive Type - Rear-Wheel Drive",
    }
  ];

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const openEmiCalculator = () => {
    setIsEmiModalOpen(true);
  };

  const closeEmiCalculator = () => {
    setIsEmiModalOpen(false);
  };

  return (
    <div className='body'>
      <Navigator />
      <br />
      <br />
      <br />
      <div id="container">
        <div id="Heading">
          <h3 id="CarName">{model}</h3>
        </div>
        <br />
        <br />
        <div id="Overview">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  id="car_1"
                  src={carData?.carouselImages?.image1 || ''}
                  className="d-block w-100"
                  alt="Car Image 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  id="car_2"
                  src={carData?.carouselImages?.image2 || ''}
                  className="d-block w-100"
                  alt="Car Image 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  id="car_3"
                  src={carData?.carouselImages?.image3 || ''}
                  className="d-block w-100"
                  alt="Car Image 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="Right-Overview">
            <br />
            <h2>Rs. 1.44 - 1.74 Crore</h2>
            <br />
            <div
              className="Emi-Calculator button-box"
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <h4>Calculate your EMI</h4>
              <p
                style={{ color: "rgb(20, 143, 224)", cursor: "pointer" }}
                onClick={openEmiCalculator}
              >
                EMI Calculator
              </p>
            </div>
            <br />
            <br />
           <Link to='/Summary' style={{ textDecoration: 'none' }}><button className="Summary button-box">
              <i className="fa fa-angle-right" style={{ fontSize: 36 }} />
              <span>Buy Now</span>
            </button></Link>
            {isEmiModalOpen && (
              <div id="emiModal" className="modal" style={{ display: 'block' }}>
                <div className="modal-content" style={{ width: "55%" }}>
                  <span className="close" onClick={closeEmiCalculator}>
                    ×
                  </span>
                  <iframe
                    src="/Overview/LoanCalculator"
                    style={{ width: "100%", height: 650, border: "none" }}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="Keyspecs" className="section" style={{ paddingTop: 15 }}>
          <h2 className="section-heading">Keyspecs</h2>
          <table className="table" style={{ padding: 400 }}>
            <tbody style={{ padding: 50 }}>
              <tr>
                <td>Price</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Engine</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Seating Capacity</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="Features" className="section">
          <h2 className="section-heading">Features</h2>

          <FAQ faqs={details} />
        </div>
        <div id="Colours" className="section">
          <h2 className="section-heading">Colours</h2>
          <div className="color-box">
            <img
              id="color-image"
              src="https://via.placeholder.com/712x434"
              alt="Colour Palette"
            />
            <div className="color-buttons">
              <button
                id="btn_red"
                className="color-button red"
                onClick={() => changeColor('red')}
              />
              <button
                id="btn_black"
                className="color-button black"
                onClick={() => changeColor('black')}
              />
              <button
                id="btn_grey"
                className="color-button grey"
                onClick={() => changeColor('grey')}
              />
              <button
                id="btn_white"
                className="color-button white"
                onClick={() => changeColor('white')}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Overview;
