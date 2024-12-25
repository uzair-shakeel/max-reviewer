import { Menu, Plus, Edit, BarChart2, Trash2 } from "lucide-react";
import Navbar from "../components/navbar";

const Interface = () => {
  return (
    <div className="min-h-screen bg-[#17375F]">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-white top-[80px] fixed bottom-0 right-4 left-4 rounded-t-xl">
        <main className="px-2 py-6 ">
          <div className=" p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <img
                  src="/qr-code.svg"
                  className="w-[20px] h-[20px]  object-contain overflow-hidden"
                />
                <h2 className="text-lg font-semibold">Tus productos (1)</h2>
              </div>
              <button className="text-[#6DC1E6]">
                <img
                  src="/plus.svg"
                  className="w-[30px] h-[30px]  object-contain overflow-hidden"
                />
              </button>
            </div>

            {/* Product Card */}
            <div className=" flex w-full  gap-3 border-[#71C9ED] border-[3px] rounded-lg p-3">
              <img
                src="/scan.svg"
                className="w-[50px] h-[50px] my-auto object-contain overflow-hidden"
              />
              <div className="flex-1 flex justify-between  items-start">
                <div>
                  <h3 className="font-semibold mb-1">Café Córdoba</h3>
                  <p className="text-sm text-gray-600">Escaneos: 2,359</p>
                  <p className="text-sm text-gray-600">Código: 64IV9</p>
                  <p className="text-sm text-gray-600">
                    Plataforma: Google Review
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="text-[#6DC1E6]">
                    <img
                      src="/clipboard.svg"
                      className="w-[20px] h-[20px] my-1 object-contain overflow-hidden"
                    />
                  </button>
                  <button className="text-[#6DC1E6]">
                    <img
                      src="/chart.svg"
                      className="w-[20px] h-[20px] my-1 object-contain overflow-hidden"
                    />
                  </button>
                  <button className="text-[#6DC1E6]">
                    <img
                      src="/bin.svg"
                      className="w-[20px] h-[20px] my-1 object-contain overflow-hidden"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="absolute bottom-0 w-full text-center p-4">
          <p className="text-[#6C7278] text-sm">©2025, MaxReviewer</p>
        </footer>
      </div>
    </div>
  );
};

export default Interface;
