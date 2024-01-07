import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./Services/ProtectedRoute";
import Main from "./components/Main";

const App = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {!isLoggedIn && <Route path="login" element={<Login />} />}
        {!isLoggedIn && <Route path="register" element={<Register />} />}
        <Route path="*" element={<NotFound />} />

        {/* for provide protected route to required component */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
