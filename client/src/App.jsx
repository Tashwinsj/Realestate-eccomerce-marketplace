import React from 'react'
import './App.css' 
import Header from './comp/Header'  
import Buy from './comp/Buy' 
import Search from './comp/Search'
import Menu from './comp/Menu' 
import Agent from './comp/Agent'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import {ApolloClient , InMemoryCache , ApolloProvider ,useQuery ,gql} from '@apollo/client' 


 
function App() { 
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
   
  return ( 
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header /><Search/><Menu/><Agent/></>}>
      </Route> 
      <Route path ="/buy" element={<><Header /><Buy/></>} ></Route>
    </Routes>
    </BrowserRouter> 
    </ApolloProvider>
  )
}

export default App