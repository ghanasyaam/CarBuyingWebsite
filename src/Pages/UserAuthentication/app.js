// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())



// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(8000,()=>{
//     console.log("port connected");
// })

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/', { email, password });
      if (response.data === 'exist') {
        setMessage('User exists. Login successful.');
      } else {
        setMessage('User does not exist.');
      }
    } catch (error) {
      setMessage('Login failed.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', { email, password });
      if (response.data === 'exist') {
        setMessage('User already exists.');
      } else {
        setMessage('Signup successful.');
      }
    } catch (error) {
      setMessage('Signup failed.');
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Login'),
    React.createElement(
      'form',
      { onSubmit: handleLogin },
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Email:'),
        React.createElement('input', {
          type: 'email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Password:'),
        React.createElement('input', {
          type: 'password',
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true
        })
      ),
      React.createElement('button', { type: 'submit' }, 'Login')
    ),
    React.createElement('h1', null, 'Signup'),
    React.createElement(
      'form',
      { onSubmit: handleSignup },
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Email:'),
        React.createElement('input', {
          type: 'email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('label', null, 'Password:'),
        React.createElement('input', {
          type: 'password',
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true
        })
      ),
      React.createElement('button', { type: 'submit' }, 'Signup')
    ),
    React.createElement(
      'div',
      null,
      message && React.createElement('p', null, message)
    )
  );
};

export default App;
