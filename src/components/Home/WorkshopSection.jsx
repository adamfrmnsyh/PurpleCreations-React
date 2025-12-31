import IconCard from "./IconCard";
import IconSwiper from "./IconSwiper";
import WorkshopVideo from "./WorkshopVideo";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";

export default function WorkshopSection() {
  return (
    <div className="bg-[#fdeef7]">
      {/* ICON SECTION */}
      <div className="px-10 mb-16 border-t pt-16 border-pink-200 ">
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-4 px-2">
          <IconCard
            img={icon1}
            title="Fresh Flowers"
            desc="Blooming with love — every stem is hand-picked."
          />
          <IconCard
            img={icon2}
            title="Professional Florists"
            desc="Crafted with heart — timeless floral pieces."
          />
          <IconCard
            img={icon3}
            title="Custom Orders"
            desc="Tell us your idea — we create the flowers just for you."
          />
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <IconSwiper />
        </div>
      </div>

      {/* WORKSHOP */}
      <div className="border-t border-pink-200">
        <div className="flex justify-center mt-10 text-center">
          <h2 className="text-5xl text-[#4f056c] font-lobster leading-tight">
            Join Our Lovely <br /> Floral Workshops
          </h2>
        </div>

        <div className="p-10 mt-3 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <WorkshopVideo />
          </div>

          <div className="md:w-1/2">
            <p className="text-[#4f056c] mb-6 text-xl font-semibold">
              Explore the beauty of floral artistry with us!
            </p>

            <p className="text-base mb-4">
              Discover the beauty of floral artistry in our curated workshops —
              perfect for beginners, enthusiasts, or anyone who simply loves
              flowers. Create stunning arrangements, learn new techniques, and
              enjoy a relaxing hands-on experience. Looking for a sweet date
              idea? Bring your partner and craft beautiful bouquets together — a
              memorable moment wrapped in petals and creativity.
            </p>

            <p className="font-semibold text-lg mt-5 mb-2 text-[#4f056c]">
                Follow us on Instagram!
            </p>

            <a
              href="https://www.instagram.com/creations_purple"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#E26EE5] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#E26EE5]"
            >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.8" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9 3h.01M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                        </svg>
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
