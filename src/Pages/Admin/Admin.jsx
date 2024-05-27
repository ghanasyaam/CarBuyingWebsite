import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [imgId, setImgId] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server with form data
      await axios.post('http://localhost:5001/admin', {
        imgId,
        imgUrl,
      });

      // Reset the form inputs
      setImgId('');
      setImgUrl('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h1>Admin Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image ID:
          <label>
            Carousel Image 1
            <input type="hidden" value="First" onChange={(e) => setImgId(e.target.value)} />
        </label>

        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => {
                setImgUrl(e.target.value);
                setImgId("carouselImage1");
            }}
            />

        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
