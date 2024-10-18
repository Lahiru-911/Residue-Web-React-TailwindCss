
import ContactForm from "./Components/ContactForm";
import ContactUs from "./Pages/ContactUs";
import { WavyBackgroundDemo } from "./WavyBackgroundDemo";

import { NextUIProvider, Button } from '@nextui-org/react';
import './index.css';


export default function App() {
  return (

    <NextUIProvider>
      <div>
      
        <ContactForm/>
  
        
        {/* <WavyBackgroundDemo/>
      <ContactUs/> */}
     
      
      </div>
    </NextUIProvider>
  );
}
