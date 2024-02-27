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
    <div
      className={
        pathname === "/downloads"
          ? styles.DownloadsHeaderContainer
          : styles.HeaderContainer
      }
    >
      <div className={styles.LogoHamburger}>
        <Image
          src={
            pathname === "/downloads"
              ? "https://res.cloudinary.com/dbg2z1svm/image/upload/v1709022304/Full_Primary_Logo_1_1_fmffjy.svg"
              : "https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418208/ibx-website-v2/logo_cz22mb.svg"
          }
          width={100}
          height={50}
          alt=""
          className={styles.Logo}
          onClick={() => router.push("/")}
        />

        <Image
          src={
            pathname == "/downloads"
              ? "https://res.cloudinary.com/dbg2z1svm/image/upload/v1708082210/Burger_menu_icon_fgs3tl.svg"
              : "https://res.cloudinary.com/dbg2z1svm/image/upload/v1691418196/ibx-website-v2/hamburger_wdp6ft.svg"
          }
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
              onClick={() => setIsOpenMobileMenu(false)}
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
              onClick={() => setIsOpenMobileMenu(false)}
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
              onClick={() => setIsOpenMobileMenu(false)}
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
              onClick={() => setIsOpenMobileMenu(false)}
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
              onClick={() => setIsOpenMobileMenu(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {pathname !== "/downloads" && (
          <Link href={"/downloads"}>
            <button
              className={
                pathname === "/downloads"
                  ? styles.DownloadsButton
                  : styles.TryItButton
              }
            >
              Try for Free
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
