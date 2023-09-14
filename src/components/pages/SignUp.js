import React from 'react'
import './SignUp.css'


function SignUp () {
  return (
    <div className="sign-container">
        <h3>Executive Club </h3>
        <div className="sign-input">
            <div>
            <input type="Password" name="Password" placeholder="Password" className="sign-input" />
            <button buttonStyle='btn--outline'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp


