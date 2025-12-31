export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      {/* PHOTO + SOCIAL MEDIA */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* PHOTO */}
        <div>
          <img
            src="/img/logopurple.png"
            alt="Purple Creations Logo"
            className="w-full rounded-3xl"
          />
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h2 className="text-3xl font-semibold text-[#4f056c] mb-6">
            Connect With Us
          </h2>

          <div className="space-y-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/creations_purple?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-pink-100 hover:bg-pink-200 p-4 rounded-xl transition"
            >
              <img
                src="/img/icons/instagram.svg"
                alt="Instagram"
                className="w-8 h-8"
              />
              <span className="text-lg text-[#4f056c] font-medium">
                creations_purple
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-pink-100 hover:bg-pink-200 p-4 rounded-xl transition"
            >
              <img
                src="/img/icons/whatsapp.svg"
                alt="WhatsApp"
                className="w-8 h-8"
              />
              <span className="text-lg text-[#4f056c] font-medium">
                +62 812-3456-789
              </span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@creations_purple?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-pink-100 hover:bg-pink-200 p-4 rounded-xl transition"
            >
              <img
                src="/img/icons/tiktok.svg"
                alt="TikTok"
                className="w-8 h-8"
              />
              <span className="text-lg text-[#4f056c] font-medium">
                creations_purple
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-[#4f056c] mb-14 text-center">
          Visit Us!
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* MAP KIRI */}
          <div className="w-full h-[350px] overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="Purple Creations Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4354716499756!2d106.77734247409613!3d-6.206147760791634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dafc39d96f%3A0x5a96c6b244c4f619!2sPurple%20Creation!5e0!3m2!1sen!2sus!4v1764826018270!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ALAMAT KANAN */}
          <div className="flex flex-col justify-center px-4">
            <h3 className="text-2xl font-bold text-[#4f056c] mb-4">
              Our Address
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Purple Creations <br />
              Jl. Sulaiman No.16A, RT.5/RW.3 <br />
              Sukabumi Utara, Kec. Kb. Jeruk <br />
              Kota Jakarta Barat, DKI Jakarta 11540
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
