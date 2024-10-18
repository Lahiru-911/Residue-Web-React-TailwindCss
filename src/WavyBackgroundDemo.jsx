import { WavyBackground } from "./components/ui/wavy-background";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="font-normal text-white font-inter">
      <div className="text-center">
        <p className="mt-12 text-4xl sm:text-6xl md:text-6xl lg:text-8xl md:mt-28">
          We’d Love To Hear From <a className="text-[#0081FB]">You.</a>
        </p>

        <p className="p-3 m-4 text-xl font-light sm:p-5 sm:m-8 sm:text-xl md:text-3xl">
          Have Questions, Need Support, or Want to Share Feedback? Our Team is
          Here to Assist You Every Step of the Way.
          <br />
          Reach Out and Connect with Us Today!
        </p>
      </div>

      {/* Flex container for contact details */}
      <div className="flex flex-col items-center justify-between gap-8 mx-5 mt-16 md:flex-row sm:mx-10 md:mx-20 md:mt-28 md:gap-0">
        
        {/* Phone section */}
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left md:flex-row">
          <FiPhoneCall className="text-2xl sm:text-3xl" />
          <p className="text-sm sm:text-base">
            Phone
            <br />
            <a
              href="tel:(+94) 74 277 7201"
              className="text-white hover:text-[#0081FB]"
            >
              (+94) 74 277 7201
            </a>
            <br />
            <a
              href="tel:(+94) 74 271 8994"
              className="text-white hover:text-[#0081FB]"
            >
              (+94) 74 271 8994
            </a>
          </p>
        </div>

        {/* Email section */}
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:flex-row">
          <MdEmail className="text-2xl sm:text-3xl" />
          <p className="text-sm sm:text-base">
            Our Email
            <br />
            <a
              className="text-white hover:text-[#0081FB]"
              href="mailto:prabath@residuesolution.com"
            >
              prabath@residuesolution.com
            </a>
          </p>
        </div>

        {/* Location section */}
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:flex-row">
          <IoLocationSharp className="text-2xl sm:text-3xl" />
          <address className="text-sm sm:text-base">
            <a
              className="text-white hover:text-[#0081FB] not-italic"
              href="https://maps.app.goo.gl/bnu6oNjbhpJUdtbEA"
              target="_blank"
              rel="noopener noreferrer"
            >
              No. 323,
              <br />
              Colombo Main Road,
              <br />
              Colombo 05.
            </a>
          </address>
        </div>
        
      </div>
    </WavyBackground>
  );
}
