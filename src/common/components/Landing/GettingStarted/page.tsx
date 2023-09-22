import Image from "next/image";
import styles from "./GettingStarted.module.scss";

const GettingStarted = () => {
  return (
    <div className={`row gx-3 ${styles.Features}`}>
      <div className="col-xs-12 col-sm-12 col-md-6">
        <Image
          src="/iphone.svg"
          width={423}
          height={858}
          className={styles.LeftImage}
          alt=""
        />
      </div>
      <div className={`col-xs-12 col-sm-12 col-md-6 ${styles.RightColumn}`}>
        <h3>
          Get Started In <br /> Just Few Steps.
        </h3>
        <p className={styles.HeaderText}>
          Start your trading experience with us.
        </p>

        <div className={styles.FlowContainer}>
          <ul className={styles.Flow}>
            <li className={styles.FlowItem}>
              <p className={styles.Title}>Create an Account</p>
              <p className={styles.FlowContent}>
                Register an account with your name, email and phone number.
              </p>
            </li>
            <li className={styles.FlowItem}>
              <p className={styles.Title}>Perform your KYC</p>
              <p className={styles.FlowContent}>
                With your identification details and personal information apply
                for a kyc and get verified.
              </p>
            </li>
            <li className={styles.FlowItem}>
              <p className={styles.Title}>Start Trading</p>
              <p className={styles.FlowContent}>
                Once verified, start your easy trading experience and earn in
                style.
              </p>
            </li>
          </ul>
          {/* <div className={styles.Flow}>
            <div className={styles.FlowItem}>
              <p className={styles.Title}>Create an Account</p>
              <p className={styles.FlowContent}>
                Register an account with your name, email and phone number.
              </p>
            </div>

            <div className={styles.FlowItem}>
              <p className={styles.Title}>Perform your KYC</p>
              <p className={styles.FlowContent}>
                With your identification details and personal information apply
                for a kyc and get verified.
              </p>
            </div>

            <div className={styles.FlowItem}>
              <p className={styles.Title}>Start Trading</p>
              <p className={styles.FlowContent}>
                Once verified, start your easy trading experience and earn in
                style.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
