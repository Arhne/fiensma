"use client";

import { useState } from "react";
import styles from "./Careers.module.scss";
import JobCard from "./Components/JobCard";

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState("all");
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
      <div className={styles.JobContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_item, indx) => (
          <JobCard key={indx} />
        ))}
      </div>
    </main>
  );
};

export default Careers;
