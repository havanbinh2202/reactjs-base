import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
      <div className=" bg-[#FF6F00] h-screen flex justify-center items-center  ">
        <Outlet />
      </div>
    );
  };

  export default MainContent;