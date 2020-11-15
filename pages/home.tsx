import React from "react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};

export default Home;
