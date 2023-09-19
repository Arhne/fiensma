"use client";

import { useState } from "react";
import styles from "./Careers.module.scss";
import JobCard from "./Components/JobCard";
import { useGetAllJobsQuery } from "@/redux/services/jobApi";
import { ExchangeRateLoader } from "../rates/components/loader";

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const paginate = {
    perPage: 10,
    currentPage: 1,
  };

  const jobCategories = [
    {
      id: 99,
      name: "View all",
      identifier: "all",
    },
    {
      id: 1,
      name: "Development",
      identifier: "development",
    },
    {
      id: 2,
      name: "Marketing",
      identifier: "marketing",
    },
    {
      id: 3,
      name: "Design",
      identifier: "design",
    },
    {
      id: 4,
      name: "Management",
      identifier: "management",
    },
    {
      id: 5,
      name: "Operations",
      identifier: "operations",
    },
    {
      id: 6,
      name: "Finance",
      identifier: "finance",
    },
    {
      id: 7,
      name: "Customer Service",
      identifier: "customer-service",
    },
  ];

  const { data: allJobs, isLoading, isError } = useGetAllJobsQuery(paginate);

  const renderJobs = () => {
    if (isLoading) {
      return <ExchangeRateLoader />;
    } else if (!isLoading) {
      if (isError) {
        return (
          <p className="text-center mt-5">There was a problem fetching jobs</p>
        );
      } else {
        if (allJobs && allJobs.data.length > 0) {
          return (
            <>
              {allJobs?.data.map((_job, index) => (
                <JobCard data={_job} key={index} />
              ))}
            </>
          );
        } else {
          return <p className="text-center mt-5">No data available</p>;
        }
      }
    }
  };

  return (
    <main>
      <div className={styles.Landing}>
        <h1 className={styles.HeaderText}>Be part of our Mission</h1>
        <button className={styles.ActionButton}>Join Our Team</button>
        <p>
          Our philosophy is simple — hire a team of diverse, passionate people{" "}
          <br />
          and foster a culture that empowers you to do you best work.
        </p>
      </div>
      <div className={styles.Categories}>
        {jobCategories.map((_category) => (
          <button
            key={_category?.id}
            className={`${styles.CategoryButton} ${
              activeCategory === _category?.identifier && styles.Active
            }`}
            onClick={() => setActiveCategory(_category?.identifier)}
          >
            {_category?.name}
          </button>
        ))}
      </div>
      <div className={styles.JobContainer}>{renderJobs()}</div>
    </main>
  );
};

export default Careers;
