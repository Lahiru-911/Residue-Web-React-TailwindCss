import { Card } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import "../../src/index.css";

const ContactForm = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
    <Card className="w-auto h-auto bg-[#FAFAFA] m-3 font-inter">
      <div className="grid grid-cols-1 gap-4 m-3 sm:grid-cols-2 md:grid-cols-2">
        <div>
          <div>
            <h1 className="text-2xl font-light sm:text-3xl md:text-4xl lg:text-6xl">
              Hey! Tell us all the
              <br />
              <span className="text-[#0081FB]">things</span>
            </h1>
            <p className="my-2 text-xs font-normal sm:text-xs md:text-sm lg:text-base">
                Give us a few details and we’ll offer the best solution.</p>
          </div>
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">    
            <Input type="text" label="First Name" variant={variants} />
            <Input type="text" label="Last Name" variant={variants} />
            <Input type="tel" label="Contact Phone" variant={variants} />
            <Input type="email" label="E-mail" variant={variants} />
          </div>
        </div>

        <div className="">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.202952738427!2d79.858473!3d6.884526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b001c3e29e3%3A0xe6643f6b87d2e1ed!2sResidue%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1729247413914!5m2!1sen!2slk"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
      </div>
    </Card>
  );
};

export default ContactForm;
