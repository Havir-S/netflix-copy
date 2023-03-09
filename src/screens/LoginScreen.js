import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'
function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginScreen' style={{backgroundImage: 'url(banner5.jpg)'}}>
        <div className='loginScreen__background'>
            <div className='loginScreen__nav'>
                <img className='loginScreen__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />
                <button onClick={() => {setSignIn(true)}} className='loginScreen__button' >Sign In</button>
            </div>
            

            <div className='loginScreen__gradient' />
        </div> 

        <div className='loginScreen__body'>
        {signIn ? (
            <SignUpScreen />
        ): (
            <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                
                <div className='loginScreen__input'>
                    <form>
                        <input type='email' placeholder='Email Address' />
                        <button onClick={() => {setSignIn(true)}} className='loginScreen__getStarted'>GET STARTED</button>
                    </form>
                </div>
            </>
        )}
            
        </div>
    </div>
  )
}

export default LoginScreen