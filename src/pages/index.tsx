import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SectionServices from "../components/HomePage/SectionServices";
import SectionSlider from "../components/HomePage/SectionSlider";
import "keen-slider/keen-slider.min.css";

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Home | Brajata Indotrading"
      styles={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
      }}
    >
      <Header />
      <SectionSlider />
      <SectionServices />
    </Layout>
  );
};

export default HomePage;
