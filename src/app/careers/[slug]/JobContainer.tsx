"use client";

import { useEffect } from "react";

import styles from "./Job.module.scss";

const JobContainer = ({ job }: any) => {
  useEffect(() => {
    if (job) {
      const element =
        window &&
        (window.document.getElementById("job-container") as HTMLElement);

      element?.insertAdjacentHTML("afterbegin", job?.data?.description);
    }
  }, [job]);
  return <div className={styles.JobContainer} id="job-container"></div>;
};

export default JobContainer;
