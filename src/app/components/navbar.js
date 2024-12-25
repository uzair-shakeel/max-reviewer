"use client";
import { useState } from "react";
import ProfileDropdown from "../components/profile-dropdown";
import Sidebar from "../components/sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <header className="flex z-50 justify-between items-center px-4 py-1">
        <div className="flex items-center gap-3 ">
          <button
            className="text-white "
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <img
              src="/bars.svg"
              className="w-[30px] h-[30px] object-contain overflow-hidden"
            />
          </button>
          <img src="/logo.png" alt="MaxReviewer Logo" className="h-8" />
        </div>
        <ProfileDropdown />
      </header>
      <div className="z-0">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default Navbar;
