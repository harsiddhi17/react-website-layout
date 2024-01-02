import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer /> 
    </>
  );
};

export default App;
