import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import PageLogin from './pages/LoginPages'
import PageRegister from './pages/RegisterPages';
import HomePages from './pages/HomePages';


const App = () => {
  return (
  <BrowserRouter>
    <Router>
      <Routes>
        <Route path='/' element={<PageLogin/>}/>
        <Route path='/register' element={<PageRegister/>}/>
        <Route path='/homepage' element={<HomePages/>}/>
      </Routes>
    </Router>
    </BrowserRouter>
  )
}

export default App