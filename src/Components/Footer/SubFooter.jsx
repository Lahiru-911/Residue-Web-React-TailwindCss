import { RiWhatsappLine } from "react-icons/ri";
const SubFooter = () => {
  return (
    <>
      <div className="flex justify-between mx-5">
        <div className="flex mt-28 gap-x-48">
          {/* ContactUs */}
          <div className="flex flex-col space-y-3">
            <h1 className="f-gap">Contact us</h1>
            <p>
              Our Email <br />
              <a
                className="text-black hover:text-[#0081FB] "
                href="mailto:prabath@residuesolution.com"
              >
                prabath@residuesolution.com
              </a>
            </p>
            <p>
              Our Phone Number <br />
              <a
                href="tel:(+94) 74 277 7201"
                className="text-black hover:text-[#0081FB]"
              >
                (+94) 74 277 7201
                (+94) 74 271 8994
              </a>
            </p>
            <address className="not-italic text-black hover:text-[#0081FB]">
              <a
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

          {/* FollowUs */}
          <div className="flex flex-col space-y-3">
            <h1 className="f-gap">Follow us</h1>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0081FB]"
            >
              Facebook
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0081FB]"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0081FB]"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0081FB]"
            >
              TikTok
            </a>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-3">
            <h1 className="f-gap">Services</h1>
            <a href="#" className="hover:text-[#0081FB]">
              Custom Software Development
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              Mobile App Development
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              IT Consulting
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              Website Maintenance
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              Website Analytics
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              Cloud Security Services
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              Cloud Consulting
            </a>
          </div>
        </div>

        {/* ConnectTab */}
        <div className="bg-white w-[400px] h-[330px]  mt-20">
          <div className="m-7 ">
            <h1 className="text-5xl font-normal">We’d love to connect!</h1>
            <p className="pt-5">
              Whether you're interested in collaborating <br />
              or just want to chat, feel <br />
              free to reach out.
            </p>
            <button className="relative px-4 py-2 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-base font-inter font-normal my-5">
              + Become a Client
            </button>
          </div>
        </div>
      </div>
      {/* FooterUnderTag */}
      <div className="flex flex-row items-center gap-20 mx-5 mt-44">
        <div className="basis-1/3">
          <p>
            © Copyright 2024. Powered By
            <a href="#" className="text-[#0081FB]">
              {" "}
              Residue Solutions
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-16 basis-1/3">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">About Us</a>
        </div>
        <div className="flex justify-end basis-1/3">
        <RiWhatsappLine className="text-[#25D366] size-10" />
        </div>
      </div>
    </>
  );
};

export default SubFooter;
