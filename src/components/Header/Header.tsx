import React, { forwardRef } from "react";
import cn from "classnames";
import Menu from "../Menu";
import styles from "./Header.module.scss";

const Header = forwardRef<HTMLElement>((props, ref) => {
  return (
    <header ref={ref} className={styles.headerContainer}>
      <section className={styles.topBarContainer}>
        <div className={cn(styles.topBarInnerContainer, "inner-gap")}>
          <div className={styles.topBarLeftSection}>
            <div>Visit Us Daily:</div>
            <a
              href="https://goo.gl/maps/JH5ajh5GgjJyHvSg8"
              target="_blank"
              className={styles.link}
            >
              22 Sekehaji St, Bandung Indonesia
            </a>
          </div>
          <div className={styles.topBarMiddleSection}>[logo]</div>
          <div className={styles.topBarRightSection}>
            <div>Phone Us:</div>
            <a
              className={styles.link}
              href="https://wa.me/6287711799209"
              target="_blank"
            >
              +62 87 7117 99209
            </a>
          </div>
        </div>
      </section>
      <section>
        <Menu />
      </section>
    </header>
  );
});

export default Header;
