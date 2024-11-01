import React, { useEffect } from "react";
import Scroll from "./Components/Scroll";
import MyRoutings from "./Routings/MyRoutings";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

AOS.init();

function App() {
  return (
    <div>
      {/* Add ToastContainer for react-toastify */}
      <ToastContainer 
        position="top-center" 
        reverseOrder={false} 
      />
      <MyRoutings />
      <Scroll />
    </div>
  );
}

export default App;
