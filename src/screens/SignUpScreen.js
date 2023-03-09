import React, { useRef } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import './SignUpScreen.css'

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    console.log('ding')

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser) => {
      console.log(authUser)
    }).catch(err => {
      alert(err)
      console.log(err)
    })
  }

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword (auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser) => {
      console.log(authUser)
    }).catch(err => {
      alert(err)
      console.log(err)
    })
  }
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4><span className='signupScreen__gray'>New to NETFLIX? </span> <span className='signupScreen__link'  onClick={register}>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen