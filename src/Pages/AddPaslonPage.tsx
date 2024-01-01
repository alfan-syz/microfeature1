import React from "react";
import AddPaslon from "../Components/AddPaslon";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AddPaslonPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AddPaslon />
      <Footer />
    </div>
  );
};

export default AddPaslonPage;
