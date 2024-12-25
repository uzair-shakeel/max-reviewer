import { Plus } from "lucide-react";
import { ProductCard } from "./product-card";
import Image from "next/image";

export default function ProductList() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Image
              src="/qr-code.svg"
              alt="QR Code"
              width={20}
              height={20}
              className="object-contain"
            />
            <h2 className="text-lg font-semibold">Tus productos (1)</h2>
          </div>
          <button className="text-[#6DC1E6] hover:opacity-80 transition-opacity">
            <Image
              src="/plus.svg"
              alt="Add product"
              width={30}
              height={30}
              className="object-contain"
            />
          </button>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}
