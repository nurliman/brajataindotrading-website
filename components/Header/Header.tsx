import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import ButtonWithIcon from "../ButtonWithIcon";

const MainHeader = styled.div`
  width: 100%;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const ContactsArea = styled.div`
  display: flex;
  align-items: center;
`;

const ContactsAreaItem = styled.div`
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`;

const Header: React.FC = () => {
  return (
    <header>
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
              />
            </ContactsAreaItem>
            <ContactsAreaItem>
              <ButtonWithIcon
                icon={<Icon icon={faMapMarkerAlt} />}
                title="ALAMAT"
                description="(+62) 87 7117 99 20 9"
              />
            </ContactsAreaItem>
          </ContactsArea>
        </TopBar>
      </MainHeader>
    </header>
  );
};

export default Header;
