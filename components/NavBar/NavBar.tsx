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
    { text: "Layanan", link: "/services" },
    { text: "Investasi", link: "/investment" },
    { text: "Kerjasama Kemitraan", link: "/partnership" },
    { text: "Artikel", link: "/articles" },
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
        {navItems.map((item, index) => (
          <NavItem key={`navItem-${index}`}>
            <ButtonTextUnderline>{item.text}</ButtonTextUnderline>
          </NavItem>
        ))}
      </NavItemsContainer>
      <SocialMedia>
        {socialMediaItems.map((item, index) => (
          <SocialMediaItem key={`socmed-${index}`}>
            <SocialMediaLink href={item.link}>{item.element}</SocialMediaLink>
          </SocialMediaItem>
        ))}
      </SocialMedia>
    </NavBarContainer>
  );
};

export default NavBar;
