"use client";
import { useState } from "react";
import { Menu, Plus, Edit, BarChart2, Trash2 } from "lucide-react";
import Sidebar from "../components/sidebar";
import ProfileDropdown from "../components/profile-dropdown";

const Interface = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#17375F]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            className="text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <img src="/logo.png" alt="MaxReviewer Logo" className="h-8" />
        </div>
        <ProfileDropdown />
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src="/qr-icon.png" alt="QR Icon" className="w-6 h-6" />
              <h2 className="text-lg font-semibold">Tus productos (1)</h2>
            </div>
            <button className="text-[#6DC1E6]">
              <Plus size={24} />
            </button>
          </div>

          {/* Product Card */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
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
                  <Edit size={20} />
                </button>
                <button className="text-[#6DC1E6]">
                  <BarChart2 size={20} />
                </button>
                <button className="text-[#6DC1E6]">
                  <Trash2 size={20} />
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
  );
};

export default Interface;
