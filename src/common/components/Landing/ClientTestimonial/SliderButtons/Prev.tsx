import { useSwiper } from "swiper/react";

import { ISwiperButton } from "../interface";

import styles from "../ClientTestimonial.module.scss";

const SwiperButtonPrevious = ({ children }: ISwiperButton) => {
  const swiper = useSwiper();
  return (
    <button className={styles.PrevButton} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

export default SwiperButtonPrevious;
