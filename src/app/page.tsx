"use client";

import Image from "next/image";

import { moneyImageLoader } from "@/common/Utils/imageLoaders";

import styles from "./page.module.scss";
import ClientTestimonial from "@/common/components/Landing/ClientTestimonial";
import OurTeam from "@/common/components/Landing/OurTeam/OurTeam";

export default function Home() {
  return (
    <main>
      <div className={`row ${styles.Landing}`}>
        <div
          className={`col-sm-12 col-xs-12 col-lg-7  ${styles.LandingLeftContainer}`}
        >
          <h1 className={styles.HeaderText}>Currency Exchange Made Easy</h1>
          <p className={styles.TagLine}>
            Easy and instant way to buy or sell your currency <br />
            with 100% trust guarantee{" "}
          </p>
          <div className={styles.MobileStore}>
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418195/ibx-website-v2/google_play_rm0r2b.svg"
              alt=""
              width={213}
              height={64}
              className={styles.GoogleStore}
            />

            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/apple_store_fgtmpg.svg"
              width={213}
              height={64}
              alt=""
              className={styles.AppStore}
            />
          </div>
        </div>
      </div>
      <div className={styles.Companies}>
        <div className={styles.TextContainer}>
          <p className={styles.BoldText}>
            Companies <br /> That Trust Us
          </p>
          <p className={styles.CommonText}>
            More than 45,000+ companies trust IBX
          </p>
        </div>
        <div className={`row ${styles.PartnerCompanies}`}>
          <div className="col-6">
            <ul>
              <li>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418218/ibx-website-v2/slack_et8vic.svg"
                  width={150}
                  height={60.959}
                  alt=""
                />
              </li>
              <li>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418206/ibx-website-v2/paypal_dphrwm.svg"
                  width={143}
                  height={48}
                  alt=""
                />
              </li>
              <li>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/adobe_thftlk.svg"
                  width={133}
                  height={48}
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418245/ibx-website-v2/youtube_e9gmem.svg"
                  width={150}
                  height={45.813}
                  alt=""
                />
              </li>
              <li>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418204/ibx-website-v2/microsoft_rpniif.svg"
                  width={164}
                  height={48}
                  alt=""
                />
              </li>
              <li>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/google_ox9wco.svg"
                  width={113}
                  height={48}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`row gx-5 ${styles.Features}`}>
        <div className="col-6">
          <h3>Gain more with IBX</h3>
          <p className={styles.LeftText}>
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.{" "}
          </p>
          <Image
            loader={() =>
              moneyImageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1691574412/ibx-website-v2/money_uulrjr.png"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691574412/ibx-website-v2/money_uulrjr.png"
            width={505}
            height={449}
            alt=""
          />
        </div>
        <div className="col-6">
          <div className="row mb-4">
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/feature_reliable_icon_jmu1il.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <p className={styles.Heading}>Reliable and Accurate</p>
              <p className={styles.Content}>
                We have access to real-time exchange rates for hundreds of
                currencies, we also provide accurate and current data.
              </p>
            </div>
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/feature_dollar_icon_alxtvq.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <p className={styles.Heading}>0% Charges</p>
              <p className={styles.Content}>
                Our exchange rate is excellent, and we take great satisfaction
                in being open and honest.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/feature_shield_icon_lczop6.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>

              <p className={styles.Heading}>Trust Guaranteed</p>
              <p className={styles.Content}>
                Our team of expert are on hand to help you safely navigate the
                international currency markets every step of the way.
              </p>
            </div>
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/feature_hour_icon_edqbct.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <p className={styles.Heading}>24/7 p2p ads</p>
              <p className={styles.Content}>
                New ads are placed every minute and this provides you unlimited
                offer in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`row gx-5 ${styles.Statistics}`}>
        <div className="col-7">
          <h3>
            We believe in the <br /> power of numbers
          </h3>
          <p className={styles.LeftText}>
            Every trade, every transaction, and every connection made on Ibx
            Exchange contributes to a growing ecosystem of empowered
            individuals, shaping the future of currency exchange. Join us on
            this journey of limitless possibilities.
          </p>
          <div className="row mb-4">
            <div className="col-6">
              <h2>235,000</h2>
              <p className={styles.StatTitle}>Mobile App Download</p>
            </div>
            <div className="col-6">
              <h2>$10m</h2>
              <p className={styles.StatTitle}>Contributors</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>50,000+</h2>
              <p className={styles.StatTitle}>Daily Users</p>
            </div>
            <div className="col-6">
              <h2>$10b</h2>
              <p className={styles.StatTitle}>Transaction volume per quarter</p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <Image
            loader={() =>
              moneyImageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692872973/ibx-website-v2/money_dollar_qbsefi.webp"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1692872973/ibx-website-v2/money_dollar_qbsefi.webp"
            width={505}
            height={543}
            alt=""
          />
        </div>
      </div>

      <div className={styles.Advert}>
        <h1 className={styles.HeaderText}>
          Join our 235,000+ <br /> mobile app users
        </h1>
        <p className={styles.AdvertText}>
          Scan QR code to download mobile app{" "}
        </p>
        <div className={styles.MobileStore}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691583936/ibx-website-v2/google_play_white_mzoobw.svg"
            alt=""
            width={180}
            height={54}
            className={styles.GoogleStore}
          />

          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691583936/ibx-website-v2/apple_store_white_frrda0.svg"
            width={183}
            height={54}
            alt=""
          />
        </div>
      </div>

      <ClientTestimonial />
      <OurTeam />
    </main>
  );
}
