import Link from "next/link";
import CustomAccordion from "../../CustomAccordion";

import styles from "./Faq.module.scss";

const Faq = () => {
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
      <div className={`col-xs-12 col-sm-6 ${styles.RightColumn}`}>
        <CustomAccordion
          title="What is IBXP2P.com?"
          isDefaultOpen={false}
          customHeaderStyle={{
            padding: "2rem 0",
            height: "5rem",
          }}
        >
          IBXP2P.com is a peer-to-peer trading platform that allows users to buy
          and sell bitcoin and fiat currencies.
        </CustomAccordion>
        <CustomAccordion
          title="What services does IBXP2P.com provide?"
          isDefaultOpen={false}
          customHeaderStyle={{
            padding: "2rem 0",
            height: "5rem",
          }}
        >
          IBXP2P.com provides a platform for peer-to-peer trading of bitcoin and
          fiat currencies, as well as tools for managing transactions and
          accounts.
        </CustomAccordion>
        <CustomAccordion
          title="Is IBXP2P.com a legitimate website?"
          isDefaultOpen={false}
          customHeaderStyle={{
            padding: "2rem 0",
            height: "5rem",
          }}
        >
          Yes, IBXP2P.com is a legitimate website that is registered and
          licensed in the country where it operates. However, as with any
          financial service, there are risks involved, and users should do their
          own research and exercise caution.
        </CustomAccordion>
        <CustomAccordion
          title="How do I create an account on IBXP2P.com?"
          isDefaultOpen={false}
          customHeaderStyle={{
            padding: "2rem 0",
            height: "5rem",
          }}
        >
          To create an account on IBXP2P.com, go to the website and click on the
          &quot;Register&quot; button. Follow the instructions to provide your
          personal information and create a username and password.
        </CustomAccordion>
      </div>
    </div>
  );
};

export default Faq;
