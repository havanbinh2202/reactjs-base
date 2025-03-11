const Menu = () => {
    return(
        <nav className="w-full flex flex-col ">
          <button className="w-full py-2 bg-[#FF6F00] text-white mb-2 ">
            ABOUT
          </button>
          <button className="w-full py-2 bg-white text-[#6A1B9A] mb-2">
            PROJECTS
          </button>
          <button className="w-full py-2 bg-white text-[#6A1B9A]">
            EDUCATIONS
          </button>
        </nav>
    )
}

export default Menu;