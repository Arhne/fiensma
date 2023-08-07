import { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const pathname = usePathname();

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.LogoHamburger}>
        <img src="/logo.svg" className={styles.Logo} />
        <img
          src="/hamburger.svg"
          className={`${styles.Hamburger}`}
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
