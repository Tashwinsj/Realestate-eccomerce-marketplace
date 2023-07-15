import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Header from './comp/Header'  
import Search from './comp/Search' 
import Menu from './comp/Menu' 
import Dropdown from './comp/Dropdown'

function App() {
   
  return (
    <> 
       <Header/>
      <Dropdown/>
    </>
  )
}

export default App
