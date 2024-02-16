"use client";
import Image from "next/image";

import Link from "next/link";

import styles from "./downloads.module.scss";

import { Controller, useForm } from "react-hook-form";
import { CustomInput } from "@/common/components/Inputs";
import { downloadOption, faqs } from "./data";

const Downloads = () => {
  const { control } = useForm({
    defaultValues: {
      email: "",
    },
  });

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
      <div className={styles.DownloadsOption}>
        {downloadOption.map(({ id, image }) => (
          <Image
            src={image}
            key={id}
            width={569}
            height={530}
            className=""
            alt={""}
          />
        ))}
        <Image
          src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1707920827/Intercom_Messenger_1_legqrn.svg"
          width={140}
          height={140}
          alt=""
          className={` ${styles.DownloadsOptionSupport} none`}
        />
      </div>
      <div className={`${styles.Faqs} d-flex`}>
        <aside>
          <div>
            <h3>Frequently Asked Questions</h3>
            <p>
              Find quick answers to common queries in our FAQs section, designed
              to address your most pressing questions and provide you with the
              information you need.
            </p>
          </div>
          <h5>Can’t find an answer?</h5>
          <form>
            <div className={styles.ActionContainer}>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({
                  field: { onChange, value },
                  formState: { errors },
                }) => {
                  const errorMessage = errors.email?.message;
                  return (
                    <CustomInput
                      isShowLabel={false}
                      customStyle={{ backgroundColor: "#fafafa" }}
                      type="email"
                      placeholder="Enter your email"
                      {...{ value, onChange, errors: [errorMessage] }}
                    />
                  );
                }}
              />

              <button className={styles.ActionButton}>Contact us</button>
            </div>
          </form>
        </aside>
        <div className="">
          {faqs.map(({ id, question, answer }) => (
            <div key={id}>
              <div className="d-flex align-items-center justify-content-xl-between ">
                {question}{" "}
                <p>
                  {" "}
                  <Image
                    src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1708076610/Subtract_l2dy3r.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </p>
              </div>
              <p className="border-bottom pb-4 fs-6">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Downloads;
