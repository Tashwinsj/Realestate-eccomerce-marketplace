import React from 'react'
import './App.css' 
import Header from './comp/Header'  
import Dropdown from './comp/Dropdown' 
import Buy from './comp/Buy' 
import Search from './comp/Search'
import Menu from './comp/Menu'

function App() {
   
  return (
    <> 
      <Header/> 
      <Search/> 
      <Menu/>
      <Dropdown/>  
      <Buy/>
    </>
  )
}

export default App
