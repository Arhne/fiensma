"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetSingleJobsQuery } from "@/redux/services/jobApi";

import styles from "./Job.module.scss";

const Page = () => {
  const params = useParams();
  const jobId = params?.job as string;

  const { data: job } = useGetSingleJobsQuery(jobId);

  useEffect(() => {
    if (job) {
      if (window) {
        const element = window.document.getElementById(
          "job-container"
        ) as HTMLElement;

        element?.insertAdjacentHTML("afterbegin", job?.data?.description);
      }
    }
  }, [job]);

  return (
    <main className={styles.JobsContainer}>
      <div className={styles.Landing}>
        <h1 className={styles.HeaderText}>{job && job?.data?.role}</h1>
        <p className="text-center">{job && job?.data?.location}</p>
      </div>

      <div className={styles.TypeContainer}>
        <span className={styles.CategoryTag}>{job && job?.data?.category}</span>
        <span className={styles.JobType}>{job && job?.data?.location}</span>
        <span className={styles.ContractType}>
          {job && job?.data?.schedule}
        </span>
      </div>
      <div className={styles.JobContainer} id="job-container"></div>
    </main>
  );
};

export default Page;
