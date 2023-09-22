import { IJob } from "@/redux/services/jobApi/interface";
import { useRouter } from "next/navigation";

import styles from "./JobCard.module.scss";

interface IJobCard {
  data: IJob;
}

const JobCard = ({ data }: IJobCard) => {
  const router = useRouter();

  return (
    <div className={styles.JobCardContainer}>
      <span className={styles.CategoryTag}>{data?.category}</span>
      <div className={styles.TitleActionContainer}>
        <h6 className={styles.Title}>{data?.title}</h6>
        <span
          className={styles.Apply}
          onClick={() => router.push(`/careers/${data._id}`)}
        >
          Apply
        </span>
      </div>
      <p>We&apos;re looking for an expert ui/ux designer to join our team.</p>
      <div className={styles.TypeContainer}>
        <span className={styles.JobType}>{data?.location}</span>
        <span className={styles.ContractType}>{data?.schedule}</span>
      </div>
    </div>
  );
};

export default JobCard;
