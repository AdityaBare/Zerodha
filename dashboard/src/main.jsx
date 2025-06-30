import { StrictMode } from 'react'


import  {createRoot}  from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home'

const root =createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path='/*'  element={<Home/>}/>
   </Routes>
  </BrowserRouter>

 
)
