const OrderButton = ({ namaProduk, jenis,harga }) => {
  const handleOrder = () => {
    const message = `
Halo Purple Creations 🌸

Saya ingin memesan produk berikut:
Nama Produk : ${namaProduk}
Jenis Produk : ${jenis}
Harga       : Rp ${harga}

Mohon info ketersediaan dan detail pemesanannya ya 🙏
    `;

    const whatsappUrl = `https://wa.me/6285141517416?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleOrder}
      className="mt-auto bg-[#E26EE5] border border-[#E26EE5] text-white py-2 rounded-md hover:bg-white hover:text-[#E26EE5] transition"
    >
      Order Now
    </button>
  );
};

export default OrderButton;
