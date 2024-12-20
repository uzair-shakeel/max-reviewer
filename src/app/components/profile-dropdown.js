"use client";
import { useState } from "react";
import { User, Settings, LogOut } from "lucide-react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
        <User size={24} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* User Info */}
          <div className="bg-[#F5F7F9] p-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#6DC1E6] rounded-lg p-2">
                <User size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Nombre de usuario</div>
                <div className="text-xs text-gray-500">
                  correo@emailserve.com
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <Settings size={20} className="text-[#6DC1E6]" />
              <span>Configuración</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <LogOut size={20} className="text-[#6DC1E6]" />
              <span>Cerrar sesión</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
