import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import InfoPemilu from "../Components/InfoPemilu";
import CardCarousel from "../Components/CardCarousel";
import VoteMessage from "../Components/VoteMessage";

const VotePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <InfoPemilu />
      <CardCarousel />
      <VoteMessage />
      <Footer />
    </div>
  );
};

export default VotePage;
