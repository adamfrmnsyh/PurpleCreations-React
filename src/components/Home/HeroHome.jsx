import { Link } from "react-router-dom";
import heroflower from "../../assets/img/heroflower.jpg";

export default function HeroHome() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row bg-[#f2b3c0] ">
      {/* Bagian kiri */}
      <div className="w-full md:w-[65%] bg-[#f9e0d1] flex items-center justify-start px-6 py-10 md:pl-12">
        <div className="text-left max-w-lg z-10 mt-14 md:mt-0">
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-lobster  text-[#4f056c] mb-2"
          >
            Welcome to
          </h1>
          <h1
            className="text-5xl md:text-7xl font-lobster text-[#d260ee] mb-4"
          
          >
            Purple Creations
          </h1>

          {/* Description */}
          <p className="text-black mb-6 text-sm md:text-base">
            When flowers are our inspiration to create lasting memories.
            Whatever the occasion, our flowers will make it special.
          </p>

          {/* Button */}
          <Link
            to="/katalog"
            className="inline-block px-5 py-3 bg-[#f399ab] text-white rounded-full
              hover:bg-[#d260ee] transition-all text-sm md:text-base"
          >
            Explore Flowers
          </Link>
        </div>
      </div>

      {/* Bagian kanan */}
      <div className="w-full md:w-[35%] bg-[#f2b3c0] relative flex items-center justify-center py-12 md:py-0">
        <div
          className="relative md:absolute md:left-0 md:top-1/2
          md:-translate-x-1/2 md:-translate-y-1/2
          rounded-full w-[220px] h-[300px] md:w-[300px] md:h-[400px]
          shadow-lg overflow-hidden"
        >
          <img
            src={heroflower}
            alt="flowers"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
