import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";

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
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default HomePage;
