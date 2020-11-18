import React from "react";
import styled, { css } from "styled-components";

import PrimaryButton from "../PrimaryButton";
import { HeroData } from "../../lib/heros";

const HeroSection = styled.section<{ imageUrl?: string }>`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  padding: 138px 0;
  padding-top: 188px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  background: #333;
  color: #fff;

  ${(props) =>
    props.imageUrl &&
    css`
      background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
        url(${props.imageUrl});
    `}

  background-size:cover;
`;

const HeroTitle = styled.h1`
  font-size: 6.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  margin-bottom: 15px;
  white-space: pre-wrap;
`;

const HeroSubTitle = styled.h2`
  font-size: 1.8rem;
  padding: 0 100px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`;

const HeroText = styled.span`
  padding: 0 250px;
  & p {
    font-size: 1.38rem;
    margin-bottom: 5px;
  }
`;

const HeroCTAs = styled.div`
  display: flex;
  margin-top: 38px;

  & > *:first-child {
    margin-right: 25px;
  }
`;

type Props = {
  herosData: HeroData[];
};

const HeroSectionComponent: React.FC<Props> = ({ herosData }) => {
  const hero = herosData[1];

  return (
    <HeroSection imageUrl={hero.imageUrl}>
      <HeroSubTitle>{hero.subTitle}</HeroSubTitle>
      <HeroTitle>{hero.title}</HeroTitle>
      <HeroText dangerouslySetInnerHTML={{ __html: hero.textHtml }} />
      <HeroCTAs>
        <PrimaryButton>CEK LAYANAN</PrimaryButton>
        <PrimaryButton variant="light">PORTOFOLIO</PrimaryButton>
      </HeroCTAs>
    </HeroSection>
  );
};

export default HeroSectionComponent;
