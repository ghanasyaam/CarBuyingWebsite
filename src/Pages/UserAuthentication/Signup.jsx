import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './styl.css';

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                email,
                password
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                navigate("/", { state: { id: email } });
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    }

    return (
        <div className="cbw-body">
            <div className="cbw-container">
                <h1>Car Buying Website</h1>
                <h2>Signup</h2>
                <form className="cbw-form" onSubmit={submit}>
                    <label htmlFor="signupEmail">Email:</label>
                    <input
                        type="email"
                        id="signupEmail"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="signupPassword">Password:</label>
                    <input
                        type="password"
                        id="signupPassword"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input type="submit" value="Signup" className="cbw-button" />
                    <p>OR</p>
                    <br />
                    <Link to="/login">Login Page</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
