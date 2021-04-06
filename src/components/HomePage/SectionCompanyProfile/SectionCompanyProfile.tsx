import React from "react";
import styles from "./SectionCompanyProfile.module.scss";

const SectionCompanyProfile: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.subTitle}>[ ABOUT US ]</div>
        <h2 className={styles.title}>Company Profile</h2>
        <div className={styles.dottedLine}/>
      </div>
    </section>
  );
};

export default SectionCompanyProfile;
