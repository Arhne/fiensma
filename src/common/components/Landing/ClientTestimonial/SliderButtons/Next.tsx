import { useSwiper } from "swiper/react";

import { ISwiperButton } from "../interface";

import styles from "../ClientTestimonial.module.scss";

const SwiperButtonNext = ({ children }: ISwiperButton) => {
  const swiper = useSwiper();
  return (
    <button className={styles.NextButton} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

export default SwiperButtonNext;
