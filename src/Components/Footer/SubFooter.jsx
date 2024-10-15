const SubFooter = () => {
  return (
    <>
      <div className="flex justify-between mx-12 mt-48">
        <div className="flex gap-x-48">
          {/* ContactUs */}
          <div className="flex flex-col space-y-3">
            <h1 className="f-gap">Contact us</h1>
            <p>
              Our Email <br />
              <a
                className="text-black hover:text-[#0081FB]"
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
        <div className="bg-white w-[250px] h-[200px] ">
          <h1 className="">We’d love to connect!</h1>
          <p>
            Whether you're interested in collaborating <br />
            or just want to chat, feel <br />
            free to reach out.
          </p>
        </div>
      </div>
    </>
  );
};

export default SubFooter;
