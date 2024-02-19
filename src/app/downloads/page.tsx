"use client";
import Image from "next/image";

import Link from "next/link";

import styles from "./downloads.module.scss";

import { downloadOption } from "./data";
import Faq from "@/common/components/Landing/Faq";

const Downloads = () => {
  return (
    <>
      <section className={styles.MainContainer}>
        <div className={styles.DownloadsContainer}>
          <div className="lg:text-center">
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707919556/1_x4pf1n.svg"
              width={623}
              height={108}
              alt="coming soon"
              className={styles.DownloadsImage}
            />
            <h1>Download the Ibx desktop app for swift experience</h1>
            <p>
              Swift and secure trading experience with no hassle. Download the
              ibx desktop app for your windows and macOS.
            </p>
            <div className={styles.downloadBtn}>
              <Link href={""}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707918091/MacOS_Link_jihht4.svg"
                  width={295}
                  height={48}
                  alt=""
                  className=""
                />
              </Link>
              <Link href={""}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707918092/Windows_Link_zaaayu.svg"
                  width={295}
                  height={48}
                  alt=""
                />
              </Link>
            </div>
            <p className={styles.version}>Version : 2.24.120</p>
            <div className={styles.AppPreview}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707918084/Home_Verified_Merchant_oo2sng.svg"
                width={884}
                height={500}
                alt=""
                className={styles.IbxPreview}
              />
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
                width={140}
                height={140}
                alt=""
                className={styles.support}
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className={`${styles.DownloadsOptionContainer} row p-3`}
        style={{ maxWidth: "74.5rem", margin: "0 auto" }}
      >
        {downloadOption.map(({ id, image }) => (
          <Image
            src={image}
            key={id}
            width={569}
            height={530}
            className={`h-25 col col-lg-6 p-3`}
            alt={""}
          />
        ))}
        <div className={styles.DownloadsOptionSupport}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
            width={140}
            height={140}
            alt=""
            className={"d-none d-lg-block"}
          />
        </div>
      </div>
      <div className={`pt-4 ${styles.Faqs}`}>
        <Faq />
      </div>
    </>
  );
};

export default Downloads;
