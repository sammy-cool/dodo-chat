import React from "react";
import Chater from "../components/Chater";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chater />
      </div>
    </div>
  );
};

export default Home;
