import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Nút mở sidebar */}
      <button
        className="absolute top-2 left-2 bg-[#FFFFFF] text-2xl md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Avatar góc phải khi sidebar đóng */}
      {!isOpen && (
        <img
          src="./img/tuconcho.jpg"
          width={50}
          alt="Profile"
          className="absolute top-2 right-2 rounded-full md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#6A1B9A] p-20 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:64 w-full`}
      >
        {/* Nút đóng sidebar */}
        <button
          className="absolute top-2 right-2 text-2xl md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Avatar & Tên trong sidebar */}
        
          <div className="flex flex-col items-center">
            <img
              src="./img/tuconcho.jpg"
              width={100}
              alt="Profile"
              className="rounded-full mb-2"
            />
            <p className="mb-4">Phương Thảo</p>
          </div>
    

        {/* Menu */}
        <nav className="w-full flex flex-col items-end">
          <button className="w-full py-2 bg-[#FF6F00] text-white mb-1">
            ABOUT
          </button>
          <button className="w-full py-2 bg-[#6A1B9A] text-white mb-1">
            PROJECTS
          </button>
          <button className="w-full py-2 bg-[#6A1B9A] text-white">
            EDUCATIONS
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
