import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './styl.css';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
    
        try {
            const res = await axios.post("http://localhost:8000/", {
                email,
                password
            });
    
            if (email === "ghanasyaaam@gmail.com") {
                navigate("/admin");
            } else if (res.data === "exist") {
                navigate("/", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    }
    

    return (
<div className="cbw-body">
<div className="cbw-container">
<h1>Login</h1>

<div id="UserLogin" className="cbw-tabcontent">
  <form className="cbw-form" id="userLoginForm" onSubmit={submit}>
    <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
    <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

    <input type="submit" value="Login" className="cbw-button" />
            <br />
            <Link to="/signup">Signup Page</Link>
  </form>
</div>
</div>
</div>
    );
}

export default Login;
