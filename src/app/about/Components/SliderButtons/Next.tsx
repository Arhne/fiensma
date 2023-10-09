import { useSwiper } from "swiper/react";

import styles from "../../about.module.scss";

const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
  const swiper = useSwiper();
  return (
    <button className={styles.NextButton} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

export default SwiperButtonNext;
