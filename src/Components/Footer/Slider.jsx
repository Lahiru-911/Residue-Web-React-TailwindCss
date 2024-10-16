import Marquee from "react-fast-marquee";
const Slider = () => {
  return (
    <>
    <div className="bg-white ">
      {/* Text-Tagline */}
      <div className="m-12 mt-2 font-light text-center">
        <h1 className="text-3xl font-light sm:text-4xl md:text-5xl lg:text-6xl">
          Our Partners & Vendors
        </h1>
      </div>
      {/* Marquee-Tagline */}
      <Marquee
        className="mt-2"
        speed={50}
        pauseOnHover={true}
        loop={0}
        autoFill={true}
      >
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://openseauserdata.com/files/660d1a2fd7fc203dcc90d541d14443c5.jpg"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://i.seadn.io/s/raw/files/6ff30efb6250bc4d9ab52cb99f55be75.png?auto=format&dpr=1&w=1000"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://openseauserdata.com/files/660d1a2fd7fc203dcc90d541d14443c5.jpg"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://i.seadn.io/s/raw/files/6ff30efb6250bc4d9ab52cb99f55be75.png?auto=format&dpr=1&w=1000"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://openseauserdata.com/files/660d1a2fd7fc203dcc90d541d14443c5.jpg"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://i.seadn.io/s/raw/files/6ff30efb6250bc4d9ab52cb99f55be75.png?auto=format&dpr=1&w=1000"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://openseauserdata.com/files/660d1a2fd7fc203dcc90d541d14443c5.jpg"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://i.seadn.io/s/raw/files/6ff30efb6250bc4d9ab52cb99f55be75.png?auto=format&dpr=1&w=1000"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://openseauserdata.com/files/660d1a2fd7fc203dcc90d541d14443c5.jpg"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="https://i.seadn.io/s/raw/files/6ff30efb6250bc4d9ab52cb99f55be75.png?auto=format&dpr=1&w=1000"
          alt="Sony"
        />
      </Marquee>
      </div>
    </>
  );
};

export default Slider;
