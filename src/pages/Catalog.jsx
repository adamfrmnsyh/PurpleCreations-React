import { products } from "../data/product";
import CatalogSection from "../components/Catalog/CatalogSection";
import HeroCatalog from "../components/Catalog/HeroCatalog";
import CatalogNavbar from "../components/Catalog/CatalogNavbar";

export default function Catalog() {
  return (
    <>
      <HeroCatalog />

      {/* Navbar kategori */}
      <CatalogNavbar />

      <div className="bg-[#fdeef7] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="bunga-meja"
                title="Bunga Meja"
                products={products.filter((p) => p.jenis === "Bunga Meja")}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <div className=" border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="bunga-meja-artificial"
                title="Bunga Meja (Artificial)"
                products={products.filter(
                  (p) => p.jenis === "Bunga Meja Artificial"
                )}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <div className=" border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="bunga-papan"
                title="Bunga Papan"
                products={products.filter((p) => p.jenis === "Bunga Papan")}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-8 py-10 max-w-6xl mx-2 md:mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
                {/* KIRI — UKURAN & HARGA */}
                <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
                  <li>Ukuran 2 x 1.25m bunga 2 titik: Rp500.000</li>
                  <li>Ukuran 2 x 1.25m bunga 4 titik: Rp750.000</li>
                  <li>Ukuran 2 x 1.50m bunga 2 titik: Rp700.000</li>
                  <li>Ukuran 2 x 1.50m bunga 2 titik full: Rp800.000</li>
                  <li>Ukuran 2 x 1.75m bunga 4 titik: Rp1.000.000</li>
                  <li>Ukuran 2 x 1.75m bunga setengah papan: Rp1.500.000</li>
                  <li>Ukuran 1 x 4.00m bunga 4 titik: Rp2.000.000</li>
                </ul>

                {/* KANAN — KETENTUAN */}
                <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
                  <li>
                    Model dan warna akan disesuaikan dengan persediaan yang ada
                  </li>
                  <li>
                    Warna bunga bisa disesuaikan dengan keinginan (selama
                    persediaan ada)
                  </li>
                  <li>
                    Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                    yang ada
                  </li>
                  <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                  <li>
                    Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model
                    dan jenis bunga
                  </li>
                  <li>Pembayaran dilakukan melalui transfer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="hampers-baby"
                title="Hampers Baby Born"
                products={products.filter(
                  (p) => p.jenis === "Hampers Baby Born"
                )}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>Jenis isi dan warna dapat disesuaikan sesuai request</li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-2 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="handbouquet"
                title="Handbouquet"
                products={products.filter((p) => p.jenis === "Handbouquet")}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="handbouquet-artificial"
                title="Handbouquet Artificial"
                products={products.filter(
                  (p) => p.jenis === "Handbouquet Artificial"
                )}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <CatalogSection
            id="money-bouquet"
            title="Money Bouquet"
            products={products.filter((p) => p.jenis === "Money Bouquet")}
          />

          <CatalogSection
            id="money-bouquet-artificial"
            title="Money Bouquet Artificial"
            products={products.filter(
              (p) => p.jenis === "Money Bouquet Artificial"
            )}
          />

          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="paper-flower"
                title="Paper Flower"
                products={products.filter((p) => p.jenis === "Paper Flower")}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="parcel-buah"
                title="Parcel Buah"
                products={products.filter((p) => p.jenis === "Parcel Buah")}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
          <CatalogSection
            id="pecah-belah"
            title="Pecah Belah Parcel"
            products={products.filter((p) => p.jenis === "Pecah Belah Parcel")}
          />
          </div>

          <div className="border-t-2 border-b-2 border-[#f3dafd] py-5 space-y-8">
            <div>
              <CatalogSection
                id="standing-flower"
                title="Standing Flower"
                products={products.filter((p) => p.jenis === "Standing Flower")}
              />
            </div>
            <div className="bg-[#5b006e] rounded-[40px] px-10 py-8 max-w-5xl mx-2 md:mx-auto">
              <ul className="list-disc list-inside space-y-3 text-white text-base md:text-lg">
                <li>
                  Model dan warna akan disesuaikan dengan persediaan yang ada
                </li>
                <li>
                  Warna bunga bisa disesuaikan dengan keinginan (selama
                  persediaan ada)
                </li>
                <li>
                  Harga hanya sebagai patokan bisa menyesuaikan dengan budget
                  yang ada
                </li>
                <li>Jika ada contoh lain dapat di diskusikan dengan kami</li>
                <li>
                  Sebaiknya pemesanan dilakukan H-1 jika ingin memilih model dan
                  jenis bunga
                </li>
                <li>Pembayaran dilakukan melalui transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
