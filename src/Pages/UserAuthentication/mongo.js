const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/react-login-tut', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.log('Failed to connect to MongoDB', error);
});

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);


const formDataSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
        unique: true
    },
    carouselImages: {
        image1: { type: String, required: true },
        image2: { type: String, required: true },
        image3: { type: String, required: true },
    },
    colorImages: {
        red: { type: String, required: true },
        black: { type: String, required: true },
        grey: { type: String, required: true },
        white: { type: String, required: true }
    }
});


const FormData = mongoose.model("FormData", formDataSchema);

module.exports = {
    User,
    FormData
};
