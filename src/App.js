import './style/App.css';
import { useState, useEffect } from 'react'
import Battlefield from './Battlefield'
import Lobby from './Lobby'
import CardInput from './CardInput'
import SignIn from './SignIn'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      setUser(user);
    })
  }, []);

  return ( user ?
    <Routes>
      <Route path='/battlefield' element={<Battlefield />} />
      <Route path='/cardInput' element={<CardInput />} />
      <Route path='/lobby' element={<Lobby />} />
      <Route path='*' element={<Navigate to='/lobby' />} />
    </Routes> :
    <Routes>
      <Route path='/signIn' element={<SignIn />} />
      <Route path='*' element={<Navigate to='/signIn' />} />
    </Routes>
  );
}

export default App;
