import React from "react";
import Image from "next/image";
import cn from "classnames";
import { minDigits } from "../../../helpers/minDigits";
import styles from "./SectionServices.module.scss";

const SERVICES = [
  { name: "Export/Import", img: "/assets/service-images/export-import.jpg" },
  { name: "Partnership", img: "/assets/service-images/partnership.jpg" },
  { name: "Investment", img: "/assets/service-images/investment.jpg" },
];

const SectionServices: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={cn(styles.servicesList, "inner-gap")}>
        {SERVICES.map((service, index) => (
          <div className={styles.serviceItem}>
            <div className={styles.serviceItemInner}>
              <div className={styles.serviceImage}>
                <Image src={service.img} width={750} height={921} />
              </div>
              <div className={styles.serviceName}>
                {minDigits(2, index + 1)}.&nbsp;
                <h6>{service.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionServices;
