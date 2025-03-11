import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Profile from "./Profile";
import Menu from "../Button/Menu";
import Navbar from "./Navbar";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <Navbar/>
      {/* Nút mở sidebar */}
      <button
        className="absolute top-4 left-2 bg-[#FFFFFF] text-2xl md:hidden"
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
          className="absolute top-0 right-0 items-center rounded-full md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#6A1B9A] text-white  transition-transform duration-300 ${
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

        <Profile/>
        
        <Menu/>
      </div>
    </div>
  );
};

export default Sidebar;
