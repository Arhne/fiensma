import Image from "next/image";

import slackIcon from "../../public/slack.svg";
import paypalIcon from "../../public/paypal.svg";
import adobeIcon from "../../public/adobe.svg";
import youtubeIcon from "../../public/youtube.svg";
import microsoftIcon from "../../public/microsoft.svg";
import googleIcon from "../../public/google.svg";
import moneyImage from "../../public/money.svg";

import reliableIcon from "../../public/feature_reliable_icon.svg";
import dollarIcon from "../../public/feature_dollar_icon.svg";
import shieldIcon from "../../public/feature_shield_icon.svg";
import hourIcon from "../../public/feature_hour_icon.svg";

import googlePlayStoreIcon from "../../public/google_play.svg";
import appleStoreIcon from "../../public/apple_store.svg";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div className={`row ${styles.Landing}`}>
        <div className={`col-sm-7 ${styles.LandingLeftContainer}`}>
          <h1 className={styles.HeaderText}>Currency Exchange Made Easy</h1>
          <p className={styles.TagLine}>
            Easy and instant way to buy or sell your currency <br />
            with 100% trust guarantee{" "}
          </p>
          <div className={styles.MobileStore}>
            <Image
              src={googlePlayStoreIcon}
              alt=""
              className={styles.GoogleStore}
            />
            <Image src={appleStoreIcon} alt="" />
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
                <Image src={slackIcon} alt="" />
              </li>
              <li>
                <Image src={paypalIcon} alt="" />
              </li>
              <li>
                <Image src={adobeIcon} alt="" />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <Image src={youtubeIcon} alt="" />
              </li>
              <li>
                <Image src={microsoftIcon} alt="" />
              </li>
              <li>
                <Image src={googleIcon} alt="" />
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
          <Image src={moneyImage} alt="" />
        </div>
        <div className="col-6">
          <div className="row mb-4">
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image src={reliableIcon} alt="" />
              </div>
              <p className={styles.Heading}>Reliable and Accurate</p>
              <p className={styles.Content}>
                We have access to real-time exchange rates for hundreds of
                currencies, we also provide accurate and current data.
              </p>
            </div>
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image src={dollarIcon} alt="" />
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
                <Image src={shieldIcon} alt="" />
              </div>

              <p className={styles.Heading}>Trust Guaranteed</p>
              <p className={styles.Content}>
                Our team of expert are on hand to help you safely navigate the
                international currency markets every step of the way.
              </p>
            </div>
            <div className="col-6">
              <div className={styles.IconContainer}>
                <Image src={hourIcon} alt="" />
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
    </main>
  );
}
