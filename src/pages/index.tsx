import React, { useRef, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SectionServices from "../components/HomePage/SectionServices";
import SectionSlider from "../components/HomePage/SectionSlider";
import SectionCompanyProfile from "../components/HomePage/SectionCompanyProfile";
import "keen-slider/keen-slider.min.css";

const HomePage: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(220);

  useEffect(() => {
    headerRef.current && setHeaderHeight(headerRef.current.scrollHeight);
  }, [headerRef]);

  return (
    <Layout
      title="Home | Brajata Indotrading"
      styles={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
      }}
    >
      <Header ref={headerRef} />
      <SectionSlider
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          maxHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      />
      <SectionServices />
      <SectionCompanyProfile />
    </Layout>
  );
};

export default HomePage;
