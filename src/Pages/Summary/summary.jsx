import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Summary = () => {
  const paymentcompleted = (event) => {
    event.preventDefault();
    alert("Payment completed");
  };

  return (
    <div className="container d-lg-flex">
      <div className="box-1 bg-light user">
        <div className="d-flex align-items-center mb-3">
          <img
            src="https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo-2014.png"
            className="pic rounded-circle"
            alt=""
          />
        </div>
        <div className="box-inner-1 pb-3 mb-3 ">
          <div className="d-flex justify-content-between mb-3 userdetails">
            <p id="CarName" className="fw-bold">Lightroom Presets</p>
            <p id="Price" className="fw-lighter">
              <i style={{ paddingRight: '10px' }} className="fas fa-rupee-sign"></i>
            </p>
          </div>
          <div
            id="my"
            className="carousel slide carousel-fade img-details"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#my"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#my"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#my"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="" className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  className="d-block w-100 h-100"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#my"
              data-bs-slide="prev"
            >
              <div className="icon">
                <span className="fas fa-arrow-left"></span>
              </div>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#my"
              data-bs-slide="next"
            >
              <div className="icon">
                <span className="fas fa-arrow-right"></span>
              </div>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="radiobtn"></div>
        </div>
      </div>
      <div className="box-2">
        <div className="box-inner-2">
          <div>
            <p className="fw-bold">Payment Details</p>
            <p className="dis mb-3">Complete your purchase by providing your payment details</p>
          </div>
          <form>
            <div className="mb-3">
              <p className="dis fw-bold mb-2">Email address</p>
              <input id="email" className="form-control" type="email" />
            </div>
            <div>
              <p className="dis fw-bold mb-2">Card details</p>
              <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                <div className="fab fa-cc-visa ps-3"></div>
                <input type="text" className="form-control" placeholder="Card Details" />
                <div className="d-flex w-50">
                  <input type="text" className="form-control px-0" placeholder="MM/YY" />
                  <input type="password" maxLength={3} className="form-control px-0" placeholder="CVV" />
                </div>
              </div>
              <div className="my-3 cardname">
                <p className="dis fw-bold mb-2">Cardholder name</p>
                <input id="Cardholder-name" className="form-control" type="text" />
              </div>
              <div className="address">
                <p className="dis fw-bold mb-3">Billing address</p>
                <select className="form-select" aria-label="Default select example">
                  <option selected hidden>United States</option>
                  <option value="1">India</option>
                  <option value="2">Australia</option>
                  <option value="3">Canada</option>
                </select>
                <div className="d-flex">
                  <input className="form-control zip" type="text" placeholder="ZIP" />
                  <input className="form-control state" type="text" placeholder="State" />
                </div>
                <div className="my-3">
                  <p className="dis fw-bold mb-2">GST Number</p>
                  <div className="inputWithcheck">
                    <input className="form-control" type="text" value="GB012345B9" readOnly />
                    <span className="fas fa-check"></span>
                  </div>
                </div>
                <div className="d-flex flex-column dis">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p>Subtotal</p>
                    <p><span id="finalprices"></span></p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p>Road Safety Tax <span></span></p>
                    <p><span></span>₹ 20 Lakhs</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="fw-bold">Total</p>
                    <p className="fw-bold"><span id="Total"></span></p>
                  </div>
                  <button className="Summary button-box" onClick={paymentcompleted}>
                    <span id="finalprice"></span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Summary;
