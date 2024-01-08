import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Main from "./components/Pages/Main";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import NotFound from "./components/Pages/NotFound";
import Footer from "./components/Pages/Footer";
import Register from "./components/UserAuth/Register";
import Login from "./components/UserAuth/Login";
import ProtectedRoute from "./components/UserAuth/Services/ProtectedRoute";

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

        {isLoggedIn && (
          <Route path="/login" element={<Navigate to="/home" replace />} />
        )}
        {isLoggedIn && (
          <Route path="/register" element={<Navigate to="/home" replace />} />
        )}

        {/* for provide protected route to required component */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} exact />
          <Route path="about" element={<About />} exact/>
          <Route path="blog" element={<Blog />} exact />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
