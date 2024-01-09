import Image from "next/image";
import styles from "./AdvertSectionTwo.module.scss";
import Link from "next/link";
import { appUrl } from "@/common/data";

const AdvertSectionTwo = () => {
  return (
    <div className={styles.AdvertContainer}>
      <h3 className={styles.HeadText}>Fastest means of exchange</h3>
      <p className={styles.Text}>
        Experience lightning-fast transactions with <br />
        Ibx Exchange, where speed meets security <br /> for seamless trading.
      </p>

      <div className={styles.MobileStore}>
        <Link href={appUrl.android} target="_blank">
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418195/ibx-website-v2/google_play_rm0r2b.svg"
            alt=""
            width={213}
            height={64}
            className={styles.GoogleStore}
          />
        </Link>

        <Link href={appUrl.apple} target="_blank">
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418194/ibx-website-v2/apple_store_fgtmpg.svg"
            width={213}
            height={64}
            alt=""
            className={styles.AppStore}
          />
        </Link>
      </div>
    </div>
  );
};

export default AdvertSectionTwo;
