import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import { textureCubeUV } from "three/src/nodes/TSL.js";

export const UI = () => {
  // const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //  if(location.pathname !== '/home'){
    const timer = setTimeout(() => {
      setShowButton(true); // Show the button after 5 seconds
    }, 7000); // 5000ms = 5 seconds
 

    return () => clearTimeout(timer); // Cleanup the timer
//  }

  }, []);

//   useEffect(() => {
// if(location.pathname !== '/home'){
//   setShowButton(false);
// }
//   },[])

  return (
    <main>
        <a href="https://t.me/pepemaximus">
        <img src="images/DexLogo.png" className="pointer-events-auto absolute top-8 right-20 w-4 h-4 transition duration-300 hover:scale-110 hover:rotate-5 hover:opacity-80" />
        </a>

        <a href="https://x.com/thepepemaximus">
        <img src="images/xLogo.png" className="pointer-events-auto absolute top-8 right-14 w-4 h-4 transition duration-300 hover:scale-110 hover:rotate-5 hover:opacity-80" />
        </a>

        <a href="https://pump.fun/">
        <img src="images/teleLogo.png" className="pointer-events-auto absolute top-8 right-8 w-4 h-4 transition duration-300 hover:scale-110 hover:rotate-5 hover:opacity-80" />
        </a> 
      
      <img src="images/pepeHigh.png" 
      className="
      absolute top-0 left-6 
      w-12 h-26 
      md:w-20 md:h-50 
      lg:w-20 lg:h-50
      " />

    
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center 
      duration-500`}
      >
        <div className="h-[60%]"></div>
        {/* <button type="button"
          onClick={() => {navigate('/home')}}
          className="pointer-events-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-50"
        >
          ENTER
        </button> */}

     {
       showButton ?(  <button type="button" onClick={() => {navigate('/home')}}
          className="pointer-events-auto text-gray-900 
          bg-gradient-to-r from-teal-200 to-lime-200 
          hover:bg-gradient-to-l hover:from-teal-200
           hover:to-lime-200 focus:ring-4 focus:outline-none
            focus:ring-lime-200 dark:focus:ring-teal-700
             font-medium rounded-lg text-sm px-5 py-2.5 
             text-center me-2 mb-2 transition duration-50"
        >
          Enter
        </button>) : null
      }  

        
      </section>
    </div>
    </main>
  );
};
