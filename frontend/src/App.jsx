import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LiveEditor from './pages/LiveEditor';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/live-editor' element={<LiveEditor />} />
    </Routes>
    
    </>
  )
}

export default App
