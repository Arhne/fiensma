import Link from "next/link";

import parse from "html-react-parser";
import CustomAccordion from "../../CustomAccordion";
import { useGetAllFaqQuery } from "@/redux/services/faqApi";
import { ExchangeRateLoader } from "@/app/rates/components/loader";

import styles from "./Faq.module.scss";

const Faq = () => {
  const {
    data: faq,
    isLoading,
    isError,
  } = useGetAllFaqQuery({ perPage: 15, currentPage: 1 });

  const renderFaq = () => {
    if (isLoading) {
      return <ExchangeRateLoader />;
    } else if (!isLoading) {
      if (isError) {
        return (
          <p className="text-center mt-5">There was a problem fetching faqs</p>
        );
      } else {
        if (faq && faq.data.length > 0) {
          return (
            <>
              {faq?.data.map((item, index) => (
                <CustomAccordion
                  key={index}
                  title={item?.question}
                  isDefaultOpen={false}
                  customHeaderStyle={{
                    padding: "2rem 0",
                    height: "5rem",
                  }}
                >
                  {parse(item?.answer)}
                </CustomAccordion>
              ))}
            </>
          );
        } else {
          return <p className="text-center mt-5">No data available</p>;
        }
      }
    }
  };

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
        {renderFaq()}
      </div>
    </div>
  );
};

export default Faq;
