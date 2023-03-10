import './style/App.css';
import Battlefield from './Battlefield'
import Lobby from './Lobby'
import CardInput from './CardInput'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route path='battlefield' element={<Battlefield />} />
        <Route path='cardInput' element={<CardInput />} />
        <Route path='lobby' element={<Lobby />} />
        <Route path='*' element={<Navigate to='/lobby' />} />
      </Route>
    </Routes>
  );
}

export default App;
