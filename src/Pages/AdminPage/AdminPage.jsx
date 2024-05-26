import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic input validation (optional, enhance as needed)
    if (!imageUrl || !imageName) {
      setMessage('Please enter both image URL and name.');
      return;
    }

    console.log('Submitting image data:', { imageUrl, imageName }); // Log submitted data

    try {
      const response = await axios.post('/api/images', {
        imageUrl,
        imageName,
      });

      setMessage(response.data.message);
      setImageUrl('');
      setImageName(''); // Clear form after successful submission
    } catch (error) {
      console.error('Error uploading image:', error); // Log entire error object
      setMessage('Error uploading image. Please try again.');
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <br />
        <label htmlFor="imageName">Image Name:</label>
        <input
          type="text"
          id="imageName"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          required
        />
        <br />
        <button type="submit">Upload Image</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AdminPage;
