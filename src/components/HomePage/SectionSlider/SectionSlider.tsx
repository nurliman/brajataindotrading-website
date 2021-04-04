import React from "react";
import Image from "next/image";
import cn from "classnames";
import { useKeenSlider } from "keen-slider/react";
import styles from "./SectionSlider.module.scss";

import RightArrowIcon from "../../../assets/svgs/right-arrow.svg";

const SLIDES = [
  {name:'slide 1', img: "/assets/home-slider-images/slide-1.png" },
  {name:'slide 2', img: "/assets/home-slider-images/slide-2.jpg" },
  {name:'slide 3', img: "/assets/home-slider-images/slide-3.jpg" },
];

type Props = {
  style?: React.CSSProperties;
};

const SectionSlider: React.FC<Props> = ({ style }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({ loop: true });
  return (
    <section className={styles.container} style={style}>
      <div ref={sliderRef} className={cn("keen-slider", styles.slider)}>
        {SLIDES.map((slide) => (
          <div className={cn("keen-slider__slide", styles.slide)}>
            <Image src={slide.img} alt={slide.name} layout='fill'/>
          </div>
        ))}
      </div>
      {slider && (
        <>
          <button
            className={cn(styles.sliderNavBtn, styles.sliderPrevBtn)}
            onClick={slider.prev}
          >
            <RightArrowIcon />
          </button>
          <button
            className={cn(styles.sliderNavBtn, styles.sliderNextBtn)}
            onClick={slider.next}
          >
            <RightArrowIcon />
          </button>
        </>
      )}
    </section>
  );
};

export default SectionSlider;
