import moment from "moment";

import { policyData } from "./data";

import styles from "./terms.module.scss";

const Policy = ({}) => {
  const now = new Date();
  return (
    <main className={styles.TermsContainer}>
      <div className={styles.Landing}>
        <h1 className={styles.HeaderText}>Privacy Policy</h1>
      </div>
      <div className={styles.Content}>
        <small className={styles.Time}>
          {" "}
          {moment(now.toISOString()).format("MMMM Do YYYY, h:mm:ss a")}
        </small>

        <h6>Privacy Policy</h6>

        {policyData.map((_item, index) => (
          <div className={styles.TermsItem} key={index}>
            <p className={styles.Title}>
              {index + 1}. {_item?.title}
            </p>
            <p>{_item?.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Policy;
