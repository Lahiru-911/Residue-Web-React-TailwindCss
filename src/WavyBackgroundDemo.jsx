import { WavyBackground } from "./components/ui/wavy-background";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="font-normal text-white font-inter">
      {/* Main heading section */}
      <div className="text-center">
        <p className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:mt-16">
          We’d Love To Hear From <a className="text-[#0081FB]">You.</a>
        </p>

        <p className="p-2 m-2 text-base font-light sm:p-3 sm:m-4 sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
          Have Questions, Need Support, or Want to Share Feedback? Our Team is
          Here to Assist You Every Step of the Way.
          <br />
          Reach Out and Connect with Us Today!
        </p>
      </div>

      {/* contact details */}
      <div className="flex flex-col items-center justify-between gap-6 mx-3 mt-8 mb-2 md:flex-row sm:mx-6 md:mx-10 md:mt-16 md:gap-8 lg:gap-10 xl:gap-12">
        
        {/* Phone section */}
        <div className="flex flex-col items-center w-full gap-3 text-center transition-all duration-300 ease-in-out md:w-auto md:items-start md:text-left md:flex-row">
          <FiPhoneCall className="text-xl sm:text-2xl md:text-3xl" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
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
        <div className="flex flex-col items-center w-full gap-3 mt-3 text-center transition-all duration-300 ease-in-out md:w-auto md:items-start md:text-left md:flex-row">
          <MdEmail className="text-xl sm:text-2xl md:text-3xl" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
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
        <div className="flex flex-col items-center w-full gap-3 text-center transition-all duration-300 ease-in-out md:w-auto md:items-start md:text-left md:flex-row">
          <IoLocationSharp className="text-xl sm:text-2xl md:text-3xl" />
          <address className="text-xs sm:text-sm md:text-base lg:text-lg">
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
