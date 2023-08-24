import styles from "./JobCard.module.scss";

const JobCard = () => {
  return (
    <div className={styles.JobCardContainer}>
      <span className={styles.CategoryTag}>Design</span>
      <div className={styles.TitleActionContainer}>
        <h6 className={styles.Title}>UI/UX Designer</h6>
        <span>Apply</span>
      </div>
      <p>We’re looking for an expert ui/ux designer to join our team.</p>
      <div className={styles.TypeContainer}>
        <span className={styles.JobType}>Remote Friendly</span>
        <span className={styles.ContractType}>Full-time</span>
      </div>
    </div>
  );
};

export default JobCard;
