import React,{useEffect} from "react";
import Scroll from "./Components/Scroll"
import MyRoutings from "./Routings/MyRoutings"
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
AOS.init();
function App() {
 
  return (
    <div Toaster
    position="top-center"
    reverseOrder={false}>

      <MyRoutings/>
      <Scroll/>
    </div>
  )
}

export default App
