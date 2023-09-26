import Link from "next/link";
import CustomAccordion from "../../CustomAccordion";
import { useGetAllFaqQuery } from "@/redux/services/faqApi";

import styles from "./Faq.module.scss";

const Faq = () => {
  const { data: faq } = useGetAllFaqQuery({ perPage: 1000, currentPage: 1 });

  return (
    <div
      className={`row d-flex justify-content-between ${styles.FaqContainer}`}
    >
      <div className={`col-xs-12 col-sm-5 ${styles.LeftColumn}`}>
        <h3>Frequently Asked Questions</h3>
        <p className={styles.LeftText}>
          Find quick answers to common queries in our FAQs section, designed to
          address your most pressing questions and provide you with the
          information you need.
        </p>
        <p className={styles.NoAnswer}>Can&apos;t find an answer?</p>
        <div className={styles.ActionContainer}>
          <Link href={"/contactus"}>
            <button className={styles.ActionButton}>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className={`col-xs-12 col-sm-6  ${styles.RightColumn}`}>
        {faq &&
          faq?.data.map((item, index) => (
            <CustomAccordion
              key={index}
              title={item?.question}
              isDefaultOpen={false}
              customHeaderStyle={{
                padding: "2rem 0",
                height: "5rem",
              }}
            >
              {item?.answer}
            </CustomAccordion>
          ))}
      </div>
    </div>
  );
};

export default Faq;
