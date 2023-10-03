"use client";

import { useState } from "react";

import JobCard from "./Components/JobCard";
import {
  useGetAllJobCategoriesQuery,
  useGetAllJobsQuery,
} from "@/redux/services/jobApi";
import { ExchangeRateLoader } from "../rates/components/loader";
import { TickerLoader } from "@/common/components/Landing/Ticker/components/loader";

import styles from "./Careers.module.scss";

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const paginate = {
    perPage: 10,
    currentPage: 1,
  };

  const {
    data: allJobs,
    isLoading,
    isError,
  } = useGetAllJobsQuery({
    ...paginate,
    category: activeCategory,
  });

  const {
    data: allJobCategories,
    isLoading: isLoadingCategories,
    isError: isCategoryError,
  } = useGetAllJobCategoriesQuery();

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
          return (
            <p className="text-center mt-5">
              {" "}
              No jobs available for this category
            </p>
          );
        }
      }
    }
  };

  const renderCategories = () => {
    if (isLoadingCategories) {
      return <TickerLoader />;
    } else if (!isLoadingCategories) {
      if (isCategoryError) {
        return (
          <p className="text-center mt-5">
            There was a problem fetching job categories
          </p>
        );
      } else {
        if (allJobCategories && allJobCategories.data.length > 0) {
          return (
            <>
              {allJobCategories?.data.map((_category, index) => (
                <button
                  key={index}
                  className={`${styles.CategoryButton} ${
                    activeCategory === _category.toLowerCase() && styles.Active
                  }`}
                  onClick={() => setActiveCategory(_category)}
                >
                  {_category}
                </button>
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
    <main className={styles.CareersContainer}>
      <div className={styles.Landing}>
        <h1 className={styles.HeaderText}>Be part of our Mission</h1>
        <button className={styles.ActionButton}>Join Our Team</button>
        <p>
          Our philosophy is simple — hire a team of diverse, passionate people{" "}
          <br />
          and foster a culture that empowers you to do you best work.
        </p>
      </div>
      <div className={styles.Categories}>{renderCategories()}</div>
      <div className={styles.JobContainer}>{renderJobs()}</div>
    </main>
  );
};

export default Careers;
