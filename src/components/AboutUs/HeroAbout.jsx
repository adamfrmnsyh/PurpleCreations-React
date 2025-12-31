import fotoabout from "../../assets/img/potoabout.jpg";
import fotoabout2 from "../../assets/img/potoabout2.jpg";

const HeroAbout = () => {
  return (
    <section className="w-full min-h-screen bg-linear-to-br from-[#f9e0d1] via-[#edcabd] to-[#e0c2b7] px-6 md:px-16 py-24 flex flex-col md:flex-row items-center gap-14">
      {/* TEXT */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-lobster text-[#4f056c] mb-2">
          All About
        </h1>
        <h1 className="text-4xl md:text-7xl font-lobster text-[#d260ee]">
          Purple Creations
        </h1>
      </div>

      {/* IMAGES */}
      <div className="md:w-1/2 flex justify-center">
        {/* MOBILE */}
        <div className="flex flex-col gap-6 md:hidden">
          <img
            src={fotoabout}
            className="w-72 rounded-2xl shadow-xl border-4 border-white"
          />
          <img
            src={fotoabout2}
            className="w-72 rounded-2xl shadow-xl border-4 border-white"
          />
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block relative w-[420px] h-[500px]">
          <img
            src={fotoabout}
            className="absolute top-0 left-0 w-[320px] h-[420px] object-cover rounded-2xl shadow-xl border-4 border-white"
          />
          <img
            src={fotoabout2}
            className="absolute bottom-0 right-0 w-[280px] h-[360px] object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
