import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./ClientTestimonial.module.scss";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import { imageLoader } from "@/common/Utils/imageLoaders";
import SwiperButtonNext from "./SliderButtons/Next";
import SwiperButtonPrevious from "./SliderButtons/Prev";

const ClientTestimonial = () => {
  const _slides = [
    {
      id: 1,
      title: "John, Graduate",
      content: ` "Fiensma Services transformed my tech skills! I now use Excel and Word with confidence." - John, Graduate.`,
    },
    {
      id: 2,
    title: "Mrs Eno, Parent",
      content: `"My 8-year-old now understands computers better and loves the classes!" - Mrs Eno, Parent.`,
    },
    {
      id: 3,
      title: "Esther Ime, Student",
      content: `"Before joining Fiensma Services, I struggled with basic typing and using Word. Now, I can confidently create documents, spreadsheets, and even design simple presentations! The training was practical and easy to follow." - Esther Ime, Student`,
    },
    {
      id: 4,
    title: "Tunde E., Student",
      content: `"After completing my secondary education, I wanted to improve my digital skills. Fiensma Services helped me gain confidence in using Excel, Word, and PowerPoint, which gave me an edge in my university applications." - Tunde E., Student`,
    },
    {
      id: 5,
      title: "Dr. Chinyere O., Parent",
      content: `"My 10-year-old son can now use a computer better than I expected! He enjoys the lessons and even teaches me a few things. This program is perfect for kids." - Mrs. Chinyere O., Parent`,
    },
  ];

  return (
    <div className={styles.ClientTestimonialContainer}>
      <h3 className={styles.HeaderText}>
        Testimonials
      </h3>
      <div className={styles.CarouselContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <div className={styles.SwiperButtonContainer}>
            <SwiperButtonPrevious>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693404384/ibx-website-v2/icons/left_arrow_icon_dpdlxk.svg"
                width={47}
                height={47}
                alt=""
              />
            </SwiperButtonPrevious>
            <SwiperButtonNext>
              <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693404384/ibx-website-v2/icons/right_arrow_icon_adrnmh.svg"
                width={47}
                height={47}
                alt=""
              />
            </SwiperButtonNext>
          </div>

          {_slides.map((_slide) => (
            <SwiperSlide key={_slide?.id} className={styles.Slide}>
              {({ isActive }) => (
                <div
                  className={`${styles.SlideItem} ${
                    isActive && styles.ActiveSwiper
                  }`}
                >
                  
                  <div className={styles.Content}>{_slide.content}</div>
                  <div className={styles.HeaderContainer}>
                    <div className={styles.Header}>
                      <h6>{_slide.title}</h6>
                      
                    </div>
                  </div>
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
