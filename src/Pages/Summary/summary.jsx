import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Summary = () => {
  const [formData, setFormData] = useState({
    email: '',
    cardDetails: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    country: '',
    zip: '',
    state: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email address is invalid";
    if (!formData.cardDetails) formErrors.cardDetails = "Card details are required";
    if (!formData.expiryDate) formErrors.expiryDate = "Expiry date is required";
    if (!formData.cvv) formErrors.cvv = "CVV is required";
    if (formData.cvv.length !== 3) formErrors.cvv = "CVV must be 3 digits";
    if (!formData.cardholderName) formErrors.cardholderName = "Cardholder name is required";
    if (!formData.country) formErrors.country = "Country is required";
    if (!formData.zip) formErrors.zip = "ZIP code is required";
    if (!formData.state) formErrors.state = "State is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const paymentcompleted = (event) => {
    event.preventDefault();
    if (validate()) {
      alert("Payment completed");
    }
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
              <input
                id="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div>
              <p className="dis fw-bold mb-2">Card details</p>
              <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                <div className="fab fa-cc-visa ps-3"></div>
                <input
                  id="cardDetails"
                  type="text"
                  className={`form-control ${errors.cardDetails ? 'is-invalid' : ''}`}
                  placeholder="Card Details"
                  value={formData.cardDetails}
                  onChange={handleChange}
                />
                <div className="d-flex w-50">
                  <input
                    id="expiryDate"
                    type="text"
                    className={`form-control px-0 ${errors.expiryDate ? 'is-invalid' : ''}`}
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                  <input
                    id="cvv"
                    type="password"
                    maxLength={3}
                    className={`form-control px-0 ${errors.cvv ? 'is-invalid' : ''}`}
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="my-3 cardname">
                <p className="dis fw-bold mb-2">Cardholder name</p>
                <input
                  id="cardholderName"
                  className={`form-control ${errors.cardholderName ? 'is-invalid' : ''}`}
                  type="text"
                  value={formData.cardholderName}
                  onChange={handleChange}
                />
                {errors.cardholderName && <div className="invalid-feedback">{errors.cardholderName}</div>}
              </div>
              <div className="address">
                <p className="dis fw-bold mb-3">Billing address</p>
                <select
                  id="country"
                  className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                  aria-label="Default select example"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="" hidden>Select Country</option>
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                </select>
                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                <div className="d-flex">
                  <input
                    id="zip"
                    className={`form-control zip ${errors.zip ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="ZIP"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                  <input
                    id="state"
                    className={`form-control state ${errors.state ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
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
                    <span id="finalprice">Confirm Purchase</span>
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
