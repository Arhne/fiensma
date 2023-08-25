import styles from "./Footer.module.scss";

const Footer = () => {
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
            <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/instagram_lwt3ga.svg" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418216/ibx-website-v2/twitter_odaotw.svg" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418193/ibx-website-v2/facebook_jjrxg2.svg" />
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
