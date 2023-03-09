import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {  onAuthStateChanged  } from 'firebase/auth';
import { auth } from './firebase';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
          uid: user.uid,
          email: user.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
        {/* <RouterProvider router={router} /> */}
        <Router>
          {!user ? (
            <LoginScreen />
            
            
          ): (
            <Routes>
                <Route path='/profile' element={<ProfileScreen/>} />
                <Route path="/" element={<HomeScreen/>}/>
                
            </Routes>
          )}
            
        </Router>
        
    </div>
  );
}

export default App;
