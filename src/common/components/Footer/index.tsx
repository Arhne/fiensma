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
        <p className={styles.Address}>
          No 90 Edeki Street, Dawaki Abuja Nigeria
        </p>
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
            <li>
              <a className={styles.MenuItem} href={"/"}>
                Home
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href={"/about"}>
                About
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href={"/careers"}>
                Careers
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href={"/contactus"}>
                Contact Us
              </a>
            </li>
          </ul>
          <ul className={styles.FooterMenus}>
            <li>
              {" "}
              <a className={styles.MenuItem} href={"/terms"}>
                Terms
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href="/#gettingstarted">
                How it works
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href={"/rates"}>
                Rates
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href="/about#ourteam">
                Our Team
              </a>
            </li>
          </ul>
          <ul className={styles.FooterMenus}>
            <li>
              {" "}
              <a
                className={styles.MenuItem}
                href="/#frequencly-asked-questions"
              >
                FAQs
              </a>
            </li>
            <li>
              {" "}
              <a className={styles.MenuItem} href="/contactus">
                Report a Bug
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.CopyRight}>
        &copy; 2023 Ibxp2p. - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
