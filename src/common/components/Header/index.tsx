import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
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
          <li>Home</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <button className={styles.TryItButton}>Try for Free</button>
      </div>
    </div>
  );
};

export default Header;
