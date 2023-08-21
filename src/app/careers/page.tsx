import styles from "./Careers.module.scss";

const Careers = () => {
  return (
    <main>
      <div className={styles.Landing}>
        <h1 className={styles.HeaderText}>Be part of our Mission</h1>
        <button className={styles.ActionButton}>Join Our Team</button>
      </div>
    </main>
  );
};

export default Careers;
