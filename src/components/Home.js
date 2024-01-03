import React from "react";
import "../components/site.css";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {

  const data = useLocation();
  const navigate = useNavigate();
  console.log(data);

  return (
    <>
      <h6>Home {data.state}</h6>
      <button onClick={() => {navigate(-1)}}>Go Back</button>

      
    </>
  );
};

export default Home;
