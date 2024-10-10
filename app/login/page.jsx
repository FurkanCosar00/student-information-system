"use client"

import "./login.css";
import LoginForm from './loginform';
import SignupForm from './signupform';
import { useState } from 'react'

export default function LoginPage() {
  const [signOrLogin, setSignOrLogin] = useState("login");

  return (
    <div className="register-container">
      <div className="login-page">
        {signOrLogin === "login" ? <LoginForm /> : <SignupForm />}
        
        <div className="navigation">
          <button onClick={() => setSignOrLogin("login")}>login</button>
          <button onClick={() => setSignOrLogin("signup")}>signup</button>
        </div>
      </div>
    </div>
  )
}