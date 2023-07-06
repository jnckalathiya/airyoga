import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Benifits from "../Components/Benifits";
import Welcome from "../Components/Welcome";
import Choose from "../Components/Choose";
import Courses from "../Components/Courses";
import Happy from "../Components/Happy";
import Become from "../Components/Become";
import { Trainer } from "../Components/Trainer";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";

const GenrealApp = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Benifits />
      <Welcome />
      <Choose />
      <Courses />
      <Happy />
      <Become />
      <Trainer />
      <Blog />
      <Footer/>
    </>
  );
};

export default GenrealApp;
