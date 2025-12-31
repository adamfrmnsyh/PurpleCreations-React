import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";

export default function CatalogSection({ id, title, products }) {
  if (products.length === 0) return null;

  return (
    <section
      id={id}
      className=" scroll-mt-32 p-4"
    >
      {/* TITLE */}
      <h2 className="text-3xl font-lobster text-[#4f056c] mb-8 text-center">
        {title}
      </h2>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 px-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* MOBILE SWIPER */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
