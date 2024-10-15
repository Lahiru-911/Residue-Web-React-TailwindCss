import Marquee from "react-fast-marquee";
const Slider = () => {
  return (
    <>
    <div className="bg-white">
      {/* Text-Tagline */}
      <div className="my-5 font-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
          src="../img/p8.png"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p4.png"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p8.png"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p4.png"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p8.png"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p4.png"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p8.png"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p4.png"
          alt="Sony"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p8.png"
          alt="Singer"
        />
        <img
          className="w-20 h-auto p-2 border sm:w-24 md:w-28 lg:w-32 xl:w-36 max-w-none"
          src="../img/p4.png"
          alt="Sony"
        />
      </Marquee>
      </div>
    </>
  );
};

export default Slider;
