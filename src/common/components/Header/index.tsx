import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <img src="/logo.svg" />
      <div className={styles.Menus}>
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
