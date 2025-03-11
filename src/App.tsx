import Content from "./components/Header/Content";
import Sidebar from "./components/Header/Sidebar";

export default function App() {
  return (
      
      <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Content/>
      </div>
    
  );
}
