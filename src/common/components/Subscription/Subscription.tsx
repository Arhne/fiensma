import CustomInput from "../Inputs";

import styles from "./Subscription.module.scss";

const Subscription = () => {
  return (
    <div className={`row ${styles.SubscriptionContainer}`}>
      <div className={`col-xs-12 col-sm-6 ${styles.LeftColumn}`}>
        <h6>
          Ready to stay <br /> Informed With Us?
        </h6>
      </div>
      <div className={`col-xs-12 col-sm-6 ${styles.RightColumn}`}>
        <p>
          Stay up to date with us now and be at the forefront of the latest
          developments, insights, and trends in cryptocurrency and fiat trading.
          Connect with us to access exclusive content, real-time market
          analyses, and valuable resources that empower your trading journey.
        </p>

        <div className={styles.ActionContainer}>
          <CustomInput
            isShowLabel={false}
            type="text"
            placeholder="Enter your email"
          />
          <button className={styles.ActionButton}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
