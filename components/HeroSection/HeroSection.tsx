import React from "react";

import {
  HeroCTAs,
  HeroSection,
  HeroSubTitle,
  HeroText,
  HeroTitle,
} from "./style";
import PrimaryButton from "../PrimaryButton";
import { HeroData } from "../../lib/heros";

type Props = {
  herosData: HeroData[];
};

const HeroSectionComponent: React.FC<Props> = ({ herosData }) => {
  const hero = herosData[0];

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
