import React from "react";
import Chater from "../components/Chater";
import Sidebar from "../components/Sidebar";
import MetaData from "../metaData";

const Home = () => {
  return (
    <>
    <MetaData title="Homepage" />
    
    <div className="home" id="randomDashImage">
      <div className="container">
        <Sidebar />
        <Chater />
      </div>
    </div>
    </>
  );
};

export default Home;
