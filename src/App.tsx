import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/page/About";
import Projects from "./components/page/Projects";
import Educations from "./components/page/Educations";
import Layout from "./components/Header/Layout";

export default function App() {
  return (
    <div className="App">

        <main>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="education" element={<Educations />} />
            </Route>
          </Routes>
        </main>
    </div>
  );
}
