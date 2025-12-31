import OrderButton from "../OrderButton";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col h-full">
      <img
        src={product.gambar}
        alt={product.nama}
        className="w-full aspect-square object-cover rounded-md hover:scale-110 transition"
      />

      <h3 className="mt-3 font-semibold text-base text-gray-900 truncate">
        {product.nama}
      </h3>

      <p className="text-sm text-gray-500">{product.jenis}</p>

      <p className="text-sm text-gray-600 line-clamp-2">{product.deskripsi}</p>

      <div className="mt-2 mb-3 text-gray-900 font-semibold">
        Rp {product.harga.toLocaleString("id-ID")}
      </div>

      <OrderButton namaProduk={product.nama} harga={product.harga} />
    </div>
  );
}
