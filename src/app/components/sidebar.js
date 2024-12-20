"use client";
import { useState } from "react";
import { LayoutGrid, Settings, Lock, CreditCard, LogOut } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-[#17375F] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-[#2C4A72]">
        <img src="/logo.png" alt="MaxReviewer Logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <nav className="py-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 bg-[#6DC1E6] text-white"
        >
          <LayoutGrid size={20} />
          <span>Mi dashboard</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#2C4A72] transition-colors"
        >
          <Settings size={20} />
          <span>Configuración</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#2C4A72] transition-colors"
        >
          <Lock size={20} />
          <span>Contraseña</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#2C4A72] transition-colors"
        >
          <CreditCard size={20} />
          <span>Planes</span>
        </a>
      </nav>

      {/* Logout Button */}
      <button className="absolute bottom-8 left-0 right-0 mx-4 flex items-center gap-3 px-4 py-3 bg-[#6DC1E6] text-white rounded-lg">
        <LogOut size={20} />
        <span>Cerrar sesión</span>
      </button>
    </div>
  );
};

export default Sidebar;
