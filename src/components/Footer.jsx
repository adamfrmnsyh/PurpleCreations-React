export default function Footer() {
  return (
    <footer className="bg-[#fff1f7] border-t-2 border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-lobster text-[#d260ee] mb-3">
            Purple Creations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Creating meaningful moments with floral artistry crafted from soft tones
            and hand-picked blooms for every occasion.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-start-3">
          <h3 className="text-lg font-semibold text-[#d260ee] mb-3">
            Explore
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/" className="hover:text-[#d87cc9] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/katalog" className="hover:text-[#d87cc9] transition">
                Catalog
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="hover:text-[#d87cc9] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#d87cc9] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-start-4">
          <h3 className="text-lg font-semibold text-[#d260ee] mb-3">
            Contact Us
          </h3>
          <p className="text-gray-700">📍 Jakarta, Indonesia</p>
          <p className="text-gray-700">📞 +62 812-3456-7890</p>
          <p className="text-gray-700">✉️ support@purplecreations.com</p>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-pink-200 text-center py-4">
        <p className="text-gray-600 text-sm">
          © 2025 Purple Creations — Made with Love & Flowers 🌸
        </p>
      </div>

    </footer>
  );
}
