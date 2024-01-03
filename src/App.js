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
import Form from "./components/Form";

const App = () => {
  
  return (
    <>
      <Navbar />
    {/* <Form/> */}
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> 
    </>
  );
};

export default App;
