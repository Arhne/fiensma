import { useSwiper } from "swiper/react";

import styles from "../../about.module.scss";

const SwiperButtonPrevious = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return (
    <button className={styles.PrevButton} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

export default SwiperButtonPrevious;
