const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.error(err));

// Define the Image schema for MongoDB
const ImageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  imageName: { type: String, required: true },
});

const Image = mongoose.model('Image', ImageSchema);

// Apply middleware
app.use(cors()); // Allow CORS requests for development
app.use(bodyParser.json()); // Parse incoming JSON data

// API route for handling image uploads
app.post('/api/images', async (req, res) => {
  const { imageUrl, imageName } = req.body;

  try {
    console.log('Received image data:', { imageUrl, imageName }); // Log received data

    const newImage = new Image({
      imageUrl,
      imageName,
    });

    const savedImage = await newImage.save();
    res.json({ message: 'Image uploaded successfully!', data: savedImage });
  } catch (err) {
    console.error('Error uploading image:', err); // Log entire error object
    res.status(500).json({ message: 'Error uploading image.' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
