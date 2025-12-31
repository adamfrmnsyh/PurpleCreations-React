const categories = [
  { id: "bunga-meja", label: "Bunga Meja" },
  { id: "bunga-meja-artificial", label: "Bunga Meja Artificial" },
  { id: "bunga-papan", label: "Bunga Papan" },
  { id: "hampers-baby", label: "Hampers Baby Born" },
  { id: "handbouquet", label: "Handbouquet" },
  { id: "handbouquet-artificial", label: "Handbouquet Artificial" },
  { id: "money-bouquet", label: "Money Bouquet" },
  { id: "money-bouquet-artificial", label: "Money Bouquet Artificial" },
  { id: "paper-flower", label: "Paper Flower" },
  { id: "parcel-buah", label: "Parcel Buah" },
  { id: "pecah-belah", label: "Pecah Belah Parcel" },
  { id: "standing-flower", label: "Standing Flower" },
];

export default function CatalogNavbar() {
  return (
    <div className="top-0 z-30 bg-[#fdeef7] py-3">
      <div className="flex gap-3 overflow-x-auto px-4 scrollbar-hide p-3">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="whitespace-nowrap px-5 py-2 rounded-full
                       bg-white text-[#4f056c] shadow text-sm font-medium
                       hover:bg-[#4f056c] hover:text-white
                       transition"
          >
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
