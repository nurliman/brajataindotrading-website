import React from "react";
import {
  ButtonTextUnderline,
  NavBarContainer,
  NavItem,
  NavItemsContainer,
  SocialMedia,
  SocialMediaItem,
  SocialMediaLink,
} from "./style";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type NavItem = {
  link: string;
  text: string;
};

type SocialMediaItem = {
  link: string;
  element: React.ReactNode;
};

const NavBar: React.FC = () => {
  const navItems: NavItem[] = [
    { text: "Beranda", link: "/" },
    { text: "Layanan Produk", link: "/services" },
    { text: "Investasi", link: "/invest" },
    { text: "Kerjasama Kemitraan", link: "/partnership" },
    { text: "Artikel", link: "/article" },
    { text: "Profil Kami", link: "/profile" },
  ];

  const socialMediaItems: SocialMediaItem[] = [
    { link: "//facebook.com", element: <Icon icon={faFacebookSquare} /> },
    { link: "//linkedin.com", element: <Icon icon={faLinkedin} /> },
    { link: "//youtube.com", element: <Icon icon={faYoutube} /> },
  ];

  return (
    <NavBarContainer role="navigation">
      <NavItemsContainer>
        {navItems.map((item) => (
          <NavItem>
            <ButtonTextUnderline>{item.text}</ButtonTextUnderline>
          </NavItem>
        ))}
      </NavItemsContainer>
      <SocialMedia>
        {socialMediaItems.map((item) => (
          <SocialMediaItem>
            <SocialMediaLink href={item.link}>{item.element}</SocialMediaLink>
          </SocialMediaItem>
        ))}
      </SocialMedia>
    </NavBarContainer>
  );
};

export default NavBar;
