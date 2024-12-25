"use client";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-[#17375F] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-40`}
    >
      {/* Header */}
      <div className="flex items-center py-4 px-3 gap-3">
        <button className="text-white" onClick={onClose}>
          <img
            src="/bars.svg"
            className="w-[30px] h-[30px] object-contain overflow-hidden"
          />
          {/* <Menu size={24} /> */}
        </button>
        <img src="/logo.png" alt="MaxReviewer Logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <nav className="py-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 bg-[#6DC1E6] text-white"
        >
          <img
            src="/dashboard.svg"
            className="w-[20px] h-[20px] object-contain overflow-hidden"
          />
          {/* <LayoutGrid size={20} /> */}
          <span>Mi dashboard</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#2C4A72] transition-colors"
        >
          <img
            src="/settings.svg"
            className="w-[20px] h-[20px] object-contain overflow-hidden"
          />
          {/* <Settings size={20} /> */}
          <span>Configuración</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#2C4A72] transition-colors"
        >
          <img
            src="/lock.svg"
            className="w-[20px] h-[20px] object-contain overflow-hidden"
          />
          {/* <Lock size={20} /> */}
          <span>Contraseña</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#2C4A72] transition-colors"
        >
          <img
            src="/tag.svg"
            className="w-[20px] h-[20px] object-contain overflow-hidden"
          />
          {/* <CreditCard size={20} /> */}
          <span>Planes</span>
        </a>
      </nav>

      {/* Logout Button */}
      <button className="absolute bottom-8 left-0 right-0 mx-4 flex items-center justify-center gap-3 px-4 py-3 bg-[#6DC1E6] text-white rounded-lg">
        {/* <LogOut size={20} /> */}
        <span>Cerrar sesión</span>
      </button>
    </div>
  );
};

export default Sidebar;
