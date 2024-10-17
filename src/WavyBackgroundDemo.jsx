import { WavyBackground } from "./components/ui/wavy-background";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="font-normal text-center text-white font-inter">
      <p className="m-3 text-4xl md:text-5xl lg:text-8xl">
        We’d Love To Hear From <a className="text-[#0081FB]">You.</a>
      </p>

      <p className="m-3 text-base md:text-lg">
        Have Questions, Need Support, or Want to Share Feedback? Our Team is
        Here to Assist You Every Step of the Way.
        <br />
        Reach Out and Connect with Us Today!
      </p>

      <div className="grid gap-8 lg:gap-20 md:grid-cols-3 sm:grid-cols-1">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <FiPhoneCall className="mt-2 text-2xl" />
          <p className="text-sm text-center md:text-left md:text-base">
            Phone
            <br />
            (+94) 74 277 7201
            <br />
            (+94) 74 271 8994
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <MdEmail className="mt-1 text-2xl" />
          <p className="text-sm text-center md:text-left md:text-base">
            Our Email <br />
            <a
              className="text-white hover:text-[#0081FB]"
              href="mailto:prabath@residuesolution.com"
            >
              prabath@residuesolution.com
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <IoLocationSharp className="text-2xl" />
          <address className="text-sm not-italic text-center md:text-base md:text-left">
            <a
              className="text-white hover:text-[#0081FB]"
              href="https://maps.app.goo.gl/bnu6oNjbhpJUdtbEA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>No. 323,</p>
              <p>Colombo Main Road,</p>
              <p>Colombo 05.</p>
            </a>
          </address>
        </div>
      </div>
    </WavyBackground>
  );
}
