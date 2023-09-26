import { useState } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.LogoHamburger}>
        <Image
          src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418208/ibx-website-v2/logo_cz22mb.svg"
          width={57}
          height={38}
          alt=""
          className={styles.Logo}
          onClick={() => router.push("/")}
        />

        <Image
          src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/hamburger_wdp6ft.svg"
          width={24}
          height={24}
          alt=""
          className={styles.Hamburger}
          onClick={() => setIsOpenMobileMenu((prev) => !prev)}
        />
      </div>

      <div
        className={`${styles.Menus} ${isOpenMobileMenu && styles.Responsive}`}
      >
        <ul>
          <li>
            <Link
              className={`${styles.NavLink} ${
                pathname === "/" && styles.Active
              }`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.NavLink} ${
                pathname === "/about" && styles.Active
              }`}
              href={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.NavLink} ${
                pathname === "/rates" && styles.Active
              }`}
              href={"/rates"}
            >
              Rates
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.NavLink} ${
                pathname === "/careers" && styles.Active
              }`}
              href={"/careers"}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.NavLink} ${
                pathname === "/contactus" && styles.Active
              }`}
              href={"/contactus"}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className={styles.TryItButton}>Try for Free</button>
      </div>
    </div>
  );
};

export default Header;
