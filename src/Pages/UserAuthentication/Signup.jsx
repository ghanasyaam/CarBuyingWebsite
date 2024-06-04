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
                <h1>Sign Up</h1>
                <form className="cbw-form" onSubmit={submit}>
                    <input
                        type="email"
                        id="signupEmail"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        id="signupPassword"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input type="submit" value="Signup" className="cbw-button" />
                    <br />
                    <Link to="/login">Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
