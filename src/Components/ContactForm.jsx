import {Card} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import "../../src/index.css";

const ContactForm = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
    <Card className="w-auto h-auto bg-[#FAFAFA] m-3 font-inter">
        
      <div className="grid grid-cols-1 gap-4 m-3 sm:grid-cols-2 md:grid-cols-2">
        <div className="">
          <h1 className="text-3xl font-light md:text-4xl lg:text-6xl">
            Hey! Tell us all the<br/>
            <p className="text-[#0081FB]">
              things
            </p>
          </h1>
          <p className="">
            Give us a few details and we’ll offer the best solution.
          </p>
          <Input type="text" label="First Name" variant={variants} />
          <Input type="text" label="Last Name" variant={variants} />
          <Input type="tel" label="Contact Phone" variant={variants} />
          <Input type="email" label="E-mail" variant={variants} />
        </div>

        <div className="m-3 bg-green-500">
            
        
      
      
    
        </div>
      </div>
      </Card>
  );
};

export default ContactForm;
