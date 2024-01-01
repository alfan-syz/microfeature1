import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Messages from "../Components/Messages";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Messages/>
      <Footer />
    </div>
  );
};

export default Home;
