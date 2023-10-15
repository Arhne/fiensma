import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFindActiveSetupQuery } from "@/redux/services/supportApi";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { data: activeQuery } = useFindActiveSetupQuery();

  const router = useRouter();

  return (
    <div className={`row gx-0 ${styles.FooterContainer}`}>
      <div className="col-sm-6">
        <img
          src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418205/ibx-website-v2/logo_white_g81svy.svg"
          alt=""
          onClick={() => router.push("/")}
        />
        <p className={styles.Address}>Abuja, Nigeria</p>
        <p>Follow us</p>
        <ul className={styles.SocialIcons}>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.youtube}>
              <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043081/ibx-website-v2/youtube_szam7l.svg" />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.instagram}>
              <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/instagram_lwt3ga.svg" />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.twitter}>
              <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043080/ibx-website-v2/twitter_guf4bl.svg" />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.facebook}>
              <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043303/ibx-website-v2/ic_baseline-facebook_otzeuz.svg" />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.linkedin}>
              <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043080/ibx-website-v2/linkedin_ac5uvc.svg" />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.tiktok}>
              <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043079/ibx-website-v2/ic_baseline-tiktok_pz6rmy.svg" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className={`${styles.MenusContainer}`}>
          <ul className={styles.FooterMenus}>
            <li className={styles.MenuItem} onClick={() => router.replace("/")}>
              Home
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/about")}
            >
              About
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/careers")}
            >
              Careers
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace('"/contactus"')}
            >
              Contact Us
            </li>
          </ul>
          <ul className={styles.FooterMenus}>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/terms")}
            >
              Terms
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/#gettingstarted")}
            >
              How it works
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/rates")}
            >
              Rates
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/#ourteam")}
            >
              Our Team
            </li>
          </ul>
          <ul className={styles.FooterMenus}>
            <li
              onClick={() => router.replace("/#frequencly-asked-questions")}
              className={styles.MenuItem}
            >
              FAQs
            </li>
            <li
              className={styles.MenuItem}
              onClick={() => router.replace("/contactus")}
            >
              Report a Bug
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
