export default function AboutClient() {
  return (
    <div className="bg-[#fdeef7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* CARD PUTIH */}
        <div className="bg-white rounded-lg shadow-lg p-8">

          {/* BAGIAN ATAS */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/img/logopurple.png"
                alt="Purple Creations Logo"
                className="w-60 md:w-72 h-auto"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Purple Creations established in 2010 to provide the best luxury
                corporate flower delivery service in Jakarta. From flower boards,
                paper flower, hand-bouquets, table arrangements, standing flowers
                and parcel. Our dedicated representatives can cater to all of
                your businesses' needs.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Our high-quality flowers include fresh flower and artificial
                flower. Fresh flowers are available everyday including white
                roses, red roses, pink roses, peach roses, lily, gerbera, daisy,
                sunflower, tulip, and many more. For premium collection, we have
                Phalaenopsis (Anggrek Bulan) in pots or combined with other
                flowers as personalised arrangements.
              </p>
            </div>
          </div>

          <hr className="my-10 border-pink-200" />

          {/* TITLE CLIENT */}
          <div className="flex flex-col items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl text-[#4f056c] font-semibold">
              GET TO KNOW OUR CLIENT!
            </h2>
            <h3 className="text-xl md:text-3xl text-[#4f056c] font-semibold mt-4">
              Pleasure to work with
            </h3>
          </div>

          {/* GRID CLIENT */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-20">

            {[
              "pasarjaya.jpg",
              "surge.jpg",
              "NAM.jpg",
              "sriwijaya.jpg",
              "incnis.jpg",
              "otego.jpg",
              "pp.jpg",
              "rsbunda.jpg",
              "yayasanunj.jpg",
              "youtap.jpg",
              "ihzaihza.jpg",
              "ikatanpejabat.jpg",
              "telkom.jpg",
              "morulaivf.jpg",
              "macroad.jpg",
              "pacificlife.jpg",
              "telkomindo.jpg",
              "bmhs.jpg",
              "bhinnekalife.jpg",
              "sumiindokabel.jpg",
              "goplay.jpg",
              "rmid.jpg",
              "pupukiskandar.jpg",
              "byu.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
              >
                <img
                  src={`/img/client/${img}`}
                  alt="Client Logo"
                  className="max-w-[120px] sm:max-w-[150px] md:max-w-[200px] object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
