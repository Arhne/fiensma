import { useFindActiveSetupQuery } from "@/redux/services/supportApi";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { data: activeQuery } = useFindActiveSetupQuery();

  return (
    <div className={`row ${styles.FooterContainer}`}>
      <div className="col-sm-6">
        <img
          src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418205/ibx-website-v2/logo_white_g81svy.svg"
          alt=""
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
            <a href="https://instagram.com/ibx__marketplace?igshid=MzRlODBiNWFlZA==">
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
            <a href="">
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
      <div className="col-sm-6">
        <div className="d-flex flex-row justify-content-between">
          <ul className={styles.FooterMenus}>
            <li>Home</li>
            <li>Resources</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
          <ul className={styles.FooterMenus}>
            <li>Terms</li>
            <li>How it works</li>
            <li>Our Deals</li>
            <li>Our Team</li>
          </ul>
          <ul className={styles.FooterMenus}>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Report a Bug</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
