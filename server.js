const express = require('express');
const cors = require('cors');
const collection = require('./src/Pages/UserAuthentication/mongo'); 
const app = express();
app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await collection.findOne({ email });

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
        const existingUser = await collection.findOne({ email });

        if (existingUser) {
            res.send('exist');
        } else {
            const newUser = new collection({ email, password });
            await newUser.save();
            res.send('notexist');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
