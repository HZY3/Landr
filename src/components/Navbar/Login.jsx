import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './Login.css'
import ReactDOM from 'react-dom'
import logo from './assets/logo.jpg'

// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function Login() {
    return (
        <div className='LoginPage'>
            <img className="Login-Img"src="https://images.unsplash.com/photo-1527377667-83c6c76f963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
            <p>Enter Private address</p>
            <input type="text" className='Login-Input-field'></input>
            <button className='Login-Btn'>Continue</button>
        </div>
    )
}



export default Login

