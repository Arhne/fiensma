import CustomAccordion from "@/common/components/CustomAccordion";

import styles from "./rates.module.scss";
import RatesTable from "@/common/components/RatesTable";

const Rates = () => {
  return (
    <div className={styles.RatesContainer}>
      <div className={styles.Header}>
        <h2>
          Track Multiple Currencies <br /> and{" "}
          <span className={styles.Exchange}>exchange</span> in Style
        </h2>
        <p className={styles.HeaderText}>
          Ibxp2p exchange gives you the opportunity to transact quickly <br />{" "}
          and easily with any currencies i the world.
        </p>
        <button className={styles.ActionButton}>Get the App</button>
      </div>
      <div className={styles.ExchangeRates}>
        <h3>Exchange Rates</h3>
        <p className={styles.HeaderText}>
          Our team of credible professionals with proven records of running{" "}
          <br />
          successful businesses across digital channels
        </p>

        <CustomAccordion title="NGN Exchange Rate 24/08/2023">
          <RatesTable />
        </CustomAccordion>
        <CustomAccordion title="NGN Exchange Rate 24/08/2023">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque,
          recusandae hic obcaecati quam harum assumenda quidem corporis.
          Voluptatem quae at asperiores ea veniam rerum earum, quod sapiente ex
          odio.
        </CustomAccordion>
        <CustomAccordion title="NGN Exchange Rate 24/08/2023">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque,
          recusandae hic obcaecati quam harum assumenda quidem corporis.
          Voluptatem quae at asperiores ea veniam rerum earum, quod sapiente ex
          odio.
        </CustomAccordion>
      </div>
    </div>
  );
};

export default Rates;
