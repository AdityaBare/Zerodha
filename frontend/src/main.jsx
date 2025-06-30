import  createRoot  from 'react-dom/client'
import './index.css'
import ReactDom from 'react-dom/client'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage.jsx'
import SignUp from './landing_page/signup/SignUp.jsx'
import SupportPage from "./landing_page/support/SupportPage.jsx"
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import AboutPage from "./landing_page/about/AboutPage.jsx"
import ProductPage from "./landing_page/products/ProductPage.jsx"
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'
import Login from './landing_page/login/Login.jsx'

 const root = ReactDom.createRoot(document.getElementById('root'));
 root.render(
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/> 
         <Route path='/signup' element={<SignUp/>}/> 
         <Route path='/support' element={<SupportPage/>}/> 
         <Route path='/pricing' element={<PricingPage/>}/> 
         <Route path='/about' element={<AboutPage/>}/> 
         <Route path='/products' element={<ProductPage/>}/>
         <Route path='/login' element={<Login/> }/>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
)
