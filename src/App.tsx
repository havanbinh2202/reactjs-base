import Content from "./components/UI/Content";
import Sidebar from "./components/UI/Sidebar";

export default function App() {
  return (
      
      <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Content />
      </div>
    
  );
}
