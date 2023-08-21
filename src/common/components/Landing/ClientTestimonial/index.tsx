import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./ClientTestimonial.module.scss";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import { moneyImageLoader } from "@/common/Utils/imageLoaders";
import SwiperButtonNext from "./SliderButtons/Next";
import SwiperButtonPrevious from "./SliderButtons/Prev";

const ClientTestimonial = () => {
  const _slides = [
    {
      id: 1,
      imageSrc:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692537582/ibx-website-v2/carousel-images/testifier_1_oyjwt4.webp",
      title: "Alex T",
      content: `I've been impressed with Ibx Exchange's commitment to security. The trust guarantee gives me confidence in every transaction, and the platform's reliability is unmatched. Their accurate data and user-friendly interface have made trading a breeze." - Alex T.`,
    },
    {
      id: 2,
      imageSrc:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692535820/ibx-website-v2/carousel-images/testifier_5_ufidpu.webp",
      title: "Jordn O'Reilly",
      content:
        "I like that IBX uses user feedback to improve their processes. It is very impressive.",
    },
    {
      id: 3,
      imageSrc:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692535819/ibx-website-v2/carousel-images/testifier_2_t7gevb.webp",
      title: "Lawson Carol",
      content:
        "The human interaction aspect of IBX is the most intriguing. Even if this is your first time trading, the team is always great and doesn't make you feel alone. I love it!",
    },
    {
      id: 4,
      imageSrc:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692535819/ibx-website-v2/carousel-images/testifier_3_ypgpkj.webp",
      title: "Sarah Mekka",
      content: `"Ibx Exchange has transformed the way I trade currencies. The 24/7 P2P ads feature makes it incredibly convenient, and their trust guarantee truly puts my mind at ease. Plus, with zero charges, I can maximize my profits. I've found a reliable partner in Ibx Exchange." - Sarah M.`,
    },
    {
      id: 5,
      imageSrc:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692535820/ibx-website-v2/carousel-images/testifier_4_sdcp8r.webp",
      title: "Emily S",
      content: `"Ibx Exchange has redefined my trading experience. The trust guarantee and secure environment have built a sense of community and trust among traders. With their accurate data and commitment to transparency, I know I'm in safe hands." - Emily S.`,
    },
  ];

  return (
    <div className={styles.ClientTestimonialContainer}>
      <h3 className={styles.HeaderText}>What Our Client Said about us</h3>
      <p className={styles.Description}>
        Explore Testimonials from Our Valued Clients.
      </p>
      <div className={styles.CarouselContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          slidesPerView={3}
          spaceBetween={30}
        >
          <SwiperButtonNext>Next</SwiperButtonNext>
          <SwiperButtonPrevious>Previous</SwiperButtonPrevious>
          {_slides.map((_slide) => (
            <SwiperSlide key={_slide?.id} className={styles.Slide}>
              {({ isActive }) => (
                <div
                  className={`${styles.SlideItem} ${
                    isActive && styles.ActiveSwiper
                  }`}
                >
                  <div className={styles.HeaderContainer}>
                    <Image
                      loader={() => moneyImageLoader(_slide.imageSrc)}
                      width={85}
                      height={85}
                      src={_slide.imageSrc}
                      alt=""
                    />
                    <div className={styles.Header}>
                      <h6>{_slide.title}</h6>
                      <small>CEO youtube</small>
                    </div>
                  </div>
                  <div className={styles.Content}>{_slide.content}</div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientTestimonial;
