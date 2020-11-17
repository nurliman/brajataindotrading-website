import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import ButtonWithIcon from "../ButtonWithIcon";
import NavBar from "../NavBar";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const MainHeader = styled.div`
  width: 100%;
  color: #fff;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const NavBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ContactsArea = styled.div`
  display: flex;
  align-items: center;
`;

const ContactsAreaItem = styled.div`
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
`;

const Devider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #fff;
  margin: 3px auto;
  opacity: 0.18;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <TopBar>
          <div>
            <h3>BRAJATA INDOTRADING</h3>
          </div>
          <ContactsArea>
            <ContactsAreaItem>
              <ButtonWithIcon
                icon={<Icon icon={faPhoneAlt} />}
                title="KONTAK"
                description="(+62) 87 7117 99 20 9"
                href="tel:+6287711799209"
              />
            </ContactsAreaItem>
            <ContactsAreaItem>
              <ButtonWithIcon
                icon={<Icon icon={faMapMarkerAlt} />}
                title="GUDANG I"
                description="Bandung, West Java"
              />
            </ContactsAreaItem>
            <ContactsAreaItem>
              <ButtonWithIcon
                //icon={<Icon icon={faMapMarkerAlt} />}
                title="GUDANG II"
                description="Pangandaran, West Java"
              />
            </ContactsAreaItem>
          </ContactsArea>
        </TopBar>
        <Devider />
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
