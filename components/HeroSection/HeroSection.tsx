import React, { useState, useEffect } from "react";

import {
  HeroCTAs,
  HeroSection,
  HeroSubTitle,
  HeroText,
  HeroTitle,
  Indicators,
  IndicatorsDot,
} from "./style";
import PrimaryButton from "../PrimaryButton";
import { HeroData } from "../../lib/heros";

type Props = {
  herosData: HeroData[];
};

const HeroSectionComponent: React.FC<Props> = ({ herosData }) => {
  const [activeHeroId, setActiveHeroId] = useState(herosData[0].id);
  const [hero, setHero] = useState(herosData[0]);

  useEffect(() => {
    setHero(herosData.find((item) => item.id === activeHeroId));
  }, [activeHeroId]);

  return (
    <HeroSection imageUrl={hero.imageUrl}>
      <HeroSubTitle>{hero.subTitle}</HeroSubTitle>
      <HeroTitle>{hero.title}</HeroTitle>
      <HeroText dangerouslySetInnerHTML={{ __html: hero.textHtml }} />
      <HeroCTAs>
        <PrimaryButton>CEK LAYANAN</PrimaryButton>
        <PrimaryButton variant="light">PORTOFOLIO</PrimaryButton>
      </HeroCTAs>
      <Indicators>
        {herosData.map((hero) => (
          <IndicatorsDot
            className={activeHeroId === hero.id && "active"}
            key={`dot-hero-${hero.id}`}
            onClick={() => setActiveHeroId(hero.id)}
          />
        ))}
      </Indicators>
    </HeroSection>
  );
};

export default HeroSectionComponent;
