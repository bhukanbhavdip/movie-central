import React from 'react'
import './App.css';
import Home from './Components/Home'
import SingleMovie from './Components/SingleMovie'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie/:id' element={<SingleMovie/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App