export default function HeroContact() {
  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-[#f9e0d1] via-[#edcabd] to-[#e0c2b7]"
      style={{
        backgroundImage: "url('/img/bg-contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Konten utama */}
      <div className="w-full h-full flex items-center px-6 md:px-10">
        <div className="text-start max-w-lg z-10">
          <h1 className="text-5xl md:text-7xl font-lobster text-[#4f056c] mb-6 md:mb-8">
            Get in Touch
          </h1>
          <p className="text-black text-base md:text-lg">
            We're here for your floral needs — let’s create something beautiful
            together.
          </p>
        </div>
      </div>
    </div>
  );
}
