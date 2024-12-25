import Image from "next/image";

export function ProductCard() {
  return (
    <div className="flex gap-3 border-[#71C9ED] border-[3px] rounded-lg p-3">
      <Image
        src="/scan.svg"
        alt="Scan"
        width={50}
        height={50}
        className="my-auto object-contain"
      />
      <div className="flex-1 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-semibold">Café Córdoba</h3>
          <p className="text-sm text-gray-600">Escaneos: 2,359</p>
          <p className="text-sm text-gray-600">Código: 64IV9</p>
          <p className="text-sm text-gray-600">Plataforma: Google Review</p>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { src: "/clipboard.svg", alt: "Edit" },
            { src: "/chart.svg", alt: "Statistics" },
            { src: "/bin.svg", alt: "Delete" },
          ].map((icon) => (
            <button
              key={icon.alt}
              className="text-[#6DC1E6] hover:opacity-80 transition-opacity"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="my-1 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
