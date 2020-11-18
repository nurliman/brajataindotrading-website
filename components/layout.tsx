import React from "react";

import Head from "next/head";
import Header from "./Header";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Brajata Indotrading";
export const siteTitle =
  "Brajata Indotrading | Website jual beli komoditas porang";

type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
  headerForLightBackground?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  headerForLightBackground,
}) => {
  headerForLightBackground = Boolean(headerForLightBackground);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Brajata Indotrading adalah website untuk jual beli komoditas porang"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header lightBackground={headerForLightBackground} />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
