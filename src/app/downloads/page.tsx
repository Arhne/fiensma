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
        swipeable={false}
        showArrows={false}
        interval={4000}
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
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.ibx&hl=en&gl=US"
                  }
                >
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708600502/Google_Play_plp6od.svg"
                    width={150}
                    height={48}
                    alt="google play download"
                    className={styles.downloadBtnLink}
                  />
                </Link>
                <Link href={"https://apps.apple.com/us/app/ibx/id6455785836"}>
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708600502/App_Store_wla5wr.svg"
                    width={150}
                    height={48}
                    alt="ios download"
                    className={styles.downloadBtnLink}
                  />
                </Link>
              </div>
              <div className={styles.AppPreview}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708586497/iPhone_15_Pro_Portrait_Right_Mockup_1_2_yrfckt.svg"
                  width={884}
                  height={500}
                  alt="ibx dashboard"
                  className={styles.IbxPreview}
                />
                <Link
                  className={styles.SupportMobile}
                  style={{ zIndex: 20 }}
                  href={"/contactus"}
                >
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
                    width={140}
                    height={140}
                    alt="ibx support"
                  />
                </Link>
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
                <Link href={"https://app.ibxp2p.com/"}>
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708578681/MacOS_Link_1_kqezbk.svg"
                    width={160}
                    height={48}
                    alt="login"
                    className={styles.downloadBtnLink}
                  />
                </Link>
                <Link
                  href={"https://app.ibxp2p.com/signup"}
                  className={styles.Signup}
                >
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708578681/Windows_Link_1_dyx7rd.svg"
                    width={120}
                    height={48}
                    alt="register"
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
                  alt="ibx dashboard"
                  className={styles.IbxPreview}
                />
              </div>
            </div>
            <Link className={styles.support} href={"/contactus"}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
                width={140}
                height={140}
                alt=""
              />
            </Link>
          </div>
        </section>
      </Carousel>
      <div className="d-flex justify-content-center">
        <div
          style={{ maxWidth: "75rem" }}
          className={`${styles.DownloadsOptionContainer} row p-3`}
        >
          {downloadOption.map(({ id, image, downloadSource }) => (
            <div
              key={id}
              className="col-12 col-lg-6 p-3 d-flex justify-content-center align-items-center"
            >
              <Link
                className={`${styles.DownloadOptionImage} cursor-pointer relative`}
                href={downloadSource}
              >
                <Image
                  src={image}
                  className={styles.DownloadsOptionImg}
                  alt=""
                  width={562}
                  height={597}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={`pt-4 ${styles.Faqs}`}>
        <Faq />
      </div>
    </div>
  );
};

export default Downloads;
