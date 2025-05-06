import { useRouter } from "next/navigation";
import { useFindActiveSetupQuery } from "@/redux/services/supportApi";

import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  const { data: activeQuery } = useFindActiveSetupQuery();

  const router = useRouter();

  return (
    <div className={`row gx-0 ${styles.FooterContainer}`}>
      <div className="col-sm-6">
        <Image
          src="/logocolored.svg"
          alt=""
          onClick={() => router.push("/")}
          width={100}
          height={100}
        />
        <p className={styles.Address}>
          Jumbo Plaza Road, Opposite D Division Police Station<br/>Itam, Uyo, Akwa-Ibom State
        </p>
        
        {/* <p>Follow us</p>
        <ul className={styles.SocialIcons}>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.youtube}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043081/ibx-website-v2/youtube_szam7l.svg"
                alt=""
                width={28}
                height={28}
              />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.instagram}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/instagram_lwt3ga.svg"
                alt=""
                width={28}
                height={28}
              />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.twitter}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043080/ibx-website-v2/twitter_guf4bl.svg"
                alt=""
                width={28}
                height={28}
              />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.facebook}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043303/ibx-website-v2/ic_baseline-facebook_otzeuz.svg"
                alt=""
                width={28}
                height={28}
              />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.linkedin}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043080/ibx-website-v2/linkedin_ac5uvc.svg"
                alt=""
                width={28}
                height={28}
              />
            </a>
          </li>
          <li>
            <a href={activeQuery && activeQuery?.data?.socialLinks?.tiktok}>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695043079/ibx-website-v2/ic_baseline-tiktok_pz6rmy.svg"
                alt=""
                width={28}
                height={28}
              />
            </a>
          </li>
        </ul> */}
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
              <a className={styles.MenuItem} href={"/#about"}>
                About
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
              <a className={styles.MenuItem} href={"#"}>
                Privacy Policy
              </a>
            </li>
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
        &copy; 2022 FIENSMA SERVICES (RN:6965508 ) - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
