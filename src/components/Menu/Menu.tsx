import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Link from "next/link";
import cn from "classnames";
import { Menus } from "../../types/Menu";
import styles from "./Menu.module.scss";

import MenuIcon from "../../assets/svgs/menu.svg";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const MENUS: Menus = [
  { text: "Home", link: "/" },
  { text: "About Us", link: "/about" },
  { text: "Services", link: "/services" },
];

const Menu: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.menuContainer, className)} {...props}>
      <div className={cn(styles.menuInnerContainer, "inner-gap")}>
        <div className={styles.menuLeftSection}>
          <button className={styles.hamburgerBtn}>
            <MenuIcon />
          </button>
        </div>
        <div className={styles.menuMiddleSection}>
          <ul className={styles.menuList}>
            {MENUS.map((menu) => (
              <li>
                <Link href={menu.link}>
                  <a>{menu.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.menuRightSection}>x</div>
      </div>
    </div>
  );
};

export default Menu;
