"use client"

import LoginForm from './loginform';
import SignupForm from './signupform';
import { useState } from 'react'

export default function LoginPage() {
  const [signOrLogin, setSignOrLogin] = useState("login");

  return (
    <div className="register-container">
      <div className="login-page">
        <ul>
          <li><button onClick={() => setSignOrLogin("login")}>login</button></li>
          <li><button onClick={() => setSignOrLogin("signup")}>signup</button></li>
        </ul>

        {signOrLogin === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  )
}