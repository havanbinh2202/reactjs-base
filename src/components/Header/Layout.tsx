
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className=" md:w-64">
      <Sidebar />
      </div>
      <div className="flex-1 h-screen">
        <MainContent />
      </div>
    </div>
  );
};
export default Layout;
