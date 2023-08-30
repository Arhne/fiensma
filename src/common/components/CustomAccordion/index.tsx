"use client";

import { useState } from "react";

import styles from "./CustomAccordion.module.scss";

interface ICustomAccordion {
  title: string;
  children: React.ReactNode;
  customHeaderStyle?: object;
}

const CustomAccordion = ({
  title,
  children,
  customHeaderStyle,
}: ICustomAccordion) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.CustomAccordionContainer}>
      <div className={styles.Header} style={{ ...customHeaderStyle }}>
        <p>{title}</p>
        <img
          src={
            isOpen
              ? `https://res.cloudinary.com/dbg2z1svm/image/upload/v1693388308/ibx-website-v2/icons/faq/fag_close_ah7yab.svg`
              : ` https://res.cloudinary.com/dbg2z1svm/image/upload/v1693388308/ibx-website-v2/icons/faq/faq_open_btmrg9.svg`
          }
          onClick={() => setIsOpen((prev) => !prev)}
          className={styles.Toggler}
          width={24}
          height={24}
        />
      </div>
      {isOpen && <div className={styles.Content}>{children}</div>}
    </div>
  );
};

export default CustomAccordion;
