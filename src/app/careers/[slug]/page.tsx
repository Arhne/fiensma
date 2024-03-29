import dynamic from "next/dynamic";

const JobContainer = dynamic(() => import("../[slug]/JobContainer"), {
  ssr: false,
});

const JobApplication = dynamic(() => import("./JobApplication"), {
  ssr: false,
});

import styles from "./Job.module.scss";

export async function generateStaticParams() {
  const jobs = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/api/v1/jobs`
  ).then((res) => res.json());

  return jobs?.data.map((_job: any) => {
    return {
      slug: _job?.slug,
    };
  });
}

async function getData(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/api/v1/jobs/get-job-by-slug/${slug}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const job = await getData(params?.slug);

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
      <JobContainer job={job} />

      <JobApplication jobId={params?.slug} />
    </main>
  );
};

export default Page;
