import React from "react";
import Blogs from "../BlogPost/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import TrustedClients from "../TrustedClients/TrustedClients";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <TrustedClients></TrustedClients>
      <Blogs></Blogs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
