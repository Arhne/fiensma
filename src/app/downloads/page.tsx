"use client";
import Image from "next/image";

import Link from "next/link";

import styles from "./downloads.module.scss";

import { downloadOption } from "./data";
import Faq from "@/common/components/Landing/Faq";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Downloads = () => {
  return (
    <div className={styles.Downloads}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        showArrows={false}
        showStatus={false}
      >
        <section className={styles.MainContainer}>
          <div className={styles.DownloadsContainer}>
            <div className="md:text-center">
              <h1>Ibx for Mobile</h1>
              <p>
                Swift and secure trading experience with no hassle. Download the
                ibx mobile app on your app store or play store.
              </p>
              <div className={styles.DownloadBtnMobileCarousel}>
                <Link href={""}>
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708600502/Google_Play_plp6od.svg"
                    width={150}
                    height={48}
                    alt=""
                    className={styles.downloadBtnLink}
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708600502/App_Store_wla5wr.svg"
                    width={150}
                    height={48}
                    alt=""
                    className={styles.downloadBtnLink}
                  />
                </Link>
              </div>
              <div className={styles.AppPreview}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708586497/iPhone_15_Pro_Portrait_Right_Mockup_1_2_yrfckt.svg"
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
        <section className={styles.MainContainer}>
          <div className={styles.DownloadsContainer}>
            <div className={styles.SwiftExperience}>
              <h1 className={styles.title}>
                Use the Ibx desktop app for swift experience
              </h1>
              <p>
                Swift and secure trading experience with no hassle. Use the ibx
                desktop app for your windows and macOS.
              </p>
              <div className={styles.downloadBtn}>
                <Link href={""}>
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708578681/MacOS_Link_1_kqezbk.svg"
                    width={160}
                    height={48}
                    alt=""
                    className={styles.downloadBtnLink}
                  />
                </Link>
                <Link href={""} className={styles.Signup}>
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708578681/Windows_Link_1_dyx7rd.svg"
                    width={120}
                    height={48}
                    alt=""
                    className={styles.downloadBtnLink}
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
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
              width={140}
              height={140}
              alt=""
              className={styles.support}
            />
          </div>
        </section>
      </Carousel>
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
            className={`h-25 col col-lg-6 p-3 cursor-pointer`}
            alt={""}
          />
        ))}
        <div className={styles.DownloadsOptionSupport}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
            width={140}
            height={140}
            alt=""
            className={"d-none d-lg-block cursor-pointer"}
          />
        </div>
      </div>
      <div className={`pt-4 ${styles.Faqs}`}>
        <Faq />
      </div>
    </div>
  );
};

export default Downloads;
