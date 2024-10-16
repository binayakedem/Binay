import React,{useEffect} from "react";
import Scroll from "./Components/Scroll"
import MyRoutings from "./Routings/MyRoutings"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
 
  return (
    <>
      <MyRoutings/>
      <Scroll/>
    </>
  )
}

export default App
