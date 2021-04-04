import React from "react";
import { useKeenSlider } from "keen-slider/react";
import styles from "./SectionSlider";

const SectionSlider: React.FC = () => {
  const [ref] = useKeenSlider<HTMLDivElement>();
  return <section></section>;
};

export default SectionSlider;
