const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Create a schema and model for the form data
const formDataSchema = new mongoose.Schema({
  imgId: { type: String, required: true, unique: true },
  imgUrl: { type: String, required: true },
});

const FormData = mongoose.model('FormData', formDataSchema);

// API endpoint to handle form submission
app.post('/admin', async (req, res) => {
  const { imgId, imgUrl } = req.body;

  try {
    // Check if imgId already exists in the database
    const existingData = await FormData.findOne({ imgId });

    if (existingData) {
      // If imgId exists, update the imgUrl
      existingData.imgUrl = imgUrl;
      await existingData.save();
      res.status(200).send('Form data updated successfully!');
    } else {
      // If imgId does not exist, create new entry
      const formData = new FormData({ imgId, imgUrl });
      await formData.save();
      res.status(201).send('Form data saved successfully!');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while saving the form data.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
