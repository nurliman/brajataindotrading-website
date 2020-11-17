import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import PrimaryButton from "../components/PrimaryButton";
import { GetStaticProps } from "next";

import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  padding: 138px 250px;
  padding-top: 188px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  background-color: #333;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 6.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  margin-bottom: 15px;
`;

const HeroSubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`;

const HeroText = styled.p`
  font-size: 1.38rem;
  margin-bottom: 5px;
`;

const HeroCTAs = styled.div`
  display: flex;
  margin-top: 38px;

  & > *:first-child {
    margin-right: 25px;
  }
`;

type HomeProps = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroSection>
        <HeroSubTitle>PT. BRAJATA INDOTRADING</HeroSubTitle>
        <HeroTitle>
          MITRA BISNIS
          <br />
          PORANG ANDA
        </HeroTitle>
        <HeroText>
          <b>PT. Brajata Indotrading</b> merupakan perusahaan yang bergerak
          dalam sektor
          <b>
            <i> Cultivating, Selling, Buying, Processing</i>
          </b>
          {" dan "}
          <b>
            <i>Eksporting </i>
          </b>
          komoditas porang. Perusahaan ini berlokasi di Kota Bandung (Office dan
          Warehouse I) dan Kabupaten Pangandaran (Processing area dan Warehouse
          II).
        </HeroText>
        <HeroText>
          <b>PT. Brajata Indotrading</b> hadir sebagai suatu inisiator dan
          pembentukan
          <b>
            <i> "The New Konjac Business Ecosystem" </i>
          </b>
          di Indonesia guna mencukupi kebutuhan pasar porang (Konjac) domestik
          maupun internasional
        </HeroText>
        <HeroCTAs>
          <PrimaryButton>CEK LAYANAN</PrimaryButton>
          <PrimaryButton variant='light'>PORTOFOLIO</PrimaryButton>
        </HeroCTAs>
      </HeroSection>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
