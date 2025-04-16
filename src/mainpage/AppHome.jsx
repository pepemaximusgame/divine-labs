import React, { Suspense } from 'react'
import Home from './Home.css'
import HomePage from './HomePage'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from '../components/Loader';
import Banner from './Banner';
import LogoShowcase from './LogoShowcase';
const AppHome = () => {
  return (
    < >
    <Suspense fallback={<Loader />}>
     <Header/>
     <Banner/>
     <LogoShowcase/>
    </Suspense>
    
  {/* <HomePage/> */}
    </>
  
  )
}

export default AppHome