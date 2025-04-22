import React, { Suspense } from 'react'
import Home from './Home.css'
import HomePage from './HomePage'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from '../components/Loader';
import Banner from './Banner';
import LogoShowcase from './LogoShowcase';
import AnimatedCounter from './AnimatedCounter';
import Roadmap from './Roadmap';
import Contract from './Contract';
import Moments from './Moments';
import Footer from './Footer';
import BoxerBanner from './BoxerBanner';
const AppHome = () => {
  return (
    < >
    <Suspense fallback={<Loader/>}>
     <Header/>
     <Banner/>
     <LogoShowcase/>
     <AnimatedCounter/>
     <Contract/>
     <Moments/>
     <LogoShowcase/>
     <BoxerBanner/>
     <Footer/>
     {/* <LogoShowcase/>
     <AnimatedCounter/>
     <Roadmap/> */}

    </Suspense>
    
  {/* <HomePage/> */}
    </>
  
  )
}

export default AppHome