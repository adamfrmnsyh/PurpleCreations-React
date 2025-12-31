export default function IconCard({ img, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <img src={img} className="h-16 mb-4 opacity-90" alt={title} />
      <h3 className="text-xl font-semibold text-[#a45aa5] mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
