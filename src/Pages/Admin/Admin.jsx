import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'; 

const Admin = () => {
  const [carName, setCarName] = useState('');
  const [carouselImages, setCarouselImages] = useState({
    image1: '',
    image2: '',
    image3: ''
  });
  const [colorImages, setColorImages] = useState({
    red: '',
    black: '',
    grey: '',
    white: ''
  });

  const handleInputChange = (e, setState, field) => {
    const value = e.target.value;
    setState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      carName,
      carouselImages,
      colorImages
    };

    try {
      await axios.post('http://localhost:8000/admin', data);
      setCarName('');
      setCarouselImages({ image1: '', image2: '', image3: '' });
      setColorImages({ red: '', black: '', grey: '', white: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <div className="profile-pic">
          <img src="profile-pic-url" alt="Profile" />
        </div>
        <ul>
          <li>Profile</li>
          <li>Categories</li>
          <li>Browse Categories</li>
          <li>Add Products</li>
          <li>View Products</li>
          <li>New user requests</li>
          <li>View user</li>
        </ul>
      </div>
      <div className="content">
        <h1>Add Car Details</h1>
        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Car Name:
            <input
              type="text"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Carousel Image 1 URL:
            <input
              type="text"
              value={carouselImages.image1}
              onChange={(e) => handleInputChange(e, setCarouselImages, 'image1')}
            />
          </label>
          <br />
          <label>
            Carousel Image 2 URL:
            <input
              type="text"
              value={carouselImages.image2}
              onChange={(e) => handleInputChange(e, setCarouselImages, 'image2')}
            />
          </label>
          <br />
          <label>
            Carousel Image 3 URL:
            <input
              type="text"
              value={carouselImages.image3}
              onChange={(e) => handleInputChange(e, setCarouselImages, 'image3')}
            />
          </label>
          <br />
          <label>
            Red Color Image URL:
            <input
              type="text"
              value={colorImages.red}
              onChange={(e) => handleInputChange(e, setColorImages, 'red')}
            />
          </label>
          <br />
          <label>
            Black Color Image URL:
            <input
              type="text"
              value={colorImages.black}
              onChange={(e) => handleInputChange(e, setColorImages, 'black')}
            />
          </label>
          <br />
          <label>
            Grey Color Image URL:
            <input
              type="text"
              value={colorImages.grey}
              onChange={(e) => handleInputChange(e, setColorImages, 'grey')}
            />
          </label>
          <br />
          <label>
            White Color Image URL:
            <input
              type="text"
              value={colorImages.white}
              onChange={(e) => handleInputChange(e, setColorImages, 'white')}
            />
          </label>
          <br />
          <button type="submit">Add Car</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
