"use client";

import Image from "next/image";

import { imageLoader } from "@/common/Utils/imageLoaders";
import ClientTestimonial from "@/common/components/Landing/ClientTestimonial";
import Faq from "@/common/components/Landing/Faq";
import AdvertSectionTwo from "@/common/components/Landing/AdvertSectionTwo";
import Ticker from "@/common/components/Landing/Ticker";
import GettingStarted from "@/common/components/Landing/GettingStarted/page";

import styles from "./page.module.scss";
import Services from "@/common/components/Landing/Services";

export default function Home() {
  return (
    <main>
      <div className={`row ${styles.Landing}`}>
        <div
          className={`col-sm-12 col-xs-12 col-lg-7  ${styles.LandingLeftContainer}`}
        >
          <h1 className={styles.HeaderText}>P2P Currency Exchange Made Easy</h1>
          <p className={styles.TagLine}>
            Welcome to Ibx Exchange - Your trusted marketplace for <br />{" "}
            peer-to-peer fiat currency exchange.
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
      <Ticker />
      <Services />
      <div className={`row gx-5 ${styles.Features}`}>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <h3>Gain More With Ibx</h3>
          <p className={styles.LeftText}>
            Ibx Exchange is your premier destination for peer-to-peer fiat
            exchange. Discover a seamless platform for exchanging your local and
            foreign currencies directly to your bank account. Explore our
            user-friendly interface, 24/7 support and robust security measures,
            well designed to ensure you have a pleasant experience.
          </p>
          <Image
            loader={() =>
              imageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1691574412/ibx-website-v2/money_uulrjr.png"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691574412/ibx-website-v2/money_uulrjr.png"
            width={505}
            height={449}
            className={styles.LeftImage}
            alt=""
          />
        </div>
        <div className={`col-xs-12 col-sm-12 col-md-6 ${styles.RightColumn}`}>
          <div className="row mb-4">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
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
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
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
                Enjoy fee-free trading with Ibx Exchange, where your profits
                stay yours and we keep your costs at zero.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
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
                Our team of experts is here to guide you safely through the
                global currency markets at every step of your journey.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className={styles.IconContainer}>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/feature_hour_icon_edqbct.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <p className={styles.Heading}>24/7 P2P transactions</p>
              <p className={styles.Content}>
                Experience round-the-clock access to our dynamic peer-to-peer
                transactions, empowering you to trade cryptocurrencies and fiat
                currencies at your convenience, any time, day or night.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`row gx-5 ${styles.Statistics}`}>
        <div className={`col-xs-12 col-sm-7 ${styles.LeftColumn}`}>
          <h3>We believe in the power of numbers</h3>
          <p className={styles.LeftText}>
            Every trade, every transaction, and every connection made on Ibx
            Exchange contributes to a growing ecosystem of empowered
            individuals, shaping the future of currency exchange. Join us on
            this journey of limitless possibilities.
          </p>
          <div className={`row ${styles.StatContainer}`}>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>235,000</h2>
              <p className={styles.StatTitle}>Mobile App Download</p>
            </div>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>2,000+</h2>
              <p className={styles.StatTitle}>Contributors</p>
            </div>
          </div>
          <div className={`row ${styles.StatContainer}`}>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>10,000+</h2>
              <p className={styles.StatTitle}>Daily Users</p>
            </div>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>$10,000</h2>
              <p className={styles.StatTitle}>Transaction volume per quarter</p>
            </div>
          </div>
        </div>
        <div className={`col-xs-12 col-sm-5 ${styles.RightColumn}`}>
          <Image
            loader={() =>
              imageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692872973/ibx-website-v2/money_dollar_qbsefi.webp"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1692872973/ibx-website-v2/money_dollar_qbsefi.webp"
            width={505}
            height={543}
            className={styles.RightImage}
            alt=""
          />
        </div>
      </div>
      <div className={styles.Advert}>
        <h1 className={styles.HeaderText}>
          Join our 235,000+ <br /> mobile app users
        </h1>
        {/* <p className={styles.AdvertText}>
          Scan QR code to download mobile app{" "}
        </p> */}
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
            className={styles.AppleStore}
          />
        </div>
      </div>
      <ClientTestimonial />
      <AdvertSectionTwo />
      <GettingStarted />
      <Faq />
      <div className={styles.Companies}>
        <div className={styles.TextContainer}>
          <p className={styles.BoldText}>
            Trusted by Top <br /> Companies
          </p>
          <p className={styles.CommonText}>
            More than 45,000+ companies trust Ibx
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
    </main>
  );
}
