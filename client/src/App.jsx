import React from 'react'
import './App.css' 
import Header from './comp/Header'  

import Buy from './comp/Buy' 
import Search from './comp/Search'
import Menu from './comp/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Search/><Menu/></>}>
        </Route> 
        <Route path ="/buy" element={<><Header /><Buy/></>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
