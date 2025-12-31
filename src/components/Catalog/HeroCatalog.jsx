import heroCatalog from "../../assets/img/herokatalog.jpg";

export default function HeroCatalog() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroCatalog})` }}
      >
        <div className="w-full h-full flex items-center">
          <div className="text-left max-w-lg z-10 pl-12">
            <h1 className="text-7xl font-lobster text-[#4f056c] mb-8">
              Catalogs
            </h1>
            <p className="text-black mb-6">
              Browse our premium floral design, featuring high-quality blooms
              and refined color compositions. A perfect choice for gifts that
              leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
