import Image from "next/image";
import styles from "./services.module.scss";

const Services = () => {
  return (
    <div className={styles.ServicesContainer}>
      <h4 className={styles.Question}>What we do</h4>
      <p className={styles.Content}>
        Discover why our platform is your ideal choice for fiat currency
        exchange and financial solutions
      </p>

      <div className={`row gx-5 ${styles.Services}`}>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className={styles.FlowContainer}>
            <ul className={styles.Flow}>
              <li className={`${styles.FlowItem} ${styles.One}`}>
                <p className={styles.FlowContent}>
                  Keep up-to-date with the latest Naira exchange rates.
                </p>
              </li>
              <li className={`${styles.FlowItem} ${styles.Two}`}>
                <p className={styles.FlowContent}>
                  Engage in peer-to-peer transactions for the buying and selling
                  of Naira and various global fiat currencies.
                </p>
              </li>
              <li className={`${styles.FlowItem} ${styles.Three}`}>
                <p className={styles.FlowContent}>
                  Stay updated on the latest forex market trends.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Image
            src="/what_we_do.svg"
            alt=""
            width={608}
            height={413}
            className={styles.RightImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
