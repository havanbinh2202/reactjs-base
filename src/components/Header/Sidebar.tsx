// filepath: c:\Users\havan\reactjs-base\src\components\Header\Sidebar.tsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkActive = ({ isActive }: { isActive: boolean }): string => {
    return (
      "inline-block w-full px-5 py-2" +
      (isActive ? " bg-[#FF6F00] text-[#FFF]" : " bg-[#FFF] text-[#6A1B9A]")
    );
  };

  return (
    <div className="relative h-full">
      {/* Nút mở sidebar */}
      <nav className="fixed top-0 left-0 w-full bg-[#6A1B9A] text-white flex items-center justify-between px-7 py-7 md:hidden"></nav>
      <button
        className="absolute top-4 left-2 bg-[#FFFFFF] text-2xl md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Avatar góc phải khi sidebar đóng */}
      {!isOpen && (
        
        <img
          src="/img/tuconcho.jpg"
          width={50}
          alt="Profile"
          className="fixed top-1 right-2 rounded-full z-50 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-screen w-64 bg-[#6A1B9A] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64`}
      >
        {/* Nút đóng sidebar */}
        <button
          className="absolute top-2 right-2 text-2xl md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <Profile />
        <ul className="uppercase flex flex-col gap-3">
          <li>
            <NavLink to="/" className={navLinkActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkActive}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={navLinkActive}>
              Educations
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;