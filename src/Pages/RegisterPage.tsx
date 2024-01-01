import React from "react";
import Register from "../Components/Register";
import NavbarLog from "../Components/NavbarLog";
import Footer from "../Components/Footer";

const RegisterPage: React.FC = () => {
  return (
    <div>
      <NavbarLog />
      <Register />
      <Footer/>
    </div>
  );
};

export default RegisterPage;
