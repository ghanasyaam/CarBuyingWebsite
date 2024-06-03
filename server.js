const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User, FormData } = require('./src/Pages/UserAuthentication/mongo');  

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.send('exist');
            } else {
                res.send('wrong details');
            }
        } else {
            res.send('notexist');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.send('exist');
        } else {
            const newUser = new User({ email, password });
            await newUser.save();
            res.send('notexist');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.post('/admin', async (req, res) => {
    const { carName, carouselImages, colorImages } = req.body;

    try {
        const existingData = await FormData.findOne({ carName });

        if (existingData) {
            res.send('exist');
        } else {
            const formData = new FormData({
                carName,
                carouselImages,
                colorImages
            });
            await formData.save();
            res.send('Form data saved successfully!');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while saving the form data.');
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
